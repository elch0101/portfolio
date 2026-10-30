/* ------------------------------------------------------------------
   blobatar-hero.js — mounts the hero blobatar (https://blobatar.dev).

   ES module because the vendored blobatar dist is ESM. app.js stays a
   classic script; the two meet through window.mountBlobatar and the
   [data-blobatar] hook. Whichever loads second does the mount.

   Mirrors @blobatar/react's animated branch: the adapter owns the <svg>,
   _parts() supplies the root class, the seeded motion custom properties
   and the inner markup. On top of that:
     - gaze(): the eyes follow the pointer (vendor/blobatar/gaze.js + .css)
     - click: a short expression burst, then back to the configured pose
   ------------------------------------------------------------------ */
import { _parts } from '../vendor/blobatar/internal.js';
import * as expressions from '../vendor/blobatar/expression.js';
import { gaze } from '../vendor/blobatar/gaze.js';

const SVG_NS = 'http://www.w3.org/2000/svg';
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

// data.js declares CONFIG with top-level const; classic-script globals are
// visible to modules as bare identifiers, not as window properties.
const cfg = () => (typeof CONFIG !== 'undefined' && CONFIG.blobatar) || {};
const motionOff = () => reduced.matches;

let live = null; // { host, svg, g, gaze, timer }

function baseOpts(c) {
  return {
    traits: c.traits,
    palette: c.palette,
    animate: c.animate || 'hover'
  };
}

/* Write a fresh _parts() result onto the existing elements. Only the root
   class and the custom properties change, so transitions run and the idle
   loops keep their phase — same reason the React adapter splits it this way. */
function apply(svg, g, parts) {
  const style = svg.style;
  for (let i = style.length - 1; i >= 0; i--) {
    const name = style[i];
    if (name.startsWith('--mo-') && name !== '--mo-track-travel') style.removeProperty(name);
  }
  if (parts.vars) for (const k in parts.vars) style.setProperty(k, parts.vars[k]);
  g.setAttribute('class', parts.cls || '');
}

function setExpression(name) {
  if (!live) return;
  const c = cfg();
  const expression = expressions[name] || expressions.idle;
  apply(live.svg, live.g, _parts(c.name || 'blobatar', { ...baseOpts(c), expression }));
}

/* Click: pick one of the burst poses, hold it, return to the configured one. */
function burst() {
  if (!live) return;
  const c = cfg();
  const pool = (c.burst && c.burst.length ? c.burst : ['happy', 'surprised', 'wink', 'love', 'smug']).filter((n) => expressions[n]);
  if (!pool.length) return;
  let next = pool[Math.floor(Math.random() * pool.length)];
  if (pool.length > 1 && next === live.last) next = pool[(pool.indexOf(next) + 1) % pool.length];
  live.last = next;
  clearTimeout(live.timer);
  setExpression(next);
  live.timer = setTimeout(() => setExpression(c.expression), c.burstMs || 1400);
}

function teardown() {
  if (!live) return;
  clearTimeout(live.timer);
  if (live.gaze) { try { live.gaze.stop(); } catch (e) { /* already detached */ } }
  live = null;
}

function mount(host) {
  if (!host) return;
  if (live && live.host === host && host.isConnected) return;
  teardown();

  const c = cfg();
  const expression = expressions[c.expression] || expressions.idle;
  const parts = _parts(c.name || 'blobatar', { ...baseOpts(c), expression });

  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('viewBox', '0 0 100 100');
  svg.setAttribute('class', 'blobatar');
  svg.setAttribute('aria-hidden', 'true');
  if (parts.bg) {
    const p = document.createElementNS(SVG_NS, 'path');
    p.setAttribute('d', parts.bg.d);
    p.setAttribute('fill', parts.bg.fill);
    svg.appendChild(p);
  }
  const g = document.createElementNS(SVG_NS, 'g');
  g.innerHTML = parts.inner;
  svg.appendChild(g);
  apply(svg, g, parts);

  host.replaceChildren(svg);
  host.setAttribute('data-blobatar-mounted', '');
  live = { host, svg, g, gaze: null, timer: 0, last: null };

  // Eyes follow the cursor. The driver itself refuses to attach under
  // reduced motion or without a fine pointer; the travel is what opts in.
  if (!motionOff() && finePointer.matches) {
    const travel = c.gazeTravel == null ? 3 : c.gazeTravel;
    svg.style.setProperty('--mo-track-travel', travel + 'px');
    try { live.gaze = gaze(svg, { target: 'pointer' }); } catch (e) { live.gaze = null; }
  }

  // Click → short expression burst. Pointerdown so touch gets it too.
  host.addEventListener('pointerdown', (ev) => { if (ev.button === 0 || ev.pointerType !== 'mouse') burst(); });
}

function mountAll() {
  document.querySelectorAll('[data-blobatar]').forEach(mount);
}

window.mountBlobatar = mount;
mountAll();

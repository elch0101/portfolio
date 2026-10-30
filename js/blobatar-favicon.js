/* ------------------------------------------------------------------
   blobatar-favicon.js — the tab icon is the same blobatar, alive.

   blobatar's motion layer is CSS on inline SVG; a favicon is a bitmap. So
   this draws the figure on a small canvas — body marks + the two eyes from
   _posed(), the same geometry the hero renders — and re-points the PNG
   <link rel="icon"> at the canvas every frame. Breathe, bob, blink and a
   glance, on a clock seeded from the same traits so it feels like the
   same creature; an occasional expression, morphed with lerpPose.

   Off under prefers-reduced-motion (a single static frame is drawn
   instead, so the icon still matches the hero). Safari ignores dynamic
   favicons; it shows the static file.
   ------------------------------------------------------------------ */
import { _posed, _parts, lerpPose } from '../vendor/blobatar/internal.js';
import * as expressions from '../vendor/blobatar/expression.js';

const SIZE = 64;
const FPS = 12;
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const cfg = () => (typeof CONFIG !== 'undefined' && CONFIG.blobatar) || {};
const motionOff = () => reduced.matches;

const IDENT = { esx: 1, esy: 1, tilt: 0, edy: 0, edx: 0, esx2: 0, esy2: 0, tilt2: 0, edy2: 0, lock: 0, heat: 0, shake: 0, rock: 0, bdy: 0 };

function iconLink() {
  let link = document.querySelector('link[rel="icon"][data-live]');
  if (link) return link;
  // Replace the static icons with one live PNG link. Chrome picks the last
  // <link rel="icon">; leaving the SVG one in place would win over the canvas.
  document.querySelectorAll('link[rel="icon"]').forEach((l) => l.remove());
  link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/png';
  link.setAttribute('data-live', '');
  document.head.appendChild(link);
  return link;
}

function start() {
  const c = cfg();
  const opts = { traits: c.traits, palette: c.palette };
  const figure = _posed(c.name || 'blobatar', opts);
  const body = figure.marks.map((m) => (m.kind === 'path' ? { path: new Path2D(m.d), fill: m.fill } : m));
  const eyes = figure.eyes.map((m, i) => ({ path: new Path2D(m.d), fill: m.fill, frame: figure.eyeFrames[i] }));

  const canvas = document.createElement('canvas');
  canvas.width = SIZE; canvas.height = SIZE;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const link = iconLink();

  // Seeded clocks: the same motion vars the hero gets, so the two breathe alike.
  const mv = _parts(c.name || 'blobatar', { ...opts, animate: 'always' }).vars || {};
  const v = (k) => parseFloat(mv[k]) || 0;
  const seeds = { phase: -v('--mo-phase'), bob: -v('--mo-bob-phase'), blink: v('--mo-blink') || 4800, blinkPhase: -v('--mo-blink-phase'), saccade: v('--mo-saccade') || 5600, saccadePhase: -v('--mo-saccade-phase'), lookX: v('--mo-look-x') || 1.4, lookY: v('--mo-look-y') || 1.1 };
  const t0 = performance.now();
  let lastPng = '';
  let burst = null; // { pose, at, hold }

  const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
  const tri = (p) => (p < 0.5 ? p * 2 : 2 - p * 2); // 0→1→0 over one period

  function frame(now) {
    const t = now - t0;
    const amp = 1;

    // breathe: alternate 2.8s, bob: alternate 3.4s (same numbers as motion.css)
    const br = ease(tri(((t + seeds.phase) % 5600) / 5600));
    const sx = 1 + 0.022 * amp * br, sy = 1 - 0.018 * amp * br;
    const bob = -1.1 * amp * ease(tri(((t + seeds.bob) % 6800) / 6800));

    // blink: closed for ~120ms at the end of each blink period
    const bp = ((t + seeds.blinkPhase) % seeds.blink) / seeds.blink;
    let blink = 1;
    if (bp > 0.972) { const k = (bp - 0.972) / 0.028; blink = 1 - 0.92 * amp * Math.sin(k * Math.PI); }

    // glance: a piecewise look vector, like mo-saccade
    const sp = ((t + seeds.saccadePhase) % seeds.saccade) / seeds.saccade;
    let gx = 0, gy = 0;
    const steps = [[0.15, 0.31, -0.8, -0.9], [0.31, 0.47, 1, 0.1], [0.47, 0.63, -0.15, 0.85], [0.63, 0.79, 0.75, -0.8], [0.79, 0.985, -1, -0.15]];
    for (const [a, b, x, y] of steps) if (sp >= a && sp < b) { gx = x * seeds.lookX; gy = y * seeds.lookY; }

    // occasional expression burst (every ~9s, held 1.2s, morphed in/out)
    let pose = IDENT;
    if (!burst && Math.floor(t / 9000) !== Math.floor((t - 1000 / FPS) / 9000)) {
      const pool = ['happy', 'wink', 'surprised', 'thinking', 'smug'].filter((n) => expressions[n]);
      const e = expressions[pool[Math.floor(Math.random() * pool.length)]];
      if (e) burst = { pose: e.p, at: t, hold: 1200 };
    }
    if (burst) {
      const dt = t - burst.at;
      const k = dt < 300 ? dt / 300 : dt < 300 + burst.hold ? 1 : dt < 700 + burst.hold ? 1 - (dt - 300 - burst.hold) / 400 : -1;
      if (k < 0) burst = null; else pose = lerpPose(IDENT, burst.pose, ease(Math.max(0, Math.min(1, k))));
    }

    draw(sx, sy, bob, blink, gx, gy, pose);
    const png = canvas.toDataURL('image/png');
    if (png !== lastPng) { lastPng = png; link.href = png; }
  }

  function draw(sx, sy, bob, blink, gx, gy, pose) {
    ctx.clearRect(0, 0, SIZE, SIZE);
    ctx.save();
    ctx.scale(SIZE / 100, SIZE / 100);
    // breathe + bob around the viewBox centre, like .mo-breathe/.mo-bob
    ctx.translate(50, 50 + bob + pose.bdy); ctx.scale(sx, sy); ctx.translate(-50, -50);
    for (const m of body) {
      ctx.fillStyle = m.fill;
      if (m.path) ctx.fill(m.path);
      else { ctx.beginPath(); ctx.arc(m.cx, m.cy, m.r, 0, Math.PI * 2); ctx.fill(); }
    }
    // eyes: the poseTransforms recipe, plus glance translate and blink scaleY
    eyes.forEach((e, i) => {
      const f = e.frame, n = i ? 1 : -1, a = i ? 1 : 0;
      const ph = a * (1 - pose.rock) + pose.rock * ((1 + n) / 2);
      const rad = (d) => (d * Math.PI) / 180;
      ctx.save();
      ctx.translate(gx, gy);
      ctx.translate(f.cx + pose.edx * n, f.cy + pose.edy + ph * pose.edy2);
      ctx.rotate(rad((pose.tilt + a * pose.tilt2) * n + f.rot * (1 - pose.lock)));
      ctx.scale(pose.esx + a * pose.esx2, (pose.esy + a * pose.esy2) * blink);
      ctx.rotate(rad(-f.rot));
      ctx.translate(-f.cx, -f.cy);
      ctx.fillStyle = e.fill;
      ctx.fill(e.path);
      ctx.restore();
    });
    ctx.restore();
  }

  if (motionOff()) { frame(t0); return; }
  frame(t0);
  // setInterval rather than rAF: rAF never fires in a background tab, which is
  // exactly where a favicon is looked at. Browsers throttle this to ~1 Hz in
  // the background, which still blinks now and then.
  const id = setInterval(() => frame(performance.now()), 1000 / FPS);
  reduced.addEventListener('change', () => { if (reduced.matches) { clearInterval(id); frame(performance.now()); } });
}

if (document.readyState === 'complete') start();
else window.addEventListener('load', start, { once: true });

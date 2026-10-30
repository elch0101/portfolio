/* ------------------------------------------------------------------
   app.js — hash router, page templates, and the interaction layer.
   Content lives in data.js. Styles live in css/styles.css.
   No build step, no framework: open index.html and it runs.
   ------------------------------------------------------------------ */
(function () {
  'use strict';

  /* ---------- helpers ---------- */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  // Per-language number words live in the copy files (COPY.<lang>.numWords).
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  const numWord = (n) => L().numWords[n] || String(n);
  const ordinalWord = (n) => L().ordinals[n] || (n + L().ordinalSuffix);
  // '{key}' placeholders in copy strings are filled from vals()
  const fmt = (s, v) => String(s).replace(/\{(\w+)\}/g, (_, k) => (k in v ? v[k] : '{' + k + '}'));
  const t = (s, v) => esc(fmt(s, v));
  // [before, word, after] copy arrays -> before<span class=cls>word</span>after
  const accent = (parts, cls, v) => t(parts[0], v) + '<span class="' + cls + '">' + t(parts[1], v) + '</span>' + t(parts[2], v);
  function yearsSince(start) {
    const now = new Date();
    const months = (now.getFullYear() - start.y) * 12 + (now.getMonth() + 1 - start.m);
    return Math.max(0, Math.floor(months / 12));
  }

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const motionOff = () => reduced.matches;

  /* ---------- derived values (the "dynamic" bits) ---------- */
  function vals() {
    const pmYears = yearsSince(FACTS.pmStart);
    const productCount = L().studies.length;
    return {
      pmYearsWord: numWord(pmYears),
      pmYearsWordCap: cap(numWord(pmYears)),
      pmYearsPlus: pmYears + '+',
      careerStartYear: FACTS.careerStart.y,
      gradYear: FACTS.gradYear,
      productCountWord: numWord(productCount),
      productCountWordCap: cap(numWord(productCount)),
      nextProductOrdinal: ordinalWord(productCount + 1),
      stageCountWordCap: cap(numWord(L().stages.length))
    };
  }

  /* ---------- state ---------- */
  const state = { page: 'home', word: 0, lang: CONFIG.defaultLang };
  const app = $('#app');
  const nav = $('#nav');
  const L = () => COPY[state.lang];

  /* ---------- language ----------
     1. a choice the visitor made earlier (localStorage 'ec-lang')
     2. the first browser language whose prefix we have copy for
     3. CONFIG.defaultLang */
  const LANG_KEY = 'ec-lang';
  function preferredLang() {
    try { const s = localStorage.getItem(LANG_KEY); if (COPY[s]) return s; } catch (e) {}
    const langs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language];
    for (const l of langs) {
      const p = String(l || '').toLowerCase().slice(0, 2);
      if (COPY[p]) return p;
    }
    return CONFIG.defaultLang;
  }
  function applyLang(lang) {
    state.lang = COPY[lang] ? lang : CONFIG.defaultLang;
    document.documentElement.lang = L().htmlLang;
    const links = $('[data-navlinks]');
    if (links) links.innerHTML = tplNav();
    $$('[data-i18n]').forEach((el) => { el.textContent = L()[el.getAttribute('data-i18n')] || ''; });
    const badge = $('[data-badge]');
    if (badge) badge.textContent = L().nav.badge;
    if (nav) nav.setAttribute('aria-label', L().nav.primaryAria);
    const brand = $('.nav-brand'); if (brand) brand.setAttribute('aria-label', L().nav.brandAria);
    const burger = $('[data-burger]'); if (burger) burger.setAttribute('aria-label', L().nav.menuAria);
  }
  // Manual pick: remember it, re-render the same page in place, keep the scroll.
  function setLang(lang) {
    if (!COPY[lang] || lang === state.lang) { closeMenu(); return; }
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    const y = window.scrollY;
    closeMenu();
    applyLang(lang);
    render(state.page);
    window.scrollTo(0, y);
  }

  /* ================================================================
     Templates
     ================================================================ */
  const gridBg = (tone) => `<div class="grid-bg grid-bg--${tone}" aria-hidden="true"></div>`;
  const wedge = (kind) => `<div class="wedge wedge--${kind}" aria-hidden="true"><div class="stripe ${kind === 'paper' ? 'stripe--pink' : 'stripe--ink'}" data-stripe></div></div>`;
  const ring34 = (paper) => `<span class="ring ring--34${paper ? ' ring--paper' : ''}" aria-hidden="true"></span>`;

  function tplNav() {
    const c = L().nav;
    return c.items.map((n) =>
      `<button type="button" class="nav-link" data-go="${esc(n.key)}" data-navitem="${esc(n.key)}">${esc(n.label)}</button>`
    ).join('') +
    `<div class="nav-lang" role="group" aria-label="${esc(c.langAria)}">${Object.keys(COPY).map((k) =>
      `<button type="button" data-lang="${esc(k)}" title="${esc(c.langNames[k] || k)}" aria-label="${esc(c.langNames[k] || k)}" aria-pressed="${k === state.lang}">${esc(k.toUpperCase())}</button>`
    ).join('')}</div>` +
    `<a class="nav-cta" href="mailto:${esc(CONFIG.email)}" data-closemenu>${esc(c.cta)}</a>`;
  }


  function tplHome(v) {
    const c = L();
    const marqueeTrack = `<div class="marquee-track">${c.marquee.map((m) => `<span>${esc(m)}</span><span>·</span>`).join('')}</div>`;
    return `
    ${CONFIG.showMarquee ? `
    <div class="marquee-block" aria-hidden="true">
      <div class="marquee">${marqueeTrack}${marqueeTrack}</div>
    </div>` : ''}

    <section class="hero" aria-labelledby="hero-title">
      ${gridBg('20')}
      ${wedge('paper')}
      <div class="hero-inner">
        <div class="dial-wrap">
          <div class="orbit"><div class="orbit-ring" data-orbit="1"></div><div class="orbit-dot"></div></div>
          <div class="ring-outer"></div>
          <div class="ring-thick"></div>
          <div class="dialseg" data-dialseg><div class="dialseg-arc"></div></div>
          ${c.dial.map((d) => `
          <div class="dial" data-dial>
            <button type="button" class="dchip" data-dchip data-angle="${d.angle}" data-go="${esc(d.page)}" style="left:${d.x}; top:${d.y}">${esc(d.label)}</button>
          </div>`).join('')}
          <div class="mark mark--blobatar" data-blobatar></div>
        </div>
        <div class="hero-copy">
          <div class="eyebrow" data-reveal>${esc(c.hero.eyebrow)}</div>
          <h1 class="hero-h1" id="hero-title" data-reveal>${t(c.hero.h1[0], v)}<span class="hero-word" data-word>${esc(c.words[0])}</span>${t(c.hero.h1[1], v)}</h1>
          <p class="hero-p" data-reveal>${esc(c.hero.p)}</p>
          <div class="hero-actions" data-reveal>
            <button type="button" class="btn btn--primary" data-go="work">${esc(c.hero.see)}</button>
            <a class="btn btn--ghost" href="${esc(CONFIG.resume)}" target="_blank" rel="noopener">${esc(c.hero.download)}</a>
          </div>
        </div>
      </div>
    </section>

    ${CONFIG.showMetrics ? `
    <section class="metrics" aria-label="${esc(c.metricsAria)}">
      <div class="stripe stripe--pink" data-stripe aria-hidden="true"></div>
      <div class="metrics-inner">
        ${c.metrics.map((m) => `
        <div class="metric" data-reveal>
          <div class="metric-num${m.accent ? ' metric-num--accent' : ''}">${esc(m.prefix)}<span data-count="${m.count}">0</span>${esc(m.suffix)}</div>
          <div class="metric-label">${esc(m.label)}</div>
        </div>`).join('')}
      </div>
    </section>` : ''}

    <section class="work" data-anchor="work" aria-labelledby="work-title">
      ${gridBg('14')}
      <div class="work-inner">
        <div class="work-head" data-reveal>
          <h2 class="h2" id="work-title">${esc(c.work.h2)}</h2>
          <div class="work-meta">${t(c.work.meta, v)}</div>
        </div>
        <p class="lede work-lede" data-reveal>${esc(c.work.lede)}</p>
        <div class="work-grid">
          ${c.studies.map((s) => `
          <a class="card" href="#${esc(s.key)}" data-card data-reveal>
            <div class="card-top"><span>${esc(s.dates)}</span>${ring34(false)}</div>
            <img class="logo logo--card" src="assets/logos/${esc(s.key)}.svg" alt="">
            <div class="card-name">${esc(s.name)}</div>
            <div class="card-role">${esc(s.role)}</div>
            <div class="card-teaser">${esc(s.teaser)}</div>
            <div class="card-more">${esc(c.work.more)}</div>
          </a>`).join('')}
          <div class="filler" data-filler>
            <div class="stripe stripe--ink" data-stripe aria-hidden="true"></div>
            <div class="filler-top"><span>${esc(c.work.fillerKicker)}</span>${ring34(true)}</div>
            <div class="filler-title">${t(c.work.fillerTitle, v)}</div>
            <div class="filler-actions">
              <a class="filler-btn--ink" href="mailto:${esc(CONFIG.email)}">${esc(c.work.fillerCta)}</a>
              <a class="filler-btn--ghost" href="${esc(CONFIG.resume)}" target="_blank" rel="noopener">${esc(c.work.fillerResume)}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="exp" aria-labelledby="exp-title">
      <div class="exp-inner">
        <h2 class="h2" id="exp-title" data-reveal>${esc(c.exp.h2)}</h2>
        <p class="lede exp-lede" data-reveal>${t(c.exp.lede, v)}</p>
        <div class="timeline">
          ${c.timeline.map((tl) => `
          <div class="trow" data-trow data-reveal>
            <div class="tdate">${esc(tl.dates)}</div>
            <div class="trail">
              <div class="tseg"></div>
              <div class="tmark"><div class="tring"></div><div class="tdot"></div></div>
            </div>
            <div class="tbody">
              <div class="temployer">${esc(tl.employer)}</div>
              <div class="trole">${esc(tl.role)}</div>
              <div class="tnote">${esc(tl.note)}</div>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </section>

    <section class="toolkit" aria-labelledby="toolkit-title">
      ${gridBg('12')}
      <div class="deco deco--toolkit" aria-hidden="true">
        <div class="deco-outer"><div class="deco-outer-arc"></div></div>
        <div class="deco-inner"><div class="deco-inner-ring"></div><div class="deco-inner-dot"></div></div>
      </div>
      <div class="toolkit-inner">
        <div class="toolkit-copy">
          <div class="eyebrow eyebrow--fit" data-reveal>${esc(c.toolkit.eyebrow)}</div>
          <h2 class="toolkit-h2" id="toolkit-title" data-reveal>${accent(c.toolkit.h2, 'accent', v)}</h2>
          <div class="chips" data-stagger>
            ${c.tools.map((tool) => `
            <div class="chip" data-reveal>${tool.core ? '<span class="chip-dot" aria-hidden="true"></span>' : ''}<span>${esc(tool.name)}</span></div>`).join('')}
          </div>
          <div class="chips-legend" data-reveal><span class="chip-dot" aria-hidden="true"></span><span>${esc(c.toolkit.legend)}</span></div>
        </div>
        <div class="facts">
          <div class="fact" data-reveal>
            <div class="fact-label">${esc(c.toolkit.education)}</div>
            <div class="fact-big">${esc(c.toolkit.degree)}</div>
            <div class="fact-mono">${t(c.toolkit.school, v)}</div>
          </div>
          <div class="fact fact--languages" data-reveal>
            <div class="fact-label">${esc(c.toolkit.languages)}</div>
            ${c.toolkit.langRows.map((r) => `<div class="fact-line"><div class="fact-name">${esc(r.name)}</div><div class="fact-mono">${esc(r.level)}</div></div>`).join('')}
          </div>
          <div class="fact fact--row" data-reveal>
            <div class="fact-col">
              <div class="fact-label">${esc(c.toolkit.based)}</div>
              <div class="fact-name">${esc(c.toolkit.city)}</div>
            </div>
            <div class="pin" aria-hidden="true">
              <div class="pin-ping"></div><div class="pin-ping"></div><div class="pin-ping"></div>
              <div class="pin-spin"><span></span></div>
              <div class="pin-core"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact" aria-labelledby="contact-title">
      ${gridBg('16')}
      <div class="deco deco--contact" aria-hidden="true"><span></span></div>
      <div class="contact-inner">
        <div class="eyebrow eyebrow--fit" data-reveal>${esc(c.contact.eyebrow)}</div>
        <h2 class="contact-h2" id="contact-title" data-reveal>${accent(c.contact.h2, 'accent', v)}</h2>
        <div class="contact-links" data-reveal>
          <a href="mailto:${esc(CONFIG.email)}">${esc(CONFIG.email)}</a>
          <a href="${esc(CONFIG.linkedin)}" target="_blank" rel="noopener">${esc(c.contact.linkedin)}</a>
          <span>${esc(CONFIG.phone)}</span>
          <span>${esc(c.contact.city)}</span>
        </div>
      </div>
    </section>`;
  }

  function tplAbout(v) {
    const c = L().about;
    return `
    <div data-screen="about">
      <section class="about-hero" aria-labelledby="about-title">
        ${gridBg('18')}
        <div class="deco deco--about" aria-hidden="true">
          <div class="deco-outer"><div class="deco-outer-arc"></div></div>
          <div class="deco-inner"><div class="deco-inner-ring"></div><div class="deco-inner-dot"></div></div>
        </div>
        <div class="about-hero-inner">
          <div class="eyebrow eyebrow--fit" data-reveal>${esc(c.eyebrow)}</div>
          <h1 class="page-h1" id="about-title" data-reveal>${t(c.h1[0], v)}<span class="underline" data-underline>${t(c.h1[1], v)}<span class="ul" data-ul></span></span>${t(c.h1[2], v)}</h1>
          <p class="lede about-hero-lede" data-reveal>${t(c.lede, v)}</p>
        </div>
      </section>

      <section class="about-body">
        <div class="about-body-inner">
          <div class="about-prose" data-stagger>
            <p class="about-lead" data-reveal>${t(c.lead, v)}</p>
            ${c.prose.map((p) => `<p data-reveal>${t(p, v)}</p>`).join('')}
          </div>
          <div class="principles" data-stagger>
            ${c.principles.map((p) => `
            <div class="prow" data-reveal>
              <div class="pbar"></div>
              <div class="pnum-row"><div class="pnum">${esc(p.n)}</div><div class="mini-ring"></div></div>
              <div class="ptitle">${esc(p.title)}</div>
              <div class="pbody">${esc(p.body)}</div>
            </div>`).join('')}
          </div>
        </div>
      </section>

      <section class="about-outro">
        ${gridBg('12')}
        ${wedge('red')}
        <div class="about-outro-inner">
          <div class="kicker about-outro-kicker" data-reveal>${esc(c.outroKicker)}</div>
          <div class="about-outro-title" data-reveal>${esc(c.outroTitle)}</div>
          <button type="button" class="cta" data-go="work" data-reveal>
            <span>${esc(c.cta)}</span><span class="cta-ring" aria-hidden="true"></span>
          </button>
        </div>
      </section>
    </div>`;
  }

  function tplCase(study, next) {
    const c = L().caseUi;
    return `
    <div data-screen="case">
      <section class="case-hero" aria-labelledby="case-title">
        ${gridBg('18')}
        ${wedge('red')}
        <div class="case-hero-inner">
          <div class="case-nav">
            <button type="button" class="case-back" data-go="work">${esc(c.back)}</button>
            <button type="button" class="case-next" data-go="${esc(next.key)}">
              <span class="case-next-label">${esc(c.next)}</span>
              <span>${esc(next.name)}</span>
              <span class="ring ring--26" aria-hidden="true"></span>
            </button>
          </div>
          <div class="eyebrow eyebrow--fit">${esc(study.dates)}</div>
          <img class="logo logo--case" src="assets/logos/${esc(study.key)}.svg" alt="">
          <h1 class="case-h1" id="case-title">${esc(study.name)}</h1>
          <div class="case-meta"><span class="accent">${esc(study.role)}</span><span>${esc(study.url)}</span></div>
          <p class="case-context">${esc(study.context)}</p>
        </div>
      </section>

      <section class="outcomes" aria-label="${esc(c.outcomesAria)}">
        <div class="stripe stripe--pink stripe--slow" data-stripe aria-hidden="true"></div>
        <div class="outcomes-inner">
          ${study.outcomes.map((o) => `
          <div class="outcome" data-reveal>
            <div class="outcome-value">${esc(o.value)}</div>
            <div class="outcome-label">${esc(o.label)}</div>
          </div>`).join('')}
        </div>
      </section>

      <section class="chapters" aria-label="${esc(c.chaptersAria)}">
        <div class="chapters-inner">
          ${study.chapters.map((ch) => `
          <div class="crow" data-reveal>
            <div class="chead">
              <div class="cdate">${esc(ch.date)}</div>
              <div class="ctitle">${esc(ch.title)}</div>
            </div>
            <div class="crule">
              <p class="clead">${esc(ch.body[0])}</p>
              ${ch.body.slice(1).map((p) => `<p class="cp">${esc(p)}</p>`).join('')}
            </div>
          </div>`).join('')}
        </div>
      </section>

      <section class="case-foot">
        <div class="case-foot-inner">
          <button type="button" class="case-foot-back" data-go="work"><span>${esc(c.back)}</span></button>
          <div class="case-foot-label">${esc(c.next)}</div>
          <button type="button" class="case-foot-next" data-go="${esc(next.key)}">
            <span class="case-foot-name">${esc(next.name)}</span>
            <span class="ring ring--44" aria-hidden="true"></span>
          </button>
        </div>
      </section>
    </div>`;
  }

  function tplProcess(v) {
    const c = L().process;
    return `
    <div data-screen="process">
      <section class="proc-hero" aria-labelledby="proc-title">
        ${gridBg('18')}
        ${wedge('red')}
        <div class="pring-cluster" data-noprint aria-hidden="true">
          <div class="pring-outer"><span></span></div>
          <div class="pring-mid"><div class="pring-mid-ring"></div><div class="pring-mid-dot"></div></div>
          <div class="pring-core"></div>
        </div>
        <div class="proc-hero-inner">
          <div class="eyebrow eyebrow--fit" data-reveal>${esc(c.eyebrow)}</div>
          <h1 class="page-h1 proc-h1" id="proc-title" data-reveal>${accent(c.h1, 'accent', v)}</h1>
          <p class="lede proc-lede" data-reveal>${t(c.lede, v)}</p>
        </div>
      </section>

      <section class="track" aria-label="${esc(c.trackAria)}">
        <div class="track-inner">
          <div class="kicker track-kicker" data-reveal>${esc(c.trackKicker)}</div>
          <div class="stages" data-stagger>
            ${L().stages.map((st) => `
            <div class="stage" data-reveal>
              <div class="stage-line">
                <div class="stage-rail"></div>
                <div class="sfill" data-sfill data-auto></div>
                <div class="strav" data-strav></div>
                <div class="smark"><div class="sring"></div><div class="sdot"></div></div>
              </div>
              <div class="stage-body">
                <div class="stage-n">${esc(st.n)}</div>
                <div class="stage-title">${esc(st.title)}</div>
                <div class="stage-text">${esc(st.body)}</div>
                <div class="stage-out">${esc(st.out)}</div>
              </div>
            </div>`).join('')}
          </div>
        </div>
      </section>

      <section class="scoring" aria-labelledby="scoring-title">
        ${gridBg('12')}
        <div class="scoring-inner">
          <div class="scoring-copy">
            <div class="eyebrow eyebrow--fit" data-reveal>${esc(c.scoringEyebrow)}</div>
            <h2 class="scoring-h2" id="scoring-title" data-reveal>${esc(c.scoringH2)}</h2>
            <p class="scoring-p" data-reveal>${esc(c.scoringP)}</p>
            <div class="scoring-note" data-reveal>${esc(c.scoringNote)}</div>
          </div>
          <div class="criteria" data-stagger>
            ${L().criteria.map((cr) => `
            <div class="crit" data-reveal>
              <div class="crit-head">
                <div class="crit-name">${esc(cr.name)}</div>
                <div class="crit-pct"><span data-count="${cr.pct}">0</span>%</div>
              </div>
              <div class="cbar-track"><div class="cbar" data-cbar data-target="${cr.pct}"></div></div>
              <div class="crit-note">${esc(cr.note)}</div>
            </div>`).join('')}
          </div>
        </div>
      </section>

      <section class="rules" aria-labelledby="rules-title">
        <div class="rules-inner">
          <div class="rules-head" data-reveal>
            <div class="kicker rules-kicker">${esc(c.rulesKicker)}</div>
            <h2 class="rules-h2" id="rules-title">${esc(c.rulesH2)}</h2>
          </div>
          <div class="rules-grid" data-stagger>
            ${L().rules.map((r) => `
            <div class="rule" data-reveal>
              <div class="rbar"></div>
              <div class="rule-n-row"><div class="rule-n">${esc(r.n)}</div><div class="mini-ring"></div></div>
              <div class="rule-title">${esc(r.title)}</div>
              <div class="rule-body">${esc(r.body)}</div>
            </div>`).join('')}
          </div>
        </div>
      </section>
    </div>`;
  }

  function tplResume(v) {
    const c = L().resume;
    return `
    <div class="resume-page" data-screen="resume">
      <div class="resume-bar" data-noprint>
        ${gridBg('14')}
        <div class="resume-bar-inner">
          <div class="kicker resume-bar-label">${esc(c.barLabel)}</div>
          <button type="button" class="cta" data-print>
            <span>${esc(c.print)}</span><span class="cta-ring" aria-hidden="true"></span>
          </button>
        </div>
      </div>

      <div class="resume" data-resume>
        <header class="rhead" data-rsection>
          <div class="rhead-top">
            <div class="rhead-id">
              <div class="rname">Elias Cohen</div>
              <div class="rtitle">${esc(c.title)}</div>
            </div>
            <div class="rmark" aria-hidden="true"></div>
          </div>
          <div class="rcontact">
            <a href="mailto:${esc(CONFIG.email)}">${esc(CONFIG.email)}</a>
            <span>${esc(CONFIG.phone)}</span>
            <a href="${esc(CONFIG.linkedin)}" target="_blank" rel="noopener">${esc(c.linkedin)}</a>
            <span>${esc(c.city)}</span>
            <span>${esc(CONFIG.domain)}</span>
          </div>
        </header>

        <div class="rsection" data-rsection>
          <div class="rlabel">${esc(c.summaryLabel)}</div>
          <p class="rsummary">${t(c.summary, v)}</p>
        </div>

        <div class="rsection" data-rsection>
          <div class="rlabel">${esc(c.experienceLabel)}</div>
          <div class="rjobs">
            ${c.jobs.map((j) => `
            <div class="rjob">
              <div class="rjob-head">
                <div class="rjob-title">${esc(j.title)}</div>
                <div class="rjob-meta">${esc(j.meta)}</div>
              </div>
              <div class="rbullets">
                ${j.bullets.map((b) => `
                <div class="rbullet"><div class="rbullet-dot" aria-hidden="true"></div><div class="rbullet-text">${esc(b)}</div></div>`).join('')}
              </div>
            </div>`).join('')}
          </div>
        </div>

        <div class="rsection" data-rsection>
          <div class="rlabel">${esc(c.skillsLabel)}</div>
          <div class="rskills">${c.skills.map((s) => `<div class="rskill">${esc(s)}</div>`).join('')}</div>
        </div>

        <div class="rsection" data-rsection>
          <div class="rlabel">${esc(c.educationLabel)}</div>
          <div class="redu">
            <div class="redu-degree">${esc(c.degree)}</div>
            <div class="redu-mono">${t(c.school, v)}</div>
            <div class="redu-mono redu-mono--gap">${esc(c.languages)}</div>
          </div>
        </div>
      </div>

      <div class="resume-outro" data-noprint>
        ${gridBg('14')}
        <div class="resume-outro-inner">
          <div class="resume-outro-text">
            <div class="resume-outro-title">${accent(c.outroTitle, 'accent', v)}</div>
            <div class="kicker resume-outro-sub">${esc(c.outroSub)}</div>
          </div>
          <button type="button" class="cta" data-print>
            <span>${esc(c.print)}</span><span class="cta-ring" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </div>`;
  }

  function tplError(v) {
    const c = L().error;
    return `
    <div class="err" data-screen="404">
      ${gridBg('18')}
      <div class="deco deco--err" aria-hidden="true"></div>
      <div class="err-inner">
        <div class="eyebrow eyebrow--fit">${esc(c.eyebrow)}</div>
        <h1 class="err-h1">${accent(c.h1, 'accent', v)}</h1>
        <p class="err-p">${esc(c.p)}</p>
        <button type="button" class="btn btn--primary" data-go="home">${esc(c.back)}</button>
      </div>
    </div>`;
  }

  /* ================================================================
     Router
     ================================================================ */
  const PAGES = { home: tplHome, about: tplAbout, process: tplProcess, resume: tplResume };

  function pageFromHash() {
    const h = decodeURIComponent(window.location.hash.slice(1)).trim();
    return h || 'home';
  }

  // Each history entry remembers its own scroll, so Back/Forward land where you left.
  // pos[] is written on every scroll (a debounced history write misses a quick Back);
  // history.state carries key + y so a reload keeps the place too.
  const pos = {};
  let entryKey = '';
  function saveScroll() { history.replaceState({ key: entryKey, y: window.scrollY }, ''); }

  function go(page) {
    closeMenu();
    if (page === 'work') { scrollToWork(); return; }
    const current = pageFromHash();
    if (current === page) { window.scrollTo(0, 0); return; }
    if (page === 'home') {
      history.pushState(null, '', window.location.pathname + window.location.search);
      route();
    } else {
      window.location.hash = page; // triggers hashchange → route()
    }
  }

  function scrollToWork() {
    if (state.page !== 'home') {
      go('home');
      setTimeout(scrollToWork, 60);
      return;
    }
    const el = $('[data-anchor="work"]');
    if (!el) return;
    const navH = nav ? nav.offsetHeight : 70;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - navH + 1, behavior: motionOff() ? 'auto' : 'smooth' });
  }

  function route() {
    const page = pageFromHash();
    state.page = page;
    const st = history.state || {};
    entryKey = st.key || Math.random().toString(36).slice(2);
    const y = pos[entryKey] != null ? pos[entryKey] : st.y || 0;
    render(page);
    window.scrollTo({ top: y, behavior: 'instant' });
    saveScroll();
  }

  function render(page) {
    const c = L();
    const study = c.studies.find((s) => s.key === page) || null;
    let html, title;
    if (PAGES[page]) { html = PAGES[page](vals()); title = c.titles[page]; }
    else if (study) {
      html = tplCase(study, c.studies[(c.studies.indexOf(study) + 1) % c.studies.length]);
      title = study.name + c.titles.caseSuffix;
    } else { html = tplError(vals()); title = c.titles.notFound; }

    document.title = title;
    app.innerHTML = html;
    updateNavCurrent(page, study);
    wire();
  }

  function updateNavCurrent(page, study) {
    const key = study ? 'work' : page;
    $$('[data-navitem]').forEach((el) => {
      if (el.getAttribute('data-navitem') === key) el.setAttribute('aria-current', 'page');
      else el.removeAttribute('aria-current');
    });
  }

  /* ================================================================
     Menu
     ================================================================ */
  function toggleMenu() {
    if (!nav) return;
    const open = nav.hasAttribute('data-open');
    if (open) nav.removeAttribute('data-open'); else { nav.setAttribute('data-open', ''); navState.hidden = false; nav.removeAttribute('data-hidden'); }
    const b = $('[data-burger]');
    if (b) b.setAttribute('aria-expanded', String(!open));
  }
  function closeMenu() {
    if (!nav) return;
    nav.removeAttribute('data-open');
    const b = $('[data-burger]');
    if (b) b.setAttribute('aria-expanded', 'false');
  }

  /* ================================================================
     Interaction layer
     ================================================================ */
  let io = null;

  function count(el) {
    const target = parseFloat(el.getAttribute('data-count')) || 0;
    if (motionOff()) { el.textContent = target.toLocaleString(); return; }
    const start = performance.now(), dur = 1100;
    const tick = (t) => {
      // rAF timestamps can precede a performance.now() taken mid-frame; clamp
      // both ends or the eased value dips negative for a frame.
      const p = Math.max(0, Math.min(1, (t - start) / dur));
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString();
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  function onReveal(entry) {
    const el = entry.target;
    el.setAttribute('data-in', '');
    const num = el.querySelector('[data-count]');
    if (num && !num.hasAttribute('data-counted')) { num.setAttribute('data-counted', ''); count(num); }

    const fill = el.querySelector('[data-sfill][data-auto]');
    if (fill && !fill.hasAttribute('data-drawn')) {
      fill.setAttribute('data-drawn', '');
      const trav = el.querySelector('[data-strav]');
      setTimeout(() => {
        fill.style.transform = 'scaleX(1)';
        if (trav && !motionOff()) {
          trav.style.transition = 'none';
          trav.style.opacity = '1';
          trav.style.transform = 'translateX(0)';
          requestAnimationFrame(() => {
            trav.style.transition = 'transform .6s cubic-bezier(.2,.8,.2,1), opacity .3s ease .5s';
            trav.style.transform = 'translateX(' + (el.offsetWidth - 38) + 'px)';
            trav.style.opacity = '0';
          });
        }
      }, 140);
    }

    const bar = el.querySelector('[data-cbar]');
    if (bar && !bar.hasAttribute('data-filled')) {
      bar.setAttribute('data-filled', '');
      const pct = bar.getAttribute('data-target') || '0';
      setTimeout(() => { bar.style.width = pct + '%'; }, 120);
    }
  }

  function scan() {
    const off = motionOff();
    $$('[data-reveal]:not([data-seen])').forEach((el) => {
      el.setAttribute('data-seen', '');
      if (off) { onReveal({ target: el }); return; }
      io.observe(el);
    });
  }

  function fitFiller() {
    const el = $('[data-filler]');
    if (!el || !el.parentElement) return;
    const cols = getComputedStyle(el.parentElement).gridTemplateColumns.split(' ').filter(Boolean).length;
    if (!cols) return;
    const rest = L().studies.length % cols;
    el.style.gridColumn = 'span ' + (rest === 0 ? cols : cols - rest);
  }

  function alignStripes() {
    const P = 11 * Math.SQRT2; // pattern period in x and y for 45deg / 11px stripes
    $$('[data-stripe]').forEach((el) => {
      const r = el.getBoundingClientRect();
      const x = r.left + window.scrollX, y = r.top + window.scrollY;
      el.style.backgroundPosition = (-(((x % P) + P) % P)) + 'px ' + (-(((y % P) + P) % P)) + 'px';
    });
  }

  /* hero dial */
  const dial = { angle: null, hover: false, last: 0, raf: 0, resume: 0 };
  function turnDial(target) {
    const seg = $('[data-dialseg]');
    if (!seg || isNaN(target)) return;
    if (dial.angle == null) dial.angle = -90;
    const delta = (((target - dial.angle) % 360) + 540) % 360 - 180;
    dial.angle += delta;
    seg.style.transition = 'transform .8s cubic-bezier(.3,.9,.2,1)';
    seg.style.transform = 'rotate(' + dial.angle + 'deg)';
  }
  function spinDial(t) {
    const seg = $('[data-dialseg]');
    if (seg) {
      if (dial.angle == null) dial.angle = -90;
      if (!dial.hover && !motionOff()) {
        const dt = dial.last ? Math.min(64, t - dial.last) : 16;
        dial.angle += dt * 0.009;
        seg.style.transition = 'none';
        seg.style.transform = 'rotate(' + dial.angle + 'deg)';
      }
    }
    dial.last = t;
    dial.raf = requestAnimationFrame(spinDial);
  }
  function wireDial() {
    $$('[data-dchip]:not([data-wired])').forEach((chip) => {
      chip.setAttribute('data-wired', '');
      const enter = () => {
        dial.hover = true;
        clearTimeout(dial.resume);
        turnDial(parseFloat(chip.getAttribute('data-angle')));
      };
      const leave = () => {
        clearTimeout(dial.resume);
        dial.resume = setTimeout(() => { dial.hover = false; }, 850);
      };
      chip.addEventListener('mouseenter', enter);
      chip.addEventListener('focus', enter);
      chip.addEventListener('mouseleave', leave);
      chip.addEventListener('blur', leave);
    });
  }

  /* per-render wiring */
  function wire() {
    scan();
    fitFiller();
    alignStripes();
    wireDial();
    $$('[data-stagger]:not([data-wired])').forEach((row) => {
      row.setAttribute('data-wired', '');
      Array.from(row.children).forEach((c, i) => { c.style.transitionDelay = (i * 55) + 'ms'; });
    });
    $$('[data-underline]:not([data-wired])').forEach((el) => {
      el.setAttribute('data-wired', '');
      const ul = el.querySelector('[data-ul]');
      if (!ul) return;
      if (motionOff()) { ul.style.transform = 'scaleX(1)'; return; }
      requestAnimationFrame(() => requestAnimationFrame(() => { ul.style.transform = 'scaleX(1)'; }));
    });
    if (window.mountBlobatar) $$('[data-blobatar]').forEach(window.mountBlobatar);
    // word cycle restarts from the first word on each home render
    state.word = 0;
  }

  /* nav: floating pill after 80px; auto-hide on scroll down past 240px */
  const navState = { lastY: 0, hidden: false };
  function updateNav(y) {
    if (!nav) return;
    const last = navState.lastY;
    navState.lastY = y;
    nav.toggleAttribute('data-floating', y > 80);
    const open = nav.hasAttribute('data-open');
    const delta = y - last;
    if (motionOff() || open || y < 240) navState.hidden = false;
    else if (delta > 6) navState.hidden = true;
    else if (delta < -6) navState.hidden = false;
    nav.toggleAttribute('data-hidden', navState.hidden);
  }

  /* scroll: progress bar + orbit parallax + nav */
  let saveT = 0;
  function onScroll() {
    const y = window.scrollY || 0;
    updateNav(y);
    pos[entryKey] = y;
    clearTimeout(saveT); saveT = setTimeout(saveScroll, 150);
    const doc = document.documentElement;
    const max = Math.max(1, doc.scrollHeight - window.innerHeight);
    const bar = $('[data-progress]');
    if (bar) bar.style.width = Math.min(100, (y / max) * 100) + '%';
    if (motionOff()) return;
    $$('[data-orbit]').forEach((el) => {
      const dir = parseFloat(el.getAttribute('data-orbit')) || 1;
      el.style.transform = 'rotate(' + (y * 0.05 * dir) + 'deg)';
    });
  }

  /* hero word swap */
  function startWords() {
    setInterval(() => {
      if (motionOff()) return;
      const el = $('[data-word]');
      if (!el) return;
      const words = L().words;
      state.word = (state.word + 1) % words.length;
      el.textContent = words[state.word];
      el.style.animation = 'none';
      void el.offsetWidth;
      el.style.animation = 'word-swap .5s cubic-bezier(.2,.8,.2,1) both';
    }, 2600);
  }

  /* ================================================================
     Boot
     ================================================================ */
  function boot() {
    const domain = $('[data-domain]');
    if (domain) domain.textContent = CONFIG.domain;
    applyLang(preferredLang());

    io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        onReveal(e);
        io.unobserve(e.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

    // delegated clicks: [data-go], [data-burger], [data-print], [data-closemenu]
    document.addEventListener('click', (ev) => {
      const goEl = ev.target.closest('[data-go]');
      if (goEl) { ev.preventDefault(); go(goEl.getAttribute('data-go')); return; }
      const langEl = ev.target.closest('[data-lang]');
      if (langEl) { setLang(langEl.getAttribute('data-lang')); return; }
      if (ev.target.closest('[data-burger]')) { toggleMenu(); return; }
      if (ev.target.closest('[data-print]')) { window.print(); return; }
      if (ev.target.closest('[data-closemenu]')) { closeMenu(); return; }
      if (nav && nav.hasAttribute('data-open') && !ev.target.closest('#nav')) closeMenu();
    });
    document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') closeMenu(); });

    window.addEventListener('scroll', onScroll, { passive: true });
    let resizeT = 0;
    window.addEventListener('resize', () => {
      clearTimeout(resizeT);
      resizeT = setTimeout(() => { fitFiller(); alignStripes(); if (window.innerWidth > 1080) closeMenu(); }, 80);
    });
    history.scrollRestoration = 'manual';
    window.addEventListener('hashchange', route);
    if (reduced.addEventListener) reduced.addEventListener('change', () => render(state.page));

    route();
    onScroll();
    startWords();
    dial.raf = requestAnimationFrame(spinDial);

    // fonts arrive late on first paint: re-align stripes once they're in
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { alignStripes(); fitFiller(); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();

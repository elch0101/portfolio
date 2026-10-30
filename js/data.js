/* ------------------------------------------------------------------
   Configuration + facts. Language-independent.
   Copy lives in js/copy.en.js and js/copy.es.js (one object each,
   registered on COPY). Edit copy there, nothing else.
   ------------------------------------------------------------------ */

// Site-level switches (mirrors the design's props panel).
const CONFIG = {
  showMarquee: true,
  showMetrics: true,
  email: 'eliascm1@gmail.com',
  phone: '(+52) 551-097-9706',
  linkedin: 'https://www.linkedin.com/in/elias-cohen-615454174/',
  domain: 'iameliascohen.com',
  resume: 'assets/Elias-Cohen-Resume.pdf',
  defaultLang: 'en',            // fallback when nothing in the browser's list matches

  // Hero blobatar (https://blobatar.dev). Rendered by js/blobatar-hero.js.
  // `palette` pins the body/eyes to the brand colours exactly (#FD1843 on
  // #12100F = 4.87:1).
  blobatar: {
    name: 'elias cohen',
    traits: { shape: 0.11 },      // round silhouette
    palette: { head: '#FD1843', eye: '#12100F' },
    expression: 'thinking',       // idle | happy | sad | mad | surprised | wink | sleepy | smug | unsure | scared | love | shy | sick | thinking
    animate: 'hover',             // 'hover' | 'always'
    gazeTravel: 6,              // how far the eyes chase the cursor, viewBox px (0 = off)
    burst: ['happy', 'surprised', 'wink', 'love', 'smug'], // click reactions, picked at random
    burstMs: 1400                 // how long a click reaction holds before returning
  }
};

// Single source of truth for anything time-dependent.
// Years shown on the page are computed from these at load time, never typed in.
const FACTS = {
  careerStart: { y: 2018, m: 12 }, // first professional role (Grupo GDI, IT intern)
  pmStart: { y: 2020, m: 7 },      // first product role (La Frutería / Selimex)
  gradYear: 2022
};

// Registry the copy files write into: COPY.en, COPY.es. Key = <html lang>
// prefix, also the localStorage value ('ec-lang') and the picker label.
const COPY = {};

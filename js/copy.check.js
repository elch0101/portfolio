// Smoke test for the copy files: `node js/copy.check.js` from the repo root. Not loaded by the site.
const fs = require('fs'), vm = require('vm');
// top-level const is script-scoped in vm, so evaluate all files as one script and return COPY
const COPY = vm.runInNewContext(['js/data.js', 'js/copy.en.js', 'js/copy.es.js'].map((f) => fs.readFileSync(f, 'utf8')).join('\n') + '\nCOPY', {});
const keys = (o, p = '') => Object.keys(o).flatMap((k) => {
  const v = o[k];
  if (Array.isArray(v)) return [p + k + '[' + v.length + ']'];
  return v && typeof v === 'object' ? keys(v, p + k + '.') : [p + k];
});
const en = keys(COPY.en), es = keys(COPY.es);
const missing = en.filter((k) => !es.includes(k)).concat(es.filter((k) => !en.includes(k)));
console.assert(missing.length === 0, 'shape mismatch: ' + missing.join(', '));
// study keys and order must match (hash routes are shared)
console.assert(COPY.en.studies.map((s) => s.key).join() === COPY.es.studies.map((s) => s.key).join(), 'study keys differ');
// every {placeholder} must be one vals() provides
const allowed = ['pmYearsWord','pmYearsWordCap','pmYearsPlus','careerStartYear','gradYear','productCountWord','productCountWordCap','nextProductOrdinal','stageCountWordCap'];
const bad = [];
for (const lang of ['en','es']) JSON.stringify(COPY[lang]).replace(/\{(\w+)\}/g, (_, k) => { if (!allowed.includes(k)) bad.push(lang + ':' + k); });
console.assert(bad.length === 0, 'unknown placeholders: ' + bad.join(', '));
// 3-part accent arrays
for (const lang of ['en','es']) for (const path of ['hero.h1','toolkit.h2','contact.h2','about.h1','process.h1','error.h1']) {
  const arr = path.split('.').reduce((o, k) => o[k], COPY[lang]);
  console.assert(Array.isArray(arr) && (arr.length === 3 || path === 'hero.h1' && arr.length === 2), lang + ' ' + path + ' bad shape');
}
console.assert(COPY.es.ordinals[6] === 'sexto' && COPY.en.ordinals[6] === 'sixth', 'ordinal 6');
console.log('copy check ok');

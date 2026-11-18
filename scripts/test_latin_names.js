#!/usr/bin/env node
// Tests the Latin name builder in "Anatomical 3D Model/lang/latin/compose.js" against the data files.
// Usage: node scripts/test_latin_names.js
const fs = require('fs'), path = require('path'), assert = require('assert');
const dir = path.join(__dirname, '..', 'Anatomical 3D Model', 'lang', 'latin');
const read = f => fs.readFileSync(path.join(dir, 'data', f), 'utf8');
const C = require(path.join(dir, 'compose.js'));
const N = C.create({ names: read('names.txt'), structures: read('structures.txt'), directions: read('directions.txt') });

const cases = {
  // two lists combined
  'Left kidney': 'Ren sinister', 'Right lung': 'Pulmo dexter', 'Left atrium': 'Atrium sinistrum',
  'Right superior lobe': 'Lobus superior dexter', 'Right superior thyroid artery': 'Arteria thyroidea superior dextra',
  'Posterior tibial nerve': 'Nervus tibialis posterior', 'Lateral nerve': 'Nervus lateralis',
  // curated names win over building
  'Liver': 'Hepar', 'Medial collateral ligament': 'Ligamentum collaterale tibiale', 'Superior thyroid artery': 'Arteria thyroidea superior',
  // numbers: Roman numerals, vertebrae keep the clinical code in brackets
  'Rib 5 (left)': 'Costa V sinistra', 'Rib 12': 'Costa XII', 'Rib 9 (right)': 'Costa IX dextra',
  'Vertebra L5': 'Vertebra lumbalis V (L5)', 'Vertebra C7': 'Vertebra cervicalis VII (C7)', 'Vertebra T12': 'Vertebra thoracica XII (T12)',
  'Vertebra Co1': 'Vertebra coccygea I (Co1)', 'Intervertebral disc L5/S1': 'Discus intervertebralis L5/S1', 'C6 root': 'Radix C6',
  // sides and qualifiers
  'Canine, maxillary (right, #13)': 'Dens caninus maxillaris dexter #13',
  'Biceps brachii, long head (left)': 'Musculus biceps brachii sinister, caput longum',
  'Vagus nerve (CN X, left)': 'Nervus vagus [X] sinister', 'Magnified tooth: Canine': 'Auctum: Dens caninus',
};
let bad = 0;
for (const [en, want] of Object.entries(cases)) { const got = N.latinName(en); if (got !== want) { bad++; console.log(`FAIL ${en}: got ${got}, want ${want}`); } }
assert.strictEqual(N.latinName('Unknown thing'), null);
assert.strictEqual(N.roman(4), 'IV'); assert.strictEqual(N.roman(9), 'IX'); assert.strictEqual(N.roman(12), 'XII');

// every singular structure takes a side with the matching gender ending
const END = { m: { left: /sinister$/, right: /dexter$/ }, f: { left: /sinistra$/, right: /dextra$/ }, n: { left: /sinistrum$/, right: /dextrum$/ } };
let checked = 0;
read('structures.txt').split('\n').forEach(l => {
  if (!l.trim() || l[0] === '#') return; const [en, la, g] = l.split('|');
  for (const side of ['left', 'right']) {
    const got = N.latinName(`${side[0].toUpperCase()}${side.slice(1)} ${en.toLowerCase()}`);
    checked++;
    if (!got || !END[g][side].test(got)) { bad++; console.log(`FAIL side ${side} ${en} (${g}): ${got}`); }
  }
});
console.log(bad ? `${bad} failures` : `latin names OK (${Object.keys(cases).length} cases, ${checked} side checks)`);
process.exit(bad ? 1 : 0);

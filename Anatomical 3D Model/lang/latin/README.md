# Latin names and word-origin add-on (latin)

Adds a Latin name and a Word origin card to the selection sidebar. It works with every language pack and the page runs without it.

## Contents

| File | Role |
|---|---|
| `pack.json` | Add-on id, version and file list |
| `index.js` | Loads `compose.js`, then `card.js` |
| `compose.js` | Builds a Latin name from an English label. Also loads in Node for `scripts/test_latin_names.js` |
| `card.js` | Loads `data/`, splits names into roots, prefixes and suffixes, and draws the sidebar card |
| `data/directions.txt` | 60 direction and position words as `English\|masculine\|feminine\|neuter` (left, superior, deep, long) |
| `data/structures.txt` | 1,000+ structures as `English\|Latin\|gender` (Kidney, Thyroid artery, Femur) |
| `data/names.txt` | Full names the other two lists cannot build: commas, brackets, plurals and special cases. Checked first, so it overrides |
| `data/roots.json` | 35 organ roots (hepat-, cardi-, nephr-) with Greek source, English and 繁體中文 gloss, and `match` words found in structure names |
| `data/prefixes.json` | 17 prefixes (hypo-, hyper-, peri-) |
| `data/suffixes.json` | 23 suffixes (-itis, -ectomy, -ic) |
| `data/origins.json` | Worked term breakdowns (hepatic = liver related) and etymology notes |
| `data/grammar.json` | Declensions, plurals, abbreviations (m., lig.) and diminutives. Stored for later; the page does not show it yet |

Each entry has `source`: `textbook` (the medical word-building textbook: Appendix E, the abbreviation list and the cardia sidebar) or `extra` (added).

## How a Latin name is built

1. `names.txt`, then `structures.txt`, by exact English name (ignoring case).
2. Otherwise direction words at the start plus one structure. The words agree in gender with the noun and go after it, nearest word first: Right superior lobe = Lobus superior dexter, Left kidney = Ren sinister, Right superior thyroid artery = Arteria thyroidea superior dextra.
3. A side in brackets or after a comma goes after the main noun: Biceps brachii, long head (left) = Musculus biceps brachii sinister, caput longum.
4. Ribs and vertebrae use Roman numerals: Rib 5 (left) = Costa V sinistra, Vertebra L5 = Vertebra lumbalis V (L5). Discs, nerve roots and tooth numbers keep their codes (Discus intervertebralis L5/S1, Radix C6, #13).
5. Plural names take no side or direction by rule. A label that none of this can build shows no Latin name.

## Behaviour

- The card starts with the Latin name, then the word origin.
- The Body layers list shows each layer's Latin name under its name (Skin, Cutis).
- Search finds parts by Latin name (hepar, arteria carotis, costa V) and shows the Latin name in each result. `search.js` reads `window.__latin`, which `card.js` defines.
- With the Latin language pack (`la`) selected, the layers and search results already show Latin beside each name, so the add-on adds none of its own there. Latin typed in search still works.
- Traditional Chinese glosses show when the zh-Hant pack is on. Other packs show English.
- The card is skipped by the pack's interface translator (`data-zh` on the card), so glosses are not translated twice.

## Add or fix an entry

Latin name: edit the matching line in `data/names.txt` or `data/structures.txt`. To add a direction word, add a line to `data/directions.txt` with its three forms. Then run `python3 scripts/check_latin_addon.py` and `node scripts/test_latin_names.js`. The names were written from Terminologia Anatomica conventions and have not had a second review, so check them against an atlas before relying on them.

Word root, prefix or suffix:

1. Edit `data/roots.json`, `prefixes.json` or `suffixes.json`. Give every `meaning` an `en` and a `zh-Hant` value.
2. Run `python3 scripts/check_latin_addon.py`.

## Add a gloss language

Add a key beside `en` in every `meaning`, `plain`, `note`, `title` and `body`, then read that key in `lang()` in `index.js`.

## Remove

Delete this folder and `'latin'` from `ADDONS` in `lang/loader.js`.

# Latin names and word-origin add-on (latin)

Adds a Latin name and a Word origin card to the selection sidebar. It works with every language pack and the page runs without it.

## Contents

| File | Role |
|---|---|
| `pack.json` | Add-on id, version and file list |
| `index.js` | Loads `data/`, splits a structure name into roots, prefixes and suffixes, and draws the card |
| `data/roots.json` | 35 organ roots (hepat-, cardi-, nephr-) with Greek source, English and 繁體中文 gloss, and `match` words found in structure names |
| `data/prefixes.json` | 17 prefixes (hypo-, hyper-, peri-) |
| `data/suffixes.json` | 23 suffixes (-itis, -ectomy, -ic) |
| `data/origins.json` | Worked term breakdowns (hepatic = liver related) and etymology notes |
| `data/names.txt` | `English name\|Latin name` for 1,357 structure labels, in Terminologia Anatomica style (Musculus biceps brachii, Os frontale) |
| `data/grammar.json` | Declensions, plurals, abbreviations (m., lig.) and diminutives. Stored for later; the page does not show it yet |

Each entry has `source`: `textbook` (the medical word-building textbook: Appendix E, the abbreviation list and the cardia sidebar) or `extra` (added).

## Behaviour

- The card starts with the Latin name. Sides are written `sin.` and `dext.` after the name (Atrium sinistrum, Musculus biceps brachii, caput longum sin.), so no gender agreement is needed. Numbers stay as written (Costa 5). Names that are not listed and cannot be built from listed parts show no Latin name.

- A name such as "Hepatic artery" is split into hepat(o)- + -ic and shown as "hepatic → liver related".
- A name such as "Liver" or "Right kidney" shows the root for the organ, using the part before the first comma.
- Traditional Chinese glosses show when the zh-Hant pack is on. Other packs show English.
- The card is skipped by the pack's interface translator (`data-zh` on the card), so glosses are not translated twice.

## Add or fix an entry

Latin name: edit the matching line in `data/names.txt`. The names were written from Terminologia Anatomica conventions and have not had a second review, so check them against an atlas before relying on them.

Word root, prefix or suffix:

1. Edit `data/roots.json`, `prefixes.json` or `suffixes.json`. Give every `meaning` an `en` and a `zh-Hant` value.
2. Run `python3 scripts/check_latin_addon.py`.

## Add a gloss language

Add a key beside `en` in every `meaning`, `plain`, `note`, `title` and `body`, then read that key in `lang()` in `index.js`.

## Remove

Delete this folder and `'latin'` from `ADDONS` in `lang/loader.js`.

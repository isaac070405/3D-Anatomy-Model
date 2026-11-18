# Latin language pack (la)

Adds Latina to the 3D Anatomy Model. The page runs in English without this folder.

## Contents

| File | Role |
|---|---|
| `names.js` | Generated file. Embeds the Latin name lists and defines `window.__zh`, the language switch and the styles |
| `index.js` | Loads `../latin/compose.js` (the name builder), then `names.js` |
| `pack.json`, `package.json` | Pack id, version and file list |

## Behaviour

- Each structure shows its Latin name in italics beside the English one, for example "Liver *Hepar*" and "Left kidney *Ren sinister*".
- The interface (buttons, headings, descriptions) stays English.
- Sides use full Latin with gender agreement (sinister, dextra, sinistrum). Ribs and vertebrae use Roman numerals.
- A label with no Latin name shows in English only.
- The Word origin card from the `latin` add-on still loads and shows English glosses.
- This pack needs the `lang/latin/` folder, because it reuses its name builder and data.

## Edit a name

The names live in `lang/latin/data/` (`names.txt`, `structures.txt`, `directions.txt`), shared with the add-on. After an edit:

```bash
node scripts/build_la_pack.js
node scripts/test_latin_names.js
```

Do not edit `names.js` by hand.

## Status

First version. The names follow Terminologia Anatomica conventions and have not had a second review, so check them against an atlas before relying on them. Search takes English names only.

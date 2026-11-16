# Spanish language pack (es)

Adds Español to the 3D Anatomy Model. The page runs in English without this folder.

## Contents

| File | Role |
|---|---|
| `names.js` | `English name\|nombre en español` list for structures, groups, systems and layers, plus rules for left and right (suffix `(izq.)`, `(der.)`), numbers and "Base, qualifier" names. Defines `window.__zh` |
| `ui.js` | `English\|Español` list for interface text, and the code that swaps it in when Spanish is selected |
| `pack.json`, `package.json` | Pack id, version and file list |

## Behaviour

- Structure names show in English with the Spanish name beside them.
- Interface text is replaced by Spanish.
- The Language list switches packs. Choosing another pack reloads the page.

## Status

First version, translated by hand and not yet reviewed by a Spanish-speaking anatomist.

- Search takes English names only.
- Side names use a suffix, for example "Bíceps braquial (izq.)", so no word needs a gender change.
- A name with no entry shows in English.

## Edit a term

Change the matching line in `names.js` or `ui.js`.

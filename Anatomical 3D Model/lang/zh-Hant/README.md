# Traditional Chinese language pack (zh-Hant)

Adds 繁體中文 to the 3D Anatomy Model. The page runs in English without this folder.

## Contents

| File | Role |
|---|---|
| `pack.json` | Pack id, version and file list |
| `index.js` | Loads `names.js`, then `ui.js` |
| `names.js` | `English name\|中文名` list for structures, groups, systems and layers, and the rules for left, right, numbers and "Base, qualifier" names. Defines `window.__zh` |
| `ui.js` | `English\|中文` list for interface text, and the code that swaps it in when the Chinese button is on |
| `worksheet.txt` | Translation worksheet the interface lines came from |

## Behaviour

- Structure names show in English with the Chinese name beside them.
- Interface text is replaced by Chinese. The button under the introduction turns both off, and the choice is kept in the browser.
- Chinese text typed in the search box (for example 股骨) finds matching structures.

## Install

1. Copy this folder to `Anatomical 3D Model/lang/zh-Hant/`.
2. Keep `'zh-Hant'` in `PACKS` in `lang/loader.js`.

## Remove

Delete the folder and the `'zh-Hant'` entry in `lang/loader.js`.

## Edit a term

Change the matching line in `names.js` or `ui.js`. Names with no entry are built from parts, so "Biceps brachii, long head (left)" becomes 左肱二頭肌，長頭. A name with no match shows in English.

## Make another language

Copy this folder, rename it (for example `ja`), replace the lines in `names.js` and `ui.js`, add its id to `PACKS`, and set a different localStorage key in both files.

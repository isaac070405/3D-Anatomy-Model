# Cantonese language pack (zh-Yue)

Adds 廣東話 (written Cantonese for Hong Kong readers) to the 3D Anatomy Model. The page runs in English without this folder.

## Contents

| File | Role |
|---|---|
| `package.json` | npm name `@isaac070405/anatomy-lang-zh-yue`, published to GitHub Packages |
| `pack.json` | Pack id, version and file list |
| `index.js` | Loads `names.js`, then `ui.js` |
| `names.js` | `English name\|中文名` list for structures, groups, systems and layers, and the rules for left, right, numbers and "Base, qualifier" names. Defines `window.__zh` |
| `ui.js` | `English\|中文` list for interface text, and the code that swaps it in when Cantonese is selected |
| `worksheet.txt` | Translation worksheet the interface lines came from |

## Behaviour

- Structure names show in English with the Chinese name beside them.
- Interface text is replaced by Chinese. The Language list under the introduction switches between Traditional Chinese, Cantonese, Simplified Chinese, English and the other packs, and the choice is kept in the browser under `anatomy-lang`. Choosing the other Chinese pack reloads the page.
- Chinese text typed in the search box (for example 股骨) finds matching structures.

## Get the zip

Run `scripts/build_lang_pack.sh zh-Yue` in the repository. It writes `dist/zh-Yue-language-pack-<version>.zip`.

## Install from npm

```bash
echo "@isaac070405:registry=https://npm.pkg.github.com" >> .npmrc
npm install @isaac070405/anatomy-lang-zh-yue
```

Log in first with `npm login --scope=@isaac070405 --auth-type=legacy --registry=https://npm.pkg.github.com`, using a classic token with `read:packages`. Then copy `node_modules/@isaac070405/anatomy-lang-zh-yue` to `Anatomical 3D Model/lang/zh-Yue/`.

## Install from a folder or zip

1. Copy this folder to `Anatomical 3D Model/lang/zh-Yue/`.
2. Keep `'zh-Yue'` in `PACKS` in `lang/loader.js`.

## Remove

Delete the folder and the `'zh-Yue'` entry in `lang/loader.js`.

## Edit a term

Change the matching line in `names.js` or `ui.js`. Names with no entry are built from parts, so "Biceps brachii, long head (left)" becomes 左肱二頭肌，長頭. A name with no match shows in English.

## Make another language

Copy this folder, rename it (for example `ja`), replace the lines in `names.js` and `ui.js`, add its id to `PACKS`, give it its own `PACK` id in `names.js`, and add its entry to the `LANGS` list in every pack. All packs share the `anatomy-lang` key.

This pack is generated from `../zh-Hant/`. Structure names are the Hong Kong terms from zh-Hant. Interface text goes through the phrase rules in `COLLOQUIAL` (嘅, 同, 冇, 喺, 撳). After editing a term in zh-Hant or a rule in `scripts/build_zh_yue.py`, run `python3 scripts/build_zh_yue.py`. Do not edit this folder by hand.

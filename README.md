# 3D Anatomy Model

An interactive three.js model of the human body that runs in the browser with no build step and no backend.

**Live demo: https://isaac070405.github.io/3D-Anatomy-Model/**

[Known gaps](https://isaac070405.github.io/3D-Anatomy-Model/known-limitations.html) · [Wiki](wiki/Home.md) · [Layers view](https://isaac070405.github.io/3D-Anatomy-Model/layers.html)

[![Sponsor isaac070405](https://img.shields.io/badge/Sponsor-isaac070405-ea4aaa?logo=githubsponsors)](https://github.com/sponsors/isaac070405)

> [!NOTE]
> The model is a simplified teaching model. Shapes, sizes and positions are approximate, and organs run about 60 to 80% of textbook size. It is not for clinical use.

## Features

- 971 named parts across 13 systems (skeletal, muscular, circulatory, nervous, digestive, respiratory, urinary, reproductive, eye and ear, endocrine, skin, fat).
- Fuzzy search with aliases, plus an anatomical tree with breadcrumb.
- Traditional Chinese (繁體中文) names beside every structure, group, system and layer. Search accepts Chinese (for example 股骨), and a button in the sidebar turns the Chinese labels and interface text off.
- Layer peeling: a depth slider removes 14 layers from skin to bone.
- Live cross-sections on the transverse, coronal and sagittal planes.
- Explode mode, X-ray and atlas colour modes, and region dissection with undo.
- Preset views for the heart, thorax, kidneys, pelvis, breast, limbs, head and neck.
- Pinned notes, PNG snapshot, and export to OBJ + MTL or GLB.
- Mobile dock and drawer, adaptive pixel ratio, and a screen-reader announcement region.

## Keyboard shortcuts

| Key | Action |
|---|---|
| Space | Reset the camera to the opening view |
| 1, 2, 3 | Cross-section on the transverse, coronal, sagittal axis |
| X | Toggle X-ray and atlas colours |
| H | Hide or show the selected structure |
| U | Undo the last hide or dissection |

## Run locally

The page loads three.js 0.184.0 from unpkg through an import map, so it needs a network connection and a static server.

```bash
cd "Anatomical 3D Model"
python3 -m http.server 8000
```

Open http://localhost:8000.

## Traditional Chinese language pack

The page runs in English by default. The Traditional Chinese (繁體中文) pack lives in `Anatomical 3D Model/lang/zh-Hant/` and is already included in this repository, so a clone needs no extra step. A button under the introduction turns the Chinese names and interface text on and off.

To add the pack to another copy of the page, install it from GitHub Packages:

```bash
echo "@isaac070405:registry=https://npm.pkg.github.com" >> .npmrc
npm login --scope=@isaac070405 --auth-type=legacy --registry=https://npm.pkg.github.com
npm install @isaac070405/anatomy-lang-zh-hant
```

GitHub Packages asks for a classic personal access token with `read:packages`, even for public packages. Enter it as the password at `npm login`.

The page has no build step, so copy the installed files into its `lang` folder and keep `'zh-Hant'` in `PACKS` in `lang/loader.js`:

```bash
cp -r node_modules/@isaac070405/anatomy-lang-zh-hant "Anatomical 3D Model/lang/zh-Hant"
```

You can also build a zip with `scripts/build_lang_pack.sh zh-Hant`. See `Anatomical 3D Model/lang/zh-Hant/README.md` for removal and editing.

## Latin names and word-origin add-on

`Anatomical 3D Model/lang/latin/` is an optional add-on that works with any language pack. Selecting a structure shows its Latin name (Terminologia Anatomica style, for example Musculus biceps brachii) and a Word origin card in the sidebar with the Greek or Latin source of each root, prefix and suffix, and a plain meaning (hepatic = liver related, hypo- = low). The card uses Traditional Chinese glosses when that pack is on, and English otherwise. To remove it, delete the folder and the `'latin'` entry in `ADDONS` in `lang/loader.js`. Edit entries in `lang/latin/data/*.json` and check them with `python3 scripts/check_latin_addon.py`.

## Project layout

| Path | Contents |
|---|---|
| `Anatomical 3D Model/index.html` | Page, import map and interface |
| `Anatomical 3D Model/anatomy-*.js` | Procedural geometry for each body region |
| `Anatomical 3D Model/three-d-stage.js` | Scene, camera, selection and cross-section |
| `Anatomical 3D Model/lang/` | Optional language packs. `lang/zh-Hant/` is the Traditional Chinese pack (names, interface text, search). `lang/latin/` is the Latin name and word-origin add-on |
| `Anatomical 3D Model/layers.js`, `explode.js`, `search.js`, `tree.js` | Peel layers, explode mode, search, anatomical tree |
| `Anatomical 3D Model/assets/` | `mni_brain.glb`, brain volume data, and the male and female skin meshes (`Male_Realistic_BaseMesh.glb`, `Female_Realistic_BaseMesh.glb`) |
| `scripts/` | Python converters for the brain and TotalSegmentator output, and `build_lang_pack.sh` to zip a language pack |
| `wiki/` | System pages, interface guide and modelling notes |
| `.github/workflows/pages.yml` | Deploys `Anatomical 3D Model/` to GitHub Pages on each push to `main` |

## Deploy

Enable Pages once under Settings, Pages, Source: GitHub Actions. Each push to `main` then publishes the demo.

## Licence

The code and documents written for this project are under the MIT licence (`LICENSE`). Third-party items keep their own terms, listed in full in `THIRD_PARTY_NOTICES.md`:

- three.js 0.184.0 (MIT), loaded from unpkg.
- `Anatomical 3D Model/assets/mni_brain*`, derived from an ICBM 152 (MNI) T1 template, under the licence quoted in `THIRD_PARTY_NOTICES.md`.
- `Anatomical 3D Model/assets/Male_Realistic_BaseMesh.glb` and `Female_Realistic_BaseMesh.glb`, from the Blender Studio Human Base Meshes bundle v1.4.1 (CC0).
- TotalSegmentator dataset (CC BY 4.0), an optional input for `scripts/totalsegmentator_to_glb.py`.
- `Anatomical 3D Model/_ds/` page styles, imported from Claude Design and treated as MIT with the rest of the repository.
- Barlow, Barlow Condensed, Cormorant Garamond, Lora and Caveat fonts (SIL OFL 1.1), loaded from Google Fonts by the `_ds/` styles and the wireframes page.

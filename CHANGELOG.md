# Changelog

All notable changes to this project are listed here, newest first. Dates are in ISO format.

## Unreleased

- Use the Blender Studio Realistic base meshes as the male and female skin. They have no skeleton, so capsule bones measured on each mesh feed the existing limb retarget and layered fit.
- Release language pack 1.0.3 and 1.0.2 (same files as 1.0.1) and 1.0.1 (`@isaac070405/anatomy-lang-zh-hant`) with the npm install steps in its README.
- Add the Traditional Chinese (繁體中文) language pack in `lang/zh-Hant/`, a folder that can be copied in or deleted. It puts names beside every structure, group, system and layer, with Chinese search and an on/off button.
- Translate the interface (buttons, headings, descriptions) into Traditional Chinese when the Chinese button is on (`lang/zh-Hant/ui.js`).
- Add a worksheet of interface strings that still need translation (`lang/zh-Hant/worksheet.txt`).
- Add project documents: ACCESSIBILITY, CHANGELOG, CITATION, CODE_OF_CONDUCT, CONTRIBUTING, SECURITY, SUPPORT and THIRD_PARTY_NOTICES.

## 2026-11-05

- Rebuild the oral cavity, tonsils and neck, and fit the oesophagus and lower pharynx onto the spine.

## 2026-11-04

- Rebuild the nasal cavity and larynx, split the pharynx into three regions, and add six groups of body-part views, a new alveolar unit, a tooth page and the lymphatic system.

## 2026-11-01 to 2026-11-02

- Add the TotalSegmentator and mesh.eye conversion scripts, and the eye and MNI brain meshes.

## 2026-10-31

- Deploy the demo to GitHub Pages from `Anatomical 3D Model/`.

## 2026-10-28

- Add the 14-layer body atlas, explode and assemble modes, the accuracy disclaimer, the known-limitations page and the wiki pages.
- Rebuild the female reproductive and breast model.

## 2026-10-07 to 2026-10-10

- First commit, import of the project from Claude Design, and the split of the model script into `anatomy-part1.js` and `anatomy-part2.js`.

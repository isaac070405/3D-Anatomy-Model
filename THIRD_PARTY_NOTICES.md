# Third-party notices

The project code is MIT licensed (`LICENSE`). The items below keep their own licences.

| Component | Used for | Licence |
|---|---|---|
| three.js 0.184.0 (https://threejs.org) | 3D rendering, loaders and exporters, loaded from unpkg | MIT, copyright three.js authors |
| Skull-stripped T1 MNI brain template (`tpl-mni_T1w.nii.gz`, ICBM 152 MNI152NLin2009cAsym), from the track4edu v1.1 package | `assets/mni_brain.glb`, `mni_brain_t1.bin`, `mni_brain_t1.json` | ICBM 152 permissive licence, quoted below |
| Blender Studio Human Base Meshes bundle v1.4.1 (https://www.blender.org/download/demo/asset-bundles/human-base-meshes/) | Male and female body surface meshes (`Anatomical 3D Model/assets/Male_Realistic_BaseMesh.glb`, `Anatomical 3D Model/assets/Female_Realistic_BaseMesh.glb`) | CC0, no rights reserved; attribution included for transparency |
| TotalSegmentator dataset (Wasserthal et al., Radiology: AI 2023, doi:10.1148/ryai.230024) | Optional input for `scripts/totalsegmentator_to_glb.py` | CC BY 4.0 |
| Design system styles in `Anatomical 3D Model/_ds/` (classical and industry) | Page styling | Imported from Claude Design on 2026-10-08. The folder has no licence file, so it is treated as MIT with the rest of the repository |
| Barlow and Barlow Condensed fonts (https://github.com/jpt/barlow, Jeremy Tribby), loaded from Google Fonts by `Anatomical 3D Model/_ds/industry-*/styles.css` and the wireframes page | Page typography | SIL Open Font License 1.1. The repository stores no copy of the fonts |

## MNI brain template

The brain meshes and the axial slice volume are derived from `tpl-mni_T1w.nii.gz`, an ICBM 152 nonlinear asymmetric 2009c (MNI152NLin2009cAsym) T1 template. The file came from the track4edu v1.1 package. It is 193 × 229 × 193 voxels at 1 mm, which matches the 2009c grid (the FSL MNI152NLin6Asym version is 182 × 218 × 182). The brain crop recorded in `assets/mni_brain_t1.json` is 135 × 184 × 140 voxels. The repository stores no copy or checksum of the original file, so the match rests on that grid and on the file name. The SHA-256 of the file starts `7ebe5391` and ends `d2acc6`. Record the full hash here when it is to hand.

The ICBM 152 templates carry the licence below. Copy it, with its copyright line, wherever the derived files are redistributed.

> Copyright (C) 1993–2004 Louis Collins, McConnell Brain Imaging Centre, Montreal Neurological Institute, McGill University.
> Permission to use, copy, modify, and distribute this software and its documentation for any purpose and without fee is hereby granted, provided that the above copyright notice appear in all copies. The authors and McGill University make no representations about the suitability of this software for any purpose. It is provided "as is" without express or implied warranty. The authors are not responsible for any data loss, equipment damage, property loss, or injury to subjects or patients resulting from the use or misuse of this software package.

Licence text source: https://github.com/templateflow/tpl-MNI152NLin2009cAsym (LICENSE file). Cite Fonov et al., NeuroImage 2011 (doi:10.1016/j.neuroimage.2010.07.033) when the template is used.

## Dependencies of the scripts

`scripts/requirements.txt` lists nibabel, numpy, scipy, scikit-image, trimesh, fast-simplification and cadquery-ocp. Each keeps its own licence.

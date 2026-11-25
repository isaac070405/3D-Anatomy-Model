# Research

Literature research that backs the physiological and size data in the model. Each part has its own folder with a report, data files, figures and scripts.

| Part | Topic | Report |
|---|---|---|
| 1 | Reference organ size and mass against the model's organs | [part1-organ-size/README.md](part1-organ-size/README.md) |

Notes:

- Data files are CSV and carry a source ID, DOI or PMID, licence status and evidence grade (A to D) on every value.
- `part1-organ-size/scripts/extract_model_geometry.mjs` imports `./js/anatomy-part1.js` and `./js/anatomy-part2-geom.js`. Those paths come from the research workspace. In this repo the files sit in `Anatomical 3D Model/`, so copy the script there and edit the two import paths before running it.
- Reference values from paywalled papers are numbers only, taken from PubMed abstracts.

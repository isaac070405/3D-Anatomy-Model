# Security Policy

## Scope

The project is a static web page. It has no server, no accounts and no stored user data. Notes and the Chinese label setting stay in the browser (`localStorage`).

## Supported version

Only the latest commit on `main`, which is what GitHub Pages serves.

## Report a vulnerability

Use GitHub's private vulnerability reporting under the Security tab of the repository. Do not open a public issue for a vulnerability. Include the page URL, the steps and the browser. A first reply is expected within 7 days.

## Notes

- The page loads three.js from unpkg with subresource integrity hashes in the import map. Update the hashes whenever the version changes.
- The model is a teaching aid and is not for clinical use.

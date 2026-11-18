// Language packs. Each folder under lang/ is one optional pack with an index.js that adds its own scripts.
// To add a pack, copy its folder here and add its folder name to PACKS. To remove one, delete the name and the folder.
// The page works in English with no pack, because the page code only calls a pack through window.__zh when it exists.
// One pack loads per page: the saved language ('anatomy-lang' in localStorage) if it names a pack, else the first one in PACKS.
// The language switch in the pack saves a new choice and reloads when the choice is a different pack.
// ADDONS are extra folders that load after the pack and work with any of them (latin = word origins). Remove the name and the folder to drop one.
(function () {
  const PACKS = ['zh-Hant', 'zh-Hans', 'es', 'la'], ADDONS = ['latin'];
  let pick = PACKS[0];
  try { const s = localStorage.getItem('anatomy-lang'); if (PACKS.includes(s)) pick = s; } catch (e) { }
  const base = document.currentScript.src.replace(/loader\.js(\?.*)?$/, '');
  document.write('<script src="' + base + pick + '/index.js"><\/script>');
  ADDONS.forEach(a => document.write('<script src="' + base + a + '/index.js"><\/script>'));
})();

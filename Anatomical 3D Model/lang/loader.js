// Language packs. Each folder under lang/ is one optional pack with an index.js that adds its own scripts.
// To add a pack, copy its folder here and add its folder name to PACKS. To remove one, delete the name and the folder.
// The page works in English with no pack, because the page code only calls a pack through window.__zh when it exists.
(function () {
  const PACKS = ['zh-Hant'];
  const base = document.currentScript.src.replace(/loader\.js(\?.*)?$/, '');
  PACKS.forEach(id => document.write('<script src="' + base + id + '/index.js"><\/script>'));
})();

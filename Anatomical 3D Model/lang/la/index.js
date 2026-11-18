// Latin (Latina) language pack. Scripts load in this order: the Latin name builder (shared with the latin add-on), then names.js (defines window.__zh).
(function () {
  const base = document.currentScript.src.replace(/index\.js(\?.*)?$/, '');
  ['../latin/compose.js', 'names.js'].forEach(f => document.write('<script src="' + base + f + '"><\/script>'));
})();

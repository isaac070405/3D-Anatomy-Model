// Spanish (Español) language pack. Scripts load in this order: names first (defines window.__zh), then interface text.
(function () {
  const base = document.currentScript.src.replace(/index\.js(\?.*)?$/, '');
  ['names.js', 'ui.js'].forEach(f => document.write('<script src="' + base + f + '"><\/script>'));
})();

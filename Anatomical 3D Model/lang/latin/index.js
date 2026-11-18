// Latin names and word-origin add-on. Scripts load in this order: compose.js (builds Latin names), then card.js (the sidebar card).
(function () {
  const base = document.currentScript.src.replace(/index\.js(\?.*)?$/, '');
  ['compose.js', 'card.js'].forEach(f => document.write('<script src="' + base + f + '"><\/script>'));
})();

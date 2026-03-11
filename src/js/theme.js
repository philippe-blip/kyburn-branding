// Theme toggle — shared across all pages
// Storage key: kyburn-theme
(function () {
  var html = document.documentElement;
  var btn = document.getElementById('themeToggle');
  function apply(t) {
    html.setAttribute('data-theme', t);
    localStorage.setItem('kyburn-theme', t);
  }
  apply(localStorage.getItem('kyburn-theme') || 'dark');
  if (btn) btn.addEventListener('click', function () {
    apply(html.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
  });
})();

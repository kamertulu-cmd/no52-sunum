// Sayfa kaydırıldıkça şişe dolar.
(function () {
  var oil = document.getElementById("gauge-oil");
  if (!oil) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ticking = false;

  function update() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    oil.setAttribute("y", String(120 * (1 - p)));
    ticking = false;
  }

  function onScroll() {
    if (reduce) { update(); return; }
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
})();

/* DeepOrca 生态官网 — 交互脚本（无依赖） */
(function () {
  "use strict";

  /* ---------- 导航：滚动状态 ---------- */
  var nav = document.getElementById("nav");
  var onScroll = function () {
    nav.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- 移动端菜单 ---------- */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("is-open");
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      links.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- 当前分区高亮 ---------- */
  var sections = document.querySelectorAll("section[id]");
  var navAnchors = document.querySelectorAll(".nav-links a");
  var spy = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        navAnchors.forEach(function (a) {
          a.classList.toggle("is-active", a.getAttribute("href") === "#" + id);
        });
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach(function (s) { spy.observe(s); });

  /* ---------- 截图页签（支持多画廊） ---------- */
  document.querySelectorAll(".shot-frame").forEach(function (frame) {
    var tabs = frame.querySelectorAll(".shot-tab");
    var shots = frame.querySelectorAll(".shot-stage .shot");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var i = Number(tab.dataset.shot);
        tabs.forEach(function (t) { t.classList.toggle("is-active", t === tab); });
        shots.forEach(function (s, k) { s.classList.toggle("is-active", k === i); });
      });
    });
  });

  /* ---------- 滚动浮现 ---------- */
  var reveal = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          reveal.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
  );
  document.querySelectorAll(".reveal").forEach(function (el) { reveal.observe(el); });
})();

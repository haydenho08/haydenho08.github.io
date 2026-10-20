/* Renders the content from data.js and runs the light/dark toggle. */
(function () {
  "use strict";

  var data = window.PORTFOLIO || {};
  var profile = data.profile || {};
  var MONO_ICONS = ["github"]; // single-colour logos that flip in dark mode

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function $(id) { return document.getElementById(id); }
  function externalAttrs(url) {
    return /^https?:\/\//.test(url) ? ' target="_blank" rel="noopener"' : "";
  }

  /* ---------- Hero ---------- */
  function renderHero() {
    $("status").textContent = profile.status || "";
    $("hero-title").innerHTML = "Hi, I'm " + esc(profile.name || "") +
      (profile.greetingEmoji ? ' <span class="wave" aria-hidden="true">' + esc(profile.greetingEmoji) + "</span>" : "");
    $("subline").textContent = profile.subline || "";
    $("bio").textContent = profile.bio || "";
    $("brand").textContent = profile.name || "";

    var links = [];
    links.push('<a class="btn btn-primary" href="#projects">See my projects</a>');
    if (profile.email) links.push('<a class="btn" href="mailto:' + esc(profile.email) + '">Email</a>');
    if (profile.github) links.push('<a class="btn" href="' + esc(profile.github) + '"' + externalAttrs(profile.github) + '>GitHub</a>');
    if (profile.linkedin) links.push('<a class="btn" href="' + esc(profile.linkedin) + '"' + externalAttrs(profile.linkedin) + '>LinkedIn</a>');
    $("hero-actions").innerHTML = links.join("");

    var resume = $("nav-resume");
    if (profile.resume) {
      resume.href = profile.resume;
      resume.target = "_blank";
      resume.rel = "noopener";
      resume.hidden = false;
    }
  }

  /* ---------- Projects ---------- */
  function renderProjects() {
    var html = (data.projects || []).map(function (p) {
      var done = /complete/i.test(p.status || "");
      var media = p.image
        ? '<img src="' + esc(p.image) + '" alt="Screenshot of ' + esc(p.title) + '" loading="lazy">'
        : '<span class="mono">screenshot coming soon</span>';
      var tags = (p.tags || []).map(function (t) { return '<li class="tag">' + esc(t) + "</li>"; }).join("");
      var links = [];
      if (p.demo) links.push('<a href="' + esc(p.demo) + '"' + externalAttrs(p.demo) + ">Live demo →</a>");
      if (p.github) links.push('<a href="' + esc(p.github) + '"' + externalAttrs(p.github) + ">View on GitHub →</a>");
      if (!links.length) links.push('<span class="soon">Code coming soon</span>');

      return (
        '<article class="project">' +
          '<div class="project-bar mono"><span>' + esc(p.folder) + '/</span>' +
            '<span class="' + (done ? "live" : "") + '">● ' + esc((p.status || "").toLowerCase()) + (p.date ? " · " + esc(p.date) : "") + "</span></div>" +
          '<div class="project-media">' + media + "</div>" +
          '<div class="project-body">' +
            "<h3>" + esc(p.title) + "</h3>" +
            '<p class="summary">' + esc(p.summary) + "</p>" +
            (p.result ? '<p class="result">' + esc(p.result) + "</p>" : "") +
            '<ul class="tags" aria-label="Built with">' + tags + "</ul>" +
            '<div class="project-links">' + links.join("") + "</div>" +
          "</div>" +
        "</article>"
      );
    }).join("");
    $("project-list").innerHTML = html;
  }

  /* ---------- Skills ---------- */
  function renderSkills() {
    var html = (data.skills || []).map(function (s) {
      var mono = MONO_ICONS.indexOf(s.icon) !== -1 ? ' class="mono-icon"' : "";
      return (
        '<li class="skill">' +
          '<span class="skill-icon"><img src="assets/icons/' + esc(s.icon.indexOf(".") === -1 ? s.icon + ".svg" : s.icon) + '" alt=""' + mono + ' width="26" height="26"></span>' +
          '<span class="skill-name">' + esc(s.name) + "</span>" +
        "</li>"
      );
    }).join("");
    $("skill-list").innerHTML = html;
  }

  /* ---------- Experience ---------- */
  function renderExperience() {
    var html = (data.experience || []).map(function (e) {
      var badge = e.logo
        ? '<img src="' + esc(e.logo) + '" alt="' + esc(e.org) + ' logo" loading="lazy" width="52" height="52">'
        : '<span aria-hidden="true">' + esc(e.emoji || (e.org || "?").charAt(0)) + "</span>";
      return (
        "<li>" +
          '<span class="node">' + badge + "</span>" +
          '<div class="dates mono">' + esc(e.dates) + "</div>" +
          '<div class="title">' + esc(e.org) + (e.role ? " · " + esc(e.role) : "") + "</div>" +
          (e.summary ? '<div class="desc">' + esc(e.summary) + "</div>" : "") +
        "</li>"
      );
    }).join("");
    $("experience-list").innerHTML = html;
  }

  /* ---------- Footer ---------- */
  function renderFooter() {
    $("contact-line").textContent = profile.contactLine || "";
    var email = $("contact-email");
    if (profile.email) {
      email.href = "mailto:" + profile.email;
      email.textContent = profile.email;
    } else {
      email.hidden = true;
    }
    var links = [];
    if (profile.github) links.push('<a href="' + esc(profile.github) + '"' + externalAttrs(profile.github) + ">GitHub ↗</a>");
    if (profile.linkedin) links.push('<a href="' + esc(profile.linkedin) + '"' + externalAttrs(profile.linkedin) + ">LinkedIn ↗</a>");
    if (profile.resume) links.push('<a href="' + esc(profile.resume) + '" target="_blank" rel="noopener">Resume ↗</a>');
    $("footer-links").innerHTML = links.join("");
    $("footer-meta").textContent = "© " + new Date().getFullYear() + " " + (profile.name || "") +
      (profile.lastUpdated ? " · last updated " + profile.lastUpdated : "");
  }

  /* ---------- Theme toggle ---------- */
  var root = document.documentElement;

  function isDark() {
    return root.getAttribute("data-theme") === "dark";
  }
  function syncToggle() {
    var dark = isDark();
    root.classList.toggle("is-dark", dark);
    var btn = $("theme-toggle");
    if (btn) btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  }
  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) {}
    syncToggle();
  }

  /* ---------- Scroll reveal ---------- */
  // Fades and slides items up as they scroll into view. Items in the same
  // group (cards, skill tiles, timeline entries) arrive one after another.
  // Skipped entirely for visitors who turn off motion, so content is never hidden.
  function setupReveal() {
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    var items = document.querySelectorAll(".section-head, .project, .skill, .timeline li, .footer-main");
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

    Array.prototype.forEach.call(items, function (el) {
      var siblings = Array.prototype.filter.call(el.parentNode.children, function (c) { return c.matches(".project, .skill, .timeline li"); });
      var index = siblings.indexOf(el);
      el.style.setProperty("--reveal-delay", (index > 0 ? Math.min(index, 7) * 70 : 0) + "ms");
      el.setAttribute("data-reveal", "");
      observer.observe(el);
    });
    root.classList.add("reveal-on");
  }

  renderHero();
  renderProjects();
  renderSkills();
  renderExperience();
  renderFooter();
  syncToggle();
  setupReveal();

  $("theme-toggle").addEventListener("click", function () {
    setTheme(isDark() ? "light" : "dark");
  });
  if (window.MutationObserver) {
    new MutationObserver(syncToggle).observe(root, { attributes: true, attributeFilter: ["data-theme"] });
  }
})();

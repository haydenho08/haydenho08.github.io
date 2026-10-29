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

  var COPY_ICON = '<svg class="icon-copy" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/></svg>';
  var CHECK_ICON = '<svg class="icon-check" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
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
    if (profile.email) links.push(
      '<button type="button" class="btn copy-email" data-copy="' + esc(profile.email) + '">' +
        COPY_ICON + CHECK_ICON + '<span class="copy-label">Copy email</span></button>');
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
      var done = /complete|live/i.test(p.status || "");
      var media = p.image
        ? (p.demo ? '<a class="media-link" href="' + esc(p.demo) + '"' + externalAttrs(p.demo) + ' tabindex="-1" aria-hidden="true">' : "") +
          '<img src="' + esc(p.image) + '" alt="Screenshot of ' + esc(p.title) + '" loading="lazy" width="1280" height="800">' +
          (p.demo ? "</a>" : "")
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
  function iconSrc(icon) {
    if (/^https?:\/\//.test(icon)) return icon;              // full link to a logo
    return "assets/icons/" + (icon.indexOf(".") === -1 ? icon + ".svg" : icon);
  }
  function renderSkillItems(items) {
    return (items || []).map(function (s) {
      var mono = MONO_ICONS.indexOf(s.icon) !== -1 ? ' class="mono-icon"' : "";
      return (
        '<li class="skill">' +
          '<span class="skill-icon"><img src="' + esc(iconSrc(s.icon || "")) + '" alt=""' + mono + ' width="26" height="26" loading="lazy"></span>' +
          '<span class="skill-name">' + esc(s.name) + "</span>" +
        "</li>"
      );
    }).join("");
  }
  function renderSkills() {
    var skills = data.skills || [];
    // Accept either grouped skills ({ group, items }) or a flat list.
    var groups = skills.length && skills[0].items ? skills : [{ group: "", items: skills }];
    $("skill-list").innerHTML = groups.map(function (g) {
      return (
        '<div class="skill-group">' +
          (g.group ? '<h3 class="skill-group-title mono">' + esc(g.group.toLowerCase()) + "</h3>" : "") +
          '<ul class="skill-grid">' + renderSkillItems(g.items) + "</ul>" +
        "</div>"
      );
    }).join("");
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
    var emailCopy = $("contact-copy");
    if (profile.email) {
      email.href = "mailto:" + profile.email;
      email.textContent = profile.email;
      emailCopy.setAttribute("data-copy", profile.email);
      emailCopy.innerHTML = COPY_ICON + CHECK_ICON + '<span class="copy-label">Copy</span>';
    } else {
      email.hidden = true;
      emailCopy.hidden = true;
    }
    var links = [];
    if (profile.github) links.push('<a href="' + esc(profile.github) + '"' + externalAttrs(profile.github) + ">GitHub ↗</a>");
    if (profile.linkedin) links.push('<a href="' + esc(profile.linkedin) + '"' + externalAttrs(profile.linkedin) + ">LinkedIn ↗</a>");
    if (profile.resume) links.push('<a href="' + esc(profile.resume) + '" target="_blank" rel="noopener">Resume ↗</a>');
    $("footer-links").innerHTML = links.join("");
    $("footer-meta").textContent = "© " + new Date().getFullYear() + " " + (profile.name || "") +
      (profile.lastUpdated ? " · last updated " + profile.lastUpdated : "");
  }

  /* ---------- Copy email ---------- */
  // Copies the address and briefly shows "Copied!". Falls back to selecting
  // the text for older browsers that block the clipboard.
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      try { document.execCommand("copy") ? resolve() : reject(); } catch (e) { reject(e); }
      document.body.removeChild(area);
    });
  }
  function setupCopyButtons() {
    var status = $("copy-status");
    document.addEventListener("click", function (event) {
      var btn = event.target.closest && event.target.closest("[data-copy]");
      if (!btn) return;
      var label = btn.querySelector(".copy-label");
      var original = label ? label.getAttribute("data-label") || label.textContent : "";
      if (label) label.setAttribute("data-label", original);
      copyText(btn.getAttribute("data-copy")).then(function () {
        btn.classList.add("is-copied");
        if (label) label.textContent = "Copied!";
        if (status) status.textContent = "Email address copied to clipboard";
        clearTimeout(btn._copyTimer);
        btn._copyTimer = setTimeout(function () {
          btn.classList.remove("is-copied");
          if (label) label.textContent = original;
          if (status) status.textContent = "";
        }, 2000);
      }, function () {
        if (label) label.textContent = btn.getAttribute("data-copy");
      });
    });
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

  /* ---------- Waving hand ---------- */
  // Runs the wave only while the hand is visible, so it isn't animating off screen.
  function setupWave() {
    var hand = document.querySelector(".wave");
    if (!hand) return;
    if (!("IntersectionObserver" in window)) { hand.classList.add("is-onscreen"); return; }
    new IntersectionObserver(function (entries) {
      hand.classList.toggle("is-onscreen", entries[0].isIntersecting);
    }).observe(hand);
  }

  renderHero();
  setupWave();
  renderProjects();
  renderSkills();
  renderExperience();
  renderFooter();
  setupCopyButtons();
  syncToggle();
  setupReveal();

  $("theme-toggle").addEventListener("click", function () {
    setTheme(isDark() ? "light" : "dark");
  });
  if (window.MutationObserver) {
    new MutationObserver(syncToggle).observe(root, { attributes: true, attributeFilter: ["data-theme"] });
  }
})();

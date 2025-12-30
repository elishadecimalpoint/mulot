/* Main scripts (no build step) */
(function () {
  const cfg = window.SITE_CONFIG || {};
  const data = window.SITE_DATA || {};
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function esc(s) {
    return String(s ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function formatDate(iso) {
    try {
      const d = new Date(iso);
      return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });
    } catch {
      return iso;
    }
  }

  function currentPath() {
    const p = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    return p === "" ? "index.html" : p;
  }

  function navLink(href, text, activeOn = []) {
    const active = [href, ...activeOn].includes(currentPath());
    return `<a class="${active ? "active" : ""}" href="${href}">${esc(text)}</a>`;
  }

  function renderHeader() {
    const header = $("#siteHeader");
    if (!header) return;

    const title = esc(cfg.name || "School Website");
    const subtitle = esc(cfg.category || "");
    const phone = esc(cfg.phone1 || "");
    const email = esc(cfg.email || "");
    const loc = esc(cfg.location || "");

    header.innerHTML = `
      <a class="skip" href="#main">Skip to content</a>

      <div class="topbar">
        <div class="container topbar-inner">
          <div class="left">
            <span>📍 ${loc}</span>
            <a href="tel:${phone.replaceAll(" ", "")}">☎ ${phone}</a>
            <a href="mailto:${email}">✉ ${email}</a>
          </div>
          <div class="right">
            <a href="library.html">Library</a>
            <a href="staff.html">Staff</a>
            <a href="contact.html">Contact</a>
          </div>
        </div>
      </div>

      <div class="header">
        <div class="container header-inner">
          <a class="brand" href="index.html">
            <img src="assets/img/logo.svg" alt="${title} logo" />
            <div class="titles">
              <strong>${title}</strong>
              <span>${subtitle}</span>
            </div>
          </a>

          <nav class="nav" aria-label="Primary navigation">
            ${navLink("index.html", "Home")}
            <div class="dropdown" data-dropdown>
              <button type="button" aria-haspopup="true" aria-expanded="false">About ▾</button>
              <div class="dropdown-menu" role="menu">
                <a href="about.html#overview">Overview</a>
                <a href="about.html#leadership">Leadership</a>
                <a href="about.html#values">Vision & Values</a>
                <a href="about.html#policies">Policies</a>
              </div>
            </div>

            <div class="dropdown" data-dropdown>
              <button type="button" aria-haspopup="true" aria-expanded="false">Academics ▾</button>
              <div class="dropdown-menu" role="menu">
                <a href="academics.html#pathways">Pathways (C3)</a>
                <a href="academics.html#curriculum">Curriculum</a>
                <a href="academics.html#assessment">Assessment</a>
                <a href="academics.html#calendar">Academic Calendar</a>
              </div>
            </div>

            ${navLink("departments.html", "Departments")}
            ${navLink("library.html", "Library")}
            ${navLink("staff.html", "Staff Portfolio")}
            ${navLink("admissions.html", "Admissions", ["downloads.html"])}

            <div class="dropdown" data-dropdown>
              <button type="button" aria-haspopup="true" aria-expanded="false">Media ▾</button>
              <div class="dropdown-menu" role="menu">
                <a href="news.html">News</a>
                <a href="index.html#events">Events</a>
                <a href="index.html#notices">Notices</a>
                <a href="contact.html#gallery">Gallery</a>
              </div>
            </div>

            ${navLink("contact.html", "Contact")}
          </nav>

          <div class="header-actions">
            <button class="iconbtn" type="button" id="searchBtn" aria-label="Search site">🔎</button>
            <button class="iconbtn mobile-toggle" type="button" id="mobileBtn" aria-label="Open menu">☰</button>
          </div>
        </div>

        <div class="container mobile-panel" id="mobilePanel" aria-label="Mobile menu">
          <div class="group">
            <a class="link" href="index.html">Home</a>
            <a class="link" href="about.html">About</a>
            <a class="link" href="academics.html">Academics</a>
            <a class="link" href="departments.html">Departments</a>
            <a class="link" href="library.html">Library</a>
            <a class="link" href="staff.html">Staff Portfolio</a>
            <a class="link" href="admissions.html">Admissions</a>
            <a class="link" href="news.html">News</a>
            <a class="link" href="contact.html">Contact</a>
          </div>
        </div>
      </div>
    `;
  }

  function renderFooter() {
    const footer = $("#siteFooter");
    if (!footer) return;

    const title = esc(cfg.name || "School Website");
    const address = esc(cfg.address || "");
    const email = esc(cfg.email || "");
    const phone = esc(cfg.phone1 || "");
    const y = new Date().getFullYear();

    footer.innerHTML = `
      <div class="footer">
        <div class="container">
          <div class="footer-grid">
            <div class="card soft pad">
              <div class="brandline">
                <img src="assets/img/logo.svg" alt="${title} logo" />
                <div>
                  <strong style="color: var(--text)">${title}</strong><br/>
                  <span class="small">${esc(cfg.motto || "")}</span>
                </div>
              </div>
              <p class="small">Official website: <strong>${esc(cfg.domain || "")}</strong></p>
              <p class="small">Address: ${address}</p>
              <p class="small">Email: <a href="mailto:${email}">${email}</a></p>
              <p class="small">Phone: <a href="tel:${phone.replaceAll(" ", "")}">${phone}</a></p>
            </div>

            <div class="card soft pad">
              <h3>Explore</h3>
              <ul class="list">
                <li><a href="academics.html#pathways">C3 Pathways</a></li>
                <li><a href="library.html">Library</a></li>
                <li><a href="departments.html">Departments</a></li>
                <li><a href="staff.html">Staff Portfolio</a></li>
                <li><a href="admissions.html#downloads">Downloads</a></li>
              </ul>
            </div>

            <div class="card soft pad">
              <h3>Quick actions</h3>
              <div style="display:grid; gap:.6rem; margin-top:.5rem;">
                <a class="btn small primary" href="admissions.html">Apply / Admissions</a>
                <a class="btn small" href="contact.html#message">Send a message</a>
                <a class="btn small outline" href="library.html#eresources">E‑Resources</a>
              </div>
            </div>
          </div>

          <div class="fine">
            <span>© ${y} ${title}. All rights reserved.</span>
            <span><a href="#top">Back to top ↑</a></span>
          </div>
        </div>
      </div>
    `;
  }

  function setupDropdowns() {
    // Desktop dropdowns: click to open, click outside to close
    const dropdowns = $$("[data-dropdown]");
    dropdowns.forEach(dd => {
      const btn = $("button", dd);
      btn?.addEventListener("click", (e) => {
        e.stopPropagation();
        const open = dd.classList.toggle("open");
        btn.setAttribute("aria-expanded", String(open));
        // close others
        dropdowns.forEach(other => {
          if (other !== dd) {
            other.classList.remove("open");
            const ob = $("button", other);
            ob?.setAttribute("aria-expanded", "false");
          }
        });
      });
    });

    document.addEventListener("click", () => {
      dropdowns.forEach(dd => {
        dd.classList.remove("open");
        const btn = $("button", dd);
        btn?.setAttribute("aria-expanded", "false");
      });
    });
  }

  function setupMobileMenu() {
    const btn = $("#mobileBtn");
    const panel = $("#mobilePanel");
    if (!btn || !panel) return;
    btn.addEventListener("click", () => panel.classList.toggle("open"));
  }

  function buildSearchIndex() {
    // lightweight in-page search across known pages (titles + snippets)
    const pages = [
      { title: "Home", url: "index.html", text: "Notices, quick links, latest news, events, pathways, principal message" },
      { title: "About", url: "about.html", text: "Vision, mission, values, leadership, policies, background" },
      { title: "Academics", url: "academics.html", text: "C3 pathways STEM Social Science curriculum assessment calendar co-curricular" },
      { title: "Departments", url: "departments.html", text: "STEM Social Science Languages departments subjects teachers" },
      { title: "Library", url: "library.html", text: "E-resources borrowing hours catalog information literacy orientation" },
      { title: "Staff Portfolio", url: "staff.html", text: "Staff directory profiles contacts portfolios" },
      { title: "Admissions", url: "admissions.html", text: "How to apply requirements fees downloads calendar orientation" },
      { title: "News", url: "news.html", text: "School news announcements press releases" },
      { title: "Contact", url: "contact.html", text: "Phone email location message form map" }
    ];

    // add news items
    (data.news || []).forEach(n => pages.push({
      title: `News: ${n.title}`,
      url: `news.html#${n.id}`,
      text: `${n.excerpt} ${(n.body || []).join(" ")}`
    }));

    // add departments
    (data.departments || []).forEach(d => pages.push({
      title: `Department: ${d.name}`,
      url: `department.html?dept=${encodeURIComponent(d.id)}`,
      text: `${d.summary} ${(d.areas || []).join(" ")} ${(d.highlights || []).join(" ")}`
    }));

    // add staff
    (data.staff || []).forEach(s => pages.push({
      title: `Staff: ${s.name}`,
      url: `staff-profile.html?id=${encodeURIComponent(s.id)}`,
      text: `${s.role} ${s.dept} ${s.pathway} ${(s.interests || []).join(" ")} ${(s.bio || "")}`
    }));

    return pages;
  }

  function setupSearch() {
    const btn = $("#searchBtn");
    if (!btn) return;

    const overlay = document.createElement("div");
    overlay.className = "search-overlay";
    overlay.id = "searchOverlay";
    overlay.innerHTML = `
      <div class="search-box card pad" role="dialog" aria-modal="true" aria-label="Site search">
        <div class="search-row">
          <input id="searchInput" placeholder="Search pages, news, departments, staff…" autocomplete="off" />
          <button class="btn small" id="searchClose" type="button">Close</button>
        </div>
        <div class="search-results" id="searchResults"></div>
        <p class="small muted" style="margin-top:.8rem;">Tip: try “STEM”, “library hours”, “departments”, or a staff name.</p>
      </div>
    `;
    document.body.appendChild(overlay);

    const index = buildSearchIndex();
    const input = $("#searchInput", overlay);
    const results = $("#searchResults", overlay);

    function open() {
      overlay.classList.add("open");
      input?.focus();
      input.value = "";
      results.innerHTML = "";
    }
    function close() {
      overlay.classList.remove("open");
    }

    btn.addEventListener("click", open);
    $("#searchClose", overlay).addEventListener("click", close);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

    input?.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      if (!q) { results.innerHTML = ""; return; }
      const hits = index
        .map(p => {
          const hay = (p.title + " " + p.text).toLowerCase();
          const score = hay.includes(q) ? 1 : 0;
          return { ...p, score };
        })
        .filter(x => x.score > 0)
        .slice(0, 10);

      results.innerHTML = hits.length
        ? hits.map(h => `
            <div class="search-result">
              <a href="${h.url}">${esc(h.title)}</a>
              <p>${esc(h.text).slice(0, 140)}…</p>
            </div>
          `).join("")
        : `<div class="search-result"><strong>No results.</strong><p class="muted">Try another keyword.</p></div>`;
    });
  }

  function renderQuickLinks() {
    const el = $("#quickLinks");
    if (!el) return;
    const links = data.quickLinks || [];
    el.innerHTML = links.map(l => `
      <a class="card tile" href="${l.link}">
        <div class="title"><span>${esc(l.icon)}</span><strong>${esc(l.title)}</strong></div>
        <p class="small">${esc(l.desc)}</p>
      </a>
    `).join("");
  }

  function renderNotices() {
    const el = $("#noticesList");
    if (!el) return;
    const notices = data.notices || [];
    el.innerHTML = notices.map(n => `
      <div class="card soft pad">
        <div class="badge">📌 Notice • ${formatDate(n.date)}</div>
        <h3 style="margin-top:.6rem;">${esc(n.title)}</h3>
        <a class="btn small" href="${n.link}">View</a>
      </div>
    `).join("");
  }

  function renderNewsList() {
    const el = $("#newsList");
    if (!el) return;
    const news = data.news || [];
    el.innerHTML = news.map(n => `
      <article class="card pad" id="${esc(n.id)}">
        <div class="badge">📰 ${esc(n.category)} • ${formatDate(n.date)}</div>
        <h3 style="margin-top:.6rem;">${esc(n.title)}</h3>
        <p class="small muted">${esc(n.excerpt)}</p>
        <details class="card soft pad" style="margin-top:.7rem;">
          <summary style="cursor:pointer; font-weight:800;">Read more</summary>
          <div style="margin-top:.7rem;">
            ${(n.body || []).map(p => `<p>${esc(p)}</p>`).join("")}
          </div>
        </details>
      </article>
    `).join("");
  }

  function renderEvents() {
    const el = $("#eventsTableBody");
    if (!el) return;
    const events = data.events || [];
    el.innerHTML = events.map(ev => `
      <tr>
        <td>${formatDate(ev.date)}</td>
        <td><a href="${ev.link}">${esc(ev.title)}</a></td>
        <td>${esc(ev.location)}</td>
      </tr>
    `).join("");
  }

  function renderDepartments() {
    const el = $("#deptGrid");
    if (!el) return;
    const depts = data.departments || [];
    el.innerHTML = depts.map(d => `
      <article class="card pad">
        <div class="badge">🏫 Department</div>
        <h3 style="margin-top:.6rem;">${esc(d.name)}</h3>
        <p class="small muted">${esc(d.summary)}</p>
        <div class="hr"></div>
        <p class="small"><strong>Key areas:</strong> ${esc((d.areas || []).join(", "))}</p>
        <div style="display:flex; gap:.6rem; flex-wrap:wrap; margin-top:.8rem;">
          <a class="btn small primary" href="department.html?dept=${encodeURIComponent(d.id)}">View department</a>
          <a class="btn small" href="staff.html?dept=${encodeURIComponent(d.name)}">View staff</a>
        </div>
      </article>
    `).join("");
  }

  function getParam(name) {
    const u = new URL(location.href);
    return u.searchParams.get(name);
  }

  function renderDepartmentDetail() {
    const host = $("#departmentDetail");
    if (!host) return;
    const id = getParam("dept");
    const dept = (data.departments || []).find(d => d.id === id) || data.departments?.[0];
    if (!dept) return;

    document.title = `${dept.name} — ${cfg.name}`;

    host.innerHTML = `
      <div class="breadcrumbs">
        <a href="index.html">Home</a> <span>›</span>
        <a href="departments.html">Departments</a> <span>›</span>
        <span>${esc(dept.name)}</span>
      </div>

      <div class="card pad">
        <div class="badge">Department</div>
        <h1 style="margin-top:.6rem;">${esc(dept.name)}</h1>
        <p class="lead">${esc(dept.summary)}</p>

        <div class="split" style="margin-top:1.1rem;">
          <div class="card soft pad">
            <h3>Key areas</h3>
            <ul class="list">${(dept.areas || []).map(a => `<li>${esc(a)}</li>`).join("")}</ul>
          </div>
          <div class="card soft pad">
            <h3>Highlights</h3>
            <ul class="list">${(dept.highlights || []).map(a => `<li>${esc(a)}</li>`).join("")}</ul>
          </div>
        </div>

        <div class="hr"></div>

        <div class="split">
          <div>
            <h3>Leadership</h3>
            <p class="small muted"><strong>Department lead:</strong> ${esc(dept.lead)}</p>
            <p class="small muted"><strong>Department email:</strong> <a href="mailto:${esc(dept.email)}">${esc(dept.email)}</a></p>
          </div>
          <div>
            <h3>Related</h3>
            <div style="display:flex; gap:.6rem; flex-wrap:wrap;">
              <a class="btn small primary" href="staff.html?dept=${encodeURIComponent(dept.name)}">Staff in this department</a>
              <a class="btn small" href="academics.html#pathways">Pathways</a>
              <a class="btn small outline" href="library.html#eresources">E‑Resources</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderStaffDirectory() {
    const host = $("#staffDirectory");
    if (!host) return;

    const staff = data.staff || [];
    const deptParam = (getParam("dept") || "").toLowerCase();
    const pathParam = (getParam("pathway") || "").toLowerCase();

    host.innerHTML = `
      <div class="card pad">
        <div class="split" style="align-items:center;">
          <div>
            <div class="badge">👩🏽‍🏫 Staff Portfolio</div>
            <h1 style="margin-top:.6rem;">Staff Directory</h1>
            <p class="lead">Browse staff profiles, departments, and contacts.</p>
          </div>
          <div class="card soft pad">
            <label>
              Search staff
              <input class="input" id="staffSearch" placeholder="Type a name, role, department…" />
            </label>
            <div class="split" style="margin-top:.6rem;">
              <label>
                Department
                <select id="staffDept">
                  <option value="">All</option>
                  ${(Array.from(new Set(staff.map(s => s.dept))).sort()).map(d => `<option>${esc(d)}</option>`).join("")}
                </select>
              </label>
              <label>
                Pathway
                <select id="staffPath">
                  <option value="">All</option>
                  <option>STEM</option>
                  <option>Social Science</option>
                  <option>Both</option>
                </select>
              </label>
            </div>
          </div>
        </div>

        <div class="hr"></div>
        <div class="grid" id="staffGrid"></div>
      </div>
    `;

    const grid = $("#staffGrid");
    const qEl = $("#staffSearch");
    const deptEl = $("#staffDept");
    const pathEl = $("#staffPath");

    if (deptParam) deptEl.value = staff.find(s => s.dept.toLowerCase() === deptParam)?.dept || "";
    if (pathParam) pathEl.value = pathParam === "social" ? "Social Science" : (pathParam.charAt(0).toUpperCase() + pathParam.slice(1));

    function match(s, q, dept, path) {
      const hay = `${s.name} ${s.role} ${s.dept} ${s.pathway}`.toLowerCase();
      const okQ = !q || hay.includes(q);
      const okD = !dept || (s.dept === dept);
      const okP = !path || (s.pathway === path);
      return okQ && okD && okP;
    }

    function render() {
      const q = (qEl.value || "").trim().toLowerCase();
      const dept = deptEl.value || "";
      const path = pathEl.value || "";

      const filtered = staff.filter(s => match(s, q, dept, path));
      grid.innerHTML = filtered.length ? filtered.map(s => `
        <a class="card pad" href="staff-profile.html?id=${encodeURIComponent(s.id)}" style="text-decoration:none;">
          <div class="badge">${esc(s.dept)}</div>
          <h3 style="margin-top:.6rem;">${esc(s.name)}</h3>
          <p class="small muted"><strong>${esc(s.role)}</strong></p>
          <p class="small muted">Pathway: ${esc(s.pathway)}</p>
          <div style="display:flex; gap:.6rem; flex-wrap:wrap; margin-top:.8rem;">
            <span class="badge">✉ ${esc(s.email)}</span>
          </div>
        </a>
      `).join("") : `<p class="muted">No staff matched your filters.</p>`;
    }

    ["input", "change"].forEach(ev => {
      qEl.addEventListener(ev, render);
      deptEl.addEventListener(ev, render);
      pathEl.addEventListener(ev, render);
    });

    render();
  }

  function renderStaffProfile() {
    const host = $("#staffProfile");
    if (!host) return;

    const id = getParam("id");
    const s = (data.staff || []).find(x => x.id === id) || data.staff?.[0];
    if (!s) return;

    document.title = `${s.name} — ${cfg.name}`;

    host.innerHTML = `
      <div class="breadcrumbs">
        <a href="index.html">Home</a> <span>›</span>
        <a href="staff.html">Staff Portfolio</a> <span>›</span>
        <span>${esc(s.name)}</span>
      </div>

      <div class="card pad">
        <div class="badge">${esc(s.dept)} • ${esc(s.pathway)}</div>
        <h1 style="margin-top:.6rem;">${esc(s.name)}</h1>
        <p class="lead"><strong>${esc(s.role)}</strong></p>

        <div class="split" style="margin-top:1rem;">
          <div class="card soft pad">
            <h3>Contact</h3>
            <p class="small muted"><strong>Email:</strong> <a href="mailto:${esc(s.email)}">${esc(s.email)}</a></p>
            <p class="small muted"><strong>Phone:</strong> ${esc(s.phone || "—")}</p>
            <p class="small muted"><strong>Office hours:</strong> ${esc(s.officeHours || "—")}</p>
          </div>
          <div class="card soft pad">
            <h3>Profile</h3>
            <p>${esc(s.bio || "")}</p>
          </div>
        </div>

        <div class="split" style="margin-top:1rem;">
          <div class="card soft pad">
            <h3>Education</h3>
            <ul class="list">${(s.education || []).map(i => `<li>${esc(i)}</li>`).join("")}</ul>
          </div>
          <div class="card soft pad">
            <h3>Interests</h3>
            <ul class="list">${(s.interests || []).map(i => `<li>${esc(i)}</li>`).join("")}</ul>
          </div>
        </div>

        <div class="card soft pad" style="margin-top:1rem;">
          <h3>Publications / Portfolio</h3>
          <ul class="list">${(s.publications || []).map(i => `<li>${esc(i)}</li>`).join("")}</ul>
        </div>

        <div style="display:flex; gap:.6rem; flex-wrap:wrap; margin-top:1rem;">
          <a class="btn small" href="staff.html">Back to staff directory</a>
          <a class="btn small primary" href="contact.html#message">Contact the school</a>
        </div>
      </div>
    `;
  }

  function setupTabs() {
    const containers = $$("[data-tabs]");
    containers.forEach(container => {
      const tabs = $$("[role=tab]", container);
      const panels = $$("[role=tabpanel]", container);

      function activate(tabId) {
        tabs.forEach(t => {
          const selected = t.id === tabId;
          t.setAttribute("aria-selected", String(selected));
          t.tabIndex = selected ? 0 : -1;
        });
        panels.forEach(p => {
          p.classList.toggle("active", p.getAttribute("aria-labelledby") === tabId);
        });
      }

      tabs.forEach(t => {
        t.addEventListener("click", () => activate(t.id));
        t.addEventListener("keydown", (e) => {
          const idx = tabs.indexOf(t);
          if (e.key === "ArrowRight") tabs[(idx + 1) % tabs.length].focus();
          if (e.key === "ArrowLeft") tabs[(idx - 1 + tabs.length) % tabs.length].focus();
        });
      });

      const first = tabs[0]?.id;
      if (first) activate(first);
    });
  }

  function renderHomeBits() {
    renderQuickLinks();
    renderNotices();
    renderEvents();
    // also render a small news preview if present
    const el = $("#newsPreview");
    if (el) {
      const news = (data.news || []).slice(0, 3);
      el.innerHTML = news.map(n => `
        <article class="card pad">
          <div class="badge">📰 ${esc(n.category)} • ${formatDate(n.date)}</div>
          <h3 style="margin-top:.6rem;">${esc(n.title)}</h3>
          <p class="small muted">${esc(n.excerpt)}</p>
          <a class="btn small primary" href="news.html#${esc(n.id)}">Read</a>
        </article>
      `).join("");
    }
  }

  function setDynamicText() {
    // Replace all elements with data-config="key"
    $$("[data-config]").forEach(el => {
      const key = el.getAttribute("data-config");
      if (!key) return;
      const val = cfg[key];
      if (val) el.textContent = val;
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderHeader();
    renderFooter();
    setDynamicText();

    setupDropdowns();
    setupMobileMenu();
    setupSearch();
    setupTabs();

    renderHomeBits();
    renderNewsList();
    renderDepartments();
    renderDepartmentDetail();
    renderStaffDirectory();
    renderStaffProfile();
  });
})();

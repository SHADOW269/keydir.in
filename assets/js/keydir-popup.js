/* ════════════════════════════════════════════════════════════════
   KEYDIR.in — Announcement Popup Panel
   ════════════════════════════════════════════════════════════════
   Drop this file in /assets/js/ and add this to every page's <head>:
     <script src="/assets/js/keydir-popup.js" defer></script>

   Or paste the entire contents at the bottom of shared.js
   ════════════════════════════════════════════════════════════════ */

/* ══════════════════════════════════════════════════════════════
   POPUP DATA — edit this section to update announcements
   ══════════════════════════════════════════════════════════════ */
const POPUP_DATA = {

  /* Version string — increment this to re-show popup to returning visitors */
  version: "2026-05-01",

  /* ── NEW VENDORS ── */
  new_vendors: [
    {
      name: "Ajazz Official",
      url: "https://www.ajazz.in/",
      cats: ["Pre-built","Hall Effect","Mouse"],
      added: "May 2026"
    },
    {
      name: "Conceptkart",
      url: "https://conceptkart.com/pages/keyboard-mouse",
      cats: ["Pre-built","Hall Effect","Mouse","Accessories"],
      added: "May 2026"
    },
    {
      name: "Friction builds",
      url: "https://docs.google.com/document/d/e/2PACX-1vQlbWhsI1WGu0wSb3qZKR7EIvoXzU4ZlMLlk3Xd4xf6R7GtLIC9vGeFDsoyMzWxa2y7p9L-60B5mtpP/pub",
      cats: ["Split-keyboards"],
      added: "May 2026"
    },
    {
      name: "Moon's Peripheral Assembly & Repair Hub",
      url: "https://docs.google.com/document/d/e/2PACX-1vTgzL4WWdAgfIhWp30W5CC2cd7HodrE8Pbhl9rsO7SG3YdN6rYHc-2U0nX4amCVsrrW7sGc3XoDJWWP/pub",
      cats: ["Split-keyboards"],
      added: "May 2026"
    },
  ],

  /* ── UPDATES / CHANGELOG ── */
  updates: [
    { icon: "⬛", text: "Added Mousepad and Glass-pad as separate Pages as Surfaces" },
    { icon: "⬛", text: "Added Mousepad and Glass-pad as separate filter categories" },
    { icon: "⌨", text:  "21 vendors now listed — up from 19 last month" },
    { icon: "📏", text: "Third-party sellers section expanded to 15 entries" },
  ],

};

/* ══════════════════════════════════════════════════════════════
   POPUP STYLES
   ══════════════════════════════════════════════════════════════ */
(function injectPopupStyles() {
  const style = document.createElement("style");
  style.id = "kd-popup-styles";
  style.textContent = `
    /* Overlay */
    #kd-overlay {
      position: fixed; inset: 0; z-index: 9000;
      background: rgba(0,0,0,.55);
      display: flex; align-items: center; justify-content: center;
      padding: 20px;
      animation: kd-fade-in .2s ease;
    }
    @keyframes kd-fade-in { from { opacity: 0 } to { opacity: 1 } }
    @keyframes kd-slide-up { from { opacity: 0; transform: translateY(24px) } to { opacity: 1; transform: none } }

    /* Panel */
    #kd-panel {
      background: var(--bg, #FFFCF0);
      border: 3px solid var(--border, #111);
      box-shadow: 12px 12px 0 var(--shadow, #111);
      width: 100%; max-width: 580px;
      max-height: 88vh;
      display: flex; flex-direction: column;
      animation: kd-slide-up .28s ease;
      position: relative;
      overflow: hidden;
    }

    /* Header bar */
    #kd-header {
      background: var(--border, #111);
      color: var(--yellow, #FAFF00);
      padding: 14px 20px;
      display: flex; align-items: center; justify-content: space-between;
      border-bottom: 3px solid var(--border, #111);
      flex-shrink: 0;
    }
    #kd-header-left {
      display: flex; align-items: center; gap: 10px;
    }
    #kd-header-dot {
      width: 9px; height: 9px; background: var(--green, #00FF6A);
      border-radius: 50%; animation: blink 1s step-end infinite; flex-shrink: 0;
    }
    #kd-header-title {
      font-family: var(--f-m, 'JetBrains Mono', monospace);
      font-size: .72rem; font-weight: 800; letter-spacing: .1em;
      text-transform: uppercase;
    }
    #kd-version-tag {
      font-family: var(--f-m, 'JetBrains Mono', monospace);
      font-size: .62rem; color: #555; letter-spacing: .06em;
    }
    #kd-close {
      background: var(--yellow, #FAFF00); color: #111;
      border: 2px solid var(--yellow, #FAFF00);
      font-family: var(--f-m, 'JetBrains Mono', monospace);
      font-size: .72rem; font-weight: 800; padding: 4px 12px;
      cursor: pointer; text-transform: uppercase; letter-spacing: .06em;
      transition: all .12s; flex-shrink: 0;
    }
    #kd-close:hover { background: #fff; border-color: #fff; }

    /* Tab bar */
    #kd-tabs {
      display: flex; border-bottom: 2px solid var(--border, #111);
      background: var(--bg, #FFFCF0); flex-shrink: 0;
    }
    .kd-tab {
      flex: 1; padding: 11px 10px;
      font-family: var(--f-m, 'JetBrains Mono', monospace);
      font-size: .7rem; font-weight: 700; text-transform: uppercase;
      letter-spacing: .06em; color: var(--text-muted, #555);
      border: none; background: transparent; cursor: pointer;
      border-right: 2px solid var(--border, #111);
      transition: all .12s; display: flex; align-items: center;
      justify-content: center; gap: 6px;
    }
    .kd-tab:last-child { border-right: none; }
    .kd-tab:hover { background: var(--bg-alt, #F5F2E4); }
    .kd-tab.active {
      background: var(--yellow, #FAFF00); color: #111;
      border-bottom: 2px solid var(--yellow, #FAFF00);
    }
    .kd-tab-badge {
      background: var(--green, #00FF6A); color: #111;
      font-size: .58rem; font-weight: 800; padding: 2px 6px;
      border: 1px solid #111; min-width: 18px; text-align: center;
    }
    .kd-tab.active .kd-tab-badge {
      background: #111; color: var(--yellow, #FAFF00);
    }

    /* Body */
    #kd-body {
      overflow-y: auto; flex: 1;
      padding: 0;
    }
    #kd-body::-webkit-scrollbar { width: 4px; }
    #kd-body::-webkit-scrollbar-track { background: var(--bg-alt, #F5F2E4); }
    #kd-body::-webkit-scrollbar-thumb { background: var(--border, #111); }

    /* Panels */
    .kd-panel-content { display: none; }
    .kd-panel-content.active { display: block; }

    /* New vendor cards */
    .kd-vendor-card {
      border-bottom: 2px solid var(--border, #111);
      padding: 18px 20px;
      display: flex; align-items: flex-start; gap: 14px;
      background: var(--surface, #FFFCF0);
      transition: background .1s;
    }
    .kd-vendor-card:hover { background: var(--bg-alt, #F5F2E4); }
    .kd-vendor-card:last-child { border-bottom: none; }
    .kd-vendor-num {
      font-family: var(--f-m, 'JetBrains Mono', monospace);
      font-size: .6rem; font-weight: 800; color: var(--text-dim, #999);
      background: var(--border, #111); color: var(--surface, #FFFCF0);
      padding: 2px 6px; flex-shrink: 0; margin-top: 2px; letter-spacing: .04em;
    }
    .kd-vendor-info { flex: 1; min-width: 0; }
    .kd-vendor-name {
      font-family: var(--f-d, 'Space Grotesk', sans-serif);
      font-size: 1.05rem; font-weight: 800; text-transform: uppercase;
      letter-spacing: -.03em; color: var(--text, #111);
      margin-bottom: 6px;
    }
    .kd-vendor-cats { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 8px; }
    .kd-cat-badge {
      font-family: var(--f-m, 'JetBrains Mono', monospace);
      font-size: .6rem; font-weight: 700; text-transform: uppercase;
      padding: 2px 8px; border: 2px solid var(--border, #111);
      letter-spacing: .04em; background: var(--surface, #FFFCF0);
      color: var(--text, #111);
    }
    .kd-vendor-meta {
      font-family: var(--f-m, 'JetBrains Mono', monospace);
      font-size: .62rem; color: var(--text-dim, #999);
      display: flex; align-items: center; gap: 6px;
    }
    .kd-added-dot { width: 5px; height: 5px; background: var(--green, #00FF6A); border-radius: 50%; }
    .kd-visit-btn {
      display: inline-flex; align-items: center; gap: 5px;
      font-family: var(--f-m, 'JetBrains Mono', monospace);
      font-size: .68rem; font-weight: 700; text-transform: uppercase;
      padding: 6px 12px; background: var(--text, #111);
      color: var(--surface, #FFFCF0); border: 2px solid var(--border, #111);
      text-decoration: none; flex-shrink: 0;
      box-shadow: 3px 3px 0 var(--shadow, #111);
      transition: all .12s; align-self: center;
    }
    .kd-visit-btn:hover {
      background: var(--yellow, #FAFF00); color: #111;
      box-shadow: 1px 1px 0 var(--shadow, #111);
      transform: translate(2px, 2px);
    }

    /* Updates list */
    .kd-update-item {
      display: flex; align-items: flex-start; gap: 14px;
      padding: 16px 20px; border-bottom: 2px solid var(--border, #111);
      background: var(--surface, #FFFCF0); transition: background .1s;
    }
    .kd-update-item:hover { background: var(--bg-alt, #F5F2E4); }
    .kd-update-item:last-child { border-bottom: none; }
    .kd-update-icon {
      font-size: 1.1rem; flex-shrink: 0;
      width: 36px; height: 36px; border: 2px solid var(--border, #111);
      display: flex; align-items: center; justify-content: center;
      background: var(--bg-alt, #F5F2E4); box-shadow: 2px 2px 0 var(--shadow, #111);
    }
    .kd-update-text {
      font-family: var(--f-m, 'JetBrains Mono', monospace);
      font-size: .78rem; line-height: 1.7; color: var(--text-muted, #555);
      padding-top: 6px;
    }

    /* Terms panel */
    #kd-terms-panel {
      padding: 24px 20px;
    }
    .kd-terms-intro {
      background: var(--yellow, #FAFF00); border: 2px solid var(--border, #111);
      padding: 14px 16px; box-shadow: 4px 4px 0 var(--shadow, #111);
      margin-bottom: 20px;
      font-family: var(--f-m, 'JetBrains Mono', monospace);
      font-size: .8rem; line-height: 1.8; color: #111;
    }
    .kd-terms-intro strong { font-weight: 800; }
    .kd-terms-item {
      display: flex; align-items: flex-start; gap: 12px;
      padding: 12px 0; border-bottom: 1px solid var(--border-subtle, #ccc);
      font-family: var(--f-m, 'JetBrains Mono', monospace); font-size: .78rem;
      line-height: 1.7; color: var(--text-muted, #555);
    }
    .kd-terms-item:last-of-type { border-bottom: none; margin-bottom: 20px; }
    .kd-terms-icon { font-size: .9rem; flex-shrink: 0; margin-top: 2px; }
    .kd-terms-full-btn {
      display: flex; align-items: center; justify-content: space-between;
      padding: 14px 18px; border: 2px solid var(--border, #111);
      background: var(--text, #111); color: var(--surface, #FFFCF0);
      text-decoration: none;
      font-family: var(--f-m, 'JetBrains Mono', monospace);
      font-size: .78rem; font-weight: 700; text-transform: uppercase;
      letter-spacing: .06em; box-shadow: 4px 4px 0 var(--shadow, #111);
      transition: all .12s;
    }
    .kd-terms-full-btn:hover {
      background: var(--yellow, #FAFF00); color: #111;
      box-shadow: 2px 2px 0 var(--shadow, #111);
      transform: translate(2px, 2px);
    }

    /* Footer */
    #kd-footer {
      background: var(--border, #111);
      padding: 10px 20px;
      display: flex; align-items: center; justify-content: space-between;
      flex-shrink: 0;
      border-top: 2px solid var(--border, #111);
    }
    #kd-footer-note {
      font-family: var(--f-m, 'JetBrains Mono', monospace);
      font-size: .62rem; color: #444; letter-spacing: .06em;
    }
    #kd-dismiss-btn {
      font-family: var(--f-m, 'JetBrains Mono', monospace);
      font-size: .68rem; font-weight: 700; text-transform: uppercase;
      letter-spacing: .06em; background: transparent;
      color: var(--green, #00FF6A); border: 2px solid var(--green, #00FF6A);
      padding: 5px 14px; cursor: pointer; transition: all .12s;
    }
    #kd-dismiss-btn:hover {
      background: var(--green, #00FF6A); color: #111;
    }

    /* Dark mode */
    [data-theme="dark"] #kd-panel { background: var(--bg); border-color: var(--border); box-shadow: 12px 12px 0 #000; }
    [data-theme="dark"] .kd-vendor-card,
    [data-theme="dark"] .kd-update-item { background: var(--surface); }
    [data-theme="dark"] .kd-vendor-card:hover,
    [data-theme="dark"] .kd-update-item:hover { background: var(--surface-raised); }
    [data-theme="dark"] .kd-update-icon { background: var(--bg-alt); }
    [data-theme="dark"] .kd-terms-intro { background: #2A2800; color: var(--yellow, #FAFF00); }
    [data-theme="dark"] .kd-terms-intro strong { color: var(--yellow); }
    [data-theme="dark"] .kd-visit-btn:hover { color: #111; }
    [data-theme="dark"] #kd-footer-note { color: #333; }

    @media (max-width: 480px) {
      #kd-panel { max-width: 100%; margin: 0; }
      #kd-overlay { padding: 0; align-items: flex-end; }
      #kd-panel { border-left: none; border-right: none; border-bottom: none; box-shadow: 0 -6px 0 #111; max-height: 80vh; }
      .kd-tab { font-size: .6rem; padding: 9px 6px; }
    }
  `;
  document.head.appendChild(style);
})();


/* ══════════════════════════════════════════════════════════════
   POPUP RENDERER
   ══════════════════════════════════════════════════════════════ */
function buildKeyDirPopup() {
  const { new_vendors, updates, version } = POPUP_DATA;

  /* ── Already dismissed this version? Skip. ── */
  const seen = localStorage.getItem("kd-popup-seen");
  if (seen === version) return;

  /* ── Build HTML ── */
  const overlay = document.createElement("div");
  overlay.id = "kd-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", "KEYDIR.in Announcements");

  overlay.innerHTML = `
    <div id="kd-panel">

      <!-- Header -->
      <div id="kd-header">
        <div id="kd-header-left">
          <div id="kd-header-dot"></div>
          <div id="kd-header-title">// KEYDIR_UPDATES</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px">
          <span id="kd-version-tag">v${version}</span>
          <button id="kd-close" aria-label="Close announcement">[ X ]</button>
        </div>
      </div>

      <!-- Tab bar -->
      <div id="kd-tabs" role="tablist">
        <button class="kd-tab active" data-panel="vendors" role="tab" aria-selected="true">
          🏪 New Vendors
          <span class="kd-tab-badge">${new_vendors.length}</span>
        </button>
        <button class="kd-tab" data-panel="updates" role="tab" aria-selected="false">
          📋 Updates
          <span class="kd-tab-badge">${updates.length}</span>
        </button>
        <button class="kd-tab" data-panel="terms" role="tab" aria-selected="false">
          📖 T&amp;C
        </button>
      </div>

      <!-- Body -->
      <div id="kd-body">

        <!-- Panel: New vendors -->
        <div class="kd-panel-content active" id="kd-panel-vendors">
          ${new_vendors.map((v, i) => `
            <div class="kd-vendor-card">
              <span class="kd-vendor-num">NEW_${String(i + 1).padStart(2, "0")}</span>
              <div class="kd-vendor-info">
                <div class="kd-vendor-name">${v.name}</div>
                <div class="kd-vendor-cats">
                  ${v.cats.map(c => `<span class="kd-cat-badge">${c}</span>`).join("")}
                </div>
                <div class="kd-vendor-meta">
                  <span class="kd-added-dot"></span>
                  Added ${v.added}
                </div>
              </div>
              <a href="${v.url}" target="_blank" rel="noopener" class="kd-visit-btn">
                VISIT ↗
              </a>
            </div>
          `).join("")}
        </div>

        <!-- Panel: Updates -->
        <div class="kd-panel-content" id="kd-panel-updates">
          ${updates.map(u => `
            <div class="kd-update-item">
              <div class="kd-update-icon">${u.icon}</div>
              <div class="kd-update-text">${u.text}</div>
            </div>
          `).join("")}
        </div>

        <!-- Panel: Terms -->
        <div class="kd-panel-content" id="kd-panel-terms">
          <div id="kd-terms-panel">
            <div class="kd-terms-intro">
              <strong>KEYDIR.in is a free, non-commercial, community-maintained directory.</strong><br/>
              No ads. No affiliate links. No sponsored placements. Ever.
            </div>

            <div class="kd-terms-item">
              <span class="kd-terms-icon">✓</span>
              <span>You may fork and adapt the project for non-commercial use with attribution.</span>
            </div>
            <div class="kd-terms-item">
              <span class="kd-terms-icon">✓</span>
              <span>Directory data may be used for personal research, education, and community discussion.</span>
            </div>
            <div class="kd-terms-item">
              <span class="kd-terms-icon">✗</span>
              <span>Commercial use, reselling data, or monetizing forks is strictly prohibited.</span>
            </div>
            <div class="kd-terms-item">
              <span class="kd-terms-icon">⚠</span>
              <span>Directory data may be incomplete or outdated. Always verify vendors independently before purchasing.</span>
            </div>
            <div class="kd-terms-item">
              <span class="kd-terms-icon">⚠</span>
              <span>KEYDIR.in and its maintainers are not responsible for purchase decisions, vendor reliability, or any financial loss.</span>
            </div>

            <a href="/Terms-and-Conditions/" class="kd-terms-full-btn">
              <span>Read Full Terms &amp; Conditions</span>
              <span>→</span>
            </a>
          </div>
        </div>

      </div><!-- /#kd-body -->

      <!-- Footer -->
      <div id="kd-footer">
        <span id="kd-footer-note">// NO_ADS · NO_AFFILIATES · COMMUNITY_POWERED</span>
        <button id="kd-dismiss-btn">GOT IT ✓</button>
      </div>

    </div><!-- /#kd-panel -->
  `;

  document.body.appendChild(overlay);

  /* ── Tab switching ── */
  const tabs    = overlay.querySelectorAll(".kd-tab");
  const panels  = overlay.querySelectorAll(".kd-panel-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t  => { t.classList.remove("active"); t.setAttribute("aria-selected","false"); });
      panels.forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      tab.setAttribute("aria-selected","true");
      const target = overlay.querySelector(`#kd-panel-${tab.dataset.panel}`);
      if (target) target.classList.add("active");
    });
  });

  /* ── Close / dismiss ── */
  function closePopup() {
    overlay.style.animation = "kd-fade-in .18s ease reverse";
    setTimeout(() => overlay.remove(), 180);
    localStorage.setItem("kd-popup-seen", version);
  }

  overlay.querySelector("#kd-close").addEventListener("click", closePopup);
  overlay.querySelector("#kd-dismiss-btn").addEventListener("click", closePopup);

  /* Close on backdrop click */
  overlay.addEventListener("click", e => { if (e.target === overlay) closePopup(); });

  /* Close on Escape */
  document.addEventListener("keydown", function escHandler(e) {
    if (e.key === "Escape") { closePopup(); document.removeEventListener("keydown", escHandler); }
  });
}

/* ── Show popup only once every 7 days ── */

const POPUP_KEY = "keydir_popup_last_seen";
const WEEK_IN_MS = 7 * 24 * 60 * 60 * 1000;

document.addEventListener("DOMContentLoaded", () => {

  function shouldShowPopup() {
    const lastSeen = localStorage.getItem(POPUP_KEY);

    // First visit
    if (!lastSeen) return true;

    // Show again after 7 days
    return (Date.now() - parseInt(lastSeen, 10)) > WEEK_IN_MS;
  }

  if (shouldShowPopup()) {

    /* Slight delay so the page has time to render first */
    setTimeout(() => {
      buildKeyDirPopup();

      // Save current timestamp
      localStorage.setItem(POPUP_KEY, Date.now());
    }, 600);

  }

});
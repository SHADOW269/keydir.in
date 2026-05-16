<table style="border: none; border-collapse: collapse;">
  <tr>
    <td width="110" style="border: none; padding: 0;">
      <img src="assets/img/favicon-512.png" alt="KEYDIR.in Logo" width="100">
    </td>
    <td style="border: none; padding: 0 0 0 16px;">
      <h1>⌨ KEYDIR.in</h1>
      <b>India's community-maintained mechanical keyboard directory</b><br>
      Vendors · Builders · Brand Stores · No ads. No affiliates. Just data.<br><br>
      <a href="https://keydir.in">🌐 keydir.in</a> &nbsp;·&nbsp;
      <a href="https://github.com/SHADOW269/keydir.in/issues/new">🐛 Report an issue</a> &nbsp;·&nbsp;
      <a href="https://github.com/SHADOW269/keydir.in/fork">🍴 Fork & contribute</a> &nbsp;·&nbsp;
      <a href="https://github.com/SHADOW269/App.Keydir.in">🚀 App (WIP)</a>
    </td>
  </tr>
</table>

---

## 📌 Quick Navigation

- [What's inside](#whats-inside)
- [Categories](#categories)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Reporting issues](#reporting-issues)
- [Project goals](#project-goals)
- [Roadmap](#️-roadmap)
- [Related projects](#related-projects)
- [License](#license)

## What's inside

| Section | Description |
| --- | --- |
| **Vendors** | Verified Indian keyboard vendors, filterable by category |
| **DIY Builders** | Custom cable makers, artisan keycap crafters, bespoke keyboard services |
| **Brand Stores** | Official India storefronts — Keychron, Redragon, TVS, and more |
| **Surface** | Verified Indian Mousepad deskpad and glasspad vendors.  |
| **Beginner's Guide** | Friendly mechanical keyboard buying & modding guide |

---

## Categories

The vendor directory supports filtering across **15 categories**:

`Pre-built` `Barebone` `Switches` `Keycaps` `Parts / Tools` `Accessories` `Mouse` `Mousepad` `Deskpad` `Glass-pad` `PC Parts` `Hall Effect` `Alice` `Split` `Low-Profile`

---

## Features

- 🇮🇳 India-focused vendor discovery
- ⚡ Fast static site — no frameworks, no bloat
- 🔍 Multi-select category filtering with search
- 🏷️ Clickable category badges on each vendor card
- 🧩 Builder and brand store listings
- ⚠️ Community warning flags for vendor concerns
- 📚 Beginner-friendly modding guide
- 🧼 Zero ads, zero tracking, zero affiliate links

---

## Tech stack

Built intentionally simple:

- **HTML + CSS + Vanilla JS** — no build tools, no dependencies
- **`shared.js`** — single source of truth for all vendor data
- **GitHub Pages** — static hosting
- **Fonts:** Space Grotesk, JetBrains Mono
- **Design:** NeoBrutalist

---

## Project structure

```
keydir.in/
├── index.html
├── vendors/index.html
├── builders/index.html
├── brands/index.html
├── surfaces/index.html
├── guide/index.html
├── about/index.html
├── Terms-and-Conditions/index.html
├── assets/
│   ├── img/
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── keydir-popup.js ← mention the new updates here
│       ├── shared.js       ← edit vendor data here
│       └── theme.js
└── README.md
```

---

## Reporting issues

Found something wrong or outdated? [Open an issue →](https://github.com/SHADOW269/keydir.in/issues/new)

Please include:
- Vendor name
- Problem description
- Suggested fix
- Evidence (if reporting a warning flag)

---

## Project goals

KEYDIR exists to:

- Help Indian keyboard enthusiasts discover trusted vendors
- Reduce dependency on scattered Discord links
- Improve ecosystem transparency
- Document the India mechanical keyboard scene

---

## 🗺️ Roadmap

### Directory Improvements

* Clickable category badges for quick filtering
* Separate keyboard and mouse/deskpad vendor sections
* Vendors selling both categories will appear in both using tags
* Better filtering for accessories, switches, keycaps, and deskpads
* Vendor last-verified dates
* Group buy tracker

### Aggregator — App.Keydir.in

[App.Keydir.in](https://github.com/SHADOW269/App.Keydir.in) is an advanced keyboard product aggregator currently in development.

Current progress includes:

* Multi-vendor product scraping
* Product normalization and aggregation
* Search and filtering system
* Product comparison UI
* Docker-based local development setup
* PCPartPicker-style comparison platform for Indian keyboard vendors

---

## Related projects

| Project | Description |
| --- | --- |
| [KEYDIR.in](https://keydir.in) | This repo — static community directory |
| [App.Keydir.in](https://github.com/SHADOW269/App.Keydir.in) | Advanced keyboard aggregator app (WIP) |

---

## License

Non-Commercial Community Use License — free to fork, modify, and use for non-commercial purposes. Attribution required. See [LICENSE](LICENSE) for full terms.

---

<p align="center">
  Built with ❤️ for the 🇮🇳 mechanical keyboard community
  <br><br>
  <a href="https://keydir.in">
    <img src="assets/img/Banner.png" alt="KEYDIR.in Banner" width="100%">
  </a>
</p>

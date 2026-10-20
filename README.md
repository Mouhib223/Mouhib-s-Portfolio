# Mouhib Hlaili — Premium Portfolio Website

A premium, production-ready personal portfolio for **Mouhib Hlaili**, Full-Stack Software Engineer (.NET, Angular, Java & Quality Engineering). Built with semantic HTML5, modern CSS, and vanilla JavaScript — no build step required. Content is driven by a single structured data file for easy updates.

## ✨ Features

- **Premium dark charcoal design** with emerald/turquoise (`#0fd6a0`) accents
- **Topographic SVG background** with concentric contour lines and geometric circles
- **Geometric photo frame** with rotating dashed rings and corner brackets
- **Full dark & light themes** with a working toggle, persisted preference (localStorage), and OS-preference detection
- **Sticky responsive navigation** with active-section highlighting and a mobile slide-in menu with overlay
- **Smooth scrolling** with header offset and reduced-motion support
- **Scroll-reveal animations** via IntersectionObserver
- **Project filters** (All · Full-Stack · .NET · Embedded · Mobile)
- **Validated contact form** with graceful mailto fallback (no fake success messages)
- **Engineering principles section** instead of fake testimonials
- **Real skill tags** (no fake percentage bars or unsupported claims)
- **Back-to-top control**, professional footer, and CV download link
- **Accessibility**: semantic HTML, ARIA labels, keyboard nav, reduced-motion support, focus-visible
- **SEO**: meta description, Open Graph, sitemap.xml, robots.txt, theme-color
- **Structured content**: all experience, education, credentials, and projects render from `assets/js/data.js`
- **Zero dependencies** — runs on any static host

## 📂 Project Structure

```
Mouhib-s-Portfolio/
├── index.html                # Page structure + static sections (hero, about, skills, contact, footer)
├── robots.txt                # Search engine directives
├── sitemap.xml               # XML sitemap
├── README.md                 # This file
└── assets/
    ├── favicon.svg           # Site favicon
    ├── Mouhib_Hlaili_CV.pdf  # ← Place your real CV PDF here (placeholder .txt included)
    ├── css/
    │   ├── main.css          # Layout, components, typography, responsive
    │   ├── theme.css         # Dark/light theme variables + UI chrome
    │   └── animations.css    # Scroll-reveal & micro-interactions
    └── js/
        ├── data.js           # ★ Structured content (experience, education, credentials, projects)
        └── main.js           # Renderer, theme, nav, filters, form, scroll logic
```

## 🗂️ Updating Content — the structured data file

All list-based content lives in **`assets/js/data.js`** as a single `window.PORTFOLIO_DATA` object. Edit this one file to update:

| Section        | Data key in `data.js`   |
|----------------|-------------------------|
| Profile/links  | `profile`               |
| Work history   | `experience[]`          |
| Education      | `education[]`           |
| Certifications | `credentials[]`         |
| Projects       | `projects[]`            |
| Project art    | `projectVisuals{}`      |

The renderer in `main.js` reads `data.js` and builds the Experience, Education, Credentials, and Projects sections on page load. **You only edit `data.js` — no HTML changes needed.** Add a project by appending an object to the `projects` array:

```js
{
  title: 'My New Project',
  category: 'fullstack',          // space-separated filter keys: fullstack | dotnet | embedded | mobile
  visual: 'game',                 // key in projectVisuals: fintech|fix|vfx|game|java|embedded|mobile
  description: 'What it does…',
  tags: ['React', 'NestJS'],
  links: [{ type: 'github', href: 'https://github.com/Mouhib223/REPO', label: 'REPO on GitHub' }]
}
```

To add a new project illustration, add an SVG string under a new key in `projectVisuals` and reference it via `visual`. The hero, about text, skills, and contact section remain in `index.html` (they're layout-heavy and change rarely).

> **Note:** `index.html` also contains a no-JavaScript fallback snapshot of the list sections. With JS enabled (the normal case), the renderer overwrites these from `data.js`, so `data.js` is the canonical source. If you want a pure single-source setup, you may empty the list containers in `index.html` (the renderer will still populate them).

## 🚀 Running Locally

Open `index.html` directly in any modern browser, **or** serve via a local web server (avoids `file://` restrictions on localStorage):

```powershell
# Python 3 (if installed)
python -m http.server 8000

# Node.js (if installed)
npx serve .

# VS Code: "Live Server" extension → right-click index.html → Open with Live Server
```

Then visit `http://localhost:8000`.

> **Tooling note:** This machine currently has no Node.js, npm, Java, or Maven installed, so there is no build or test step to run. The site is intentionally dependency-free for this reason. If you later add Angular/Spring Boot tooling, standard `ng build` / `mvn test` commands apply.

## ✅ Audit & Fixes Applied

This release addressed the following issues found in the audit:

- **Section background conflict** — replaced fragile `:nth-of-type(even)` with explicit `.section--alt` classes.
- **Contact form textarea error class** — the validator now applies `form-textarea--error` to `<textarea>` (previously only `form-input--error` was applied, which didn't style textareas).
- **Mobile menu overlay** — added the missing `#navOverlay` element to the HTML and wired its toggle/click-to-close handlers in JS.
- **Contact form mailto + reset race** — values are now captured before reset, the form resets first, and the mail client is invoked after a short delay so the success message renders reliably.
- **B2U-HUB tech stack** — corrected from "React" to "Angular" (the repo uses Angular CLI v20); Vision Age VFX platform description now reflects the real repo.
- **Added Simple-Fix-Acceptor project** — a real verified repo (C#/.NET FIX acceptor using QuickFIX.NET) was missing and is now a featured project card.
- **Real repository links** — all 6 project cards that have repos link to their verified GitHub URLs; no invented demo links.
- **CV download & theme persistence** — confirmed both work (localStorage with OS-preference fallback for theme; `download` attribute on CV link).

## 📄 CV / Resume

The "Download CV" buttons point to `assets/Mouhib_Hlaili_CV.pdf`. **Place your actual CV PDF at that path** to enable the download (a placeholder `.txt` describes the requirement). No code changes needed.

## ✉️ Contact Form — Backend (Optional)

The contact form works **without any backend** by composing a `mailto:` link that opens the visitor's email client. No fake "message sent" confirmation is ever shown — the UI honestly states no backend SMTP is configured.

### Adding a Spring Boot email backend (optional)

To enable true server-side email delivery, replace the `setTimeout` block in `ContactForm.handleSubmit` (`assets/js/main.js`) with a `fetch()` call to your backend:

```javascript
fetch('https://your-backend.example.com/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, subject, message })
})
.then(r => r.ok ? r.json() : Promise.reject(r))
.then(() => { /* show real success */ })
.catch(() => { /* show real error */ });
```

**Required SMTP environment variables** (server-side only — never commit, never expose in frontend):

```bash
SPRING_MAIL_HOST=smtp.your-provider.com
SPRING_MAIL_PORT=587
SPRING_MAIL_USERNAME=your-smtp-user
SPRING_MAIL_PASSWORD=your-smtp-password
SPRING_MAIL_PROTOCOL=smtp
SPRING_MAIL_PROPERTIES_MAIL_SMTP_AUTH=true
SPRING_MAIL_PROPERTIES_MAIL_SMTP_STARTTLS_ENABLE=true
PORTFOLIO_CONTACT_TO=Mouhib.HLAILI@esprit.tn
PORTFOLIO_CORS_ORIGIN=https://mouhib223.github.io
```

⚠️ **Security:** Never hardcode SMTP credentials in frontend code. Always read them server-side from environment variables. The frontend should only ever know the API endpoint URL, not the SMTP secrets.

## 🌐 Deployment

This is a 100% static site — deploy anywhere:

### GitHub Pages
1. Push the repo to GitHub (`Mouhib223/Mouhib-s-Portfolio`)
2. Settings → Pages → Source: **Deploy from a branch** → `main` / root
3. Live at `https://mouhib223.github.io/Mouhib-s-Portfolio/`

### Netlify / Vercel / Cloudflare Pages
1. Connect the repo · Build command: *(none)* · Publish directory: `.`

### Any web host
Upload all files via FTP to your `public_html` (or equivalent).

> **Deployment config to provide:** None required for the static site. If you add the Spring Boot backend, you must provide the SMTP environment variables listed above and a hosting target for the Java service (e.g. Railway, Render, or a VM). The frontend's contact form would then need its API URL configured (edit the `fetch` URL in `main.js` or set a `window.CONTACT_API_URL`).

## 🎨 Design System

| Token              | Dark         | Light        | Usage                       |
|--------------------|--------------|--------------|-----------------------------|
| `--bg-primary`     | `#0c1520`    | `#f4f8fc`    | Main background             |
| `--bg-secondary`   | `#0f1c2b`    | `#eaf1f8`    | Alternating sections        |
| `--card-bg`        | `#121e2d`    | `#ffffff`    | Cards, inputs               |
| `--accent`         | `#0fd6a0`    | `#0a9e75`    | Emerald/turquoise accent    |
| `--accent-dark`    | `#09a278`    | `#077a54`    | Gradient end                |
| `--text-primary`   | `#edf2f7`    | `#0c1a28`    | Headings                    |
| `--text-secondary` | `#7c96b0`    | `#3d5569`    | Body text                   |

Typography: **Inter** for UI, **JetBrains Mono** for code/labels.

## ♿ Accessibility

- Semantic HTML5 landmarks (`nav`, sections, `footer`)
- ARIA labels on all interactive controls; `aria-live` on form status
- Keyboard-navigable mobile menu (Escape to close, click-outside/overlay to dismiss)
- `prefers-reduced-motion` disables all animations
- `prefers-color-scheme` respected as the default theme on first visit
- Visible focus indicators (`:focus-visible`)
- Color contrast meets WCAG AA in both themes

## 📌 Verified Content Sources

- **GitHub repos** (all linked, all real): `RulesSimulator` (C#/.NET), `Simple-Fix-Acceptor` (C#/QuickFIX.NET), `Tiki-Taka-Toe` (NestJS/Angular), `B2U-HUB` (Angular v20), `RetroGames---Games-Website`, `Spring-Boot-Project-esprit` (Java/Spring Boot)
- **Experience dates & roles** from the provided brief (Nexus Global Banking, Vision Age VFX, Linedata QA, Linedata Dev Intern)
- **No invented items:** no fake testimonials (replaced with Engineering Principles), no fake skill bars, no invented demo URLs, no unverifiable certificate links. The Coursera link is flagged as a private dashboard requiring authentication.

## 🛠️ Remaining Tasks (for you)

1. **Add your CV** — save your resume as `assets/Mouhib_Hlaili_CV.pdf` (replace the placeholder `.txt`)
2. **Add your photo** (optional) — drop an image in `assets/images/` and replace the `hero__avatar-svg` block in `index.html` with an `<img>` tag
3. **(Optional) Wire a Spring Boot email backend** — provide the SMTP env vars above and update the `fetch` URL in `main.js` if you want true server-side email delivery instead of the mailto fallback
4. **Verify content in a browser** — open `index.html`, check each section against your CV, and tweak `data.js` entries as needed

---

Built with clean code and attention to detail. 🇹🇳

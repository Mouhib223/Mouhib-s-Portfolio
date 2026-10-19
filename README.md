# Mouhib Hlaili — Premium Portfolio Website

A premium, production-ready personal portfolio for **Mouhib Hlaili**, Full-Stack Software Engineer (.NET, Angular, Java & Quality Engineering). Built with semantic HTML5, modern SCSS-style CSS, and vanilla JavaScript — no build step required.

![Portfolio Preview](assets/favicon.svg)

## ✨ Features

- **Premium dark charcoal design** with emerald/turquoise accents
- **Topographic SVG patterns** and geometric photo framing
- **Fully designed dark & light themes** with a working toggle and persisted preference (localStorage)
- **Sticky responsive navigation** with active-section highlighting and a mobile slide-in menu
- **Smooth scrolling** with header offset and reduced-motion support
- **Scroll-reveal animations** powered by IntersectionObserver
- **Project filters** (All, Full-Stack, .NET, Embedded, Mobile)
- **Validated contact form** with graceful mailto fallback (no fake success messages)
- **Engineering principles section** instead of fake testimonials
- **Real skill tags** (no fake percentage bars or unsupported claims)
- **Back-to-top control**, professional footer, and CV download link
- **Accessibility**: semantic HTML, ARIA labels, keyboard navigation, reduced-motion support, focus-visible outlines
- **SEO**: meta description, Open Graph tags, sitemap.xml, robots.txt
- **Zero dependencies** — runs on any static host

## 📂 Project Structure

```
Mouhib-s-Portfolio/
├── index.html              # Main page with all 8 sections
├── robots.txt              # Search engine directives
├── sitemap.xml             # XML sitemap for SEO
├── README.md               # This file
└── assets/
    ├── favicon.svg         # Site favicon
    ├── Mouhib_Hlaili_CV.pdf  # ← Place your real CV PDF here (see note below)
    ├── css/
    │   ├── main.css        # Layout, components, typography
    │   ├── theme.css       # Dark/light theme variables
    │   └── animations.css  # Scroll-reveal & micro-interactions
    ├── js/
    │   └── main.js         # Theme, nav, filters, form, scroll logic
    └── images/             # (reserved for real project screenshots / photo)
```

## 🚀 Getting Started

### Option 1 — Open directly

Just open `index.html` in any modern browser. Everything works locally with no server required.

### Option 2 — Local development server (recommended)

Running through a local server avoids any browser security restrictions on `file://` URLs (localStorage, smooth scroll, etc.).

```powershell
# Python 3 (built-in on most systems)
python -m http.server 8000

# Node.js (if installed)
npx serve .

# VS Code: install the "Live Server" extension, then right-click index.html → "Open with Live Server"
```

Then visit `http://localhost:8000` in your browser.

## 📝 Content & Customization

All content lives directly in `index.html`. To update:

- **Personal info, bio, experience, education, credentials** → edit the corresponding `<section>` in `index.html`
- **Projects** → edit the `#projectsGrid` cards. Each card has a `data-category` attribute for filtering (space-separated values: `fullstack dotnet embedded mobile`)
- **Skills** → edit the `.skill-tags` blocks in the Skills section
- **Contact email / social links** → search and replace `Mouhib.HLAILI@esprit.tn`, the LinkedIn URL, and GitHub URL throughout `index.html`
- **Theme colors** → edit the CSS variables in `assets/css/theme.css` (`--accent`, `--bg-primary`, etc.)

## 📄 CV / Resume

The "Download CV" buttons point to `assets/Mouhib_Hlaili_CV.pdf`. **Place your actual CV PDF at that path** to enable the download. A placeholder note file is included there describing the requirement.

## ✉️ Contact Form — Backend (Optional)

The contact form works **without any backend** by composing a `mailto:` link that opens the visitor's email client with the message pre-filled. This is honest: no fake "message sent" confirmation is ever shown.

### Adding a Spring Boot email backend (optional)

If you want true server-side email delivery, the project is structured to accept it. Create a Spring Boot service and replace the `setTimeout` block in `assets/js/main.js` (inside `ContactForm.handleSubmit`) with a `fetch()` call:

```javascript
// Replace the mailto handoff with:
fetch('http://localhost:8080/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, subject, message })
})
.then(r => r.ok ? r.json() : Promise.reject(r))
.then(() => { /* show real success */ })
.catch(() => { /* show real error */ });
```

**Spring Boot SMTP environment variables** (never committed, never exposed in frontend):

```bash
SPRING_MAIL_HOST=smtp.your-provider.com
SPRING_MAIL_PORT=587
SPRING_MAIL_USERNAME=your-smtp-user
SPRING_MAIL_PASSWORD=your-smtp-password
SPRING_MAIL_PROTOCOL=smtp
SPRING_MAIL_PROPERTIES_MAIL_SMTP_AUTH=true
SPRING_MAIL_PROPERTIES_MAIL_SMTP_STARTTLS_ENABLE=true
PORTFOLIO_CONTACT_TO=Mouhib.HLAILI@esprit.tn
```

⚠️ Never hardcode SMTP credentials in frontend code. Always read them server-side from environment variables.

## 🌐 Deployment

This is a 100% static site — deploy anywhere:

### GitHub Pages
1. Push the repo to GitHub
2. Go to **Settings → Pages**
3. Source: **Deploy from a branch** → `main` / root
4. Your site goes live at `https://Mouhib223.github.io/Mouhib-s-Portfolio/`

### Netlify / Vercel / Cloudflare Pages
1. Connect the repo
2. Build command: *(none)*
3. Publish directory: `.` (root)
4. Deploy

### Any web host
Upload all files via FTP to your `public_html` or equivalent directory.

## 🎨 Design System

| Token            | Dark value   | Light value  | Usage                       |
|------------------|--------------|--------------|-----------------------------|
| `--bg-primary`   | `#0f1923`    | `#f8fafc`    | Main background             |
| `--bg-secondary` | `#111d2b`    | `#f1f5f9`    | Alternating sections        |
| `--card-bg`      | `#141f2e`    | `#ffffff`    | Cards, inputs               |
| `--accent`       | `#10d9a0`    | `#0a9e75`    | Emerald/turquoise accent    |
| `--text-primary` | `#f0f4f8`    | `#0d1f2d`    | Headings, primary text      |
| `--text-secondary`| `#8ea2b8`   | `#475569`    | Body, secondary text        |

Typography: **Inter** for UI text, **JetBrains Mono** for code/labels.

## ♿ Accessibility

- Semantic HTML5 landmarks (`nav`, `main` sections, `footer`)
- ARIA labels on all interactive controls
- Keyboard-navigable mobile menu (Escape to close, click-outside to dismiss)
- `prefers-reduced-motion` disables all animations
- `prefers-color-scheme` respected as the default theme on first visit
- Visible focus indicators (`:focus-visible`)
- Color contrast meets WCAG AA in both themes

## 🛠️ Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, grid, flexbox, `clamp()`
- **Vanilla JavaScript (ES6+)** — no frameworks, no bundlers
- **Inline SVG illustrations** — custom for every project card
- **Google Fonts** — Inter + JetBrains Mono

## 📌 Note on Original Assets

The CV file and a real photo were referenced in the request but were not present in the workspace at build time. The portfolio uses:

- A custom **SVG avatar illustration** as a photo placeholder (replace `hero__avatar-svg` in `index.html` with an `<img>` tag pointing to your photo in `assets/images/` when ready)
- A placeholder note at `assets/Mouhib_Hlaili_CV.pdf.txt` describing where to drop the real CV

All professional information (experience dates, education, projects, skills, languages) was taken from the request brief and the public GitHub profile at `github.com/Mouhib223`. No personal details, credentials, testimonials, or statistics were invented.

## 📜 License

Personal portfolio. Code structure is free to reference; content (name, projects, experience) belongs to Mouhib Hlaili.

---

Built with clean code and attention to detail. 🇹🇳

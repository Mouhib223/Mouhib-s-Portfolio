# Mouhib Hlaili — Portfolio Website

A premium personal portfolio for **Mouhib Hlaili**, Full-Stack Software Engineer &amp; QA Analyst
(.NET · Angular · React · Java · Quality Engineering). Built with semantic HTML5, modern CSS custom
properties, and vanilla JavaScript. No build tools, no frameworks, no dependencies — open
`index.html` and it works.

---

## Quick start — preview locally

### Option 1: Double-click (simplest)
Open `index.html` directly in any modern browser (Chrome, Firefox, Edge, Safari). Everything works
except that `localStorage` theme-persistence may be blocked by some browsers on `file://` URLs.

### Option 2: Python local server (recommended — avoids `file://` quirks)
```bash
# Python 3
python -m http.server 8080
```
Then open **http://localhost:8080** in your browser.

### Option 3: Node.js
```bash
npx serve .
# or
npx http-server . -p 8080
```

### Option 4: VS Code
Install the **Live Server** extension, right-click `index.html` → **Open with Live Server**.

> **No Node.js, npm, Java, or Maven is needed** — this is a pure static site.

---

## Project structure

```
Mouhib-s-Portfolio/
├── index.html                  # The entire single-page portfolio
├── robots.txt                  # Search-engine directives
├── sitemap.xml                 # XML sitemap
├── README.md                   # This file
└── assets/
    ├── favicon.svg             # SVG favicon
    ├── Mouhib_Hlaili_CV.pdf    # ← place your real CV PDF here (see below)
    ├── css/
    │   ├── main.css            # Layout, components, typography, responsive
    │   ├── theme.css           # Dark / light theme variables and chrome
    │   └── animations.css      # Scroll-reveal and micro-interaction keyframes
    ├── js/
    │   ├── data.js             # ★ Structured content — edit this to update sections
    │   └── main.js             # Theme, navigation, filters, contact form, renderer
    └── images/
        └── Photo MouHib.jpg   # Your profile photo (1536 × 2048, portrait)
```

### Updating content
All list-based content (experience, education, certifications, projects) is driven by
**`assets/js/data.js`**. Edit that one file — no HTML changes needed.

For the static sections (hero bio, about text, skills, contact details), edit `index.html` directly.

---

## CV / resume

The "Download CV" buttons point to `assets/Mouhib_Hlaili_CV.pdf`.
Save your CV as exactly that filename in the `assets/` folder and the download buttons will work
automatically. A placeholder `.txt` file is included at that path describing the requirement.

---

## Contact form

The form is **frontend-only** — it composes a `mailto:` link and opens your email client.
No fake "message sent" state is ever shown; an honest info note tells visitors how it works.

To add a real backend (Spring Boot / any SMTP service), replace the `setTimeout` block in
`ContactForm.handleSubmit` inside `assets/js/main.js` with a `fetch()` call to your API:

```javascript
fetch('https://api.your-domain.com/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, subject, message })
})
.then(r => r.ok ? r.json() : Promise.reject(r.status))
.then(() => { /* show real success */ })
.catch(() => { /* show real error */ });
```

### Required Spring Boot SMTP environment variables (server-side only — never in frontend code)

| Variable | Purpose |
|---|---|
| `SPRING_MAIL_HOST` | SMTP server hostname |
| `SPRING_MAIL_PORT` | SMTP port (usually 587 for TLS) |
| `SPRING_MAIL_USERNAME` | SMTP login |
| `SPRING_MAIL_PASSWORD` | SMTP password — **never committed to Git** |
| `SPRING_MAIL_PROPERTIES_MAIL_SMTP_AUTH` | `true` |
| `SPRING_MAIL_PROPERTIES_MAIL_SMTP_STARTTLS_ENABLE` | `true` |
| `PORTFOLIO_CONTACT_TO` | `Mouhib.HLAILI@esprit.tn` |
| `PORTFOLIO_CORS_ORIGIN` | Your published portfolio URL |

---

## Publishing to GitHub Pages

### Step 1 — push to GitHub
```bash
cd "C:\Users\DELL\Desktop\Mouhib's portfolio\Mouhib-s-Portfolio"
git add .
git commit -m "Portfolio: polish and content updates"
git push origin main
```

If this is a new remote:
```bash
git remote add origin https://github.com/Mouhib223/Mouhib-s-Portfolio.git
git branch -M main
git push -u origin main
```

### Step 2 — enable GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** → **Pages** (left sidebar).
3. Under **Source**, select **Deploy from a branch**.
4. Choose **Branch: main** and **Folder: / (root)**.
5. Click **Save**.

### Step 3 — your live URL
After 1–2 minutes your site will be live at:

```
https://Mouhib223.github.io/Mouhib-s-Portfolio/
```

GitHub sends you an email when it's deployed, and the URL appears under Settings → Pages.

### Custom domain (optional)
To use `mouhib.dev` or similar:
1. Add a `CNAME` file in the project root containing your domain.
2. Configure your domain registrar's DNS to point to GitHub Pages (see
   [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).

---

## Certifications — link policy

The certification links in the Credentials section point to **official course pages** on Coursera
or the provider's website — not to personal certificate verification URLs. Coursera's
`my-learning` dashboard is private (requires login) and is not linked publicly.

Board Infinity and RBK certificates (`.NET Full Stack Foundation`, `C# for .NET Developers`,
`Docker Certification`) do not have publicly accessible course pages that could be verified, so
those cards display without a link. This is intentional and honest.

---

## Credentials — note on verification

> "Links point to official course pages on Coursera or provider sites — not to personal
> certificates, which are held privately."

---

## Design tokens (quick reference)

| Token | Dark | Light |
|---|---|---|
| `--bg-primary` | `#0c1520` | `#f4f8fc` |
| `--accent` | `#0fd6a0` | `#0a9e75` |
| `--text-primary` | `#edf2f7` | `#0c1a28` |
| `--text-secondary` | `#7c96b0` | `#3d5569` |

Typography: **Inter** for UI, **JetBrains Mono** for code and labels.

---

## Accessibility

- Semantic HTML5 landmarks and ARIA labels throughout.
- Full keyboard navigation; mobile menu dismisses on Escape or overlay click.
- `prefers-reduced-motion` disables all animations.
- `prefers-color-scheme` sets the default theme on first visit; choice is persisted in `localStorage`.
- Focus indicators visible on every interactive element (`:focus-visible`).

---

*No private credentials, API keys, or local machine paths are exposed in this repository.*

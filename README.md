# Ana Khidasheli — link-in-bio site

A single-screen personal site for a 2D animator. Plain HTML, CSS and ES-module JS. No build step, no runtime dependencies.

## Run locally

From this folder:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. A plain server is required (ES modules do not load over `file://`).

## Edit content

Everything editable lives in one file: [`data/content.js`](data/content.js).

| Field | What it does |
| --- | --- |
| `name` | Big name in the pink cloud. |
| `role` | White subtitle under the raindrops. |
| `socials.instagram[]` | Rows inside the Instagram modal. Add or remove entries freely. |
| `socials.linkedin` | LinkedIn icon target. Opens in a new tab. |
| `portfolio.href` | Portfolio button target. Defaults to `portfolio/Portfolio_Ana.pdf`. |
| `contact.email.user` / `contact.email.domain` | Assembled into a `mailto:` at click time so the raw address never appears in the HTML. |
| `commissionsOpen` | Set `true` to reveal the "Commissions open" line under the buttons. |
| `meta.*` | Description, canonical URL, OG image path, theme color. |

Colors are CSS custom properties in one `:root` block at the top of [`styles/main.css`](styles/main.css) — change `--bg`, `--pink`, `--ink`, and the rain / modal tokens there.

## Where to drop assets

| File | Location | Notes |
| --- | --- | --- |
| Portfolio PDF | `portfolio/Portfolio_Ana.pdf` | Update `portfolio.href` in `content.js` if you rename it. |
| Profile picture | `assets/img/profile.png` | Shown in each Instagram row inside the modal. Wire it in `scripts/main.js` where `modal__avatar` is created. |
| OG cover | `assets/img/og-cover.png` | 1200×630. A placeholder is included; replace it with the real cover art. |
| Real SVG illustrations | `assets/illustrations/` | Paste the path into the existing inline `<svg>` in `index.html` or swap for an `<img>`. |
| Display font | `assets/fonts/darumadrop-one.woff2` | Darumadrop One (primary), Gochi Hand kept as fallback. Change the face via the `--font-display` variable in `main.css`. |

## Structure

```
index.html         one-screen layout, all inline SVG shapes
404.html           themed not-found page
styles/main.css    tokens, layout, motion, modal, reduced-motion fallback
scripts/main.js    hydration, modal, focus trap, mailto assembly
data/content.js    editable content
assets/            fonts, images, icons, illustrations
portfolio/         portfolio PDF
favicon.svg        cloud + raindrop icon
site.webmanifest   PWA manifest
robots.txt         allows crawling; points at sitemap
sitemap.xml        single URL entry
```

## Placeholders to replace before publishing

Search the repo for `REPLACE` and `TODO`. In particular:

- `data/content.js` — Instagram handles, LinkedIn URL, email parts, canonical URL, name spelling (sketch said "Ani").
- `index.html`, `robots.txt`, `sitemap.xml` — canonical URL / hostname.
- `portfolio/Portfolio_Ana.pdf` — the real PDF.
- `assets/img/og-cover.png` — real cover.

## Accessibility notes

- Semantic landmarks (`<main>`, `<nav>`, `<h1>`, `<h2>`).
- All decorative SVG is `aria-hidden="true"`; interactive icon buttons carry an `aria-label`.
- Modal is `role="dialog"`, `aria-modal="true"`, `aria-labelledby` its title. Opens on click, closes on Esc, backdrop click, or the X. Focus is trapped inside while open and returned to the trigger on close.
- Motion is wrapped in `@media (prefers-reduced-motion: no-preference)`; the site is fully usable with animations disabled.
- Colors meet WCAG AA against their backgrounds. Focus outlines are visible on every interactive element.

## Deploy (later)

Any static host — GitHub Pages, Cloudflare Pages, Netlify, Vercel. No build command; publish this folder as-is. Point the custom domain at the host and confirm HTTPS.

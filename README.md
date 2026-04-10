# RECILO — Waste becomes culture

Grant-facing project website for RECILO, a circular art and education platform transforming waste into large-scale installations through collective creation.

Built as a fully static, single-page, scroll-based site using **HTML + CSS + Vanilla JS**. No frameworks. No build tools. No backend.

---

## Stack

- HTML5
- CSS3 (custom properties, mobile-first, clamp-based fluid type)
- Vanilla JavaScript (Intersection Observer for scroll reveal, custom counter and word-reveal animations)
- Google Fonts: Manrope + Source Sans 3

---

## Project Structure

```
.
├── index.html
├── css/
│   ├── reset.css
│   ├── variables.css          ← design tokens (colors, type, spacing)
│   ├── typography.css
│   ├── layout.css             ← sections, grids, buttons, cards, utilities
│   ├── animations.css
│   └── sections/
│       ├── nav.css
│       ├── hero.css
│       ├── about.css
│       ├── problem.css
│       ├── model.css
│       ├── work.css
│       ├── impact.css
│       ├── studio.css
│       ├── kids.css
│       ├── funding.css
│       ├── founder.css
│       ├── cta.css
│       └── footer.css
├── js/
│   ├── nav.js                 ← mobile menu + scroll state
│   └── animations.js          ← scroll reveal, word reveal, counters
├── assets/
│   ├── images/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── problem/
│   │   ├── work/
│   │   ├── impact/
│   │   ├── studio/
│   │   ├── kids/
│   │   ├── founder/
│   │   └── cta/
│   └── logo/
│       ├── recilo-logo-white.svg
│       └── recilo-logo-dark.svg
└── README.md
```

Reference documentation is in `md/`:
- `md/RECILO_BRAND.md` — full brand guidelines
- `md/RECILO_SPEC.md` — full project specification

---

## Screens

1. **Hero** — `Waste to Art`
2. **What is RECILO** — intro, arc-masked image
3. **The Problem** — large animated counter stats
4. **Our Model** — 4-step flow (Collect → Transform → Engage → Build)
5. **Current Work** — 3 project cards
6. **Impact** — Environmental / Social / Educational
7. **RECILO Studio** — infrastructure overview
8. **RECILO Kids Lab** — upcoming program (warm kids accent color)
9. **Funding** — support CTA
10. **Founder** — Anna Niss, circular portrait
11. **Final CTA** — Partner / Commission / Support

---

## Running locally

No build step. Just open `index.html` in a browser, or serve the directory with any static file server:

```bash
# Python 3
python3 -m http.server 8000

# Node (via npx)
npx serve .
```

Then visit `http://localhost:8000`.

---

## Deploying to GitHub Pages

1. Push the repo to GitHub.
2. In the repo settings → Pages, set the source to the `main` branch, root folder.
3. GitHub Pages will serve `index.html` as the root.

---

## Design System

All design tokens are defined in `css/variables.css`.

### Colors

| Token | Hex | Use |
|---|---|---|
| `--color-prussian-blue` | `#0F244A` | Primary bg, headings |
| `--color-ash-grey` | `#B9CEB7` | Accent, muted text on dark |
| `--color-white` | `#FFFFFF` | Text on dark, clean surfaces |
| `--color-tech-blue` | `#0D5BBA` | CTAs, links |
| `--color-almond-cream` | `#EBDECE` | Warm bgs, Impact section |
| `--color-kids` | `#E79A4C` | Kids Lab accent only |
| `--color-art` | `#4BBBE6` | Art sub-brand accent |
| `--color-camp` | `#E7DF4C` | Camp sub-brand accent |
| `--color-merch` | `#8C4CE7` | Merch sub-brand accent |

### Fonts

- **Manrope** — headings, nav, CTAs, logo text
- **Source Sans 3** — body text, descriptions

### Breakpoints

Mobile-first. Base styles = `< 768px`.

- `768px` → tablet / desktop
- `1024px` → wide desktop (inherits from 768)
- `1280px` → content max width

---

## CTA Links (find-and-replace guide)

All external action links use `data-link` attributes so they can be updated in one sweep when URLs are confirmed:

```html
<a href="#" data-link="partner">…</a>
<a href="#" data-link="support">…</a>
<a href="#" data-link="commission">…</a>
```

To update, grep for `data-link="support"` (or the relevant key) and replace the `href`.

---

## Image Placeholders

Real images are wired in from `assets/images/**`. If a slot needs a placeholder, use:

```html
<div class="img-placeholder" data-section="hero" data-slot="1">
  Hero BG — Large installation, people in action
</div>
```

Replace with `<img src="…" alt="…">` when the real asset arrives.

---

## Accessibility

- All interactive elements have visible focus states
- Touch targets ≥ 48×48px
- `prefers-reduced-motion` disables all animations
- Landmark regions (`<header>`, `<main>`, `<footer>`, `<nav>`)
- `alt` attributes on all content images, `aria-hidden` on decorative images
- Mobile menu toggle announces `aria-expanded`

---

## Delivery Checklist

- [x] All sections render at 375px, 390px, 768px, 1280px
- [x] Mobile navigation with hamburger overlay
- [x] Scroll-triggered text + card animations
- [x] Counter animations on Problem and Impact
- [x] No horizontal scroll on mobile
- [x] `alt` attributes on all images
- [x] `data-link` on all CTAs
- [x] `prefers-reduced-motion` support
- [x] Smooth scroll to sections
- [x] Logo in nav + footer

---

## Notes for Content Updates

- **Kids Lab is upcoming.** Framing must remain "future program" — critical for grant credibility.
- **Studio is not a sub-brand.** It shares the master brand identity, no distinct visual treatment.
- **Sub-brand accent colors** (Kids, Art, Camp, Merch) are reserved for their specific contexts only.
- **Logo:** The current SVGs in `assets/logo/` are placeholder wordmarks. Replace with final brand assets when received.

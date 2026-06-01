# RECILO — Project Knowledge Base

> Use this file as context when making changes to the RECILO website in any new chat session.

---

## 1. Business Overview

**RECILO** is a New York City–based community organization that turns waste into art, education, and social impact.

**Mission:** Help clean New York City from waste by bringing people together in a friendly, uplifting, and socially meaningful community.

**Core idea:** Not just about picking up waste — building a vibrant community where caring for the planet becomes part of a lifestyle, self-expression, and a future career path.

### Sub-brands / Projects

| Key | Name | Accent colour | Description |
|-----|------|--------------|-------------|
| `art` | Recilo Art | `#4BBBE6` (Sky Surge) | Public art installations from recycled materials |
| `kids` | Recilo Teens | `#E79A4C` (Golden Apricot) | Community for teenagers — volunteering, art, leadership, college portfolio |
| `studio` | Recilo Studio | `#B9CEB7` (Ash Grey) | Therapeutic creative space for adults making art from recycled materials |

### Contact & Social

| Platform | Link / Handle |
|----------|--------------|
| Email | reciloart@gmail.com |
| Instagram | https://www.instagram.com/recilo.art/ |
| Facebook | https://www.facebook.com/profile.php?id=61564782507844 |
| YouTube | https://www.youtube.com/channel/UC2phcv-V1BmGuANfRKr5PEw |
| TikTok | https://www.tiktok.com/@reciloart |
| Pinterest | https://www.pinterest.com/reciloart/ |
| WhatsApp Group | https://chat.whatsapp.com/FOyMxn9Y6yE9wF0r6qAwJ8?mode=gi_t |

**Address:**
```
100 Greyrock Pl
Stamford, CT 06901
United States
```

**Donation / Stripe link:** https://buy.stripe.com/3cIbJ151M5I14rze6t7AI04

---

## 2. Repository & Hosting

| Item | Value |
|------|-------|
| Git remote | `ssh://git@ssh.github.com:443/yuraduk/recilo.git` |
| Branch | `main` |
| Hosting | **Netlify** (also mirrors to GitHub Pages at `yuraduk.github.io`) |
| Local dev server | `python3 -m http.server 8080` from project root |
| Local project path | `/Users/yuraduk/Data/Claude Folder/RECILO/` |

### Deploy timing
After `git push`, Netlify/GitHub Pages CDN takes **1–2 minutes** to update.

---

## 3. Tech Stack

- **Pure static site** — single `index.html`, no framework, no build step
- **CSS** — mobile-first, custom properties, modular per-section files
- **JS** — vanilla, inline `<script>` at bottom of `index.html`
- **Fonts** — Google Fonts: `Manrope` (primary) + `Source Sans 3` (secondary)
- **Images** — WebP format, 1200×600px for galleries, optimised with Pillow (Python)

---

## 4. File Structure

```
RECILO/
├── index.html                  ← single page, all sections + all JS
├── css/
│   ├── variables.css           ← design tokens (colours, spacing, fonts)
│   ├── reset.css
│   ├── typography.css
│   ├── layout.css
│   ├── animations.css
│   └── sections/
│       ├── nav.css             v2
│       ├── hero.css            v2
│       ├── about.css           v3
│       ├── problem.css         v1
│       ├── work.css            v9
│       ├── impact.css          v1
│       ├── studio.css          v1
│       ├── kids.css            v1
│       ├── funding.css         v2
│       ├── founder.css         v3
│       ├── cta.css             v1
│       ├── footer.css          v2
│       └── overlay.css         v5
└── assets/
    ├── logo/
    │   ├── recilo-logo-white.svg   ← used in nav + footer (white, for dark bg)
    │   ├── recilo-logo-dark.svg
    │   └── MAIN_LOGO_RECILO.svg
    └── images/
        ├── hero/
        ├── about/
        ├── problem/
        ├── recilo_art/         ← WebP, 1200×600px
        ├── recilo_teens/       ← WebP/PNG
        ├── recilo_studio/      ← WebP/PNG
        ├── impact/
        ├── founder/
        ├── cta/
        └── work/
```

---

## 5. CSS Design Tokens (variables.css)

### Colours
```css
--color-prussian-blue: #1C4187    /* primary brand, headings */
--color-ash-grey:      #B9CEB7    /* accent, muted text */
--color-white:         #FFFFFF
--color-tech-blue:     #0D5BBA
--color-wisteria-blue: #85A7EA
--color-almond-cream:  #EBDECE
--color-bg-dark:       #1C4187
--color-bg-darker:     #0A1A38    /* nav scrolled, footer */
--color-card-dark:     #0D1B35
--color-text-muted-light: #6B7A8F

/* Sub-brand colours */
--color-art:   #4BBBE6
--color-kids:  #E79A4C
```

### Spacing
```css
--space-xs:  0.5rem  /*  8px */
--space-sm:  1rem    /* 16px */
--space-md:  1.5rem  /* 24px */
--space-lg:  2rem    /* 32px */
--space-xl:  3rem    /* 48px */
--space-2xl: 5rem    /* 80px */
--space-3xl: 8rem    /* 128px */
```

### Layout
```css
--content-max-width:        1280px
--content-max-width-narrow: 960px
--section-padding-x: clamp(1.25rem, 5vw, 3rem)
--section-padding-y: clamp(4rem, 10vw, 8rem)
--nav-height-mobile: 56px
--nav-height-desktop: 64px
--radius-sm: 4px  |  --radius-md: 8px  |  --radius-lg: 16px
```

### Fonts
```css
--font-primary:   'Manrope', system-ui, sans-serif
--font-secondary: 'Source Sans 3', system-ui, sans-serif
```

---

## 6. Page Sections (top → bottom)

| # | ID | Class | Description |
|---|----|-------|-------------|
| 1 | `#hero` | `.hero` | Full-screen hero with background image |
| 2 | `#about` | `.about` | What is RECILO — text + photo, mission SVG illustration |
| 3 | `#problem` | `.problem` | The Problem — stats |
| 4 | `#work` | `.work` | Our Projects — 3 cards (Art, Teens, Studio) |
| 5 | `#impact` | `.impact` | Impact stats |
| 6 | `#studio` | `.studio` | Recilo Studio section |
| 7 | `#kids` | `.kids` | Recilo Teens section |
| 8 | `#funding` | `.funding` | Support Us — funding ask |
| 9 | `#founder` | `.founder` | Founder section |
| 10 | `#join` | `.cta` | Final CTA — Support Us + Stripe button |
| — | — | `.footer` | Footer: logo, nav, social icons, copyright |

**Removed section:** "How We Work" (`.model`) — was Screen 4, fully deleted.

---

## 7. Project Overlay System

Clicking a project card opens a fullscreen overlay with zoom-expand animation.

### Trigger
```html
<button class="project-card project-card--art" onclick="openProjectOverlay('art', this)">
```

### JS Data Object (`PROJECTS` in index.html)
Each project key (`art`, `kids`, `studio`) has:
```js
{
  label, title, accent,   // header info
  heroImg,                // path to hero image
  tags: [],               // tag chips in hero
  stats: [],              // { value, label }
  concept: { eyebrow, heading, paragraphs: [] },
  gallery: { main: [], thumbs: [] },  // image paths
  how: { eyebrow, heading, steps: [{ title, text }] },
  impact: { eyebrow, heading, accentPills: [], pills: [] }
}
```

### CTA in overlay
Shown **only for `art`** project. Hidden for `kids` and `studio` via:
```js
document.getElementById('ovCta').style.display = projectKey === 'art' ? '' : 'none';
```

### Gallery
- Horizontal snap carousel
- Desktop: arrows (prev/next) + thin scrollbar
- Mobile: touch scroll
- Slide size: `flex: 0 0 72vw; max-width: 320px` (mobile) / `340px` (desktop)
- `aspect-ratio: 4 / 3`, `object-fit: cover`

---

## 8. Navigation

- **Mobile:** fullscreen overlay menu (hamburger toggle), social icons below nav links
- **Desktop:** inline row — logo | links | social icons (separated by thin border-left)
- Fixed position, becomes `background: #0A1A38` on scroll (`.is-scrolled`)

**Nav links:** What We Do · Our Work · Impact · Studio · Support
*(Kids Lab was removed)*

**Social icons in nav:** Email, Instagram, Facebook, YouTube, TikTok, Pinterest, WhatsApp

---

## 9. CDN Cache-Busting Rule

> **Every time a CSS file is modified, bump its `?v=N` query param in index.html.**

```html
<!-- Example: after editing overlay.css, increment the version -->
<link rel="stylesheet" href="css/sections/overlay.css?v=5" />
```

Same applies to images if they're referenced with `?v=`:
```html
<img src="assets/images/hero/hero-bg.png?v=2" />
```

**Why:** Netlify/GitHub Pages CDN aggressively caches files. Without the version bump, users see the old cached version.

---

## 10. Image Guidelines

| Use | Format | Size | Quality |
|-----|--------|------|---------|
| Gallery slides | WebP | 1200 × 600 px | 85% |
| Overlay hero | WebP | 1200 × 600 px | 85% |
| Hero bg | PNG/WebP | 1920px wide | — |

**Optimisation tool:** Python Pillow (never use `sips` — fails on paths with spaces)
```bash
python3 -c "
from PIL import Image
img = Image.open('input.webp')
img = img.resize((1200, 600), Image.LANCZOS)
img.save('output.webp', 'WEBP', quality=85, method=6)
"
```

**Hero preload links** (top of `<head>`, update if hero images change):
```html
<link rel="preload" as="image" href="assets/images/recilo_art/3.webp">
<link rel="preload" as="image" href="assets/images/recilo_teens/9.png">
<link rel="preload" as="image" href="assets/images/recilo_studio/1.png">
```

---

## 11. Commit & Push Rules

### ⚠️ Critical rules
- **Never push or bump versions without explicit user request.** The user will say "пушай і бампай" or "push and bump" when ready.
- **Never force-push** to `main`.
- **Always create new commits**, never amend existing ones.

### Commit message format
```
Short imperative title (under 70 chars)

- Bullet describing what changed
- Another bullet

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```

Use a heredoc to avoid quoting issues:
```bash
git commit -m "$(cat <<'EOF'
Title here

- Change 1
- Change 2

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
EOF
)"
```

### Typical push flow
```bash
git add <specific files>      # never git add -A blindly
git commit -m "..."
git push
```

### Staging images
```bash
git add assets/images/recilo_art/1.webp   # add by name
```

---

## 12. Recilo Teens — Gallery Images

Current order in JS data:
```js
main:   ['8.png', '11.png', '13.png']
thumbs: ['9.png', '10.png']
```
Hero: `9.png`

---

## 13. Recilo Art — Gallery Images

Current order in JS data:
```js
main:   ['1.webp', '2.webp', '4.webp']
thumbs: ['5.webp', '6.webp', '7.webp', '8.webp', '9.webp']
```
Hero: `3.webp`

---

## 14. Key Buttons & Links

| Location | Label | Action |
|----------|-------|--------|
| Hero section | Support Our Work | Stripe donation link |
| Funding section | Support Our Work | Stripe donation link |
| Overlay CTA (Art only) | Support Our Work | Stripe donation link |
| Final CTA section | Support Our Work | Stripe donation link |

**Stripe link:** `https://buy.stripe.com/3cIbJ151M5I14rze6t7AI04`

---

## 15. Content Notes

- **Language:** English only throughout the site
- **"Plastic" → "recycled materials"** — editorial decision made throughout; keep factual stats (e.g. "9% of plastic recycled globally") unchanged
- The mission section uses an inline SVG illustration (Flow/Variant C) instead of a bullet list
- "Kids Lab" was removed from navigation

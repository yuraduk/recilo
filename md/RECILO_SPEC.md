# RECILO Website — Full Project Specification
> Version: 1.0 | Language: English | Stack: HTML + CSS + Vanilla JS
> Purpose: Grant-facing project website. Shows the project works, demonstrates impact, explains the model, justifies funding (Kids Lab).

---

## 1. Project Overview

| Field | Value |
|---|---|
| **Client** | RECILO |
| **Type** | Static website (single-page, scroll-based) |
| **Stack** | HTML5 + CSS3 + Vanilla JS (no frameworks, no build tools) |
| **Hosting** | GitHub Pages |
| **Repo name** | `recilo` |
| **Language** | English only |
| **Primary audience** | Grant organizations, partners, donors — mostly mobile |
| **Device priority** | Mobile-first. Must look perfect on mobile. Desktop is secondary. |
| **Analytics** | None for now |
| **SEO** | None for now (used as a business card, not for promotion) |
| **Backend** | None. Fully static. |
| **Forms** | All CTAs are `<a href>` links only |

---

## 2. File Structure

```
recilo/
├── index.html
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── typography.css
│   ├── layout.css
│   ├── animations.css
│   └── sections/
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
│       └── nav.css
├── js/
│   ├── animations.js       ← text animations, scroll reveal
│   └── nav.js              ← mobile navigation
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

---

## 3. Design System

### Colors (from Brand Book)
```css
:root {
  /* Primary */
  --prussian-blue: #0F244A;
  --ash-grey: #B9CEB7;
  --white: #FFFFFF;

  /* Secondary */
  --tech-blue: #0D5BBA;
  --wisteria-blue: #85A7EA;
  --almond-cream: #EBDECE;

  /* Sub-brands */
  --kids-color: #E79A4C;
  --art-color: #4BBBE6;
  --camp-color: #E7DF4C;
  --merch-color: #8C4CE7;

  /* Utility */
  --text-primary: #0F244A;
  --text-on-dark: #FFFFFF;
  --text-muted: #B9CEB7;
}
```

### Typography
```css
/* Google Fonts imports — include in <head> */
/* https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Source+Sans+3:wght@300;400;500&display=swap */

:root {
  --font-primary: 'Manrope', sans-serif;     /* headings, nav, CTAs */
  --font-secondary: 'Source Sans 3', sans-serif; /* body text */

  /* Scale */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.25rem;
  --text-xl: 1.5rem;
  --text-2xl: 2rem;
  --text-3xl: clamp(2rem, 6vw, 3.5rem);
  --text-hero: clamp(2.5rem, 10vw, 6rem);
}
```

### Spacing
```css
:root {
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --space-2xl: 5rem;
  --space-3xl: 8rem;
  --section-padding: clamp(4rem, 10vw, 8rem);
}
```

### Breakpoints
```css
/* Mobile-first approach */
/* Base styles = mobile (< 768px) */
/* @media (min-width: 768px)  → tablet */
/* @media (min-width: 1024px) → desktop */
/* @media (min-width: 1280px) → wide desktop */
```

---

## 4. Global Patterns

### Section Rhythm (alternating dark/light)
```
HERO        → Dark  (#0F244A)
ABOUT       → Light (#FFFFFF)
PROBLEM     → Dark  (#0F244A)
MODEL       → Light (#FFFFFF)
WORK        → Dark  (#0F244A)
IMPACT      → Light (#FFFFFF) or Almond Cream
STUDIO      → Dark  (#0F244A)
KIDS        → Light (#FFFFFF) warm tones
FUNDING     → Dark  (#0F244A)
FOUNDER     → Light (#FFFFFF)
CTA         → Dark  (#0F244A)
```

### Decorative Arc Element
A partial circle arc appears at section transitions, always at edges/corners. Never center-stage.
```css
.brand-arc {
  position: absolute;
  width: clamp(200px, 40vw, 500px);
  aspect-ratio: 1;
  border-radius: 50%;
  border: clamp(40px, 8vw, 80px) solid var(--ash-grey);
  opacity: 0.15;
  pointer-events: none;
}
.brand-arc--top-right { top: -15%; right: -15%; }
.brand-arc--bottom-left { bottom: -15%; left: -15%; }
/* Use almond-cream variant on dark sections */
```

### Image Framing
Key images are masked in circular or arc-shaped frames:
```css
.img-circle {
  border-radius: 50%;
  overflow: hidden;
  aspect-ratio: 1;
}
.img-arc {
  border-radius: 50% 50% 0 0;
  overflow: hidden;
}
```

---

## 5. Text Animations (Core Visual Effect)

All text animations use Intersection Observer — trigger when element enters viewport.
No animations on first load delay (hero text appears immediately on page load).

### Animation Types to Implement

**1. Word reveal (primary — for hero and section titles)**
Each word wraps in a span, slides up from below with opacity fade.
```js
// Split text into words, animate each with staggered delay
// duration: 600ms per word, delay: 80ms between words
// easing: cubic-bezier(0.16, 1, 0.3, 1)
```

**2. Fade-up (for body text and cards)**
Element fades in and translates up 30px.
```css
.animate-fade-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.animate-fade-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

**3. Counter animation (for impact numbers)**
Numbers count up when section enters viewport.
```js
// 0 → target number over 1500ms
// easing: easeOutQuart
```

**4. Line draw (for model flow connectors)**
SVG path stroke-dasharray animation, draws lines between steps.

### Implementation Rules
- `prefers-reduced-motion` media query — disable all animations if set
- Animations trigger once only (no replay on scroll back)
- Mobile: same animations, slightly reduced distances (20px instead of 30px)
- Never block content — animations are progressive enhancement only

---

## 6. Navigation

### Mobile (default)
- Fixed top bar, height: 56px
- Logo left, hamburger menu right
- Full-screen overlay menu on open
- Background: `var(--prussian-blue)`
- Links: white, Manrope SemiBold, large touch targets (min 48px)
- Smooth scroll to sections on link click, close menu after click

### Desktop (768px+)
- Fixed top bar, height: 64px
- Logo left, nav links right
- Links: white, uppercase, letter-spacing 0.05em
- Background: transparent → `var(--prussian-blue)` on scroll (after 80px)

### Nav Links
```
What We Do | Our Work | Impact | Studio | Kids Lab | Support
```

---

## 7. Screens — Full Content Specification

---

### SCREEN 1 — HERO

**Background:** Dark (`#0F244A`)
**Layout:** Fullscreen (100svh), centered content, background image with dark overlay (0.5 opacity)
**Image placeholder:** `assets/images/hero/hero-bg.jpg` — large installation shot, people in action

**Content:**
```
[Logo — top left, white]

RECILO                          ← small label, Manrope Light, ash-grey, letter-spacing wide
Waste to Art                    ← hero title, Manrope Bold, white, var(--text-hero)
                                   "Art" in ash-grey (#B9CEB7)

Transforming waste into art     ← subtitle, Source Sans 3 Regular, white, text-lg
and communities into creators

[CTA Button]  Partner with us  ← Manrope SemiBold, uppercase, Tech Blue bg or white outline
```

**Animation:** Word reveal on load (no delay), subtitle fades up 300ms after title.
**Scroll indicator:** Animated arrow or dot at bottom center.
**Mobile:** Stack vertically, text centered, button full-width.

---

### SCREEN 2 — WHAT IS RECILO

**Background:** Light (`#FFFFFF`)
**Layout:** 2-column on desktop (text left, image right). Single column on mobile (image first, then text).
**Image placeholder:** `assets/images/about/about-main.jpg` — masked in arc shape, workshop/community scene

**Content:**
```
Section label: ABOUT            ← Manrope Medium, tech-blue, small caps

WHAT IS                         ← heading, Manrope Bold, prussian-blue
RECILO                          ← same, ash-grey

RECILO is a community-driven art and environmental initiative
that transforms waste into large-scale installations
through collective creation.

We combine material reuse, public participation,
and art-based engagement into one system.
```

**Animation:** Heading word reveal, text fade-up with stagger.
**Decorative arc:** Almond cream, bottom-right corner.

---

### SCREEN 3 — THE PROBLEM

**Background:** Dark (`#0F244A`)
**Layout:** Full-width, centered. Large stat numbers prominent. Image as full-bleed background with overlay.
**Image placeholder:** `assets/images/problem/problem-bg.jpg` — heavy/real visual (landfill, plastic waste)

**Content:**
```
Section label: THE PROBLEM      ← Manrope Medium, ash-grey

400M+                           ← large counter number, Manrope Bold, white
tons of plastic produced annually

<9%                             ← large counter, ash-grey
is recycled

14M+                            ← large counter, white
tons of waste in New York alone

—————

Most of it is treated as something to discard.
We treat it as a resource.      ← this line in ash-grey, italic
```

**Animation:** Counter animation when section enters viewport. Numbers count up.
**Style:** Numbers very large (clamp 4rem–8rem). Heavy typographic weight.

---

### SCREEN 4 — OUR MODEL

**Background:** Light (`#FFFFFF`)
**Layout:** Centered, flow diagram. 4 steps connected by animated lines.

**Content:**
```
Section label: HOW WE WORK

ONE SYSTEM —                    ← heading
THREE LAYERS OF IMPACT

[Flow diagram — horizontal on desktop, vertical on mobile]

① COLLECT        ← icon + label
   ↓ (animated line)
② TRANSFORM      ← icon + label
   ↓
③ ENGAGE         ← icon + label
   ↓
④ BUILD          ← icon + label

[Placeholder note for client: "Detailed descriptions for each step to be added"]
```

**Icons:** Simple line icons (SVG inline), prussian-blue color.
**Animation:** Steps fade in sequentially, lines draw between them (SVG stroke animation).
**Note:** Client will add detailed descriptions per step later. Leave space for 2–3 lines under each step.

---

### SCREEN 5 — CURRENT WORK

**Background:** Dark (`#0F244A`)
**Layout:** 3-card grid. Full-width cards on mobile (stack), 3-column on desktop.
**Image placeholders:** `assets/images/work/work-1.jpg`, `work-2.jpg`, `work-3.jpg`

**Content:**
```
Section label: ACTIVE PROJECTS

CURRENT                         ← heading, white
WORK                            ← ash-grey

[Card 1]
Image: installation shot
Label: FEATURED PROJECT
Title: Burning Man 2026
Text: Large-scale installation built from
      collected plastic waste.

[Card 2]
Image: workshop scene
Label: ONGOING
Title: Art Environments
Text: Collaborative builds creating
      immersive public art spaces.

[Card 3]
Image: process/materials
Label: AVAILABLE
Title: Custom Installations
Text: Working with communities
      to create site-specific pieces.

—————

What we do:
• Collaborative builds
• Workshops
• Installations
```

**Animation:** Cards fade-up with stagger (100ms between each).
**Card style:** Image top (arc-masked or straight), dark card bg (`#0D1B35`), white text, Kids-color or Art-color accent top border.

---

### SCREEN 6 — IMPACT

**Background:** Light (Almond Cream `#EBDECE` or White)
**Layout:** 3 equal columns on desktop, stacked on mobile.

**Content:**
```
Section label: OUR IMPACT

WHAT WE                         ← heading
ACHIEVE

[Card 1 — Environmental]
Icon: leaf/cycle SVG
Title: ENVIRONMENTAL
• Material reuse
• Landfill reduction
• Support for local cycles

[Card 2 — Social]
Icon: people SVG
Title: SOCIAL
• 100+ participants
• Inclusion & accessibility
• Community building

[Card 3 — Educational]
Icon: lightbulb SVG
Title: EDUCATIONAL
• Hands-on learning
• Environmental awareness
• Material understanding
```

**Animation:** Cards fade-up with stagger.
**Icons:** Simple inline SVG, prussian-blue.
**Counter:** "100+" animates as counter on scroll.

---

### SCREEN 7 — RECILO STUDIO

**Background:** Dark (`#0F244A`)
**Layout:** Full-bleed image left (60%), text right (40%) on desktop. Stack on mobile.
**Image placeholder:** `assets/images/studio/studio-main.jpg` — production space, materials, tools

**Content:**
```
Section label: INFRASTRUCTURE

RECILO                          ← heading, white
STUDIO                          ← ash-grey

The operational core of RECILO.

A space where:
• Materials are processed
• Installations are built
• Workshops take place

[No separate branding — Studio is part of the RECILO system]
```

**Note:** Studio is NOT a sub-brand. Do not give it distinct visual identity. It's part of the master brand.
**Animation:** Text fade-up, image slides in from left on desktop.

---

### SCREEN 8 — RECILO KIDS LAB

**Background:** Light (`#FFFFFF`) with warm accent (`--kids-color: #E79A4C`)
**Layout:** Lighter, warmer feel than other sections. 2-column on desktop.
**Image placeholder:** `assets/images/kids/kids-main.jpg` — children + process, workshop

**Content:**
```
Section label: COMING SOON      ← in kids-color (#E79A4C)

RECILO                          ← heading
KIDS LAB                        ← in kids-color

Children will:
• Bring plastic waste
• Transform it into material
• Create objects and art

We are building this program now.

[Status badge: "Upcoming Program"]
```

**Important:** This is a FUTURE program. Do not present as active. The "Upcoming" framing is essential for grant credibility.
**Kids accent color:** `#E79A4C` — use for labels, borders, badge only. Not overwhelming.
**Animation:** Softer, slower fade (900ms instead of 600ms). Warmer feel.

---

### SCREEN 9 — FUNDING

**Background:** Dark (`#0F244A`)
**Layout:** Centered, minimal. No images. Strong typography.

**Content:**
```
Section label: SUPPORT US

WE ARE                          ← heading, white
SEEKING SUPPORT                 ← ash-grey

To build the Kids Lab, we need:
• Equipment purchase
• Workshop infrastructure
• Program launch costs
• Expanding community access

[CTA Button] Support Our Work   ← href="#" (donation link TBD)
                                   white button, prussian-blue text
                                   OR tech-blue bg, white text
```

**Animation:** Text fade-up. Button pulses gently after appearing (subtle scale 1.0→1.02→1.0, loop).
**Note:** Donation link to be connected later. Use `href="#"` with `data-link="donation"` for easy find-and-replace.

---

### SCREEN 10 — FOUNDER

**Background:** Light (`#FFFFFF`)
**Layout:** Image left (circular mask), text right on desktop. Stack on mobile (image top, centered).
**Image placeholder:** `assets/images/founder/anna-niss.jpg` — portrait

**Content:**
```
Section label: WHO WE ARE

[Circular image — Anna Niss portrait]

Anna Niss                       ← Manrope Bold, prussian-blue
Founder

• 1,000+ hours of facilitation experience
• Background in psychology & economics
• Led multiple community-based projects

```

**Animation:** Image fades in, text slides up.
**Image style:** `border-radius: 50%`, 240px–320px diameter, prussian-blue border 4px.

---

### SCREEN 11 — CTA (Final)

**Background:** Dark (`#0F244A`) with background image + overlay
**Layout:** Fullscreen or tall section, centered content.
**Image placeholder:** `assets/images/cta/cta-bg.jpg` — powerful installation or community shot

**Content:**
```
JOIN                            ← large heading, ash-grey
RECILO                          ← white

How to get involved:

[Button 1] Partner              ← white outline button
[Button 2] Commission Work      ← tech-blue filled button
[Button 3] Support Us           ← white outline button

📍 Stamford, CT
hello@recilo.org                ← placeholder email (confirm with client)
```

**Animation:** Heading word reveal. Buttons stagger fade-up.

---

### FOOTER

**Background:** `#0A1A38` (slightly darker than prussian-blue)
**Content:**
```
[Logo — white, small]

© 2026 RECILO. All rights reserved.

[Nav links: What We Do · Our Work · Impact · Support]
```

---

## 8. Animation Implementation Guide

### Intersection Observer Setup
```js
// animations.js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // trigger once only
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('[data-animate]').forEach(el => {
  observer.observe(el);
});
```

### Word Reveal Implementation
```js
function setupWordReveal(selector) {
  document.querySelectorAll(selector).forEach(el => {
    const words = el.textContent.split(' ');
    el.innerHTML = words.map((word, i) =>
      `<span class="word-wrap">
        <span class="word" style="transition-delay: ${i * 80}ms">${word}</span>
      </span>`
    ).join(' ');
  });
}
```

```css
.word-wrap { overflow: hidden; display: inline-block; }
.word {
  display: inline-block;
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 0.6s cubic-bezier(0.16,1,0.3,1),
              transform 0.6s cubic-bezier(0.16,1,0.3,1);
}
.is-visible .word {
  opacity: 1;
  transform: translateY(0);
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 9. Mobile-First Critical Rules

1. **Base CSS = mobile.** All styles written for 375px first.
2. **Touch targets:** All buttons/links minimum 48×48px.
3. **Font sizes:** Never below 16px for body text (prevents iOS zoom).
4. **Images:** All `width: 100%`, `max-width` on desktop.
5. **No hover-only interactions** — all interactive states must work on touch.
6. **Navigation:** Full-screen overlay on mobile, no tiny dropdown menus.
7. **Sections:** `padding: var(--section-padding) var(--space-lg)` minimum sides.
8. **Cards:** Full-width on mobile, grid only from 768px+.
9. **Hero:** Use `100svh` (not `100vh`) to handle mobile browser chrome correctly.
10. **Test breakpoints:** 375px (iPhone SE), 390px (iPhone 14), 430px (iPhone 14 Plus), 768px (iPad).

---

## 10. Placeholder Images Spec

All placeholders should be clearly labeled so real images can drop in:

```html
<!-- Example placeholder pattern -->
<div class="img-placeholder" data-section="hero" data-slot="1">
  <span>Hero BG — Large installation, people in action</span>
</div>
```

```css
.img-placeholder {
  background: #1a2d4a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ash-grey);
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  text-align: center;
  padding: var(--space-md);
}
```

When real images arrive, replace `<div class="img-placeholder">` with `<img src="..." alt="...">`.

---

## 11. CTA Links — Easy Replace Guide

All donation/action links use `data-link` attributes for easy update:

```html
<a href="#" data-link="partner" class="btn btn-outline">Partner with us</a>
<a href="#" data-link="support" class="btn btn-primary">Support Our Work</a>
<a href="#" data-link="commission" class="btn btn-outline">Commission Work</a>
```

When links are confirmed, find all `data-link="support"` and update `href`.

---

## 12. Delivery Checklist

Before pushing to GitHub Pages:

- [ ] All sections render correctly at 375px, 390px, 768px, 1280px
- [ ] Navigation works on mobile (hamburger opens/closes)
- [ ] All text animations fire correctly on scroll
- [ ] Counter animations work on Screen 3 and Screen 6
- [ ] No horizontal scroll on any mobile width
- [ ] Images all have `alt` attributes
- [ ] All `href="#"` CTAs are clearly marked with `data-link`
- [ ] `prefers-reduced-motion` disables all animations
- [ ] Page loads without JavaScript errors in console
- [ ] Logo appears correctly in nav (white version)
- [ ] Footer links scroll to correct sections

---

*RECILO_SPEC.md v1.0 — Ready for Claude Code implementation*
*Brand guidelines reference: RECILO_BRAND.md*

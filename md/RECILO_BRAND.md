---
name: recilo-brand
description: >
  Brand guidelines skill for building the RECILO website. Use this skill whenever
  working on any aspect of the RECILO website — layout, components, colors, typography,
  copy, imagery, or UI patterns. This skill must be consulted before writing any CSS,
  HTML, React, or content for the RECILO project. Contains the complete design system
  extracted from the official RECILO 2026 Brand Book.
---

# RECILO Brand Guidelines — Website Implementation Skill

> Source: RECILO 2026 Brand Book (Identity Manual)
> Purpose: Reference for building the RECILO website — colors, typography, tone, components, and layout rules.

---

## 1. Brand Essence

| Field | Value |
|---|---|
| **Master brand** | RECILO |
| **Category** | Circular Art & Education Platform |
| **Tagline** | Waste becomes culture |
| **Core idea** | We see waste → we rethink waste → we transform waste |

### Sub-brands
| Sub-brand | Focus | Accent Color |
|---|---|---|
| Recilo Kids | Educational programs for children | Golden Apricot `#E79A4C` |
| Recilo Art | Urban installations & recycled products | Sky Surge `#4BBBE6` |
| Recilo Camp | Festivals & international art projects | Banana Cream `#E7DF4C` |
| Recilo Merch | Future line of recycled plastic products | Purple X11 `#8C4CE7` |

---

## 2. Color System

### Primary Palette — Always use these first
| Name | Hex | RGB | Usage |
|---|---|---|---|
| **Prussian Blue** | `#0F244A` | 15, 36, 74 | Primary background, headings, logo |
| **Ash Grey** | `#B9CEB7` | 185, 206, 183 | Accent, highlights, secondary text on dark |
| **White** | `#FFFFFF` | 255, 255, 255 | Text on dark backgrounds, clean surfaces |

### Secondary Palette — Supporting elements
| Name | Hex | RGB | Usage |
|---|---|---|---|
| **Tech Blue** | `#0D5BBA` | 13, 91, 186 | CTAs, links, interactive elements |
| **Wisteria Blue** | `#85A7EA` | 133, 167, 234 | Hover states, soft accents |
| **Almond Cream** | `#EBDECE` | 235, 222, 206 | Light backgrounds, cards, decorative arcs |

### CSS Custom Properties (implement these globally)
```css
:root {
  /* Primary */
  --color-prussian-blue: #0F244A;
  --color-ash-grey: #B9CEB7;
  --color-white: #FFFFFF;

  /* Secondary */
  --color-tech-blue: #0D5BBA;
  --color-wisteria-blue: #85A7EA;
  --color-almond-cream: #EBDECE;

  /* Sub-brands */
  --color-kids: #E79A4C;
  --color-art: #4BBBE6;
  --color-camp: #E7DF4C;
  --color-merch: #8C4CE7;
}
```

### Approved Background + Logo Combinations
| Background | Logo Version |
|---|---|
| Prussian Blue `#0F244A` | White logo ✅ |
| Ash Grey `#B9CEB7` | Dark logo ✅ |
| Almond Cream `#EBDECE` | Dark logo ✅ |
| White `#FFFFFF` | Dark logo ✅ |
| Photographic (high contrast) | White logo ✅ |
| Busy/low-contrast photo | ❌ Never use |

---

## 3. Typography

### Primary Font — Manrope
- **Source:** Google Fonts (`https://fonts.google.com/specimen/Manrope`)
- **Use for:** All headings, logo text, navigation, CTAs, display text

```css
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');
```

| Weight | Class | Use |
|---|---|---|
| 300 Light | `font-weight: 300` | Captions, metadata |
| 400 Regular | `font-weight: 400` | Body text |
| 500 Medium | `font-weight: 500` | Subheadings, labels |
| 600 SemiBold | `font-weight: 600` | Section headings |
| 700 Bold | `font-weight: 700` | Hero titles, CTAs |

### Secondary Font — Source Sans 3
- **Source:** Google Fonts (`https://fonts.google.com/specimen/Source+Sans+3`)
- **Use for:** Body text, descriptions, captions, long-form content

```css
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;500&display=swap');
```

| Weight | Use |
|---|---|
| 300 Light | Long-form descriptions |
| 400 Regular | Standard body text |
| 500 Medium | Emphasized body text |

### Typography Scale (recommended)
```css
:root {
  --font-primary: 'Manrope', sans-serif;
  --font-secondary: 'Source Sans 3', sans-serif;

  --text-xs: 0.75rem;     /* 12px — captions */
  --text-sm: 0.875rem;    /* 14px — labels */
  --text-base: 1rem;      /* 16px — body */
  --text-lg: 1.125rem;    /* 18px — lead text */
  --text-xl: 1.25rem;     /* 20px — subheadings */
  --text-2xl: 1.5rem;     /* 24px — section headings */
  --text-3xl: 2rem;       /* 32px — page headings */
  --text-4xl: 3rem;       /* 48px — display */
  --text-hero: clamp(3rem, 8vw, 6rem); /* Hero titles */
}
```

---

## 4. Logo Rules

### Symbol Meaning
The logo combines **an eye** (awareness, vision, responsibility) with a **circular arrow** (recycling, transformation). Never separate these elements.

### Exclusion Zone
- Minimum clear space = **X** on all sides, where X = diameter of the symbol circle
- Nothing may appear inside this zone: no text, graphics, or other logos

### Forbidden Modifications
- ❌ Do not rotate or skew the logo
- ❌ Do not stretch or distort proportions
- ❌ Do not change colors outside approved palette
- ❌ Do not use low-opacity / faded versions
- ❌ Do not separate wordmark from symbol
- ❌ Do not place on low-contrast backgrounds
- ❌ Do not use outlines only (must be filled)
- ❌ Do not recolor individual elements differently

### Co-branding
When showing alongside partner logos: use a vertical divider (`|`) between logos, align vertically centered, maintain equal visual weight.

---

## 5. Tone of Voice

### Core Character
| Trait | Implementation |
|---|---|
| **Inspirational** | Lead with transformation, possibility, future |
| **Clear** | Short sentences. No jargon. Complex ideas → simple words |
| **Creative** | Reference art, design, urban culture |
| **Responsible** | Conscious framing, never preachy or aggressive |
| **Community-oriented** | Use "we" — "we create, we learn, we build" |

### Approved Tone Keywords
`circular` · `creative` · `conscious` · `cultural` · `sustainable` · `urban` · `educational` · `collaborative` · `innovative` · `future-oriented`

### Copy Examples (from brand book)
- "Plastic is everywhere. Every city produces tons of plastic daily. But what if it's **not waste?**"
- "RECILO transforms plastic into culture"
- "It's not just recycling. It's a new cultural language."
- "This bag is made from 32 used plastic bottles"
- "Waste becomes culture"

### What to Avoid
- ❌ Technical environmental jargon
- ❌ Aggressive activist language
- ❌ Guilt-driven messaging
- ❌ Corporate/formal tone

---

## 6. Graphic Elements & Brand Patterns

### The Circular Arc Element
A key decorative motif — a partial circle/arc shape appearing at corners or edges.
- Color: Ash Grey `#B9CEB7` or Almond Cream `#EBDECE`
- Used as: background decoration, section dividers, image frames
- Must remain **subtle** — never overpowers content
- Opacity: 100% but positioned partially off-screen or behind content

### The Circular Badge / Text Ring
- A circle with text running along its path (e.g., "CIRCULAR ART MOVEMENT")
- Keywords inside or around: URBAN · CIRCULAR · NEW · RECYCLED · COMMUNITY
- Used in: hero sections, social posts, urban installation photos
- Colors: Prussian Blue ring with Almond Cream text, or reversed

### Implementation (CSS + SVG pattern)
```html
<!-- Circular arc decorative element -->
<div class="brand-arc" aria-hidden="true"></div>
```
```css
.brand-arc {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 60px solid var(--color-ash-grey);
  position: absolute;
  top: -100px;
  right: -100px;
  pointer-events: none;
  opacity: 0.8;
}
```

---

## 7. Photography & Imagery Style

### Visual Direction
- Bright, clean, modern — avoid dark or gritty aesthetics
- Real-life context: products in use, workshops, urban environments
- Natural light, soft shadows — no harsh flash
- Simple, well-balanced compositions
- Mix: close-up detail shots + wide environmental shots
- Urban + artistic + community scenes

### Subject Matter
- Recycled plastic products (combs, laptop stands, keychains, bags)
- Workshop and educational settings
- Urban art installations
- Community gatherings
- City environments with green elements

### Image Framing Technique
Images are often masked inside **circular or arc-shaped frames** — this is a key brand pattern. Implement with `clip-path: circle()` or `border-radius: 50%` with `overflow: hidden`.

---

## 8. Layout Principles

### Spacing System (based on brand's clean grid)
```css
:root {
  --space-xs: 0.5rem;   /* 8px */
  --space-sm: 1rem;     /* 16px */
  --space-md: 1.5rem;   /* 24px */
  --space-lg: 2rem;     /* 32px */
  --space-xl: 3rem;     /* 48px */
  --space-2xl: 5rem;    /* 80px */
  --space-3xl: 8rem;    /* 128px */
}
```

### Layout Philosophy
- Clean whitespace — never cluttered
- Strong typographic hierarchy
- Dark sections (Prussian Blue bg) alternate with light sections (White/Almond Cream)
- Full-bleed hero sections
- Circular/arc elements always at edges or corners, never center-stage

---

## 9. Component Patterns

### Dark Hero Section
```css
.hero {
  background-color: var(--color-prussian-blue);
  color: var(--color-white);
  position: relative;
  overflow: hidden;
}
.hero__title {
  font-family: var(--font-primary);
  font-weight: 700;
  font-size: var(--text-hero);
  color: var(--color-ash-grey); /* Note: brand uses ash-grey for display titles on dark */
}
.hero__subtitle {
  font-family: var(--font-primary);
  font-weight: 400;
  color: var(--color-white);
}
```

### Light Content Section
```css
.section-light {
  background-color: var(--color-white);
  color: var(--color-prussian-blue);
}
.section-light h2 {
  font-family: var(--font-primary);
  font-weight: 700;
  color: var(--color-prussian-blue);
  text-transform: uppercase;
  letter-spacing: 0.02em;
}
```

### CTA Button
```css
.btn-primary {
  background-color: var(--color-tech-blue);
  color: var(--color-white);
  font-family: var(--font-primary);
  font-weight: 600;
  border-radius: 4px;
  padding: 0.75rem 2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: none;
  cursor: pointer;
}
.btn-secondary {
  background-color: transparent;
  color: var(--color-prussian-blue);
  border: 2px solid var(--color-prussian-blue);
  /* same font/padding as primary */
}
```

### Sub-brand Card
Each sub-brand card uses its unique accent color as a left border or top highlight:
```css
.card--kids    { border-top: 4px solid var(--color-kids); }
.card--art     { border-top: 4px solid var(--color-art); }
.card--camp    { border-top: 4px solid var(--color-camp); }
.card--merch   { border-top: 4px solid var(--color-merch); }
```

---

## 10. Quick Reference Checklist

Before shipping any page or component, verify:

- [ ] Only Manrope and Source Sans 3 fonts are used
- [ ] Colors are from the approved palette only
- [ ] Logo has proper exclusion zone (no elements within X distance)
- [ ] Logo is never distorted, recolored, or separated
- [ ] Circular arc decorative elements are present but subtle
- [ ] Tone of copy is inspirational, clear, creative — not aggressive
- [ ] Dark/light section alternation creates visual rhythm
- [ ] Images are bright, clean, real-life context
- [ ] Sub-brand colors are used correctly per sub-brand
- [ ] All text on dark backgrounds uses White or Ash Grey only

---

*This skill is derived from the RECILO 2026 Brand Book — Identity Manual.*
*For logo files and brand assets, contact the RECILO brand team.*

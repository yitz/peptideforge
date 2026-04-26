---
name: The Restorative Lab
version: alpha
description: >
  The design system for AetherPeptide — a premium branded telehealth storefront
  for physician-supervised peptide therapy. The creative north star is
  "The Restorative Lab": a private, high-end longevity clinic that balances
  clinical precision with sensory warmth. Think a physician's office designed
  by a luxury spa architect.

colors:
  # Primary teal spectrum
  primary: "#0D9488"
  primary-container: "#008378"
  primary-bright: "#2DD4BF"
  primary-fixed: "#89F5E7"
  primary-fixed-dim: "#6BD8CB"
  on-primary: "#FFFFFF"
  on-primary-container: "#F4FFFC"

  # Surfaces — warm neutrals, never cold
  surface: "#FCFAF8"
  surface-low: "#FAF9F6"
  surface-container: "#F4F7F6"
  surface-container-low: "#EFF4FF"
  surface-container-high: "#DCE9FF"
  surface-container-lowest: "#FFFFFF"
  surface-bright: "#F8F9FF"
  surface-dim: "#CBDBF5"

  # Dark mode surfaces
  surface-dark: "#0F1520"
  surface-dark-card: "#1A2332"
  surface-dark-elevated: "#243044"

  # Text — never use pure black (#000000)
  on-surface: "#0B1C30"
  on-surface-variant: "#3D4947"
  secondary: "#545F73"
  outline: "#6D7A77"
  outline-variant: "#BCC9C6"

  # Semantic
  error: "#BA1A1A"
  on-error: "#FFFFFF"
  error-container: "#FFDAD6"

  # Inverted / overlay
  inverse-surface: "#213145"
  inverse-on-surface: "#EAF1FF"
  inverse-primary: "#6BD8CB"

typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 4rem
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: -0.02em
  display-md:
    fontFamily: Noto Serif
    fontSize: 2.5rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 2rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Noto Serif
    fontSize: 1.5rem
    fontWeight: 700
    lineHeight: 1.25
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.7
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
  label-lg:
    fontFamily: Space Grotesk
    fontSize: 0.75rem
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.15em
  label-md:
    fontFamily: Space Grotesk
    fontSize: 0.625rem
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.2em
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 0.5625rem
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.1em
  mono:
    fontFamily: Geist Mono
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5

rounded:
  sm: 0.125rem
  md: 0.5rem
  lg: 0.75rem
  xl: 1.5rem
  2xl: 2rem
  3xl: 2.5rem
  full: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  section: 128px

components:
  # Navigation
  nav-bar:
    backgroundColor: "rgba(255, 255, 255, 0.7)"
    textColor: "{colors.on-surface}"
    padding: 20px
    height: 73px

  # Buttons
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 16px
  button-primary-hover:
    backgroundColor: "rgba(13, 148, 136, 0.9)"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
  button-tertiary:
    backgroundColor: transparent
    textColor: "{colors.primary}"

  # Cards
  card-surface:
    backgroundColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.2xl}"
    padding: 32px
  card-glass:
    backgroundColor: "rgba(255, 255, 255, 0.4)"
    rounded: "{rounded.xl}"
    padding: 32px
  card-pricing:
    backgroundColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.2xl}"
    padding: 32px

  # Badges
  badge-accent:
    backgroundColor: "rgba(13, 148, 136, 0.1)"
    textColor: "{colors.primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 8px

  # Hero
  hero-section:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    padding: 128px

  # Trust card
  trust-icon-container:
    backgroundColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.full}"
    size: 64px

  # Monogram
  monogram:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: 22%
    size: 512px
---

# The Restorative Lab — AetherPeptide Design System

## Overview

The creative north star is **"The Restorative Lab."**

We are moving away from the "SaaS-y" appearance of generic telehealth and toward the aesthetic of a private, high-end longevity clinic. The goal is to balance the clinical precision of biohacking with the sensory warmth of a luxury spa.

To achieve this, the layout must break the "template" look. We prioritize **intentional asymmetry** — headlines offset from body copy, overlapping imagery — to create a bespoke, editorial feel. We use generous whitespace not just as a gap, but as a "premium ingredient" that allows the brand's quiet confidence to breathe. This system rejects rigid, boxed-in structures in favor of a fluid, layered experience.

**Default theme is light.** Dark mode is fully supported but not the default. Light mode conveys clinical trust and warmth; dark mode conveys biohacker intensity.

---

## Colors

The palette evolves the brand's teal into a sophisticated spectrum of "Deep Sea" and "Muted Mint," anchored by a structural hierarchy of warm neutrals.

### The "No-Line" Rule

**Borders are prohibited for sectioning.** To define boundaries, use background color shifts or subtle tonal transitions. A `surface-container-low` section sitting on a `surface` background is the only acceptable way to create a structural break. This ensures the UI feels seamless and organic, rather than "engineered."

### Surface Hierarchy & Nesting

Treat the UI as a series of stacked, physical layers — like fine vellum or frosted glass.

- **Base:** `surface` (#FCFAF8) — warm off-white, the page canvas
- **Low Priority / Large Sections:** `surface-low` (#FAF9F6) — subtle tonal shift for trust sections
- **Standard Content Cards:** `surface-container-lowest` (#FFFFFF) — pure white for elevated cards
- **Interactive / Elevated Elements:** `surface-container-high` (#DCE9FF) — light blue-teal tint for hover states

### The "Glass & Gradient" Rule

To add "soul" to the interface, use **Glassmorphism** for floating navigation bars, modal overlays, and hero card overlays. Use semi-transparent surface colors with `backdrop-blur` (16px–32px).

- **Signature Gradient:** For primary CTAs, use a linear gradient from `primary` (#0D9488) to `primary-container` (#008378) at 135 degrees. This adds a subtle "glow" that feels biological and vital, rather than static.

### WCAG Accessibility

- `on-surface` (#0B1C30) on `surface` (#FCFAF8) → contrast ratio ~16:1 (passes AAA)
- `on-primary` (#FFFFFF) on `primary` (#0D9488) → contrast ratio ~4.6:1 (passes AA for large text)
- `secondary` (#545F73) on `surface` (#FCFAF8) → contrast ratio ~5.8:1 (passes AA)
- Never use pure black (#000000) for text. Always use `on-surface` (#0B1C30).
- If accessibility requires a visible stroke, use `outline-variant` (#BCC9C6) at 15% opacity — never 100% opaque borders.

---

## Typography

The typographic soul of the system lies in the tension between the authoritative Serif and the technological Sans-Serif.

### Display & Headlines — Noto Serif

Used for primary messaging. The serif conveys medical authority, tradition, and "white-glove" service. Tracked slightly tighter (-1% to -2%) for a high-end editorial look. Use for all patient-facing value propositions.

### Body — Inter

Used for all functional reading. Inter provides the "technology" and "clarity" required for descriptions, disclaimers, and body text.

### Labels — Space Grotesk

Used for data points, micro-copy, uppercase section tags, navigation labels, and button text. Its geometric nature evokes the "biohacking" and "scientific" aspect of the brand.

### Mono — Geist Mono

Used for dosing information, technical specs, and code blocks.

### Identity Pairing

When a `display-lg` headline is paired with a `label-md` uppercase tag above it, the contrast between the serif and the geometric sans-serif creates an immediate "premium clinic" aesthetic:

```
SPACE GROTESK  |  10PX  |  UPPERCASE  |  +0.3EM TRACKING
PREMIUM PHYSICIAN-SUPERVISED WELLNESS

Noto Serif  |  48-64PX  |  Bold  |  -2% Tracking
Peptide Therapy. Refined.

Inter  |  16-18PX  |  Regular  |  Line-height 1.6
AetherPeptide connects you with licensed physicians who may design
personalized wellness protocols through our partner provider network.
```

---

## Layout & Spacing

### Whitespace as a Premium Ingredient

Whitespace is not negative space — it is a deliberate design choice that communicates premium positioning. If a screen feels full, double the whitespace.

- Section padding: `128px` vertical (desktop), `80px` (mobile)
- Card internal padding: minimum `32px`
- Feature list item spacing: `12px` vertical (no divider lines)
- Between major sections: `128px` (never less than `64px`)

### Intentional Asymmetry

- Headlines may be offset from body copy (left-aligned hero text, not centered)
- Image cards may overlap content areas
- Editorial grid: 2-column offset layout (second column drops `48px` lower)
- Trust section: icon circles left-aligned, text flows right — not a card grid

---

## Elevation & Depth

We eschew traditional shadows in favor of **Tonal Layering.**

### The Layering Principle

Depth is achieved by "stacking." Place a `surface-container-lowest` card on a `surface-low` background. This creates a soft, natural lift without the "dirtiness" of heavy shadows.

### Ambient Shadows

If an element must float (e.g., a dropdown, a product card), use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(11, 28, 48, 0.05)`. The shadow uses a tinted version of `on-surface` — never pure black.

CSS utility: `.premium-shadow { box-shadow: 0 20px 40px -15px rgba(13, 148, 136, 0.08); }`

### The "Ghost Border" Fallback

If accessibility requires a stroke, use `outline-variant` at 15% opacity. Never use 100% opaque borders.

---

## Shapes

- **Cards:** `2rem` (32px) rounded corners — larger than typical SaaS, closer to iOS
- **Buttons:** `full` roundedness (pill shape) for primary CTAs
- **Monogram / App Icon:** 22% corner radius on container
- **Hero image cards:** `2rem` rounded with `overflow-hidden`
- **Input fields:** `0.125rem` (2px) radius — barely rounded, minimalist
- **Badges:** `full` roundedness (pill shape)

---

## Components

### Navigation Bar — The Glass Header

Sticky, glassmorphic. `backdrop-blur(16px)`, `rgba(255, 255, 255, 0.7)` background in light mode, `rgba(15, 21, 32, 0.8)` in dark mode. No solid border — just a `border-bottom: 1px solid rgba(0, 0, 0, 0.05)` ghost line.

Contains: Logo (spa icon + "AetherPeptide" wordmark in Noto Serif Bold), nav links in Inter, glass-primary CTA button.

CSS utility: `.glass-nav`

### Buttons — The Kinetic Anchor

- **Primary:** `bg-primary` fill, `full` roundedness, `on-primary` text, Space Grotesk Bold uppercase with wide tracking. On hover, slight luminosity shift. CSS utility: `.glass-primary`
- **Secondary:** No fill. Ghost border (20% opacity `outline-variant`) and `on-surface` text.
- **Tertiary:** Text-only in `primary` with a 2px underline that expands from center on hover.
- All buttons: `text-[10px] font-bold uppercase tracking-[0.2em] font-label`

### Cards — The Editorial Grid

- **Rule:** Forbid divider lines inside cards.
- **Background:** `bg-white` light / `bg-white/[0.06]` dark — same surface for ALL card variants.
- **Rounded:** `2rem` corners.
- **Padding:** minimum `2rem` internal.
- **Separation:** Use `1.5rem` vertical whitespace between list items. If grouping is needed, use a subtle background shift — never a line.

### Pricing Cards

All cards use identical styling. The ONLY differentiation is:
- A small inline pill badge (`bg-primary/10 text-primary`) for plans that have a badge
- No accent bars, no rings, no shadow changes, no background changes

### Hero Section

Full-bleed background image with gradient overlay (`from-background/20 via-background/60 to-background`). Content left-aligned (asymmetric), not centered. Space Grotesk uppercase label above, Noto Serif bold headline, Inter body text, glass-primary CTA button.

### Trust Section

Tonal surface background (`surface-low`). Icon circles (64px, white bg, rounded-full) with Material Symbols icons. Left-aligned layout with icon, then text block. Space Grotesk uppercase label for title, Inter for description. No card wrappers — just whitespace separation.

### Goals Bento Grid

Full-bleed image cards (360px height) with gradient overlay and glass-card bottom panel. Hover: image scales 110% over 1000ms. Glass overlay contains Noto Serif headline, Space Grotesk uppercase tags, and tertiary "Explore Options" link.

### Quiz Flow

Mesh gradient animated background (`.mesh-gradient`). Metallic shimmer progress bar (`.metallic-shimmer`). Goal selection cards: white bg with backdrop-blur, active state: `card-active-glow` (inset 2px primary border + teal shadow). Material Symbols icons for each goal.

### Badges & Pills

- `bg-primary/10 text-primary` for accent badges
- Space Grotesk Bold, 9px, uppercase, 0.15em tracking
- `rounded-full` (pill shape)
- Glass variant: `.glass-badge` for image overlays

### Input Fields — Soft Precision

- Minimalist. No bottom border or full box.
- `surface-container-low` background with `0.125rem` radius.
- On focus: background transitions to `surface-container-lowest` with 1px `primary` ghost border.

### Icons

Material Symbols Outlined (Google Fonts), loaded via external stylesheet. Key icons:
- `spa` — brand icon (also rendered as inline SVG path in Logo component)
- `medical_services`, `biotech`, `encrypted` — trust signals
- `check_circle` — feature list checkmarks
- `arrow_forward` — CTA arrows

---

## Do's and Don'ts

### Do:

- **Do** use asymmetrical layouts where text blocks are not perfectly centered with images.
- **Do** use "Muted Mint" (`primary-fixed`) for background highlights in dark mode to prevent eye strain.
- **Do** use Noto Serif for all patient-facing value propositions and headlines.
- **Do** use generous whitespace — if a screen feels full, double the whitespace.
- **Do** use tonal layering (stacked surfaces) to create depth instead of shadows.
- **Do** use glassmorphism for floating elements (nav, overlays, hero cards).
- **Do** use the spa icon as inline SVG paths (Logo component) — not the Material Symbols font for the brand mark.

### Don't:

- **Don't** use 1px solid borders to separate sections. It breaks the "premium clinic" immersion.
- **Don't** use pure black (#000000) for text. Always use `on-surface` (#0B1C30).
- **Don't** use "vibrant" or "neon" teals. Stick to the refined, charcoal-infused teals in the token set.
- **Don't** crowd the interface. If a screen feels full, double the whitespace.
- **Don't** use traditional drop shadows. Use tonal layering or `.premium-shadow` (teal-tinted, ultra-diffused).
- **Don't** make any pricing or product card darker than the others. All cards must be identical `bg-white`.
- **Don't** use stock photos of syringes, pills, or hospital settings in marketing imagery.
- **Don't** use before/after transformation photos (FTC compliance risk).

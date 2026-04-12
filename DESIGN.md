# Design System Strategy: The Digital Longevity Atelier

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Restorative Lab."** 

We are moving away from the "SaaS-y" appearance of generic telehealth and toward the aesthetic of a private, high-end longevity clinic. The goal is to balance the clinical precision of biohacking with the sensory warmth of a luxury spa. 

To achieve this, the layout must break the "template" look. We prioritize **intentional asymmetry**—such as headlines offset from body copy and overlapping imagery—to create a bespoke, editorial feel. We use generous whitespace not just as a gap, but as a "premium ingredient" that allows the brand's quiet confidence to breathe. This system rejects the rigid, boxed-in structures of the web in favor of a fluid, layered experience.

---

## 2. Colors & Surface Philosophy
The palette evolves the brand's teal into a sophisticated spectrum of "Deep Sea" and "Muted Mint," anchored by a structural hierarchy of neutrals.

### The "No-Line" Rule
**Borders are prohibited for sectioning.** To define boundaries, designers must use background color shifts or subtle tonal transitions. A `surface-container-low` section sitting on a `surface` background is the only acceptable way to create a structural break. This ensures the UI feels seamless and organic, rather than "engineered."

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, physical layers—like fine vellum or frosted glass.
*   **Base:** `surface` (#f8f9ff)
*   **Low Priority/Large Sections:** `surface_container_low` (#eff4ff)
*   **Standard Content Cards:** `surface_container_lowest` (#ffffff)
*   **Interactive/Elevated Elements:** `surface_container_high` (#dce9ff)

### The "Glass & Gradient" Rule
To add "soul" to the interface, use **Glassmorphism** for floating navigation bars or modal overlays. Use semi-transparent surface colors with a `backdrop-blur` (16px–32px).
*   **Signature Gradients:** For Primary CTAs, use a linear gradient from `primary` (#00685f) to `primary_container` (#008378) at a 135-degree angle. This adds a subtle "glow" that feels biological and vital, rather than static.

---

## 3. Typography
The typographic soul of the system lies in the tension between the authoritative Serif and the technological Sans-Serif.

*   **Display & Headlines (Noto Serif):** Used for primary messaging. The serif conveys medical authority, tradition, and a "white-glove" service. It should be tracked slightly tighter (-1% to -2%) for a high-end editorial look.
*   **Body (Inter):** Used for all functional reading. Inter provides the "technology" and "clarity" required for medical instructions. 
*   **Labels (Space Grotesk):** Used for data points, micro-copy, and caps-locked headers. Its geometric nature evokes the "biohacking" and "scientific" aspect of the brand.

**Identity Pairing:** When a `display-lg` headline is paired with a `label-md` uppercase tag above it, the contrast between the serif and the geometric sans-serif creates an immediate "premium clinic" aesthetic.

---

## 4. Elevation & Depth
We eschew traditional shadows in favor of **Tonal Layering.**

*   **The Layering Principle:** Depth is achieved by "stacking." Place a `surface_container_lowest` card on a `surface_container_low` background. This creates a soft, natural lift without the "dirtiness" of heavy shadows.
*   **Ambient Shadows:** If an element must float (e.g., a dropdown), use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(11, 28, 48, 0.05)`. Notice the shadow uses a tinted version of `on_surface` rather than pure black.
*   **The "Ghost Border" Fallback:** If accessibility requires a stroke, use `outline_variant` at 15% opacity. Never use 100% opaque borders.

---

## 5. Components

### Buttons: The Kinetic Anchor
*   **Primary:** Gradient fill (`primary` to `primary_container`), `full` roundedness. Text is `on_primary`. On hover, the gradient shifts slightly in luminosity.
*   **Secondary:** No fill. A `Ghost Border` (20% opacity `outline_variant`) and `on_surface` text.
*   **Tertiary:** Text-only in `primary` with a 2px underline that expands from center on hover.

### Cards & Lists: The Editorial Grid
*   **Rule:** Forbid divider lines.
*   **Execution:** Separate list items using `1.5rem` of vertical whitespace. If grouping is needed, use a subtle background shift to `surface_container_low`.
*   **Cards:** Use `xl` (0.75rem) roundedness. Content should have generous internal padding (min `2rem`).

### Input Fields: Soft Precision
*   **Style:** Minimalist. No bottom border or full box. Use a `surface_container_low` background with a `sm` (0.125rem) radius.
*   **States:** On focus, the background transitions to `surface_container_lowest` with a 1px `primary` ghost border.

### Signature Component: The "Biometric Data Card"
Specifically for this platform, use a card with a `backdrop-blur` glass effect, featuring `Space Grotesk` for metrics and a soft teal `primary` micro-sparkline. This emphasizes the "scientific yet warm" personality.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical layouts where text blocks are not perfectly centered with images.
*   **Do** use "Muted Mint" (`primary_fixed`) for background highlights in dark mode to prevent eye strain.
*   **Do** use `Noto Serif` for all patient-facing medical "promises" or value propositions.

### Don’t:
*   **Don't** use 1px solid borders to separate sections. It breaks the "premium clinic" immersion.
*   **Don't** use pure black (#000000) for text. Always use `on_surface` (#0b1c30) for a softer, more sophisticated contrast.
*   **Don't** use "vibrant" or "neon" teals. Stick to the refined, charcoal-infused teals defined in the token set.
*   **Don't** crowd the interface. If a screen feels full, double the whitespace.
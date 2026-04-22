@AGENTS.md

# Project Memory — AetherPeptide

## Current State (as of April 2026)

- **Live:** https://aetherpeptide.com (also https://peptideforge-paay.vercel.app)
- **Repo:** github.com/yitz/peptideforge
- **Phase:** Phase 1 complete (marketing site + quiz + creative agent + Restorative Lab design + production logos)
- **Next phase:** Stripe checkout, provider partner integration, patient dashboard (order tracking)
- **Provider partner:** NOT finalized — use "partner provider network" only, zero company names

## Design System

**"The Restorative Lab"** — see DESIGN.md for full spec.

- Default theme: **light** (dark mode supported but not default)
- Typography: Noto Serif (headlines), Inter (body), Space Grotesk (labels), Geist Mono (mono)
- Icons: Material Symbols Outlined (Google Fonts) + production spa icon as inline SVG paths
- Colors: Primary teal #0D9488, on-surface #0B1C30 (never pure black), warm neutral surfaces
- Effects: glassmorphism (glass-card, glass-primary, glass-nav), mesh gradients, metallic shimmer, premium shadows
- Rules: No borders for sectioning (tonal layering only), generous whitespace, intentional asymmetry

## Logo System

Production Logo component at `src/components/layout/logo.tsx`:
- 4 variants: horizontal, stacked, icon, monogram
- Spa icon rendered as inline SVG paths (Material Symbols "spa" filled) — zero font dependencies
- Auto dark mode: switches to bright teal (#2DD4BF) + white text
- Used in: site-header.tsx, site-footer.tsx

Favicon: `src/app/icon.svg` (SVG spa icon)
Apple touch icon: `src/app/apple-icon.tsx` (dynamic 180x180 PNG)
OG image: `src/app/opengraph-image.tsx` (spa icon + wordmark on dark gradient)
Twitter image: `src/app/twitter-image.tsx`

## Key Architecture

- Next.js 16 App Router + TypeScript
- Tailwind CSS v4 + shadcn/ui (Base UI — uses `render` prop, NOT `asChild`)
- next-themes (defaultTheme="light")
- Peptide registry: `src/lib/peptides/registry.ts` (6 peptides, type-safe, filterable)
- Analytics: `src/lib/analytics.ts` (GA4 + Meta Pixel, zero PHI)
- Quiz: `src/components/quiz/quiz-flow.tsx` (goals-only, max 3, non-clinical)
- Design system utilities: `src/app/globals.css` (glass-card, mesh-gradient, etc.)

## Routes (21 total)

```
/                     Homepage (hero, trust, goals bento, CTA)
/quiz                 Wellness quiz (mesh gradient, glass cards)
/peptides             Peptide catalog (editorial grid, glass badges)
/peptides/[slug]      Individual peptide detail (6 SSG pages)
/pricing              Pricing (3 equal-height light cards, identical buttons)
/start                Start journey page
/icon.svg             Favicon
/apple-icon           Apple touch icon (dynamic PNG)
/opengraph-image      OG image (dynamic PNG)
/twitter-image        Twitter card (dynamic PNG)
/sitemap.xml          Dynamic sitemap
/robots.txt           Robots directives
/api/creative         Marketing creative agent API
```

## Compliance (Non-Negotiable)

- Structure-function claims ONLY (supports, promotes, may help maintain)
- Never imply AI makes clinical decisions
- Mandatory disclaimer on every major page
- Quiz is educational matching only — not a medical assessment
- No specific provider partner names in codebase
- All medical decisions by independent licensed physicians

## Git Push Pattern (Boxen workaround)

```bash
TOKEN=$(gh auth token) && git remote set-url origin "https://yitz:${TOKEN}@github.com/yitz/peptideforge.git" && git push origin main 2>&1 && git remote set-url origin https://github.com/yitz/peptideforge.git
```

## Work Style

- Execute autonomously — don't give instructions, do the work
- Always commit and push directly
- Run `npm run build` before committing
- Start responses with: "Understood — working from latest AGENTS.md and README.md"

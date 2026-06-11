# AetherPeptide

A no-hype **news + newsletter site** tracking peptide research and regulatory developments — with a **priority waitlist** for compliant options after regulatory clarity.

> ## ⚡ Current Phase (June 2026 onward) — Audience-Building / Regulatory News
>
> **The site is in a deliberate, temporary strategic phase.** It is **not** a telehealth or e-commerce site right now. The #1 job is **email capture** — newsletter signups + waitlist. Everything else supports that.
>
> - **What it is now:** Regulatory updates, recategorization timelines, research summaries, and industry movement, delivered as a newsletter + a priority waitlist.
> - **Why:** Build an owned audience now while we await regulatory clarity (the FDA Pharmacy Compounding Advisory Committee meeting on **July 23–24, 2026**, covering peptides including BPC-157 and TB-500). News + waitlist positioning carries far less paid-ad and regulatory risk than benefit/protocol content, and protects a clean compliant launch later.
> - **Hard rules this phase:** No disease/treatment claims. No protocols or dosing. No benefit promises. No telehealth/provider-handoff flows. No product sales/pricing/checkout. No quiz-to-protocol. News framing only ("emerging research," "timeline updates," "what the data and regulatory process show"). Every substantive page carries the news/not-medical-advice disclaimer.
> - **Tone:** Informal but credible and straightforward — a trustworthy industry observer, not a salesperson.
>
> See **AGENTS.md → "Current Phase"** for the authoritative spec. Everything below describes the **long-term** telehealth vision, which is paused until after regulatory clarity.

## What This Is (long-term vision — paused)

AetherPeptide is a **branded storefront and marketing machine** that connects customers with licensed physicians through our partner provider network. We own the customer experience: discovery, education, quiz, checkout, order tracking. All medical decisions — intake, evaluation, prescribing, protocol design, lab interpretation — are handled exclusively by licensed providers.

## What This Is NOT

- Not a clinical AI tool (no AI screening, no AI protocol recommendations, no AI lab interpretation)
- Not a peptide manufacturer or pharmacy (we connect to licensed 503A pharmacies via provider partners)
- Not a source of medical advice — and **in the current phase, not a source of structure-function benefit claims either** (news/information framing only)

## Brand Rules

| Rule | Detail |
|------|--------|
| **Name** | AetherPeptide |
| **Domain** | aetherpeptide.com |
| **Positioning** | Premium physician-supervised peptide therapy |
| **Primary color** | Teal `#0d9488` / oklch(0.52 0.14 180) |
| **Headline font** | Noto Serif (editorial authority) |
| **Label font** | Space Grotesk (biohacking precision) |
| **Body font** | Inter |
| **Mono font** | Geist Mono |
| **Icons** | Material Symbols Outlined |
| **Default theme** | Light (dark mode supported) |
| **Design system** | "Restorative Lab" — see DESIGN.md |
| **Tone** | Confident, scientific yet approachable, premium wellness |
| **Dark mode** | Biohacker intensity — deep blue-black, bright teal accents |
| **Light mode** | Clean clinical trust — warm neutral base, soft teal primary |

## Design System — "The Restorative Lab"

See **DESIGN.md** for the complete specification. Key principles:

- **No-Line Rule:** Borders are prohibited for sectioning. Use tonal shifts only.
- **Tonal Layering:** Depth via stacked surfaces, not shadows.
- **Glassmorphism:** `.glass-card`, `.glass-primary`, `.glass-nav` for floating elements.
- **Typography Pairing:** Noto Serif headlines + Space Grotesk labels = "premium clinic" aesthetic.
- **Generous Whitespace:** If a screen feels full, double the whitespace.
- **Intentional Asymmetry:** Editorial feel, not rigid template grids.
- **On-surface color:** `#0b1c30` — never pure black `#000000`.

## Compliance — Non-Negotiable

- **Structure-function claims ONLY** — "Supports tissue repair and recovery" is OK. "Treats arthritis" is NOT.
- **Never imply AI makes medical decisions** — Providers make all medical decisions. AI is used only for marketing creative, site building, and non-clinical support.
- **Mandatory disclaimer on every page**: "AetherPeptide connects you with licensed physicians through our partner network. All medical decisions, prescriptions, and protocols are handled exclusively by licensed providers. Compounded peptides available only under valid prescription via 503A pharmacies. Not intended to diagnose, treat, cure, or prevent any disease."
- **Quiz is non-clinical** — Goals only (Recovery Support, Performance, Longevity Focus). No medical history, symptoms, or contraindication questions.
- **No specific partner names** — Provider partner not yet finalized. Use "partner provider network" only.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 + shadcn/ui (Base UI) |
| Theming | next-themes (default: **light**, dark supported) |
| Icons | Material Symbols Outlined (Google Fonts) |
| Observability | @vercel/analytics + @vercel/speed-insights |
| Hosting | Vercel (production) |
| AI (non-clinical) | Marketing Creative Agent (compliant ad copy + visual prompts) |
| Compliance | FDA claim filter (rule-based + AI classifier prompt) |
| SEO | Dynamic sitemap, robots.ts, OG image generation |
| Provider partner | TBD (generic "partner provider network") |

## Project Structure

```
src/
├── app/
│   ├── (marketing)/          # Site routes: / (home), /newsletter, /updates
│   ├── api/subscribe/        # Newsletter + waitlist signup endpoint (stub — wire to ESP)
│   ├── api/creative/         # Marketing Creative Agent API (non-clinical, allowed)
│   ├── layout.tsx            # Root layout with Analytics + SpeedInsights + Material Symbols
│   ├── globals.css           # Tailwind + Restorative Lab design system utilities
│   ├── sitemap.ts            # Dynamic sitemap (home, newsletter, updates)
│   ├── robots.ts             # Robots directives
│   └── opengraph-image.tsx   # Dynamic OG image
├── components/
│   ├── layout/               # Header (glass-nav), footer, theme toggle/provider, logo
│   ├── marketing/            # Hero, value props, timeline, signup CTA, disclaimer
│   └── ui/                   # shadcn/ui (Base UI) components
└── lib/
    ├── ai/                   # Creative agent + compliance filter (non-clinical)
    ├── analytics.ts          # GA4 + Meta Pixel unified tracking (incl. signup events)
    ├── fonts.ts              # Inter + Space Grotesk + Noto Serif + Geist Mono
    └── peptides/             # Peptide registry (retained for future content reference)
```

## Design System Utilities (globals.css)

| Class | Purpose |
|-------|---------|
| `.glass-card` | Frosted glass card (backdrop-blur, semi-transparent) |
| `.glass-primary` | Teal glass effect for primary CTAs |
| `.glass-nav` | Glassmorphism navigation bar |
| `.glass-badge` | Glass effect for category labels on images |
| `.mesh-gradient` | Animated multi-color background (quiz page) |
| `.metallic-shimmer` | Animated shimmer for progress bars |
| `.premium-shadow` | Teal-tinted ambient shadow for cards |
| `.card-active-glow` | Active state glow for quiz selection cards |
| `.no-scrollbar` | Hide scrollbar (filter chip rows) |
| `.font-headline` | Noto Serif (headlines) |
| `.font-label` | Space Grotesk (labels, micro-copy) |

## Commands

```bash
npm run dev       # Start dev server (Turbopack)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

## Current Status

- **Live URL**: https://aetherpeptide.com (also https://peptideforge-paay.vercel.app)
- **Phase**: Audience-building / regulatory news (see top of this file + AGENTS.md)
- **Active routes**: `/` (homepage + signup), `/newsletter` (about + waitlist), `/updates` (news archive)
- **Primary KPI**: newsletter + waitlist signups
- **Design**: Restorative Lab (DESIGN.md), adapted to a content-oriented, approachable layout
- **Retired this phase** (recoverable from git history): `/peptides`, `/peptides/[slug]`, `/quiz`, `/pricing`, `/start` and their telehealth/product components
- **Next milestone**: FDA Pharmacy Compounding Advisory Committee meeting, **July 23–24, 2026** → reassess reintroducing compliant commerce flows
- **Signup backend**: `POST /api/subscribe` creates a subscription in **Beehiiv**. Requires env vars `BEEHIIV_API_KEY` + `BEEHIIV_PUBLICATION_ID` (see `.env.example`) — set them in Vercel **and** `.env.local`. Without them the endpoint returns 503 (fails loudly rather than dropping the email).

## Repository

- **GitHub**: github.com/yitz/peptideforge
- **Owner**: Yitz Mendlowitz

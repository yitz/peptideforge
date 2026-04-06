# AetherPeptide

Premium physician-supervised peptide therapy platform. A branded telehealth storefront — NOT a peptide manufacturer, NOT a clinical AI tool.

## What This Is

AetherPeptide is a **branded storefront and marketing machine** that connects customers with licensed physicians through our partner network (Ola Digital Health as primary provider). We own the customer experience: discovery, education, quiz, checkout, order tracking. All medical decisions — intake, evaluation, prescribing, protocol design, lab interpretation — are handled exclusively by licensed providers.

## What This Is NOT

- Not a clinical AI tool (no AI screening, no AI protocol recommendations, no AI lab interpretation)
- Not a peptide manufacturer or pharmacy (we connect to licensed 503A pharmacies via provider partners)
- Not a source of medical advice (structure-function educational claims only)

## Brand Rules

| Rule | Detail |
|------|--------|
| **Name** | AetherPeptide |
| **Domain** | aetherpeptide.com |
| **Positioning** | Premium physician-supervised peptide therapy |
| **Primary color** | Teal `#0d9488` / oklch(0.52 0.14 180) |
| **Heading font** | Space Grotesk |
| **Body font** | Inter |
| **Mono font** | Geist Mono |
| **Tone** | Confident, scientific yet approachable, premium wellness |
| **Dark mode** | Biohacker intensity — deep blue-black, bright teal accents |
| **Light mode** | Clean clinical trust — white/cream base, soft teal primary |

## Compliance — Non-Negotiable

- **Structure-function claims ONLY** — "Supports tissue repair and recovery" is OK. "Treats arthritis" is NOT.
- **Never imply AI makes medical decisions** — Providers make all medical decisions. AI is used only for marketing creative, site building, and non-clinical support.
- **Mandatory disclaimer on every page**: "AetherPeptide connects you with licensed physicians through our partner network (Ola Digital Health). All medical decisions, prescriptions, and protocols are handled exclusively by licensed providers. Compounded peptides available only under valid prescription via 503A pharmacies. Not intended to diagnose, treat, cure, or prevent any disease."
- **Quiz is non-clinical** — Goals only (Recovery Support, Performance Optimization, Longevity Focus). No medical history, symptoms, or contraindication questions.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 + shadcn/ui (Base UI) |
| Theming | next-themes (dark/light/system) |
| Observability | @vercel/analytics + @vercel/speed-insights |
| Hosting | Vercel (production) |
| AI (non-clinical) | Marketing Creative Agent (compliant ad copy + visual prompts) |
| Compliance | FDA claim filter (rule-based + AI classifier prompt) |
| SEO | Dynamic sitemap, robots.ts, OG image generation |
| Provider partner | Ola Digital Health (primary) |

## Project Structure

```
src/
├── app/
│   ├── (marketing)/          # Marketing site routes (landing, peptides, quiz, pricing, start)
│   ├── api/creative/         # Marketing Creative Agent API
│   ├── layout.tsx            # Root layout with Analytics + SpeedInsights
│   ├── sitemap.ts            # Dynamic sitemap
│   ├── robots.ts             # Robots directives
│   └── opengraph-image.tsx   # Dynamic OG image
├── components/
│   ├── layout/               # Header, footer, theme toggle/provider
│   ├── marketing/            # Hero, how-it-works, trust, CTA sections
│   ├── quiz/                 # Goal matcher quiz + results
│   └── ui/                   # shadcn/ui components
└── lib/
    ├── ai/                   # Creative agent + compliance filter
    ├── fonts.ts              # Inter + Space Grotesk + Geist Mono
    └── peptides/             # Dynamic peptide registry
```

## Commands

```bash
npm run dev       # Start dev server (Turbopack)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

## Current Status

- **Live URL**: https://peptideforge-paay.vercel.app (pending domain: aetherpeptide.com)
- **Routes**: 18 (11 static, 6 SSG peptide pages, 1 dynamic API)
- **Phases complete**: Phase 1 (marketing site + quiz + creative agent)
- **Next**: Stripe checkout, Ola provider integration, patient dashboard (order tracking)

## Repository

- **GitHub**: github.com/yitz/peptideforge
- **Owner**: Yitz Mendlowitz

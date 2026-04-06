<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AetherPeptide — Agent Instructions

**Every agent working on this project MUST read this file and README.md before doing anything else.** Start your first response with: "Understood — working from latest AGENTS.md and README.md"

## Core Identity

AetherPeptide is a **premium branded telehealth storefront**. We are NOT a peptide manufacturer, NOT a pharmacy, and NOT a clinical AI tool. We own the customer experience (discovery, education, quiz, checkout, tracking). All medical work is done by licensed physicians through our partner network.

## Non-Negotiable Rules

### 1. No Clinical AI

AI is used ONLY for:
- Building and improving the site
- Generating compliant marketing creative (ad copy + visual prompts)
- Non-clinical support (billing, shipping, general questions)
- Analytics and optimization

AI is NEVER used for:
- Screening contraindications or medical history
- Recommending peptide protocols or dosing
- Interpreting lab results
- Providing medical coaching or adherence advice
- Making any clinical decision

**If you find yourself writing code that implies AI makes medical decisions, STOP and rewrite it.**

### 2. Structure-Function Claims Only

Every piece of content must use FDA-compliant structure-function language:

ALLOWED:
- "Supports tissue repair and recovery"
- "Promotes healthy sleep patterns"
- "Supports immune system function"

NEVER ALLOWED:
- "Treats arthritis" / "Cures insomnia" / "Reverses diabetes"
- "Clinically proven to treat [condition]"
- "AI recommends your protocol"
- "Our AI screens your health history"

### 3. Mandatory Disclaimer

This exact disclaimer (or close variant) MUST appear on every major page (hero, catalog, quiz, footer, start page):

> AetherPeptide connects you with licensed physicians through our partner network (Ola Digital Health). All medical decisions, prescriptions, and protocols are handled exclusively by licensed providers. Compounded peptides available only under valid prescription via 503A pharmacies. Not intended to diagnose, treat, cure, or prevent any disease.

### 4. Quiz Rules

The quiz is strictly non-clinical. Goals only:
- Recovery Support
- Performance Optimization
- Longevity Focus
- Body Composition
- Sleep Quality
- Immune Support
- Sexual Wellness
- Cognitive Support

NO medical history, NO symptoms, NO age/sex for clinical purposes, NO lab questions, NO contraindication screening. The quiz is educational matching — not a medical assessment. Results must clearly state this.

### 5. Provider Handoff

After quiz or checkout, the flow hands off to licensed providers:
- "Your journey continues with physician review and personalized care via our licensed provider network (Ola Digital Health)"
- Make it clear that a real doctor handles intake, evaluation, prescribing, and fulfillment
- Never imply AetherPeptide makes medical decisions

## Technical Rules

### Stack
- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4 + shadcn/ui (Base UI, NOT Radix)
- shadcn Button uses `render` prop, NOT `asChild` (Base UI pattern)
- next-themes for dark/light mode (default: system)
- Inter (body) + Space Grotesk (headings) + Geist Mono (mono)

### Key Patterns
- Brand color references use CSS variables (--color-primary), not hardcoded hex
- Heading font: `font-[family-name:var(--font-space-grotesk)]`
- All pages in `(marketing)` route group share header/footer layout
- Peptide registry at `src/lib/peptides/registry.ts` — type-safe, filterable
- Creative agent at `src/lib/ai/creative-agent.ts` + `src/app/api/creative/route.ts`
- Compliance filter at `src/lib/ai/compliance-filter.ts`

### Git Push Pattern
This machine has a broken Boxen credential helper. Use this pattern to push:
```bash
TOKEN=$(gh auth token) && git remote set-url origin "https://yitz:${TOKEN}@github.com/yitz/peptideforge.git" && git push origin main 2>&1 && git remote set-url origin https://github.com/yitz/peptideforge.git
```
Ruby errors in output are cosmetic — push succeeds.

## Brand Identity

| Property | Value |
|----------|-------|
| Name | AetherPeptide |
| Domain | aetherpeptide.com |
| Primary color | Teal — oklch(0.52 0.14 180) light / oklch(0.7 0.17 190) dark |
| Provider partner | Ola Digital Health (primary) |
| Positioning | Premium physician-supervised peptide therapy |

## What To Do When Starting Work

1. Read this file (AGENTS.md) completely
2. Read README.md for current status and project structure
3. Run `git log --oneline -5` to see recent changes
4. Run `npm run build` to verify the project compiles before making changes
5. After changes, always run `npm run build` before committing
6. Start your first response with: "Understood — working from latest AGENTS.md and README.md"

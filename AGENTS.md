<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AetherPeptide — Agent Instructions

**Every agent working on this project MUST read this file and README.md before doing anything else.** Start your first response with: "Understood — working from latest AGENTS.md and README.md"

## Current Phase (June 2026 onward) — Audience-Building / Regulatory News

> **This section overrides anything below it for now.** The telehealth storefront described in "Core Identity" is the *long-term* vision, not what we are building today.

**What we are right now:** A smart, informal, no-hype **news and information site** covering peptide research and regulatory developments — paired with a **newsletter + priority waitlist**.

**The #1 job of this site:** Email capture. Every page exists to grow the newsletter list and waitlist. Everything else supports that single conversion goal.

**Why this phase exists (rationale):**
- We want to start building an **owned audience now** — through the newsletter and waitlist — while we wait for regulatory clarity. The key decision point is the **FDA Pharmacy Compounding Advisory Committee (PCAC) meeting on July 23–24, 2026**, which covers several peptides including BPC-157 and TB-500.
- Running Google and Instagram ads to build seniority and grow the list carries **real platform + regulatory risk** if content includes direct benefit claims, protocols, or sales language too early.
- News/regulatory content + waitlist positioning creates **far less platform and regulatory friction** than benefit- or protocol-focused content. This protects the long-term path to a clean, compliant telehealth launch later.
- This is a **deliberate, temporary strategic phase** (Option A: news + regulatory tracking + waitlist).

**Tone:** Informal but credible and straightforward. Conversational without being hypey or bro-science. A trustworthy industry observer, not a salesperson.

**Core positioning (use consistently):**
- Regulatory updates, recategorization timelines, research summaries, industry movement.
- A waitlist for **"priority access when compliant options open after regulatory clarity."**
- This is **news and information, not medical advice.**

**Explicitly NOT allowed in this phase:**
- ❌ No disease, treatment, or cure claims.
- ❌ No protocols or dosing information of any kind.
- ❌ No direct benefit promises ("boosts recovery," "improves sleep," etc.).
- ❌ No telehealth flows, provider-handoff flows, intake, or "start your journey" funnels.
- ❌ No product sales, pricing, checkout, "add to cart," or e-commerce of any kind.
- ❌ No quiz-to-protocol matching (the old goals quiz is retired for this phase).

**Required framing instead:** Use news language — "emerging research," "timeline updates," "what the data and the regulatory process show," "industry movement." Report on developments; never recommend or promise.

**Disclaimer requirement (this phase):** Every substantive page MUST carry a clear disclaimer that this is news/information only, not medical advice; that AetherPeptide is not a pharmacy, manufacturer, or provider; that joining the waitlist is not a purchase and creates no provider relationship; and that "priority access" refers only to future, compliant options should they become available after regulatory clarity. Use the shared `<Disclaimer />` component (`src/components/marketing/disclaimer.tsx`).

**Pages in this phase:**
- `/` — Homepage: hero focused on newsletter/waitlist value + prominent email signup.
- `/newsletter` — Newsletter/About: what you get, cadence, the waitlist, who it's for.
- `/updates` — Simple updates/archive of regulatory + research news (news-framed).
- Old telehealth routes (`/peptides`, `/quiz`, `/pricing`, `/start`) are **removed** this phase. Recoverable from git history when the compliant launch phase begins.

**When the phase ends:** After regulatory clarity (post-PCAC), we revisit reintroducing physician-supervised commerce flows. Until then, keep the site strictly news + capture.

## Core Identity (long-term vision — see Current Phase above for what to build now)

AetherPeptide is a **premium branded telehealth storefront**. We are NOT a peptide manufacturer, NOT a pharmacy, and NOT a clinical AI tool. We own the customer experience (discovery, education, quiz, checkout, tracking). All medical work is done by licensed physicians through our partner provider network.

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

> AetherPeptide connects you with licensed physicians through our partner network. All medical decisions, prescriptions, and protocols are handled exclusively by licensed providers. Compounded peptides available only under valid prescription via 503A pharmacies. Not intended to diagnose, treat, cure, or prevent any disease.

### 4. Provider Partner References

**Do NOT reference any specific partner company name in the codebase or marketing copy.** The provider partner is not yet finalized. Always use generic language:
- "licensed physicians through our partner provider network"
- "our partner network"
- "our independent partner provider network"

When the partner is finalized, a single search-and-replace will update the disclaimer template. Until then, zero company names.

### 5. Quiz Rules

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

### 6. Provider Handoff

After quiz or checkout, the flow hands off to licensed providers:
- "Your journey continues with physician review and personalized care via our partner provider network"
- Make it clear that a real doctor handles intake, evaluation, prescribing, and fulfillment
- Never imply AetherPeptide makes medical decisions

## Design System — "The Restorative Lab"

The site uses the **Restorative Lab** design system (see DESIGN.md for full specification). Key rules:

### Visual Philosophy
- **Creative North Star:** "The Restorative Lab" — a private, high-end longevity clinic aesthetic
- **No-Line Rule:** Borders are prohibited for sectioning. Use background color shifts or tonal transitions only
- **Tonal Layering:** Depth via stacked surfaces, not shadows. Place lighter cards on slightly darker backgrounds
- **Intentional Asymmetry:** Headlines offset from body copy, overlapping imagery, editorial feel
- **Generous Whitespace:** Whitespace is a "premium ingredient" — if a screen feels full, double the whitespace

### Typography
- **Headlines:** Noto Serif — medical authority, serif warmth, editorial look. CSS: `font-headline` class or `font-[family-name:var(--font-noto-serif)]`
- **Body:** Inter — clarity and readability. Default sans via `--font-inter`
- **Labels/Micro-copy:** Space Grotesk — geometric biohacking aesthetic. CSS: `font-label` class or `font-[family-name:var(--font-space-grotesk)]`
- **Mono:** Geist Mono via `--font-geist-mono`

### Effects & Surfaces
- **Glassmorphism:** Use `.glass-card`, `.glass-primary`, `.glass-nav` utility classes
- **Mesh Gradient:** `.mesh-gradient` for quiz and special pages
- **Metallic Shimmer:** `.metallic-shimmer` for progress bars
- **Premium Shadow:** `.premium-shadow` for floating cards
- **Glass Badge:** `.glass-badge` for category labels on images

### Theme
- **Default theme: light** — next-themes `defaultTheme="light"` with `enableSystem`
- **Dark mode:** Fully supported. All design system utility classes have `.dark` variants
- Light mode: Clean clinical trust — warm neutral base (`#fcfaf8`), soft teal primary
- Dark mode: Biohacker intensity — deep blue-black, bright teal accents

### Colors
- **Primary:** `#0D9488` (light) / oklch(0.7 0.17 190) (dark)
- **On-surface:** `#0b1c30` — never use pure black (#000000) for text
- **Surfaces:** Warm neutrals (`#fcfaf8`, `#faf9f6`, `#f4f7f6`)
- Always reference CSS variables (`var(--color-primary)`) in code, not hardcoded hex

### Components
- **Buttons:** Gradient fill primary (`glass-primary`), full roundedness, uppercase label font
- **Cards:** No divider lines. Use whitespace or background shifts to separate items
- **Inputs:** Minimalist. `surface-container-low` background, no full borders
- **Icons:** Material Symbols Outlined (loaded via Google Fonts stylesheet)

## Technical Rules

### Stack
- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4 + shadcn/ui (Base UI, NOT Radix)
- shadcn Button uses `render` prop, NOT `asChild` (Base UI pattern)
- next-themes for dark/light mode (default: **light**)
- Inter (body) + Space Grotesk (labels) + Noto Serif (headlines) + Geist Mono (mono)
- Material Symbols Outlined for icons on marketing pages

### Key Patterns
- Brand color references use CSS variables (--color-primary), not hardcoded hex
- Headline font: `font-headline` class (maps to Noto Serif via `--font-headline`)
- Label font: `font-label` class (maps to Space Grotesk via `--font-heading`)
- All pages in `(marketing)` route group share header/footer layout
- Peptide registry at `src/lib/peptides/registry.ts` — type-safe, filterable
- Creative agent at `src/lib/ai/creative-agent.ts` + `src/app/api/creative/route.ts`
- Compliance filter at `src/lib/ai/compliance-filter.ts`
- Design system utilities in `src/app/globals.css` (glass-card, mesh-gradient, etc.)

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
| Provider partner | Generic — "partner provider network" (not yet finalized) |
| Positioning | Premium physician-supervised peptide therapy |
| Design system | Restorative Lab (DESIGN.md) |
| Default theme | Light |

## What To Do When Starting Work

1. Read this file (AGENTS.md) completely
2. Read README.md for current status and project structure
3. Read DESIGN.md for the full Restorative Lab design specification
4. Run `git log --oneline -5` to see recent changes
5. Run `npm run build` to verify the project compiles before making changes
6. After changes, always run `npm run build` before committing
7. Start your first response with: "Understood — working from latest AGENTS.md and README.md"

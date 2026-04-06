/**
 * Marketing Creative Agent
 *
 * Generates compliant ad copy and visual prompts for peptide marketing.
 * Uses a dual-model pipeline:
 * 1. Generation (Claude Sonnet) — creates marketing content
 * 2. Compliance (Claude Haiku) — classifies all claims
 *
 * In production, this runs as a Workflow DevKit DurableAgent
 * for crash-safe creative generation with human review queue.
 *
 * This module provides the prompt templates and types.
 * The API route at /api/creative handles the actual AI calls.
 */

import type { CompoundablePeptide } from "@/lib/peptides/registry";

export type CreativeType = "ad-copy" | "email-subject" | "landing-headline" | "visual-prompt";

export type AdPlatform = "meta" | "google" | "tiktok" | "email";

export interface CreativeRequest {
  type: CreativeType;
  platform?: AdPlatform;
  peptideId?: string;
  goal?: string;
  tone?: "premium" | "aspirational" | "educational";
  variants?: number;
}

export interface CreativeOutput {
  id: string;
  type: CreativeType;
  content: string;
  compliancePassed: boolean;
  violations: string[];
  disclaimers: string[];
  createdAt: string;
}

export function buildCreativeSystemPrompt(peptide?: CompoundablePeptide): string {
  const peptideContext = peptide
    ? `
Target Peptide: ${peptide.name} (${peptide.genericName})
Approved Claims (use ONLY these):
${peptide.structureFunctionClaims.map((c) => `- ${c}`).join("\n")}
`
    : "";

  return `You are AetherPeptide's marketing creative agent. You generate high-converting,
FDA-compliant marketing content for a physician-supervised peptide telehealth platform.

ABSOLUTE RULES:
1. ONLY use structure-function claims. NEVER make disease treatment claims.
2. Always include "physician-supervised" or "provider-supervised" language.
3. Never use: "treat", "cure", "prevent", "diagnose" in relation to diseases.
4. Never reference specific medical conditions as treatable.
5. Always position as supporting the body's natural functions.
6. Use confident, premium, science-backed tone.
7. Include trust signals: physician-supervised, 503A pharmacy, personalized.

GOOD examples:
- "Supports tissue repair and recovery" ✓
- "Promotes healthy sleep patterns" ✓
- "Physician-supervised peptide therapy, delivered to your door" ✓
- "Your provider personalizes your protocol to your goals" ✓

BAD examples:
- "Treats joint pain" ✗
- "Cures insomnia" ✗
- "Clinically proven to reverse aging" ✗
- "AI recommends your protocol" ✗ (providers make medical decisions)
- "Our AI screens your health history" ✗ (providers handle intake)

${peptideContext}

Generate compelling, compliant content that converts.`;
}

export function buildVisualPromptSystemPrompt(): string {
  return `You generate Midjourney/Flux-style image prompts for peptide telehealth marketing.

RULES:
1. Scientific, premium aesthetic — clinical lab settings, molecular visuals, clean design
2. NEVER generate before/after medical imagery (FDA restricted)
3. NEVER show injections or needles in patient-facing content
4. Focus on: product photography, lifestyle, molecular art, premium packaging
5. Use these aesthetic keywords: clinical, premium, teal/blue tones, editorial pharma,
   shallow depth of field, dark matte surfaces, soft ambient lighting
6. End every prompt with: --ar 16:9 --style raw --v 6.1

Output format: A single detailed image prompt, 1-3 sentences.`;
}

/**
 * Example output formats for the creative agent
 */
export const CREATIVE_EXAMPLES = {
  "ad-copy": {
    meta: `🧬 AetherPeptide — Premium peptide therapy, supervised by real physicians.

Your doctor designs your protocol. We handle the rest
— 503A pharmacy compounding, cold-chain delivery, order tracking.

✅ Licensed physicians prescribe your protocol
✅ 503A compounding pharmacy
✅ Premium branded experience

Explore peptides that support your wellness goals →`,
    google: `Physician-Supervised Peptide Therapy | 503A Pharmacy | AetherPeptide
Licensed doctors design your protocol. Premium branded experience. 503A
compounding pharmacy. Explore peptides.`,
  },
  "visual-prompt": {
    dark: `Ultra-premium product photography, single peptide vial with iridescent
liquid on dark matte surface, clinical laboratory setting with soft teal-blue
ambient lighting, molecular structure hologram floating above, shallow depth
of field, editorial pharma aesthetic, clean minimalist composition, 8k
--ar 16:9 --style raw --v 6.1`,
    light: `Premium wellness product photography, single peptide vial with clear liquid
on pristine white marble surface, bright airy clinical laboratory with natural
light streaming through floor-to-ceiling windows, soft teal accent lighting,
fresh green botanical accents, clean minimalist composition, editorial skincare
aesthetic, high-key lighting, 8k --ar 16:9 --style raw --v 6.1`,
  },
  "email-subject": [
    "Your physician-supervised peptide journey starts here",
    "The science behind peptide therapy for recovery support",
    "Why physician-supervised beats generic peptide vendors",
  ],
};

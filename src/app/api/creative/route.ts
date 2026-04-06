import { NextResponse } from "next/server";
import {
  type CreativeRequest,
  type CreativeOutput,
  buildCreativeSystemPrompt,
  buildVisualPromptSystemPrompt,
  CREATIVE_EXAMPLES,
} from "@/lib/ai/creative-agent";
import { checkCompliance } from "@/lib/ai/compliance-filter";
import { getPeptideBySlug } from "@/lib/peptides/registry";

/**
 * POST /api/creative
 *
 * Marketing Creative Agent API endpoint.
 *
 * In production, this integrates with the AI SDK + AI Gateway:
 *   - Claude Sonnet for generation
 *   - Claude Haiku for compliance classification
 *
 * For Phase 1 (pre-AI integration), returns template-based creative
 * that demonstrates the pipeline and compliance filtering.
 */
export async function POST(request: Request) {
  const start = Date.now();

  try {
    const body = (await request.json()) as CreativeRequest;
    const { type, platform, peptideId, variants = 1 } = body;

    const peptide = peptideId ? getPeptideBySlug(peptideId) : undefined;

    const outputs: CreativeOutput[] = [];

    for (let i = 0; i < Math.min(variants, 5); i++) {
      let content: string;

      switch (type) {
        case "ad-copy": {
          const platformKey = platform === "google" ? "google" : "meta";
          content = peptide
            ? generatePeptideAdCopy(peptide.name, peptide.structureFunctionClaims, platformKey)
            : CREATIVE_EXAMPLES["ad-copy"][platformKey];
          break;
        }
        case "visual-prompt":
          content = peptide
            ? generateVisualPrompt(peptide.name)
            : CREATIVE_EXAMPLES["visual-prompt"].dark;
          break;
        case "email-subject":
          content =
            CREATIVE_EXAMPLES["email-subject"][
              i % CREATIVE_EXAMPLES["email-subject"].length
            ];
          break;
        case "landing-headline":
          content = peptide
            ? `${peptide.name}: ${peptide.structureFunctionClaims[0]}`
            : "Premium Physician-Supervised Peptide Therapy — Delivered to Your Door";
          break;
        default:
          content = "Unsupported creative type";
      }

      const compliance = checkCompliance(content);

      outputs.push({
        id: `creative-${Date.now()}-${i}`,
        type,
        content: compliance.passed ? content : `[BLOCKED] ${content}`,
        compliancePassed: compliance.passed,
        violations: compliance.violations,
        disclaimers: compliance.disclaimers,
        createdAt: new Date().toISOString(),
      });
    }

    console.log(
      JSON.stringify({
        level: "info",
        msg: "creative-generated",
        route: "/api/creative",
        type,
        variants: outputs.length,
        passed: outputs.filter((o) => o.compliancePassed).length,
        ms: Date.now() - start,
      })
    );

    return NextResponse.json({ outputs });
  } catch (error) {
    console.error(
      JSON.stringify({
        level: "error",
        msg: "creative-error",
        route: "/api/creative",
        error: error instanceof Error ? error.message : String(error),
        ms: Date.now() - start,
      })
    );
    return NextResponse.json(
      { error: "Failed to generate creative" },
      { status: 500 }
    );
  }
}

function generatePeptideAdCopy(
  name: string,
  claims: string[],
  platform: "meta" | "google"
): string {
  if (platform === "google") {
    return `${name} Peptide Therapy | Physician-Supervised | AetherPeptide
${claims[0]}. Physician-supervised protocols. Licensed providers. 503A pharmacy.`;
  }

  return `🧬 ${name} — Personalized to Your Biology

${claims.slice(0, 2).map((c) => `✅ ${c}`).join("\n")}

Physician-supervised. 503A compounding pharmacy.
Licensed physicians make every medical decision independently.

Take the 2-minute quiz →`;
}

function generateVisualPrompt(peptideName: string): string {
  return `Ultra-premium product photography, single ${peptideName} peptide vial with iridescent liquid, clinical laboratory setting with soft teal-blue ambient lighting, molecular structure hologram floating above with "${peptideName}" label subtly visible, shallow depth of field, dark matte surface, editorial pharma aesthetic, clean minimalist composition, 8k --ar 16:9 --style raw --v 6.1`;
}

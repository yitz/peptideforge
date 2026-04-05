/**
 * FDA Claim Compliance Filter
 *
 * Classifies marketing claims as structure-function (allowed) or
 * disease-treatment (blocked). In production this uses Claude Haiku
 * for classification. This module provides the rule engine and
 * prompt templates.
 */

const DISEASE_TREATMENT_PATTERNS = [
  /\b(treat|treats|treating|treatment)\b/i,
  /\b(cure|cures|curing)\b/i,
  /\b(diagnos|prevent|prevents|preventing|prevention)\b/i,
  /\b(disease|disorder|syndrome|condition|illness|patholog)/i,
  /\b(heal|heals|healing)\s+(cancer|tumor|diabet|alzheimer|parkinson)/i,
  /\b(eliminat|eradicat|revers|combat)\w*\s+(disease|cancer|tumor|infection)/i,
  /\bFDA[\s-]?approved\b/i,
  /\bclinically\s+proven\s+to\b/i,
  /\bmedical\s+treatment\b/i,
];

const REQUIRED_DISCLAIMERS = [
  "These statements have not been evaluated by the FDA.",
  "This product is not intended to diagnose, treat, cure, or prevent any disease.",
  "All treatments require a prescription from a licensed physician.",
];

export interface ComplianceResult {
  passed: boolean;
  violations: string[];
  content: string;
  disclaimers: string[];
}

/**
 * Rule-based pre-filter for obvious violations.
 * In production, violations also go through AI classification
 * for context-aware analysis.
 */
export function checkCompliance(content: string): ComplianceResult {
  const violations: string[] = [];

  for (const pattern of DISEASE_TREATMENT_PATTERNS) {
    const match = content.match(pattern);
    if (match) {
      violations.push(
        `Disease/treatment claim detected: "${match[0]}" — Only structure-function claims are permitted.`
      );
    }
  }

  return {
    passed: violations.length === 0,
    violations,
    content,
    disclaimers: REQUIRED_DISCLAIMERS,
  };
}

/**
 * System prompt for the AI compliance classifier (Claude Haiku).
 * Used when rule-based filter passes but we want a second opinion.
 */
export const COMPLIANCE_CLASSIFIER_PROMPT = `You are an FDA compliance classifier for peptide telehealth marketing content.

Your job: Classify each claim as either STRUCTURE-FUNCTION (allowed) or DISEASE-TREATMENT (blocked).

STRUCTURE-FUNCTION claims describe:
- How a substance affects the structure or function of the body
- General wellness and health maintenance
- Examples: "supports joint health", "promotes restful sleep", "supports immune function"

DISEASE-TREATMENT claims:
- Suggest a product can treat, cure, prevent, or diagnose a specific disease
- Reference specific medical conditions
- Examples: "treats arthritis", "cures insomnia", "reverses diabetes"

For each piece of content, respond with:
- PASS: All claims are structure-function only
- FAIL: Contains disease-treatment claims (list them)

Be strict. When in doubt, flag it.`;

export type PeptideCategory = "recovery" | "performance" | "longevity" | "body-composition" | "immune" | "sexual-health";

export type GoalTag = "recovery" | "performance" | "longevity" | "body-comp" | "immune" | "sexual-health" | "sleep" | "cognitive" | "anti-aging";

export interface DosingRange {
  min: string;
  max: string;
  unit: string;
  frequency: string;
  cycleWeeks: number;
}

export interface CompoundablePeptide {
  id: string;
  name: string;
  genericName: string;
  slug: string;
  compoundable: boolean;
  compoundableUpdatedAt: string;
  availableVia503A: boolean;
  categories: PeptideCategory[];
  goalTags: GoalTag[];
  shortDescription: string;
  mechanismOfAction: string;
  structureFunctionClaims: string[];
  contraindications: string[];
  defaultDosing: DosingRange;
  clinicalReferences: string[];
  heroImage: string;
}

/**
 * Dynamic Peptide Registry
 *
 * Admin-managed, version-controlled. In production this is backed by the database
 * with audit logging on every change. Changes trigger cascading workflows:
 * 1. Active protocol review (patients on de-listed peptides get flagged)
 * 2. Marketing content sweep (Creative Agent regenerates affected copy)
 * 3. Catalog page update
 *
 * This stub provides the initial registry for the marketing site.
 */
export const PEPTIDE_REGISTRY: CompoundablePeptide[] = [
  {
    id: "bpc-157",
    name: "BPC-157",
    genericName: "Body Protection Compound-157",
    slug: "bpc-157",
    compoundable: true,
    compoundableUpdatedAt: "2026-04-01",
    availableVia503A: true,
    categories: ["recovery"],
    goalTags: ["recovery", "performance"],
    shortDescription: "Supports tissue repair and gut health through enhanced healing signaling pathways.",
    mechanismOfAction: "BPC-157 is a synthetic pentadecapeptide derived from human gastric juice. It modulates the nitric oxide system, upregulates growth factor expression (VEGF, EGF), and promotes angiogenesis. It supports the FAK-paxillin pathway involved in tissue repair and cytoprotection.",
    structureFunctionClaims: [
      "Supports tissue repair and recovery",
      "Promotes healthy gut lining integrity",
      "Supports joint and tendon health",
      "Promotes healthy inflammatory response",
    ],
    contraindications: [
      "Active cancer diagnosis",
      "Pregnancy or breastfeeding",
      "Known hypersensitivity to BPC-157",
    ],
    defaultDosing: {
      min: "250",
      max: "500",
      unit: "mcg",
      frequency: "1-2x daily",
      cycleWeeks: 8,
    },
    clinicalReferences: [
      "PMID: 30915550",
      "PMID: 32209066",
      "PMID: 29621439",
    ],
    heroImage: "/peptides/bpc-157.webp",
  },
  {
    id: "tb-500",
    name: "TB-500",
    genericName: "Thymosin Beta-4 Fragment",
    slug: "tb-500",
    compoundable: true,
    compoundableUpdatedAt: "2026-04-01",
    availableVia503A: true,
    categories: ["recovery", "performance"],
    goalTags: ["recovery", "performance", "anti-aging"],
    shortDescription: "Supports tissue remodeling and flexible movement through actin regulation.",
    mechanismOfAction: "TB-500 is a synthetic fragment of Thymosin Beta-4, a 43-amino acid peptide that sequesters G-actin. It promotes cell migration, blood vessel formation, and modulates inflammatory mediators. It supports tissue remodeling by upregulating actin polymerization.",
    structureFunctionClaims: [
      "Supports tissue flexibility and remodeling",
      "Promotes healthy recovery from physical activity",
      "Supports cardiovascular health",
      "Promotes healthy hair growth",
    ],
    contraindications: [
      "Active cancer diagnosis",
      "Pregnancy or breastfeeding",
      "Recent surgical wounds (consult provider)",
    ],
    defaultDosing: {
      min: "2",
      max: "5",
      unit: "mg",
      frequency: "2x weekly",
      cycleWeeks: 6,
    },
    clinicalReferences: [
      "PMID: 20801949",
      "PMID: 22074479",
    ],
    heroImage: "/peptides/tb-500.webp",
  },
  {
    id: "sermorelin",
    name: "Sermorelin",
    genericName: "Sermorelin Acetate",
    slug: "sermorelin",
    compoundable: true,
    compoundableUpdatedAt: "2026-04-01",
    availableVia503A: true,
    categories: ["longevity", "performance", "body-composition"],
    goalTags: ["longevity", "anti-aging", "sleep", "body-comp", "performance"],
    shortDescription: "Supports natural growth hormone release for recovery, sleep, and body composition.",
    mechanismOfAction: "Sermorelin is a synthetic analog of growth hormone-releasing hormone (GHRH 1-29). It stimulates the pituitary gland to produce and secrete growth hormone via the GHRH receptor. This preserves the natural pulsatile release pattern and negative feedback mechanisms.",
    structureFunctionClaims: [
      "Supports healthy growth hormone levels",
      "Promotes restful sleep quality",
      "Supports lean body composition",
      "Promotes healthy aging and vitality",
    ],
    contraindications: [
      "Active cancer diagnosis",
      "Pregnancy or breastfeeding",
      "Active pituitary conditions",
      "Under 30 years of age (consult provider)",
    ],
    defaultDosing: {
      min: "200",
      max: "500",
      unit: "mcg",
      frequency: "nightly before bed",
      cycleWeeks: 12,
    },
    clinicalReferences: [
      "PMID: 9467534",
      "PMID: 11452249",
    ],
    heroImage: "/peptides/sermorelin.webp",
  },
  {
    id: "ipamorelin-cjc1295",
    name: "Ipamorelin / CJC-1295",
    genericName: "Ipamorelin + CJC-1295 (no DAC)",
    slug: "ipamorelin-cjc-1295",
    compoundable: true,
    compoundableUpdatedAt: "2026-04-01",
    availableVia503A: true,
    categories: ["longevity", "performance", "body-composition"],
    goalTags: ["longevity", "anti-aging", "sleep", "body-comp", "performance", "recovery"],
    shortDescription: "Synergistic growth hormone support for recovery, sleep, and vitality.",
    mechanismOfAction: "Ipamorelin is a selective growth hormone secretagogue that stimulates GH release via the ghrelin receptor without significantly affecting cortisol or prolactin. CJC-1295 (no DAC) is a GHRH analog that amplifies GH pulses. The combination provides synergistic, sustained GH elevation with preserved pulsatile release.",
    structureFunctionClaims: [
      "Supports healthy growth hormone optimization",
      "Promotes deep, restorative sleep",
      "Supports lean muscle and body composition",
      "Promotes recovery from physical activity",
      "Supports healthy metabolism",
    ],
    contraindications: [
      "Active cancer diagnosis",
      "Pregnancy or breastfeeding",
      "Diabetes (monitor glucose closely)",
      "Active pituitary conditions",
    ],
    defaultDosing: {
      min: "200",
      max: "300",
      unit: "mcg each",
      frequency: "nightly before bed",
      cycleWeeks: 12,
    },
    clinicalReferences: [
      "PMID: 9467534",
      "PMID: 16352683",
    ],
    heroImage: "/peptides/ipamorelin-cjc.webp",
  },
  {
    id: "pt-141",
    name: "PT-141",
    genericName: "Bremelanotide",
    slug: "pt-141",
    compoundable: true,
    compoundableUpdatedAt: "2026-04-01",
    availableVia503A: true,
    categories: ["sexual-health"],
    goalTags: ["sexual-health"],
    shortDescription: "Supports healthy sexual function through central nervous system melanocortin pathways.",
    mechanismOfAction: "PT-141 (Bremelanotide) is a melanocortin receptor agonist that acts on MC3R and MC4R receptors in the central nervous system. Unlike PDE5 inhibitors, it works through the hypothalamus to modulate sexual arousal and desire through dopaminergic pathways.",
    structureFunctionClaims: [
      "Supports healthy sexual arousal and desire",
      "Promotes sexual wellness in both men and women",
      "Supports healthy libido",
    ],
    contraindications: [
      "Uncontrolled hypertension",
      "Cardiovascular disease",
      "Pregnancy or breastfeeding",
      "Use of nasal decongestants (concurrent)",
    ],
    defaultDosing: {
      min: "1",
      max: "2",
      unit: "mg",
      frequency: "as needed, max 1x per 24h",
      cycleWeeks: 0,
    },
    clinicalReferences: [
      "PMID: 16422902",
      "PMID: 31035291",
    ],
    heroImage: "/peptides/pt-141.webp",
  },
  {
    id: "thymosin-alpha-1",
    name: "Thymosin Alpha-1",
    genericName: "Thymalfasin",
    slug: "thymosin-alpha-1",
    compoundable: true,
    compoundableUpdatedAt: "2026-04-01",
    availableVia503A: true,
    categories: ["immune", "longevity"],
    goalTags: ["immune", "longevity", "anti-aging"],
    shortDescription: "Supports immune system modulation and healthy immune cell function.",
    mechanismOfAction: "Thymosin Alpha-1 is a naturally occurring thymic peptide that modulates immune function by enhancing T-cell maturation, dendritic cell function, and NK cell activity. It acts on toll-like receptors (TLR2, TLR9) and supports Th1/Th2 balance.",
    structureFunctionClaims: [
      "Supports healthy immune system function",
      "Promotes T-cell and NK cell activity",
      "Supports immune system modulation",
      "Promotes healthy immune response to seasonal challenges",
    ],
    contraindications: [
      "Organ transplant recipients (immunosuppression required)",
      "Active autoimmune conditions (consult provider)",
      "Pregnancy or breastfeeding",
    ],
    defaultDosing: {
      min: "1.6",
      max: "3.2",
      unit: "mg",
      frequency: "2-3x weekly",
      cycleWeeks: 8,
    },
    clinicalReferences: [
      "PMID: 17197024",
      "PMID: 21354362",
    ],
    heroImage: "/peptides/thymosin-alpha-1.webp",
  },
];

export function getCompoundablePeptides(): CompoundablePeptide[] {
  return PEPTIDE_REGISTRY.filter((p) => p.compoundable && p.availableVia503A);
}

export function getPeptideBySlug(slug: string): CompoundablePeptide | undefined {
  return PEPTIDE_REGISTRY.find((p) => p.slug === slug);
}

export function getPeptidesByGoal(goal: GoalTag): CompoundablePeptide[] {
  return getCompoundablePeptides().filter((p) => p.goalTags.includes(goal));
}

export function getPeptidesByCategory(category: PeptideCategory): CompoundablePeptide[] {
  return getCompoundablePeptides().filter((p) => p.categories.includes(category));
}

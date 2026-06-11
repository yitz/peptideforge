/**
 * AetherPeptide — Unified Analytics Layer
 *
 * Fires events to GA4 (gtag) and Meta Pixel (fbq) in one call.
 * ZERO PHI is ever included in any event payload.
 *
 * Usage:
 *   import { track } from "@/lib/analytics";
 *   track.quizStart();
 *   track.ctaClick("hero", "Find Your Protocol", "/quiz");
 */

/* ---------- type helpers ---------- */

// GA4 gtag global
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

function gtag(...args: unknown[]) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag(...args);
  }
}

function fbq(...args: unknown[]) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq(...args);
  }
}

/* ---------- event helpers ---------- */

/**
 * GA4 custom event. Names follow Google's recommended snake_case convention.
 * All custom params are string | number — never PII/PHI.
 */
function ga4Event(name: string, params?: Record<string, string | number>) {
  gtag("event", name, params);
}

/**
 * Meta Pixel standard or custom event.
 */
function metaStandard(name: string, params?: Record<string, string | number>) {
  fbq("track", name, params);
}

function metaCustom(name: string, params?: Record<string, string | number>) {
  fbq("trackCustom", name, params);
}

/* ---------- public tracking API ---------- */

export const track = {
  /* ---- Page-level (automatic via gtag config, but available for SPAs) ---- */

  pageView(path: string, title: string) {
    ga4Event("page_view", { page_path: path, page_title: title });
    fbq("track", "PageView");
  },

  /* ---- Quiz Funnel ---- */

  /** User lands on /quiz (quiz page mounted) */
  quizStart() {
    ga4Event("quiz_start");
    metaCustom("QuizStart");
  },

  /** User selects or deselects a goal */
  goalSelect(goal: string, totalSelected: number) {
    ga4Event("goal_select", { goal, total_selected: totalSelected });
    // No Meta event for individual toggles — too noisy
  },

  /** User submits quiz (clicks "See Matched Peptides") */
  quizComplete(goals: string[]) {
    ga4Event("quiz_complete", {
      goals: goals.join(","),
      goal_count: goals.length,
    });
    metaStandard("Lead", {
      content_name: "Quiz Complete",
      content_category: goals.join(","),
    });
  },

  /** User clicks a matched peptide from results */
  quizResultClick(peptideName: string, position: number) {
    ga4Event("quiz_result_click", {
      peptide: peptideName,
      position,
    });
    metaStandard("ViewContent", {
      content_name: peptideName,
      content_category: "Peptide",
    });
  },

  /* ---- CTA Tracking ---- */

  /** Any CTA button click across the site */
  ctaClick(section: string, label: string, destination: string) {
    ga4Event("cta_click", { section, label, destination });
    metaCustom("CTAClick", { section, label, destination });
  },

  /* ---- Pricing ---- */

  /** User clicks "Get Started" on a pricing plan */
  planSelect(planName: string, price: number) {
    ga4Event("plan_select", { plan_name: planName, price });
    metaStandard("AddToCart", {
      content_name: planName,
      value: price,
      currency: "USD",
    });
  },

  /* ---- Navigation ---- */

  /** Header/footer nav link clicks */
  navClick(location: string, label: string, destination: string) {
    ga4Event("nav_click", { location, label, destination });
  },

  /* ---- Newsletter + Waitlist (primary conversion this phase) ---- */

  /** User submits the email signup form (fired on submit, before success) */
  signupSubmit(source: string) {
    ga4Event("signup_submit", { source });
  },

  /** Signup confirmed by the API — this is the primary conversion event */
  signupSuccess(source: string) {
    ga4Event("signup_success", { source });
    metaStandard("Lead", { content_name: "Newsletter + Waitlist", content_category: source });
  },

  /** Provider Handoff — retained for the future compliant-launch phase (unused now) */
  startJourney(source: string) {
    ga4Event("start_journey", { source });
    metaStandard("InitiateCheckout", { content_category: source });
  },
} as const;

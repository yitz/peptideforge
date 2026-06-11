/**
 * Disclaimer — mandatory on every substantive page during the
 * audience-building / regulatory-news phase (see AGENTS.md → Current Phase).
 *
 * News/information framing only. Not medical advice. Not a pharmacy/provider.
 * Waitlist is not a purchase and creates no provider relationship.
 *
 * `variant="inline"` — quiet footnote under page content.
 * `variant="footer"` — the global footer copy (denser, uppercase micro-type).
 */

import { cn } from "@/lib/utils";

const BODY =
  "AetherPeptide is an independent news and information service covering peptide research and regulatory developments. We are not a pharmacy, drug manufacturer, or healthcare provider, and nothing here is medical advice. All content is for general informational purposes only and is not intended to diagnose, treat, cure, or prevent any disease. Joining the newsletter or waitlist is not a purchase and does not create a patient–provider relationship. “Priority access” refers only to future, compliant options should they become available following regulatory clarity.";

export function Disclaimer({
  variant = "inline",
  className,
}: {
  variant?: "inline" | "footer";
  className?: string;
}) {
  if (variant === "footer") {
    return (
      <p
        className={cn(
          "font-body text-[9px] uppercase leading-loose tracking-[0.1em] text-muted-foreground/60",
          className
        )}
      >
        &copy; {new Date().getFullYear()} AetherPeptide. {BODY}
      </p>
    );
  }

  return (
    <div className={cn("mx-auto max-w-3xl", className)}>
      <p className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
        News &amp; Information — Not Medical Advice
      </p>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground/80">
        {BODY}
      </p>
    </div>
  );
}

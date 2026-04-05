import Link from "next/link";
import { FlaskConical } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const FOOTER_LINKS = {
  Platform: [
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Peptide Catalog", href: "/peptides" },
    { label: "Take the Quiz", href: "/quiz" },
    { label: "Pricing", href: "/pricing" },
  ],
  Science: [
    { label: "Research", href: "/science" },
    { label: "Clinical References", href: "/science#references" },
    { label: "Our Providers", href: "/providers" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <FlaskConical className="h-6 w-6 text-primary" />
              <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold">
                PeptideForge
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              AI-powered personalized peptide therapy.
              Physician-supervised. Science-backed.
            </p>
          </div>
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold">{category}</h3>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} PeptideForge. All rights reserved.</p>
          <div className="max-w-2xl text-center sm:text-right">
            <p>
              PeptideForge facilitates access to physician-supervised peptide therapy through
              licensed telehealth providers and 503A compounding pharmacies. All treatments
              require a prescription from a licensed provider. These statements have not been
              evaluated by the FDA. This platform is not intended to diagnose, treat, cure, or
              prevent any disease.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

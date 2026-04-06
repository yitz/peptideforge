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
              Physician-supervised peptide therapy.
              Licensed providers. 503A pharmacies.
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

        <div className="rounded-lg border border-border bg-muted/50 p-4 text-center text-xs text-muted-foreground">
          <p>
            PeptideForge provides a branded experience connecting you with licensed
            physicians through our partner network. All medical decisions,
            prescriptions, and protocols are handled exclusively by licensed providers.
            Compounded peptides are available only under valid prescription via 503A
            pharmacies. These statements have not been evaluated by the FDA. Not
            intended to diagnose, treat, cure, or prevent any disease.
            Structure-function claims only.
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} PeptideForge. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="transition-colors hover:text-foreground">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

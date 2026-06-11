import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { Disclaimer } from "@/components/marketing/disclaimer";

export function SiteFooter() {
  return (
    <footer className="w-full bg-card py-20 px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/">
            <Logo variant="horizontal" />
          </Link>
          <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
            An independent, no-hype briefing on peptide research and regulatory
            developments — plus a priority waitlist for compliant options after
            regulatory clarity.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-5">
            <span className="font-label text-[10px] font-bold uppercase tracking-widest text-primary">
              Explore
            </span>
            <nav className="flex flex-col gap-3">
              <Link className="text-xs text-muted-foreground transition-colors hover:text-primary" href="/newsletter">Newsletter</Link>
              <Link className="text-xs text-muted-foreground transition-colors hover:text-primary" href="/updates">Updates</Link>
            </nav>
          </div>
          <div className="flex flex-col gap-5">
            <span className="font-label text-[10px] font-bold uppercase tracking-widest text-primary">
              Legal
            </span>
            <nav className="flex flex-col gap-3">
              <Link className="text-xs text-muted-foreground transition-colors hover:text-primary" href="/privacy">Privacy Policy</Link>
              <Link className="text-xs text-muted-foreground transition-colors hover:text-primary" href="/terms">Terms of Service</Link>
            </nav>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-12">
          <Disclaimer variant="footer" />
        </div>
      </div>
    </footer>
  );
}

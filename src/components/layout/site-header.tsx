"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, FlaskConical, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/layout/theme-toggle";

const NAV_ITEMS = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Peptides", href: "/peptides" },
  { label: "Science", href: "/science" },
  { label: "Pricing", href: "/pricing" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/90 shadow-sm backdrop-blur-xl dark:border-border/50 dark:bg-background/80 dark:shadow-none">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <FlaskConical className="h-7 w-7 text-primary" />
          <span className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold tracking-tight">
            PeptideForge
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button variant="outline" size="sm" render={<Link href="/quiz" />}>
            Take the Quiz
          </Button>
          <Button size="sm" render={<Link href="/start" />}>
            Get Started
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon" aria-label="Open menu" />}>
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-6 pt-6">
                <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                  <FlaskConical className="h-6 w-6 text-primary" />
                  <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold">
                    PeptideForge
                  </span>
                </Link>
                <nav className="flex flex-col gap-1">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-2 border-t border-border pt-4">
                  <Button variant="outline" render={<Link href="/quiz" onClick={() => setOpen(false)} />}>
                    Take the Quiz
                  </Button>
                  <Button render={<Link href="/start" onClick={() => setOpen(false)} />}>
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

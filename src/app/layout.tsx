import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnalyticsScripts } from "@/components/layout/analytics-scripts";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { inter, spaceGrotesk, notoSerif, geistMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AetherPeptide — Premium Physician-Supervised Peptide Therapy",
    template: "%s | AetherPeptide",
  },
  description:
    "Premium physician-supervised peptide therapy. Personalized protocols for recovery, performance, and longevity — compounded at licensed 503A pharmacies.",
  keywords: [
    "peptide therapy",
    "BPC-157",
    "telehealth",
    "longevity",
    "regenerative medicine",
    "personalized medicine",
    "biohacking",
  ],
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://aetherpeptide.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AetherPeptide",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0d9488" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${notoSerif.variable} ${geistMono.variable}`}
      suppressHydrationWarning

    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <ThemeProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
        <AnalyticsScripts />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

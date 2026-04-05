import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { inter, spaceGrotesk, geistMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PeptideForge — AI-Powered Personalized Peptide Therapy",
    template: "%s | PeptideForge",
  },
  description:
    "The most intelligent, physician-supervised peptide therapy platform. AI-driven protocols for recovery, performance, longevity, and optimized human biology.",
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
    process.env.NEXT_PUBLIC_SITE_URL || "https://peptideforge.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PeptideForge",
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <ThemeProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

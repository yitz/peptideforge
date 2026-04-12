import { Inter, Space_Grotesk, Noto_Serif } from "next/font/google";
import { Geist_Mono } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

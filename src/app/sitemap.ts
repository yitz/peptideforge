import type { MetadataRoute } from "next";
import { getCompoundablePeptides } from "@/lib/peptides/registry";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://aetherpeptide.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const peptides = getCompoundablePeptides();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/peptides`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/quiz`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/science`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  const peptidePages: MetadataRoute.Sitemap = peptides.map((p) => ({
    url: `${BASE_URL}/peptides/${p.slug}`,
    lastModified: new Date(p.compoundableUpdatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...peptidePages];
}

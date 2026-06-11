import { MetadataRoute } from "next";
import { CALCULATORS } from "@/lib/calculators";
import { SITE } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: SITE.URL,                        priority: 1.0,  changeFrequency: "weekly"  as const },
    { url: `${SITE.URL}/financial`,          priority: 0.9,  changeFrequency: "weekly"  as const },
    { url: `${SITE.URL}/fitness`,            priority: 0.9,  changeFrequency: "weekly"  as const },
    { url: `${SITE.URL}/math`,               priority: 0.9,  changeFrequency: "weekly"  as const },
    { url: `${SITE.URL}/other`,              priority: 0.9,  changeFrequency: "weekly"  as const },
    { url: `${SITE.URL}/search`,             priority: 0.6,  changeFrequency: "weekly"  as const },
    { url: `${SITE.URL}/about`,              priority: 0.5,  changeFrequency: "monthly" as const },
    { url: `${SITE.URL}/contact`,            priority: 0.5,  changeFrequency: "monthly" as const },
    { url: `${SITE.URL}/privacy-policy`,     priority: 0.3,  changeFrequency: "yearly"  as const },
    { url: `${SITE.URL}/terms-of-use`,       priority: 0.3,  changeFrequency: "yearly"  as const },
    { url: `${SITE.URL}/sitemap-page`,       priority: 0.7,  changeFrequency: "weekly"  as const },
  ];

  const calcPages = CALCULATORS.map(c => ({
    url:             `${SITE.URL}/${c.slug}`,
    priority:        c.featured ? 0.9 : 0.8,
    changeFrequency: "monthly" as const,
    lastModified:    new Date(),
  }));

  return [...staticPages, ...calcPages];
}

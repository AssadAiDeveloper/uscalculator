import { ImageResponse } from "next/og";
import { CALCULATORS, CATEGORIES } from "@/lib/calculators";
import { OgTemplate } from "@/lib/og-image";

// Serves the `/og/{slug}.png` social images referenced by calculator and
// section pages. Uses the calculator/category name for a tailored card,
// falling back to a generic branded card for unknown slugs.

const STATIC_PAGES: Record<string, string> = {
  home: "USCalculator.net",
  about: "About Us",
  contact: "Contact Us",
  "sitemap-page": "All Calculators",
};

export function generateStaticParams() {
  return [
    ...CALCULATORS.map(c => ({ slug: `${c.slug}.png` })),
    ...CATEGORIES.map(c => ({ slug: `${c.id}.png` })),
    ...Object.keys(STATIC_PAGES).map(slug => ({ slug: `${slug}.png` })),
  ];
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug: raw } = await params;
  const slug = raw.replace(/\.(png|jpg|jpeg)$/i, "");

  const calc = CALCULATORS.find(c => c.slug === slug);
  const category = CATEGORIES.find(c => c.id === slug);

  let title = STATIC_PAGES[slug] ?? "USCalculator.net";
  let subtitle = "Free · Fast · Accurate Online Calculators";

  if (calc) {
    title = calc.name;
    subtitle = calc.description;
  } else if (category) {
    title = `${category.name} Calculators`;
    subtitle = category.description;
  }

  return new ImageResponse(<OgTemplate title={title} subtitle={subtitle} />, {
    width: 1200,
    height: 630,
  });
}

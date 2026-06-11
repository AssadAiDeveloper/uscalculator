import type { Metadata } from "next";
import { getBySlug, buildPageJsonLd, buildBreadcrumbJsonLd } from "@/lib/calculators";
import CalculatorLayout from "@/components/layout/CalculatorLayout";
import GPACalculator from "@/components/calculators/GPACalculator";
import { SITE } from "@/lib/metadata";

const calc = getBySlug("gpa-calculator")!;

export const metadata: Metadata = {
  title:       calc.name,
  description: calc.description,
  keywords:    calc.keywords.join(", "),
  alternates:  { canonical: `${SITE.URL}/${calc.slug}` },
  openGraph:   { title: calc.name, description: calc.description, url: `${SITE.URL}/${calc.slug}`, images: [{ url: `${SITE.URL}/og/${calc.slug}.png`, width: 1200, height: 630, alt: calc.name }] },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildPageJsonLd(calc)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbJsonLd(calc)) }} />
      <CalculatorLayout calc={calc}>
        <GPACalculator />
      </CalculatorLayout>
    </>
  );
}

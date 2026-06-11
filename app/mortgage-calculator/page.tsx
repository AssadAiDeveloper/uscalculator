import type { Metadata } from "next";
import { getBySlug, buildPageJsonLd, buildBreadcrumbJsonLd } from "@/lib/calculators";
import CalculatorLayout from "@/components/layout/CalculatorLayout";
import CalcContent from "@/components/ui/CalcContent";
import MortgageCalculator from "@/components/calculators/MortgageCalculator";
import { SITE } from "@/lib/metadata";

const calc = getBySlug("mortgage-calculator")!;

export const metadata: Metadata = {
  title:       calc.name,
  description: calc.description,
  keywords:    calc.keywords.join(", "),
  alternates:  { canonical: `${SITE.URL}/${calc.slug}` },
  openGraph: {
    title:       calc.name,
    description: calc.description,
    url:         `${SITE.URL}/${calc.slug}`,
  },
};

export default function MortgagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildPageJsonLd(calc)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbJsonLd(calc)) }} />
      <CalculatorLayout calc={calc}>
        <MortgageCalculator />
        <CalcContent calcId="mortgage" calcName="Mortgage Calculator" />
      </CalculatorLayout>
    </>
  );
}

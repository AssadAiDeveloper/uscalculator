// SEO metadata helpers

import type { Calculator } from "./calculators";

const SITE_NAME = "USCalculator.net";
const SITE_URL  = "https://www.uscalculator.net";
const SITE_DESC = "Free online calculators for finance, fitness, health, and math. Fast, accurate, and completely free.";

export function buildMeta(calc: Calculator) {
  return {
    title:       `${calc.name} — ${SITE_NAME}`,
    description: calc.description,
    canonical:   `${SITE_URL}/${calc.slug}`,
    keywords:    calc.keywords.join(", "),
    og: {
      title:       calc.name,
      description: calc.description,
      url:         `${SITE_URL}/${calc.slug}`,
      image:       `${SITE_URL}/og/${calc.id}.png`,
    },
  };
}

export function buildHomeMeta() {
  return {
    title:       `${SITE_NAME} — Free Online Calculators`,
    description: SITE_DESC,
    canonical:   SITE_URL,
    keywords:    "calculator, online calculator, free calculator, mortgage calculator, bmi calculator",
    og: {
      title:       `${SITE_NAME} — Free Online Calculators`,
      description: SITE_DESC,
      url:         SITE_URL,
      image:       `${SITE_URL}/og/home.png`,
    },
  };
}

export function buildPageJsonLd(calc: Calculator) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": calc.name,
    "url": `${SITE_URL}/${calc.slug}`,
    "description": calc.description,
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "keywords": calc.keywords.join(", "),
  };
}

export function buildBreadcrumbJsonLd(calc: Calculator) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home",         "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": calc.shortName, "item": `${SITE_URL}/${calc.slug}` },
    ],
  };
}

export const SITE = { NAME: SITE_NAME, URL: SITE_URL, DESC: SITE_DESC };

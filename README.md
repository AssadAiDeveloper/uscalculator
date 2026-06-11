# USCalculator.net

> Free online calculator platform — 49 pages, SEO-optimized, AdSense-ready, deployable in one command.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green)

---

## What is this?

A full-featured calculator website built with Next.js 16 App Router. Every calculator lives on its own URL (e.g. `/mortgage-calculator`), making each page individually indexable by Google — unlike single-page apps where everything hides behind a `#hash`.

**Brand colors extracted from the logo:**
- Primary Blue: `#1B3A6B`
- Accent Orange: `#F97316`

---

## Features

| Feature | Details |
|---|---|
| **49 static pages** | Each calculator is a separate route with its own URL |
| **39 calculators** | Finance, Fitness, Math, and Other categories |
| **SEO-complete** | Title, description, canonical, Open Graph, JSON-LD on every page |
| **Auto sitemap.xml** | Generated from the calculator registry — updates automatically |
| **AdSense-ready** | Ad slot divs placed, Privacy Policy and Terms pages included |
| **Security headers** | X-Frame-Options, HSTS, CSP, Referrer-Policy via vercel.json |
| **No external UI libs** | Pure Tailwind CSS — no shadcn, no MUI, no bloat |
| **TypeScript strict** | Zero type errors |
| **Build time** | ~14 seconds |

---

## Tech Stack

- **Next.js 16** — App Router, static generation
- **TypeScript 5** — strict mode
- **Tailwind CSS v4** — custom design tokens
- **React 19**

---

## Project Structure

```
uscalculator/
│
├── app/                            ← All routes (Next.js App Router)
│   ├── layout.tsx                  ← Root layout with SEO meta + JSON-LD
│   ├── page.tsx                    ← Homepage (hero, categories, featured calcs)
│   ├── globals.css                 ← Global styles + animations
│   ├── sitemap.ts                  ← Auto-generates /sitemap.xml
│   ├── robots.ts                   ← Generates /robots.txt
│   │
│   ├── mortgage-calculator/        ← Each calculator = its own folder
│   │   └── page.tsx                ← Page metadata + JSON-LD + component
│   ├── bmi-calculator/
│   ├── loan-calculator/
│   ├── ... (36 more calculator routes)
│   │
│   ├── about/
│   ├── contact/
│   ├── privacy-policy/
│   ├── terms-of-use/
│   └── sitemap-page/               ← Human-readable sitemap page
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx              ← Sticky header, mobile hamburger menu
│   │   ├── Footer.tsx              ← Full footer with calculator links
│   │   ├── Sidebar.tsx             ← Popular calcs + ad slots + quick mortgage
│   │   └── CalculatorLayout.tsx    ← Shared wrapper: breadcrumb + ads + related
│   │
│   ├── calculators/
│   │   ├── CalculatorShell.tsx     ← Shared input/result/button pattern
│   │   ├── MortgageCalculator.tsx  ← Full with amortization table
│   │   ├── BMICalculator.tsx       ← With BMI gauge visualization
│   │   └── ... (37 more)
│   │
│   └── ui/
│       └── ContactForm.tsx
│
├── lib/
│   ├── calculators.ts              ← Single source of truth: all calc metadata
│   └── metadata.ts                 ← SEO helper functions
│
├── public/
│   └── logo.png
│
├── next.config.ts                  ← Security headers, image config
├── tailwind.config.ts              ← Brand colors, custom tokens
├── vercel.json                     ← Security headers for Vercel deployment
└── .env.example                    ← Environment variable reference
```

---

## Calculators Included

### Financial (15)
Mortgage · Loan · Auto Loan · Compound Interest · Investment · Retirement · Amortization · Interest · Payment · Salary · Income Tax · Sales Tax · Inflation · Finance (TVM) · Interest Rate

### Fitness & Health (7)
BMI · Calorie · Body Fat · BMR · Ideal Weight · Pregnancy · Due Date · Pace

### Math (5)
Percentage · Fraction · Random Number · Triangle · Standard Deviation

### Other (8)
Age · Date · Time · Hours · GPA · Grade · Password Generator · Conversion · Concrete · Subnet

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → http://localhost:3000

# 3. Build for production
npm run build
```

---

## Deploy to Vercel

**Option A — CLI (fastest)**
```bash
npm i -g vercel
vercel --prod
```

**Option B — GitHub**
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select the repo → Deploy

All security headers in `vercel.json` apply automatically.

---

## AdSense Setup

Two ad slot divs are already placed in the layout. To activate:

**Step 1** — Add your AdSense script to `app/layout.tsx`:
```tsx
<script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
  crossOrigin="anonymous"
/>
```

**Step 2** — Find ad placeholders with:
```bash
grep -r "ad-slot" components/
```

**Step 3** — Replace each `.ad-slot` div with your `<ins class="adsbygoogle">` tag.

Ad slots are placed at:
- Top of every calculator page (728×90 leaderboard)
- Sidebar top (300×250 medium rectangle)
- Sidebar bottom (300×250)
- Middle of calculator page (728×90)

---

## Add a New Calculator

The system is designed to make this a 3-step process:

**Step 1** — Register it in `lib/calculators.ts`:
```ts
{
  id:          "tip",
  slug:        "tip-calculator",
  name:        "Tip Calculator",
  shortName:   "Tip",
  category:    "financial",
  icon:        "🍽️",
  featured:    false,
  description: "Calculate tip amount and split the bill between multiple people.",
  keywords:    ["tip", "gratuity", "restaurant", "bill split"],
},
```

**Step 2** — Create the page at `app/tip-calculator/page.tsx`:
```tsx
import { getBySlug, buildPageJsonLd, buildBreadcrumbJsonLd } from "@/lib/calculators";
import CalculatorLayout from "@/components/layout/CalculatorLayout";
import TipCalculator from "@/components/calculators/TipCalculator";
import { SITE } from "@/lib/metadata";

const calc = getBySlug("tip-calculator")!;

export const metadata = {
  title:      calc.name,
  description: calc.description,
  alternates: { canonical: `${SITE.URL}/${calc.slug}` },
};

export default function Page() {
  return (
    <CalculatorLayout calc={calc}>
      <TipCalculator />
    </CalculatorLayout>
  );
}
```

**Step 3** — Build the component at `components/calculators/TipCalculator.tsx`.

Done. The sitemap, footer links, and category pages update automatically.

---

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://www.uscalculator.net
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## SEO Notes

- Every page has its own `<title>`, `meta description`, `canonical`, and Open Graph tags
- JSON-LD structured data: `WebSite` + `Organization` (global), `WebApplication` + `BreadcrumbList` (per calc)
- `sitemap.xml` is auto-generated from the CALCULATORS array in `lib/calculators.ts`
- Featured calculators get `priority: 0.9`, others `priority: 0.8`
- `robots.txt` allows all crawlers

---

## Security

Headers applied on every response via `next.config.ts` and `vercel.json`:

| Header | Value |
|---|---|
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `X-XSS-Protection` | `1; mode=block` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `geolocation=(), microphone=(), camera=()` |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains; preload` |

---

## License

MIT — free to use, modify, and deploy commercially.

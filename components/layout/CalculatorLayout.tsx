"use client";

import Link from "next/link";
import Disclaimer from "@/components/ui/Disclaimer";
import Sidebar from "./Sidebar";
import type { Calculator } from "@/lib/calculators";
import { getCategoryMeta, getByCategory } from "@/lib/calculators";

interface Props {
  calc:     Calculator;
  children: React.ReactNode;
}


// Map calc category → disclaimer type
const DISCLAIMER_TYPE: Record<string, "financial"|"health"|"tax"|"general"> = {
  financial: "financial",
  fitness:   "health",
  math:      "general",
  other:     "general",
};

export default function CalculatorLayout({ calc, children }: Props) {
  const category = getCategoryMeta(calc.category);

  const catColors: Record<string, string> = {
    financial: "#1B3A6B",
    fitness:   "#047857",
    math:      "#6D28D9",
    other:     "#EA6A0A",
  };
  const catBgs: Record<string, string> = {
    financial: "#EFF6FF",
    fitness:   "#ECFDF5",
    math:      "#F5F3FF",
    other:     "#FFF7ED",
  };

  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "20px 16px" }}>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
        <ol style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#64748B", listStyle: "none", padding: 0, margin: 0 }}>
          <li><Link href="/" style={{ color: "#64748B", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#1B3A6B"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#64748B"}>Home</Link></li>
          <li style={{ color: "#CBD5E1" }}>/</li>
          <li><Link href={`/${calc.category}`} style={{ color: "#64748B", textDecoration: "none" }}>{category.name}</Link></li>
          <li style={{ color: "#CBD5E1" }}>/</li>
          <li style={{ color: "#1E293B", fontWeight: 600 }}>{calc.shortName}</li>
        </ol>
      </nav>

      {/* Top ad */}
      <div className="ad-slot" style={{ height: 90, marginBottom: 20 }}>Advertisement</div>

      {/* Main layout */}
      <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>

        {/* Content */}
        <main id="main-content" role="main" style={{ flex: 1, minWidth: 0 }}>

          {/* Calc header card */}
          <div style={{
            backgroundColor: "#fff", borderRadius: 16,
            border: "1px solid #E2E8F0",
            boxShadow: "0 1px 4px rgb(0 0 0 / 0.06)",
            padding: 24, marginBottom: 16,
          }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                backgroundColor: catBgs[calc.category] ?? "#F8FAFC",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 26,
              }}>
                {calc.icon}
              </div>
              <div>
                <h1 id="calc-title" style={{ fontSize: 24, fontWeight: 800, color: "#1E293B", margin: 0, lineHeight: 1.2 }}>
                  {calc.name}
                </h1>
                <p style={{ fontSize: 14, color: "#64748B", margin: "6px 0 0", lineHeight: 1.6 }}>
                  {calc.description}
                </p>
              </div>
            </div>
          </div>

          {children}

          {/* Disclaimer */}
          <Disclaimer type={DISCLAIMER_TYPE[calc.category] ?? "general"} />

          {/* Mid ad */}
          <div className="ad-slot" style={{ height: 90, marginTop: 20 }}>Advertisement</div>

          {/* Related */}
          <RelatedCalcs calc={calc} catColor={catColors[calc.category]} />
        </main>

        {/* Sidebar — desktop only */}
        <div style={{ width: 272, flexShrink: 0 }} className="hidden lg:block">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

function RelatedCalcs({ calc, catColor }: { calc: Calculator; catColor: string }) {
  const related = getByCategory(calc.category).filter(c => c.id !== calc.id).slice(0, 6);
  if (!related.length) return null;

  return (
    <div style={{
      marginTop: 16, backgroundColor: "#fff", borderRadius: 16,
      border: "1px solid #E2E8F0", boxShadow: "0 1px 4px rgb(0 0 0 / 0.06)", padding: 20,
    }}>
      <h2 style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#94A3B8", marginBottom: 12 }}>
        Related Calculators
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 8 }}>
        {related.map(c => (
          <Link key={c.id} href={`/${c.slug}`} style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "10px 12px", borderRadius: 12, textDecoration: "none",
            border: "1px solid #E2E8F0", transition: "all 0.15s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#F8FAFC"; (e.currentTarget as HTMLElement).style.borderColor = catColor; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0"; }}
          >
            <span style={{ fontSize: 18 }}>{c.icon}</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#1E293B", lineHeight: 1.3 }}>{c.shortName}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { CALCULATORS } from "@/lib/calculators";
import { SITE } from "@/lib/metadata";

export const metadata: Metadata = {
  title:       "Financial Calculators",
  description: "Free financial calculators for mortgage, loans, taxes, investments, and retirement.",
  alternates:  { canonical: `${SITE.URL}/financial` },
  openGraph:   { title: "Financial Calculators", description: "Free financial calculators for mortgage, loans, taxes, investments, and retirement.", url: `${SITE.URL}/financial` },
};

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Financial Calculators",
  "description": "Free financial calculators for mortgage, loans, taxes, investments, and retirement.",
  "url": "https://www.uscalculator.net/financial",
  "isPartOf": { "@type": "WebSite", "url": "https://www.uscalculator.net" },
});

export default function FinancialPage() {
  const calcs = CALCULATORS.filter(c => c.category === "financial");
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: 20 }}>
          <ol style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#4B5563", listStyle: "none", padding: 0 }}>
            <li><Link href="/" style={{ color: "#4B5563", textDecoration: "none" }}>Home</Link></li>
            <li style={{ color: "#CBD5E1" }}>/</li>
            <li style={{ color: "#1E293B", fontWeight: 600 }}>Financial Calculators</li>
          </ol>
        </nav>

        {/* Header */}
        <div style={{ background: "#EFF6FF", borderRadius: 16, padding: "24px 28px", marginBottom: 24, border: "1.5px solid #1B3A6B33" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: 48 }}>💰</span>
            <div>
              <h1 style={{ fontSize: 28, fontWeight: 900, color: "#1B3A6B", margin: 0 }}>Financial Calculators</h1>
              <p style={{ fontSize: 14, color: "#4B5563", marginTop: 6 }}>Free financial calculators for mortgage, loans, taxes, investments, and retirement.</p>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#1B3A6B", marginTop: 4 }}>{calcs.length} calculators — all free, no sign-up</p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
          {calcs.map(c => (
            <Link key={c.id} href={`/${c.slug}`} style={{
              display: "flex", alignItems: "flex-start", gap: 14,
              background: "#fff", borderRadius: 14,
              border: "1.5px solid #E2E8F0",
              padding: "18px 16px", textDecoration: "none",
              boxShadow: "0 1px 4px rgba(0,0,0,.04)",
              transition: "all .15s",
            }}>
              <div style={{ width: 46, height: 46, borderRadius: 12, flexShrink: 0, background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{c.icon}</div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#1E293B", marginBottom: 4 }}>{c.name}</div>
                <div style={{ fontSize: 12, color: "#4B5563", lineHeight: 1.5 }}>{c.description}</div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: 28, textAlign: "center" }}>
          <Link href="/" style={{ color: "#1B3A6B", textDecoration: "none", fontSize: 14, fontWeight: 700 }}>
            ← Back to All Calculators
          </Link>
        </div>
      </div>
    </>
  );
}
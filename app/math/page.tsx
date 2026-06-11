import type { Metadata } from "next";
import Link from "next/link";
import { CALCULATORS } from "@/lib/calculators";
import { SITE } from "@/lib/metadata";

export const metadata: Metadata = {
  title:       "Math Calculators",
  description: "Free math calculators for percentages, fractions, statistics, and geometry.",
  alternates:  { canonical: `${SITE.URL}/math` },
  openGraph:   { title: "Math Calculators", description: "Free math calculators for percentages, fractions, statistics, and geometry.", url: `${SITE.URL}/math` },
};

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Math Calculators",
  "description": "Free math calculators for percentages, fractions, statistics, and geometry.",
  "url": "https://www.uscalculator.net/math",
  "isPartOf": { "@type": "WebSite", "url": "https://www.uscalculator.net" },
});

export default function MathPage() {
  const calcs = CALCULATORS.filter(c => c.category === "math");
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: 20 }}>
          <ol style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#4B5563", listStyle: "none", padding: 0 }}>
            <li><Link href="/" style={{ color: "#4B5563", textDecoration: "none" }}>Home</Link></li>
            <li style={{ color: "#CBD5E1" }}>/</li>
            <li style={{ color: "#1E293B", fontWeight: 600 }}>Math Calculators</li>
          </ol>
        </nav>

        {/* Header */}
        <div style={{ background: "#F5F3FF", borderRadius: 16, padding: "24px 28px", marginBottom: 24, border: "1.5px solid #6D28D933" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: 48 }}>📐</span>
            <div>
              <h1 style={{ fontSize: 28, fontWeight: 900, color: "#6D28D9", margin: 0 }}>Math Calculators</h1>
              <p style={{ fontSize: 14, color: "#4B5563", marginTop: 6 }}>Free math calculators for percentages, fractions, statistics, and geometry.</p>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#6D28D9", marginTop: 4 }}>{calcs.length} calculators — all free, no sign-up</p>
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
              <div style={{ width: 46, height: 46, borderRadius: 12, flexShrink: 0, background: "#F5F3FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{c.icon}</div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#1E293B", marginBottom: 4 }}>{c.name}</div>
                <div style={{ fontSize: 12, color: "#4B5563", lineHeight: 1.5 }}>{c.description}</div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: 28, textAlign: "center" }}>
          <Link href="/" style={{ color: "#6D28D9", textDecoration: "none", fontSize: 14, fontWeight: 700 }}>
            ← Back to All Calculators
          </Link>
        </div>
      </div>
    </>
  );
}
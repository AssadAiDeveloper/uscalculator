import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:       "Math Calculators — Free Online Tools",
  description: "Free math calculators for percentages, fractions, statistics, geometry, and more. Fast, accurate, no sign-up.",
  alternates:  { canonical: "https://www.uscalculator.net/math" },
  openGraph:   { title: "Math Calculators", description: "Free percentage, fraction, and statistics calculators.", url: "https://www.uscalculator.net/math" },
};

const CALCULATORS = [
  { name: "Percentage Calculator",          slug: "percentage-calculator",          icon: "📊", desc: "Calculate percentages, percentage change, and what percent one number is of another." },
  { name: "Fraction Calculator",            slug: "fraction-calculator",            icon: "½",  desc: "Add, subtract, multiply, and divide fractions with step-by-step results."             },
  { name: "Random Number Generator",        slug: "random-number-generator",        icon: "🎲", desc: "Generate random numbers within any range, with or without duplicates."                },
  { name: "Triangle Calculator",            slug: "triangle-calculator",            icon: "📐", desc: "Solve any triangle — find missing sides and angles using law of sines and cosines."   },
  { name: "Standard Deviation Calculator",  slug: "standard-deviation-calculator",  icon: "📉", desc: "Calculate mean, variance, and standard deviation for any data set."                   },
];

export default function MathPage() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
      <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: "#64748B" }}>
        <Link href="/" style={{ color: "#64748B", textDecoration: "none" }}>Home</Link>
        <span style={{ margin: "0 8px" }}>/</span>
        <span style={{ color: "#1E293B", fontWeight: 600 }}>Math Calculators</span>
      </nav>

      <h1 style={{ fontSize: 32, fontWeight: 900, color: "#6D28D9", marginBottom: 8 }}>
        📐 Math Calculators
      </h1>
      <p style={{ fontSize: 15, color: "#64748B", marginBottom: 32, maxWidth: 640 }}>
        Free math calculators for percentages, fractions, statistics, and geometry.
        All tools are free, accurate, and require no sign-up.
      </p>

      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 14 }}>
        {CALCULATORS.map(c => (
          <li key={c.slug}>
            <Link href={`/${c.slug}`} style={{
              display: "flex", alignItems: "flex-start", gap: 14,
              padding: "18px 16px", background: "#fff",
              border: "1.5px solid #E2E8F0", borderRadius: 14,
              textDecoration: "none", boxShadow: "0 1px 4px rgba(0,0,0,.04)",
            }}>
              <span style={{ fontSize: 28, flexShrink: 0 }}>{c.icon}</span>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#6D28D9", marginBottom: 4 }}>{c.name}</div>
                <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.5 }}>{c.desc}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 32, textAlign: "center" }}>
        <Link href="/" style={{ color: "#6D28D9", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
          ← View All Calculators
        </Link>
      </div>
    </main>
  );
}

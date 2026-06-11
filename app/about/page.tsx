import type { Metadata } from "next";
import { SITE } from "@/lib/metadata";
import { CALCULATORS, CATEGORIES } from "@/lib/calculators";

export const metadata: Metadata = {
  title:       "About Us",
  description: "Learn about USCalculator.net — free, accurate, and fast online calculators for finance, fitness, math, and more.",
  alternates:  { canonical: `${SITE.URL}/about` },
  openGraph:   { title: "About USCalculator.net", description: "Free, accurate calculators for finance, fitness, math, and more.", url: `${SITE.URL}/about` },
};

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About USCalculator.net",
  "description": "Learn about USCalculator.net — free, accurate online calculators.",
  "url": "https://www.uscalculator.net/about",
  "isPartOf": { "@type": "WebSite", "url": "https://www.uscalculator.net", "name": "USCalculator.net" }
});

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold text-ink mb-2">About USCalculator.net</h1>
        <p className="text-ink-muted mb-8">Built for people who need fast, correct answers.</p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {[
            { icon: "🎯", title: "Our Mission",     desc: "Provide fast, free, and accurate online calculators for everyday decisions — financial, health, math, and more." },
            { icon: "🔒", title: "Privacy First",   desc: "We collect no personal data and require no registration. Your calculations stay on your device." },
            { icon: "✅", title: "Accuracy",        desc: "Every calculator is individually built, tested, and validated against multiple sources before publishing." },
            { icon: "⚡", title: "Performance",     desc: "Static pages, no bloat, no unnecessary scripts. Every page loads in under a second." },
          ].map(c => (
            <div key={c.title} style={{ background:"#fff", borderRadius:16, border:"1.5px solid #E2E8F0", padding:24, boxShadow:"0 1px 4px rgba(0,0,0,.05)" }}>
              <div style={{ fontSize:32, marginBottom:12 }}>{c.icon}</div>
              <h2 style={{ fontSize:16, fontWeight:700, color:"#1E293B", marginBottom:6 }}>{c.title}</h2>
              <p style={{ fontSize:14, color:"#64748B", lineHeight:1.7 }}>{c.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ background:"#fff", borderRadius:16, border:"1.5px solid #E2E8F0", padding:24, boxShadow:"0 1px 4px rgba(0,0,0,.05)", marginBottom:20 }}>
          <h2 style={{ fontSize:18, fontWeight:800, color:"#1E293B", marginBottom:16 }}>What We Offer</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:14 }}>
            {CATEGORIES.map(cat => (
              <div key={cat.id} style={{ padding:"14px 16px", borderRadius:12, background:"#F8FAFC", border:"1.5px solid #E2E8F0" }}>
                <div style={{ fontSize:26, marginBottom:6 }}>{cat.icon}</div>
                <div style={{ fontWeight:700, fontSize:14, color:"#1B3A6B" }}>{cat.name}</div>
                <div style={{ fontSize:12, color:"#64748B", marginTop:3 }}>{CALCULATORS.filter(c => c.category === cat.id).length} calculators</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background:"linear-gradient(135deg,#1B3A6B,#2553A0)", borderRadius:16, padding:28, color:"#fff", textAlign:"center" }}>
          <div style={{ fontSize:40, fontWeight:900, color:"#F97316" }}>{CALCULATORS.length}+</div>
          <div style={{ fontSize:14, color:"rgba(255,255,255,.7)", marginTop:4 }}>Free calculators — no sign-up, no paywalls, no clutter.</div>
        </div>
      </div>
    </>
  );
}

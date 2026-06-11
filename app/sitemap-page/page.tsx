import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/metadata";
import { CALCULATORS, CATEGORIES, getByCategory } from "@/lib/calculators";

export const metadata: Metadata = {
  title:       "All Calculators — Sitemap",
  description: `Browse all ${CALCULATORS.length}+ free online calculators on USCalculator.net — finance, fitness, math, and more.`,
  alternates:  { canonical: `${SITE.URL}/sitemap-page` },
  openGraph:   { title: "All Calculators", description: "Browse all 46+ free calculators.", url: `${SITE.URL}/sitemap-page` },
};

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "All Calculators — USCalculator.net",
  "description": "Browse all 46+ free online calculators.",
  "url": "https://www.uscalculator.net/sitemap-page",
  "isPartOf": { "@type": "WebSite", "url": "https://www.uscalculator.net" }
});

const catAccent: Record<string,string> = {
  financial:"#1B3A6B", fitness:"#047857", math:"#6D28D9", other:"#EA6A0A"
};
const catBg: Record<string,string> = {
  financial:"#EFF6FF", fitness:"#ECFDF5", math:"#F5F3FF", other:"#FFF7ED"
};

export default function SitemapPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"32px 20px" }}>
        <h1 style={{ fontSize:28, fontWeight:900, color:"#1E293B", marginBottom:6 }}>All Calculators</h1>
        <p style={{ fontSize:14, color:"#64748B", marginBottom:28 }}>{CALCULATORS.length}+ free calculators — click any to get started instantly.</p>

        <div style={{ display:"flex", flexDirection:"column", gap:28 }}>
          {CATEGORIES.map(cat => {
            const calcs = getByCategory(cat.id);
            return (
              <section key={cat.id} id={cat.id} style={{ scrollMarginTop:80 }} aria-labelledby={`cat-${cat.id}`}>
                {/* Header */}
                <div style={{ background:catBg[cat.id], borderRadius:"14px 14px 0 0", padding:"14px 20px", border:"1.5px solid #E2E8F0", borderBottom:"none", display:"flex", alignItems:"center", gap:12 }}>
                  <span style={{ fontSize:26 }}>{cat.icon}</span>
                  <div>
                    <h2 id={`cat-${cat.id}`} style={{ fontSize:16, fontWeight:800, color:catAccent[cat.id], margin:0 }}>{cat.name} Calculators</h2>
                    <p style={{ fontSize:12, color:"#64748B", margin:0 }}>{calcs.length} calculators — all free</p>
                  </div>
                </div>
                {/* Grid */}
                <div style={{ background:"#fff", borderRadius:"0 0 14px 14px", border:"1.5px solid #E2E8F0", display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))" }}>
                  {calcs.map((c, i) => (
                    <Link key={c.id} href={`/${c.slug}`} style={{
                      display:"flex", alignItems:"center", gap:10,
                      padding:"12px 18px", textDecoration:"none",
                      borderBottom: i < calcs.length-1 ? "1px solid #F1F5F9" : "none",
                      transition:"background .12s",
                    }}

                    >
                      <span style={{ fontSize:18, width:24, textAlign:"center", flexShrink:0 }}>{c.icon}</span>
                      <div style={{ minWidth:0 }}>
                        <div style={{ fontSize:13, fontWeight:600, color:"#1E293B", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{c.name}</div>
                        <div style={{ fontSize:11, color:"#94A3B8", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{c.description.split(".")[0]}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Static pages */}
        <div style={{ marginTop:28, background:"#fff", borderRadius:14, border:"1.5px solid #E2E8F0", padding:20 }}>
          <h2 style={{ fontSize:13, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.06em", color:"#94A3B8", marginBottom:14 }}>Other Pages</h2>
          <div style={{ display:"flex", flexWrap:"wrap", gap:10 }}>
            {[
              { label:"About Us",       href:"/about",          icon:"ℹ️" },
              { label:"Contact",        href:"/contact",        icon:"📬" },
              { label:"Privacy Policy", href:"/privacy-policy", icon:"🔒" },
              { label:"Terms of Use",   href:"/terms-of-use",   icon:"📋" },
            ].map(p => (
              <Link key={p.href} href={p.href} style={{
                display:"flex", alignItems:"center", gap:8,
                padding:"9px 16px", borderRadius:10, textDecoration:"none",
                border:"1.5px solid #E2E8F0", fontSize:13, fontWeight:600,
                color:"#1E293B", background:"#F8FAFC", transition:"all .15s",
              }}>
                <span>{p.icon}</span> {p.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

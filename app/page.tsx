"use client";

import Link from "next/link";
import { CALCULATORS, CATEGORIES, FEATURED, getByCategory } from "@/lib/calculators";
import { SITE } from "@/lib/metadata";
import Sidebar from "@/components/layout/Sidebar";

const STATS = [
  { value: "46+",   label: "Free Calculators" },
  { value: "100%",  label: "Free Forever"     },
  { value: "4",     label: "Categories"       },
  { value: "0",     label: "Sign-ups Needed"  },
];

const catAccent: Record<string, string> = {
  financial: "#1B3A6B",
  fitness:   "#047857",
  math:      "#6D28D9",
  other:     "#EA6A0A",
};
const catBg: Record<string, string> = {
  financial: "#EFF6FF",
  fitness:   "#ECFDF5",
  math:      "#F5F3FF",
  other:     "#FFF7ED",
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(135deg,#1B3A6B 0%,#2553A0 60%,#3B72D4 100%)", color: "#fff" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "64px 24px 0", textAlign: "center" }}>

          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)",
            borderRadius: 99, padding: "6px 16px", fontSize: 12, fontWeight: 700,
            letterSpacing: "0.04em", marginBottom: 24,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#F97316", display: "inline-block" }} />
            Free · No Registration · Always Accurate
          </div>

          {/* H1 */}
          <h1 style={{ fontSize: "clamp(36px,5.5vw,62px)", fontWeight: 900, lineHeight: 1.1, margin: "0 0 18px" }}>
            Free Online<br />
            <span style={{ color: "#F97316" }}>Calculators</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.7,
            maxWidth: 560, margin: "0 auto 36px",
          }}>
            Fast, accurate calculators for finance, fitness, math, and everyday decisions.
            No sign-up. No ads. Just answers.
          </p>

          {/* Search bar — centered */}
          <form action="/search" method="GET" role="search"
            style={{ display: "flex", gap: 0, maxWidth: 560, margin: "0 auto 28px", boxShadow: "0 8px 28px rgba(0,0,0,0.2)", borderRadius: 14, overflow: "hidden" }}>
            <input
              type="search" name="q"
              placeholder="Search — try &quot;mortgage&quot; or &quot;BMI&quot;..."
              aria-label="Search calculators"
              style={{
                flex: 1, background: "#fff", color: "#1E293B",
                border: "none", padding: "16px 22px",
                fontSize: 15, outline: "none",
              }}
            />
            <button type="submit" style={{
              background: "#F97316", color: "#fff", border: "none",
              padding: "16px 28px", fontSize: 15,
              fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap",
              transition: "background .15s",
            }}
              onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background="#EA6A0A"}
              onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background="#F97316"}>
              Search
            </button>
          </form>

          {/* Quick links — centered */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", paddingBottom: 40 }}>
            {FEATURED.slice(0, 6).map(c => (
              <Link key={c.id} href={`/${c.slug}`} style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.22)",
                color: "rgba(255,255,255,0.9)", textDecoration: "none",
                fontSize: 13, fontWeight: 600, padding: "7px 16px",
                borderRadius: 99, transition: "background .15s",
              }}
                onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.22)"}
                onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.12)"}>
                {c.icon} {c.shortName}
              </Link>
            ))}
          </div>
        </div>

        {/* Stats strip — centered */}
        <div style={{ background: "rgba(0,0,0,0.2)", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <div style={{
            maxWidth: 860, margin: "0 auto", padding: "16px 24px",
            display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8,
          }}>
            {STATS.map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 24, fontWeight: 900, color: "#F97316", fontVariantNumeric: "tabular-nums" }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN ─────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "28px 24px" }}>

        {/* Top ad */}
        <div className="ad-slot" style={{ height: 90, marginBottom: 28 }}>Advertisement</div>

        <div style={{ display: "flex", gap: 28, alignItems: "flex-start" }}>

          {/* Content */}
          <main id="main-content" role="main" style={{ flex: 1, minWidth: 0 }}>

            {/* Featured grid */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: "#1E293B", marginBottom: 4 }}>
                Most Popular Calculators
              </h2>
              <p style={{ fontSize: 13, color: "#64748B", marginBottom: 16 }}>
                Used by millions — pick yours and get your answer in seconds.
              </p>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: 14,
              }}>
                {FEATURED.map(c => (
                  <Link key={c.id} href={`/${c.slug}`} style={{
                    display: "block", textDecoration: "none",
                    background: "#fff", borderRadius: 16,
                    border: "1.5px solid #E2E8F0",
                    padding: "18px 16px",
                    boxShadow: "0 1px 4px rgb(0 0 0 / 0.05)",
                    transition: "box-shadow 0.15s, border-color 0.15s, transform 0.15s",
                  }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.boxShadow = "0 6px 20px rgb(0 0 0 / 0.10)";
                      el.style.borderColor = "#F97316";
                      el.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.boxShadow = "0 1px 4px rgb(0 0 0 / 0.05)";
                      el.style.borderColor = "#E2E8F0";
                      el.style.transform = "none";
                    }}
                  >
                    <div style={{
                      width: 44, height: 44, borderRadius: 12,
                      background: catBg[c.category] ?? "#F8FAFC",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 22, marginBottom: 12,
                    }}>
                      {c.icon}
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#1E293B", marginBottom: 4, lineHeight: 1.3 }}>
                      {c.shortName}
                    </div>
                    <div style={{ fontSize: 12, color: "#64748B", lineHeight: 1.5 }}>
                      {c.description.split(".")[0]}.
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Category sections */}
            {CATEGORIES.map(cat => {
              const calcs = getByCategory(cat.id);
              const accent = catAccent[cat.id];
              const bg     = catBg[cat.id];
              return (
                <section key={cat.id} id={cat.id}
                  style={{ marginBottom: 40, scrollMarginTop: 80 }}
                  aria-labelledby={`cat-heading-${cat.id}`}
                >
                  {/* Section header */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                    <div>
                      <h2 id={`cat-heading-${cat.id}`}
                        style={{ fontSize: 18, fontWeight: 800, color: "#1E293B", margin: 0 }}>
                        {cat.icon} {cat.name} Calculators
                      </h2>
                      <p style={{ fontSize: 13, color: "#64748B", margin: "4px 0 0" }}>{cat.description}</p>
                    </div>
                    <Link href={`/${cat.id}`}
                      style={{ fontSize: 13, fontWeight: 700, color: accent, textDecoration: "none", whiteSpace: "nowrap", marginLeft: 16 }}>
                      See all →
                    </Link>
                  </div>

                  {/* Cards grid */}
                  <div style={{
                    background: "#fff", borderRadius: 16,
                    border: "1.5px solid #E2E8F0",
                    boxShadow: "0 1px 4px rgb(0 0 0 / 0.05)",
                    overflow: "hidden",
                  }}>
                    {/* Top strip */}
                    <div style={{ background: bg, padding: "12px 20px", borderBottom: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontSize: 24 }}>{cat.icon}</span>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 14, color: accent }}>{cat.name} Calculators</div>
                        <div style={{ fontSize: 12, color: "#64748B" }}>{calcs.length} tools available — all free</div>
                      </div>
                    </div>

                    {/* Two-column list */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                      {calcs.map((c, i) => (
                        <Link key={c.id} href={`/${c.slug}`}
                          style={{
                            display: "flex", alignItems: "center", gap: 12,
                            padding: "13px 20px", textDecoration: "none",
                            borderBottom: i < calcs.length - 2 ? "1px solid #F1F5F9" : "none",
                            borderRight: i % 2 === 0 ? "1px solid #F1F5F9" : "none",
                            transition: "background 0.12s",
                          }}
                          onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#F8FAFC"}
                          onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}
                        >
                          <span style={{ fontSize: 20, width: 28, textAlign: "center", flexShrink: 0 }}>{c.icon}</span>
                          <div style={{ minWidth: 0 }}>
                            <div style={{ fontSize: 13, fontWeight: 600, color: "#1E293B", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                              {c.name}
                            </div>
                            <div style={{ fontSize: 11, color: "#6B7280", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginTop: 1 }}>
                              {c.description.split(".")[0]}
                            </div>
                          </div>
                          <svg style={{ marginLeft: "auto", flexShrink: 0, color: "#CBD5E1", width: 14, height: 14 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
              );
            })}

            {/* About */}
            <section aria-labelledby="about-heading"
              style={{ background: "#fff", borderRadius: 16, border: "1.5px solid #E2E8F0", padding: "24px", boxShadow: "0 1px 4px rgb(0 0 0 / 0.05)" }}>
              <h2 id="about-heading" style={{ fontSize: 18, fontWeight: 800, color: "#1E293B", marginBottom: 12 }}>
                About USCalculator.net
              </h2>
              <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.75, marginBottom: 10 }}>
                USCalculator.net provides fast, free, and accurate online calculators across finance,
                fitness, math, and everyday life. Every calculator is built and tested individually.
              </p>
              <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.75 }}>
                Our goal is simple: give you a correct answer in under 10 seconds, on any device,
                with no registration, no paywalls, and no clutter.
              </p>
            </section>

          </main>

          {/* Sidebar — desktop only */}
          <div style={{ width: 272, flexShrink: 0 }} className="hidden lg:block">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

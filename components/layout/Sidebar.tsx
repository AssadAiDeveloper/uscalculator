"use client";

import Link from "next/link";
import { CALCULATORS } from "@/lib/calculators";

const POPULAR = CALCULATORS.filter(c => c.featured).slice(0, 8);

export default function Sidebar() {
  function calcQuickMortgage() {
    const price  = parseFloat((document.getElementById("qm-price") as HTMLInputElement)?.value || "0");
    const down   = parseFloat((document.getElementById("qm-down")  as HTMLInputElement)?.value || "0");
    const rate   = parseFloat((document.getElementById("qm-rate")  as HTMLInputElement)?.value || "6.5") / 100 / 12;
    const term   = parseInt((document.getElementById("qm-term")    as HTMLSelectElement)?.value || "30") * 12;
    const P      = price - down;
    const pmt    = rate === 0 ? P / term : P * rate * Math.pow(1 + rate, term) / (Math.pow(1 + rate, term) - 1);
    const el     = document.getElementById("qm-result");
    if (el) { el.textContent = `$${pmt.toFixed(2)} / month`; el.style.display = "block"; }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", border: "1.5px solid #E2E8F0", borderRadius: 10,
    padding: "9px 12px", fontSize: 13, color: "#1E293B",
    backgroundColor: "#fff", outline: "none",
  };

  return (
    <aside style={{ width: "100%", display: "flex", flexDirection: "column", gap: 16 }} aria-label="Sidebar">

      {/* Ad slot */}
      <div className="ad-slot" style={{ height: 250 }}>Advertisement</div>

      {/* Popular calculators */}
      <div style={{ backgroundColor: "#fff", borderRadius: 16, border: "1px solid #E2E8F0", boxShadow: "0 1px 4px rgb(0 0 0 / 0.06)", overflow: "hidden" }}>
        <div style={{ backgroundColor: "#1B3A6B", padding: "10px 16px" }}>
          <h2 style={{ color: "#fff", fontSize: 13, fontWeight: 700, margin: 0 }}>⭐ Popular Calculators</h2>
        </div>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {POPULAR.map((calc, i) => (
            <li key={calc.id} style={{ borderBottom: i < POPULAR.length - 1 ? "1px solid #F1F5F9" : "none" }}>
              <Link href={`/${calc.slug}`} style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "10px 16px", textDecoration: "none",
                transition: "background 0.15s",
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#F8FAFC"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"}
              >
                <span style={{ fontSize: 18, width: 24, textAlign: "center", flexShrink: 0 }}>{calc.icon}</span>
                <span style={{ fontSize: 13, fontWeight: 500, color: "#1E293B" }}>{calc.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div style={{ padding: "10px 16px", borderTop: "1px solid #F1F5F9", backgroundColor: "#F8FAFC" }}>
          <Link href="/sitemap-page" style={{ color: "#1B3A6B", fontSize: 12, fontWeight: 700, textDecoration: "none" }}>
            View all 40+ calculators →
          </Link>
        </div>
      </div>

      {/* Quick Mortgage */}
      <div style={{ backgroundColor: "#fff", borderRadius: 16, border: "1px solid #E2E8F0", boxShadow: "0 1px 4px rgb(0 0 0 / 0.06)", overflow: "hidden" }}>
        <div style={{ backgroundColor: "#2553A0", padding: "10px 16px" }}>
          <h2 style={{ color: "#fff", fontSize: 13, fontWeight: 700, margin: 0 }}>🏠 Quick Mortgage</h2>
        </div>
        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { label: "Home Price ($)", id: "qm-price", defaultValue: "350000" },
            { label: "Down Payment ($)", id: "qm-down", defaultValue: "70000" },
          ].map(f => (
            <div key={f.id}>
              <label htmlFor={f.id} style={{ display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#64748B", marginBottom: 5 }}>{f.label}</label>
              <input type="number" id={f.id} defaultValue={f.defaultValue} aria-label={f.label} style={inputStyle}
                onFocus={e => { e.target.style.borderColor = "#F97316"; e.target.style.boxShadow = "0 0 0 3px rgb(249 115 22 / 0.15)"; }}
                onBlur={e => { e.target.style.borderColor = "#E2E8F0"; e.target.style.boxShadow = "none"; }}
              />
            </div>
          ))}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            <div>
              <label htmlFor="qm-rate" style={{ display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#64748B", marginBottom: 5 }}>Rate (%)</label>
              <input type="number" id="qm-rate" aria-label="Interest Rate (%)" defaultValue="6.5" step="0.1" style={inputStyle}
                onFocus={e => { e.target.style.borderColor = "#F97316"; e.target.style.boxShadow = "0 0 0 3px rgb(249 115 22 / 0.15)"; }}
                onBlur={e => { e.target.style.borderColor = "#E2E8F0"; e.target.style.boxShadow = "none"; }}
              />
            </div>
            <div>
              <label htmlFor="qm-term" style={{ display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#64748B", marginBottom: 5 }}>Term</label>
              <select id="qm-term" aria-label="Loan Term" style={{ ...inputStyle, cursor: "pointer" }}>
                <option value="30">30 yr</option>
                <option value="20">20 yr</option>
                <option value="15">15 yr</option>
              </select>
            </div>
          </div>
          <button type="button" onClick={calcQuickMortgage} style={{
            width: "100%", backgroundColor: "#F97316", color: "#fff",
            fontWeight: 700, fontSize: 14, padding: "12px", borderRadius: 12,
            border: "none", cursor: "pointer", transition: "background 0.15s",
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#EA6A0A"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#F97316"}
          >
            Calculate
          </button>
          <div id="qm-result" style={{
            display: "none", textAlign: "center", fontSize: 20, fontWeight: 800,
            color: "#1B3A6B", backgroundColor: "#EFF6FF", borderRadius: 10, padding: "10px",
            fontVariantNumeric: "tabular-nums",
          }} aria-live="polite" />
        </div>
      </div>

      {/* Second ad */}
      <div className="ad-slot" style={{ height: 250 }}>Advertisement</div>

    </aside>
  );
}

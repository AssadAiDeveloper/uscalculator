"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CALCULATORS } from "@/lib/calculators";

const catAccent: Record<string,string> = {
  financial:"#1B3A6B", fitness:"#047857", math:"#6D28D9", other:"#EA6A0A",
};
const catBg: Record<string,string> = {
  financial:"#EFF6FF", fitness:"#ECFDF5", math:"#F5F3FF", other:"#FFF7ED",
};
const catLabel: Record<string,string> = {
  financial:"Financial", fitness:"Fitness & Health", math:"Math", other:"Other",
};

function doSearch(q: string) {
  if (!q.trim()) return CALCULATORS;
  const terms = q.toLowerCase().split(/\s+/);
  return CALCULATORS.filter(c => {
    const hay = [c.name, c.shortName, c.description, c.category, ...c.keywords].join(" ").toLowerCase();
    return terms.every(t => hay.includes(t));
  });
}

export default function SearchResults() {
  const [query, setQuery]   = useState("");
  const [results, setResults] = useState(CALCULATORS);

  // Read query from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q") || "";
    setQuery(q);
    setResults(doSearch(q));
  }, []);

  function handleChange(q: string) {
    setQuery(q);
    setResults(doSearch(q));
    // Update URL without reload
    const url = new URL(window.location.href);
    if (q) url.searchParams.set("q", q);
    else url.searchParams.delete("q");
    window.history.replaceState({}, "", url.toString());
  }

  return (
    <div style={{ maxWidth:860, margin:"0 auto", padding:"32px 20px" }}>

      {/* Search bar */}
      <div style={{ marginBottom:28 }}>
        <h1 style={{ fontSize:26, fontWeight:900, color:"#1E293B", marginBottom:14 }}>
          Search Calculators
        </h1>
        <div style={{ position:"relative" }}>
          <input
            type="search"
            value={query}
            onChange={e => handleChange(e.target.value)}
            placeholder='Try "mortgage", "BMI", "percentage"...'
            autoFocus
            style={{
              width:"100%", border:"2px solid #E2E8F0", borderRadius:14,
              padding:"14px 48px 14px 20px", fontSize:16, color:"#1E293B",
              background:"#fff", outline:"none",
              boxShadow:"0 2px 12px rgba(0,0,0,.07)",
              transition:"border-color .15s, box-shadow .15s",
            }}
            onFocus={e => { e.target.style.borderColor="#F97316"; e.target.style.boxShadow="0 0 0 3px rgba(249,115,22,.15)"; }}
            onBlur={e  => { e.target.style.borderColor="#E2E8F0"; e.target.style.boxShadow="0 2px 12px rgba(0,0,0,.07)"; }}
          />
          <span style={{
            position:"absolute", right:18, top:"50%", transform:"translateY(-50%)",
            fontSize:20, color:"#94A3B8", pointerEvents:"none",
          }}>⌕</span>
        </div>
        <p style={{ fontSize:13, color:"#64748B", marginTop:10 }}>
          {query
            ? `${results.length} result${results.length !== 1 ? "s" : ""} for "${query}"`
            : `All ${CALCULATORS.length} calculators`}
        </p>
      </div>

      {/* No results */}
      {query && results.length === 0 && (
        <div style={{
          background:"#fff", borderRadius:16, border:"1.5px solid #E2E8F0",
          padding:"40px 24px", textAlign:"center",
          boxShadow:"0 1px 4px rgba(0,0,0,.05)",
        }}>
          <div style={{ fontSize:48, marginBottom:12 }}>🔍</div>
          <h2 style={{ fontSize:18, fontWeight:700, color:"#1E293B", marginBottom:8 }}>
            No calculators found for &ldquo;{query}&rdquo;
          </h2>
          <p style={{ fontSize:14, color:"#64748B", marginBottom:20 }}>
            Try different keywords like &ldquo;loan&rdquo;, &ldquo;BMI&rdquo;, or &ldquo;tax&rdquo;.
          </p>
          <button
            type="button"
            onClick={() => handleChange("")}
            style={{
              background:"#F97316", color:"#fff", border:"none",
              borderRadius:10, padding:"10px 22px", fontSize:14,
              fontWeight:700, cursor:"pointer",
            }}
          >
            Show all calculators
          </button>
        </div>
      )}

      {/* Results list */}
      {results.length > 0 && (
        <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
          {results.map(c => (
            <Link
              key={c.id}
              href={`/${c.slug}`}
              style={{
                display:"flex", alignItems:"center", gap:16,
                background:"#fff", borderRadius:14,
                border:"1.5px solid #E2E8F0",
                padding:"16px 20px", textDecoration:"none",
                boxShadow:"0 1px 4px rgba(0,0,0,.04)",
                transition:"all .15s",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = catAccent[c.category];
                el.style.boxShadow = "0 4px 14px rgba(0,0,0,.08)";
                el.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#E2E8F0";
                el.style.boxShadow = "0 1px 4px rgba(0,0,0,.04)";
                el.style.transform = "none";
              }}
            >
              {/* Icon */}
              <div style={{
                width:48, height:48, borderRadius:12, flexShrink:0,
                background: catBg[c.category],
                display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:24,
              }}>
                {c.icon}
              </div>

              {/* Text */}
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ fontSize:15, fontWeight:700, color:"#1E293B", marginBottom:3 }}>
                  {c.name}
                </div>
                <div style={{ fontSize:13, color:"#64748B", lineHeight:1.5, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>
                  {c.description}
                </div>
                {/* Keywords as tags */}
                <div style={{ display:"flex", flexWrap:"wrap", gap:4, marginTop:6 }}>
                  <span style={{
                    fontSize:11, fontWeight:700, padding:"2px 8px", borderRadius:99,
                    background:catBg[c.category], color:catAccent[c.category],
                  }}>
                    {catLabel[c.category]}
                  </span>
                  {c.keywords.slice(0,3).map(k => (
                    <span key={k} style={{
                      fontSize:11, padding:"2px 8px", borderRadius:99,
                      background:"#F1F5F9", color:"#64748B",
                    }}>
                      {k}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <svg style={{ width:18, height:18, color:"#CBD5E1", flexShrink:0 }}
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          ))}
        </div>
      )}

      {/* Popular searches if no query */}
      {!query && (
        <div style={{
          marginTop:24, background:"#fff", borderRadius:14,
          border:"1.5px solid #E2E8F0", padding:20,
        }}>
          <p style={{ fontSize:12, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.06em", color:"#94A3B8", marginBottom:12 }}>
            Popular Searches
          </p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
            {["mortgage","BMI","compound interest","income tax","loan","calorie","age","percentage","retirement","salary"].map(term => (
              <button
                key={term}
                type="button"
                onClick={() => handleChange(term)}
                style={{
                  background:"#F8FAFC", border:"1.5px solid #E2E8F0",
                  borderRadius:99, padding:"6px 14px",
                  fontSize:13, fontWeight:600, color:"#1E293B",
                  cursor:"pointer", transition:"all .15s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="#EFF6FF"; (e.currentTarget as HTMLElement).style.borderColor="#1B3A6B"; (e.currentTarget as HTMLElement).style.color="#1B3A6B"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="#F8FAFC"; (e.currentTarget as HTMLElement).style.borderColor="#E2E8F0"; (e.currentTarget as HTMLElement).style.color="#1E293B"; }}
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

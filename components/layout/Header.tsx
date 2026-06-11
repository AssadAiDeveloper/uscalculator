"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV = [
  { label: "Financial",       href: "/financial" },
  { label: "Fitness",         href: "/fitness"   },
  { label: "Math",            href: "/math"       },
  { label: "Other",           href: "/other"      },
  { label: "All Calculators", href: "/sitemap-page"},
];

const S = {
  header:   { backgroundColor:"#ffffff", position:"sticky" as const, top:0, zIndex:50, boxShadow:"0 2px 8px rgba(0,0,0,.25)" },
  topBar:   { maxWidth:1280, margin:"0 auto", padding:"0 20px", height:68, display:"flex", alignItems:"center", gap:12 },
  logo:     { display:"flex", alignItems:"center", flexShrink:0, textDecoration:"none" as const },
  navWrap:  { flex:1, display:"flex", justifyContent:"center" as const, gap:2 },
  navLink:  { color:"rgba(255,255,255,.82)", textDecoration:"none" as const, padding:"7px 14px", borderRadius:8, fontSize:13, fontWeight:600, transition:"all .15s" },
  search:   { position:"relative" as const, flexShrink:0 },
  searchIn: { width:200, background:"rgba(32, 157, 240, 0.23)", color:"#2553A0", border:"1.5px solid rgb(29, 6, 203)", borderRadius:10, padding:"7px 36px 7px 14px", fontSize:13, outline:"none" },
  catBar:   { background:"#2553A0", borderTop:"1px solid rgba(255,255,255,.08)" },
  catWrap:  { maxWidth:1280, margin:"0 auto", padding:"0 20px", display:"flex", justifyContent:"center" as const, overflowX:"auto" as const },
  catLink:  { color:"rgba(255,255,255,.78)", textDecoration:"none" as const, padding:"8px 18px", fontSize:12, fontWeight:700, textTransform:"uppercase" as const, letterSpacing:"0.05em", whiteSpace:"nowrap" as const, transition:"all .15s" },
  ham:      { background:"none", border:"none", cursor:"pointer", padding:6, display:"flex", flexDirection:"column" as const, gap:5 },
  mobileM:  { backgroundColor:"#152d54", borderTop:"1px solid rgba(255,255,255,.1)", padding:"12px 20px", display:"flex", flexDirection:"column" as const, gap:4 },
  mLink:    { color:"rgba(255,255,255,.88)", textDecoration:"none" as const, padding:"10px 14px", borderRadius:8, fontSize:14, fontWeight:600 },
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const bar = (rot:string, op:number, tx:string) => ({
    width:22, height:2.5, background:"#0910cc", borderRadius:2,
    transition:"all .22s", transform:rot, opacity:op, translate:tx
  } as React.CSSProperties);
  return (
    <header role="banner" style={S.header}>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* ── Top bar ── */}
      <div style={S.topBar}>
        {/* Logo */}
        <Link href="/" style={S.logo} aria-label="USCalculator.net home">
          <Image
            src="/logo.png"
            alt="USCalculator.net"
            width={180}
            height={54}
            priority
            style={{ height: 200, width: "auto", maxWidth: 350}}
          />
        </Link>

        {/* Desktop nav — centred */}
        <nav aria-label="Main navigation" style={S.navWrap}
          className="hidden md:flex">
          {NAV.map(n => (
            <Link key={n.href} href={n.href} style={S.navLink}
              onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.background="rgba(255,255,255,.14)";el.style.color="F97316";}}
              onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.background="transparent";el.style.color="#0a13b9";}}>
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Search */}
        <form action="/search" method="GET" role="search" style={S.search} className="hidden md:block">
          <input type="search" name="q" placeholder="Search calculators…"
            aria-label="Search calculators" style={S.searchIn}
            onFocus={e=>{e.target.style.background="rgba(255,255,255,.2)";e.target.style.borderColor="rgba(255,255,255,.5)";}}
            onBlur={e=>{e.target.style.background="rgba(255,255,255,.12)";e.target.style.borderColor="rgba(255,255,255,.25)";}} />
          <span style={{position:"absolute",right:11,top:"50%",transform:"translateY(-50%)",color:"rgba(255,255,255,.45)",fontSize:17,pointerEvents:"none"}}>⌕</span>
        </form>

        {/* Hamburger */}
        <button type="button" onClick={()=>setOpen(v=>!v)}
          aria-label={open?"Close menu":"Open menu"} aria-expanded={open}
          style={S.ham} className="md:hidden">
          <span style={bar(open?"rotate(45deg) translate(5px,5px)":"none",1,"none")}/>
          <span style={bar("none",open?0:1,"none")}/>
          <span style={bar(open?"rotate(-45deg) translate(5px,-5px)":"none",1,"none")}/>
        </button>
      </div>

      {/* ── Category strip ── */}
      <div style={S.catBar} className="hidden md:block">
        <div style={S.catWrap}>
          {[{icon:"💰",label:"Financial",id:"financial"},{icon:"🏃",label:"Fitness",id:"fitness"},
            {icon:"📐",label:"Math",id:"math"},{icon:"🔧",label:"Other",id:"other"}].map(c=>(
            <Link key={c.id} href={`/${c.id}`} style={S.catLink}
              onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.background="rgba(255,255,255,.12)";el.style.color="#fff";}}
              onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.background="transparent";el.style.color="rgba(255,255,255,.78)";}}>
              {c.icon} {c.label}
            </Link>
          ))}
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {open && (
        <div style={S.mobileM}>
          {NAV.map(n=>(
            <Link key={n.href} href={n.href} onClick={()=>setOpen(false)} style={S.mLink}>{n.label}</Link>
          ))}
          <form action="/search" method="GET" role="search" style={{marginTop:8}}>
            <input type="search" name="q" placeholder="Search calculators…" aria-label="Search"
              style={{width:"100%",background:"rgba(255,255,255,.1)",color:"#fff",border:"1px solid rgba(255,255,255,.2)",borderRadius:10,padding:"10px 14px",fontSize:14,outline:"none"}}/>
          </form>
        </div>
      )}
    </header>
  );
}

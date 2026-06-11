import type { Metadata } from "next";
import { SITE } from "@/lib/metadata";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title:       "Contact Us",
  description: "Get in touch with the USCalculator.net team. Report a bug, suggest a calculator, or ask a question.",
  alternates:  { canonical: `${SITE.URL}/contact` },
  openGraph:   { title: "Contact USCalculator.net", description: "Get in touch — report bugs, suggest calculators, or ask questions.", url: `${SITE.URL}/contact` },
};

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact USCalculator.net",
  "url": "https://www.uscalculator.net/contact",
  "isPartOf": { "@type": "WebSite", "url": "https://www.uscalculator.net" }
});

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      <div style={{ maxWidth:640, margin:"0 auto", padding:"40px 20px" }}>
        <h1 style={{ fontSize:28, fontWeight:900, color:"#1E293B", marginBottom:6 }}>Contact Us</h1>
        <p style={{ fontSize:14, color:"#64748B", marginBottom:28 }}>Found a bug? Want a new calculator? We read every message.</p>
        <ContactForm />
        <div style={{ marginTop:28, display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14 }}>
          {[
            { icon:"📧", label:"Email",         value:"contact@uscalculator.net" },
            { icon:"⏰", label:"Response Time",  value:"1–2 business days" },
            { icon:"🐛", label:"Bug Reports",    value:"Use the form above" },
          ].map(c => (
            <div key={c.label} style={{ background:"#fff", borderRadius:14, border:"1.5px solid #E2E8F0", padding:"16px 12px", textAlign:"center" }}>
              <div style={{ fontSize:24, marginBottom:8 }}>{c.icon}</div>
              <div style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.06em", color:"#94A3B8", marginBottom:4 }}>{c.label}</div>
              <div style={{ fontSize:13, fontWeight:600, color:"#1E293B" }}>{c.value}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

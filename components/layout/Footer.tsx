"use client";

import Link from "next/link";

const FOOTER_LINKS = {
  Financial: [
    { label: "Mortgage Calculator",   href: "/mortgage-calculator" },
    { label: "Loan Calculator",       href: "/loan-calculator" },
    { label: "Compound Interest",     href: "/compound-interest-calculator" },
    { label: "Income Tax",            href: "/income-tax-calculator" },
    { label: "Retirement",            href: "/retirement-calculator" },
  ],
  "Fitness & Health": [
    { label: "BMI Calculator",        href: "/bmi-calculator" },
    { label: "Calorie Calculator",    href: "/calorie-calculator" },
    { label: "Body Fat Calculator",   href: "/body-fat-calculator" },
    { label: "BMR Calculator",        href: "/bmr-calculator" },
    { label: "Due Date Calculator",   href: "/due-date-calculator" },
  ],
  Math: [
    { label: "Percentage Calculator", href: "/percentage-calculator" },
    { label: "Fraction Calculator",   href: "/fraction-calculator" },
    { label: "Random Number",         href: "/random-number-generator" },
    { label: "Standard Deviation",    href: "/standard-deviation-calculator" },
    { label: "Triangle Calculator",   href: "/triangle-calculator" },
  ],
  Other: [
    { label: "Age Calculator",        href: "/age-calculator" },
    { label: "Date Calculator",       href: "/date-calculator" },
    { label: "GPA Calculator",        href: "/gpa-calculator" },
    { label: "Password Generator",    href: "/password-generator" },
    { label: "Subnet Calculator",     href: "/subnet-calculator" },
  ],
};

const linkStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.55)",
  textDecoration: "none",
  fontSize: 13,
  lineHeight: 2,
  display: "block",
  transition: "color 0.15s",
};

export default function Footer() {
  return (
    <footer role="contentinfo" style={{ backgroundColor: "#1B3A6B", color: "rgba(255,255,255,0.7)", marginTop: 64 }}>

      {/* Main grid */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr repeat(4, 1fr)", gap: 32 }}>

          {/* Brand */}
          <div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 10 }}>
              US<span style={{ color: "#F97316" }}>Calculator</span>.net
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 16, maxWidth: 220 }}>
              Free, fast, and accurate online calculators for finance, fitness, math, and more.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#4ade80", display: "inline-block" }} />
              All calculators free forever
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)", marginBottom: 12 }}>
                {category}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {links.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} style={linkStyle}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#fff"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto", padding: "16px 24px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 12,
        }}>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", margin: 0 }}>
            © {new Date().getFullYear()} USCalculator.net — All rights reserved.
          </p>
          <nav aria-label="Legal" style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {[
              { label: "Privacy Policy",   href: "/privacy-policy" },
              { label: "Terms of Use",     href: "/terms-of-use" },
              { label: "Contact",          href: "/contact" },
              { label: "All Calculators",  href: "/sitemap-page" },
            ].map(link => (
              <Link key={link.href} href={link.href} style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#fff"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)"}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

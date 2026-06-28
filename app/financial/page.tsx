import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:       "Financial Calculators — Free Online Tools",
  description: "Free financial calculators for mortgage, loans, taxes, investments, retirement, and more. Fast, accurate, no sign-up.",
  alternates:  { canonical: "https://www.uscalculator.net/financial" },
  openGraph:   { title: "Financial Calculators", description: "Free mortgage, loan, tax, and investment calculators.", url: "https://www.uscalculator.net/financial" },
};

// STATIC array — Googlebot reads these as plain HTML anchor tags
const CALCULATORS = [
  { name: "Mortgage Calculator",        slug: "mortgage-calculator",         icon: "🏠", desc: "Calculate your monthly mortgage payment including principal, interest, taxes, and insurance."      },
  { name: "Loan Calculator",            slug: "loan-calculator",             icon: "💳", desc: "Find your monthly payment, total interest, and payoff schedule for any loan."                      },
  { name: "Auto Loan Calculator",       slug: "auto-loan-calculator",        icon: "🚗", desc: "Calculate car loan payments with tax, trade-in, and down payment options."                         },
  { name: "Compound Interest",          slug: "compound-interest-calculator", icon: "📈", desc: "See how your savings grow over time with compound interest."                                       },
  { name: "Investment Calculator",      slug: "investment-calculator",       icon: "📊", desc: "Project investment returns with inflation adjustment and monthly contributions."                    },
  { name: "Retirement Calculator",      slug: "retirement-calculator",       icon: "🏖️", desc: "Plan your retirement savings and see how much you'll have at retirement age."                      },
  { name: "Amortization Calculator",    slug: "amortization-calculator",     icon: "📋", desc: "View a full loan amortization schedule with month-by-month breakdown."                             },
  { name: "Interest Calculator",        slug: "interest-calculator",         icon: "💹", desc: "Calculate simple or compound interest on any principal amount."                                    },
  { name: "Payment Calculator",         slug: "payment-calculator",          icon: "💸", desc: "Calculate monthly, bi-weekly, or weekly payments for any debt."                                    },
  { name: "Salary Calculator",          slug: "salary-calculator",           icon: "💼", desc: "Convert salary between annual, monthly, weekly, and hourly rates."                                 },
  { name: "Income Tax Calculator",      slug: "income-tax-calculator",       icon: "🧾", desc: "Estimate your US federal income tax for 2024 with full bracket breakdown."                         },
  { name: "Sales Tax Calculator",       slug: "sales-tax-calculator",        icon: "🛒", desc: "Calculate the final price after adding sales tax to any amount."                                   },
  { name: "Inflation Calculator",       slug: "inflation-calculator",        icon: "📉", desc: "Find out how inflation affects the purchasing power of money over time."                           },
  { name: "Finance Calculator",         slug: "finance-calculator",          icon: "🏦", desc: "Solve for present value, future value, interest rate, or number of periods."                      },
  { name: "Interest Rate Calculator",   slug: "interest-rate-calculator",    icon: "🔢", desc: "Find the interest rate on a loan given the payment, term, and principal."                         },
];

export default function FinancialPage() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>

      {/* Breadcrumb — static HTML */}
      <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: "#64748B" }}>
        <Link href="/" style={{ color: "#64748B", textDecoration: "none" }}>Home</Link>
        <span style={{ margin: "0 8px" }}>/</span>
        <span style={{ color: "#1E293B", fontWeight: 600 }}>Financial Calculators</span>
      </nav>

      {/* H1 */}
      <h1 style={{ fontSize: 32, fontWeight: 900, color: "#1B3A6B", marginBottom: 8 }}>
        💰 Financial Calculators
      </h1>
      <p style={{ fontSize: 15, color: "#64748B", marginBottom: 32, maxWidth: 640 }}>
        Free financial calculators for mortgage, loans, taxes, investments, and retirement planning.
        All tools are free, accurate, and require no sign-up.
      </p>

      {/* Static HTML list — Googlebot reads every anchor tag */}
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 14 }}>
        {CALCULATORS.map(c => (
          <li key={c.slug}>
            <Link
              href={`/${c.slug}`}
              style={{
                display: "flex", alignItems: "flex-start", gap: 14,
                padding: "18px 16px", background: "#fff",
                border: "1.5px solid #E2E8F0", borderRadius: 14,
                textDecoration: "none",
                boxShadow: "0 1px 4px rgba(0,0,0,.04)",
              }}
            >
              <span style={{ fontSize: 28, flexShrink: 0 }}>{c.icon}</span>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#1B3A6B", marginBottom: 4 }}>
                  {c.name}
                </div>
                <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.5 }}>
                  {c.desc}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 32, textAlign: "center" }}>
        <Link href="/" style={{ color: "#1B3A6B", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
          ← View All Calculators
        </Link>
      </div>
    </main>
  );
}

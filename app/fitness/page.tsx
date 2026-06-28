import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:       "Fitness & Health Calculators — Free Online Tools",
  description: "Free fitness and health calculators for BMI, calories, body fat, BMR, pregnancy, and more. Fast, accurate, no sign-up.",
  alternates:  { canonical: "https://www.uscalculator.net/fitness" },
  openGraph:   { title: "Fitness & Health Calculators", description: "Free BMI, calorie, body fat, and health calculators.", url: "https://www.uscalculator.net/fitness" },
};

const CALCULATORS = [
  { name: "BMI Calculator",          slug: "bmi-calculator",          icon: "⚖️", desc: "Calculate your Body Mass Index and find out your weight category."                             },
  { name: "Calorie Calculator",      slug: "calorie-calculator",      icon: "🍎", desc: "Find your daily calorie needs based on age, weight, height, and activity level."              },
  { name: "Body Fat Calculator",     slug: "body-fat-calculator",     icon: "🏋️", desc: "Estimate your body fat percentage using the US Navy method."                                  },
  { name: "BMR Calculator",          slug: "bmr-calculator",          icon: "🔥", desc: "Calculate your Basal Metabolic Rate using the Mifflin-St Jeor equation."                      },
  { name: "Ideal Weight Calculator", slug: "ideal-weight-calculator", icon: "🎯", desc: "Find your ideal weight range based on your height and gender."                                },
  { name: "Pregnancy Calculator",    slug: "pregnancy-calculator",    icon: "🤰", desc: "Find your due date and track your pregnancy week by week."                                    },
  { name: "Due Date Calculator",     slug: "due-date-calculator",     icon: "📅", desc: "Calculate your baby's due date from your last menstrual period."                              },
  { name: "Pace Calculator",         slug: "pace-calculator",         icon: "🏃", desc: "Calculate running pace, speed, and finish time for any distance."                            },
];

export default function FitnessPage() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
      <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: "#64748B" }}>
        <Link href="/" style={{ color: "#64748B", textDecoration: "none" }}>Home</Link>
        <span style={{ margin: "0 8px" }}>/</span>
        <span style={{ color: "#1E293B", fontWeight: 600 }}>Fitness & Health Calculators</span>
      </nav>

      <h1 style={{ fontSize: 32, fontWeight: 900, color: "#047857", marginBottom: 8 }}>
        🏃 Fitness & Health Calculators
      </h1>
      <p style={{ fontSize: 15, color: "#64748B", marginBottom: 32, maxWidth: 640 }}>
        Free fitness and health calculators for BMI, calories, body fat, BMR, pregnancy, and more.
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
                <div style={{ fontSize: 15, fontWeight: 700, color: "#047857", marginBottom: 4 }}>{c.name}</div>
                <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.5 }}>{c.desc}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 32, textAlign: "center" }}>
        <Link href="/" style={{ color: "#047857", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
          ← View All Calculators
        </Link>
      </div>
    </main>
  );
}

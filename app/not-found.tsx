import Link from "next/link";
import { CALCULATORS } from "@/lib/calculators";

export default function NotFound() {
  const popular = CALCULATORS.filter(c => c.featured).slice(0, 6);
  return (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: "60px 20px", textAlign: "center" }}>
      <div style={{ fontSize: 64, marginBottom: 16 }}>🔢</div>
      <h1 style={{ fontSize: 28, fontWeight: 900, color: "#1E293B", marginBottom: 8 }}>
        Page Not Found
      </h1>
      <p style={{ fontSize: 15, color: "#64748B", marginBottom: 32 }}>
        The page you&apos;re looking for doesn&apos;t exist. Try one of our free calculators below.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 10, marginBottom: 28 }}>
        {popular.map(c => (
          <Link key={c.id} href={`/${c.slug}`} style={{
            display: "flex", alignItems: "center", gap: 10,
            padding: "12px 16px", background: "#fff",
            border: "1.5px solid #E2E8F0", borderRadius: 12,
            textDecoration: "none", textAlign: "left",
          }}>
            <span style={{ fontSize: 20 }}>{c.icon}</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#1E293B" }}>{c.name}</span>
          </Link>
        ))}
      </div>
      <Link href="/" style={{
        display: "inline-block", background: "#F97316", color: "#fff",
        padding: "12px 28px", borderRadius: 10, textDecoration: "none",
        fontSize: 14, fontWeight: 700,
      }}>
        ← Back to Home
      </Link>
    </div>
  );
}

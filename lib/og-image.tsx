// Shared JSX template for generated Open Graph / Twitter card images.
// Uses only flexbox + inline styles (required by next/og / satori).

export function OgTemplate({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        padding: "72px",
        justifyContent: "center",
        background:
          "linear-gradient(135deg,#1B3A6B 0%,#2553A0 60%,#3B72D4 100%)",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 28 }}>
        <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#F97316", display: "flex" }} />
        <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: "0.02em" }}>
          USCalculator.net
        </div>
      </div>
      <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.1 }}>{title}</div>
      {subtitle ? (
        <div style={{ fontSize: 32, color: "rgba(255,255,255,0.78)", marginTop: 26 }}>
          {subtitle}
        </div>
      ) : null}
    </div>
  );
}

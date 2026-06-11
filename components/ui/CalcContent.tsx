// Renders the long-form SEO content + FAQ accordion for each calculator page
"use client";

import { useState } from "react";
import { getCalcContent, type FAQItem } from "@/lib/calc-content";

interface Props {
  calcId: string;
  calcName: string;
}

export default function CalcContent({ calcId, calcName }: Props) {
  const content = getCalcContent(calcId);
  if (!content) return null;

  return (
    <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 16 }}>

      {/* Article */}
      <article style={{
        background: "#fff", borderRadius: 16,
        border: "1.5px solid #E2E8F0",
        boxShadow: "0 1px 4px rgb(0 0 0 / 0.05)",
        padding: "28px 28px",
      }}>
        {/* Intro */}
        <div style={{ marginBottom: 28 }}>
          {content.intro.split("\n\n").map((para, i) => (
            <p key={i} style={{
              fontSize: 15, color: "#374151", lineHeight: 1.85,
              marginBottom: i < content.intro.split("\n\n").length - 1 ? 16 : 0,
            }}>
              {para.trim()}
            </p>
          ))}
        </div>

        {/* Sections */}
        {content.sections.map((sec, i) => (
          <div key={i} style={{ marginBottom: 28 }}>
            <h2 style={{
              fontSize: 18, fontWeight: 800, color: "#1E293B",
              margin: "0 0 12px",
              paddingBottom: 10,
              borderBottom: "2px solid #F1F5F9",
            }}>
              {sec.heading}
            </h2>
            {sec.body.split("\n\n").map((para, j) => (
              <p key={j} style={{
                fontSize: 15, color: "#374151", lineHeight: 1.85,
                marginBottom: j < sec.body.split("\n\n").length - 1 ? 14 : 0,
              }}>
                {para.trim()}
              </p>
            ))}
          </div>
        ))}

        {/* Conclusion */}
        <div style={{
          background: "linear-gradient(135deg, #EFF6FF, #F5F3FF)",
          borderRadius: 12, padding: "18px 20px",
          borderLeft: "4px solid #1B3A6B",
        }}>
          <p style={{ fontSize: 14, color: "#1E293B", lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
            {content.conclusion}
          </p>
        </div>
      </article>

      {/* FAQ */}
      <div style={{
        background: "#fff", borderRadius: 16,
        border: "1.5px solid #E2E8F0",
        boxShadow: "0 1px 4px rgb(0 0 0 / 0.05)",
        overflow: "hidden",
      }}>
        {/* FAQ header */}
        <div style={{
          background: "linear-gradient(135deg, #1B3A6B, #2553A0)",
          padding: "16px 24px",
        }}>
          <h2 style={{ color: "#fff", fontSize: 16, fontWeight: 800, margin: 0 }}>
            ❓ Frequently Asked Questions
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, margin: "4px 0 0" }}>
            Common questions about {calcName}
          </p>
        </div>

        {/* FAQ items */}
        <div style={{ padding: "8px 0" }}>
          {content.faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} isLast={i === content.faqs.length - 1} />
          ))}
        </div>
      </div>

      {/* Schema.org FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": content.faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}

function FAQItem({ faq, index, isLast }: { faq: FAQItem; index: number; isLast: boolean }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div style={{ borderBottom: isLast ? "none" : "1px solid #F1F5F9" }}>
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        style={{
          width: "100%", textAlign: "left", background: "none", border: "none",
          padding: "16px 24px", cursor: "pointer", display: "flex",
          alignItems: "flex-start", justifyContent: "space-between", gap: 16,
        }}
        aria-expanded={open}
      >
        <span style={{
          fontSize: 14, fontWeight: 700, color: "#1E293B", lineHeight: 1.5, flex: 1,
        }}>
          {faq.question}
        </span>
        <span style={{
          flexShrink: 0, width: 24, height: 24, borderRadius: 6,
          background: open ? "#1B3A6B" : "#F1F5F9",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 14, color: open ? "#fff" : "#64748B",
          transition: "background 0.2s, color 0.2s",
          fontWeight: 700, marginTop: 1,
        }}>
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div style={{
          padding: "0 24px 18px",
          animation: "result-pop 0.2s ease-out",
        }}>
          <p style={{
            fontSize: 14, color: "#475569", lineHeight: 1.8, margin: 0,
            background: "#F8FAFC", borderRadius: 10, padding: "14px 16px",
            borderLeft: "3px solid #F97316",
          }}>
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}

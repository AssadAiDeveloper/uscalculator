import type { Metadata } from "next";
import { SITE } from "@/lib/metadata";

export const metadata: Metadata = {
  title:       "Terms of Use",
  description: "USCalculator.net terms of use — rules and disclaimers for using our free online calculators.",
  alternates:  { canonical: `${SITE.URL}/terms-of-use` },
};

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Terms of Use — USCalculator.net",
  "url": "https://www.uscalculator.net/terms-of-use",
  "isPartOf": { "@type": "WebSite", "url": "https://www.uscalculator.net" }
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom:24 }}>
      <h2 style={{ fontSize:15, fontWeight:700, color:"#1E293B", marginBottom:8 }}>{title}</h2>
      <div style={{ fontSize:13, color:"#64748B", lineHeight:1.8 }}>{children}</div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      <div style={{ maxWidth:760, margin:"0 auto", padding:"40px 20px" }}>
        <h1 style={{ fontSize:28, fontWeight:900, color:"#1E293B", marginBottom:4 }}>Terms of Use</h1>
        <p style={{ fontSize:12, color:"#94A3B8", marginBottom:28 }}>Last updated: January 1, 2025</p>
        <div style={{ background:"#fff", borderRadius:16, border:"1.5px solid #E2E8F0", padding:"28px 32px", boxShadow:"0 1px 4px rgba(0,0,0,.05)" }}>
          <Section title="1. Acceptance of Terms"><p>By accessing or using USCalculator.net, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use the site.</p></Section>
          <Section title="2. Informational Purpose Only"><p>All calculators on USCalculator.net are provided for informational and educational purposes only. Results should not be used as a substitute for professional financial, medical, legal, or any other professional advice. Always consult a qualified professional before making important decisions based on calculator results.</p></Section>
          <Section title="3. Accuracy Disclaimer"><p>While we strive for accuracy in all our calculators, we make no warranty, express or implied, that results are free from errors. Calculator results are estimates only. Use at your own risk.</p></Section>
          <Section title="4. Intellectual Property"><p>All content, design, code, and calculators on USCalculator.net are the property of USCalculator.net. Unauthorized reproduction, distribution, or commercial use of any content is prohibited without express written permission.</p></Section>
          <Section title="5. User Conduct"><p>You agree not to use the site to violate any applicable laws, attempt to gain unauthorized access to our systems, use automated tools to scrape or overload our servers, or engage in any activity that disrupts the site&apos;s normal operation.</p></Section>
          <Section title="6. Limitation of Liability"><p>USCalculator.net and its operators shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of, or inability to use, this site or its calculators.</p></Section>
          <Section title="7. Third-Party Links"><p>Our site may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites.</p></Section>
          <Section title="8. Changes to Terms"><p>We reserve the right to modify these terms at any time. Changes take effect immediately upon posting. Continued use of the site constitutes acceptance of the modified terms.</p></Section>
          <Section title="9. Governing Law"><p>These terms shall be governed by and construed in accordance with applicable law. Any disputes shall be resolved in the appropriate jurisdiction.</p></Section>
          <Section title="10. Contact"><p>Questions about these Terms may be directed to <strong style={{ color:"#1E293B" }}>legal@uscalculator.net</strong> or via our <a href="/contact" style={{ color:"#1B3A6B" }}>contact form</a>.</p></Section>
        </div>
      </div>
    </>
  );
}

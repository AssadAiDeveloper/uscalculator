import type { Metadata } from "next";
import { SITE } from "@/lib/metadata";

export const metadata: Metadata = {
  title:       "Privacy Policy",
  description: "USCalculator.net privacy policy — how we handle your data, cookies, and advertising.",
  alternates:  { canonical: `${SITE.URL}/privacy-policy` },
};

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Privacy Policy — USCalculator.net",
  "url": "https://www.uscalculator.net/privacy-policy",
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

export default function PrivacyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      <div style={{ maxWidth:760, margin:"0 auto", padding:"40px 20px" }}>
        <h1 style={{ fontSize:28, fontWeight:900, color:"#1E293B", marginBottom:4 }}>Privacy Policy</h1>
        <p style={{ fontSize:12, color:"#94A3B8", marginBottom:28 }}>Last updated: January 1, 2025</p>
        <div style={{ background:"#fff", borderRadius:16, border:"1.5px solid #E2E8F0", padding:"28px 32px", boxShadow:"0 1px 4px rgba(0,0,0,.05)" }}>
          <Section title="1. Information We Collect">
            <p>USCalculator.net does not require registration or login. We do not collect personally identifiable information unless you voluntarily provide it via our contact form. We may collect anonymous usage data through cookies and analytics tools to improve our services.</p>
          </Section>
          <Section title="2. Cookies & Advertising">
            <p>We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to this or other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color:"#1B3A6B" }}>Google Ads Settings</a>.</p>
            <p style={{ marginTop:8 }}>We also use Google Analytics to understand site traffic patterns. This data is anonymous and aggregated.</p>
          </Section>
          <Section title="3. Local Storage">
            <p>We use your browser&apos;s localStorage to remember your preferences. No personal data is stored in localStorage. This data stays on your device and is never transmitted to our servers.</p>
          </Section>
          <Section title="4. Third-Party Links">
            <p>Our site may contain links to external websites. We are not responsible for the privacy practices of those sites and encourage you to read their privacy policies.</p>
          </Section>
          <Section title="5. Children&apos;s Privacy">
            <p>Our services are not directed to children under 13. We do not knowingly collect information from children. If you believe a child has provided us with personal information, please contact us so we can delete it.</p>
          </Section>
          <Section title="6. Your Rights (GDPR)">
            <p>If you are in the European Economic Area, you have the right to access, correct, or delete any personal data we hold about you. Contact us at <strong style={{ color:"#1E293B" }}>privacy@uscalculator.net</strong> to exercise these rights.</p>
          </Section>
          <Section title="7. Data Security">
            <p>We implement industry-standard security measures including HTTPS encryption, security headers (CSP, HSTS, X-Frame-Options), and regular security audits to protect your information.</p>
          </Section>
          <Section title="8. Changes to This Policy">
            <p>We may update this policy from time to time. Changes will be reflected by the &quot;Last updated&quot; date above. Continued use of the site after changes constitutes acceptance of the updated policy.</p>
          </Section>
          <Section title="9. Contact">
            <p>For privacy questions, email us at <strong style={{ color:"#1E293B" }}>privacy@uscalculator.net</strong> or use our <a href="/contact" style={{ color:"#1B3A6B" }}>contact form</a>.</p>
          </Section>
        </div>
      </div>
    </>
  );
}

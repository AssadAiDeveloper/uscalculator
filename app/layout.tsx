import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/ui/CookieConsent";
import { SITE } from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.URL),
  title: {
    default: "Free Online Calculators — Instantly Accurate",
    template: "%s | USCalculator.net",
  },
  description: SITE.DESC,
  keywords: "calculator, online calculator, free calculator, mortgage calculator, bmi calculator",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.NAME,
    title: "Free Online Calculators — USCalculator.net",
    description: SITE.DESC,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#1B3A6B" />
        <meta name="color-scheme" content="light" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context":"https://schema.org",
            "@graph":[
              {"@type":"WebSite","@id":`${SITE.URL}/#website`,"url":SITE.URL,"name":SITE.NAME,"description":SITE.DESC,
               "potentialAction":{"@type":"SearchAction","target":`${SITE.URL}/search?q={search_term_string}`,"query-input":"required name=search_term_string"}},
              {"@type":"Organization","@id":`${SITE.URL}/#organization`,"name":SITE.NAME,"url":SITE.URL,
               "logo":{"@type":"ImageObject","url":`${SITE.URL}/logo.png`}},
            ]
          })}}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-surface">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}

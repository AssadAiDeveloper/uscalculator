import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/metadata";

export const metadata: Metadata = {
  title: {
    default:  `${SITE.NAME} — Free Online Calculators`,
    template: `%s — ${SITE.NAME}`,
  },
  description: SITE.DESC,
  metadataBase: new URL(SITE.URL),
  icons: {
    icon:        [
      { url: "/favicon1.png",  type: "image/png"              },
      { url: "/favicon.ico",  sizes: "any"                   },
    ],
    apple:       [{ url: "/favicon1.png", sizes: "180x180"    }],
    shortcut:    "/favicon1.png",
  },
  openGraph: {
    type:      "website",
    siteName:  SITE.NAME,
    locale:    "en_US",
    images: [{
      url:    `${SITE.URL}/og/home.png`,
      width:  1200,
      height: 630,
      alt:    `${SITE.NAME} — Free Online Calculators`,
    }],
  },
  twitter: {
    card:        "summary_large_image",
    site:        "@uscalculator",
    creator:     "@uscalculator",
    images:      [`${SITE.URL}/og/home.png`],
  },
  alternates: {
    canonical: SITE.URL,
    languages: {
      "en-US": SITE.URL,
    },
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
          <head>
  {/* Google Analytics */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-4EJFT7L4VC" />
  <script dangerouslySetInnerHTML={{__html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-4EJFT7L4VC');
  `}} />


        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#1B3A6B" />
        <meta name="color-scheme" content="light" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="geolocation=(), microphone=(), camera=()" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context":"https://schema.org",
            "@graph":[
              {"@type":"WebSite","@id":`${SITE.URL}/#website`,"url":SITE.URL,"name":SITE.NAME,"description":SITE.DESC,
               "potentialAction":{"@type":"SearchAction","target":`${SITE.URL}/search?q={search_term_string}`,"query-input":"required name=search_term_string"}},
              {"@type":"Organization","@id":`${SITE.URL}/#organization`,"name":SITE.NAME,"url":SITE.URL},
            ]
          })}}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-surface">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

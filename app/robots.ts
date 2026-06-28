import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/apple-app-site-association",
          "/.well-known/apple-app-site-association",
          "/_next/og/",
          "/api/",
        ],
      },
      {
        userAgent: "AdsBot-Google",
        disallow: [
          "/apple-app-site-association",
          "/.well-known/apple-app-site-association",
          "/_next/og/",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: [
          "/",
          "/_next/static/css/",
          "/_next/static/chunks/",
        ],
        disallow: [
          "/apple-app-site-association",
          "/.well-known/apple-app-site-association",
          "/_next/og/",
        ],
      },
    ],
    sitemap: "https://www.uscalculator.net/sitemap.xml",
    host:    "https://www.uscalculator.net",
  };
}

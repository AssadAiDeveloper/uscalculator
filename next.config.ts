import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress:        true,
  poweredByHeader: false,

  turbopack: {
    root: process.cwd(),
  },

  async headers() {
    return [
      // Cache JS/CSS chunks 1 year — immutable
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "X-Robots-Tag",  value: "noindex" },
        ],
      },
      // Cache images 30 days
      {
        source: "/:path*\\.(:ext(png|jpg|jpeg|gif|svg|ico|webp))",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" },
        ],
      },
      // Sitemap + robots — 1 hour
      {
        source: "/(sitemap\\.xml|robots\\.txt)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
      // Security headers on all pages
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options",           value: "DENY"                             },
          { key: "X-Content-Type-Options",    value: "nosniff"                          },
          { key: "X-XSS-Protection",          value: "1; mode=block"                   },
          { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin"  },
          { key: "Permissions-Policy",        value: "geolocation=(), microphone=(), camera=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
        ],
      },
    ];
  },

  images: {
    formats:        ["image/avif", "image/webp"],
    remotePatterns: [],
  },
};

export default nextConfig;

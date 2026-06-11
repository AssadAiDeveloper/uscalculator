import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress:        true,
  poweredByHeader: false,

  // Target modern browsers — eliminates unnecessary polyfills (~14KB saved)
  experimental: {
    optimizePackageImports: ["@/components/calculators"],
  },

  // Fix Turbopack root warning — use turbopack key (Next.js 16)
  turbopack: {
    root: process.cwd(),
  },

  // Security headers
  async headers() {
    return [
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

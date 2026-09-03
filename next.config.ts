import type { NextConfig } from "next";
import { problemAliases } from "./src/data/problemAliases";

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "troublio.com" }],
        destination: "https://www.troublio.com/:path*",
        permanent: true,
      },
      ...problemAliases.map((alias) => ({
        source: `/problems/${alias.sourceSlug}`,
        destination: `/problems/${alias.destinationSlug}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;

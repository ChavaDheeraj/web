import path from "node:path";
import { fileURLToPath } from "node:url";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

const root = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root so a stray lockfile higher up the tree is ignored.
  outputFileTracingRoot: root,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  reactStrictMode: true,

  // Disable webpack filesystem cache on Windows dev to avoid pack file locking / corruption.
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
  // Inline the (small) stylesheet so first paint does not wait on a CSS request in production.
  experimental: {
    inlineCss: process.env.NODE_ENV === "production",
  },

  // Routes from the previous site that no longer exist.
  async redirects() {
    return [
      { source: "/engage", destination: "/contact", permanent: true },
      { source: "/log", destination: "/ventures", permanent: true },
      { source: "/log/:slug", destination: "/ventures", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

/* `next dev` writes to .next-dev and `next build` to .next (the folder Vercel and
   `next start` read). Sharing one folder meant a build run while the dev server was
   up replaced its files underneath it ("Cannot find module './897.js'"). */
export default function config(phase) {
  return { ...nextConfig, distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next" };
}

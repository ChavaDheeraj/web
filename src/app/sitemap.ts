import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/capabilities", priority: 0.9 },
  { path: "/approach", priority: 0.9 },
  { path: "/rebuilding", priority: 0.8 },
  { path: "/who-we-work-with", priority: 0.8 },
  { path: "/ventures", priority: 0.6 },
  { path: "/principles", priority: 0.6 },
  { path: "/join", priority: 0.5 },
  { path: "/contact", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path === "/" ? "/" : r.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}

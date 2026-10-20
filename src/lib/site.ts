/* Single source of truth for facts that appear across the site.
   Change contact details here, never inline in a page. */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://trigarty.com").replace(/\/$/, "");

export const SITE = {
  name: "Trigarty",
  legalName: "Trigarty",
  motto: "Build What's Next.",
  tagline: "We work inside organizations to build what's next.",
  description:
    "Trigarty is an embedded transformation and building company in Hyderabad. We work as an extension of your team to build, improve and rebuild what your organization needs next.",
  email: "contact.trigarty@gmail.com",
  careersEmail: "team.trigarty@gmail.com",
  phoneDisplay: "+91 91336 65157",
  phoneE164: "+919133665157",
  whatsapp: "https://wa.me/919133665157",
  city: "Hyderabad",
  region: "Telangana",
  country: "IN",
  // Add real profile URLs here; they feed the footer and the JSON-LD sameAs list.
  social: [] as { label: string; href: string }[],
};

export const NAV = [
  { href: "/capabilities", label: "Capabilities" },
  { href: "/approach", label: "Approach" },
  { href: "/rebuilding", label: "Rebuilding" },
  { href: "/who-we-work-with", label: "Who We Work With" },
  { href: "/ventures", label: "Ventures" },
  { href: "/join", label: "Join" },
] as const;

export const STAGES = ["Ideate", "Build", "Upgrade", "Grow", "Rebuild", "Transform", "Evolve"] as const;
export type Stage = (typeof STAGES)[number];

export const mailto = (subject?: string, body?: string, to: string = SITE.email) => {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const q = params.toString().replace(/\+/g, "%20");
  return `mailto:${to}${q ? `?${q}` : ""}`;
};

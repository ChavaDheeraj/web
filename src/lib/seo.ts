import type { Metadata } from "next";
import { SITE, SITE_URL } from "@/lib/site";

/* Per-page metadata. Titles go through the root template ("%s | Trigarty"),
   so pass the short page title. OG images come from each route's opengraph-image file. */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: SITE.name,
      url: `${SITE_URL}${path}`,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export const ORG_ID = `${SITE_URL}/#organization`;

export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: SITE.name,
        url: `${SITE_URL}/`,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/icons/icon-512.png`, width: 512, height: 512 },
        email: SITE.email,
        telephone: SITE.phoneE164,
        slogan: SITE.motto,
        description: SITE.description,
        ...(SITE.social.length ? { sameAs: SITE.social.map((s) => s.href) } : {}),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE.name,
        url: `${SITE_URL}/`,
        inLanguage: "en-IN",
        publisher: { "@id": ORG_ID },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: SITE.name,
        url: `${SITE_URL}/`,
        image: `${SITE_URL}/icons/icon-512.png`,
        logo: `${SITE_URL}/icons/icon-512.png`,
        email: SITE.email,
        telephone: SITE.phoneE164,
        description: SITE.description,
        parentOrganization: { "@id": ORG_ID },
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.city,
          addressRegion: SITE.region,
          addressCountry: SITE.country,
        },
        ...(SITE.social.length ? { sameAs: SITE.social.map((s) => s.href) } : {}),
      },
    ],
  };
}

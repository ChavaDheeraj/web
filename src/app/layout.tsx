import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { RevealObserver } from "@/components/reveal";
import { siteGraph } from "@/lib/seo";
import { SITE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Trigarty | Build What's Next",
    template: "%s | Trigarty",
  },
  description: SITE.description,
  applicationName: SITE.name,
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a09",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1} className="pt-[var(--header-h)] outline-none">
          {children}
        </main>
        <SiteFooter />
        <RevealObserver />
        <JsonLd data={siteGraph()} />
      </body>
    </html>
  );
}

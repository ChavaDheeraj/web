import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, HeroArt } from "@/components/blocks";
import { NAV } from "@/lib/site";
import { pad } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you were looking for does not exist. Find Trigarty's capabilities, approach and contact details from here.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section aria-labelledby="nf-heading" className="on-ink ink-deep relative overflow-hidden section-padding min-h-[calc(100svh-var(--header-h))] flex items-center">
      <div className="grid-lines absolute inset-0" aria-hidden="true" />
      <HeroArt />
      <div className="container-max relative grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-12 lg:gap-20 items-end">
        <div>
          <p className="eyebrow">Error 404</p>
          <h1 id="nf-heading" className="t-display text-on-ink max-w-[12ch]">
            This page <span className="hl">does not exist.</span>
          </h1>
          <p className="t-lede mt-8">
            The link may be old or mistyped. Some pages from our previous site have moved, and the rest of the site is a click away.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/" className="btn btn-spectrum">
              Back to the homepage <Arrow />
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Contact us <Arrow />
            </Link>
          </div>
        </div>

        <nav aria-labelledby="nf-sections">
          <h2 id="nf-sections" className="t-label mb-3">
            Main sections
          </h2>
          <ul>
            {NAV.map((l, i) => (
              <li key={l.href} className="border-b border-on-ink-line">
                <Link href={l.href} className="group flex items-center gap-4 min-h-12 py-2 font-serif text-[1.2rem] text-on-ink hover:text-trigarty-aqua transition-colors">
                  <span className="t-num w-6">{pad(i + 1)}</span>
                  <span className="flex-1">{l.label}</span>
                  <span aria-hidden="true" className="text-on-ink-muted group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}

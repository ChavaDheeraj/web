import Link from "next/link";
import { Logo } from "@/components/logo";
import { CurrentYear } from "@/components/current-year";
import { CAPABILITIES } from "@/content/site-content";
import { NAV, SITE } from "@/lib/site";

const linkCls = "inline-flex items-center min-h-11 md:min-h-9 text-[15px] text-on-ink-muted hover:text-on-ink transition-colors";

export function SiteFooter() {
  return (
    <footer className="on-ink ink-deep relative gutter pt-16 md:pt-24 pb-8">
      <div className="spectrum absolute top-0 inset-x-0 h-[2px]" aria-hidden="true" />

      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-end pb-14 md:pb-20 border-b border-on-ink-line">
          <p className="t-display text-on-ink">
            Build
            <br />
            <span className="hl">what&apos;s next.</span>
          </p>
          <p className="t-lede max-w-[38ch] lg:justify-self-end lg:text-right lg:pb-3">
            An external team that works like an internal one: building, upgrading and rebuilding organizations so they can achieve what comes next.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr_1.1fr] gap-x-10 gap-y-12 py-14">
          <div>
            <Link href="/" className="inline-flex items-center min-h-11 mb-4" aria-label="Trigarty, home">
              <Logo className="h-[21px] w-auto" />
            </Link>
            <p className="text-[15px] leading-[1.7] text-on-ink-muted max-w-[32ch]">
              An embedded transformation and building company. Not a vendor. An extension of your team. Based in {SITE.city}.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="t-label mb-4">Explore</h2>
            <ul className="flex flex-col">
              {[...NAV, { href: "/principles", label: "Principles" }, { href: "/contact", label: "Contact" }].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="t-label mb-4">Capabilities</h2>
            <ul className="flex flex-col">
              {CAPABILITIES.map((c) => (
                <li key={c.id}>
                  <Link href={`/capabilities#${c.id}`} className={`${linkCls} gap-3`}>
                    <span aria-hidden="true" className="w-1.5 h-1.5 shrink-0" style={{ background: c.accent }} />
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="t-label mb-4">Contact</h2>
            <ul className="flex flex-col">
              <li>
                <a href={`mailto:${SITE.email}`} className={`${linkCls} break-all`}>
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phoneE164}`} className={linkCls}>
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  WhatsApp<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              {SITE.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className={linkCls}>
                    {s.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
              <li className="text-[15px] text-on-ink-muted pt-2">
                {SITE.city}, {SITE.region}, India
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-6 border-t border-on-ink-line">
          <p className="font-mono text-[12px] tracking-[0.06em] text-on-ink-muted">
            © <CurrentYear /> {SITE.legalName}. All rights reserved.
          </p>
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-on-ink-muted">Not a vendor. An extension of your team.</p>
        </div>
      </div>
    </footer>
  );
}

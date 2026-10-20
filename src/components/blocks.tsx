import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { IconGraphic } from "@/components/logo";
import { spectrumStep } from "@/lib/brand";
import { SITE } from "@/lib/site";
export { StageLadder } from "@/components/stage-ladder";

/* Text arrow used inside .btn and .more-link; moves on hover via .btn-arrow. */
export const Arrow = () => (
  <span className="btn-arrow" aria-hidden="true">
    →
  </span>
);

/* The app icon as hero art: top-right, fading out before it reaches any text. */
export function HeroArt({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`hidden lg:block absolute right-0 top-0 h-full w-[50%] pointer-events-none [mask-image:linear-gradient(to_bottom,#000_25%,transparent_78%)] ${className}`}
    >
      <IconGraphic className="absolute right-[-14%] top-[-10%] w-[118%] max-w-[900px]" fillOpacity={0.05} strokeOpacity={0.4} />
    </div>
  );
}

/* Inner-page opening on ink: eyebrow and a full-width H1 (wrap the key phrase in
   <span className="hl">), then the lede and actions on a ruled row beneath.
   The trail is published as BreadcrumbList data; the eyebrow names the page. */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  lede,
  children,
}: {
  crumbs: { name: string; href: string }[];
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="on-ink ink-deep relative overflow-hidden gutter pt-14 md:pt-20 lg:pt-24 pb-12 md:pb-16">
      <div className="grid-lines absolute inset-0" aria-hidden="true" />
      <HeroArt />
      <div className="container-max relative">
        <Breadcrumbs items={crumbs} />
        <div data-reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="t-h1 text-on-ink max-w-[18ch]">{title}</h1>
        </div>
        {(lede || children) && (
          <div
            className="mt-12 md:mt-16 pt-8 border-t border-on-ink-line grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-8 lg:gap-16 items-end"
            data-reveal
            style={{ "--d": 2 } as React.CSSProperties}
          >
            {lede && <p className="t-lede max-w-[60ch]">{lede}</p>}
            {children && <div className="flex flex-col sm:flex-row gap-3">{children}</div>}
          </div>
        )}
      </div>
    </section>
  );
}

/* Section opener: eyebrow and H2 on the left, short intro bottom-aligned on the right. */
export function SectionHeader({
  id,
  eyebrow,
  title,
  intro,
  className = "",
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,27rem)] gap-6 lg:gap-16 items-end mb-12 md:mb-16 ${className}`} data-reveal>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id} className="t-h2 max-w-[19ch]">
          {title}
        </h2>
      </div>
      {intro && <div className="t-lede text-[1.0625rem] lg:pb-1.5">{intro}</div>}
    </div>
  );
}

/* Closing call to action: an ink panel on paper, so it stays distinct from the footer. */
export function CtaBand({
  id = "cta-heading",
  eyebrow = "Start here",
  title = (
    <>
      Tell us where you are and <span className="hl">where you want to go.</span>
    </>
  ),
  body = "You don't need to know which service you need. Describe the objective or the problem, and we will work out what it takes to get there.",
  showRoles = false,
}: {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  body?: React.ReactNode;
  showRoles?: boolean;
}) {
  return (
    <section aria-labelledby={id} className="gutter py-16 md:py-24 bg-background">
      <div className="container-max">
        <div className="on-ink relative overflow-hidden px-6 py-12 sm:px-10 md:px-14 md:py-16 lg:px-20 lg:py-20" data-reveal>
          <div className="spectrum absolute top-0 inset-x-0 h-[3px]" aria-hidden="true" />
          <div className="relative grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-20 items-end">
            <div>
              <p className="eyebrow">{eyebrow}</p>
              <h2 id={id} className="t-h2 text-on-ink max-w-[18ch]">
                {title}
              </h2>
              <p className="t-lede mt-6">{body}</p>
              {showRoles && (
                <p className="mt-8 text-[15px] text-on-ink-muted">
                  Looking for a role instead?{" "}
                  <Link href="/join" className="text-link text-on-ink font-medium">
                    See open roles
                  </Link>
                </p>
              )}
            </div>
            <div className="flex flex-col gap-3 w-full lg:max-w-sm lg:justify-self-end">
              <Link href="/contact" className="btn btn-spectrum">
                Start a conversation <Arrow />
              </Link>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Message us on WhatsApp
                <span className="sr-only"> (opens in a new tab)</span>
                <Arrow />
              </a>
              <div className="flex flex-wrap gap-x-6 mt-3 pt-4 border-t border-on-ink-line">
                <a href={`mailto:${SITE.email}`} className="inline-flex items-center min-h-11 font-mono text-[13px] text-on-ink-muted hover:text-on-ink transition-colors break-all">
                  {SITE.email}
                </a>
                <a href={`tel:${SITE.phoneE164}`} className="inline-flex items-center min-h-11 font-mono text-[13px] text-on-ink-muted hover:text-on-ink transition-colors">
                  {SITE.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* A sequence such as PROBLEM → BUILD → LEARN. Wraps on small screens; the arrows
   are decorative because the list order already carries the meaning. With
   `emphasis`, each step carries its colour along the spectrum. */
export function Flow({
  steps,
  label,
  emphasis = false,
  size = "md",
}: {
  steps: readonly string[];
  label: string;
  tone?: "paper" | "ink";
  emphasis?: boolean;
  size?: "md" | "lg";
}) {
  const text = size === "lg" ? "text-[13px] md:text-[15px]" : "text-[12px] md:text-[13px]";
  return (
    <ol aria-label={label} className="flex flex-wrap items-center gap-x-3 gap-y-3">
      {steps.map((s, i) => (
        <li key={`${s}-${i}`} className="flex items-center gap-3">
          <span className={`inline-flex items-center gap-2 font-mono uppercase tracking-[0.12em] ${text}`}>
            {emphasis && <span aria-hidden="true" className="w-2 h-2 shrink-0" style={{ background: spectrumStep(i, steps.length) }} />}
            {s}
          </span>
          {i < steps.length - 1 && (
            <svg aria-hidden="true" viewBox="0 0 20 8" className="w-4 h-2 opacity-40 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M0 4h18M14 1l4 3-4 3" />
            </svg>
          )}
        </li>
      ))}
    </ol>
  );
}

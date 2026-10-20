import Link from "next/link";
import { Arrow, CtaBand, Flow, HeroArt, SectionHeader, StageLadder } from "@/components/blocks";
import { GapDiagram, ModelCompare, StepTrack } from "@/components/diagrams";
import { SegmentExplorer } from "@/components/segment-explorer";
import { CAPABILITIES, IP_CHAIN, OUTGROWN, PROBLEMS, REBUILD_CHAIN } from "@/content/site-content";
import { pad } from "@/lib/brand";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Trigarty | Embedded Transformation and Building Company",
  absoluteTitle: true,
  description:
    "Trigarty works inside organizations as an extension of your team to build what's next, improve what exists and rebuild what no longer works.",
  path: "/",
});

/* From the brief: "We do not work as a traditional vendor. We do not only give
   advice. We do not only deliver reports." */
const NOT_ONLY = ["A traditional vendor.", "Only advice.", "Only reports."];

const delay = (d: number) => ({ "--d": d }) as React.CSSProperties;

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-heading" className="on-ink ink-deep relative overflow-hidden gutter pt-14 md:pt-20 lg:pt-24 pb-10 md:pb-14">
        <div className="grid-lines absolute inset-0" aria-hidden="true" />
        <HeroArt className="w-[56%]" />

        <div className="container-max relative">
          <div data-reveal>
            <p className="eyebrow">Embedded transformation and building</p>
            <h1 id="hero-heading" className="t-display text-on-ink">
              Build
              <br />
              <span className="hl">what&apos;s next.</span>
            </h1>
          </div>

          <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-8 lg:gap-16 items-end" data-reveal style={delay(2)}>
            <div>
              <p className="t-statement text-on-ink max-w-[22ch]">Not a vendor. An extension of your team.</p>
              <p className="t-lede mt-5 max-w-[52ch]">
                We work inside organizations to build what&apos;s next, improve what exists and rebuild what no longer works, across business,
                operations, growth, people, product, technology and AI.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
              <Link href="/contact" className="btn btn-spectrum sm:min-w-[15rem]">
                Start a conversation <Arrow />
              </Link>
              <Link href="/approach" className="btn btn-ghost">
                See how we work <Arrow />
              </Link>
            </div>
          </div>

          <div className="mt-16 md:mt-24 pt-6 border-t border-on-ink-line">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
              <h2 className="t-label text-on-ink">From an idea to a legacy enterprise</h2>
              <p className="t-label hidden sm:block">Seven stages we work across</p>
            </div>
            <StageLadder animate height="7.5rem" label="Seven stages we work across" />
          </div>
        </div>
      </section>

      {/* What Trigarty is */}
      <section aria-labelledby="what-heading" className="section-padding bg-background">
        <div className="container-max grid grid-cols-1 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.5fr)] gap-12 lg:gap-20 items-start">
          <div data-reveal>
            <p className="eyebrow">What Trigarty is</p>
            <h2 id="what-heading" className="sr-only">
              What Trigarty is
            </h2>
            <p className="t-label mb-4">Not</p>
            <ul aria-label="What we do not do">
              {NOT_ONLY.map((n) => (
                <li key={n} className="py-3 border-t border-border last:border-b font-serif text-[clamp(1.375rem,1.15rem+0.9vw,1.875rem)] leading-tight tracking-[-0.02em] text-foreground/55">
                  <span className="strike">{n}</span>
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal style={delay(1)}>
            <p className="t-statement text-[clamp(1.75rem,1.25rem+2vw,3rem)] leading-[1.12] max-w-[24ch]">
              An external team that works like an internal one, <span className="hl">building, upgrading and rebuilding</span> organizations so they can
              achieve what comes next.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 pt-8 border-t border-border">
              <p className="t-body">
                We find the real cause of a problem, build the solution, put it into the organization, operate it when required, and transfer ownership so
                your team carries it forward.
              </p>
              <p className="t-body">
                The range runs from turning an idea into a business to modernizing a legacy enterprise. The aim is to leave the organization stronger and more
                capable than before.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem: heading holds its place while the evidence scrolls. */}
      <section aria-labelledby="problem-heading" className="section-padding bg-card">
        <div className="container-max grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+3rem)]" data-reveal>
            <p className="eyebrow">The problem</p>
            <h2 id="problem-heading" className="t-h2 max-w-[14ch]">
              The way you work stops supporting <span className="hl">the next stage.</span>
            </h2>
            <p className="t-lede text-[1.0625rem] mt-6">
              It is rarely one department. When an organization reaches a transition point, the problem can sit across the business, the people, the technology
              and the way decisions get made.
            </p>
            <Link href="/rebuilding" className="more-link mt-6">
              When the organization needs rebuilding <Arrow />
            </Link>
          </div>

          <div>
            <p className="t-label mb-2" data-reveal>
              What has been outgrown
            </p>
            <ol>
              {OUTGROWN.map(([what, by], i) => (
                <li
                  key={what}
                  className="grid grid-cols-[2rem_1fr] gap-3 items-baseline py-5 md:py-6 border-b border-foreground/15"
                  data-reveal
                  style={delay(i)}
                >
                  <span className="t-num">{pad(i + 1)}</span>
                  <span className="font-serif font-medium text-[clamp(1.375rem,1.1rem+1.1vw,2.125rem)] leading-[1.15] tracking-[-0.025em]">
                    Their {what} <span className="text-muted">has outgrown</span> {what === "product" ? "its" : "their"} {by}.
                  </span>
                </li>
              ))}
            </ol>

            <p className="t-label mt-14 mb-4" data-reveal>
              Common signs
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10" data-reveal>
              {PROBLEMS.map((p) => (
                <li key={p} className="flex gap-3 py-3 border-t border-border text-[15px] leading-[1.5]">
                  <span aria-hidden="true" className="text-muted shrink-0">
                    —
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* The gap */}
      <section aria-labelledby="gap-heading" className="on-ink section-padding">
        <div className="container-max grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.5fr)] gap-12 lg:gap-20 items-center">
          <div data-reveal>
            <p className="eyebrow">The gap</p>
            <h2 id="gap-heading" className="t-h2 text-on-ink">
              Most providers solve <span className="hl">one part</span> of the problem.
            </h2>
            <p className="t-lede mt-6">The organization still has to connect everything. That is the gap Trigarty addresses.</p>
          </div>
          <div data-reveal style={delay(2)}>
            <GapDiagram />
          </div>
        </div>
      </section>

      {/* Difference */}
      <section aria-labelledby="difference-heading" className="section-padding bg-background">
        <div className="container-max">
          <SectionHeader
            id="difference-heading"
            eyebrow="The key difference"
            title={
              <>
                We don&apos;t just tell you what to change. <span className="hl">We build the change with you.</span>
              </>
            }
            intro={<p>Each model below is a real way of buying help. Only one stays until the change is working and owned by your team.</p>}
          />
          <div data-reveal>
            <ModelCompare />
          </div>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-2">
            <Link href="/approach" className="more-link">
              Read our approach <Arrow />
            </Link>
            <Link href="/principles" className="more-link">
              Our principles <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section aria-labelledby="capabilities-heading" className="section-padding bg-card">
        <div className="container-max">
          <SectionHeader
            id="capabilities-heading"
            eyebrow="Six core capabilities"
            title={
              <>
                <span className="hl">One team</span> across the whole organization.
              </>
            }
            intro={<p>You don&apos;t need to choose a service first. We start with the objective and bring in the capabilities it needs.</p>}
          />
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAPABILITIES.map((c, i) => (
              <li key={c.id} data-reveal style={delay(i % 3)}>
                <Link href={`/capabilities#${c.id}`} className="card-link p-7 md:p-8 min-h-[17rem]">
                  <span className="flex items-center justify-between mb-10">
                    <span aria-hidden="true" className="block h-[3px] w-10" style={{ background: c.accent }} />
                    <span className="t-num">{c.num}</span>
                  </span>
                  <h3 className="t-h3 mb-3">{c.name}</h3>
                  <p className="t-small">{c.scope}</p>
                  <span className="mt-auto pt-8 inline-flex items-center gap-2 text-[15px] font-semibold">
                    Explore <Arrow />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach */}
      <section aria-labelledby="approach-heading" className="on-ink section-padding">
        <div className="container-max">
          <SectionHeader
            id="approach-heading"
            eyebrow="How we work"
            title={
              <>
                From the real problem <span className="hl">to ownership.</span>
              </>
            }
            intro={<p>We don&apos;t stop at a strategy document. We stay through implementation, operate when required, and hand the system to your team.</p>}
          />
          <StepTrack />
          <div className="mt-14">
            <Link href="/approach" className="more-link">
              The six steps in detail <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section aria-labelledby="who-heading" className="section-padding bg-background">
        <div className="container-max">
          <SectionHeader
            id="who-heading"
            eyebrow="Who we work with"
            title={
              <>
                Where you are decides <span className="hl">where we start.</span>
              </>
            }
            intro={<p>Choose an organization type to see the stages we usually work through with it.</p>}
          />
          <div data-reveal>
            <SegmentExplorer />
          </div>
        </div>
      </section>

      {/* Rebuilding + IP engine */}
      <section aria-labelledby="rebuild-heading" className="gutter pb-6 md:pb-8 bg-background">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-4">
          <article className="on-ink relative overflow-hidden p-8 md:p-12 flex flex-col" data-reveal>
            <p className="eyebrow">Organizational rebuilding</p>
            <h2 id="rebuild-heading" className="t-h2 text-on-ink text-[clamp(1.75rem,1.3rem+1.6vw,2.625rem)] max-w-[18ch]">
              Sometimes the organization needs <span className="hl">rebuilding,</span> not another service.
            </h2>
            <p className="t-body mt-6">
              We keep what works, remove what does not, and modernize the rest. The goal is to make the organization capable of becoming what it needs to
              become.
            </p>
            <div className="mt-8 pt-6 border-t border-on-ink-line">
              <Flow steps={REBUILD_CHAIN} label="What a rebuild covers" emphasis />
            </div>
            <Link href="/rebuilding" className="more-link mt-8 self-start">
              How rebuilding works <Arrow />
            </Link>
          </article>

          <article aria-labelledby="ip-heading" className="panel p-8 md:p-12 flex flex-col" data-reveal style={delay(1)}>
            <p className="eyebrow">The IP engine</p>
            <h2 id="ip-heading" className="t-h2 text-[clamp(1.75rem,1.3rem+1.6vw,2.625rem)] max-w-[18ch]">
              Every problem we solve makes us <span className="hl">more capable.</span>
            </h2>
            <p className="t-body mt-6">
              Work for a client can also create a reusable system, new IP, a future product or a new venture. That keeps Trigarty from being a business that
              only sells hours.
            </p>
            <div className="mt-8 pt-6 border-t border-border">
              <Flow steps={IP_CHAIN} label="The Trigarty IP engine" emphasis />
            </div>
            <Link href="/ventures" className="more-link mt-8 self-start">
              The IP engine and ventures <Arrow />
            </Link>
          </article>
        </div>
      </section>

      <CtaBand showRoles />
    </>
  );
}

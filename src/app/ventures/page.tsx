import Link from "next/link";
import { Arrow, CtaBand, Flow, PageHero, SectionHeader } from "@/components/blocks";
import { IP_CHAIN, IP_OUTCOMES, LONG_TERM_CHAIN, VENTURES } from "@/content/site-content";
import { pad, spectrumSegment } from "@/lib/brand";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Ventures and IP",
  description:
    "How Trigarty turns solved problems into capability, tools and IP, and how a separate venture mechanism lets important opportunities become new businesses.",
  path: "/ventures",
});

export default function VenturesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Ventures", href: "/ventures" }]}
        eyebrow="Ventures and IP"
        title={
          <>
            Solving problems builds <span className="hl">capability, IP and ventures.</span>
          </>
        }
        lede="Every serious problem we solve makes Trigarty more capable. A separate venture mechanism allows important opportunities to become new businesses."
      >
        <Link href="/contact" className="btn btn-spectrum">
          Bring us an opportunity <Arrow />
        </Link>
        <Link href="#ventures" className="btn btn-ghost">
          Current ventures <Arrow />
        </Link>
      </PageHero>

      {/* IP engine */}
      <section aria-labelledby="ip-engine-heading" className="section-padding bg-background">
        <div className="container-max">
          <SectionHeader
            id="ip-engine-heading"
            eyebrow="The IP engine"
            title={
              <>
                Solving a problem can leave <span className="hl">more than a solution</span> behind.
              </>
            }
            intro="We start with an organization's problem and build the solution with them. What we learn is codified into tools and systems. Some of that can become IP, products and, where the opportunity is important enough, ventures."
          />

          {/* The chain as a stepped track: nine segments of the spectrum. */}
          <ol aria-label="The IP engine, from problem to ownership" className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-1.5" data-reveal>
            {IP_CHAIN.map((s, i) => (
              <li key={s} className="flex flex-col gap-3">
                <span aria-hidden="true" className="h-2" style={{ background: spectrumSegment(i, IP_CHAIN.length) }} />
                <span className="t-num">{pad(i + 1)}</span>
                <span className="font-mono text-[12px] md:text-[13px] uppercase tracking-[0.1em] font-medium">{s}</span>
              </li>
            ))}
          </ol>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] gap-10 lg:gap-20 mt-16 md:mt-24">
            <div data-reveal>
              <h3 className="t-h2 text-[clamp(1.625rem,1.3rem+1.2vw,2.25rem)] max-w-[18ch]">A client problem can create more than one outcome.</h3>
              <p className="t-body mt-5">
                The first outcome is value for the client. Alongside it, the work can produce knowledge, capability and reusable systems that make the next problem
                easier to solve.
              </p>
              <p className="t-body mt-4 text-foreground font-medium">This prevents Trigarty from becoming a pure labor-based services company.</p>
              <div className="mt-8">
                <Link href="/approach" className="more-link">
                  See how we work <Arrow />
                </Link>
              </div>
            </div>

            <ol aria-label="Outcomes a client problem can create" className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border self-start">
              {IP_OUTCOMES.map((o, i) => (
                <li
                  key={o}
                  className={`p-5 md:p-6 flex items-baseline gap-4 ${i === 0 ? "sm:col-span-2 on-ink" : "bg-surface"}`}
                  data-reveal
                  style={{ "--d": i % 2 } as React.CSSProperties}
                >
                  <span className="flex items-center gap-2 t-num shrink-0">
                    {pad(i + 1)}
                  </span>
                  <span className={`font-serif leading-snug ${i === 0 ? "text-[1.5rem] md:text-[1.75rem]" : "text-[1.125rem] md:text-[1.25rem]"}`}>{o}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Current ventures */}
      <section id="ventures" aria-labelledby="ventures-heading" className="on-ink section-padding">
        <div className="container-max">
          <SectionHeader
            id="ventures-heading"
            eyebrow="Current ventures"
            title={
              <>
                Ventures <span className="hl">in development.</span>
              </>
            }
            intro="Ventures are one mechanism, not the whole of Trigarty. When an opportunity is important enough to become its own business, it moves through a separate venture mechanism."
          />

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {VENTURES.map((v, i) => {
              const headingId = `venture-${v.id}`;
              return (
                <li key={v.id} data-reveal style={{ "--d": i } as React.CSSProperties}>
                  <article aria-labelledby={headingId} className="panel-ink relative h-full p-7 md:p-8 flex flex-col">
                    <span aria-hidden="true" className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: v.accent }} />
                    <div className="flex items-center justify-between mb-10">
                      <span className="t-num">{pad(i + 1)}</span>
                      <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-on-ink">
                        <span aria-hidden="true" className="w-1.5 h-1.5 animate-pulse" style={{ background: v.accent }} />
                        In development
                      </span>
                    </div>
                    <h3 id={headingId} className="t-h2 text-on-ink text-[clamp(1.875rem,1.5rem+1.4vw,2.625rem)]">
                      {v.name}
                    </h3>
                    <p className="t-label mt-3">{v.field}</p>
                    <p className="t-small mt-6">{v.body}</p>
                    <div className="mt-auto pt-8">
                      <p className="t-label mb-3">Trigarty&apos;s role</p>
                      <ul className="flex flex-wrap gap-1.5" aria-label={`Trigarty's role in ${v.name}`}>
                        {v.roles.map((r) => (
                          <li key={r} className="tag">
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>

          <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4" data-reveal>
            <p className="t-body">Want to work on one of these ventures?</p>
            <Link href="/join" className="more-link">
              See how to join Trigarty <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* Long-term ambition */}
      <section aria-labelledby="long-term-heading" className="section-padding bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-20 items-end" data-reveal>
            <div>
              <p className="eyebrow">Our long-term ambition</p>
              <h2 id="long-term-heading" className="t-h1 max-w-[18ch]">
                An institution that becomes <span className="hl">more capable</span> every time it solves an important problem.
              </h2>
            </div>
            <p className="t-lede">
              Trigarty is not an agency, a consultancy, an IT company, a marketing company, a venture studio or a PE firm. Those are mechanisms or capabilities.
              Trigarty builds capabilities by solving important organizational problems.
            </p>
          </div>

          <div className="panel mt-12 md:mt-16 p-6 md:p-8" data-reveal>
            <p className="t-label mb-4">How the work compounds over time</p>
            <Flow steps={LONG_TERM_CHAIN} label="How Trigarty compounds over time" emphasis size="lg" />
          </div>

          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-1">
            <Link href="/principles" className="more-link">
              Read our principles <Arrow />
            </Link>
            <Link href="/capabilities" className="more-link">
              See the six capabilities <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Bring us a problem"
        title={
          <>
            Bring us an important <span className="hl">problem or opportunity.</span>
          </>
        }
        body="Describe where you are and where you want to go. You don't need to know which service you need. We will work out what it takes to get there."
      />
    </>
  );
}

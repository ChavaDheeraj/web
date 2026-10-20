import Link from "next/link";
import { Arrow, CtaBand, Flow, PageHero, SectionHeader, StageLadder } from "@/components/blocks";
import { CAPABILITIES, REBUILD_CHAIN, STAGE_NOTES } from "@/content/site-content";
import { SectionSpy } from "@/components/section-spy";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Capabilities",
  description:
    "Six capabilities across strategy, operations, growth, organization design, technology and R&D, assembled around your objective and built with your team.",
  path: "/capabilities",
});

/* The html element already offsets anchors by the header height (scroll-padding-top). */

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Capabilities", href: "/capabilities" }]}
        eyebrow="Capabilities"
        title={
          <>
            Six capabilities across <span className="hl">the whole organization.</span>
          </>
        }
        lede="You start with the objective, not a service. We assemble the capabilities it needs, from the business model to the technology, and build the change with your team."
      >
        <Link href="/contact" className="btn btn-spectrum">
          Start a conversation <Arrow />
        </Link>
        <Link href="#stages" className="btn btn-ghost">
          See the seven stages <Arrow />
        </Link>
      </PageHero>

      <section aria-labelledby="capabilities-heading" className="section-padding bg-background">
        <div className="container-max">
          <SectionHeader
            id="capabilities-heading"
            eyebrow="Six core capabilities"
            title={
              <>
                What we can <span className="hl">build with you.</span>
              </>
            }
            intro={
              <p>
                Each capability covers a part of the organization. For each one: the problems it answers, and what we build, implement and, when required,
                operate with your team.
              </p>
            }
          />

          <div className="grid grid-cols-1 lg:grid-cols-[15rem_minmax(0,1fr)] gap-10 lg:gap-20 items-start">
            <div className="hidden lg:block sticky top-[calc(var(--header-h)+2.5rem)]">
              <p className="t-label mb-4">On this page</p>
              <SectionSpy
                label="Capabilities on this page"
                items={CAPABILITIES.map((c) => ({ id: c.id, num: c.num, label: c.name, accent: c.accent }))}
              />
              <Link href="/contact" className="btn btn-primary btn-sm mt-8 w-full">
                Start a conversation <Arrow />
              </Link>
            </div>

            <div>
              {/* Phones and tablets: a plain index instead of the sticky one. */}
              <nav aria-label="Capabilities on this page" className="lg:hidden mb-10">
                <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 border-t border-border">
                  {CAPABILITIES.map((c) => (
                    <li key={c.id} className="border-b border-border">
                      <a href={`#${c.id}`} className="flex items-center gap-3 min-h-12 py-2 text-[15px] font-medium">
                        <span aria-hidden="true" className="w-2 h-2 shrink-0" style={{ background: c.accent }} />
                        <span className="t-num">{c.num}</span>
                        {c.name}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              {CAPABILITIES.map((c, i) => (
                <article
                  key={c.id}
                  id={c.id}
                  aria-labelledby={`${c.id}-name`}
                  className={`scroll-mt-28 ${i === 0 ? "" : "mt-16 md:mt-20 pt-16 md:pt-20 border-t border-foreground/15"}`}
                  data-reveal
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span aria-hidden="true" className="h-[3px] w-12" style={{ background: c.accent }} />
                    <span className="t-num">{c.num} / 06</span>
                  </div>
                  <h3 id={`${c.id}-name`} className="t-h2">
                    {c.name}
                  </h3>
                  <p className="t-lede mt-5">{c.scope}</p>

                  <div className="grid grid-cols-1 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8 md:gap-12 mt-10">
                    <div>
                      <p className="t-label mb-3">Problems it answers</p>
                      <ul>
                        {c.answers.map((a) => (
                          <li key={a} className="flex gap-3 py-3 border-t border-border text-[16px] leading-[1.5] text-foreground/80">
                            <span aria-hidden="true" className="text-muted shrink-0">
                              —
                            </span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="panel p-6 md:p-7">
                      <p className="t-label mb-4">What we build</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                        {c.builds.map((b) => (
                          <li key={b} className="flex gap-3 py-2.5 text-[15px] leading-[1.45] font-medium">
                            <span aria-hidden="true" className="mt-[0.5em] w-1.5 h-1.5 shrink-0" style={{ background: c.accent }} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}

              <div className="mt-16 pt-8 border-t border-foreground/15 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center" data-reveal>
                <p className="t-body">
                  Every capability follows the same six steps: discover, create, implement, operate when required, transfer, and partner with specialists where
                  needed.
                </p>
                <Link href="/approach" className="more-link justify-self-start">
                  See our approach <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stages" aria-labelledby="stages-heading" className="on-ink section-padding">
        <div className="container-max">
          <SectionHeader
            id="stages-heading"
            eyebrow="Seven stages"
            title={
              <>
                Capabilities for each <span className="hl">stage of an organization.</span>
              </>
            }
            intro={
              <p>
                What changes from one stage to the next is the objective, and with it the mix of capabilities the work needs. A separate venture mechanism
                allows important opportunities to become new businesses.
              </p>
            }
          />
          <div data-reveal>
            <StageLadder notes={STAGE_NOTES} height="10rem" animate label="The seven stages" />
          </div>
          <div className="mt-12">
            <Link href="/who-we-work-with" className="more-link">
              See who we work with at each stage <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="combine-heading" className="section-padding bg-card">
        <div className="container-max grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-20 items-start">
          <div data-reveal>
            <p className="eyebrow">Working together</p>
            <h2 id="combine-heading" className="t-h2 max-w-[14ch]">
              Capabilities <span className="hl">rarely work alone.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-6" data-reveal style={{ "--d": 1 } as React.CSSProperties}>
            <p className="t-lede">
              Some problems sit inside one function. Others are structural: the business has outgrown its processes, its technology or its structure. Many
              organizations do not need another isolated service. They need to rebuild the organization around the next stage of the business.
            </p>
            <p className="t-body">For structural problems, we combine the capabilities and work across the whole chain, preserving what works and changing what does not.</p>
            <div className="panel p-5 md:p-6">
              <p className="t-label mb-4">The rebuild chain</p>
              <Flow steps={REBUILD_CHAIN} label="The organization, rebuilt in order" emphasis />
            </div>
            <Link href="/rebuilding" className="more-link self-start">
              How organizational rebuilding works <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Start with the objective"
        title={
          <>
            Bring us the problem, <span className="hl">not the service.</span>
          </>
        }
        body="Tell us where you are and where you want to go. We will work out which capabilities it takes, and build it with your team."
      />
    </>
  );
}

import Link from "next/link";
import { Arrow, CtaBand, PageHero, SectionHeader } from "@/components/blocks";
import { ModelCompare } from "@/components/diagrams";
import { FIRST_QUESTIONS, STEPS } from "@/content/site-content";
import { pad, spectrumSegment, spectrumStep } from "@/lib/brand";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "How We Work",
  description:
    "How Trigarty works: we start from your objective, find the real problem, then build, implement, operate and transfer ownership to your own team.",
  path: "/approach",
});

/* Label for each step's item list. Step 03 has no items, so it has no label. */
const ITEM_LABEL: Record<string, string> = {
  "01": "What we look at",
  "02": "What the output can be",
  "04": "Where we operate",
  "05": "What stays with you",
  "06": "Specialist areas",
};

export default function ApproachPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Approach", href: "/approach" }]}
        eyebrow="Approach"
        title={
          <>
            We start with your objective, <span className="hl">not a service menu.</span>
          </>
        }
        lede={
          <>
            You do not need to decide which service you need. You can say: &ldquo;This is where we are. This is where we want to go.&rdquo; We work out what it
            takes, then we stay to build it with your team.
          </>
        }
      >
        <Link href="/contact" className="btn btn-spectrum">
          Start a conversation <Arrow />
        </Link>
        <Link href="#steps" className="btn btn-ghost">
          The six steps <Arrow />
        </Link>
      </PageHero>

      {/* Comparison: where other models stop. */}
      <section aria-labelledby="models-heading" className="section-padding bg-background">
        <div className="container-max">
          <SectionHeader
            id="models-heading"
            eyebrow="How we differ"
            title={
              <>
                Where other models stop, <span className="hl">we keep going.</span>
              </>
            }
            intro="A consultancy studies, recommends and reports. An agency executes a brief. A technology company builds and hands over. We understand, build, implement, operate, transfer, and evolve the work with you."
          />
          <div data-reveal>
            <ModelCompare />
          </div>
        </div>
      </section>

      {/* The six steps as a vertical spectrum timeline. */}
      <section id="steps" aria-labelledby="steps-heading" className="section-padding bg-background">
        <div className="container-max">
          <SectionHeader
            id="steps-heading"
            eyebrow="How we work"
            title={
              <>
                Six steps, from the real problem to <span className="hl">an organization that owns the result.</span>
              </>
            }
            intro="The objective decides where we enter and how far we go. When it is required, we operate inside the organization, and we bring in trusted specialists where the work needs them."
          />

          <ol className="relative">
            {STEPS.map((s, i) => (
              <li key={s.num} id={s.name.toLowerCase()} className="relative grid grid-cols-[2.75rem_1fr] md:grid-cols-[4rem_1fr] gap-x-4 md:gap-x-8 scroll-mt-28">
                {/* Rail: node plus the segment of spectrum that leads to the next step. */}
                <div className="relative flex flex-col items-center" aria-hidden="true">
                  <span
                    className="relative z-10 w-11 h-11 md:w-14 md:h-14 grid place-items-center bg-ink text-on-ink font-mono text-[13px] md:text-[14px]"
                    style={{ boxShadow: `inset 0 -3px 0 ${spectrumStep(i, STEPS.length)}` }}
                  >
                    {s.num}
                  </span>
                  {i < STEPS.length - 1 && <span className="w-[2px] flex-1" style={{ background: spectrumSegment(i, STEPS.length, "180deg") }} />}
                </div>

                <div className={`panel grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-6 lg:gap-12 p-6 md:p-8 ${i < STEPS.length - 1 ? "mb-4 md:mb-6" : ""}`} data-reveal>
                  <div>
                    <h3 className="t-h2 text-[clamp(1.625rem,1.3rem+1.2vw,2.25rem)]">{s.name}</h3>
                    <p className="t-statement text-[clamp(1.125rem,1rem+0.5vw,1.375rem)] mt-3 text-muted max-w-[26ch]">{s.line}</p>
                  </div>
                  <div className="flex flex-col gap-5">
                    <p className="t-body text-foreground/80">{s.detail}</p>
                    {s.items.length > 0 && (
                      <div>
                        <p className="t-label mb-3">{ITEM_LABEL[s.num]}</p>
                        <ul aria-label={`${s.name}: ${ITEM_LABEL[s.num]}`} className="flex flex-wrap gap-1.5">
                          {s.items.map((item) => (
                            <li key={item} className="tag">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-2">
            <Link href="/capabilities" className="more-link">
              What we build across six capabilities <Arrow />
            </Link>
            <Link href="/who-we-work-with" className="more-link">
              Who we work with <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* The first conversation: questions, not a sales pitch. */}
      <section aria-labelledby="questions-heading" className="section-padding bg-card">
        <div className="container-max grid grid-cols-1 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]" data-reveal>
            <p className="eyebrow">First conversation</p>
            <h2 id="questions-heading" className="t-h2 max-w-[14ch]">
              What we <span className="hl">ask first.</span>
            </h2>
            <p className="t-body mt-6">
              In the first conversation we want to understand the objective before anyone talks about services. Some questions will have clear answers. Some
              will not yet, and that is useful to know too.
            </p>
            <div className="mt-8 flex flex-col items-start gap-1">
              <Link href="/contact" className="more-link">
                Start with your objective <Arrow />
              </Link>
              <Link href="/capabilities#stages" className="more-link">
                Find your stage <Arrow />
              </Link>
            </div>
          </div>

          <ol aria-label="Questions we ask first" className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
            {FIRST_QUESTIONS.map((q, i) => (
              <li key={q} className="bg-surface p-5 sm:p-6 flex sm:flex-col items-baseline sm:items-start gap-4 sm:gap-5" data-reveal style={{ "--d": i % 2 } as React.CSSProperties}>
                <span className="flex items-center gap-2.5 t-num shrink-0" aria-hidden="true">
                  {pad(i + 1)}
                </span>
                <span className="font-serif text-[1.25rem] md:text-[1.375rem] leading-[1.25] tracking-[-0.015em]">{q}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Transfer: the point of the work is a stronger organization, not a longer contract. */}
      <section aria-labelledby="transfer-heading" className="on-ink section-padding">
        <div className="container-max grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-20 items-end">
          <div data-reveal>
            <p className="eyebrow">Transfer</p>
            <h2 id="transfer-heading" className="t-h1 text-on-ink max-w-[16ch]">
              The goal is not <span className="hl">permanent dependency.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-6" data-reveal style={{ "--d": 1 } as React.CSSProperties}>
            <p className="t-lede">
              We document the system, build internal capability and transfer ownership to your team. When the organization needs to evolve again, the work can
              continue.
            </p>
            <p className="font-serif text-[1.25rem] text-on-ink">Not a vendor. An extension of your team.</p>
            <Link href="/principles" className="more-link self-start">
              Read our principles <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Start with the objective"
        body="You do not need to pick a service first. Describe the objective or the problem, and we will work through the first questions with you."
      />
    </>
  );
}

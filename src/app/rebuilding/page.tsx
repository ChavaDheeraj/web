import Link from "next/link";
import { PageHero, SectionHeader, CtaBand, Arrow } from "@/components/blocks";
import { HScroll } from "@/components/h-scroll";
import { CAPABILITIES, OUTGROWN, REBUILD_CHAIN, LEGACY_MOVES, SEGMENTS } from "@/content/site-content";
import { pad, spectrumSegment } from "@/lib/brand";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Organizational Rebuilding",
  description:
    "When a business outgrows its processes, structure or technology, Trigarty works inside your team to rebuild the organization around its next stage.",
  path: "/rebuilding",
});

type CapabilityId = (typeof CAPABILITIES)[number]["id"];

/* Which capability carries each link of the rebuild chain. */
const CHAIN_CAPABILITY: Record<string, CapabilityId> = {
  Business: "business-architecture",
  Structure: "organizational-design",
  People: "organizational-design",
  Processes: "organizational-infrastructure",
  Technology: "digital-infrastructure-product",
  Product: "digital-infrastructure-product",
  Growth: "commercial-growth",
};

const capabilityById = (id: CapabilityId) => CAPABILITIES.find((c) => c.id === id)!;

/* Qualitative market signals from the brief. Directions, not research findings. */
const SIGNALS = [
  "Business is moving from software adoption toward AI, automation and intelligent systems.",
  "Many established organizations still run on legacy technology and legacy processes.",
  "AI is shifting from tools that assist people toward systems that can perform work.",
  "Local capability, data control and technology ownership matter more.",
];

const legacy = SEGMENTS.find((s) => s.id === "legacy-enterprises");
const [PRESERVE, REMOVE, ...MOVES] = LEGACY_MOVES;

export default function RebuildingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Rebuilding", href: "/rebuilding" }]}
        eyebrow="Organizational rebuilding"
        title={
          <>
            Rebuild the organization around <span className="hl">its next stage.</span>
          </>
        }
        lede="Many organizations do not need another isolated service. They need to rebuild the organization around the next stage of the business. We do that work from inside, as an extension of your team."
      >
        <Link href="/contact" className="btn btn-spectrum">
          Start a conversation <Arrow />
        </Link>
        <Link href="/approach" className="btn btn-ghost">
          How we work <Arrow />
        </Link>
      </PageHero>

      {/* 1. The diagnosis */}
      <section aria-labelledby="outgrown-heading" className="section-padding bg-background">
        <div className="container-max">
          <SectionHeader
            id="outgrown-heading"
            eyebrow="The diagnosis"
            title={
              <>
                What has been <span className="hl">outgrown.</span>
              </>
            }
            intro="Rebuilding starts when the organization has changed faster than the way it is built. One of these on its own may need an upgrade. Several at once may point to something structural."
          />

          <ol className="flex flex-col">
            {OUTGROWN.map(([what, by], i) => (
              <li
                key={what}
                className="grid grid-cols-[2.5rem_1fr] md:grid-cols-[5rem_1fr] gap-x-4 items-baseline py-6 md:py-8 border-t border-border last:border-b"
                data-reveal
              >
                <span className="flex items-center gap-2 t-num">
                  {pad(i + 1)}
                </span>
                <p className="font-serif font-medium text-[clamp(1.5rem,1.05rem+2vw,2.75rem)] leading-[1.1] tracking-[-0.03em]">
                  Their {what} <span className="text-muted">may have outgrown</span> {what === "product" ? "its" : "their"} {by}.
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-16 items-center" data-reveal>
            <p className="t-lede">
              In that case, fixing one function at a time may not be enough. The organization itself needs to be rebuilt around where the business is going next.
            </p>
            <Link href="/capabilities#stages" className="more-link justify-self-start">
              Where Rebuild sits among the stages <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. The rebuild chain */}
      <section aria-labelledby="chain-heading" className="on-ink section-padding">
        <div className="container-max">
          <SectionHeader
            id="chain-heading"
            eyebrow="The scope"
            title={
              <>
                The whole organization, <span className="hl">not one function.</span>
              </>
            }
            intro="When the problem is structural, the work spans business, people, operations, technology, product and growth. We work across all of them with your team, rather than handing each one to a different provider."
          />

          <HScroll label="The rebuild chain" until="lg" cols={7} itemWidth="min(13rem, 62vw)" gap="2px" ordered>
            {REBUILD_CHAIN.map((step, i) => {
              const cap = capabilityById(CHAIN_CAPABILITY[step]);
              return (
                <li key={step} className="bg-ink border border-on-ink-line relative flex flex-col gap-6 p-5 min-h-[12rem] lg:min-h-[13rem]">
                  <span aria-hidden="true" className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: spectrumSegment(i, REBUILD_CHAIN.length) }} />
                  <span className="t-num">{pad(i + 1)}</span>
                  <h3 className="t-h3 text-on-ink">{step}</h3>
                  <Link href={`/capabilities#${cap.id}`} className="mt-auto text-[14px] leading-snug text-on-ink-muted hover:text-on-ink transition-colors">
                    <span className="sr-only">Carried by </span>
                    {cap.name} <span aria-hidden="true">→</span>
                  </Link>
                </li>
              );
            })}
          </HScroll>

          <div className="mt-12">
            <Link href="/capabilities" className="more-link">
              See all six capabilities <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Legacy enterprises */}
      <section aria-labelledby="legacy-heading" className="section-padding bg-card">
        <div className="container-max grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] gap-12 lg:gap-20">
          <div data-reveal>
            <p className="eyebrow">For legacy enterprises</p>
            <h2 id="legacy-heading" className="t-h2 max-w-[14ch]">
              Modernize <span className="hl">without losing</span> what was built.
            </h2>
            {legacy && <p className="t-lede mt-6">{legacy.line}</p>}
            <p className="t-body mt-4">In a legacy enterprise, a rebuild is a set of deliberate moves, made with the people who run the organization today.</p>
            <div className="mt-8">
              <Link href="/who-we-work-with#legacy-enterprises" className="more-link">
                How we work with legacy enterprises <Arrow />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-reveal>
              {[PRESERVE, REMOVE].map((m, i) => (
                <p key={m} className={`p-6 md:p-8 font-serif text-[clamp(1.375rem,1.1rem+1vw,1.875rem)] leading-[1.15] tracking-[-0.02em] ${i === 0 ? "on-ink" : "panel"}`}>
                  <span className="t-num block mb-6">{pad(i + 1)}</span>
                  {i === 0 ? <span className="hl">{m}</span> : m}
                </p>
              ))}
            </div>
            <ol aria-label="Further moves in a legacy rebuild" start={3} className="panel grid grid-cols-1 sm:grid-cols-2 gap-x-8 px-6 md:px-8 py-2" data-reveal>
              {MOVES.map((move, i) => (
                <li key={move} className="flex items-baseline gap-4 py-4 border-b border-border last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0">
                  <span className="t-num shrink-0 w-6">{pad(i + 3)}</span>
                  <span className="text-[16px] font-medium leading-snug">{move}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 4. The goal, as a statement */}
      <section aria-labelledby="goal-heading" className="section-padding bg-background">
        <div className="container-max grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-20 items-end">
          <div data-reveal>
            <p className="eyebrow">The goal</p>
            <h2 id="goal-heading" className="t-h1 max-w-[17ch]">
              Not to destroy the organization. To make it <span className="hl">capable</span> of what it needs to become.
            </h2>
          </div>
          <div className="flex flex-col gap-6" data-reveal style={{ "--d": 1 } as React.CSSProperties}>
            <p className="t-lede">
              That is why we build internal capability as we go and transfer ownership to your team, so that the organization is stronger and more capable
              after the work than before it.
            </p>
            <Link href="/approach#transfer" className="more-link self-start">
              How ownership is transferred <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Market context */}
      <section aria-labelledby="context-heading" className="section-padding bg-card">
        <div className="container-max">
          <SectionHeader
            id="context-heading"
            eyebrow="Why now"
            title={
              <>
                Why rebuilding <span className="hl">matters now.</span>
              </>
            }
            intro="These are directions we see in the market, not research findings. What they mean for your organization depends on where it is today, and that is where any rebuild starts."
          />
          <HScroll label="Market directions" until="xl" cols={4} itemWidth="min(18rem, 76vw)" ordered>
            {SIGNALS.map((s, i) => (
              <li key={s} className="panel relative p-6 md:p-7 flex flex-col gap-8 h-full">
                <span className="t-num">{pad(i + 1)}</span>
                <p className="font-serif text-[1.25rem] leading-[1.3] tracking-[-0.015em]">{s}</p>
              </li>
            ))}
          </HScroll>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-center" data-reveal>
            <p className="t-body">
              When AI starts to perform work rather than only assist people, an organization still running on legacy technology and processes may need more than
              a new tool. It may need to rebuild how its work, teams and systems fit together.
            </p>
            <div className="flex flex-wrap gap-x-8">
              <Link href="/capabilities#digital-infrastructure-product" className="more-link">
                AI and modernization <Arrow />
              </Link>
              <Link href="/capabilities#organizational-evolution" className="more-link">
                Organizational evolution <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Start a rebuild"
        title={
          <>
            Tell us what the organization <span className="hl">has outgrown.</span>
          </>
        }
        body="You don't need a plan or a defined scope. Describe where the organization is and where it needs to go, and we will work out with you what has to be rebuilt."
      />
    </>
  );
}

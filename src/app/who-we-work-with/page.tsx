import Link from "next/link";
import { PageHero, SectionHeader, CtaBand, Flow, Arrow } from "@/components/blocks";
import { SegmentExplorer } from "@/components/segment-explorer";
import { SEGMENTS } from "@/content/site-content";
import { pad } from "@/lib/brand";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Who We Work With",
  description:
    "Trigarty works with founders, startups, growing businesses, agencies, established organizations and legacy enterprises, at the stage each one is in.",
  path: "/who-we-work-with",
});

/* Context for each organization type, written only from the brief. Keyed by
   SEGMENTS id so the shared name, path and line stay in site-content.ts. */
const DETAIL: Record<string, { body: string[]; related: { href: string; label: string } }> = {
  founders: {
    body: [
      "An important idea needs to become a real business. We work with founders to shape the business model, build the product and the systems around it, and put them into operation.",
      "When an opportunity is important enough, a separate venture mechanism allows it to become a new business of its own.",
    ],
    related: { href: "/ventures", label: "How ventures work" },
  },
  startups: {
    body: [
      "The product needs to exist and work, and then the business needs to grow. We build products, systems and growth engines with the internal team, including AI and automation where they help.",
      "As the company grows, we build internal capability and transfer ownership, so the team runs what we built together.",
    ],
    related: { href: "/approach", label: "See how we work" },
  },
  "growing-businesses": {
    body: [
      "The organization has grown faster than its structure. Processes, systems and decisions that worked at an earlier size start to slow the business down, or the founder ends up making too many decisions.",
      "We upgrade what can be upgraded. Where the problem is structural, we rebuild the organization around its next stage.",
    ],
    related: { href: "/capabilities#organizational-infrastructure", label: "Organizational infrastructure" },
  },
  agencies: {
    body: [
      "Agencies can outgrow the business model, operations, technology and delivery system they started with. At the same time, AI is shifting from tools that assist people toward systems that can perform work.",
      "We work across all four together, rather than fixing one function in isolation.",
    ],
    related: { href: "/rebuilding", label: "Organizational rebuilding" },
  },
  "established-organizations": {
    body: [
      "Many established organizations still run on legacy technology and processes. We modernize existing systems, put existing data to better use, introduce AI where it fits and build the new capabilities the next stage requires.",
      "The work can continue as the market and the organization keep changing.",
    ],
    related: { href: "/capabilities#digital-infrastructure-product", label: "Digital infrastructure and product" },
  },
  "legacy-enterprises": {
    body: [
      "The goal is not to destroy the existing organization. We preserve what works, remove what does not, modernize legacy systems, redesign workflows and introduce AI.",
      "We also redesign teams, improve decision systems and create new capabilities, so the organization becomes capable of what it needs to become next.",
    ],
    related: { href: "/rebuilding", label: "How we rebuild organizations" },
  },
};

export default function WhoWeWorkWithPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Who We Work With", href: "/who-we-work-with" }]}
        eyebrow="Who we work with"
        title={
          <>
            From an idea <span className="hl">to a legacy enterprise.</span>
          </>
        }
        lede="We work with organizations at every stage, from founders turning an idea into a business to legacy enterprises modernizing what they have built. You don't need to decide which service you need. Tell us where you are and where you want to go."
      >
        <Link href="/contact" className="btn btn-spectrum">
          Start a conversation <Arrow />
        </Link>
        <Link href="#segment-details" className="btn btn-ghost">
          Read each type <Arrow />
        </Link>
      </PageHero>

      <section aria-labelledby="explorer-heading" className="section-padding bg-background">
        <div className="container-max">
          <SectionHeader
            id="explorer-heading"
            eyebrow="Organization types"
            title={
              <>
                Choose where your organization <span className="hl">is today.</span>
              </>
            }
            intro={<p>Select an organization type to see its path across the seven stages. Each path is a starting point, not a fixed program.</p>}
          />
          <div data-reveal>
            <SegmentExplorer />
          </div>
        </div>
      </section>

      <section id="segment-details" aria-labelledby="details-heading" className="section-padding bg-card scroll-mt-24">
        <div className="container-max">
          <SectionHeader
            id="details-heading"
            eyebrow="In detail"
            title={
              <>
                Six organization types, <span className="hl">six starting points.</span>
              </>
            }
            intro={
              <p>
                If your organization fits more than one description, start with where it is now. The work can continue as the organization evolves.
              </p>
            }
          />

          <ol className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {SEGMENTS.map((s, i) => {
              const d = DETAIL[s.id];
              return (
                <li key={s.id} id={s.id} className="panel relative scroll-mt-28 p-7 md:p-10 flex flex-col" data-reveal style={{ "--d": i % 2 } as React.CSSProperties}>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <h3 className="t-h2 text-[clamp(1.625rem,1.3rem+1.2vw,2.25rem)]">{s.name}</h3>
                    <span className="t-num pt-2">{pad(i + 1)}</span>
                  </div>
                  <div className="pb-6 mb-6 border-b border-border">
                    <Flow steps={s.path} label={`Stage path for ${s.name}`} emphasis />
                  </div>
                  <p className="t-statement text-[clamp(1.125rem,1rem+0.5vw,1.375rem)] max-w-[34ch]">{s.line}</p>
                  {d?.body.map((para) => (
                    <p key={para} className="t-body mt-4">
                      {para}
                    </p>
                  ))}
                  <div className="mt-auto pt-8 flex flex-wrap gap-x-8 gap-y-1">
                    {d && (
                      <Link href={d.related.href} className="more-link">
                        {d.related.label} <Arrow />
                      </Link>
                    )}
                    <Link href="/contact" className="more-link">
                      Talk to us<span className="sr-only"> about {s.name.toLowerCase()}</span> <Arrow />
                    </Link>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <CtaBand
        eyebrow="Start here"
        title={
          <>
            &ldquo;This is where we are. <span className="hl">This is where we want to go.</span>&rdquo;
          </>
        }
        body="That is enough to begin. You don't need to know which organization type fits or which service you need. Describe the objective or the problem, and we will work out the stage and what it takes to get there."
      />
    </>
  );
}

import Link from "next/link";
import { Arrow, CtaBand, Flow, PageHero, SectionHeader } from "@/components/blocks";
import { DIFFERENTIATORS, IP_OUTCOMES, LONG_TERM_CHAIN, MODELS, NOT_LIST } from "@/content/site-content";
import { pad } from "@/lib/brand";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Principles",
  description:
    "Trigarty works as an extension of your team, not as a vendor. See what makes us different, what we are not, and the institution we are building.",
  path: "/principles",
});

/* The vendor pattern from the brief, set against Trigarty's own model from site-content. */
const VENDOR_FLOW = ["Brief", "Deliver", "Leave"];
const OUR_FLOW = MODELS.find((m) => m.name === "Trigarty")?.flow ?? [];

/* Where each difference is explained in full elsewhere on the site. */
const ROW_LINKS: Record<string, { href: string; label: string }> = {
  "02": { href: "/capabilities", label: "The six capabilities" },
  "03": { href: "/rebuilding", label: "Organizational rebuilding" },
  "04": { href: "/approach", label: "How the work runs" },
  "05": { href: "/capabilities#stages", label: "The stages we work across" },
  "06": { href: "/ventures", label: "Ventures" },
};

/* NOT_LIST items read "An agency."; lower-case the article so each row reads "Not an agency." */
const lowerFirst = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);

export default function PrinciplesPage() {
  const [first, ...rest] = DIFFERENTIATORS;
  return (
    <>
      <PageHero
        crumbs={[{ name: "Principles", href: "/principles" }]}
        eyebrow="Principles"
        title={
          <>
            Not a vendor. <span className="hl">An extension of your team.</span>
          </>
        }
        lede="We don't just tell organizations what to change. We work with them to build the change."
      >
        <Link href="/approach" className="btn btn-spectrum">
          See how we work <Arrow />
        </Link>
        <Link href="/contact" className="btn btn-ghost">
          Start a conversation <Arrow />
        </Link>
      </PageHero>

      {/* Positioning statement */}
      <section aria-labelledby="definition-heading" className="section-padding bg-background">
        <div className="container-max grid grid-cols-1 lg:grid-cols-[minmax(0,18rem)_1fr] gap-8 lg:gap-16">
          <div data-reveal>
            <p className="eyebrow">Definition</p>
            <h2 id="definition-heading" className="sr-only">
              What Trigarty is
            </h2>
          </div>
          <div data-reveal>
            <p className="t-statement text-[clamp(1.625rem,1.2rem+1.8vw,2.75rem)] max-w-[28ch]">
              An embedded transformation and building company that works as an extension of organizations to{" "}
              <span className="hl">build what&apos;s next,</span> improve what exists, and rebuild what no longer works.
            </p>
            <dl className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
              {[
                ["Motto", "Build what's next."],
                ["Operating principle", "Not a vendor. An extension of your team."],
                ["Purpose", "To help organizations become capable of what they need to become next."],
              ].map(([k, v]) => (
                <div key={k} className="bg-surface p-6">
                  <dt className="t-label mb-3">{k}</dt>
                  <dd className="text-[16px] leading-[1.5] font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Six differences */}
      <section aria-labelledby="differences-heading" className="section-padding bg-card">
        <div className="container-max">
          <SectionHeader
            id="differences-heading"
            eyebrow="What makes us different"
            title={
              <>
                Six commitments behind <span className="hl">the way we work.</span>
              </>
            }
            intro="An external team that works like an internal one. Each of these changes what you can expect from us."
          />

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="md:col-span-2 on-ink relative p-7 md:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16" data-reveal>
              <div>
                <span className="t-num">{first.num}</span>
                <h3 className="t-h2 text-on-ink mt-6 text-[clamp(1.75rem,1.35rem+1.6vw,2.75rem)]">
                  We are <span className="hl">not a vendor.</span>
                </h3>
                <p className="t-body mt-5">{first.body}</p>
              </div>
              <dl className="flex flex-col gap-3 self-end">
                <div className="panel-ink p-5">
                  <dt className="t-label mb-3">A vendor</dt>
                  <dd className="text-on-ink-muted">
                    <Flow steps={VENDOR_FLOW} label="How a vendor works" />
                  </dd>
                </div>
                <div className="g-border p-5">
                  <dt className="t-label mb-3 text-on-ink">Trigarty</dt>
                  <dd>
                    <Flow steps={OUR_FLOW} label="How Trigarty works" emphasis />
                  </dd>
                </div>
              </dl>
            </li>

            {rest.map((d, i) => {
              const link = ROW_LINKS[d.num];
              return (
                <li
                  key={d.num}
                  className={`panel relative p-7 md:p-10 flex flex-col ${rest.length % 2 === 1 && i === rest.length - 1 ? "md:col-span-2" : ""}`}
                  data-reveal
                  style={{ "--d": i % 2 } as React.CSSProperties}
                >
                  <span className="t-num">{d.num}</span>
                  <h3 className="t-h3 text-[clamp(1.375rem,1.2rem+0.7vw,1.75rem)] mt-6 max-w-[24ch]">{d.title}</h3>
                  <p className="t-body mt-4">{d.body}</p>
                  {link && (
                    <Link href={link.href} className="more-link self-start mt-auto pt-6">
                      {link.label} <Arrow />
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* What we are not */}
      <section aria-labelledby="not-heading" className="on-ink section-padding">
        <div className="container-max grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-end">
          <div data-reveal>
            <p className="eyebrow">Positioning</p>
            <h2 id="not-heading" className="sr-only">
              What we are not
            </h2>
            <ul aria-label="What Trigarty is not">
              {NOT_LIST.map((item) => (
                <li key={item} className="flex items-baseline gap-5 py-2 md:py-3 border-b border-on-ink-line">
                  <span className="t-label w-10 shrink-0">Not</span>
                  <span
                    className="font-serif font-medium text-[clamp(1.75rem,1.3rem+2vw,3rem)] leading-[1.1] tracking-[-0.03em] text-on-ink/85
                               bg-no-repeat bg-[length:100%_3px] bg-[position:0_58%]"
                    style={{ backgroundImage: "var(--spectrum)" }}
                  >
                    {lowerFirst(item)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6" data-reveal style={{ "--d": 1 } as React.CSSProperties}>
            <p className="t-statement text-on-ink max-w-[20ch]">Those are mechanisms or capabilities.</p>
            <p className="t-lede">
              Trigarty builds <span className="hl">capabilities</span> by solving important organizational problems.
            </p>
            <p className="t-body">
              Some of what we build is strategy, some is software, some is a team structure or a growth system. The output depends on the problem, not on a
              service menu, and you do not need to decide in advance which kind of firm you need.
            </p>
            <div className="flex flex-wrap gap-x-8">
              <Link href="/capabilities" className="more-link">
                See the six capabilities <Arrow />
              </Link>
              <Link href="/who-we-work-with" className="more-link">
                Who we work with <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Long-term ambition */}
      <section aria-labelledby="becoming-heading" className="section-padding bg-background">
        <div className="container-max grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20">
          <div data-reveal>
            <p className="eyebrow">What we are becoming</p>
            <h2 id="becoming-heading" className="t-h2 max-w-[20ch]">
              An institution that becomes <span className="hl">more capable</span> every time it solves an important problem.
            </h2>
            <p className="t-lede mt-6">
              Every serious problem we solve should leave the client stronger, and it should make Trigarty more capable. Over time, the work is meant to
              compound:
            </p>
            <div className="panel mt-8 p-5 md:p-6">
              <Flow steps={LONG_TERM_CHAIN} label="How solved problems compound over time" emphasis />
            </div>
          </div>

          <div className="flex flex-col gap-6" data-reveal style={{ "--d": 1 } as React.CSSProperties}>
            <h3 className="t-label">What one client problem can create</h3>
            <ol className="panel px-6 py-2">
              {IP_OUTCOMES.map((o, i) => (
                <li key={o} className="flex items-baseline gap-4 py-3.5 border-b border-border last:border-b-0">
                  <span className="t-num w-6 shrink-0">{pad(i + 1)}</span>
                  <span className="font-serif text-[1.125rem]">{o}</span>
                </li>
              ))}
            </ol>
            <p className="t-body">
              This keeps Trigarty from becoming a pure labor-based services company. When an opportunity is important enough to become a business of its own, a
              separate venture mechanism exists for it.
            </p>
            <Link href="/ventures" className="more-link self-start">
              See the ventures <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Work with us"
        title={
          <>
            Work with a team that <span className="hl">builds the change with you.</span>
          </>
        }
        body="You do not need to decide which service you need. Tell us where you are and where you want to go, and we will work out with you what it takes to get there."
      />
    </>
  );
}

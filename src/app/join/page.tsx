import Link from "next/link";
import { Arrow, PageHero } from "@/components/blocks";
import { IconGraphic } from "@/components/logo";
import { VENTURES } from "@/content/site-content";
import { SITE, mailto } from "@/lib/site";
import { pad } from "@/lib/brand";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Join the team",
  description:
    "Open roles at Trigarty across business, operations, product, engineering and two ventures. Most are open to anyone who can show the skill and the thinking.",
  path: "/join",
});

type Role = { title: string; desc: string };
type Track = {
  id: string;
  eyebrow: string;
  label: string;
  accent: string;
  desc: string;
  venture?: string;
  roles: Role[];
};

const ventureBody = (id: string) => VENTURES.find((v) => v.id === id)?.body ?? "";

/* Role lists supplied by Trigarty. Copy rewritten in the house style; titles kept as given. */
const TRACKS: Track[] = [
  {
    id: "business-operations",
    eyebrow: "Core team",
    label: "Business and operations",
    accent: "#4BC5C7",
    desc: "The people who run the business side of Trigarty, our client work and the ventures we build: strategy, growth, brand, finance and the operations in between.",
    roles: [
      { title: "Business Development", desc: "Identify, qualify and close new client relationships and partnerships. You know how to build a pipeline and see it through." },
      { title: "Operations & Execution", desc: "Own the internal operating rhythm: the systems, workflows and cross-functional coordination that keep the work moving." },
      { title: "Community & Partnerships", desc: "Build and manage communities and partner networks across Trigarty and its ventures. Relationships that grow in value over time." },
      { title: "Go-To-Market Engineering", desc: "Design and run go-to-market strategies, from positioning to launch sequencing. You think in campaigns and conversion loops." },
      { title: "Growth & Marketing", desc: "Drive acquisition and retention across channels. You build repeatable growth systems, not one-off campaigns." },
      { title: "Content & Communications", desc: "Shape how Trigarty and its ventures communicate: editorial, brand voice, published thinking and external messaging." },
      { title: "Finance & Legal", desc: "Handle the financial infrastructure and legal coordination that keep engagements clean, compliant and able to scale." },
      { title: "People & Talent", desc: "Build and manage hiring pipelines across Trigarty and its ventures. You know how to spot capable operators wherever they are." },
      { title: "Data & Research", desc: "Turn information into decisions: market research, competitive intelligence and structured data for strategic use." },
    ],
  },
  {
    id: "product-engineering",
    eyebrow: "Core team",
    label: "Product and engineering",
    accent: "#4DC2B1",
    desc: "Builders, designers and engineers who work on Trigarty's internal tools, the systems we build with clients and our ventures, at the product and systems layer.",
    roles: [
      { title: "Product & Design", desc: "Technical and non-technical product ownership: roadmaps, UX, design systems and steady shipping across the products we build." },
      { title: "Data & Research", desc: "Data engineering, analytics infrastructure and research systems. You make data usable and ready for decisions." },
      { title: "Frontend Development", desc: "Build fast, polished, production-ready interfaces across web and mobile, with a strong eye for craft and detail." },
      { title: "Backend & Systems Development", desc: "Design and build backend infrastructure that scales: APIs, services, databases and system integrations." },
    ],
  },
  {
    id: "aiden",
    eyebrow: "Embedded in Aiden",
    label: "AI ecosystem and architecture",
    accent: "#63B7C9",
    venture: "Aiden",
    desc: ventureBody("aiden"),
    roles: [
      { title: "AI & Machine Learning Engineer", desc: "Design and train models for on-device and hybrid inference. A deep understanding of LLM architecture, fine-tuning and deployment pipelines." },
      { title: "On-Device AI / Edge Computing Engineer", desc: "Optimize AI models to run efficiently on local hardware with minimal latency. Experience with quantization, ONNX, TFLite or similar." },
      { title: "OS Architecture Engineer", desc: "Custom kernel and OS-level work on Linux-based systems. Deep knowledge of system internals, driver development and hardware-software integration." },
    ],
  },
  {
    id: "project-xr",
    eyebrow: "Embedded in Project XR",
    label: "AR, VR and spatial computing",
    accent: "#5CC697",
    venture: "Project XR",
    desc: ventureBody("project-xr"),
    roles: [
      { title: "AR / VR & Spatial Computing Engineer", desc: "Build spatial experiences across mobile, AR glasses and VR headsets. A strong grasp of spatial anchoring, cross-device sync and XR SDKs." },
      { title: "3D Environment Artist", desc: "Create the digital world layers: 3D assets, environment design and the visual systems that sit on top of the real world." },
      { title: "Shader / Graphics Engineer", desc: "Write high-performance shaders and graphics pipelines for real-time spatial rendering. Experience with WebGPU, Metal or Vulkan preferred." },
      { title: "Location & Geospatial Engineer", desc: "Build and maintain location-aware systems: spatial anchoring, geofencing, map integrations and location accuracy pipelines." },
    ],
  },
];

const GENERAL_APPLICATION = mailto(
  "General application",
  "Hi Trigarty team,\n\nRole I'm interested in:\n\nWhat I've built or done:\n\nWhy Trigarty:\n\nLinks to my work or CV:\n",
  SITE.careersEmail,
);

const roleApplication = (role: string, track: string) =>
  mailto(
    `Application: ${role}`,
    `Hi Trigarty team,\n\nRole: ${role} (${track})\n\nWhat I've built or done:\n\nWhy this role at Trigarty:\n\nLinks to my work or CV:\n`,
    SITE.careersEmail,
  );

const totalRoles = TRACKS.reduce((n, t) => n + t.roles.length, 0);

export default function JoinPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Join", href: "/join" }]}
        eyebrow="Join the team"
        title={
          <>
            Join the team that <span className="hl">builds inside organizations.</span>
          </>
        }
        lede="In most cases, our roles are open to anyone who can demonstrate the skill and the thinking, regardless of background, title or years of experience. We care about what you can actually do."
      >
        <a href={GENERAL_APPLICATION} className="btn btn-spectrum">
          Send a general application <Arrow />
        </a>
        <a href="#tracks" className="btn btn-ghost">
          See {totalRoles} open roles <Arrow />
        </a>
      </PageHero>

      {/* Overview: why the roles span so many functions, and an index of the tracks. */}
      <section id="tracks" aria-labelledby="tracks-heading" className="section-padding bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,26rem)] gap-6 lg:gap-16 items-end mb-12 md:mb-16" data-reveal>
            <div>
              <p className="eyebrow">Open roles</p>
              <h2 id="tracks-heading" className="t-h2 max-w-[16ch]">
                Four tracks across <span className="hl">the work we do.</span>
              </h2>
            </div>
            <div className="t-body">
              <p>
                We work across business, organization, technology, product and growth, so the team does too. Two tracks sit in the core team. Two are embedded in{" "}
                <Link href="/ventures" className="text-link text-foreground">
                  ventures we are building
                </Link>
                .
              </p>
            </div>
          </div>

          <nav aria-label="Role tracks">
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {TRACKS.map((t, i) => (
                <li key={t.id} data-reveal style={{ "--d": i } as React.CSSProperties}>
                  <a href={`#${t.id}`} className="card-link p-6 min-h-[12rem]">
                    <span className="flex items-center justify-between mb-auto">
                      <span aria-hidden="true" className="block h-[3px] w-10" style={{ background: t.accent }} />
                      <span className="t-num">{pad(i + 1)}</span>
                    </span>
                    <span className="t-label mt-8 mb-2">{t.eyebrow}</span>
                    <span className="t-h3">{t.label}</span>
                    <span className="mt-4 font-mono text-[12px] uppercase tracking-[0.14em] inline-flex items-center gap-2">
                      {t.roles.length} roles
                      <span aria-hidden="true">↓</span>
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      {/* One section per track: heading and context on the left, role cards on the right. */}
      {TRACKS.map((t, ti) => {
        const headingId = `${t.id}-heading`;
        return (
          <section key={t.id} id={t.id} aria-labelledby={headingId} className={`section-padding scroll-mt-16 ${ti % 2 === 0 ? "bg-card" : "bg-background"}`}>
            <div className="container-max grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-10 lg:gap-16">
              <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:self-start" data-reveal>
                <div className="h-[3px] w-12 mb-6" style={{ background: t.accent }} aria-hidden="true" />
                <p className="t-label mb-3">
                  {pad(ti + 1)} · {t.eyebrow}
                </p>
                <h2 id={headingId} className="t-h2 text-[clamp(1.75rem,1.35rem+1.6vw,2.75rem)] max-w-[14ch]">
                  {t.label}
                </h2>
                <p className="t-body mt-5">{t.desc}</p>
                {t.venture ? (
                  <Link href="/ventures" className="more-link mt-6">
                    About {t.venture} <Arrow />
                  </Link>
                ) : (
                  <Link href="/capabilities" className="more-link mt-6">
                    See what we build <Arrow />
                  </Link>
                )}
              </div>

              <ol className="panel">
                {t.roles.map((role, ri) => (
                  <li
                    key={role.title}
                    className="grid grid-cols-[2rem_minmax(0,1fr)] sm:grid-cols-[2.5rem_minmax(0,1fr)_auto] gap-x-4 sm:gap-x-6 gap-y-4 px-5 py-6 md:px-8 md:py-7 border-b border-border last:border-b-0 hover:bg-background/60 transition-colors"
                    data-reveal
                  >
                    <span className="t-num pt-1">{pad(ri + 1)}</span>
                    <div className="min-w-0">
                      <h3 className="t-h3 text-[1.1875rem] md:text-[1.3125rem]">{role.title}</h3>
                      <p className="t-small mt-2 max-w-[58ch]">{role.desc}</p>
                    </div>
                    <a href={roleApplication(role.title, t.label)} className="btn btn-ghost btn-sm col-start-2 sm:col-start-auto justify-self-start sm:self-center">
                      Apply
                      <span className="sr-only">
                        {" "}
                        for {role.title}, {t.label}
                      </span>
                      <Arrow />
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        );
      })}

      {/* How we work: context for candidates before they apply. */}
      <section aria-labelledby="how-we-work-heading" className="section-padding bg-card">
        <div className="container-max grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-end">
          <div data-reveal>
            <p className="eyebrow">Before you apply</p>
            <h2 id="how-we-work-heading" className="t-h2 max-w-[18ch]">
              Not a vendor. <span className="hl">An extension of the team.</span>
            </h2>
            <p className="t-body mt-6">
              We do not only give advice, and we do not only deliver reports. We work inside organizations to find the real cause of a problem, build the
              solution, implement it, build internal capability and transfer ownership. In the core team, that is the work you would be part of. In a venture
              track, you bring the same way of working to building that venture.
            </p>
          </div>
          <ul className="flex flex-col gap-2" data-reveal style={{ "--d": 1 } as React.CSSProperties}>
            {[
              { href: "/principles", label: "Read our principles" },
              { href: "/approach", label: "See how an engagement runs" },
              { href: "/ventures", label: "Explore our ventures" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="card-link flex-row items-center justify-between min-h-16 px-6 py-4 font-serif text-[1.2rem]">
                  {l.label}
                  <span aria-hidden="true" className="text-muted">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing: the open application, as an ink panel. */}
      <section aria-labelledby="open-application-heading" className="gutter py-16 md:py-24 bg-background">
        <div className="container-max">
          <div className="on-ink relative overflow-hidden px-6 py-12 sm:px-10 md:px-14 md:py-16 lg:px-20 lg:py-20" data-reveal>
            <div className="spectrum absolute top-0 inset-x-0 h-[3px]" aria-hidden="true" />
            <IconGraphic className="absolute right-[-30%] bottom-[-45%] w-[90%] md:w-[44%] pointer-events-none" fillOpacity={0.06} strokeOpacity={0.3} />
            <div className="relative grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-20 items-end">
              <div>
                <p className="eyebrow">Don&apos;t see your role?</p>
                <h2 id="open-application-heading" className="t-h2 text-on-ink max-w-[18ch]">
                  If you can help us build, <span className="hl">tell us how.</span>
                </h2>
                <p className="t-lede mt-6">
                  We are open to people with real skill in any function that helps organizations build, improve or rebuild what they need next, even if it is not
                  listed above. Send a note explaining what you do and how it fits.
                </p>
              </div>
              <div className="flex flex-col gap-3 w-full lg:max-w-sm lg:justify-self-end">
                <a href={GENERAL_APPLICATION} className="btn btn-spectrum">
                  Send a general application <Arrow />
                </a>
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  Message us on WhatsApp
                  <span className="sr-only"> (opens in a new tab)</span>
                  <Arrow />
                </a>
                <a
                  href={`mailto:${SITE.careersEmail}`}
                  className="inline-flex items-center min-h-11 mt-3 pt-4 border-t border-on-ink-line font-mono text-[13px] text-on-ink-muted hover:text-on-ink break-all"
                >
                  {SITE.careersEmail}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { Arrow, PageHero } from "@/components/blocks";
import { FIRST_QUESTIONS } from "@/content/site-content";
import { pad } from "@/lib/brand";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { ContactForm } from "./contact-form";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Tell Trigarty where your organization is now and where it needs to go. Email, call, WhatsApp or use the form. Based in Hyderabad, India.",
  path: "/contact",
});

const DIRECT = [
  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { label: "Phone", value: SITE.phoneDisplay, href: `tel:${SITE.phoneE164}` },
  { label: "WhatsApp", value: `Message ${SITE.phoneDisplay}`, href: SITE.whatsapp, external: true },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Contact", href: "/contact" }]}
        eyebrow="Start a conversation"
        title={
          <>
            This is where we are. <span className="hl">This is where we want to go.</span>
          </>
        }
        lede="That is all you need to tell us. You don't have to know which service you need. We will work out with you what it takes to get there."
      />

      <section aria-labelledby="form-heading" className="section-padding bg-background">
        <div className="container-max grid grid-cols-1 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] gap-6 lg:gap-8 items-start">
          <div className="panel relative p-6 sm:p-8 md:p-12 min-w-0" data-reveal>
            <span aria-hidden="true" className="spectrum absolute top-0 inset-x-0 h-[3px]" />
            <p className="eyebrow">The form</p>
            <h2 id="form-heading" className="t-h2 text-[clamp(1.75rem,1.35rem+1.6vw,2.5rem)] mb-8">
              Send us a message
            </h2>
            <ContactForm />
          </div>

          <div className="flex flex-col gap-6 min-w-0 lg:sticky lg:top-[calc(var(--header-h)+1.5rem)]" data-reveal style={{ "--d": 1 } as React.CSSProperties}>
            <div className="on-ink p-6 md:p-8">
              <h2 id="direct-heading" className="t-h3 text-on-ink mb-5">
                Prefer to talk directly?
              </h2>
              <ul className="flex flex-col gap-2">
                {DIRECT.map((d) => (
                  <li key={d.label}>
                    <a
                      href={d.href}
                      {...(d.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex items-center justify-between gap-4 min-h-16 px-4 py-3 border border-on-ink-line hover:border-on-ink/40 transition-colors"
                    >
                      <span className="flex flex-col min-w-0">
                        <span className="t-label">{d.label}</span>
                        <span className="text-[15px] text-on-ink break-all">
                          {d.value}
                          {d.external && <span className="sr-only"> (opens in a new tab)</span>}
                        </span>
                      </span>
                      <span aria-hidden="true" className="text-on-ink-muted group-hover:text-on-ink group-hover:translate-x-1 transition-[transform,color]">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[14px] text-on-ink-muted">
                Based in {SITE.city}, {SITE.region}, India.
              </p>
            </div>

            <div className="panel p-6 md:p-8">
              <h2 className="t-h3 mb-3">What we will ask you</h2>
              <p className="t-small mb-5">In a first conversation we work through questions like these, so it helps to have them in mind.</p>
              <ol>
                {FIRST_QUESTIONS.slice(0, 5).map((q, i) => (
                  <li key={q} className="flex items-baseline gap-3 py-3 border-t border-border text-[15px]">
                    <span className="t-num w-5 shrink-0">{pad(i + 1)}</span>
                    {q}
                  </li>
                ))}
              </ol>
              <Link href="/approach" className="more-link mt-4">
                How we work after that <Arrow />
              </Link>
            </div>

            <div className="g-border bg-surface p-6 md:p-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row sm:items-center lg:items-start xl:items-center justify-between gap-4">
              <div>
                <h2 className="t-h3">Looking for a role?</h2>
                <p className="t-small mt-1">Applications go to a separate inbox.</p>
              </div>
              <Link href="/join" className="btn btn-primary btn-sm shrink-0">
                Open roles <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

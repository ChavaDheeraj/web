import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SITE_URL } from "@/lib/site";

type Crumb = { name: string; href: string };

/* BreadcrumbList schema, plus an optional visible trail. Home is prepended
   automatically; pass the trail from the first inner level down to the current page.
   The site is two levels deep and the nav marks the current page, so the page
   hero publishes the trail as data only. */
export function Breadcrumbs({ items, visible = false }: { items: Crumb[]; visible?: boolean }) {
  const trail: Crumb[] = [{ name: "Home", href: "/" }, ...items];
  return (
    <>
      {visible && (
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 font-mono text-[12px] uppercase tracking-[0.12em] text-on-ink-muted">
            {trail.map((c, i) => {
              const last = i === trail.length - 1;
              return (
                <li key={c.href} className="flex items-center gap-2">
                  {last ? (
                    <span aria-current="page" className="text-on-ink">
                      {c.name}
                    </span>
                  ) : (
                    <>
                      <Link href={c.href} className="inline-flex items-center min-h-11 hover:text-on-ink transition-colors">
                        {c.name}
                      </Link>
                      <span aria-hidden="true" className="opacity-50">
                        /
                      </span>
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      )}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            item: `${SITE_URL}${c.href === "/" ? "/" : c.href}`,
          })),
        }}
      />
    </>
  );
}

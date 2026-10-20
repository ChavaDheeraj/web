"use client";

import { useEffect, useState } from "react";

type Item = { id: string; num: string; label: string; accent: string };

/* Sticky in-page index that marks the section currently being read. Plain anchor
   links underneath, so it works without JS and with the keyboard. */
export function SectionSpy({ items, label }: { items: Item[]; label: string }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav aria-label={label}>
      <ol className="flex flex-col">
        {items.map((i) => {
          const on = i.id === active;
          return (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                aria-current={on ? "location" : undefined}
                className={`relative flex items-baseline gap-3 py-2.5 pl-4 text-[15px] leading-snug transition-colors ${
                  on ? "text-foreground font-semibold" : "text-muted hover:text-foreground"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-2 bottom-2 w-[3px] transition-opacity duration-300"
                  style={{ background: i.accent, opacity: on ? 1 : 0.18 }}
                />
                <span className="t-num">{i.num}</span>
                {i.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

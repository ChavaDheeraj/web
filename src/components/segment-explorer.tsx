"use client";

import Link from "next/link";
import { useState } from "react";
import { Flow } from "@/components/blocks";
import { StageLadder } from "@/components/stage-ladder";
import { SEGMENTS } from "@/content/site-content";
import { pad } from "@/lib/brand";

/* Pick an organization type and the stage climb lights the path we usually work
   through with it. The motion here is the explanation: which stages apply. */
export function SegmentExplorer() {
  const [active, setActive] = useState(0);
  const seg = SEGMENTS[active];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[19rem_1fr] gap-8 lg:gap-12 items-stretch">
      <div role="group" aria-label="Choose an organization type" className="grid grid-cols-2 lg:grid-cols-1 gap-1.5 content-start">
        {SEGMENTS.map((s, i) => (
          <button
            key={s.id}
            type="button"
            aria-pressed={i === active}
            onClick={() => setActive(i)}
            className="group relative flex items-center gap-4 min-h-14 px-3 sm:px-4 py-3 text-left border border-border bg-surface/60
                       text-muted hover:text-foreground hover:bg-surface aria-pressed:text-foreground aria-pressed:bg-surface aria-pressed:border-foreground/25 transition-colors"
          >
            <span className="t-num hidden sm:inline">{pad(i + 1)}</span>
            <span className="font-serif text-[1rem] sm:text-[1.125rem] leading-tight flex-1">{s.name}</span>
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0 group-aria-pressed:scale-y-100 origin-top transition-transform duration-300"
              style={{ backgroundImage: "linear-gradient(180deg,#4BC5C7,#A4BE4B,#E9A400)" }}
            />
          </button>
        ))}
      </div>

      <div className="panel p-6 md:p-10 flex flex-col">
        <div aria-live="polite" className="mb-8 md:mb-10">
          <p className="t-label mb-4">{seg.name}</p>
          <p className="t-statement max-w-[24ch]">{seg.line}</p>
          <div className="mt-5">
            <Flow steps={seg.path} label={`Stage path for ${seg.name}`} emphasis />
          </div>
        </div>
        <div className="mt-auto">
          <StageLadder highlight={seg.path} height="9rem" label={`The seven stages, with ${seg.name.toLowerCase()} highlighted`} />
        </div>
        <div className="mt-8 pt-5 border-t border-border">
          <Link href={`/who-we-work-with#${seg.id}`} className="more-link">
            More on {seg.name.toLowerCase()} <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

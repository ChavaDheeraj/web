"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";

type Breakpoint = "md" | "lg" | "xl";

/* Tailwind needs literal class names, so the controls' hide class is looked up. */
const HIDE_AT: Record<Breakpoint | "always", string> = { md: "md:hidden", lg: "lg:hidden", xl: "xl:hidden", always: "" };

/* Horizontal scroller for a row of cards, snapping card by card, with a spectrum
   progress bar and previous/next buttons beneath it. Native scrolling throughout:
   touch, trackpad, shift+wheel, and arrow keys once the track has focus.

   until:  "always" scrolls at every width; "md" | "lg" | "xl" scrolls below that
           breakpoint and becomes a `cols`-column grid from it.
   bleed:  "gutter" (default) sits inside .container-max and bleeds over the page
           gutters; "viewport" sits outside any container and runs to the right edge
           while starting in line with the container.
   Children must be <li> elements. Colours follow the surrounding text colour, so it
   works on paper and on ink. Layout rules live under .hscroll in globals.css. */
export function HScroll({
  label,
  children,
  until = "always",
  cols = 3,
  itemWidth = "min(34rem, 84vw)",
  bleed = "gutter",
  ordered = false,
  gap = "1rem",
  rowGap,
}: {
  label: string;
  children: React.ReactNode;
  until?: Breakpoint | "always";
  cols?: number;
  itemWidth?: string;
  bleed?: "gutter" | "viewport";
  ordered?: boolean;
  gap?: string;
  rowGap?: string;
}) {
  const id = useId();
  const trackRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({ progress: 0, thumb: 1, atStart: true, atEnd: false });

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setState({
      progress: max > 0 ? el.scrollLeft / max : 0,
      thumb: el.scrollWidth > 0 ? Math.min(1, el.clientWidth / el.scrollWidth) : 1,
      atStart: el.scrollLeft <= 2,
      atEnd: el.scrollLeft >= max - 2,
    });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };
    measure();
    el.addEventListener("scroll", onScroll, { passive: true });
    // Re-measure when the track or its content resizes (breakpoints, fonts loading).
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    if (el.firstElementChild) ro.observe(el.firstElementChild);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, [measure]);

  const step = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(":scope > * > li");
    const distance = card ? card.getBoundingClientRect().width + (parseFloat(gap) || 16) : el.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * distance, behavior: reduce ? "auto" : "smooth" });
  };

  const scrollable = state.thumb < 0.995;
  const List = ordered ? "ol" : "ul";
  const style = {
    "--hs-item": itemWidth,
    "--hs-cols": cols,
    "--hs-gap": gap,
    "--hs-row-gap": rowGap ?? gap,
  } as React.CSSProperties;

  const controls = (
    <div className={`flex items-center gap-5 mt-6 ${HIDE_AT[until]} ${scrollable ? "" : "hidden"}`}>
      <div className="relative flex-1 h-[2px] bg-current/15" aria-hidden="true">
        <span
          className="absolute inset-y-0 bg-[image:var(--spectrum)] transition-[left] duration-150"
          style={{ width: `${state.thumb * 100}%`, left: `${state.progress * (1 - state.thumb) * 100}%` }}
        />
      </div>
      <div className="flex gap-2">
        {([-1, 1] as const).map((dir) => (
          <button
            key={dir}
            type="button"
            aria-controls={id}
            aria-label={dir < 0 ? `Previous: ${label}` : `Next: ${label}`}
            disabled={dir < 0 ? state.atStart : state.atEnd}
            onClick={() => step(dir)}
            className="w-11 h-11 grid place-items-center border border-current/25 transition-colors
                       hover:border-current/70 hover:bg-current/10 disabled:opacity-30 disabled:pointer-events-none"
          >
            <span aria-hidden="true">{dir < 0 ? "←" : "→"}</span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <div
        ref={trackRef}
        id={id}
        role="region"
        aria-label={label}
        tabIndex={scrollable ? 0 : -1}
        className="hscroll"
        data-until={until}
        data-bleed={bleed}
        style={style}
      >
        <List className="hscroll-list">{children}</List>
      </div>
      {bleed === "viewport" ? (
        <div className="gutter">
          <div className="container-max">{controls}</div>
        </div>
      ) : (
        controls
      )}
    </div>
  );
}

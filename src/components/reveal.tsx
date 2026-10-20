"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/* Adds .is-in to [data-reveal] elements as they enter the viewport. Re-runs on
   route change.

   The .js opt-in that hides unrevealed elements is added here, after hydration,
   never earlier: if the bundle fails to load, nothing on the page stays hidden.
   Elements already on screen are marked first, so they never flash out and back in. */
export function RevealObserver() {
  const pathname = usePathname();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)"));
    const vh = window.innerHeight;
    const pending = els.filter((el) => {
      const r = el.getBoundingClientRect();
      const onScreen = r.top < vh && r.bottom > 0;
      if (onScreen) el.classList.add("is-in");
      return !onScreen;
    });
    document.documentElement.classList.add("js");

    if (!("IntersectionObserver" in window)) {
      pending.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    pending.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}

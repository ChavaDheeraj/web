"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "@/components/logo";
import { NAV, SITE } from "@/lib/site";
import { pad } from "@/lib/brand";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) toggleRef.current?.focus();
  }, []);

  // Close when the route changes (covers back/forward as well as link clicks).
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // A hairline appears under the bar once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    panel?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab" || !panel) return;
      const items = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    // The panel is hidden from lg up; don't leave the page locked if the window grows.
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && close(false);

    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      root.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open, close]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const mobileLinks = [{ href: "/", label: "Home" }, ...NAV, { href: "/principles", label: "Principles" }, { href: "/contact", label: "Contact" }];

  return (
    // No backdrop-filter, transform or filter on the header: any of them makes it the
    // containing block for the fixed mobile panel, which then collapses to 68px tall.
    <header
      className={`on-ink fixed top-0 inset-x-0 z-[500] h-[var(--header-h)] bg-ink-deep transition-[border-color] duration-300 border-b ${
        scrolled ? "border-on-ink-line" : "border-transparent"
      }`}
    >
      <div className="spectrum absolute top-0 inset-x-0 h-[2px]" aria-hidden="true" />
      <div className="h-full flex items-center justify-between gap-6 gutter">
        <Link href="/" className="shrink-0 flex items-center min-h-11" aria-label="Trigarty, home">
          <Logo className="h-[21px] w-auto" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1 xl:gap-2">
            {NAV.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className="relative flex items-center min-h-11 px-3 text-[14px] text-on-ink-muted hover:text-on-ink aria-[current=page]:text-on-ink transition-colors
                             after:absolute after:left-3 after:right-3 after:bottom-1.5 after:h-[2px] after:bg-[image:var(--spectrum)] after:origin-left after:scale-x-0
                             hover:after:scale-x-100 aria-[current=page]:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="hidden md:inline-flex btn btn-spectrum btn-sm">
            Start a conversation
            <span className="btn-arrow" aria-hidden="true">
              →
            </span>
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-on-ink"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h18M9 16h12" />
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        inert={!open}
        className={`on-ink ink-deep lg:hidden fixed inset-0 z-[700] flex flex-col overflow-y-auto gutter pt-4 pb-10
                    duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${open ? "opacity-100 translate-y-0 visible transition-[opacity,transform]" : "opacity-0 -translate-y-3 invisible transition-[opacity,transform,visibility]"}`}
      >
        <div className="spectrum absolute top-0 inset-x-0 h-[2px]" aria-hidden="true" />
        <div className="flex items-center justify-between min-h-[calc(var(--header-h)-1rem)]">
          <Logo className="h-[21px] w-auto" />
          <button
            type="button"
            className="inline-flex items-center justify-center w-11 h-11 -mr-2 text-on-ink hover:text-trigarty-aqua transition-colors"
            aria-label="Close menu"
            onClick={() => close()}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav aria-label="Mobile" className="mt-6">
          <ul className="flex flex-col">
            {mobileLinks.map((l, i) => {
              const current = pathname === l.href;
              return (
                <li key={l.href} className="border-b border-on-ink-line">
                  <Link
                    href={l.href}
                    onClick={() => close(false)}
                    aria-current={current ? "page" : undefined}
                    className="group flex items-baseline gap-4 min-h-14 py-3 font-serif text-[1.75rem] leading-tight text-on-ink transition-colors"
                  >
                    <span className="t-num w-6">{pad(i + 1)}</span>
                    <span className={current ? "hl" : "group-hover:text-trigarty-aqua transition-colors"}>{l.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-10 flex flex-col gap-3">
          <Link href="/contact" onClick={() => close(false)} className="btn btn-spectrum">
            Start a conversation <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
          <div className="flex flex-col mt-3">
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center min-h-11 font-mono text-[13px] tracking-[0.04em] text-on-ink-muted hover:text-on-ink">
              {SITE.email}
            </a>
            <a href={`tel:${SITE.phoneE164}`} className="inline-flex items-center min-h-11 font-mono text-[13px] tracking-[0.04em] text-on-ink-muted hover:text-on-ink">
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

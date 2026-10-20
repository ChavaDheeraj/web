import { useId } from "react";

/* Λ mark traced from brand/trigarty-logo-light.jpg (viewBox 0 0 208 178). */
export const MARK_PATH = "M104 0L208 178H167L104 70L41 178H0Z";

/* App icon traced from brand/trigarty-icon.jpg (viewBox 0 0 656 512): the outer Λ
   ribbon with its inner chevron, and the cut-out between them (even-odd fill). */
export const ICON_PATH =
  "M0 512L300 0H357L656 512L444 468L328 269L212 468Z M328 79L121 432L176 420L328 162L478 420L532 432Z";

const LETTERS: [string, string][] = [
  ["T", "#63B7C9"],
  ["R", "#4BC5C7"],
  ["I", "#4DC2B1"],
  ["G", "#5CC697"],
  ["Λ", "#76C47C"],
  ["R", "#A4BE4B"],
  ["T", "#CCB10A"],
  ["Y", "#E9A400"],
];

export function Mark({ className = "w-6 h-auto" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg className={className} viewBox="0 0 208 178" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`m${id}`} x1="0" y1="0" x2="208" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4BC5C7" />
          <stop offset="0.55" stopColor="#A4BE4B" />
          <stop offset="1" stopColor="#E9A400" />
        </linearGradient>
      </defs>
      <path d={MARK_PATH} fill={`url(#m${id})`} />
    </svg>
  );
}

/* The app icon as a large structural graphic: a faint spectrum fill with a sharper
   spectrum outline. Decorative only. */
export function IconGraphic({ className = "", fillOpacity = 0.08, strokeOpacity = 0.55 }: { className?: string; fillOpacity?: number; strokeOpacity?: number }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg className={className} viewBox="-2 -2 660 516" aria-hidden="true" focusable="false" fill="none">
      <defs>
        <linearGradient id={`i${id}`} x1="0" y1="0" x2="656" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4BC5C7" />
          <stop offset="0.35" stopColor="#5CC697" />
          <stop offset="0.65" stopColor="#A4BE4B" />
          <stop offset="1" stopColor="#E9A400" />
        </linearGradient>
      </defs>
      <path d={ICON_PATH} fillRule="evenodd" fill={`url(#i${id})`} fillOpacity={fillOpacity} />
      <path d={ICON_PATH} fillRule="evenodd" stroke={`url(#i${id})`} strokeOpacity={strokeOpacity} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/* Mark plus the per-letter spectrum wordmark. Rendered as one SVG so it reads as a
   single image named "Trigarty" and keeps its width whatever font loads. */
export function Logo({ className = "h-5 w-auto" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg className={className} viewBox="0 0 152 20" role="img" aria-label="Trigarty">
      <defs>
        <linearGradient id={`l${id}`} x1="0" y1="0" x2="21" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4BC5C7" />
          <stop offset="0.55" stopColor="#A4BE4B" />
          <stop offset="1" stopColor="#E9A400" />
        </linearGradient>
      </defs>
      {/* MARK_PATH scaled to 18 units tall */}
      <path d="M10.5 1.5L21 19.5H16.9L10.5 8.6L4.1 19.5H0Z" fill={`url(#l${id})`} />
      <text
        x="32"
        y="16.2"
        textLength="119"
        lengthAdjust="spacing"
        style={{ fontFamily: "var(--font-sans), sans-serif", fontWeight: 400, fontSize: 15 }}
      >
        {LETTERS.map(([ch, color], i) => (
          <tspan key={i} fill={color} fontWeight={ch === "Λ" ? 500 : undefined}>
            {ch}
          </tspan>
        ))}
      </text>
    </svg>
  );
}

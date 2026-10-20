import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

const font = (pkg: string, file: string) =>
  readFile(path.join(process.cwd(), "node_modules", "@fontsource", pkg, "files", file));

const LETTERS: [string, string][] = [
  ["T", "#63B7C9"], ["R", "#4BC5C7"], ["I", "#4DC2B1"], ["G", "#5CC697"],
  ["Λ", "#76C47C"], ["R", "#A4BE4B"], ["T", "#CCB10A"], ["Y", "#E9A400"],
];
const SPECTRUM = "linear-gradient(90deg,#63B7C9,#4BC5C7,#4DC2B1,#5CC697,#76C47C,#A4BE4B,#CCB10A,#E9A400)";

/* Social card in the site's style: ink background, spectrum rule, Syne headline,
   mono eyebrow. Rendered once at build time for each route that uses it. */
export async function ogImage({ eyebrow, title, footnote = "Build What's Next." }: { eyebrow: string; title: string; footnote?: string }) {
  const [syne, inter, interGreek, mono] = await Promise.all([
    font("syne", "syne-latin-500-normal.woff"),
    font("inter", "inter-latin-400-normal.woff"),
    font("inter", "inter-greek-400-normal.woff"),
    font("geist-mono", "geist-mono-latin-400-normal.woff"),
  ]);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#0a0a09", color: "#F3F3F3" }}>
        <div style={{ height: 10, width: "100%", background: SPECTRUM }} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "56px 72px 60px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <svg width="44" height="38" viewBox="0 0 208 178">
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="208" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#4BC5C7" />
                  <stop offset="0.55" stopColor="#A4BE4B" />
                  <stop offset="1" stopColor="#E9A400" />
                </linearGradient>
              </defs>
              <path d="M104 0L208 178H167L104 70L41 178H0Z" fill="url(#g)" />
            </svg>
            <div style={{ display: "flex", fontFamily: "Inter", fontSize: 30, letterSpacing: 9 }}>
              {LETTERS.map(([ch, c], i) => (
                <span key={i} style={{ color: c }}>{ch}</span>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, fontFamily: "Mono", fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "#a9a9a7", marginBottom: 26 }}>
              <div style={{ width: 40, height: 2, background: SPECTRUM }} />
              {eyebrow}
            </div>
            <div style={{ fontFamily: "Syne", fontSize: title.length > 48 ? 64 : 76, lineHeight: 1.04, letterSpacing: -2, maxWidth: 1000 }}>{title}</div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "1px solid rgba(243,243,243,0.15)", paddingTop: 22, fontFamily: "Mono", fontSize: 20, letterSpacing: 2, color: "#a9a9a7" }}>
            <span>{footnote}</span>
            <span>HYDERABAD</span>
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Syne", data: syne, weight: 500, style: "normal" },
        { name: "Inter", data: inter, weight: 400, style: "normal" },
        { name: "Inter", data: interGreek, weight: 400, style: "normal" },
        { name: "Mono", data: mono, weight: 400, style: "normal" },
      ],
    },
  );
}

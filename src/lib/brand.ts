/* The logo spectrum as data, for places where a single colour is needed at a
   position along it (markers, numbered steps, stage bars). */

export const SPECTRUM = ["#63B7C9", "#4BC5C7", "#4DC2B1", "#5CC697", "#76C47C", "#A4BE4B", "#CCB10A", "#E9A400"] as const;

const hex = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));

/* Colour at t in [0, 1] along the spectrum. */
export function spectrumAt(t: number) {
  const x = Math.min(1, Math.max(0, t)) * (SPECTRUM.length - 1);
  const i = Math.min(SPECTRUM.length - 2, Math.floor(x));
  const f = x - i;
  const a = hex(SPECTRUM[i]);
  const b = hex(SPECTRUM[i + 1]);
  return `#${a.map((v, k) => Math.round(v + (b[k] - v) * f).toString(16).padStart(2, "0")).join("")}`;
}

/* Colour for item i of n, spread evenly across the spectrum. */
export const spectrumStep = (i: number, n: number) => spectrumAt(n <= 1 ? 0 : i / (n - 1));

/* Gradient for segment i of n, so adjacent segments join into one continuous spectrum. */
export const spectrumSegment = (i: number, n: number, dir = "90deg") =>
  `linear-gradient(${dir}, ${spectrumAt(i / n)}, ${spectrumAt((i + 1) / n)})`;

export const pad = (n: number) => String(n).padStart(2, "0");

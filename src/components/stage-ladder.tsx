import { STAGES, type Stage } from "@/lib/site";
import { pad, spectrumSegment } from "@/lib/brand";

/* The seven stages as a climb: each bar is one segment of the logo spectrum and
   rises with the stage. With `highlight`, the other stages dim. Rows on phones,
   rising columns from md (see .climb in globals.css). */
export function StageLadder({
  highlight,
  notes,
  height = "11rem",
  animate = false,
  label = "Stages",
}: {
  highlight?: readonly Stage[];
  notes?: Record<Stage, string>;
  height?: string;
  animate?: boolean;
  label?: string;
}) {
  return (
    <ol aria-label={label} className="climb" style={{ "--climb-h": height } as React.CSSProperties} data-animate={animate || undefined}>
      {STAGES.map((s, i) => {
        const on = !highlight || highlight.includes(s);
        return (
          <li
            key={s}
            className="climb-step"
            data-dim={!on}
            aria-current={highlight && on ? "step" : undefined}
            style={{ "--i": i } as React.CSSProperties}
          >
            <span className="climb-label">
              <span className="t-num">{pad(i + 1)}</span>
              <span className="font-medium">{s}</span>
            </span>
            <span className="climb-track" aria-hidden="true">
              <span className="climb-bar" style={{ background: spectrumSegment(i, STAGES.length, "180deg") }} />
            </span>
            {notes && <span className="climb-note t-small">{notes[s]}</span>}
          </li>
        );
      })}
    </ol>
  );
}

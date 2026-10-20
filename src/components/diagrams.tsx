import { Flow } from "@/components/blocks";
import { MODELS, PROVIDERS, STEPS } from "@/content/site-content";
import { pad, spectrumSegment, spectrumStep } from "@/lib/brand";

/* ---------- The gap ----------
   Each kind of provider covers one part of the organization; Trigarty connects all
   of them. Rows are providers, columns are parts of the organization. For ink. */

const AREAS = ["Business", "Operations", "People", "Technology", "Growth"] as const;
const PROVIDER_AREA: Record<string, (typeof AREAS)[number]> = {
  "A technology company": "Technology",
  "A marketing agency": "Growth",
  "A consultant": "Business",
  "A recruitment company": "People",
  "An implementation partner": "Operations",
};

export function GapDiagram() {
  const cols = "grid-cols-[repeat(5,minmax(0,1fr))]";
  return (
    <div role="table" aria-label="Which part of the organization each provider covers" className="w-full">
      <div role="row" className="hidden md:grid grid-cols-[minmax(0,1.25fr)_minmax(0,2fr)] gap-6 pb-4 border-b border-on-ink-line">
        <span role="columnheader" className="t-label">
          Provider
        </span>
        <div className={`grid ${cols} gap-1.5`}>
          {AREAS.map((a) => (
            <span key={a} role="columnheader" className="font-mono text-[11px] uppercase tracking-[0.06em] text-on-ink-muted truncate">
              {a}
            </span>
          ))}
        </div>
      </div>

      {PROVIDERS.map((p) => {
        const area = PROVIDER_AREA[p.who];
        return (
          <div key={p.who} role="row" className="grid grid-cols-1 md:grid-cols-[minmax(0,1.25fr)_minmax(0,2fr)] gap-3 md:gap-6 items-center py-4 border-b border-on-ink-line">
            <p role="rowheader" className="text-[15px] md:text-[16px] leading-snug">
              <span className="text-on-ink">{p.who}</span> <span className="text-on-ink-muted">{p.does}</span>
            </p>
            <div className={`grid ${cols} gap-1.5`}>
              {AREAS.map((a) => {
                const on = a === area;
                return (
                  <span
                    key={a}
                    role="cell"
                    aria-label={`${a}: ${on ? "covered" : "not covered"}`}
                    className={`h-7 md:h-8 ${on ? "bg-on-ink/85" : "border border-dashed border-on-ink/15"}`}
                  />
                );
              })}
            </div>
          </div>
        );
      })}

      <div role="row" className="grid grid-cols-1 md:grid-cols-[minmax(0,1.25fr)_minmax(0,2fr)] gap-3 md:gap-6 items-center pt-6">
        <p role="rowheader" className="text-[16px] md:text-[17px] font-semibold text-on-ink">
          Trigarty <span className="font-normal text-on-ink-muted">connects all of it.</span>
        </p>
        <div className={`grid ${cols} gap-1.5`}>
          {AREAS.map((a, i) => (
            <span key={a} role="cell" aria-label={`${a}: covered`} className="h-7 md:h-8" style={{ background: spectrumSegment(i, AREAS.length) }} />
          ))}
        </div>
      </div>
      <p className="md:hidden t-label mt-4">Columns: {AREAS.join(" · ")}</p>
    </div>
  );
}

/* ---------- Where each model stops ----------
   Steps laid on a shared six-column track, so the length of each model is the
   comparison. Trigarty's row runs the full track in the spectrum. For paper. */

export function ModelCompare() {
  const max = Math.max(...MODELS.map((m) => m.flow.length));
  return (
    <ul aria-label="Working models compared" className="flex flex-col gap-3">
      {MODELS.map((m) => {
        const ours = m.name === "Trigarty";
        return (
          <li
            key={m.name}
            className={`grid grid-cols-1 lg:grid-cols-[13rem_1fr] gap-4 lg:gap-8 items-center px-5 md:px-7 py-5 md:py-6 ${
              ours ? "on-ink" : "panel"
            }`}
          >
            <h3 className={`font-serif text-[1.125rem] md:text-[1.25rem] leading-tight ${ours ? "text-on-ink" : ""}`}>
              {ours ? <span className="hl">Trigarty</span> : m.name}
            </h3>

            {/* Phones and tablets: a wrapping chain. */}
            <div className="lg:hidden">
              <Flow steps={m.flow} label={`${m.name} working model`} emphasis={ours} />
            </div>

            {/* Desktop: a shared track. */}
            <ol aria-label={`${m.name} working model`} className="hidden lg:grid gap-2" style={{ gridTemplateColumns: `repeat(${max}, minmax(0, 1fr))` }}>
              {m.flow.map((s, i) => (
                <li key={s} className="flex flex-col gap-3">
                  <span
                    aria-hidden="true"
                    className="h-[3px]"
                    style={{ background: ours ? spectrumSegment(i, max) : "rgba(17,17,16,0.55)" }}
                  />
                  <span className={`font-mono text-[12px] uppercase tracking-[0.12em] ${ours ? "text-on-ink" : "text-foreground"}`}>{s}</span>
                </li>
              ))}
              {!ours && (
                <li className="flex flex-col gap-3" aria-label="The engagement ends here">
                  <span aria-hidden="true" className="h-[3px] w-[3px] bg-foreground/55" />
                  <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">Ends</span>
                </li>
              )}
            </ol>
          </li>
        );
      })}
    </ul>
  );
}

/* ---------- The six steps as a track ----------
   Numbered nodes on a spectrum line. Six columns on desktop, three on tablets,
   a stacked list on phones. For ink. */

export function StepTrack({ detail = false }: { detail?: boolean }) {
  return (
    <ol className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-x-6 gap-y-10">
      {STEPS.map((s, i) => (
        <li key={s.num} className="relative pt-12" data-reveal style={{ "--d": i } as React.CSSProperties}>
          <span aria-hidden="true" className={`absolute left-0 top-[17px] h-[2px] right-0 ${i < STEPS.length - 1 ? "xl:-right-6" : ""}`} style={{ background: spectrumSegment(i, STEPS.length) }} />
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 w-9 h-9 grid place-items-center bg-ink font-mono text-[12px] text-on-ink border"
            style={{ borderColor: spectrumStep(i, STEPS.length) }}
          >
            {pad(i + 1)}
          </span>
          <h3 className="t-h3 text-on-ink">{s.name}</h3>
          <p className="mt-2 text-[15px] leading-[1.55] text-on-ink-muted">{s.line}</p>
          {detail && <p className="mt-3 text-[14px] leading-[1.6] text-on-ink-muted">{s.detail}</p>}
        </li>
      ))}
    </ol>
  );
}

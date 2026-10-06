import { Fragment } from "react";

// Renders each line inside a mask so it can rise into place. Pair with a
// parent carrying data-reveal-group (scroll) or .hero-rise (on load).
// `step` staggers lines in ms.
export function Lines({ lines, step = 110, base = 0 }: { lines: React.ReactNode[]; step?: number; base?: number }) {
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          <span className="line-mask" style={{ "--reveal-delay": `${base + i * step}ms` } as React.CSSProperties}>
            <span>{line}</span>
          </span>
        </Fragment>
      ))}
    </>
  );
}

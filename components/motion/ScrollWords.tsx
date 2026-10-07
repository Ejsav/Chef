// Manifesto treatment: words begin as ghosts and come into full ink as the
// reader moves through them — reading pace set by the scroll. Pure CSS
// (a named view timeline on the paragraph, each word owning a slice of its
// range), so it costs no JavaScript and runs off the main thread. Browsers
// without scroll timelines, and reduced motion, simply show the text.
// Words in `emphasis` render italic in brass.
type Props = { text: string; emphasis?: string[]; className?: string };

export function ScrollWords({ text, emphasis = [], className }: Props) {
  const words = text.split(" ");
  const emph = new Set(emphasis.map((w) => w.toLowerCase()));
  const span = 46; // % of the cover range the whole sentence takes to resolve
  return (
    <p className={`scroll-words ${className ?? ""}`}>
      {words.map((w, i) => {
        const bare = w.replace(/[^\p{L}'’]/gu, "").toLowerCase();
        const start = 12 + (i / words.length) * span;
        return (
          <span
            key={i}
            className={emph.has(bare) ? "italic-accent" : undefined}
            style={{ "--w0": `${start.toFixed(1)}%`, "--w1": `${(start + 9).toFixed(1)}%` } as React.CSSProperties}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </p>
  );
}

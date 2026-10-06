import { cn } from "@/lib/utils";

// Section marker: a numeral, a hairline, a label. Reads like the heading
// of a chapter in a beautifully bound menu.
export function Eyebrow({ index, children, className }: { index?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex items-center gap-4", className)} data-reveal>
      {index ? <span className="font-display text-base italic text-accent">{index}</span> : null}
      <span aria-hidden className="h-px w-10 bg-accent/60" />
      <span className="text-eyebrow">{children}</span>
    </div>
  );
}

import { cn } from "@/lib/utils";

// The house mark: R and G set in Bodoni inside a double ring — the
// shape of a wax seal or the crest on a menu card.
export function Monogram({ className, title = "Ray Gennaro" }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-12 w-12", className)}
      {...(title ? { role: "img", "aria-label": title } : { "aria-hidden": true })}
    >
      <circle cx="32" cy="32" r="30.5" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="32" cy="32" r="27" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.6" />
      <text
        x="32"
        y="39.5"
        textAnchor="middle"
        fill="currentColor"
        style={{ fontFamily: "var(--font-display), Didot, serif", fontSize: "21px", letterSpacing: "-0.5px" }}
      >
        R<tspan fontStyle="italic" dx="-1">G</tspan>
      </text>
    </svg>
  );
}

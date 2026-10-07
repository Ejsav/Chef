import Link from "next/link";
import { cn } from "@/lib/utils";

// Two CTA styles, used consistently site-wide:
//  - "primary": a brass-ruled button whose fill rises from the floor on hover.
//  - "quiet": text with a hairline that draws in, and an arrow that leans forward.
type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "quiet";
  className?: string;
  /** analytics event name, e.g. "cta:hero-request" */
  track?: string;
};

export function Cta({ href, children, variant = "primary", className, track }: Props) {
  if (variant === "quiet") {
    return (
      <Link
        href={href}
        data-track={track}
        className={cn(
          "group inline-flex items-center gap-3 text-[0.74rem] font-medium uppercase tracking-[0.26em] text-fg",
          className,
        )}
      >
        <span className="link-underline pb-1">{children}</span>
        <Arrow className="transition-transform duration-700 ease-out-expo group-hover:translate-x-1.5" />
      </Link>
    );
  }
  return (
    <Link
      href={href}
      data-track={track}
      data-magnetic="0.22"
      className={cn(
        "group relative inline-flex h-14 items-center gap-4 overflow-hidden border active:scale-[0.97] transition-[color,border-color,scale] border-accent/70 px-8 text-[0.74rem] font-medium uppercase tracking-[0.26em] text-fg duration-700 ease-out-expo hover:border-accent hover:text-[rgb(var(--ink))]",
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute inset-0 origin-bottom scale-y-0 bg-accent transition-transform duration-700 ease-out-expo group-hover:scale-y-100"
      />
      <span className="relative">{children}</span>
      <Arrow className="relative transition-transform duration-700 ease-out-expo group-hover:translate-x-1" />
    </Link>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 10" className={cn("h-2.5 w-6", className)} fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M0 5h22.5M18.5 1l4 4-4 4" />
    </svg>
  );
}

import { cn } from "@/lib/utils";

// Questions as native <details>: keyboard and screen-reader friendly with
// no script, and every answer is in the HTML for search engines.
export function Faq({ faqs, className }: { faqs: { q: string; a: string }[]; className?: string }) {
  return (
    <div className={cn("border-t border-line", className)}>
      {faqs.map((f) => (
        <details key={f.q} className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
            <span className="font-display text-[1.3rem] leading-snug md:text-[1.45rem]">{f.q}</span>
            <span aria-hidden className="shrink-0 font-display text-2xl text-accent transition-transform duration-500 ease-out-expo group-open:rotate-45">+</span>
          </summary>
          <p className="max-w-2xl pb-7 text-fg-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

// Manifesto treatment: words begin as ghosts and come into full ink as the
// reader moves through them — reading pace set by the scroll, like a slow
// pan across a page. Words in `emphasis` render italic in brass.
type Props = { text: string; emphasis?: string[]; className?: string };

export function ScrollWords({ text, emphasis = [], className }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");
  const emph = new Set(emphasis.map((w) => w.toLowerCase()));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const spans = el.querySelectorAll<HTMLSpanElement>("[data-word]");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        spans,
        { opacity: 0.2 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.12,
          scrollTrigger: { trigger: el, start: "top 78%", end: "bottom 42%", scrub: 0.6 },
        },
      );
    }, el);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => {
        const bare = w.replace(/[^\p{L}'’]/gu, "").toLowerCase();
        return (
          <span key={i} data-word className={emph.has(bare) ? "italic-accent" : undefined}>
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </p>
  );
}

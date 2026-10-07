"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { setLenis } from "@/lib/lenis";

// Weighted scroll. (GSAP is not imported here so it only loads on pages
// that use ScrollTrigger; those subscribe to Lenis themselves.)
// lerp 0.085 reads like a heavy door on good hinges —
// slower than default, never sluggish. Disabled for reduced motion and touch
// (native momentum on phones is already better than anything we can fake).
export function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;

    const lenis = new Lenis({ lerp: 0.085, smoothWheel: true, anchors: { offset: -40 } });
    setLenis(lenis);
    let raf = 0;
    const tick = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return null;
}

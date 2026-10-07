"use client";
import { useEffect } from "react";

// Makes the hero's single light source respond to the visitor: on desktop the
// candle pool leans toward the pointer while the name drifts the other way
// (two depth planes, a few pixels apart). On touch, the light settles as you
// scroll. Writes two CSS variables; the compositor does the rest.
export function HeroLight({ targetId }: { targetId: string }) {
  useEffect(() => {
    const el = document.getElementById(targetId);
    const root = document.documentElement;
    if (!el || root.dataset.tier === "still") return;

    let visible = true;
    const io = new IntersectionObserver(([e]) => { visible = !!e?.isIntersecting; });
    io.observe(el);

    let raf = 0;
    const set = (x: number, y: number) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--lx", x.toFixed(3));
        el.style.setProperty("--ly", y.toFixed(3));
      });
    };

    if (root.dataset.pointer === "fine") {
      const onMove = (e: PointerEvent) => {
        if (!visible) return;
        set((e.clientX / innerWidth - 0.5) * 2, (e.clientY / innerHeight - 0.5) * 2);
      };
      window.addEventListener("pointermove", onMove, { passive: true });
      return () => { window.removeEventListener("pointermove", onMove); io.disconnect(); cancelAnimationFrame(raf); };
    }
    const onScroll = () => { if (visible) set(0, Math.min(scrollY / innerHeight, 1) * -1.4); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); cancelAnimationFrame(raf); };
  }, [targetId]);

  return null;
}

"use client";
import { useEffect, useRef } from "react";

// A cursor with manners. A brass point that is always exactly where you are,
// and a ring that follows with a little weight. It swells over anything you
// can act on, carries a word over things worth opening ([data-cursor-label]),
// steps aside for text fields, and draws [data-magnetic] elements toward it.
// Fine pointers on full-tier devices only.
export function Cursor() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (root.dataset.pointer !== "fine" || root.dataset.tier !== "full") return;
    const r = ring.current!, d = dot.current!, l = label.current!;
    root.classList.add("has-cursor");

    const target = { x: -100, y: -100 };
    const pos = { x: -100, y: -100 };
    let raf = 0;
    let magnet: HTMLElement | null = null;

    const setState = (s: string) => { r.dataset.state = s; d.dataset.state = s; };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      target.x = e.clientX;
      target.y = e.clientY;
      d.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      if (magnet) {
        const b = magnet.getBoundingClientRect();
        const strength = Number(magnet.dataset.magnetic) || 0.28;
        magnet.style.translate = `${(e.clientX - (b.left + b.width / 2)) * strength}px ${(e.clientY - (b.top + b.height / 2)) * strength}px`;
      }
    };

    const onOver = (e: PointerEvent) => {
      const t = e.target as Element;
      const field = t.closest("input, textarea, select, [contenteditable]");
      const labelled = t.closest<HTMLElement>("[data-cursor-label]");
      const interactive = t.closest("a, button, [role='button'], [role='radio'], label, summary");
      const m = t.closest<HTMLElement>("[data-magnetic]");
      if (m !== magnet) {
        if (magnet) magnet.style.translate = "";
        magnet = m;
      }
      if (field) setState("text");
      else if (labelled) { l.textContent = labelled.dataset.cursorLabel ?? ""; setState("label"); }
      else if (interactive) setState("link");
      else setState("default");
    };

    const onDown = () => { r.dataset.pressed = "true"; };
    const onUp = () => { r.dataset.pressed = "false"; };
    const onLeave = () => { setState("hidden"); if (magnet) { magnet.style.translate = ""; magnet = null; } };

    const tick = () => {
      pos.x += (target.x - pos.x) * 0.2;
      pos.y += (target.y - pos.y) * 0.2;
      r.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      root.classList.remove("has-cursor");
    };
  }, []);

  return (
    <>
      <div ref={ring} aria-hidden className="cursor-ring" data-state="hidden" style={{ transform: "translate3d(-100px,-100px,0)" }}>
        <span ref={label} className="cursor-label" />
      </div>
      <div ref={dot} aria-hidden className="cursor-dot" data-state="hidden" style={{ transform: "translate3d(-100px,-100px,0)" }} />
    </>
  );
}

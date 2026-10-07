"use client";
import { useEffect, useRef, useState } from "react";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

// Optional room tone: the low warmth of a fire in another room, a log
// settling now and then. Generated live with Web Audio (no file to download,
// never the same twice). Always off until the visitor asks for it; fades in
// and out rather than switching; goes quiet when the tab is hidden.
export function Ambience({ className }: { className?: string }) {
  const [on, setOn] = useState(false);
  const engine = useRef<{ ctx: AudioContext; master: GainNode; stop: () => void } | null>(null);

  function start() {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new Ctx();
    const master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);

    // Brown noise → low-pass: the body of the fire, felt more than heard.
    const len = ctx.sampleRate * 6;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02;
      data[i] = last * 3.2;
    }
    const bed = ctx.createBufferSource();
    bed.buffer = buf;
    bed.loop = true;
    const lp = ctx.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 380;
    const bedGain = ctx.createGain();
    bedGain.gain.value = 0.55;
    bed.connect(lp).connect(bedGain).connect(master);
    bed.start();

    // Crackles: tiny decaying bursts through a band-pass, at irregular intervals.
    const crackleBuf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.04), ctx.sampleRate);
    const cd = crackleBuf.getChannelData(0);
    for (let i = 0; i < cd.length; i++) cd[i] = (Math.random() * 2 - 1) * Math.exp(-i / (cd.length / 6));
    let timer = 0;
    const crackle = () => {
      const s = ctx.createBufferSource();
      s.buffer = crackleBuf;
      const bp = ctx.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.value = 1400 + Math.random() * 2600;
      bp.Q.value = 1.4;
      const g = ctx.createGain();
      g.gain.value = 0.03 + Math.random() * 0.11;
      s.connect(bp).connect(g).connect(master);
      s.start();
      timer = window.setTimeout(crackle, 90 + Math.random() * (Math.random() < 0.2 ? 1800 : 520));
    };
    crackle();

    master.gain.linearRampToValueAtTime(0.32, ctx.currentTime + 2.2);
    engine.current = {
      ctx,
      master,
      stop: () => {
        window.clearTimeout(timer);
        master.gain.cancelScheduledValues(ctx.currentTime);
        master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
        master.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.9);
        window.setTimeout(() => ctx.close(), 1000);
      },
    };
  }

  function toggle() {
    const next = !on;
    setOn(next);
    track("sound_toggle", { on: next });
    if (next) start();
    else { engine.current?.stop(); engine.current = null; }
  }

  useEffect(() => {
    const onVis = () => {
      const e = engine.current;
      if (!e) return;
      if (document.hidden) e.ctx.suspend();
      else e.ctx.resume();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => { document.removeEventListener("visibilitychange", onVis); engine.current?.stop(); };
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? "Turn room sound off" : "Turn room sound on"}
      className={cn("group flex h-11 items-center gap-3 text-[0.62rem] font-medium uppercase tracking-[0.28em] opacity-70 transition-opacity duration-500 hover:opacity-100", className)}
    >
      <span aria-hidden className="flex h-3 items-end gap-[3px]">
        {[0.55, 1, 0.7, 0.85].map((h, i) => (
          <span
            key={i}
            className={cn("w-px origin-bottom bg-current", on ? "sound-bar" : "")}
            style={{ height: `${(on ? h : h * 0.45) * 100}%`, animationDelay: `${i * 140}ms`, transition: "height 600ms var(--ease-out-expo)" }}
          />
        ))}
      </span>
      <span className="hidden lg:inline">{on ? "Sound on" : "Sound"}</span>
    </button>
  );
}

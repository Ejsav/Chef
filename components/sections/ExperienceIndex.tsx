"use client";
import Link from "next/link";
import { useState } from "react";
import { experiences } from "@/content/experiences";
import { Plate } from "@/components/ui/Plate";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Arrow } from "@/components/ui/Cta";
import { cn } from "@/lib/utils";

// An index, not a card grid. Four lines set like a wine list; hovering or
// focusing a line brings its photograph up in the sticky frame. On phones
// the frame is dropped and each line carries its own kicker.
export function ExperienceIndex() {
  const [active, setActive] = useState(0);

  return (
    <section aria-labelledby="experiences-title" className="tone-dark section relative">
      <div className="container-x">
        <div className="grid gap-y-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Eyebrow index="II">The Experiences</Eyebrow>
            <h2 id="experiences-title" className="text-h1 mt-10" data-reveal-group>
              <span className="line-mask"><span>Four ways to be</span></span>
              <span className="line-mask" style={{ "--reveal-delay": "110ms" } as React.CSSProperties}>
                <span className="italic text-accent">cooked for.</span>
              </span>
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12">
          <ol className="md:col-span-7">
            {experiences.map((exp, i) => (
              <li key={exp.slug} data-reveal style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}>
                <Link
                  href={`/experiences#${exp.slug}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group relative grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 border-t border-line py-8 md:grid-cols-[4.5rem_1fr_auto] md:py-10"
                >
                  <span aria-hidden className="absolute left-0 top-[-1px] h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-1000 ease-out-expo group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                  <span className="font-display text-lg italic text-accent">{exp.numeral}</span>
                  <span>
                    <span className="text-h2 block transition-transform duration-1000 ease-out-expo group-hover:translate-x-3">
                      {exp.name}
                    </span>
                    <span className="mt-3 block text-[0.7rem] uppercase tracking-[0.26em] text-fg-muted">{exp.kicker}</span>
                  </span>
                  <Arrow className="mb-2 self-center text-fg-muted transition-all duration-700 ease-out-expo group-hover:translate-x-1 group-hover:text-accent" />
                </Link>
              </li>
            ))}
            <li aria-hidden className="border-t border-line" />
          </ol>

          {/* Sticky photograph frame (desktop) */}
          <div className="hidden md:col-span-5 md:block">
            <div className="sticky top-[calc(var(--header-h)+2rem)]">
              <div className="relative aspect-[4/5]">
                {experiences.map((exp, i) => (
                  <div
                    key={exp.slug}
                    aria-hidden={i !== active}
                    className={cn(
                      "absolute inset-0 transition-[opacity,clip-path] duration-[1400ms] ease-out-expo",
                      i === active ? "opacity-100 [clip-path:inset(0_0_0_0)]" : "opacity-0 [clip-path:inset(6%_6%_6%_6%)]",
                    )}
                  >
                    <Plate {...exp.plate} reveal={false} ratio="h-full" sizes="40vw" />
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-sm text-fg-muted" aria-live="polite">
                {experiences[active]?.summary}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getLenis } from "@/lib/lenis";

// One observer for the whole site. Elements opt in with data attributes
// ([data-reveal], [data-reveal-group], [data-draw]); CSS owns the motion.
// That keeps sections as server components and the JS cost near zero.
const SELECTOR = "[data-reveal], [data-reveal-group], [data-draw]";

export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // New route: start at the top, smooth-scroll aware.
    getLenis()?.scrollTo(0, { immediate: true });

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    document.querySelectorAll(SELECTOR).forEach((el) => {
      if (!el.classList.contains("is-in")) io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);

  return null;
}

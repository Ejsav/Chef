// Single GSAP entry point. Components import from here so plugins are
// guaranteed registered exactly once, client-side only.
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "expo.out", duration: 1.2 });
}

export { gsap, ScrollTrigger };

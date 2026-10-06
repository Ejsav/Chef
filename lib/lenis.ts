import type Lenis from "lenis";

// Module-level handle so overlays (mobile menu) can pause smooth scroll
// without threading context through the tree.
let instance: Lenis | null = null;
export const setLenis = (l: Lenis | null) => { instance = l; };
export const getLenis = () => instance;

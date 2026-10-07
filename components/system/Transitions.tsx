"use client";
import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

// Continuity between pages. Internal link clicks are routed through the
// View Transitions API so the header stays put while the page beneath is
// replaced by a rising curtain (CSS in globals.css). Browsers without the
// API, still-tier visitors and modified clicks get normal navigation.
export function Transitions() {
  const router = useRouter();
  const pathname = usePathname();
  const settle = useRef<(() => void) | null>(null);

  // The new route has committed: let the transition capture its snapshot.
  useEffect(() => {
    settle.current?.();
    settle.current = null;
  }, [pathname]);

  useEffect(() => {
    const doc = document as Document & { startViewTransition?: (cb: () => Promise<void>) => unknown };
    if (!doc.startViewTransition) return;

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (document.documentElement.dataset.tier === "still") return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a || (a.target && a.target !== "_self") || a.hasAttribute("download") || a.dataset.noTransition !== undefined) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || url.pathname === location.pathname) return;

      e.preventDefault();
      doc.startViewTransition!(
        () =>
          new Promise<void>((resolve) => {
            settle.current = resolve;
            router.push(url.pathname + url.search + url.hash);
            window.setTimeout(resolve, 1600); // never hold the page hostage
          }),
      );
    };
    // Capture phase: runs before Next's <Link> handler, which respects defaultPrevented.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  return null;
}

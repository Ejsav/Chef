"use client";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { captureAttribution } from "@/lib/attribution";
import { track } from "@/lib/analytics";

// Attribution on arrival, plus declarative click tracking: any element with
// data-track="name" reports itself. Real-user Web Vitals via Speed Insights.
// Vercel's collectors exist only on Vercel deployments; Plausible loads when
// NEXT_PUBLIC_PLAUSIBLE_DOMAIN is set. Elsewhere, events go to the dataLayer.
const onVercel = !!process.env.NEXT_PUBLIC_VERCEL_ENV;
const plausible = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
export function Telemetry() {
  useEffect(() => {
    captureAttribution();
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest?.<HTMLElement>("[data-track]");
      if (el) track(el.dataset.track!, { path: location.pathname });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <>
      {onVercel ? <Analytics /> : null}
      {onVercel ? <SpeedInsights /> : null}
      {plausible ? <script defer data-domain={plausible} src="https://plausible.io/js/script.tagged-events.js" /> : null}
    </>
  );
}

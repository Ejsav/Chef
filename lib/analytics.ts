// One event API for the whole site. Events fan out to whichever providers
// are present (Vercel Analytics, Plausible, a GTM dataLayer) — the brand
// code never knows or cares which. Property values stay primitive and
// contain no personal data.
import { track as vercelTrack } from "@vercel/analytics";

type Props = Record<string, string | number | boolean | null | undefined>;

export function track(name: string, props: Props = {}) {
  if (typeof window === "undefined") return;
  const clean = Object.fromEntries(Object.entries(props).filter(([, v]) => v !== undefined)) as Record<string, string | number | boolean | null>;
  try { vercelTrack(name, clean); } catch {}
  const w = window as unknown as { plausible?: (n: string, o: { props: Props }) => void; dataLayer?: unknown[] };
  w.plausible?.(name, { props: clean });
  (w.dataLayer ??= []).push({ event: name, ...clean });
  if (process.env.NODE_ENV !== "production") console.debug("[track]", name, clean);
}

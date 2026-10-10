// Single source of truth for brand facts used in UI, metadata and JSON-LD.
// Anything marked CLIENT must be confirmed by Chef Gennaro's office before launch.

// The canonical origin. Explicit env wins; on Vercel we fall back to the
// project's live production address so canonical URLs, the sitemap and
// structured data never point at a domain that isn't serving the site yet.
const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const origin =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (vercelProduction ? `https://${vercelProduction}` : "http://localhost:3000");

export const site = {
  name: "Chef Ray Gennaro",
  shortName: "Ray Gennaro",
  url: origin.replace(/\/$/, ""),
  // CLIENT: set NEXT_PUBLIC_CONTACT_EMAIL once the inbox exists. Until then
  // no address is shown anywhere; every "write to us" becomes a request link.
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || null,
  region: "Connecticut",
  serviceArea: ["Connecticut", "New York", "The Hamptons", "Florida", "Yachts and private islands, by arrangement"],
  responseNote: "Every inquiry is read by Chef Gennaro's office and answered personally.",
  description:
    "Chef Ray Gennaro — Italian-American private chef from Connecticut with New Haven roots. Private dining, destination and private-island dinners, and cooking lessons, by arrangement.",
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM || "", // CLIENT: handle without @; hidden while empty
  },
} as const;

export const nav = [
  { href: "/experiences", label: "Experiences" },
  { href: "/menus", label: "Menus" },
  { href: "/chef", label: "The Chef" },
  { href: "/inquire", label: "Inquire" },
] as const;

// Secondary navigation (footer): everything a client or a search engine
// should reach in two clicks.
export const footerNav = [
  { href: "/experiences", label: "Experiences" },
  { href: "/menus", label: "Sample menus" },
  { href: "/chef", label: "The Chef" },
  { href: "/private-chef", label: "Where he cooks" },
  { href: "/questions", label: "Questions" },
  { href: "/inquire", label: "Request an evening" },
] as const;

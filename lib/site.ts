// Single source of truth for brand facts used in UI, metadata and JSON-LD.
// Anything marked CLIENT must be confirmed by Chef Gennaro's office before launch.

export const site = {
  name: "Chef Ray Gennaro",
  shortName: "Ray Gennaro",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.raygennaro.com", // CLIENT: confirm domain
  email: "table@raygennaro.com", // CLIENT: confirm inbox
  region: "Connecticut",
  serviceArea: ["Connecticut", "New York", "The Hamptons", "Private islands & yachts, by arrangement"],
  responseNote: "Every inquiry is read by Chef Gennaro's office and answered personally.",
  description:
    "Chef Ray Gennaro — Italian-American private chef from Connecticut with New Haven roots. Private dining, destination and private-island dinners, and cooking lessons, by arrangement.",
  social: {
    instagram: "", // CLIENT: add handle — empty values are hidden in the UI
  },
} as const;

export const nav = [
  { href: "/experiences", label: "Experiences" },
  { href: "/chef", label: "The Chef" },
  { href: "/inquire", label: "Inquire" },
] as const;

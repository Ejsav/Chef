import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/experiences`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/chef`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${site.url}/inquire`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
  ];
}

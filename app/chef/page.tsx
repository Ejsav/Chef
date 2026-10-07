import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { InquiryClose } from "@/components/sections/InquiryClose";
import { Archive } from "@/components/sections/Archive";
import { Standards } from "@/components/sections/Standards";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "The Chef — Ray Gennaro, New Haven Roots",
  description:
    "The story of Chef Ray Gennaro: Italian-American roots in New Haven, decades of restaurant and private kitchens, private-island dining and cooking instruction.",
  alternates: { canonical: "/chef" },
  openGraph: { title: "The Chef — Ray Gennaro", url: "/chef" },
};

export default function ChefPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "The Chef", path: "/chef" }]} />
      <PageIntro
        id="chef-page-title"
        eyebrow="The Chef"
        lines={["Ray", "Gennaro"]}
        lead={
          <p>
            Italian-American by birth, New Haven by upbringing, private by profession. A cook
            shaped by family tables, decades of professional kitchens, and evenings in places
            most people never see.
          </p>
        }
      />

      <Archive />
      <Standards />

      <InquiryClose title={["Bring him", "to your table."]} />
    </>
  );
}

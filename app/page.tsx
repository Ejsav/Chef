import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Composer } from "@/components/sections/Composer";
import { TheTable } from "@/components/sections/TheTable";
import { PullQuote, Testimonials } from "@/components/sections/Voice";
import { ChefIntro } from "@/components/sections/ChefIntro";
import { Method } from "@/components/sections/Method";
import { Discretion } from "@/components/sections/Discretion";
import { InquiryClose } from "@/components/sections/InquiryClose";

// Eight movements, paced like a dinner: the room, the premise, the
// possibilities, the table, the chef, the service, the discretion, the invitation.
// Voice and proof sections appear automatically once content/voice.ts is filled.
export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <PullQuote />
      <Composer />
      <TheTable />
      <ChefIntro />
      <Method />
      <Discretion />
      <Testimonials />
      <InquiryClose />
    </>
  );
}

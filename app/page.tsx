import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { ExperienceIndex } from "@/components/sections/ExperienceIndex";
import { ChefIntro } from "@/components/sections/ChefIntro";
import { Method } from "@/components/sections/Method";
import { Discretion } from "@/components/sections/Discretion";
import { InquiryClose } from "@/components/sections/InquiryClose";

// Seven movements, paced like a dinner: the room, the premise, the menu,
// the chef, the service, the discretion, the invitation.
export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <ExperienceIndex />
      <ChefIntro />
      <Method />
      <Discretion />
      <InquiryClose />
    </>
  );
}

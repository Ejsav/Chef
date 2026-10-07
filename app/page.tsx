import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Composer } from "@/components/sections/Composer";
import { ChefIntro } from "@/components/sections/ChefIntro";
import { Method } from "@/components/sections/Method";
import { Discretion } from "@/components/sections/Discretion";
import { InquiryClose } from "@/components/sections/InquiryClose";

// Seven movements, paced like a dinner: the room, the premise, the
// possibilities, the chef, the service, the discretion, the invitation.
export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Composer />
      <ChefIntro />
      <Method />
      <Discretion />
      <InquiryClose />
    </>
  );
}

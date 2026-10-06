import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { InquiryClose } from "@/components/sections/InquiryClose";
import { Plate } from "@/components/ui/Plate";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "The Chef — Ray Gennaro, New Haven Roots",
  description:
    "The story of Chef Ray Gennaro: Italian-American roots in New Haven, decades of restaurant and private kitchens, private-island dining and cooking instruction.",
  alternates: { canonical: "/chef" },
  openGraph: { title: "The Chef — Ray Gennaro", url: "/chef" },
};

// Story told in chapters. Copy is drawn from documented history only;
// CLIENT: expand each chapter with specific names, places and years once
// approved for publication (see README › Launch checklist).
const chapters = [
  {
    n: "I",
    title: "New Haven",
    tone: "linen" as const,
    plate: { tone: "linen" as const, label: "Where it started", alt: "A New Haven family kitchen, flour and tomatoes on the counter." },
    body: [
      "Before the restaurants, there was the table at home. In New Haven’s Italian-American households, Sunday meant a pot of gravy started in the morning, bread from the bakery down the street and more chairs than the room was built for.",
      "That is where Ray Gennaro learned what cooking is for: not to impress, but to take care of people — properly, generously, without shortcuts.",
    ],
  },
  {
    n: "II",
    title: "The Line",
    tone: "dark" as const,
    plate: { tone: "ember" as const, label: "Service, nine o’clock", alt: "A restaurant kitchen line during evening service, flame under a sauté pan." },
    body: [
      "Then came decades in professional kitchens — the heat, the speed and the discipline of the line. Restaurants teach what no family kitchen can: consistency at volume, timing to the second, and the respect of a brigade.",
      "The instincts from home stayed. The technique around them sharpened year after year.",
    ],
  },
  {
    n: "III",
    title: "The Private Rooms",
    tone: "walnut" as const,
    plate: { tone: "smoke" as const, label: "A private room", alt: "A low-lit private dining room, a single table set for eight." },
    body: [
      "Private service asks for something different. The guest is not a ticket on a rail; they are someone whose home you are standing in. Chef Gennaro moved into private households and luxury dining, where precision has to sit alongside warmth and absolute discretion.",
      "It suited him. Some of his most important evenings are ones nobody outside the room will ever hear about.",
    ],
  },
  {
    n: "IV",
    title: "The Islands",
    tone: "dark" as const,
    plate: { tone: "tide" as const, label: "Open water", alt: "A private island dock at dusk, lanterns lit along the path." },
    body: [
      "Private-island dining is the purest test of a chef’s planning. Every ingredient, every tool, every contingency must be accounted for before departure. There is no running to the store.",
      "Chef Gennaro has created dinners in exactly these settings — and the measure of success is that the guests never notice how far the food has travelled.",
    ],
  },
  {
    n: "V",
    title: "The Lessons",
    tone: "linen" as const,
    plate: { tone: "linen" as const, label: "Hands in the dough", alt: "Chef Gennaro teaching a guest to shape fresh pasta." },
    body: [
      "Teaching closes the circle. In private lessons, Chef Gennaro passes on what was passed to him: the feel of a dough, the patience of a sauce, the confidence to season by taste.",
      "The recipes are written down at the end. The rest stays in the hands.",
    ],
  },
];

export default function ChefPage() {
  return (
    <>
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

      {chapters.map((c, i) => (
        <section key={c.n} aria-labelledby={`chapter-${c.n}`} className={cn("section", `tone-${c.tone}`)}>
          <div className="container-x grid gap-14 md:grid-cols-12 md:gap-10">
            <div className={cn("md:col-span-5", i % 2 ? "md:order-2 md:col-start-8" : "")}>
              <Plate {...c.plate} ratio={i % 2 ? "aspect-[4/5]" : "aspect-[5/6]"} sizes="(min-width: 768px) 40vw, 100vw" />
            </div>
            <div className={cn("md:col-span-6 md:self-center", i % 2 ? "md:order-1" : "md:col-start-7")}>
              <p className="flex items-center gap-4" data-reveal>
                <span className="font-display text-xl italic text-accent">{c.n}</span>
                <span aria-hidden className="h-px w-10 bg-accent/60" />
                <span className="text-eyebrow">Chapter</span>
              </p>
              <h2 id={`chapter-${c.n}`} className="text-h1 mt-8" data-reveal-group>
                <span className="line-mask"><span>{c.title}</span></span>
              </h2>
              <div className="mt-10 max-w-[34rem] space-y-6 text-lead" data-reveal>
                {c.body.map((p, j) => (
                  <p key={j} className={cn(j === 0 && i === 0 && "drop-cap", j > 0 && "text-fg-muted")}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <InquiryClose title={["Bring him", "to your table."]} />
    </>
  );
}

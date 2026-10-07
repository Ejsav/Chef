import type { PlateTone } from "@/components/ui/Plate";

// The Archive: Chef Gennaro's history as eras, each with a place and the
// lesson it left him — the "why" behind how he cooks and hosts today.
// Every era is drawn from his documented history. CLIENT: add `years`,
// named places and archival photographs (family, early kitchens, menus)
// as they are approved; the layout already makes room for them.

export type Era = {
  id: string;
  numeral: string;
  era: string;
  years?: string;
  title: string;
  place: string;
  body: string;
  lesson: string;
  plate: { tone: PlateTone; label: string; alt: string; src?: string };
};

export const archive: Era[] = [
  {
    id: "family-table",
    numeral: "I",
    era: "The beginning",
    title: "The family table",
    place: "New Haven, Connecticut",
    body: "In New Haven's Italian-American households, Sunday meant a pot of gravy started in the morning and more chairs than the room was built for. The kitchen was the centre of the house, and feeding people properly was a matter of respect.",
    lesson: "Feed people properly — generously, and without shortcuts.",
    plate: { tone: "linen", label: "Sunday, before noon", alt: "A family kitchen in New Haven, a pot simmering on the stove." },
  },
  {
    id: "the-line",
    numeral: "II",
    era: "The formation",
    title: "The line",
    place: "Professional kitchens",
    body: "Then decades in restaurant kitchens: the heat, the speed, the discipline of service. The line teaches what no family kitchen can — timing to the second, consistency at volume, and the respect of the people working beside you.",
    lesson: "Consistency is a form of respect.",
    plate: { tone: "ember", label: "Service, nine o’clock", alt: "A restaurant line mid-service, flame beneath a pan." },
  },
  {
    id: "private-rooms",
    numeral: "III",
    era: "The turn",
    title: "The private rooms",
    place: "Households, estates & luxury dining",
    body: "Private service asks for something a restaurant never does. The guest is not a ticket on a rail; you are standing in their home. Precision has to sit alongside warmth, and everything happens with absolute discretion.",
    lesson: "The guest should never see the effort.",
    plate: { tone: "smoke", label: "A private room", alt: "A low-lit private dining room with a single table set for eight." },
  },
  {
    id: "islands",
    numeral: "IV",
    era: "The distance",
    title: "The islands",
    place: "Private islands",
    body: "Cooking on a private island is the purest test of planning. Every ingredient, every tool and every contingency is accounted for before departure — and the measure of success is that nobody at the table notices how far the food has travelled.",
    lesson: "Plan for everything, so the evening feels like nothing was planned.",
    plate: { tone: "tide", label: "Open water", alt: "A private island dock at dusk with lanterns lit." },
  },
  {
    id: "lessons",
    numeral: "V",
    era: "The circle",
    title: "The lessons",
    place: "Counters, everywhere",
    body: "Teaching closes the circle. In private lessons he passes on what was passed to him: the feel of a dough, the patience of a sauce, the confidence to season by taste.",
    lesson: "What you were given, you hand on.",
    plate: { tone: "linen", label: "Hands in the dough", alt: "A guest learning to shape fresh pasta by hand." },
  },
  {
    id: "now",
    numeral: "VI",
    era: "Now",
    title: "Wherever the table is",
    place: "Connecticut, and beyond",
    body: "Today Chef Gennaro cooks for private tables from his base in Connecticut and travels by arrangement — a Manhattan apartment, an estate, a yacht, an island. The family table is still the reference for all of it.",
    lesson: "Every evening is written once.",
    plate: { tone: "ember", label: "The table, tonight", alt: "A table set by candlelight, waiting for its guests." },
  },
];

// How he works, in his terms. CLIENT: Chef to approve the wording of each
// standard — these should sound exactly like him.
export const standards = [
  { title: "The guest never sees the effort.", body: "Preparation, logistics, the problem with the oven at six o'clock — none of it reaches the table. What reaches the table is the evening." },
  { title: "Taste everything. Twice.", body: "Once when it is made, once before it leaves. Seasoning is a decision, not a habit." },
  { title: "Leave the kitchen cleaner than you found it.", body: "It is your home. The team leaves it as if nobody had cooked there — except for the smell of garlic, which is permanent." },
  { title: "No two tables get the same night.", body: "Menus are written for one table and one occasion. If you loved a dish, it can come back — but the evening is always new." },
  { title: "What is said at the table stays at the table.", body: "Discretion is not a policy; it is how he was raised to behave in someone else's home." },
] as const;

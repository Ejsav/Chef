// The four ways to have Chef Gennaro cook for you.
// Guest counts and lead times are sensible defaults for a private chef at this
// level — CLIENT: confirm every `scale` and `notice` value before launch.

export type Experience = {
  slug: string;
  numeral: string;
  name: string;
  kicker: string;
  summary: string;
  body: string[];
  includes: string[];
  scale: string;
  notice: string;
  plate: { label: string; tone: "ember" | "linen" | "tide" | "smoke"; src?: string; alt: string };
};

export const experiences: Experience[] = [
  {
    slug: "the-private-table",
    numeral: "I",
    name: "The Private Table",
    kicker: "In your residence",
    summary:
      "A dinner composed for one evening and one table. Chef Gennaro and his team take over the kitchen; you never leave the room.",
    body: [
      "It begins with a conversation, not a menu. Who is at the table, what they love, what they would never order for themselves. From there Chef Gennaro writes a menu that exists once, for that night.",
      "His team arrives early, cooks in your kitchen, serves with the quiet of a great dining room and leaves it cleaner than they found it. The only trace is the menu card left at each place.",
    ],
    includes: [
      "A menu written for the evening",
      "Sourcing from Chef Gennaro's growers, fishmongers and butchers",
      "Kitchen team and table service",
      "Wine pairing with a sommelier, on request",
      "Printed menu cards for each guest",
    ],
    scale: "Two to twenty-four guests",
    notice: "Two to three weeks recommended",
    plate: { label: "The table, before the guests", tone: "ember", alt: "A candlelit private dining table set with ivory linen and brass." },
  },
  {
    slug: "the-island-and-the-water",
    numeral: "II",
    name: "The Island & The Water",
    kicker: "Private islands · Yachts · Destinations",
    summary:
      "Chef Gennaro has cooked on private islands, where every ingredient must be planned before anyone arrives. He brings the same calm to yachts, estates and remote residences.",
    body: [
      "Cooking far from a market is its own discipline. Every ingredient, every tool and every contingency is planned before departure. Nothing on the night should reveal how hard it was to get there.",
      "For yachts, island residences and destination weekends, Chef Gennaro arranges provisioning, staffing and service and works alongside your captain, house manager or planner.",
    ],
    includes: [
      "Full provisioning and logistics plan",
      "Multi-day menus across breakfast, lunch and dinner",
      "Travelling team sized to the stay",
      "Coordination with captain, estate staff or planner",
      "Discretion agreements as standard",
    ],
    scale: "By arrangement",
    notice: "Six weeks or more recommended",
    plate: { label: "Late service, open water", tone: "tide", alt: "A dinner table on a terrace above dark water at dusk." },
  },
  {
    slug: "the-kitchen-lessons",
    numeral: "III",
    name: "The Kitchen Lessons",
    kicker: "Private cooking instruction",
    summary:
      "The recipes are not secrets; the hands are. Private lessons in the Italian-American canon and beyond, taught at your counter.",
    body: [
      "Fresh pasta by hand. A red sauce that has been simmering in New Haven kitchens for a century. How to break down a fish, build a pan sauce, season with confidence.",
      "Lessons are private: one family, a few friends, or a team that would rather cook together than sit through another dinner. Everyone eats what they made.",
    ],
    includes: [
      "Lesson planned around the group's skill and appetite",
      "All ingredients and specialist equipment",
      "The meal you cook, served at the end",
      "Written recipes to keep",
    ],
    scale: "One to twelve participants",
    notice: "Two weeks recommended",
    plate: { label: "Flour, eggs, hands", tone: "linen", alt: "Hands working fresh pasta dough on a floured wooden counter." },
  },
  {
    slug: "the-occasion",
    numeral: "IV",
    name: "The Occasion",
    kicker: "Celebrations · Salons · Hosted evenings",
    summary:
      "Anniversaries, milestone birthdays, engagements, private salons for clients. Evenings where the food must be extraordinary and nobody can be seen working.",
    body: [
      "Larger evenings ask for more choreography: multiple courses for many guests, a room that flows, timing that lets speeches land and the next course arrive warm.",
      "Chef Gennaro works with your planner or directly with you, and scales the team, rentals and service to the occasion without losing the feeling of a private table.",
    ],
    includes: [
      "Menu development and tasting, by arrangement",
      "Kitchen team, service staff and rentals",
      "Planner and venue coordination",
      "Seated, family-style or roaming service",
    ],
    scale: "Up to eighty guests",
    notice: "Four weeks or more recommended",
    plate: { label: "Toasts, third course", tone: "smoke", alt: "Glasses raised over a long celebration table in low warm light." },
  },
];

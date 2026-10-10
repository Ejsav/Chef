import type { PlateTone } from "@/components/ui/Plate";

// Where Chef Gennaro cooks: one page per place, for the people searching
// "private chef in …". Each page is written for its place (logistics,
// seasons, questions people there actually ask); none is a template with
// the town name swapped. Connecticut is home; everywhere else is by
// arrangement, and the copy says so.
// CLIENT: confirm the areas listed and add any place Chef wants to be found for.

export type Place = {
  slug: string;
  name: string;
  eyebrow: string;
  lines: [string, string];
  metaTitle: string;
  metaDescription: string;
  setting: string; // composer + inquiry setting id
  menu: string;    // sample menu slug that suits the place
  plate: { tone: PlateTone; label: string; alt: string; src?: string };
  intro: string[];
  evening: { title: string; body: string }[];
  logistics: string[];
  areas?: string;
  faqs: { q: string; a: string }[];
};

export const places: Place[] = [
  {
    slug: "connecticut",
    name: "Connecticut",
    eyebrow: "Private chef · Connecticut",
    lines: ["A private chef", "in Connecticut."],
    metaTitle: "Private Chef in Connecticut",
    metaDescription:
      "Chef Ray Gennaro is a Connecticut private chef with New Haven roots: private dinners, celebrations and cooking lessons in homes across Fairfield County, the shoreline and beyond.",
    setting: "residence",
    menu: "late-summer-in-connecticut",
    plate: { tone: "ember", label: "Home ground", alt: "A Connecticut dining room set for a private dinner by candlelight." },
    intro: [
      "Connecticut is home. Ray Gennaro learned to cook in New Haven's Italian-American kitchens before decades in professional kitchens, so a dinner here starts on home ground: the shoreline's fish, the state's farms at their peak, and a cook who knows exactly where both come from.",
      "Most evenings take place in the host's own home, from a Greenwich dining room to a shoreline house with the windows open. The kitchen becomes his for the afternoon, the dining room becomes a restaurant for one night, and by midnight it is a home again.",
    ],
    evening: [
      { title: "The house becomes the restaurant", body: "Chef Gennaro and his team arrive hours before the first guest, cook in your kitchen and serve at your table. You host; they do everything else." },
      { title: "The state's best, in season", body: "Stonington scallops, shoreline oysters, sweet corn and heirloom tomatoes in late summer; braises and fresh pasta when the weather turns." },
      { title: "From two to a long table", body: "An anniversary for two, a family Sunday for twelve, or a celebration that fills the house." },
    ],
    logistics: [
      "A short walkthrough of your kitchen before the evening, in person or by video.",
      "Any missing equipment, rentals, glassware or staff are arranged for you.",
      "Wine pairing with a sommelier, on request.",
      "The kitchen is left cleaner than it was found.",
    ],
    areas: "Greenwich, Darien, New Canaan, Westport and the rest of Fairfield County; New Haven and the shoreline to Old Saybrook and Stonington; Litchfield County and the Hartford area.",
    faqs: [
      { q: "Do you cook in homes across all of Connecticut?", a: "Yes. Chef Gennaro is based in Connecticut and cooks in private homes throughout the state, most often in Fairfield County, along the shoreline and in New Haven." },
      { q: "What do I need to have in my kitchen?", a: "A working stove and oven is enough. Anything else, from extra burners to platters and glassware, is brought in or arranged ahead of the evening." },
      { q: "How far ahead should I book a dinner in Connecticut?", a: "Two to three weeks is comfortable for most dinners. Holidays and summer weekends fill first, so earlier is better for those dates." },
    ],
  },
  {
    slug: "new-york-city",
    name: "New York City",
    eyebrow: "Private chef · New York City",
    lines: ["A private chef", "in Manhattan."],
    metaTitle: "Private Chef in New York City & Manhattan",
    metaDescription:
      "Private dinners in Manhattan apartments and New York homes with Connecticut chef Ray Gennaro. Italian-American cooking, served at your table with complete discretion.",
    setting: "penthouse",
    menu: "a-winter-table",
    plate: { tone: "smoke", label: "Above the avenue", alt: "A dinner table set before tall windows with the city lit beyond." },
    intro: [
      "New Yorkers can eat anywhere, which is exactly why a private table matters here. There's no reservation to chase and no room to share. The conversation stays in the room, and the cooking is built around the people in it.",
      "Chef Gennaro brings the same Italian-American cooking to Manhattan apartments, townhouses and lofts, working with whatever kitchen the city has given you. In some apartments that is the smallest room in the home. It is always enough.",
    ],
    evening: [
      { title: "Planned around the building", body: "Doormen, service elevators, delivery windows and building rules are arranged in advance, so nothing about the logistics reaches your evening." },
      { title: "Courses paced to the view", body: "Service is timed around the room: aperitivo as the light goes, dinner as the city comes on." },
      { title: "Dinners that do business", body: "A client dinner, a board evening, a founder's celebration. The food is extraordinary and the room stays private." },
    ],
    logistics: [
      "Building access, freight timing and insurance certificates handled with your management.",
      "Preparation finished off-site when an apartment kitchen is small.",
      "Staffing sized for the room, from a single server to a full team.",
      "Travel from Connecticut is included in your proposal.",
    ],
    areas: "Manhattan, Brooklyn and Westchester, by arrangement.",
    faqs: [
      { q: "Can you cook in a small New York apartment kitchen?", a: "Yes. Much of the preparation can be completed before arrival, so even a compact kitchen is enough for finishing and service." },
      { q: "Do you handle the building's requirements?", a: "Yes. Service elevator bookings, certificates of insurance and delivery windows are coordinated with your building before the evening." },
      { q: "Is New York available for weeknight dinners?", a: "Often. Weeknights are popular for business dinners in the city; share your preferred dates in the request and the office will confirm." },
    ],
  },
  {
    slug: "the-hamptons",
    name: "The Hamptons",
    eyebrow: "Private chef · The Hamptons",
    lines: ["A private chef", "in the Hamptons."],
    metaTitle: "Private Chef in the Hamptons",
    metaDescription:
      "Summer dinners, long tables and weekend stays in the Hamptons with private chef Ray Gennaro. East End produce, Italian-American roots, served on your lawn or terrace.",
    setting: "estate",
    menu: "late-summer-in-connecticut",
    plate: { tone: "linen", label: "Long table, late August", alt: "A long dinner table on an estate lawn at golden hour." },
    intro: [
      "A Hamptons summer is built around the table: long lunches, dinners that run past dark, a house full of guests for the weekend. Chef Gennaro cooks for exactly that rhythm, from one perfect dinner to a full weekend of meals.",
      "The cooking follows the East End. There are farm-stand tomatoes and corn, local fish and Long Island duck, all filtered through the Italian-American kitchen he grew up in. Dinner can be served on the lawn, the terrace, or indoors if the weather has other ideas.",
    ],
    evening: [
      { title: "Golden hour on the lawn", body: "Long tables timed to the light, with an indoor plan ready, because weather is always a guest." },
      { title: "The whole weekend, handled", body: "Breakfast, a beach lunch, a late dinner and Sunday's recovery. Menus planned across the stay so nothing repeats." },
      { title: "Celebrations at scale", body: "Birthdays, engagements and summer parties, with the team and rentals sized to the occasion." },
    ],
    logistics: [
      "Sourcing from East End farms and fishmongers when the season allows.",
      "Staff, rentals and tenting coordinated with your house manager or planner.",
      "Multi-day stays planned as one menu arc.",
      "Summer weekends book early; holiday dates first of all.",
    ],
    areas: "Southampton, Bridgehampton, Sagaponack, East Hampton, Amagansett, Montauk, Sag Harbor and Shelter Island, by arrangement.",
    faqs: [
      { q: "Can you cook for a whole weekend in the Hamptons?", a: "Yes. Weekend stays are planned as a single arc of meals, from breakfast to late dinner, so each one feels different and nothing is repeated." },
      { q: "How early should I book a summer date?", a: "As early as possible. July and August weekends, and the holiday weekends especially, are the first dates to go." },
      { q: "Can dinner be served outdoors?", a: "Yes, on the lawn, terrace or beach, always with an indoor plan prepared in case the weather changes." },
    ],
  },
  {
    slug: "florida",
    name: "Florida",
    eyebrow: "Private chef · Palm Beach & Miami",
    lines: ["A private chef", "in Florida."],
    metaTitle: "Private Chef in Palm Beach & Miami",
    metaDescription:
      "Waterfront dinners and winter-season stays in Palm Beach and Miami with private chef Ray Gennaro, who travels from Connecticut by arrangement.",
    setting: "waterfront",
    menu: "a-night-aboard",
    plate: { tone: "tide", label: "Doors open to the bay", alt: "A terrace table on the water at blue hour in Florida." },
    intro: [
      "For many Connecticut and New York families, winter means Florida. In Palm Beach, Miami and along the coast, Chef Gennaro brings the same cooking to warm nights and open doors, travelling by arrangement.",
      "The menus get lighter as the temperature rises: coastal fish, citrus and olive oil, and pasta that suits the heat. The hospitality stays exactly the same.",
    ],
    evening: [
      { title: "Waterfront dinners", body: "Terrace tables timed to blue hour, with menus built around the coast's seafood." },
      { title: "The winter season", body: "A dinner during your stay, or a series of evenings across the season." },
      { title: "From the dock", body: "Dinners that begin at home and continue aboard, coordinated with your captain." },
    ],
    logistics: [
      "A travelling team and provisioning plan prepared in advance.",
      "Local suppliers vetted ahead of arrival.",
      "Travel and accommodation set out clearly in the proposal.",
      "Winter-season dates, December to April, book early.",
    ],
    areas: "Palm Beach, Jupiter, Boca Raton, Miami and the Florida Keys, by arrangement.",
    faqs: [
      { q: "Do you travel to Florida?", a: "Yes, by arrangement. Chef Gennaro travels from Connecticut with his team for single dinners or longer stays, most often during the winter season." },
      { q: "How are travel costs handled?", a: "Travel and accommodation are set out clearly in your proposal, so the full cost is known before you confirm." },
      { q: "Can you cook for several evenings during our stay?", a: "Yes. A series of dinners can be planned across the season or a single visit." },
    ],
  },
  {
    slug: "yachts",
    name: "Yachts",
    eyebrow: "Private chef · Yachts",
    lines: ["A private chef", "aboard."],
    metaTitle: "Private Yacht Chef — Charters & Owners",
    metaDescription:
      "Private yacht chef Ray Gennaro cooks for owners and charter guests, with galley-planned menus, full provisioning and coordination with your captain and crew.",
    setting: "yacht",
    menu: "a-night-aboard",
    plate: { tone: "tide", label: "Anchored, second course", alt: "A dinner table on the aft deck of a yacht at sunset." },
    intro: [
      "A galley is a precise place to cook. Every ingredient is stowed and every tool accounted for, and the menu has to respect motion, space and the sea. Chef Gennaro plans for all of it before the lines are cast off.",
      "He cooks for owners and charter guests, for a single dinner at anchor or for days at sea, working alongside the captain and interior crew rather than around them.",
    ],
    evening: [
      { title: "Dinner at anchor", body: "One evening on board: a coastal menu served on deck as the light goes." },
      { title: "Days at sea", body: "Breakfast to dinner across a charter, with menus planned around provisioning and storage." },
      { title: "Shore to ship", body: "A dinner that begins at the dock and finishes underway, timed with the crew." },
    ],
    logistics: [
      "Galley, storage and equipment reviewed with the captain before the menu is final.",
      "Full provisioning lists, with redundancy for anything that can't be replaced at sea.",
      "Coordination with the chief stew on service and table settings.",
      "Confidentiality agreements as standard.",
    ],
    faqs: [
      { q: "Can you cook on a charter yacht as well as a private one?", a: "Yes. Chef Gennaro works with owners, charter guests and their brokers, coordinating with the captain and crew in each case." },
      { q: "What if the galley is small?", a: "Menus are designed for the galley you have. A compact galley calls for different cooking, not lesser cooking." },
      { q: "Do you handle provisioning?", a: "Yes. Provisioning is planned in full before departure, including backups for critical ingredients." },
    ],
  },
  {
    slug: "private-islands",
    name: "Private islands",
    eyebrow: "Private chef · Private islands",
    lines: ["A private chef", "for private islands."],
    metaTitle: "Private Island Chef",
    metaDescription:
      "Chef Ray Gennaro has cooked private-island dinners where every ingredient must be planned before departure. Island and remote-residence dining, by arrangement.",
    setting: "island",
    menu: "a-night-aboard",
    plate: { tone: "tide", label: "Lanterns along the dock", alt: "A lantern-lit dock leading to a table on a private island at dusk." },
    intro: [
      "Cooking on a private island is the purest test of a chef's planning. What isn't on the boat doesn't exist. Every ingredient, every tool and every contingency is decided before departure.",
      "Chef Gennaro has cooked in exactly these conditions. The measure of success is simple: nobody at the table notices how far the food has travelled.",
    ],
    evening: [
      { title: "The single extraordinary dinner", body: "One table at the water's edge, lanterns along the dock, a menu built from what made the crossing." },
      { title: "The island stay", body: "Every meal for several days, planned as one menu so everything that arrives is used well." },
      { title: "Remote residences", body: "The same discipline for mountain homes, ranches and estates far from a market." },
    ],
    logistics: [
      "A complete logistics and provisioning plan before departure.",
      "Redundancy for every critical ingredient and piece of equipment.",
      "Coordination with island managers, boat captains and staff.",
      "Confidentiality as standard, and no photographs unless you ask.",
    ],
    faqs: [
      { q: "Have you cooked on private islands before?", a: "Yes. Private-island dining is part of Chef Gennaro's documented experience, and the planning discipline it demands shapes how he approaches every remote engagement." },
      { q: "How much notice does an island engagement need?", a: "Six weeks or more is recommended, so sourcing, transport and staffing can be planned properly." },
      { q: "Can you work with our island staff?", a: "Yes. Chef Gennaro coordinates with island managers, captains and house staff, and brings his own team as needed." },
    ],
  },
];

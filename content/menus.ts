// Sample menus. They are presented on the site as samples, never as records
// of real past evenings: every real menu is written once, for one table.
// They show the range of the cooking: Italian-American at the root, the
// season and the setting deciding the rest.
// CLIENT: Chef Gennaro to rewrite each in his own dishes and wording.

export type Course = { label: string; dish: string; note?: string };
export type Menu = {
  slug: string;
  title: string;
  occasion: string;
  setting: string;   // composer setting id, used to pre-fill the inquiry
  season: string;
  intro: string;
  courses: Course[];
  pairing: string;
};

export const menus: Menu[] = [
  {
    slug: "sunday-the-new-haven-way",
    title: "Sunday, the New Haven way",
    occasion: "A family table",
    setting: "residence",
    season: "All year",
    intro: "The meal he grew up on, served the way it was meant to be: family style, generous, and long.",
    courses: [
      { label: "Antipasto", dish: "Soppressata, sharp provolone, roasted peppers, marinated olives", note: "warm semolina bread, good oil" },
      { label: "Primo", dish: "Rigatoni with Sunday gravy", note: "pork, braciole and meatballs, cooked since morning" },
      { label: "Secondo", dish: "The braciole and meatballs from the pot", note: "sliced at the table" },
      { label: "Contorno", dish: "Broccoli rabe with garlic and chili" },
      { label: "Dolce", dish: "Ricotta cheesecake", note: "espresso, anisette" },
    ],
    pairing: "Chianti Classico and Aglianico, poured without ceremony.",
  },
  {
    slug: "late-summer-in-connecticut",
    title: "Late summer in Connecticut",
    occasion: "A dinner among friends",
    setting: "estate",
    season: "August – September",
    intro: "Built around what the state does best at the end of summer: tomatoes, corn, scallops and stone fruit.",
    courses: [
      { label: "To begin", dish: "Heirloom tomatoes, burrata, torn basil, aged balsamic" },
      { label: "Crudo", dish: "Sea scallops, lemon, chili, olive oil" },
      { label: "Primo", dish: "Hand-cut tagliatelle, sweet corn, brown butter, pecorino" },
      { label: "Secondo", dish: "Whole grilled striped bass, salsa verde", note: "charred lemons, new potatoes" },
      { label: "Dolce", dish: "Roasted peaches, amaretti, mascarpone" },
    ],
    pairing: "Vermentino with the fish, a chilled Frappato with the bass.",
  },
  {
    slug: "a-night-aboard",
    title: "A night aboard",
    occasion: "Dinner at anchor",
    setting: "yacht",
    season: "Summer",
    intro: "Composed for a galley and a deck: bright, coastal, and served the moment it is ready.",
    courses: [
      { label: "On deck", dish: "Oysters, prosecco mignonette" },
      { label: "Crudo", dish: "Local fluke, blood orange, fennel, pistachio" },
      { label: "Primo", dish: "Linguine with littleneck clams, garlic, white wine, parsley" },
      { label: "Secondo", dish: "Grilled swordfish, caponata" },
      { label: "Dolce", dish: "Lemon olive-oil cake, macerated berries" },
    ],
    pairing: "Franciacorta to start, Fiano through dinner.",
  },
  {
    slug: "a-winter-table",
    title: "A winter table",
    occasion: "A milestone",
    setting: "penthouse",
    season: "December – February",
    intro: "Slow cooking for a cold night: braises, rich pasta, and a dessert worth staying for.",
    courses: [
      { label: "To begin", dish: "Escarole and white bean soup, parmigiano broth" },
      { label: "Primo", dish: "Short rib agnolotti, brown butter, sage" },
      { label: "Secondo", dish: "Osso buco, saffron risotto, gremolata" },
      { label: "Contorno", dish: "Roasted winter greens, garlic, lemon" },
      { label: "Dolce", dish: "Tiramisù, made that afternoon", note: "amaro to finish" },
    ],
    pairing: "Barolo with the osso buco; Vin Santo with dessert.",
  },
];

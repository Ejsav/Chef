// Ray Gennaro in his own words, and the people he has cooked for in theirs.
// Every array here starts EMPTY on purpose: the site never shows an invented
// quote, testimonial or number. Each section appears automatically the moment
// its array has content. Fill these from the interview (docs/RAY_INTERVIEW.md).

/** Ray's own words. The first appears on the home page under the premise;
 *  others can be used across the site. Exact wording from the interview. */
export const quotes: { text: string; context?: string }[] = [
  // { text: "…", context: "On Sunday mornings in New Haven" },
];

/** Client words, approved by the client in writing. Never a full name
 *  unless they ask for it. Attribution describes, it doesn't identify. */
export const testimonials: { quote: string; attribution: string }[] = [
  // { quote: "…", attribution: "A family in Greenwich" },
];

/** Verifiable figures for the Chef section ledger, e.g.
 *  { figure: "30+", label: "years in professional kitchens" }. */
export const credentials: { figure: string; label: string }[] = [];

/** Press and appearances, when they exist. */
export const press: { outlet: string; title: string; url?: string; year?: string }[] = [];

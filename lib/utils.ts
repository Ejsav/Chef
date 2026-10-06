/** Class-name joiner with falsy filtering. */
export const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

export const clamp = (n: number, min: number, max: number) =>
  Math.min(Math.max(n, min), max);

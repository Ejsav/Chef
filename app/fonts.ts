import { Bodoni_Moda, Instrument_Sans } from "next/font/google";

// Bodoni: born in Parma, the typeface of Italian luxury printing for two
// centuries — old-world authority with razor hairlines. Instrument Sans is the
// quiet modern counterweight for UI and body, with an even, tailored rhythm.
export const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-bodoni",
});

export const instrument = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument",
});

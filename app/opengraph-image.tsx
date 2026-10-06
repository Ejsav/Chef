import { ImageResponse } from "next/og";

// 1200×630 share card rendered at build time: the name in Bodoni under
// a warm candle pool, the same scene as the hero.
export const alt = "Chef Ray Gennaro — Private tables, by arrangement";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function font(text: string, family: string, ital = false) {
  const url = `https://fonts.googleapis.com/css2?family=${family}:${ital ? "ital@1" : "wght@400"}&text=${encodeURIComponent(text)}`;
  try {
    const css = await (await fetch(url)).text();
    const src = css.match(/src: url\((.+?)\) format/)?.[1];
    return src ? await (await fetch(src)).arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function OG() {
  const [roman, italic] = await Promise.all([
    font("Chef Ray", "Bodoni+Moda"),
    font("Chef Gennaro Private tables for people who could dine anywhere.", "Bodoni+Moda", true),
  ]);
  const fonts = [
    roman && { name: "Bodoni", data: roman, style: "normal" as const, weight: 400 as const },
    italic && { name: "Bodoni", data: italic, style: "italic" as const, weight: 400 as const },
  ].filter(Boolean) as { name: string; data: ArrayBuffer; style: "normal" | "italic"; weight: 400 }[];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px 80px",
          backgroundColor: "#110c09",
          backgroundImage:
            "radial-gradient(60% 70% at 50% 110%, rgba(205,140,70,0.42), rgba(120,62,28,0.15) 50%, transparent 80%)",
          color: "#ede5d6",
          fontFamily: "Bodoni, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 18, letterSpacing: 6, color: "#a89b8c", fontFamily: "sans-serif" }}>
          <div style={{ width: 48, height: 1, background: "#be9c68" }} />
          PRIVATE CHEF · CONNECTICUT
        </div>
        <div style={{ display: "flex", alignItems: "baseline", marginTop: 28, fontSize: 150, lineHeight: 0.95, letterSpacing: -3 }}>
          <span style={{ fontSize: 34, fontStyle: "italic", color: "#be9c68", marginRight: 18 }}>Chef</span>
          Ray&nbsp;<span style={{ fontStyle: "italic" }}>Gennaro</span>
        </div>
        <div style={{ marginTop: 34, fontSize: 30, color: "rgba(237,229,214,0.82)", fontStyle: "italic" }}>
          Private tables for people who could dine anywhere.
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined },
  );
}

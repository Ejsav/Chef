import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/inquiry";
import { experienceOptions } from "@/lib/inquiry";

// Validates every inquiry server-side. If Resend is configured it emails the
// office; otherwise it logs (so local/dev never silently drops a lead).
export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = inquirySchema.safeParse(json);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      errors[key] ??= issue.message;
    }
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const data = parsed.data;
  // Bots fill the honeypot — accept quietly, send nothing.
  if (data.company) return NextResponse.json({ ok: true });

  const experience = experienceOptions.find((o) => o.value === data.experience)?.label ?? data.experience;
  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone && `Phone: ${data.phone}`,
    `Experience: ${experience}`,
    data.date && `Date: ${data.date}`,
    `Location: ${data.location}`,
    data.guests && `Guests: ${data.guests}`,
    "",
    data.message || "(no message)",
  ].filter((l) => l !== undefined && l !== "") as string[];

  const { RESEND_API_KEY, INQUIRY_TO_EMAIL, INQUIRY_FROM_EMAIL } = process.env;
  if (RESEND_API_KEY && INQUIRY_TO_EMAIL && INQUIRY_FROM_EMAIL) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: INQUIRY_FROM_EMAIL,
        to: INQUIRY_TO_EMAIL,
        reply_to: data.email,
        subject: `Inquiry — ${experience} — ${data.name}`,
        text: lines.join("\n"),
      }),
    });
    if (!res.ok) {
      console.error("[inquire] Resend failed", res.status, await res.text());
      return NextResponse.json({ ok: false, error: "We could not send your inquiry. Please email us directly." }, { status: 502 });
    }
  } else {
    console.info("[inquire] Email delivery not configured. Inquiry received:\n" + lines.join("\n"));
  }

  return NextResponse.json({ ok: true });
}

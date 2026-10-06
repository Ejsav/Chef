import type { Metadata } from "next";
import { InquiryForm } from "@/components/sections/InquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Inquire — Request a Private Evening",
  description:
    "Request a private dinner, destination or private-island evening, or a cooking lesson with Chef Ray Gennaro. Every inquiry is answered personally.",
  alternates: { canonical: "/inquire" },
  openGraph: { title: "Request an evening — Chef Ray Gennaro", url: "/inquire" },
};

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export default function InquirePage() {
  return (
    <section aria-labelledby="inquire-title" className="tone-dark grain relative isolate min-h-[100svh] overflow-hidden">
      <div aria-hidden className="hero-lights candle absolute left-[-30%] top-[-20%] -z-10 h-[90%] w-[90%] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(205,140,70,0.16),transparent_70%)]" />
      <div className="container-x grid gap-16 pb-28 pt-[calc(var(--header-h)+clamp(4rem,10vw,8rem))] md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-[calc(var(--header-h)+3rem)]">
            <p className="hero-fade text-eyebrow flex items-center gap-4" style={d(150)}>
              <span aria-hidden className="hero-draw inline-block h-px w-10 bg-accent" style={d(100)} />
              Inquire
            </p>
            <h1 id="inquire-title" className="text-h1 mt-10 whitespace-nowrap !text-[clamp(2.6rem,4.4vw,4.25rem)]">
              <span className="hero-rise line-mask"><span style={d(220)}>Request</span></span>
              <span className="hero-rise line-mask"><span style={d(340)} className="italic text-accent">an evening.</span></span>
            </h1>
            <p className="hero-fade text-lead mt-10 max-w-sm" style={d(650)}>
              Share what you can. {site.responseNote}
            </p>
            <div className="hero-fade mt-12 space-y-2 border-t border-line pt-8 text-sm" style={d(800)}>
              <p className="text-eyebrow">Or write directly</p>
              <a href={`mailto:${site.email}`} className="link-underline inline-block pb-0.5 text-fg">{site.email}</a>
            </div>
          </div>
        </div>
        <div className="hero-fade md:col-span-7 md:col-start-6" style={d(500)}>
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}

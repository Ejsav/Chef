import { Plate } from "@/components/ui/Plate";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Cta } from "@/components/ui/Cta";

// Credentials as a ledger, not a stats bar. Every line here is drawn from
// Chef Gennaro's documented history; numbers are added only once verified.
const ledger = [
  ["Origin", "New Haven’s Italian-American kitchens"],
  ["Formation", "Decades in professional restaurant kitchens"],
  ["Private service", "Households, estates and luxury dining rooms"],
  ["Destinations", "Private-island and remote-residence dining"],
  ["Teaching", "Private cooking instruction"],
] as const;

export function ChefIntro() {
  return (
    <section aria-labelledby="chef-title" className="tone-walnut section relative overflow-hidden">
      <div className="container-x grid gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <Plate tone="portrait" alt="Portrait of Chef Ray Gennaro in his kitchen." label="The Chef" sizes="(min-width: 768px) 40vw, 100vw" />
        </div>

        <div className="md:col-span-6 md:col-start-7 md:pt-10">
          <Eyebrow index="III">The Chef</Eyebrow>
          <h2 id="chef-title" className="text-h1 mt-10" data-reveal-group>
            <span className="line-mask"><span>Raised on</span></span>
            <span className="line-mask" style={{ "--reveal-delay": "100ms" } as React.CSSProperties}><span className="italic text-accent">Sunday gravy.</span></span>
            <span className="line-mask" style={{ "--reveal-delay": "200ms" } as React.CSSProperties}><span>Made on the line.</span></span>
          </h2>
          <div className="mt-10 max-w-[34rem] space-y-6 text-lead" data-reveal>
            <p>
              Ray Gennaro learned to cook in the Italian-American world of New Haven, where
              a kitchen was the centre of the house and feeding people properly was a
              matter of respect.
            </p>
            <p className="text-fg-muted">
              Decades of professional kitchens followed — restaurants, private households,
              luxury dining rooms, and evenings on private islands. The cooking grew more
              precise. The hospitality never changed.
            </p>
          </div>

          <dl className="mt-14 border-t border-line" data-reveal>
            {ledger.map(([k, v]) => (
              <div key={k} className="grid grid-cols-1 gap-1 border-b border-line py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
                <dt className="text-[0.68rem] uppercase tracking-[0.26em] text-fg-muted sm:pt-1">{k}</dt>
                <dd className="font-display text-[1.2rem]">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12" data-reveal>
            <Cta href="/chef" variant="quiet">Read his story</Cta>
          </div>
        </div>
      </div>
    </section>
  );
}

# Chef Ray Gennaro — Digital House

The foundation site for Chef Ray Gennaro: Italian-American private chef, Connecticut, New Haven roots.

The benchmark is luxury hospitality (Aman, Casa Cipriani, private members' clubs), not other chef websites. That means restraint, negative space, editorial typography and discretion as the trust signal. There are no logo walls, no star ratings and no stock food.

## Art direction

| | |
|---|---|
| **Mood** | A private room at night. One warm light source. Linen, walnut, aged brass. Oxblood appears twice on the whole site. |
| **Display type** | **Bodoni Moda**. Bodoni was cut in Parma and has been the face of Italian luxury printing for two centuries. Italic is used for emphasis, the way a maître d' would underline. |
| **Body type** | **Instrument Sans**, a quiet, tailored modern counterweight. |
| **Palette** | Espresso `#110c09`, walnut `#1b140f`, ivory `#ede5d6`, linen `#f2ece1`, brass `#be9c68` (deep brass `#7a5e34` on linen), oxblood `#6c1e22`. |
| **Rhythm** | Sections alternate dark / linen like the pages of a menu card. Tones are CSS-variable scopes (`.tone-dark`, `.tone-walnut`, `.tone-linen`), so every component works on all of them. |
| **Motion** | Slow, weighted, cinematic easing (`expo.out`, 1.4–1.8s). Lines rise from masks, hairlines draw, and the candle glow breathes. Everything respects `prefers-reduced-motion`. |

## Structure

```
app/
  page.tsx               Home: Hero, Premise, Experiences, Chef, Evening, Discretion, Close
  experiences/page.tsx   The four experiences in full
  chef/page.tsx          The story, in five chapters
  inquire/page.tsx       Private inquiry (form → /api/inquire)
  api/inquire/route.ts   Zod-validated; emails via Resend if configured
  opengraph-image.tsx    1200×630 share card, rendered at build
  sitemap.ts · robots.ts · icon.svg · not-found.tsx
components/
  sections/              Page sections (server components except where noted)
  layout/                Header (hide-on-scroll, mobile curtain w/ focus trap), Footer
  motion/                SmoothScroll (Lenis), RevealObserver, ScrollWords (GSAP), Lines
  ui/                    Plate (photo slot), Cta, Eyebrow, Monogram
  seo/JsonLd.tsx         Person + ProfessionalService structured data
content/                 experiences.ts, method.ts. Edit copy here.
lib/site.ts              Brand facts: domain, email, region. Single source of truth.
```

## Run

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL; Resend keys optional
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

Deploy target: Vercel. Set `NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, `INQUIRY_TO_EMAIL`, `INQUIRY_FROM_EMAIL` in the project's environment variables.

## Verified (production build, Lighthouse 12, mobile, localhost)

| Page | Perf | A11y | Best practices | SEO | CLS |
|---|---|---|---|---|---|
| `/` | 95 | 96* | 100 | 100 | 0 |
| `/experiences` | 97 | 100 | 100 | 100 | 0 |
| `/chef` | 95 | 100 | 100 | 100 | 0 |
| `/inquire` | 94 | 100 | 100 | 100 | 0 |

\* The home flag is the scroll-scrubbed manifesto: words start as ghosts (20% opacity) and resolve to full contrast as they are read. It is a deliberate, transient state; reduced-motion users get full contrast immediately.

Mobile LCP measured 2.6–3.0s on localhost under simulated slow 4G, including ~450ms local TTFB. Re-measure on the deployed Vercel URL, where edge TTFB should bring it under 2.5s.

Also checked: no horizontal overflow at 320/390/768/1024px, one `<h1>` per page, form validation focuses the first invalid field, the mobile menu traps focus and closes on Escape, and there are no console errors.

## Launch checklist: CLIENT must confirm

The site was built from the brief only. Nothing has been invented as a *result*: no clients, press, numbers or testimonials. But some operational details and story copy are informed drafts and must be confirmed before going live:

- [ ] **Domain and inbox** in `lib/site.ts` (`raygennaro.com`, `table@raygennaro.com` are placeholders)
- [ ] **Instagram handle** in `lib/site.ts` (hidden until set)
- [ ] **Guest counts and notice periods** for each experience in `content/experiences.ts`
- [ ] **Service area** list in `lib/site.ts` (currently CT, NY, the Hamptons, islands/yachts by arrangement)
- [ ] **Chef story chapters** in `app/chef/page.tsx`. The voice is right, but add real names, places and years where Chef approves publishing them
- [ ] **"References, privately"** and the **handwritten note after each evening** (Discretion section and Method step 05): confirm these are true of how Chef works
- [ ] **Sommelier pairing** and **menu cards** listed under *The Private Table*
- [ ] Resend account and verified sending domain for inquiry email

## Photography: the one thing that will move this from strong to world-class

Every image slot is a `Plate`. Until real photographs exist, each renders a lit, grained tonal study in the right mood. When the shoot happens, add `src` to the plate (e.g. `/images/private-table.jpg` in `public/images/`) and `next/image` takes over: AVIF/WebP and responsive sizes.

Shoot direction: **available light, shallow depth of field, never flash, never overhead "flat lay" food shots.** Think film still, not menu photography. Faces of guests are never shown.

| Slot | Where | Brief |
|---|---|---|
| The table, before the guests | Home index, Experience I | Candlelit table, ivory linen, brass, glassware in soft focus. 4:5. |
| Late service, open water | Experience II, Chef IV | Terrace or dock at dusk, lanterns, water beyond. 4:5. |
| Flour, eggs, hands | Experience III, Chef I & V | Chef's hands in pasta dough, raking side light. 4:5. |
| Toasts, third course | Experience IV | Raised glasses, long table, motion blur allowed. 4:5. |
| The Chef (portrait) | Home Chef section | Ray in dark tailoring or whites, one key light from the left, looking just off camera. 4:5. **The most important image on the site.** |
| Service, nine o'clock | Chef II | Restaurant line, flame, steam, real heat. 5:6. |
| A private room | Chef III | Empty private dining room, single table set for eight. 4:5. |

A 10–15s silent hero loop (candle, steam, hands plating) can replace the hero's CSS atmosphere later. Keep it under 2MB WebM with an MP4 fallback and a poster frame.

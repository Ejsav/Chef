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

## The system

The site is built as layers, so new ideas plug into the system instead of being bolted onto pages.

### 1. The world (runtime)

| Piece | What it does | Where |
|---|---|---|
| **Capability tiers** | An inline script decides before first paint how much of the experience this device receives: `full`, `lite` (Save-Data, 2G/3G, low memory or CPU) or `still` (reduced motion). Nothing visibly downgrades later. | `lib/boot.ts` |
| **Prelude** | A ~1.6s opening: a brass seal draws, the name rises, a curtain lifts into the hero. It plays once per session, on desktop, in CSS only. Phones go straight to their own hero choreography. | `components/system/Prelude.tsx` |
| **Page transitions** | View Transitions API. The header persists while the old page sinks into shadow and the new one rises like a curtain. Falls back to normal navigation. | `components/system/Transitions.tsx` |
| **Cursor** | A brass point plus a weighted ring. It swells over actions, carries a word over things worth opening (`data-cursor-label`), steps aside for text fields, and draws `data-magnetic` elements toward it. Fine pointers only. | `components/system/Cursor.tsx` |
| **Responsive light** | The hero's candle leans toward the pointer while the name drifts the other way, giving two depth planes. On touch, the light settles with scroll. | `components/system/HeroLight.tsx` |
| **Room sound** | Optional fire-in-another-room ambience, generated live with Web Audio (no file to download). Always off until asked; fades in and out; goes silent when the tab is hidden. | `components/system/Ambience.tsx` |
| **Mobile action bar** | "Request an evening" sits where the thumb is, inside the safe area, and steps away near the close and on the inquiry. | `components/system/MobileBar.tsx` |
| **Parallax and the manifesto** | CSS scroll timelines: compositor-only, zero JavaScript, invisible to browsers that don't support them. | `app/globals.css` |

### 2. Possibilities, not packages

**Compose an evening** (`components/sections/Composer.tsx`, `content/possibilities.ts`). The visitor sets the room (a Connecticut home, a Manhattan penthouse, a Hamptons estate, Florida waterfront, a yacht, a private island, a hangar, abroad), the reason and the scale, then reads the evening written in front of them. The composition carries straight into the inquiry.

### 3. The man

- **The Archive** (`components/sections/Archive.tsx`, `content/archive.ts`): six eras, each with a place and *what it taught him*. Pinned horizontal travel with an era rail on desktop; a vertical sequence on phones and for reduced motion.
- **The Standards** (`components/sections/Standards.tsx`): how he works, in five sentences.

### 4. The first chapter: the inquiry

`components/inquiry/Concierge.tsx` is a conversation, not a form. It asks one question at a time and branches on the answers:

- **Planners and assistants** are asked about *their client*.
- **Yachts** are asked about the galley; **islands and travel** about the length of stay.
- **A collaboration** skips the dinner questions entirely: 6 steps instead of 11.

How it behaves:
- **Keyboard:** letter keys choose and Enter continues.
- **Drafts:** progress is saved for 14 days and offered back on return.
- **Arrivals:** a visitor coming from the composer, an experience page or an invitation starts pre-filled.
- **Review:** the request is read back as a sentence before sending.

On the server (`app/api/inquire/route.ts`, `lib/inquiry-schema.ts`), every request is:
- validated with the same rules the conversation uses
- given a reference (`RG-XXXXXX`)
- tagged with where the client came from
- emailed to the office via Resend, or logged when email is not configured

### 5. Infrastructure

- **Attribution** (`lib/attribution.ts`): the first touch (30 days) and this visit's touch, covering UTM, referrer, landing page and invitation, travel with each inquiry. The office sees that a request began on Instagram, a concierge link or a Google search.
- **Analytics** (`lib/analytics.ts`): one `track()` that fans out to Vercel Analytics, Plausible or a GTM `dataLayer`. Any element with `data-track="name"` reports itself. Events tracked so far:
  - `cta:*`
  - `compose_change`
  - `inquiry_step` (a funnel per step)
  - `inquiry_submit` (with form, setting, guests, role)
  - `invite_open`
  - `sound_toggle`

  No personal data is sent.
- **Private invitations** (`app/invite/[token]`, `lib/invite.ts`): HMAC-signed links that greet a guest by name, can carry a note and a pre-selected setting, expire on their own, and open the inquiry already addressed to them. They are never indexed, and a tampered link closes politely. This is the foundation for client portals and proposal pages.

  ```bash
  INVITE_SECRET=... node scripts/invite.mjs "Mr. and Mrs. Whitman" --note "For the anniversary in June." --days 30 --setting yacht
  ```
- **SEO**: Person and ProfessionalService JSON-LD with an offer catalogue, BreadcrumbList on interior pages, canonical URLs, a sitemap, and robots rules that exclude `/api` and `/invite`.

## Run

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL; Resend keys optional
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

Deploy target: Vercel. Set `NEXT_PUBLIC_SITE_URL`, `INVITE_SECRET`, `RESEND_API_KEY`, `INQUIRY_TO_EMAIL`, `INQUIRY_FROM_EMAIL` in the project's environment variables. Vercel Analytics and Speed Insights switch on automatically there.

## Verified (production build, Lighthouse 12, mobile, localhost)

| Page | Perf | A11y | Best practices | SEO | CLS | TBT |
|---|---|---|---|---|---|---|
| `/` | 93 | 96* | 100 | 100 | 0 | 100ms |
| `/experiences` | 93 | 100 | 100 | 100 | 0 | 80ms |
| `/chef` | 95 | 100 | 100 | 100 | 0 | 70ms |
| `/inquire` | 96 | 100 | 100 | 100 | 0 | 80ms |

\* The home flag is the manifesto's scroll-linked words, which start at 20% ink and resolve as they are read. It is a deliberate, transient state; reduced-motion visitors see full contrast.

Mobile LCP measured 2.7–3.1s on localhost under simulated slow 4G, including local TTFB. Re-measure on the deployed URL; Speed Insights records real visitors on Vercel.

End-to-end checks (Playwright):
- the desktop prelude and cursor
- composer hand-off to the inquiry
- the view transition to `/chef` and the pinned archive
- the planner → yacht → galley/stay → NDA → text-message branch, including its validation errors and the summary sentence
- server receipt with origin and reference
- draft resume and the collaboration path (6 steps)
- a valid invitation (noindex) and a tampered one
- the mobile action bar
- no horizontal overflow at 320–1024px, and no console errors

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
- [ ] **The Archive** eras and their lessons (`content/archive.ts`): add years, named places and archival photographs
- [ ] **The Standards** (`content/archive.ts`): Chef approves every sentence; they must sound exactly like him
- [ ] **The settings in the composer** (`content/possibilities.ts`): confirm every place Chef wants clients to imagine him in
- [ ] `INVITE_SECRET` set in production, and who in the office generates invitations

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

## Roadmap: the next decade, already accounted for

Each item has a seam in the current architecture. None needs the identity rebuilt.

| Phase | Builds on | What it adds |
|---|---|---|
| **Next** | Plate, Archive | **The shoot.** Portrait, hands, fire, rooms, a 10–15s hero film. This is the single biggest step change available. |
| | Composer, content model | **Destination pages** (`/destinations/[place]`) for search: Connecticut, Manhattan, the Hamptons, Palm Beach, yachts, islands. Real copy only, no thin pages. |
| | Telemetry | An analytics dashboard: inquiries by origin, market, setting and form; the step-by-step inquiry funnel. |
| **Then** | Invitations | **Client portal**: a signed link becomes a private page with the proposal, menu, timeline and preferences. Returning clients are remembered. |
| | Inquiry schema | **Dynamic proposals**: menus presented interactively, with a multimedia proposal per engagement. |
| | Content folder → CMS | Sanity or Payload for **the Journal**: films, recipes, writing, press. |
| **Later** | All of the above | Masterclasses and memberships, limited experiences and residencies, products and collaborations, an availability layer, and a concierge assistant grounded in Chef's own writing. |

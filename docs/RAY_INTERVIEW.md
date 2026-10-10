# The one-hour session with Ray

This session takes the website from "beautifully built" to "you feel like you've met him." Everything that still needs Ray is collected here, and each answer has a place waiting for it in the site.

**How to run it**
- Record audio on your phone so his exact words can be used.
- About 45 minutes for the interview and 15 for the facts checklist.
- Ask, then let him talk. The best lines come after the first answer.
- Don't read him the website copy. We want his words, not a confirmation of ours.

---

## Part 1: The interview (45 min)

Each question lists where the answer goes. **Quote** means his exact words, used as-is. Anything flagged *(approval)* is shown to him before it goes live.

### Where it started: New Haven
1. Describe a Sunday in your family's kitchen when you were a kid. Who was cooking, what was on the stove, who was at the table?
   → Quote · `content/voice.ts › quotes` (home page pull quote) · `content/archive.ts › family-table.body`
2. What's the first dish you remember making yourself? How old were you?
   → `content/archive.ts › family-table` · `content/menus.ts` (a real dish to replace a sample)
3. What did your family teach you about feeding people that you still do today?
   → Quote · `archive.ts › family-table.lesson`

### The restaurant years
4. Where did you cook professionally? Kitchens, cities, years, roles: as much as you're comfortable publishing.
   → `archive.ts › the-line` (add `years`, `place`) · `voice.ts › credentials`
5. Tell me about the hardest night of service you ever had.
   → Quote · `archive.ts › the-line.body`
6. What did the line teach you that a home kitchen never could?
   → `archive.ts › the-line.lesson`

### Private service
7. What made you move into private cooking?
   → `archive.ts › private-rooms.body`
8. What's different about cooking in someone's home compared with a restaurant?
   → Quote · `content/archive.ts › standards`
9. Without names, describe an evening you're proudest of.
   → Quote · `voice.ts › quotes`

### The islands and travel
10. Without naming the client, tell me about cooking on a private island. What made it hard? What did you have to plan?
    → `archive.ts › islands.body` · `content/places.ts › private-islands.intro`
11. Have you cooked on yachts, in the Hamptons, in New York or in Florida? Which of these should the website say you do?
    → `lib/site.ts › serviceArea` · `content/places.ts` (keep, edit or remove each page)
12. Where in the world would you most like to cook next?
    → `places.ts` (new destination page)

### How he cooks
13. Describe your cooking in one sentence to someone who has never eaten it.
    → Quote · home page · `site.description`
14. What are the three dishes people ask you for again and again?
    → `content/menus.ts` (replace sample dishes with his real ones)
15. What ingredient would you never compromise on? Where do you buy it?
    → `places.ts › connecticut` · `menus.ts`
16. What do you refuse to do in a kitchen?
    → `archive.ts › standards`

### How he treats guests
17. What should a host feel at the end of one of your evenings?
    → Quote · `voice.ts › quotes`
18. How do you handle discretion? What do you never do?
    → Discretion section · `content/faq.ts › Discretion`
19. Read him the five Standards on the Chef page. Which are true? Rewrite any in his own words.
    → `archive.ts › standards` *(approval)*

### Teaching
20. What do people get wrong when they cook Italian food at home?
    → Quote · `content/experiences.ts › the-kitchen-lessons`
21. What's the moment in a lesson you love most?
    → Quote · `archive.ts › lessons.lesson`

### Closing
22. Fifty years from now, what do you want people to say about Ray Gennaro's table?
    → Quote · the Chef page close

---

## Part 2: Facts to confirm (15 min)

Each fact must be confirmed (✓), corrected or removed before launch.

### Contact and identity
| Fact | Current | File |
|---|---|---|
| Domain | none yet (site uses the Vercel address) | env `NEXT_PUBLIC_SITE_URL` |
| Public inbox | hidden | env `NEXT_PUBLIC_CONTACT_EMAIL` |
| Instagram handle | hidden | env `NEXT_PUBLIC_INSTAGRAM` |
| Where inquiries are delivered | logged only | env `RESEND_API_KEY`, `INQUIRY_TO_EMAIL`, `INQUIRY_FROM_EMAIL` |

### Service details shown on the site
| Fact | Current wording | File |
|---|---|---|
| Private Table guests / notice | Two to twenty-four · Two to three weeks | `content/experiences.ts` |
| Island & Water guests / notice | By arrangement · Six weeks or more | `content/experiences.ts` |
| Lessons participants / notice | One to twelve · Two weeks | `content/experiences.ts` |
| Occasion guests / notice | Up to eighty · Four weeks or more | `content/experiences.ts` |
| Sommelier pairing available | Yes, on request | `experiences.ts`, `faq.ts` |
| Printed menu cards | Yes | `experiences.ts` |
| Handwritten note after each evening | Yes | `content/method.ts` |
| References shared privately | Yes | `components/sections/Discretion.tsx` |
| Confidentiality agreements | Yes, as standard for travel | `experiences.ts`, `places.ts`, `faq.ts` |
| Areas served | CT, NYC, Hamptons, Florida, yachts, islands | `lib/site.ts`, `content/places.ts` |
| Starting price published? | No | `content/faq.ts` (add if yes) |

### Proof (the biggest gap after his voice)
- [ ] **Credentials:** years in professional kitchens; number of private engagements or island dinners; anything verifiable → `voice.ts › credentials`
- [ ] **Testimonials:** ask 3–5 past hosts for one or two sentences, with written approval of the exact wording and of the description used (e.g. "A family in Greenwich") → `voice.ts › testimonials`
- [ ] **Press and appearances**, if any → `voice.ts › press`
- [ ] **Archival photos:** family kitchen, early restaurant years, island work → Photography Guide, photos 14, 15, 17

---

## What happens after

1. Transcribe the recording (Otter or Rev, about 10 minutes).
2. Paste his exact quotes into `content/voice.ts`. The home page pull quote, the testimonials and the credentials appear automatically.
3. Update `content/archive.ts`, `content/menus.ts` and `content/experiences.ts` with his facts and wording.
4. Set the environment variables on Vercel and redeploy.

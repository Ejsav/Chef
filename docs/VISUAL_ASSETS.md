# Chef Ray Gennaro: complete image and video list

Every photograph and film the website needs, organized by page and section in the order a visitor sees them. Each entry gives the exact file name, where it goes, its format, and a description complete enough to shoot or create without seeing the site.

Assets marked **NEW** fill sections that currently have no imagery, or add something the site doesn't plan for yet but would clearly improve.

---

## Standards that apply to every asset

Read these once. Every description below assumes them.

- **The look:** a private room at night. One warm light source (candle, low pendant, late sun) falling into deep shadow. Film-like grain, rich blacks that never go fully empty, highlights that never clip.
- **Palette:** deep espresso, walnut wood, ivory linen, aged brass, the warm amber of candlelight. Oxblood (deep red wine color) appears only as a small accent. Avoid cool blue light except for dusk-over-water scenes, and never use neon, bright primary colors or pure white backgrounds.
- **Grade:** warm, slightly desaturated, soft contrast in the shadows, like a 35mm film still. One consistent grade across the whole set.
- **Lighting:** natural or practical light only, from candles, windows and lamps in the scene. Never on-camera flash. Never flat overhead light.
- **Lens and depth:** shallow depth of field (f/1.4–f/2.8) with soft, out-of-focus highlights. No wide-angle distortion on people or food.
- **Food:** elevated Italian-American cooking: handmade pasta, slow red sauces, whole fish, braises, citrus, olive oil, herbs, crusty bread. Plated simply and generously on matte ceramic or white porcelain. Never stacked, never smeared, never decorated with tweezers.
- **People:** guests' faces are never shown. Only hands, backs, shoulders and silhouettes, or faces turned away or out of focus. Discretion is part of the brand.
- **Chef Ray:** every image that shows Chef Ray must be a real photograph of him. Every image of his history (family, early kitchens) must be a real archival photograph or a clearly staged present-day still life. Never an imitation presented as the past. Atmosphere, settings, food and hands can be shot or styled.
- **No branding:** no visible logos, labels, wine label text, hotel names, boat names or recognizable private homes.
- **Room for text:** many images sit beside or under type. Where a description asks for negative space, keep that area dark and quiet.

**File specifications**

- **Images:** JPEG master at the sizes listed, sRGB, quality 85. Keep the original RAW/TIFF. The site converts to AVIF/WebP automatically.
- **Videos:**
  - Each video needs two files: H.264 MP4 and VP9 WebM, plus a JPEG poster frame of its first frame.
  - Loops: no sound, under 4 MB, seamless (the last frame matches the first).
  - Longer films: a separate sound mix and a captions file (`.vtt`).
- **Folders:** images go in `public/images/`, videos and posters in `public/videos/`.

---

## Site-wide assets

### 1. `public/images/share/og-default.jpg`
**Where:** the preview card that appears when the home page link is shared in iMessage, WhatsApp, LinkedIn, Slack or email. Replaces the current text-only generated card.
**Format:** 1200 × 630 px (1.91:1). Text is added by the site afterwards, so keep the left 55% dark and quiet.
**Description:** A long private dining table at night, photographed from the far right end at seated eye level, looking down its length toward the left.
- **Table:** heavy ivory linen, three tall ivory candles in aged-brass holders glowing at the center, a scatter of crystal glasses catching the flame, and matte white plates with folded ivory napkins at each place.
- **Composition:** the candle glow sits in the right third of the frame. The left side falls away into soft espresso-brown darkness with only the faint shapes of chairs.
- **Background:** a dark walnut-paneled wall, barely visible.
- **Mood:** the minute before the guests arrive.
- **People:** none.

### 2. `public/images/share/og-experiences.jpg`
**Where:** share preview for the Experiences page.
**Format:** 1200 × 630 px, left 55% kept quiet.
**Description:** The edge of a dinner table on an open-air terrace above dark water at dusk.
- **Foreground (right third):** a single place setting on ivory linen: white plate, folded napkin, a brass candle holder with a lit candle, one wine glass half-filled with red wine.
- **Background (out of focus):** the sea at last light. A thin band of cold blue-grey horizon, the water below almost black, two or three tiny warm lights of distant boats.
- **Contrast:** warm candlelight against the cool horizon.
- **People:** none.

### 3. `public/images/share/og-chef.jpg`
**Where:** share preview for The Chef page.
**Format:** 1200 × 630 px. Chef Ray on the right, left side quiet.
**Description:** A real photograph of Chef Ray Gennaro from the chest up, standing in a darkened kitchen.
- **Pose:** turned three-quarters toward camera left, eyes just off camera, calm and certain.
- **Wardrobe:** a dark charcoal or black chef's jacket, or a dark tailored shirt with sleeves rolled to the forearm.
- **Light:** a single warm key light from camera left (window or low practical lamp) sculpting one side of his face. The other side falls into shadow.
- **Background:** out-of-focus copper pans and the soft glow of a stove pilot light.
- **Framing:** his figure in the right 40% of the frame, the left 60% dark warm shadow.

### 4. `public/images/share/og-inquire.jpg`
**Where:** share preview for the Inquire page.
**Format:** 1200 × 630 px, left side quiet.
**Description:** Overhead at a slight 30° angle, on a dark walnut desk:
- an open heavy cream notebook, its page blank
- a black fountain pen resting diagonally across it, uncapped
- a brass desk lamp casting a warm pool of light over the notebook, with the edges of the frame falling into darkness
- beside the notebook, a small stack of three ivory correspondence cards and a closed envelope.

No writing visible and no people.

### 5. `public/images/share/og-invite.jpg`
**Where:** share preview when a private invitation link is sent to a guest.
**Format:** 1200 × 630 px, centered composition.
**Description:** A single heavy ivory invitation card (cotton paper, deckled edges) lying slightly askew on dark walnut.
- **On the card:** a small blind-embossed or brass-foil "RG" monogram inside a thin double circle, centered in the upper third. No other text.
- **Beside it:** an open ivory envelope with an oxblood wax seal broken in two.
- **Light:** one warm candle just out of frame on the right, so the paper's texture shows in raking light.
- **Mood:** intimate, personal, slightly ceremonial.

### 6. `public/images/icons/apple-touch-icon.png`, `icon-192.png`, `icon-512.png`
**Where:** the icon when the site is saved to a phone home screen or shown in browser tabs and bookmarks.
**Format:** 180 × 180, 192 × 192 and 512 × 512 px PNG, square, no transparency.
**Description:** A graphic, not a photo, so it renders identically at small sizes.
- **Background:** flat deep espresso (#110c09).
- **Mark:** centered, a thin aged-brass (#be9c68) double circle, with the letters "R" (upright) and "G" (italic) set in a high-contrast Bodoni-style serif inside.
- **Proportions:** the outer circle takes about 76% of the icon's width. Letter hairlines must stay visible at 180 px, so thicken the strokes slightly.

---

## Page 1: Home (`/`)

### Section: Opening (hero)

#### 7. `public/videos/home-hero.mp4` + `home-hero.webm` + `home-hero-poster.jpg`
**Where:** full-screen background behind "Chef Ray Gennaro" at the very top of the home page, under a dark gradient so the name stays readable. Replaces the CSS candle glow on desktop and tablet.
**Format:** 16:9, 3840 × 2160 master, delivered at 1920 × 1080. 12–15 second seamless loop, no sound, under 4 MB.
**Subject:** a private kitchen and dining room after dark, in the hour before guests arrive. The text sits in the left half and lower third, so all action stays in the right half and upper area. The left side stays dim and slow.
**Lighting and color:** practical light only: candles, one pendant over the counter, the blue-orange of a gas flame. Deep espresso shadows, warm amber highlights.
**Shot by shot:**
- **0–3s:** Extreme close-up, slow push-in. A match strikes in near darkness on the right side of the frame. The flame flares, then settles, and lights a tall ivory candle in an aged-brass holder. The rest of the frame is black with soft bokeh.
- **3–6s:** Cut to a low side angle along a stovetop. A heavy copper pan on a gas flame. A hand (dark sleeve, no face) pours olive oil, which shimmers. Then a handful of sliced garlic goes in and a gentle wisp of steam rises into the darkness. The camera drifts left to right at walking pace.
- **6–9s:** Cut to above a dining table, the camera moving slowly along its length. Ivory linen, brass candle holders, crystal glasses catching flame. A hand sets the last folded napkin at a place, then withdraws out of frame.
- **9–12s:** Cut to a wide, slightly soft shot of the room. The lit table in the foreground; beyond it, through a doorway, the warm glow of the kitchen with a figure in a dark chef's jacket moving behind the counter, out of focus and unrecognizable.
- **12–15s:** Back to the candle from the first shot, now burning steadily. Its flame fills the right third, matching the first frame so the loop is seamless.

**Poster:** the steady candle frame from the final second.
**Motion rule:** all camera moves are slow (dolly or slider), never handheld shake, never fast cuts. Each shot is at least 2.5 seconds.

#### 8. `public/videos/home-hero-mobile.mp4` + `home-hero-mobile.webm` + `home-hero-mobile-poster.jpg`
**Where:** the same opening section on phones (vertical screen).
**Format:** 9:16, 1080 × 1920, 10–12 second seamless loop, no sound, under 3 MB.
**Description:** The same story as the desktop film, reframed vertically, not cropped from it. The name sits in the middle third, so key action happens in the top third and the bottom fifth.
- **0–3s:** The match lights the candle, flame in the top third.
- **3–6s:** Overhead, looking straight down at the copper pan. Oil, garlic, a curl of steam rising toward the top of the frame.
- **6–9s:** A vertical slice of the table. Candle, glass, the edge of a plate, a hand placing a napkin at the bottom of the frame.
- **9–12s:** Return to the steady candle, matching frame one.

**Poster:** the candle frame.

### Section: The Premise (the manifesto statement, linen-colored section)

#### 9. `public/images/home/premise-menu-card.jpg` (NEW)
**Where:** a wide image below the line "No set menus. No banquet trays…", spanning the full content width. It ends the section on a single quiet detail.
**Format:** 21:9 ultra-wide, 3360 × 1440 px.
**Description:** A close, low, side-on view across a table at seated eye level. One printed menu card stands upright against a folded ivory linen napkin on a white plate.
- **Menu card:** heavy cream paper, letterpressed. The text is printed but too soft-focus to read, apart from a small brass "RG" monogram at the top.
- **Plate:** white porcelain with a fine brass rim.
- **Background:** the rest of the table recedes into deep, warm, out-of-focus candlelight: two or three golden bokeh circles, the faint shapes of glasses.
- **Light:** soft daylight-temperature light from the left (the last of the evening through a window) mixing with warm candlelight from the right.
- **Composition:** the card sits a third of the way in from the right. The left two-thirds are soft and calm.
- **Colors:** ivory, cream, brass, the warm brown of a walnut table edge.

### Section: The Possibilities ("There is no menu. Compose an evening.")

The visitor picks a room, and the large photograph beside the composed text cross-fades to that room. All eight images share one format so they swap cleanly: **16:11 landscape, 2400 × 1650 px.** Each must read instantly as a different place while feeling like the same evening.

The site shows a small caption in the bottom-left corner of each image, so keep that corner relatively calm.

#### 10. `public/images/possibilities/setting-residence.jpg`
**Caption:** "Your dining room, after dark."
**Description:** A Connecticut home's dining room at night, photographed from the doorway at standing height.
- **Room:** classic New England: painted wood paneling in a deep warm grey-green, a white-trimmed window with dark glass, a simple brass chandelier dimmed low.
- **Table:** a polished walnut table for eight dressed in ivory linen, candles lit down its center, wine poured, napkins folded.
- **Beyond:** through an open door on the right, a slice of a lived-in kitchen glows warmly, with a silhouetted figure working at a stove.
- **Mood:** home, not hotel: books on a side table, a family painting barely visible in shadow. Warm, generous, private.

#### 11. `public/images/possibilities/setting-penthouse.jpg`
**Caption:** "Above the avenue."
**Description:** A high-floor Manhattan apartment at night.
- **Foreground:** a dining table set for six in front of floor-to-ceiling windows, ivory linen, low candles, crystal.
- **Beyond the glass:** the city out of focus: thousands of tiny warm and cool lights, the soft shapes of nearby towers. No recognizable landmarks or skyline.
- **Interior:** minimal and expensive, with dark oak floors, a sculptural pendant, one large abstract artwork in shadow.
- **Light:** candlelight on the table, city glow on the glass.
- **Color:** espresso interior, amber candles, a faint cool blue-grey from the window.
- **Composition:** the table in the lower half, the city filling the upper half.

#### 12. `public/images/possibilities/setting-estate.jpg`
**Caption:** "Long table, late August."
**Description:** A long outdoor table on a manicured lawn of a Hamptons-style estate at golden hour, 20–30 minutes before sunset.
- **Table:** set for twenty, with natural linen, low arrangements of garden flowers and herbs, and glass hurricane lanterns not yet needed.
- **Composition:** shot from one end so the table runs diagonally toward the right of the frame.
- **Background:** tall privet hedges, a shingled house with white trim softly out of focus, the sky warm gold fading to pale peach.
- **Light:** low sun from behind the table, back-lighting the glasses and edging everything in gold.
- **People:** none, or two distant silhouettes of staff carrying platters.
- **Mood:** generous, summery, effortless.

#### 13. `public/images/possibilities/setting-waterfront.jpg`
**Caption:** "Doors open to the bay."
**Description:** A Florida waterfront home at blue hour, photographed from inside looking out.
- **Room:** a pale stone floor, tall glass doors folded fully open, white curtains moving slightly in the breeze.
- **Table:** just outside on the terrace, set for eight: white linen, low candles, bowls of citrus and green olives, a whole roasted fish on a platter.
- **Beyond:** a calm bay, the water a deep indigo reflecting the last light. Palm fronds in silhouette at the edges. A few warm dock lights.
- **Palette:** cooler than the rest of the set (indigo and stone) but with warm candle highlights on the table.
- **Mood:** warm air, open doors, relaxed luxury.

#### 14. `public/images/possibilities/setting-yacht.jpg`
**Caption:** "Anchored, second course."
**Description:** The aft deck of a large motor yacht at anchor, just after sunset.
- **Table:** teak, set for ten, ivory linen, low candles in glass to protect them from the breeze, crystal stemware.
- **Composition:** taken from the deck at seated height, so the table edge forms the foreground and the open water fills the background.
- **Beyond:** calm dark-teal water, a horizon line of fading orange and deep blue, perhaps a far-off coastline with a few lights.
- **Detail:** polished stainless rail and a coiled rope give a sense of place.
- **People:** none, or a crew member's white-sleeved arm placing a plate (hands only).
- **No identifying details:** no boat names, no flags.

#### 15. `public/images/possibilities/setting-island.jpg`
**Caption:** "Lanterns along the dock."
**Description:** A private island at dusk, shot from the end of a long wooden dock looking back toward the shore.
- **Dock:** weathered silver-grey planks lined on both sides with glowing paper or glass lanterns that lead the eye to the shore.
- **At the end:** a single table set for six under a simple open-sided canopy, with candles lit, on a small beach or stone terrace among tropical trees.
- **Sky:** deep violet fading to a thin line of orange at the horizon.
- **Water:** clear and dark, reflecting the lantern light in long streaks.
- **Feel:** remote, secret, extraordinary, with no other structures or boats in sight.

#### 16. `public/images/possibilities/setting-hangar.jpg`
**Caption:** "Wheels down, table set."
**Description:** The interior of a spotless private aviation hangar at night, transformed into a dining room.
- **Background:** the nose and wing of a private jet in polished white, softly out of focus. No airline markings or registration visible.
- **Foreground:** a long table for sixteen dressed in ivory linen with tall candelabras, lit by warm uplights and a grid of hanging Edison bulbs that contrasts with the cool, vast, dark space above.
- **Floor:** glossy, faintly reflecting the candles.
- **Composition:** the table runs from lower left toward the jet, with the scale of the hangar visible in the dark ceiling.
- **Feel:** dramatic and unexpected.

#### 17. `public/images/possibilities/setting-abroad.jpg`
**Caption:** "A terrace, elsewhere."
**Description:** A stone terrace of a villa in the Italian countryside or on a Mediterranean lake at the end of a summer day.
- **Setting:** an old balustrade of weathered limestone, terracotta pots of lemon trees, a pergola with vines overhead.
- **Table:** set for eight with rustic white linen, carafes of wine, bowls of figs and lemons, low candles.
- **Beyond:** soft hills or a lake in hazy blue-gold light, a distant bell tower silhouette (generic, not a recognizable landmark).
- **Light:** warm late sun from the side, long shadows across the stone.
- **Feel:** old-world, sun-warmed, the origin of everything. A quiet link to his Italian heritage.

### Section: The Chef (home page introduction)

#### 18. `public/images/home/chef-portrait.jpg`
**Where:** the tall portrait on the left of the "Raised on Sunday gravy. Made on the line." section, beside the short biography.
**Format:** 4:5 portrait, 2400 × 3000 px.
**Description:** A real portrait of Chef Ray Gennaro, the most important image on the website.
- **Pose:** standing in his kitchen, framed from mid-thigh up, leaning one hand on a worn butcher-block counter. Body turned slightly to camera right, face toward the light, gaze just past the lens: confident, warm, unposed, like he's listening to someone.
- **Wardrobe:** a charcoal or black chef's jacket, sleeves pushed up, or a dark tailored shirt and a long dark apron. A kitchen towel tucked at the hip.
- **Light:** a single soft window light from camera left lighting one side of his face and the counter. The right side of the frame falls into warm shadow.
- **Background:** softly out of focus: copper pots hanging, a shelf of glass jars, the faint blue-orange flame of a burner.
- **Color:** espresso, copper, walnut, his skin tones warm and natural.
- **Feel:** authority without stiffness. Nothing glossy or corporate.

### Section: The Evening ("How an evening is made", five steps)

Currently text only. **NEW:** one small image per step, shown beside each step as it scrolls past. All five share a format: **4:5 portrait, 1600 × 2000 px.**

#### 19. `public/images/home/method-01-conversation.jpg` (NEW)
**Step:** "A conversation."
**Description:** A close view of Chef Ray's hands at a walnut desk by a window in soft morning light.
- Left hand holds a phone to his ear, just at the edge of the frame. The right hand writes notes in a black leather notebook with a fountain pen. The words are illegible.
- Beside the notebook: a cup of espresso in a small white cup on a saucer.
- Daylight, cooler and brighter than the evening images, but still with soft shadows.
- **Feel:** attention, listening.

#### 20. `public/images/home/method-02-menu.jpg` (NEW)
**Step:** "A menu written once."
**Description:** Overhead on a dark table: a handwritten menu draft on cream paper in confident ink handwriting.
- Five lines of courses, with words crossed out and rewritten, and a small sketch of a plate in the margin.
- Text slightly soft so no specific dish is readable.
- Around it: a fountain pen, a sprig of rosemary, a lemon cut in half, a small glass of red wine leaving a faint ring on the paper.
- Warm lamp light from the top of the frame.

#### 21. `public/images/home/method-03-provisioning.jpg` (NEW)
**Step:** "Provisioning."
**Description:** Early morning at a fish market or dock.
- **Foreground:** a whole glistening fish (a striped bass or branzino) on crushed ice in a wooden crate. A hand in a dark sleeve lifts its gill to check freshness.
- **Background:** soft blurred shapes of other crates, a fishmonger's apron, cold dawn light.
- **Palette:** silver and slate blue with one warm note (a rope or a wooden crate).
- **Feel:** the effort that never reaches the table.

#### 22. `public/images/home/method-04-evening.jpg` (NEW)
**Step:** "The evening."
**Description:** The pass of a home kitchen during service, viewed from the side at counter height.
- Two plates of hand-cut pasta in red sauce with torn basil and a gloss of olive oil sit under a warm heat lamp.
- A hand in a white service glove reaches in to pick one up.
- **Background:** out of focus, Chef Ray in a dark jacket wiping a plate rim with a folded towel. His face is turned down and partly out of frame.
- Steam rising. Warm amber light.
- **Feel:** precise, calm, fast.

#### 23. `public/images/home/method-05-note.jpg` (NEW)
**Step:** "A note after."
**Description:** A single ivory correspondence card propped against a folded napkin on a cleared dinner table the morning after.
- **Card:** handwritten in ink, too soft to read, with a small brass "RG" monogram at the top.
- **Table:** linen slightly creased, one candle burned low with dried wax down its side, an empty wine glass with a faint red trace.
- **Light:** quiet morning daylight from a window, soft and grey-gold.
- **Feel:** the evening remembered.

### Section: Discretion ("Discretion is part of the menu.")

#### 24. `public/images/home/discretion-door.jpg` (NEW)
**Where:** a dark, full-width background behind this section, kept very low in brightness (about 20–30%) so the text and three principles stay readable on top.
**Format:** 16:9, 3200 × 1800 px.
**Description:** A heavy, dark-stained wooden double door to a private dining room, almost closed.
- Through the narrow gap, a thin vertical sliver of warm golden candlelight with the soft blur of a table and glasses inside.
- Around the door: the dark corridor in deep espresso shadow, brass door handles catching a faint glint.
- **Composition:** the gap of light runs vertically through the exact center of the frame.
- No people.
- **Feel:** what happens inside stays inside.

### Section: The close ("Tell us about the table.")

#### 25. `public/videos/close-candle.mp4` + `close-candle.webm` + `close-candle-poster.jpg`
**Where:** background behind the final invitation section on every page (Home, Experiences, The Chef), replacing the CSS glow.
**Format:** 16:9, 1920 × 1080. 10-second seamless loop, no sound, under 2 MB.
**Description:** One continuous locked-off shot, no cuts.
- **Frame:** an extreme macro of a single candle flame in the lower center of the frame against complete warm darkness. The top two-thirds stay nearly black for the headline.
- **Throughout:** the flame breathes naturally: a slow gentle lean to the left, a small flicker, a rise back to center. Out-of-focus flames of two more candles glow as soft golden circles at the far left and far right edges.
- **0–2s:** steady flame.
- **2–5s:** a soft draft makes it lean and lengthen.
- **5–8s:** it settles and a tiny thread of smoke rises and dissolves.
- **8–10s:** back to the exact shape and position of frame one.

**Color:** amber core, ivory tip, espresso darkness.

---

## Page 2: Experiences (`/experiences`)

### Section: Page opening ("Begin with the room.")

#### 26. `public/videos/experiences-intro.mp4` + `experiences-intro.webm` + `experiences-intro-poster.jpg` (NEW)
**Where:** background behind the opening headline, under a dark gradient.
**Format:** 16:9, 1920 × 1080, 12-second seamless loop, no sound, under 4 MB. Also deliver a 9:16 version: `experiences-intro-mobile.mp4`.
**Description:** "The table is set." A single slow overhead shot: the camera tracks straight down the length of a long dinner table from one end to the other, about 1.5 m above it.
- **0–3s:** bare dark walnut table. A pair of hands spreads a heavy ivory linen cloth, which floats down and settles.
- **3–6s:** cut, continuing the track. Hands place white plates at even intervals, then folded napkins.
- **6–9s:** brass candle holders are set down the center line and a hand lights them one by one, the light growing across the frame.
- **9–12s:** crystal glasses are placed and the table is finished, glowing. Fade to the bare table to restart the loop.

**Framing:** keep the action in the right two-thirds. The headline sits left.

### Section: The Possibilities

Uses images **10–17** above. No additional assets.

### Section: I. The Private Table

#### 27. `public/images/experiences/private-table.jpg`
**Where:** the large sticky photograph beside "The Private Table" description.
**Format:** 4:5 portrait, 2400 × 3000 px.
**Description:** A candlelit private dining table in a residence, photographed from a seated guest's eye line looking across the table.
- **Foreground:** an ivory linen-covered table edge, a white porcelain plate with a fine brass rim, a folded napkin with a printed menu card tucked in, heavy silver cutlery.
- **Middle:** three lit candles in aged-brass holders and crystal glasses with red wine.
- **Background:** out-of-focus warm darkness with two empty upholstered chairs across the table, waiting.
- **Light:** candles only.
- **Palette:** ivory, brass, burgundy wine, espresso.
- **Feel:** the table, before the guests.

#### 28. `public/images/experiences/private-table-detail.jpg` (NEW)
**Where:** a second, smaller image beneath the "Included" list for The Private Table.
**Format:** 3:2 landscape, 2400 × 1600 px.
**Description:** Close on a finished plate set at a guest's place: a nest of hand-cut tagliatelle in a glossy slow-cooked ragù, a fine snow of grated Parmigiano, one basil leaf.
- **Around it:** linen, the base of a wine glass, a guest's hand reaching for the fork (wrist and cuff only, dark tailored sleeve).
- **Light:** warm candlelight from the right, steam just visible.
- **Angle:** 45°.

### Section: II. The Island & The Water

#### 29. `public/images/experiences/island-water.jpg`
**Where:** sticky photograph beside "The Island & The Water."
**Format:** 4:5 portrait, 2400 × 3000 px.
**Description:** A dinner table on a stone terrace above open water at the end of dusk, shot from behind and slightly above one chair.
- **Table:** set for four, ivory linen held down by brass weights, low candles in glass hurricanes, a platter of grilled whole fish with lemons and herbs at the center.
- **Beyond the balustrade:** dark open sea, the horizon a thin band of cold blue-grey with the last trace of orange, and one distant warm light of an anchored boat.
- **Upper third:** night sky, faintly starred.
- **Feel:** remote, calm, impossibly far from a supermarket.

#### 30. `public/images/experiences/island-water-detail.jpg` (NEW)
**Where:** second image for this experience.
**Format:** 3:2 landscape, 2400 × 1600 px.
**Description:** Logistics made beautiful. On a weathered dock at dawn: stacked wooden provision crates and a canvas-wrapped knife roll.
- **In the crates:** lemons, bunches of herbs, a wheel of Parmigiano wrapped in paper, bottles of olive oil.
- **Beside them:** an insulated cooler with its lid open showing ice.
- **Background:** the stern of a small tender boat and calm early-morning water in soft pastel light.
- **Feel:** everything accounted for before departure.

### Section: III. The Kitchen Lessons

#### 31. `public/images/experiences/kitchen-lessons.jpg`
**Where:** sticky photograph beside "The Kitchen Lessons."
**Format:** 4:5 portrait, 2400 × 3000 px.
**Description:** Two pairs of hands at a floured walnut counter.
- Chef Ray's hands (rolled sleeves, a dark apron at the edge) guide a guest's hands (light-colored knitwear sleeve) as they fold a well of eggs into flour to make pasta dough.
- Flour dust hangs in a shaft of soft daylight from a window on the left.
- **Around them:** a wooden rolling pin, a bench scraper, a bowl of brown eggs, a small mound of finished dough under a cloth.
- **Palette:** flour white, walnut, cream, a soft sage-green bowl.
- Faces out of frame.
- **Feel:** warmth, patience, the pleasure of learning with your hands.

#### 32. `public/images/experiences/kitchen-lessons-detail.jpg` (NEW)
**Format:** 3:2 landscape, 2400 × 1600 px.
**Description:** Overhead on the same floured counter: neat rows of hand-shaped orecchiette and a few lengths of freshly cut tagliatelle hanging over a wooden drying rack. A small handwritten recipe card weighed down by an egg.
**Light:** soft daylight, bright but gentle.

### Section: IV. The Occasion

#### 33. `public/images/experiences/occasion.jpg`
**Where:** sticky photograph beside "The Occasion."
**Format:** 4:5 portrait, 2400 × 3000 px.
**Description:** The moment of a toast at a long celebration table in low warm light, photographed from one end at seated height.
- A dozen hands raise crystal glasses of champagne and red wine above the table, with motion blur on the glasses.
- The guests are only shoulders, sleeves and out-of-focus silhouettes: dark jackets, a silk dress strap, a bracelet catching the light. No faces.
- **Table:** candles, half-finished plates, a loosened bouquet of garden roses in deep burgundy and ivory.
- **Background:** a warm, softly lit room with an arched window.
- **Feel:** joy, noise, abundance, a night with toasts in it.

#### 34. `public/images/experiences/occasion-detail.jpg` (NEW)
**Format:** 3:2 landscape, 2400 × 1600 px.
**Description:** Service choreography seen from a kitchen doorway.
- A line of five servers in black, faces turned away, carrying identical plates out in unison toward a glowing dining room.
- Chef Ray at the pass in the foreground, back to camera, wiping the rim of the last plate.
**Light:** warm, slightly hazy. **Feel:** precision at scale.

### NEW section: "Anatomy of an evening" film

#### 35. `public/videos/anatomy-of-an-evening.mp4` + `.webm` + `anatomy-of-an-evening-poster.jpg` + `anatomy-of-an-evening.vtt` (NEW)
**Where:** a full-width cinematic film placed between The Possibilities and the four experiences. It plays only when the visitor presses play, with sound.
**Format:** 16:9, 3840 × 2160 master, delivered at 1920 × 1080. 60–75 seconds. Sound: natural recorded sound (sizzle, knife, glass, low laughter) plus a sparse solo piano or cello score. Optional quiet voice-over by Chef Ray. English captions file.
**Story:** one evening from morning to midnight, told without showing a single guest's face.
- **0–8s:** Dawn. A fish market or dock: Chef Ray's hands select a whole fish from ice, checking the eye and gill. Cold blue light.
- **8–16s:** A sunlit home kitchen. Garlic sliced paper-thin on a board, tomatoes crushed by hand into a heavy pot, the first bubble of a sauce.
- **16–24s:** Midday. Flour and eggs. Pasta dough kneaded, rolled and cut by hand. Close-ups of the knife and the fall of the ribbons.
- **24–32s:** Late afternoon. The table is dressed: linen spread, plates set, candles placed. Golden window light.
- **32–40s:** Dusk. Candles are lit one by one. The camera pulls back to reveal the full table glowing in a darkening room.
- **40–52s:** Service. A rhythm of fast, controlled shots: a flame flares under a pan, plates are wiped, a gloved hand carries two plates through a doorway, wine is poured. Laughter heard but faces never seen.
- **52–62s:** Late. A dessert of olive oil cake with citrus is set down. A guest's hand covers another's on the linen. Candles burn low.
- **62–70s:** After. The kitchen is clean and silent. Chef Ray folds a towel and sets it on the counter. A handwritten card is placed on the table. The last candle is extinguished; smoke curls upward.
- **70–75s:** Black. The RG monogram fades in, in brass, then out.

**Poster:** the full table glowing at dusk.

---

## Page 3: The Chef (`/chef`)

### Section: Page opening ("Ray Gennaro")

#### 36. `public/images/chef/chef-hero.jpg`
**Where:** a full-width image behind the opening name "Ray Gennaro", under a dark gradient.
**Format:** 16:9 landscape, 3840 × 2160 px. Chef Ray in the right half; the left half quiet for the name.
**Description:** A real environmental portrait of Chef Ray in a dark, beautiful kitchen at night.
- **Pose:** standing behind a long steel-and-walnut counter, sleeves rolled, hands resting on the counter edge, looking directly into the lens with quiet confidence.
- **Light:** a single warm overhead pendant directly above him, which falls off into darkness around him.
- **Behind him:** shelves of copper pots and glass jars, a hanging rack of ladles, the faint orange glow of an oven window.
- **Counter in front:** a wooden board with a whole wheel of Parmigiano partly cut, a knife, a bowl of tomatoes.
- **Color:** deep espresso, copper, warm skin tones.
- **Feel:** the owner of the room.

#### 37. `public/images/chef/chef-hero-mobile.jpg`
**Where:** the same position on phones.
**Format:** 9:16 portrait, 1440 × 2560 px.
**Description:** The same scene and light as image 36, photographed vertically, not cropped. Chef Ray framed from the waist up in the lower half of the frame. The overhead pendant and dark kitchen fill the upper half, where the name will sit.

### NEW section: The Chef film

#### 38. `public/videos/chef-film.mp4` + `.webm` + `chef-film-poster.jpg` + `chef-film.vtt` (NEW)
**Where:** directly after the opening, before The Archive. A full-width player that plays on request with sound.
**Format:** 16:9, 3840 × 2160 master, delivered at 1920 × 1080. 90–120 seconds. Chef Ray's own voice, a documentary interview recorded in his kitchen, over sparse score. English captions file.
**Purpose:** to let the visitor feel they have met him.
**Shot by shot:**
- **0–10s:** Close on Chef Ray's hands washing at a deep kitchen sink, water in warm light. His voice begins, talking about Sunday mornings in New Haven and the pot of gravy started before church.
- **10–25s:** Real archival photographs of his family kitchen and early years, slowly scanned by the camera on a light table (only real photos). Intercut with present-day hands crushing tomatoes into a pot.
- **25–45s:** The restaurant years. If archival restaurant footage or photos exist, use them. Otherwise, present-day re-enactment in a professional kitchen with an orange glow: flames, the rattle of pans, tickets. He speaks about discipline and timing.
- **45–65s:** Private service. Him walking calmly through a dark private home toward a lit dining room carrying a plate. He talks about guests' homes and discretion.
- **65–85s:** Travel. A boat crossing calm water toward an island at dusk, crates being unloaded on a dock, a table on a terrace above the sea. He talks about planning for everything.
- **85–105s:** Teaching. Laughter at a floured counter, his hands guiding someone else's hands. He talks about passing on what he was given.
- **105–120s:** Interview close-up, the only time he faces camera for more than a moment, saying one plain closing line in his own words. Cut to black, RG monogram.

**Poster:** the interview close-up, him mid-thought, looking just off camera.

### Section: The Archive (six eras that slide past horizontally)

All six share one format: **4:5 portrait, 2400 × 3000 px.** A large brass numeral (I–VI) overlaps the bottom-right corner of each image, so keep that corner relatively dark and uncluttered.

#### 39. `public/images/archive/01-family-table.jpg`
**Era:** I, "The family table," New Haven.
**Description:**
- **First choice:** a real family photograph from Chef Ray's childhood or youth in New Haven: a crowded Sunday table, a grandmother at the stove, a family kitchen. Scanned at high resolution, edges of the print visible, keeping its natural color or black-and-white, cropped to 4:5 with care.
- **If no archival photo is available:** a present-day still life titled clearly as such. A heavy enameled pot of tomato "gravy" simmering on an old white stove, a long wooden spoon resting across the top, steam rising in morning window light. Around it: a crusty loaf of Italian bread on a cloth, a jar of dried oregano, a hand-written recipe card, a glass of red wine.
- **Palette:** cream enamel, deep tomato red, soft daylight.
- **Feel:** home, Sunday, before noon.

#### 40. `public/images/archive/02-the-line.jpg`
**Era:** II, "The line," professional kitchens.
**Description:**
- **First choice:** a real photograph of Chef Ray working a restaurant line.
- **Otherwise, present day:** a professional restaurant kitchen mid-service, shot from the end of the line at hip height. Stainless steel, a row of burners with tall flames under steel pans, a flare of fire in the foreground pan, steam, a rail of paper order tickets hanging above.
- A figure in whites and an apron works at the stove with his back to camera, out of focus.
- **Light:** hot orange flame light and cool overhead fluorescents.
- **Feel:** heat, speed, discipline.

#### 41. `public/images/archive/03-private-rooms.jpg`
**Era:** III, "The private rooms," households, estates and luxury dining.
**Description:** A low-lit private dining room in a grand home.
- **Table:** a single round table for eight dressed in ivory linen, lit by candles and a dimmed crystal chandelier.
- **Walls:** dark green silk or deep oxblood lacquer, a large oil painting in a gilded frame in shadow.
- **Doorway:** in the left third, a slightly open service door spills warm kitchen light across the floor.
- No people.
- **Feel:** precision, warmth and absolute discretion.

#### 42. `public/images/archive/04-the-islands.jpg`
**Era:** IV, "The islands," private islands.
**Description:**
- **First choice:** a real photograph from one of Chef Ray's private-island engagements, with all identifying details of the client removed.
- **Otherwise:** a wooden dock on a private island at dusk, lined with lit lanterns leading to shore, with crates of provisions stacked at the near end.
- **Water:** calm, deep blue-black, reflecting the lantern light.
- **Sky:** violet with a thin orange horizon.
- **Feel:** distance, planning, calm.

#### 43. `public/images/archive/05-the-lessons.jpg`
**Era:** V, "The lessons," teaching.
**Description:** Close on Chef Ray's flour-dusted hands placing a guest's fingers to show how to pinch and shape a piece of orecchiette pasta on a wooden board.
- Daylight from a window, flour in the air.
- Only hands and forearms visible: his with rolled dark sleeves, the guest's in a cream knit sleeve.
- **Around them:** rows of finished pasta, a bench scraper, a small bowl of semolina.
- **Feel:** the circle closing, passing it on.

#### 44. `public/images/archive/06-now.jpg`
**Era:** VI, "Wherever the table is," today.
**Description:** A real present-day photograph of Chef Ray standing at the head of a fully set candlelit table in a client's dining room, minutes before guests arrive.
- **Pose:** making one final adjustment to a wine glass, looking down at it, face in three-quarter profile lit by the candles.
- **Wardrobe:** a dark chef's jacket or dark tailored shirt.
- **Room:** elegant and dim. The table glows in ivory and brass.
- **Feel:** everything he learned, in one moment.

### NEW: Archive keepsakes

Small archival items shown as smaller "pinned" images within each era. Real items only; skip any that don't exist.

**Format:** each a clean, high-resolution scan or overhead photograph on dark walnut or linen, natural edges visible, 2000 px on the long side.

#### 45. `public/images/archive/keepsake-01-family-photo.jpg` (NEW)
A real family photograph from his New Haven childhood: family gathered at a table or at the stove. Scanned with its paper edges and any handwriting on the back photographed separately.

#### 46. `public/images/archive/keepsake-01-recipe-card.jpg` (NEW)
A real handwritten family recipe card or notebook page, worn, stained with use, the handwriting visible. Photographed flat on linen in soft daylight.

#### 47. `public/images/archive/keepsake-02-early-menu.jpg` (NEW)
A real menu, name badge, uniform patch, or photo from his restaurant years. Photographed overhead on dark walnut with one warm light from the top left.

#### 48. `public/images/archive/keepsake-02-knife-roll.jpg` (NEW)
Chef Ray's own well-used knife roll, unrolled on a steel counter.
- The knives: worn wooden handles, a whetstone, a honing steel.
- Overhead, hard raking light that shows the wear.
- **Feel:** decades of work.

#### 49. `public/images/archive/keepsake-04-travel.jpg` (NEW)
A real object from his travel work: a provisioning list, a boarding pass or ferry ticket, a handwritten menu from an island dinner with client details covered. Overhead on linen.

### Section: The Standards ("How he works", five rules)

**NEW:** one image per standard, shown in a single sticky frame that changes as each rule is opened. All five: **4:5 portrait, 2000 × 2500 px**, on the linen-colored section, so these images are lighter and warmer than the rest.

#### 50. `public/images/standards/01-the-effort.jpg` (NEW)
**Standard:** "The guest never sees the effort."
**Description:** Split world, shot through a doorway.
- **Left half:** a calm, candlelit dining room with a perfectly set table, in soft focus.
- **Right half:** the kitchen just beyond the swinging door, in sharp focus: a cook mid-stride with a hot pan, steam, a stack of plates.
- The door frame divides the two worlds down the middle.

#### 51. `public/images/standards/02-taste-twice.jpg` (NEW)
**Standard:** "Taste everything. Twice."
**Description:** A close-up of Chef Ray tasting sauce from a small silver spoon above a pot.
- His face in soft profile, eyes lowered, concentrating. His other hand holds the pot handle with a folded towel.
- Steam softens the frame.
- **Light:** warm window light from behind him, which back-lights the steam.

#### 52. `public/images/standards/03-cleaner-than-found.jpg` (NEW)
**Standard:** "Leave the kitchen cleaner than you found it."
**Description:** A residential kitchen after service, spotless and quiet.
- Gleaming stone counters with a single neatly folded white towel and one small vase of herbs.
- The range wiped clean, copper pots hung in a row.
- **Light:** soft and cool, late at night under one pendant.
- No people.
- **Feel:** as if nobody had cooked here.

#### 53. `public/images/standards/04-written-once.jpg` (NEW)
**Standard:** "No two tables get the same night."
**Description:** A single printed menu card on a plate, photographed straight on, the card dated with a handwritten date in ink in the corner.
- **Beside it:** a lit candle and a sprig of rosemary.
- **Background:** dark and soft.
- **Feel:** one evening, never repeated.

#### 54. `public/images/standards/05-stays-at-the-table.jpg` (NEW)
**Standard:** "What is said at the table stays at the table."
**Description:** The end of the night.
- A table with pushed-back chairs, crumpled napkins, glasses with the last of the wine, and one candle still burning.
- The room dark beyond. No people, just the warmth of a conversation that has just ended.

### Section: The close ("Bring him to your table.")

Uses video **25**. No additional assets.

---

## Page 4: Inquire (`/inquire`)

### Section: Left column ("The first chapter.")

#### 55. `public/images/inquire/inquire-desk.jpg` (NEW)
**Where:** a quiet, very dark background image behind the left column and the start of the conversation, at low brightness (about 25%).
**Format:** 16:9, 3200 × 1800 px.
**Description:** The same world as the Inquire share image (#4), photographed wider and more atmospherically.
- **On the walnut desk:** an open reservation book with a ribbon marker, the fountain pen across its gutter, a brass lamp casting a warm pool of light.
- **Around it:** deep shadow, the window behind dark with the faint reflection of the lamp.
- **Composition:** the lamp's pool of light sits in the left third of the frame, behind the heading. The right two-thirds are nearly black, behind the form.

### Section: Setting-aware backdrop (NEW behavior)

When the visitor chooses where the table will be (a home, a yacht, an island and so on), the right side of the page can show the matching room very faintly behind the questions. This uses images **10–17**, with no new files.

#### 56. `public/images/inquire/setting-venue.jpg` (NEW)
**Where:** the backdrop when the visitor chooses "A venue we have chosen."
**Format:** 16:11, 2400 × 1650 px.
**Description:** An empty, elegant event space before setup.
- **Room:** a grand room with tall arched windows, herringbone wood floors, a crystal chandelier unlit.
- **Light:** a long table of bare wood in the center, catching the last daylight through the windows.
- **Palette:** ivory walls, honey wood, grey-gold light.
- **Feel:** a blank canvas.

### Section: Sent ("Your request is with Chef Gennaro.")

#### 57. `public/images/inquire/request-sealed.jpg` (NEW)
**Where:** beside the confirmation message after the request is sent.
**Format:** 4:5 portrait, 1600 × 2000 px.
**Description:** A cream envelope lying on dark walnut, closed with an oxblood wax seal pressed with the "RG" monogram.
- **Beside it:** a brass letter opener and the fountain pen.
- **Light:** one warm candle just out of frame, which casts a soft glow and the faint shadow of the seal's relief.
- **Feel:** received, in safe hands.

---

## Page 5: Private Invitation (`/invite/…`)

#### 58. `public/videos/invite.mp4` + `invite.webm` + `invite-poster.jpg` (NEW)
**Where:** background behind "For [guest name]" on the private invitation page, very dark under a gradient.
**Format:** 16:9, 1920 × 1080, 10-second seamless loop, no sound, under 3 MB. Also deliver a 9:16 version: `invite-mobile.mp4`.
**Description:** One slow overhead shot on dark walnut, the action in the lower half (the guest's name sits in the upper half).
- **0–3s:** an ivory envelope sealed with oxblood wax lies still in candlelight.
- **3–6s:** a hand (dark cuff) gently breaks the seal and lifts the flap.
- **6–8s:** the hand draws out a heavy ivory card with the brass "RG" monogram and lays it beside the envelope.
- **8–10s:** stillness, candlelight flickering across the card. A slow cross-fade back to the sealed envelope for the loop.

#### 59. `public/images/invite/invite-card.jpg` (NEW)
**Where:** the still fallback for #58 on slow connections and reduced-motion settings, and for the expired or invalid invitation message.
**Format:** 16:9, 2400 × 1350 px.
**Description:** The final frame of #58 as a high-resolution still: the opened envelope and the monogrammed card on walnut in candlelight, all in the lower half of the frame.

---

## Page 6: Not Found (`/404`)

#### 60. `public/images/system/not-set.jpg` (NEW)
**Where:** background behind "This table isn't set."
**Format:** 16:9, 3200 × 1800 px, with a 9:16 crop safe area in the center.
**Description:** An empty dining room at night, viewed from the doorway.
- **Table:** a bare dark walnut table with no cloth, its chairs neatly pushed in.
- **On it:** a single unlit candle in a brass holder at the center.
- **Light:** one faint warm lamp in the corner. Everything else in deep shadow.
- **Feel:** quiet and a little wry; the evening hasn't been arranged yet.

---

## Future pages already in the roadmap

These pages don't exist yet, but the structure already has room for them. Shooting these during the same production saves a second shoot.

### Destination pages (`/destinations/…`)

Each page needs one opening image (**16:9, 3840 × 2160**) and one mobile version (**9:16, 1440 × 2560**). Unlike the composer images, these are wider establishing shots of the place itself, at dusk. They are always image-first and dinner-adjacent, with no recognizable private properties.

#### 61. `public/images/destinations/connecticut.jpg` + `connecticut-mobile.jpg`
**Description:** A classic Connecticut shoreline town at dusk in early autumn.
- White clapboard and stone houses among trees turning amber and red, the lit windows of one large home glowing warmly.
- A calm harbor with a few sailboats in the foreground.
- **Sky:** soft peach to dusky blue.
- **Feel:** home ground: old New England, understated wealth.

#### 62. `public/images/destinations/new-haven.jpg` + `new-haven-mobile.jpg`
**Description:** A New Haven Italian-American neighborhood street at evening.
- Brick row buildings, the warm glow of a family bakery or pork store window with bread and pastries visible, a string of lights overhead, wet pavement reflecting the light after rain.
- No legible shop names.
- **Feel:** roots, community, the smell of bread.

#### 63. `public/images/destinations/manhattan.jpg` + `manhattan-mobile.jpg`
**Description:** The view from inside a high-floor apartment toward an out-of-focus Manhattan night at blue hour.
- The window frame and a dark interior edge in the foreground.
- A single lit candle on the sill, sharp, against the bokeh of the city.
- No identifiable landmarks.

#### 64. `public/images/destinations/hamptons.jpg` + `hamptons-mobile.jpg`
**Description:** Dune grass and a weathered boardwalk leading toward the ocean at golden hour.
- A shingled house just visible behind the dunes with its lanterns lit.
- Long gold light, soft surf.

#### 65. `public/images/destinations/palm-beach.jpg` + `palm-beach-mobile.jpg`
**Description:** A Florida coast at blue hour.
- A row of tall palms silhouetted against an indigo sky.
- A calm waterway with the reflections of warm dock lights.
- A pale stone terrace edge in the foreground with a single hurricane lantern.

#### 66. `public/images/destinations/yachts.jpg` + `yachts-mobile.jpg`
**Description:** An aerial view, straight down or at a high angle, of a large white yacht at anchor in clear turquoise water at golden hour.
- Its aft-deck table set and glowing with candles.
- Its long shadow on the seabed below.
- No name or registration visible.

#### 67. `public/images/destinations/islands.jpg` + `islands-mobile.jpg`
**Description:** An aerial view of a small private island at dusk.
- Dense tropical green, a ring of pale sand, a single lantern-lit dock reaching into dark-blue water.
- One tiny glowing table visible on the beach.
- **Sky:** fading violet.

#### 68. `public/images/destinations/europe.jpg` + `europe-mobile.jpg`
**Description:** An Italian lake or hillside at sunset seen from a villa terrace.
- Cypress trees, terracotta roofs, the water gold and calm.
- A carafe of wine and two glasses on the balustrade in the foreground.
- **Feel:** where it all comes from.

### Press and media kit (`/press`)

#### 69. `public/images/press/ray-gennaro-portrait-color.jpg` (NEW)
**Format:** 4:5, 3200 × 4000 px, high resolution for print.
**Description:** A clean real portrait of Chef Ray for magazines and event programs.
- From the chest up, looking directly into the camera, relaxed and assured.
- A dark chef's jacket or dark shirt against a plain warm-charcoal backdrop.
- Soft directional light from the left, natural skin tones, minimal retouching.

#### 70. `public/images/press/ray-gennaro-portrait-bw.jpg` (NEW)
**Format:** 4:5, 3200 × 4000 px.
**Description:** Same session as #69, converted to rich black-and-white.
- A different expression: a small half-smile, or looking slightly off camera.
- Deep blacks, a clean white point.

#### 71. `public/images/press/ray-gennaro-in-action.jpg` (NEW)
**Format:** 3:2 landscape, 4500 × 3000 px.
**Description:** Chef Ray mid-service in a kitchen, sharp and in focus.
- Plating a dish with total concentration, a pan with flame in the background.
- Warm light, high energy, publishable full-page.

### Journal (`/journal`)

#### 72. `public/images/journal/journal-cover.jpg` (NEW)
**Where:** the default cover for the Journal index and any article without its own photography.
**Format:** 3:2, 2400 × 1600 px.
**Description:** Overhead on dark walnut:
- an open leather-bound kitchen notebook full of handwritten notes and small sketches (illegible)
- a fountain pen, a few loose bay leaves, a small dish of coarse salt
- a corner of a white plate.

**Light:** warm, from the top left. **Feel:** ideas, recipes, writing.

---

## Totals

- **Images:** 65 entries, 75 files including the three app-icon sizes (#6) and the mobile versions of the destination pages (#61–68).
  - **Needed at launch (27):** #1–6, 10–18, 27, 29, 31, 33, 36, 37, 39–44. These replace the current placeholders.
  - **Recommended additions:** everything else marked NEW.
  - **Future pages:** #61–72.
- **Videos:** 7 entries.
  - **Silent background loops (5):** home opening, desktop and phone (#7, #8); Experiences opening (#26, also delivered vertical); the closing candle (#25); the invitation (#58, also delivered vertical).
  - **Films with sound and captions (2):** "Anatomy of an evening" (#35) and the Chef film (#38).
- **Suggested shoot plan:**
  - **Day 1, Chef Ray:** portraits, the Chef film interview, Standards, Archive (present day), press.
  - **Day 2, The evening:** the dining rooms, the opening film, "Anatomy of an evening", the method steps, the private table, the occasion.
  - **Day 3, Destination:** yacht, island, waterfront, abroad.
  - **Anytime:** scanning his real family and career material.

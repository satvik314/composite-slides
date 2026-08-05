# Composite Slides — Example Concepts

A composite deck is a presentation where **every slide speaks its own visual language** — palette, typography, ambient motion, cursor, sound, and even the exit transition are all derived from that slide's content, while a shared skeleton (navigation, progress rail, layout grammar) keeps it feeling like one deck.

The recipe, distilled from [`decks/acre-atlas.html`](decks/acre-atlas.html):

1. **Shared skeleton** — one nav system, one layout grammar (eyebrow → title → big stat → chips), one progress rail.
2. **Per-slide language** — background, palette, display type, and an ambient system (rain, neon flicker, fog…) that *is* the content.
3. **Signature exits** — each slide leaves the way its subject would (Tokyo's neon suffers a power cut; São Paulo's skyline gets demolished).
4. **Breach moments** — occasionally one slide's world leaks into the next (Mumbai's monsoon rains onto the following slide). This is the trick that makes the composite feel alive instead of just "many themes."
5. **Theme-aware chrome** — cursor, progress dots, and ambient sound all switch per slide.

Below are deck concepts designed to exploit this format. Each lists the per-slide languages, signature exits, and a breach moment.

---

## 0. The Board Deck — *built: [`decks/board-meeting.html`](decks/board-meeting.html)*

**A quarterly board review where each department presents in its native language.** The most practical use case in this list: the theme isn't a metaphor, it's a label — you always know whose numbers you're looking at.

| Slide | Language | Note |
|---|---|---|
| Cover / Quarter / Close | Executive ivory, serif, restrained | Neutral bookends make the theme shifts read as chapters |
| Finance | Spreadsheet: ledger grid, column headers, formula bar, cell-referenced KPI "cells" | Exit: the sheet clears column by column |
| Engineering | IDE: line numbers, tab bar, syntax-highlighted stats, status bar | Exit: terminal reset |
| Design | Multiplayer canvas: dot grid, drifting named cursors, sticky-note KPIs, selection box on the title | Exit: select-all → delete |
| Marketing | Campaign gradient, story progress bars, glassy stat pills | Exit: story swipe-up |
| Sales | Leaderboard: navy + gold, pipeline bars by segment | Exit: bars slam shut |
| People | Warm cream + serif, soft shapes | Humanity as a design language |
| Risks & Asks | A stark, undecorated memo | Removing all theming IS the theme — it signals seriousness |

Restraint notes: no sound, no custom cursors, no breach moments — a board deck earns trust by showing the format can behave.

---

## 1. The Interface Ages — *built: [`decks/interface-ages.html`](decks/interface-ages.html)*

**Fifty years of UI design, where each slide IS the design language of its era.** The strongest possible fit for composite slides: the theme isn't a metaphor for the content — it literally *is* the content.

| Slide | Language | Signature exit |
|---|---|---|
| 1978 · The Terminal | Green phosphor, scanlines, type-on text, blinking block cursor | CRT power-off (collapse to a line, then a dot) |
| 1996 · The Homepage | Geocities: starfield tile, rainbow rules, visitor counter, marquee, beveled buttons | "Connection lost" — the page tears into shreds |
| 2007 · Gloss & Glass | Aqua gradients, wet-floor reflections, linen texture, slide-to-unlock | The unlock knob sweeps and wipes the slide away |
| 2013 · Flat & Material | Bold ink, paper cards, FAB, tap-anywhere ripples | A material ripple engulfs the screen from the FAB |
| 2019 · Dark Mode | Neumorphic cards, OLED black, neon accents, aurora blobs | Someone flips the theme — a light-mode flashbang |
| 2024 · The Conversation | Gradient mesh, glassmorphism, streaming chat bubbles | The reply "de-streams" — dissolves token by token |

**Breach:** the Geocities marquee keeps scrolling across the glossy 2007 slide before dying with "connection lost."

---

## 2. A Night of Genres

**A tour through music history where each slide is mixed like the genre it covers.**

- **Jazz (1940s)** — smoky charcoal background, cream serif type, a slowly rotating vinyl disc as the progress dial, tape hiss + brushed-drum ambience. Text swings in slightly off-beat.
- **Punk (1977)** — ransom-note typography (each letter a different cut-out style), safety-pin dividers, harsh photocopy grain, everything slightly askew and jittering.
- **Disco (1979)** — mirrorball light specks orbiting the slide, chrome gradient title, four-on-the-floor pulse syncing the chip animations.
- **Hip-hop (1989)** — spray-paint title with drip, torn-poster background layers, record-scratch on every navigation.
- **Techno (1995)** — strict grid, strobe-flash accents, waveform bars as the stat visualization, monospace everything.
- **Lo-fi (2020)** — grainy pastel, wobbly VHS chroma-shift on the title, rain-on-window ambience, chill 70bpm sway on all elements.

**Signature exits:** the punk slide gets ripped in half; the vinyl slide slows to a stop with a pitch-drop; techno cuts on a strobe blackout.
**Breach:** the disco mirrorball specks keep drifting over the punk slide until a spray-paint X covers them.

---

## 3. Nine Planets, Nine Atmospheres

**A solar system tour where each slide's physics matches the planet.**

- **Mercury** — scorched grays, heat-shimmer distortion on the title, stats about temperature swings.
- **Venus** — sulfur-yellow acid haze drifting in layers (the London-fog system, recolored and poisonous).
- **Earth** — the only slide in full color; everything else in the deck is limited-palette. That contrast is the argument.
- **Mars** — rust-red dust storm particles blowing horizontally; text sandblasted in.
- **Jupiter** — slowly swirling banded background; the Great Red Spot as an orbiting interactive element.
- **Saturn** — the progress rail itself becomes rings around the title.
- **Uranus/Neptune** — glacial cyan/ultramarine, everything moving at 20% speed to sell the distance.

**Signature exits:** Mars leaves in a dust devil; Jupiter's storm engulfs the frame; Neptune just freezes solid (elements ice over with frost creep).
**Breach:** Mars's dust storm keeps blowing sand across the Jupiter slide.

---

## 4. The Kitchen Atlas

**World cuisines, each slide plated in the cuisine's visual language.**

- **Japan** — extreme whitespace, one accent of lacquer red, a single centered dish silhouette; text fades in with tea-ceremony patience.
- **Italy** — trattoria menu: cream paper, hand-drawn rules, chips styled as menu items with dotted price leaders.
- **Mexico** — papel picado banners (perforated CSS cutouts) fluttering across the top, hot pink/marigold/teal palette.
- **India** — spice-market palette (turmeric, chili, cardamom) as literal pigment piles that dust the bottom edge; masala-drone ambience.
- **France** — patisserie precision: gold foil accents, Didone typography, everything on a strict baking-sheet grid.
- **Korea** — banchan grid: many small dishes = many small stat cards filling a symmetric spread.

**Signature exits:** Italy's menu folds shut; Mexico's papel picado tears off in the wind; Japan's slide exits by reducing to a single brushstroke.
**Breach:** India's spice dust drifts onto France's pristine patisserie slide — and a small "sacrebleu" stamp appears.

---

## 5. Postmortem: Five Startups That Burned

**Each failed company gets a slide in its own brand language — and its death IS the exit transition.**

- Corporate-blue biotech slide whose data literally fails to validate (numbers glitch and redact themselves).
- A coworking slide styled as inspirational-quote wall art, valuation counter spinning up… then the exit crashes it 96%.
- A juicer slide in premium minimalist wellness-white — exited by two hands (cursor prompt) squeezing it flat.
- A streaming app in vertical-video layout — every element rotated for a phone that never mattered; exits in 7 seconds because that's the content length.
- The finale renders all brands' ashes in one neutral ledger: money in, money out.

**Why it works:** brand language is the *subject* of the talk, so per-slide theming is analysis, not decoration.
**Breach:** the valuation confetti from the coworking slide keeps falling over the juicer slide's sterile white.

---

## 6. A Century of Type

**Typography movements, set in themselves.**

- **1919 Bauhaus** — geometric grotesk, primary-color circles/triangles/squares as the ambient system, asymmetric but balanced layout.
- **1957 Swiss International** — Helvetica-style neo-grotesque, strict grid visible as faint guides, flush-left ragged-right, red accent only.
- **1977 Phototype excess** — ultra-tight tracking, chrome and rainbow fills, letters overlapping.
- **1994 Grunge** — distressed type, overprinted layers, deliberately broken kerning that re-breaks every few seconds.
- **2016 Variable fonts** — one word whose weight/width oscillates live on scroll position.

**Signature exits:** Swiss slide exits by its grid collapsing to a single red line; grunge slide is xeroxed to death (contrast crush over 4 frames); variable font slide exits by animating weight to 0.
**Breach:** grunge texture stains the corner of the pristine variable-font slide.

---

## 7. One Story, Five Newsrooms

**The same news event, retold slide-by-slide in the design language of different publications** — broadsheet, tabloid, cable-news lower-third chaos, group-chat bubbles, and a wire-service terminal. The content (a single fictional event) is constant; only the language changes. It's a media-literacy talk where the styling does the arguing.

**Signature exits:** the tabloid slide exits with a "EXCLUSIVE!!" flashbulb burst; the group chat exits by someone leaving the chat.
**Breach:** the cable-news ticker keeps crawling under the calm broadsheet slide.

---

## 8. The Sleep Cycle

**One night, one deck — the visual language dissolves as consciousness does.**

- **11 PM · Awake** — crisp product-dashboard styling, sharp type, full saturation.
- **Stage 1–2** — edges soften, palette cools, animations slow; the progress rail starts drifting.
- **Deep sleep** — near-black slide, text at 8% opacity, one slow breathing pulse (the Beijing sun, recolored).
- **REM** — the deck *misbehaves*: elements from earlier slides reappear scaled wrong, fonts swap mid-word, gravity reverses. (Dream = controlled breach of every previous theme.)
- **6:59 AM · Alarm** — jump-cut to a blinding alarm-clock slide, harsh red monospace, shaking gently.

**Why it works:** the progression between themes is itself the narrative arc — composite slides as storytelling, not variety.

---

## 9. Field Notes: Five Ecosystems

**Biomes with weather as the ambient system** — rainforest (dense layered canopy shadows, dripping condensation), desert (heat ripple, sparse type, huge negative space), tundra (frost creeping in from slide edges the longer you stay), deep ocean (marine snow particles, pressure gauge as progress rail, bioluminescent hover states), grassland (wind-bent type, seed particles).

**Signature exits:** tundra exits in a whiteout; deep ocean exits by the slide imploding a little (scale + darkness); desert exits as a mirage shimmer.
**Breach:** rainforest humidity fogs the top of the desert slide before evaporating.

---

## 10. The Deal Deck (a stealth pitch)

**A startup pitch where each section borrows the language of what it discusses** — the problem slide styled as the clunky legacy tool being replaced (deliberately ugly enterprise UI, beige, Windows-95 chrome); the solution slide in the startup's own crisp brand; the market slide as a trading terminal; the team slide as baseball cards; the ask slide as a beautifully typeset contract with a signature line that the cursor turns into a pen over.

**Why it works:** contrast is persuasion. Making the audience *feel* the legacy tool's ugliness beats describing it.
**Breach:** beige legacy-UI toolbars keep popping over the solution slide until the product's ✕ buttons dismiss them one by one.

---

## Picking a topic: the litmus test

A subject earns the composite treatment when **the differences between its parts are the point**. Good candidates have:

- **Natural chapters** with strong, distinct visual identities (cities, eras, genres, brands, biomes).
- **A constant measuring stick** carried across all themes (acres vs NYC, kbps, decibels, valuation) so the deck stays one argument, not an anthology.
- **At least one earned breach** — a place where one chapter's world spilling into the next says something true (monsoon flooding, dust storms traveling, tickers that never stop).
- **A finale that flattens** — one closing slide in a neutral language that lines all the themes up side by side (the bar chart, the timeline strip, the riso print).

If every slide would just be "same layout, different accent color," it's not a composite deck — it's a theme with moods.

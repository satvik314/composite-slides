---
name: composite-slides
description: Build composite slide decks — presentations where every slide speaks its own visual language (palette, typography, ambient motion, and exit transition all derived from that slide's content) while a shared skeleton keeps it feeling like one deck. Produces a single self-contained HTML file with no frameworks or build step. Use this skill whenever the user asks for a composite deck, a multi-theme presentation, slides where each slide/section/chapter has its own theme or style, a presentation where departments/eras/brands/cities each get their own look, or an "AI-native" slide deck. Also use when the user shares an outline with visually distinct chapters and wants it turned into slides.
---

# Composite Slides

Build a presentation where **every slide speaks its own visual language** — while a shared skeleton keeps it feeling like one deck, not an anthology. Deliver a **single self-contained HTML file**: no frameworks, no build step, opens in any browser, presents with scroll/arrows/swipe.

## Is the topic right for this?

A subject earns the composite treatment when **the differences between its parts are the point**: natural chapters with distinct identities (departments, eras, cities, genres, brands, biomes). If every slide would just be "same layout, different accent color," don't force it — build a normal single-theme deck instead and say so.

## Step 1 — Design the theme map first

Before writing any code, draft a table and confirm direction with the user if the mapping isn't obvious:

| Slide | Language (palette · type · ambient system) | Signature exit |
|---|---|---|

Rules that make the map work:

- **Derive, don't decorate.** Each slide's language must come from its content. A finance section *is* a spreadsheet (ledger grid, formula bar, cell-referenced stats); an engineering section *is* an IDE (line numbers, syntax colors, status bar); 1996 *is* Geocities. If a theme is merely "pretty," replace it with one that carries information.
- **One measuring stick.** Carry a constant comparison across every theme (a KPI grammar, "vs. baseline" bar, a recurring unit). This is what keeps ten themes reading as one argument.
- **Neutral bookends.** Open and close in a calm, neutral style so the theme shifts read as chapters, not chaos. A finale that "flattens" all themes side by side (bar chart, timeline strip) lands the point.
- **Signature exits.** Each slide should leave the way its subject would: the CRT powers off, the spreadsheet clears column by column, the neon suffers a power cut, the canvas gets select-all-deleted.
- **At most one or two breach moments.** Occasionally let one slide's world leak into the next (monsoon rain falling onto the following slide; a marquee that keeps scrolling into the next era before dying). Breaches make the deck feel alive — but only when they say something true. Business decks usually deserve zero.

## Step 2 — Calibrate restraint

Match flourish to audience:

- **Business/board decks**: no sound, no custom cursors, no breaches; subtle exits; the boldest move allowed is an undecorated slide (removing all theming reads as seriousness).
- **Editorial/teaching/showcase decks**: per-slide cursors, ambient WebAudio (synthesized, no audio files), breach moments, theatrical exits are all on the table.

## Step 3 — Build on the standard skeleton

Structure every deck the same way so the composite variety sits on solid bones:

- `<section class="slide">` per slide inside `#deck`, each with `data-initial` (2–3 char label) and `data-color` (theme accent). First slide gets `class="slide active"`.
- **Shared layout grammar** inside each slide: eyebrow (mono, letter-spaced, uppercase) → big title → key stat with animated counter → detail chips. Themes restyle these elements; they never rearrange the grammar.
- **Navigation**: a `go(i)`/`step(dir)` pair handling wheel (threshold ~28px deltaY), arrow/page/space keys, and touch swipe (~50px), with a ~1s lock to prevent skipping. A fixed progress rail of dots built from `data-initial`/`data-color`, highlighting current/passed slides in each theme's accent.
- **Transitions**: default is opacity + slight scale crossfade. For signature exits, add a `.leaving` class to the outgoing slide for ~1s and style `#slide-id.leaving` with the themed outro animation (clip-path collapses, transform sweeps, filter flashes). Breaches are elements appended to the incoming slide for a few seconds, then removed.
- **Ambient systems** (rain, grids, fog, cursors, blobs) are absolutely-positioned layers at `z-index:1`; slide content sits in `.slide-inner` at `z-index:5`. Generate particles in JS loops with randomized position/duration/delay.
- **Counters**: animate numbers with an ease-out quart over ~1.5s, triggered on slide entry.
- **Typography**: load 3–6 Google Fonts — one per major language plus a shared mono. Every theme needs its own display face or styling to feel truly distinct.
- **Accessibility & fallbacks**: honor `prefers-reduced-motion` (kill animations, show final values); hide decorative elements and custom cursors on mobile (`pointer:coarse`, narrow widths); keep touch nav working.

If the composite-slides repo is available locally, read one deck in `decks/` (e.g. `board-meeting.html` for restraint, `acre-atlas.html` for full theatrics) as a working reference before building.

## Step 4 — Verify before delivering

Open the file headlessly (Playwright or any browser automation), step through **every** slide, and screenshot each one. Actually look at the images: overlapping text, broken layouts, missing contrast. Fix and re-check. A composite deck with one broken theme reads as a broken deck.

## Output

One `.html` file, named after the deck's subject in kebab-case. Tell the user: open it in a browser, navigate with scroll/arrows/swipe. If the deck has sound, mention the sound toggle. Offer a follow-up pass on any single slide's theme — composite decks improve one language at a time.

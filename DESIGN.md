---
name: IBN London 2026
description: A five-day invitation summit drawn as one continuous transit line, navy field, champagne-gold trunk, four lotus route colours.
colors:
  ink-deepest: "#030813"
  ink: "#050d1b"
  ink-raised: "#0a1a33"
  ink-glow: "#10264a"
  gold: "#d9b866"
  gold-hi: "#f1e2ae"
  gold-lo: "#9c7f36"
  paper: "#eef1f7"
  muted: "#aab7cd"
  body-soft: "#cdd6e6"
  route-red: "#ef4a5c"
  route-saffron: "#f6a637"
  route-indigo: "#8091ff"
  route-green: "#34c27a"
typography:
  display:
    fontFamily: "Gloock, Times New Roman, serif"
    fontSize: "clamp(2.6rem, 8.2vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Gloock, Times New Roman, serif"
    fontSize: "clamp(2rem, 4.4vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Gloock, Times New Roman, serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2.125rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.18em"
rounded:
  plaque: "3px"
  aside: "10px"
  panel: "14px"
  pill: "999px"
  roundel: "50%"
spacing:
  rail-mobile: "44px"
  rail-desktop: "104px"
  gutter: "clamp(1.25rem, 4vw, 3rem)"
  section-pad: "clamp(4.5rem, 9vw, 8rem)"
  sm: "0.85rem"
  md: "1.5rem"
  lg: "2.5rem"
components:
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.35rem"
  button-gold-hover:
    backgroundColor: "{colors.gold-hi}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.gold-hi}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.35rem"
  plaque:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.plaque}"
    padding: "0.6rem 0.8rem"
  notice-panel:
    backgroundColor: "{colors.ink-raised}"
    rounded: "{rounded.panel}"
    padding: "1.75rem 2rem"
  stop-chip:
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0.6rem 1rem"
---

# Design System: IBN London 2026

## Overview

**Creative North Star: "The Route Diagram"**

The page is a transit map you scroll. One vertical line runs the full height of the surface; every section is a station hung off it, announced by a paper-white name plaque. The world is a deep navy field with champagne gold as the trunk line and station roundels, and the four petals of the IBN lotus (red, saffron, indigo, green) become the coloured route segments for each programme day. Structure comes from hairline gold rules and the rail, not from cards.

The voice is engraved and official: a heavy display serif (Gloock) for names and numbers, against a signage grotesque (Hanken Grotesk) for everything that has to be read or read off a sign. Density is calm and generous; motion is one signature (the line drawing itself as you travel) plus quiet reveals.

This system is the base for future surfaces of the same product (attendee app, backend). They reuse the tokens, the rail-and-plaque grammar and the route colours; they do not reuse the landing page's composition.

**Key Characteristics:**
- Navy field, gold trunk line, four lotus route colours as per-station accents.
- Rail grid: fixed left rail column carrying the line, content column beside it.
- Station-name plaques in tracked uppercase sans on paper white.
- Hairline gold rules divide content; no cards, no box-per-item.
- Display serif for voice, grotesque for information.

## Colors

A night-navy field lit by one metal (champagne gold) and four signal colours reserved for route identity.

### Primary
- **Champagne Gold** (`gold`): the trunk line, station roundel rims, primary button fill, key labels, emphasised title words.
- **Pale Gold** (`gold-hi`): hover and highlight state of gold, heading tint on partner and terminus stations, ghost-button text, focus outline.
- **Bronze Gold** (`gold-lo`): scrollbar thumb only; the shadow end of the gold ramp.

### Secondary (route colours, from the lotus)
- **Signal Red** (`route-red`), **Saffron** (`route-saffron`), **Indigo Lilac** (`route-indigo`), **Signal Green** (`route-green`): each is applied through a single `--c` custom property on a station and drives its line segment, roundel rim, plaque tag, day numeral, meta labels, bullets and aside tint. Green also marks the "available" tag.

### Neutral
- **Ink** (`ink`): page field and text-on-gold.
- **Deepest Ink** (`ink-deepest`): footer and video wells, the floor of the field.
- **Raised Ink** (`ink-raised`): notice panel surface.
- **Glow Ink** (`ink-glow`): the hero's single radial lift toward the tower.
- **Paper** (`paper`): primary text and plaque faces.
- **Muted Slate** (`muted`): secondary text, captions, inactive nav.
- **Soft Body** (`body-soft`): running body on dark where muted is too quiet.
- Hairlines are gold at 22% (`--hair`) and 45% (`--hair-strong`) alpha.

### Named Rules
**The Route Colour Rule.** Red, saffron, indigo and green mean "which line am I on". They are set through `--c` on a station and never used as decoration elsewhere; gold is the only colour that belongs to the whole page.
**The One Metal Rule.** Gold is the only accent metal. No second warm or cool highlight competes with it outside the four route colours.

## Typography

**Display Font:** Gloock (with Times New Roman, serif)
**Body Font:** Hanken Grotesk (with system-ui, sans-serif)

**Character:** Gloock brings engraved, heavy-stroked authority to names, numerals and headings; Hanken Grotesk is clean transport signage. Both load through Next font variables `--nf-display` and `--nf-sans`.

### Hierarchy
- **Display** (400, clamp 2.6rem-6rem, 0.98): the hero title only; one emphasised phrase in gold.
- **Numeral** (400, clamp 5rem-9rem, 0.8): the day numeral, in the station's route colour.
- **Headline** (400, clamp 2rem-3.5rem, 1.08, max 20ch): section titles.
- **Title** (400, clamp 1.5rem-2.125rem, 1.15): sub-headings, award lines, inclusion terms, FAQ questions at smaller clamps.
- **Body** (400, 1.0625rem, 1.6): running text; lede in muted at clamp 1.0625rem-1.25rem, capped 60ch; long prose capped at 68ch.
- **Label** (600-700, 0.72-0.82rem, 0.14-0.18em tracking, uppercase): plaque text, fact and meta keys, roles, footer headings.

### Named Rules
**The Two Voices Rule.** Serif states things; sans explains and labels them. Body copy is never serif; labels are never lowercase serif.
**The Signage Caps Rule.** Uppercase with wide tracking is for station plaques and data keys (facts, meta, roles, levels) that read as signs. Long text is never set in caps.

## Layout

A two-column rail grid, `var(--rail)` then the content column: rail 44px on mobile, 104px from 900px. The rail holds the line segment (6px wide, centred) and the roundel; content sits in the second column with a gutter of clamp(1.25rem, 4vw, 3rem) and vertical section padding of clamp(4.5rem, 9vw, 8rem). Content is capped near 1180px per station. Section interiors use simple grids that collapse to one column below 900-1000px: day grid (1fr / 1.05fr), 2-up lists for awards, inclusions and collateral, 3-up pillars and photographic record, 5-up membership. The header is a sticky 62px-ish navy bar with hairline underline; a full-width sticky Apply button appears on mobile only. Hero fills the viewport, title left, cropped tower photograph fading in from the right edge behind it.

## Elevation & Depth

Flat and tonal. Depth is a hairline rule or a slightly lighter navy surface, not a shadow. The few shadows are functional: the plaque sits on the line with a soft dark drop (`0 6px 18px -8px rgba(0,0,0,.7)`), the gold button gains a gold glow on hover (`0 10px 24px -8px rgba(217,184,102,.5)`), the mobile sticky apply bar lifts over content, and hovered day roundels gain a 6px route-colour halo.

### Named Rules
**The Hairline Before Shadow Rule.** Separate content with a gold hairline; reach for a shadow only when an element floats above the page or responds to hover.

## Shapes

Two families. Signage is nearly square: plaques have 3px corners. Interactive and identity elements are round: pill buttons, stop chips, tags and the nav toggle (999px), roundels and portrait avatars (50%). Softer containers (aside 10px, film and photo 10-12px, notice 14px) are used sparingly. Station roundels are 26px rings with a 5px route-colour stroke and a navy centre; the terminus roundel is 38px with a paper centre and a double ring. Portraits get a 2px gold ring with 3px navy inset.

## Components

### Buttons
- **Shape:** full pill (999px), 1.5px gold border, 600 weight 0.95rem; large variant 1.05rem 1.7rem padding.
- **Primary (gold):** gold fill, ink text; hover lightens to pale gold, lifts 2px and gains a gold glow.
- **Ghost:** transparent, pale-gold text and gold border; hover fills gold at 12%.
- **Focus:** 2px pale-gold outline, 3px offset on every focusable element.

### Station plaque
Paper-white two-part sign: name on paper, then a segment tinted with the station's route colour (e.g. "Day / 1"). Tracked uppercase bold 0.78rem, ink text, 3px corners.

### Rail, segment and roundel
The line segment is a dim tint of the route colour with a full-strength overlay that scales down the page as the reader scrolls (`--fill`, 0-1). With reduced motion or without JS, all segments are fully drawn.

### Stop chips
Pill outlines in hairline gold with a route-coloured uppercase key; hover tints the fill 12% with the route colour and borders in it.

### Lists and rows
Hairline-ruled rows instead of cards: pillars, points (with route-colour dot bullet), awards (ring bullet that fills on hover and nudges right), inclusions, members, collateral, FAQ (`details` with a plus that rotates 45deg when open). Notice is the single raised panel (raised ink, hairline border, 14px).

### Navigation
Sticky blurred navy bar, logo mark plus serif wordmark and a small tracked gold sub-label. Links appear from 1040px in muted, going paper with a gold underline on hover or current section. Below that a pill toggle opens a sheet of serif links divided by hairlines.

### Motion
One easing: `cubic-bezier(0.16, 1, 0.3, 1)`. Hero content rises in staggered; below the fold, blocks reveal by fading and rising 26px once in view. All animation and transitions are disabled under reduced motion.

## Do's and Don'ts

### Do:
- **Do** set a station's colour by assigning one route tone (red, saffron, indigo, green or gold) and letting the segment, roundel, plaque tag, numerals and bullets inherit it.
- **Do** name every new section with a plaque on the rail's axis.
- **Do** separate content with gold hairlines (22% quiet, 45% strong) and generous vertical padding.
- **Do** keep primary actions gold pills; one primary per view.
- **Do** reuse these tokens as-is in the attendee app and backend, mapping the route colours to the same meaning (line identity).
- **Do** keep a visible 2px pale-gold focus outline.

### Don't:
- **Don't** put content in cards or boxed tiles; the notice panel is the one exception.
- **Don't** use route colours as generic status or decoration colours.
- **Don't** set body copy in Gloock or long text in uppercase.
- **Don't** introduce a second accent metal or a light page background.
- **Don't** add motion that ignores reduced-motion preferences.

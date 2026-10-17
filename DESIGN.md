---
name: Robert Youshock Portfolio & Design System
description: Broadcast motion design, generative AI workflows, and technical design systems
colors:
  primary: "#E8481C"
  primary-amber: "#F6A23C"
  secondary-pink: "#F0668C"
  accent-violet: "#B05BC8"
  neutral-bg: "#1F1D1D"
  neutral-surface: "#292626"
  neutral-fg: "#F5E7DF"
  neutral-mute: "rgba(245, 231, 223, 0.58)"
  neutral-line: "rgba(245, 231, 223, 0.16)"
typography:
  display:
    fontFamily: "'Bricolage Grotesque', 'Outfit', sans-serif"
    fontSize: "clamp(64px, min(15.7vw, 27vh), 330px)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "'Bricolage Grotesque', 'Outfit', sans-serif"
    fontSize: "clamp(34px, 3.47vw, 60px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.04em"
  title:
    fontFamily: "'Manrope', sans-serif"
    fontSize: "clamp(22px, 2.2vw, 32px)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Manrope', sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "'Hanken Grotesk', 'Manrope', sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.06em"
rounded:
  sm: "8px"
  md: "18px"
  lg: "24px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "36px"
  xl: "clamp(20px, 5vw, 72px)"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-fg}"
    rounded: "{rounded.pill}"
    padding: "12px 28px"
  button-primary-hover:
    backgroundColor: "{colors.primary-amber}"
  button-pill:
    backgroundColor: "rgba(255, 255, 255, 0.06)"
    textColor: "{colors.neutral-fg}"
    rounded: "{rounded.pill}"
    padding: "8px 20px"
  card-interactive:
    backgroundColor: "rgba(255, 255, 255, 0.05)"
    textColor: "{colors.neutral-fg}"
    rounded: "{rounded.lg}"
    padding: "36px 36px 40px"
---

# Design System: Robert Youshock

## Overview

**Creative North Star: "The Broadcast Control Room"**

This system reflects the intersection of live broadcast motion design, computational data visualization, and generative AI tool-building. Rooted in real deadline-driven television graphics across 64 stations and custom internal pipelines at TEGNA, the visual language avoids decorative fluff in favor of high-density precision, live monitor previews, and kinetic tactile response.

The atmosphere operates on a deep, warm broadcast ink canvas (`#1F1D1D`) illuminated by sunset cathode luminescence (`#F6A23C` amber through `#E8481C` orange to `#B05BC8` violet). When switched to light mode (`#FAF7F4`), the surface retains its warm editorial weight with high-contrast type and subtle warm-toned borders. Transitions between themes bloom outward via a circular clipping view transition centered on the toggle button.

**Key Characteristics:**
- **On-Air Precision:** High-density factual grids, technical pipeline cards with internal confidentiality badges, and broadcast metadata tags.
- **Tactile Scrubbing:** Fine pointers scrub through animation frame sequences in real time with an amber timeline progress bar; mobile devices receive scroll-driven kinetic cycling.
- **Luminous Atmospheric Depth:** Soft radial glow backdrops, frosted borders (`rgba(255,255,255,0.16)`), and interactive card spotlights tracking the cursor.
- **Expressive Mechanical Typography:** Architectural display grotesque headers with tight leading paired with calm, legible Manrope body text.

---

## Colors

The palette draws its energy from broadcast sunset test patterns, linear gradient transitions, and deep editorial contrast.

### Primary
- **Broadcast Sunset Orange** (`#E8481C`): The core kinetic accelerator. Used for primary interactive CTAs, selection highlights, active states, and gradient midpoints.
- **Warm Amber** (`#F6A23C`): The warm glow signature. Used for timeline scrubber bars, focus rings, and gradient starting points.

### Secondary
- **Kinetic Pink** (`#F0668C`): The vibrant transition color connecting amber/orange to violet in the brand spectrum. Used in radial glow meshes and editorial highlights.

### Tertiary
- **Spectrum Violet** (`#B05BC8`): Deep atmospheric ballast. Used at the trailing edge of background gradients and interactive blob meshes.

### Neutral
- **Deep Broadcast Ink** (`#1F1D1D`): Dark mode page canvas and deep monitor chassis background.
- **Surface Container Ink** (`#292626`): Layered card backgrounds and secondary surfaces.
- **Warm Cream** (`#F5E7DF`): High-contrast foreground text (≥ 11:1 contrast ratio against `#1F1D1D`).
- **Muted Cream** (`rgba(245, 231, 223, 0.58)`): Secondary metadata, timestamps, and captions (≥ 4.5:1 contrast).
- **Frosted Border Line** (`rgba(245, 231, 223, 0.16)`): Subtle 1px structural framing.
- **Daylight Warm Paper** (`#FAF7F4`): Light mode canvas and background.

### Named Rules
**The Warm Spectrum Rule.** Linear and radial gradients always traverse the approved sunset sequence (`#F6A23C` → `#E8481C` → `#F0668C` → `#B05BC8`). Never introduce cool blues or synthetic greens into decorative atmospheres.

**The WCAG AA Contrast Rule.** All readable text must meet or exceed a 4.5:1 contrast ratio against its direct rendered backing in both dark and light modes. Muted text on colored surfaces must be tinted from that hue, never flat gray.

---

## Typography

**Display Font:** `Bricolage Grotesque` (fallbacks: `Outfit`, `sans-serif`)  
**Body Font:** `Manrope` (fallbacks: `sans-serif`)  
**Italic/Label Font:** `Hanken Grotesk` (fallbacks: `Manrope`, `sans-serif`)

**Character:** The pairing couples a punchy, mechanical, French grotesque display face with an exceptionally clear, modern geometric sans body. Display headings project broadcast authority; body copy remains effortless to read.

### Hierarchy
- **Display** (Bold 700, `clamp(64px, min(15.7vw, 27vh), 330px)`, line-height `0.92`, tracking `-0.04em`): Reserved for the hero title lockup and section markers.
- **Headline** (Bold 700, `clamp(34px, 3.47vw, 60px)`, line-height `1.0`, tracking `-0.04em`): Used for major project row headings, pipeline titles, and case study titles.
- **Title** (Medium 500, `clamp(22px, 2.2vw, 32px)`, line-height `1.2`, tracking `-0.02em`): Section headings, card titles, and modal headers.
- **Body** (Regular 400, `18px`, line-height `1.6`, tracking `normal`, measure `65–75ch`): Case study narratives, project descriptions, and toolkit copy.
- **Label** (Medium 500, `12.5px–14px`, line-height `1.0`, tracking `0.06em`, uppercase or sentence case): Badges, pipeline tech tags, eyebrow markers, and status indicators.

### Named Rules
**The Display Leading Rule.** Display headers carry tight leading (0.92 to 1.0) with negative tracking (-0.04em) to create solid typographic blocks. Body text must never drop below 1.5 leading.

**The No-Eyebrow Kicker Rule.** Never stack redundant small labels ("Case Study", "Challenge") immediately above a heading that states the same information. Let the typography and color styling carry the section hierarchy.

---

## Layout

The spatial model relies on a fluid grid bounded by a `1200px` content container with generous responsive edge padding (`--pad: clamp(20px, 5vw, 72px)`).

- **Navigation:** Floating top bar (`.nav`) with backdrop blur (`blur(16px)`). On scroll, it morphs into a compact stuck capsule pill (`.nav.stuck`) with an active scrollspy indicator (`.hl`).
- **Hero Lockup:** Full-bleed viewport height (`min-height: 100vh`) with central name and animated 3D vector lightning bolt, anchored by a bottom metadata cluster (`.hero-foot`) indicating role, availability, and location.
- **Project Rows (`.plist`):** Full-width interactive list. Hovering on any row dims sibling rows (`opacity: 0.3`) and summons the floating preview reel monitor (`.pv`).
- **Pipelines Grid (`.split`):** 2-column grid (`1fr 1fr`, collapsing to 1 column below `880px`) featuring large cards with cursor-following radial spotlights.
- **Playground Grid (`.pgrid`):** 2-column grid displaying live interactive web tools and apps.

---

## Elevation & Depth

The system uses an **Atmospheric & Luminous** depth model rather than structural drop-shadow cards. Surfaces exist on the dark canvas as tonal shifts and subtle frosted boundaries.

### Shadow Vocabulary
- **Floating Monitor Elevation** (`box-shadow: 0 30px 80px rgba(0,0,0,.5)`): Applied to the floating broadcast preview container (`.pv-in`) to detach it cleanly from the background content.
- **Card Spotlight Glow** (`radial-gradient(closest-side, rgba(240,102,140,.22), rgba(232,72,28,.1) 45%, transparent)`): Positioned behind interactive `.card` elements, tracking cursor movement via `--mx` and `--my` CSS custom properties.
- **Focus Ring Glow** (`outline: 2px solid var(--amber); outline-offset: 4px`): Clear accessible focus state on keyboard navigation.

### Named Rules
**The Flat-At-Rest Rule.** Card containers sit flat against the canvas at rest (`background: rgba(255,255,255,.05)`). Depth and illumination awaken only in response to pointer motion and hover states.

---

## Shapes

- **Pills and Capsules (`border-radius: 999px`):** The signature shape for all buttons, tags, metadata badges, and navigation links.
- **Broadcast Monitors (`border-radius: 18px`):** The aspect-ratio preview frame housing motion stills, featuring hidden overflow and subtle corner radius.
- **Content Cards (`border-radius: 24px`):** Used for pipeline cards, experience boxes, and playground feature blocks.
- **Frosted Borders (`border: 1px solid var(--line)`):** Delicate semi-transparent borders separating cards and pills from the background.

---

## Components

### Buttons & Pills (`.pill`)
- **Shape:** Full pill (`border-radius: 999px`).
- **Primary / Fill:** `background: var(--cream); color: var(--ink)` in dark mode (inverts to dark on light). On hover, scales slightly (`transform: scale(1.02)`) with subtle amber tint.
- **Outline / Ghost:** `border: 1px solid var(--line); background: rgba(255,255,255,.06); color: var(--cream)`.
- **Magnetic Physics:** On desktop fine pointers, pills follow the cursor with spring translation (`.tx`, `.ty`).

### Project Preview Reel (`.pv`)
- **Shape:** 16:9 monitor container with `border-radius: 18px`, fixed position tracking the cursor (`will-change: transform`).
- **Scrubber Bar (`.pv-bar`):** 2px frosted timeline track at bottom of `.pv-in` with dynamic gradient fill (`linear-gradient(90deg, var(--amber), var(--orange))`).
- **Broadcast Timecode HUD (`.pv-hud`):** Live SMPTE timecode counter (`.pv-tc`, e.g. `TC 00:00:03:14`) with flashing recording beacon (`.pv-rec`) and amber interaction affordance pill (`.pv-hint: ⇄ scrub timeline`).
- **Interaction:** Horizontal cursor movement across any project row (`.prow`) directly scrubs through animation frame stills. Pauses auto-cycle during active scrub; resumes automatically after 1.2s idle.

### Pipeline Cards (`.card`)
- **Structure:** Distinctive cards with category badge (`.badge`), large lower-case display header, descriptive paragraph, and tech tags (`.card-tech span`).
- **Spotlight:** Dynamic cursor-following radial gradient mask.

### Theme Toggle (`#theme-toggle`)
- **Interaction:** Toggles `data-theme="dark"` / `data-theme="light"`.
- **Motion:** On browsers supporting `document.startViewTransition`, triggers a circular expansion mask (`clip-path: circle(...)`) radiating outward from the clicked button.

---

## Do's and Don'ts

### Do:
- **Do** maintain a minimum of 4.5:1 text contrast for body and 3:1 for large display titles across both dark and light modes.
- **Do** wrap interactive tags, badges, and buttons in full pill shapes (`border-radius: 999px`).
- **Do** honor `prefers-reduced-motion: reduce` by suppressing automated frame loops, cursor tilts, and view transitions.
- **Do** provide descriptive, accessible alt text and keyboard accessibility (`tabindex="0"`, focus rings) for all interactive triggers.

### Don't:
- **Don't** use generic blue or un-tinted cool gray shadows on dark surfaces; depth must stay warm and grounded.
- **Don't** introduce multi-line gradient text that degrades readability on body copy or paragraphs.
- **Don't** hardcode raw px values for viewport padding; use responsive clamp scaling (`clamp(20px, 5vw, 72px)`).
- **Don't** use emojis or non-system glyphs in place of authored, clean SVG line icons.

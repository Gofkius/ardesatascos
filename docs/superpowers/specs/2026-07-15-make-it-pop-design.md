# "Make it pop" design pass — Ardesatascos

**Date:** 2026-07-15 · **Branch:** `design/pop-pass` · **Status:** approved by user

## Goal

The site reads as flat and empty. Keep the existing identity (hero composition, Jersey 15 pixel font, Services bento, Reviews marquee, Stats) and amplify it: a more engaging hero text block, consistent depth via drop shadows, and CSS hover interactivity.

## Explicitly kept

- Hero composition: text left, red panel with van + pipe PNGs right (client-approved).
- Jersey 15 as the display/pixel voice.
- Services bento layout and content; Reviews section; Stats section; Gallery structure.
- Inter as the body family.

## Changes

### 1. Hero text (more engaging, less flat)

- The h1 splits into two beats inside one heading:
  - Question — "¿El agua no traga y los olores no te dejan vivir?" — Inter at ~650 weight, fluid `clamp()` size (~26→38px), `text-wrap: balance`.
  - Punch — "Lo solucionamos ahora." — Jersey 15, brand red `#E60000`, larger (`clamp()` ~40→62px). Ties the pixel voice into the headline instead of leaving it a button quirk.
  - Both keep the word-by-word TextAnimate entrance (punch delayed).
- Sub-hook becomes a checklist chip row: "Disponible 24/7 · Presupuesto gratuito · Sin compromiso", each with a red "✓" (CSS `::before`), CSS fade-up entrance with `both` fill (content never gated on JS), disabled under `prefers-reduced-motion`.
- Requires removing the global `* { font-family: "Inter"; font-weight: 400 }` rule in `index.css` (the `margin: 0` reset stays). Side effect: explicit `font-weight: 300` headings (Services, Gallery, Rehook) now render true 300 via Inter Variable.

### 2. Depth — one shadow system

Tokens in `:root`:

- `--shadow-card: 0 1px 2px rgb(36 38 43 / 0.06), 0 8px 24px rgb(36 38 43 / 0.10)`
- `--shadow-card-hover: 0 2px 4px rgb(36 38 43 / 0.08), 0 16px 36px rgb(36 38 43 / 0.16)`
- `--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1)`

Applied to: the four bento service cards, review cards (1px border removed — no border+shadow ghost-card pairing), gallery track (upgrading its small shadow), hero red panel, CTA buttons (shadow on hover lift only).

### 3. Hover interactivity (CSS only, transform/shadow only)

- Bento cards: `translateY(-4px) scale(1.015)` + hover shadow, 0.25s ease-out-quart.
- Review cards: `scale(1.02)` + hover shadow (marquee already pauses on hover).
- Gallery arrows: `scale(1.08)` (preserving the `translateY(-50%)` centering); dots: `scale(1.15)` on hover when inactive.
- CTA buttons (hero + rehook): existing `translateY(-2px)` gains `scale(1.03)` + shadow.
- All hover transforms gated behind `@media (hover: hover)`; all transitions disabled under `prefers-reduced-motion: reduce`.

### 4. Hygiene (carried over from approved scope)

- Copy: "Escríbenos" (hero + rehook), rehook heading → "¿Listo para pedir tu presupuesto?". The old sub-hook sentence (with its missing "¡") is replaced by the chips.
- Unify hero panel `background-color: red` → `#E60000` (single brand red).
- Catch-all 404 route (`src/components/NotFound.tsx`): Spanish message, link home, call CTA.
- Review author color `#a4aec8` → `#5A6478` (≥4.5:1 on `#f1f4fa`).
- Star rating: container `role="img"` + `aria-label="N de 5 estrellas"`, icons `alt=""`.
- OG image: real van photo at `public/og-image.jpg` (1200×630), referenced from `index.html` (og:image + JSON-LD image), `twitter:card` → `summary_large_image`.
- Cookie banner `z-index: 9999` → `200` (navbar is 100).
- Remove dead code/assets: commented pipe/pj illustrations in Hero/Services (TSX + CSS) and unreferenced images (pj1, pj2, water-squirt, pipe-crack, pipe-head, pipe-body, green-pipe, logo-red). `metal-pipe.png` stays (used by Stats).
- Duplicate static `@fontsource/inter` import removed (Inter Variable stays); `font-family: 'Inter'` literal in ReviewCard.css removed (inherits).

## Out of scope

Blue+red van-livery token overhaul, font family changes, phone digits in nav/hero, mobile call bar, review attribution, coverage/arrival messaging, any restructuring of Stats/Reviews/Services.

## Verification

`pnpm lint` and `pnpm build` (tsc + client build + SSR build + prerender) pass; manual visual check of hero, bento hover, reviews, gallery, 404 route.

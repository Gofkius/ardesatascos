---
target: homepage design (flat/empty complaint)
total_score: 23
p0_count: 2
p1_count: 2
timestamp: 2026-07-15T17-26-41Z
slug: src-components-homepage-tsx
---
Method: dual-agent (A: a4ff9b7e33aee8e50 · B: ad1355281f06cbda7)

# Impeccable Critique — Ardesatascos homepage (src/components/HomePage.tsx)

## Design Health Score — 23/40 (Acceptable: significant improvements needed)

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Gallery position feedback good; review marquee has no touch pause |
| 2 | Match System / Real World | 2 | Navbar "Contacto" is secretly a `tel:` link; "Camión cuba" jargon unexplained |
| 3 | User Control and Freedom | 3 | Marquee pause is hover-only (`Reviews.tsx:17`); carousel is excellent |
| 4 | Consistency and Standards | 2 | Two different reds (`red` vs `#E60000`); radii 12–45px with no scale; CTA block copy-pasted and drifting |
| 5 | Error Prevention | 3 | WhatsApp deep link pre-filled (good); desktop `tel:` click with no visible digits is a dead end |
| 6 | Recognition Rather Than Recall | 1 | Phone number never appears as readable digits above the footer (`Footer.tsx:44`) |
| 7 | Flexibility and Efficiency | 3 | Call + WhatsApp dual path repeated at hero, rehook, footer — good conversion plumbing |
| 8 | Aesthetic and Minimalist Design | 2 | Empty rather than restrained: pure-white body, flat hex slabs, one decorative keyword-`red` rectangle |
| 9 | Error Recovery | 2 | No catch-all route in `App.tsx:10–15` — mistyped URL renders a blank white page |
| 10 | Help and Documentation | 1 | No FAQ, coverage map, arrival-time promise, or price anchor |
| **Total** | | **23/40** | **Acceptable** |

## Anti-Patterns Verdict

Not instant "AI made this" — it reads as "default kit, never committed." No eyebrow kickers, no gradient text, no glassmorphism, and real imagery exists (liveried van photo, 11 genuine job photos). But:

- Untouched shadcn zero-chroma tokens (`src/index.css:13–44`); every real brand color is a scattered hex literal.
- `background-color: red` (CSS keyword) as the hero's signature visual (`src/styles/Hero.css:90`) — doesn't match the brand red `#E60000` (`Services.css:98`).
- Hero-metric template (absolute ban): big Jersey-15 96px numbers + labels on a dark slab (`Stats.tsx:11–13`, `Stats.css:30–35`).
- Over-rounding: 45px card radii (`Services.css:22`, `Gallery.css:34`, `Hero.css:91`) — ceiling is 12–16px.
- `z-index: 9999` (`CookieBanner.css:13`).
- ~150 lines of dead CSS + commented-out illustration corpses (`Hero.tsx:38–40`, `Services.tsx:4–13`).

Deterministic scan (4 warnings, exit 2): `overused-font` ×2 (`index.css:48` global `* { font-family: "Inter"; font-weight: 400 }`, plus redundant `ReviewCard.css:26` — one root cause), `layout-transition` (`Gallery.css:139`, width animation on pagination dot — real but low impact), `side-tab` (`LegalPage.css:77`, 4px lime left border). No false positives. Detector and design review agree on the global-Inter problem; the detector cannot see the banned stat-slab, keyword red, or grayscale tokens, which the review caught. Browser visualization skipped: no browser automation available this session.

## Overall Impression

The conversion skeleton of a good emergency-services page exists; the visual layer is all defaults. The user's complaint ("empty, flat, background has nothing") is exactly right, and all three symptoms share one cause: defaults where decisions should be. The brand's strongest asset — a real blue-and-red liveried van with the phone number painted on it — ships in the repo and goes unused behind a flat red rectangle.

## What's Working

1. Conversion plumbing: `tel:` + pre-filled WhatsApp everywhere, sticky navbar call button, repeat CTA before footer.
2. `Gallery.tsx` is craft: blurred letterbox backdrops, scroll-snap, reduced-motion in JS and CSS, proper ARIA, lazy loading — and it carries real proof-of-work photos.
3. Authentic hero asset: `truck.png` is the actual van with the real number painted on it.

## Priority Issues

- **[P0] No color strategy** — tokens are 100% grayscale; real palette is incoherent hex literals (two reds, acid green `#90EF54` that appears nowhere on the van). Fix: define tokens from the van livery (deep blue + brand red), pick a Committed strategy, tint section backgrounds toward the brand hue, kill keyword `red` and dead `.dark`/sidebar/chart tokens. → `$impeccable colorize`
- **[P0] Typography has no voice or hierarchy** — `* { font-family: "Inter"; font-weight: 400 }` flattens everything; Jersey 15 pixel-arcade font on call CTAs/stats reads as a joke at the trust moment; Inter loaded twice. Fix: delete the `*` rule, choose a condensed grotesque display family at 700–900 with fluid clamp() scale, retire Jersey 15. → `$impeccable typeset`
- **[P1] Hero is a flat rectangle + floating PNG; site background is untreated pure white** — magic-number absolute positioning re-tuned per breakpoint; sections separated only by white air. Fix: image-led hero (van/crew photo, dark-blue scrim, headline over it); alternate section surfaces for scroll rhythm. → `$impeccable bolder` / `layout`
- **[P1] Phone number invisible until the footer** — every CTA says "Llámanos" without digits; desktop click is a dead end. Fix: digits in navbar + hero CTA; consider fixed bottom call bar on mobile (thumb zone currently taken by the cookie banner). → `$impeccable clarify` / `harden`
- **[P2] Trust layer weakest at the decision moment** — anonymous unattributed 5-star reviews, banned stat slab as sole credibility, no coverage/arrival-time/price anchor, `reformasypinturas@outlook.com` as contact email. → `$impeccable clarify`
- **[P2] Spanish copy errors on primary CTAs** — "Escribenos" → "Escríbenos" (`Hero.tsx:32`, `Rehook.tsx:22`); missing "¡" (`Hero.tsx:23`); "¿Preparado a pedir un presupuesto?" is ungrammatical (`Rehook.tsx:13`). → `$impeccable clarify`

## Persona Red Flags

**Casey (distracted mobile user — THE persona):** sticky call button is 110×32px (under 44px minimum) at the top, hardest one-handed zone; cookie banner claims the thumb zone 800ms in; can't pause the review marquee by touch; can't read the number anywhere above the footer.

**Jordan (first-timer):** "Contacto" nav item launches a phone call; no coverage info ("Tenerife" only in gallery subtitle and `<title>`); "Camión cuba" jargon; no 404 route → blank white page.

**Riley (stress tester):** "Inicio" click on `/` does nothing; desktop `tel:` silent failure; every heading gated behind `TextAnimate` in-view animation — h1 and service h2s risk shipping invisible if hydration/motion fails. Gallery is the only component that survives Riley.

## Minor Observations

- `review-author` `#a4aec8` on `#f1f4fa` ≈ 2:1 contrast — fails AA badly.
- `alt="star"` ×5 on rating images; gallery alts derive from filenames ("04 localizacioncama").
- `repeat={6}` × 6 reviews = 36 card copies in the marquee DOM.
- Hero mixes `height: 65svh` with `padding: 150px`; fixed pixel widths (`.hook{width:409px}`) instead of fluid clamp().
- OG image is the 512px favicon — WhatsApp shares (their #1 channel) render a tiny logo instead of the van.
- 10 of 11 gallery photos are near-duplicates of one leak-detection job.

## Questions to Consider

1. The customer's first physical touchpoint is a blue-and-red van — why is the website black, acid-green, and two mismatched reds?
2. If the archetypal visitor is standing in 2cm of water at 2am, what on this page exists for them? Why does the cookie banner get the thumb zone instead of the phone number?
3. What is Jersey 15 the costume for? If the answer is "it just happened," that's the story of the whole visual layer.

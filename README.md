# Teslan Design System

**Teslan** — _Servicios · Telecomunicaciones · Seguridad_

A Chilean telecommunications, networking, and security-infrastructure company serving the mining, industrial, and municipal sectors of northern Chile (Antofagasta, Iquique, Tocopilla, Calama, Arica). Teslan deploys physical infrastructure and technical teams on-site: towers, fiber-optic cabling, CCTV systems, point-to-point wireless links, and multi-site connectivity.

This design system captures the brand's visual language and component vocabulary so any designer or AI agent can produce on-brand material — web pages, proposals, slides, UI — without guessing.

---

## 📦 Sources given

| Source | What it is | Path |
|---|---|---|
| Logo | Primary brand mark (Teslan wordmark + descriptor) | `uploads/LOGO TESLAN 2.png` → `assets/logo-teslan.png` |
| Site mockup | Full-page homepage mockup (the single source of truth for layout, palette, copy tone, section composition) | `teslan web/maqueta 2 teslan.png` → `assets/reference-maqueta.png` |
| Photo library | ~46 field photographs: towers, CCTV cams (Dahua), fiber work, network racks, speaker arrays, terrain, technicians | `teslan web/fotos WEB/` → a curated subset lives in `assets/photo-*.jpg` |

No codebase, Figma, or slide deck was provided. Everything below is derived from the mockup + photo set.

---

## 🏢 What Teslan does

Teslan offers four service pillars (as named on the mockup):

1. **Infraestructura y montaje** — towers, structures, posts, cabinets, pipework.
2. **Cableado y fiber óptica** — structured cabling, backbones, fusions, terminations.
3. **CCTV y seguridad en recintos** — cameras, NVR, perimeter surveillance for critical sites.
4. **Enlaces y despliegue multi-sitio** — point-to-point / multipoint wireless links between facilities.

Coverage is explicitly **"norte de Chile"** — the mockup highlights Arica, Iquique, Tocopilla, Calama, Antofagasta on a map graphic.

---

## ✍️ CONTENT FUNDAMENTALS

### Language
All copy is **Chilean Spanish**, professional register. No English mixing. Technical vocabulary is used accurately (enlaces inalámbricos, backbone, fusiones, NVR) without over-explaining.

### Voice & tone
- **Operational, concrete, results-first.** Copy talks about _what gets installed_ and _where_, not abstract "solutions." Ex: _"Montaje de torres, estructuras, soportes, gabinetes y canalización."_
- **Direct address using _tú_ (informal-you), sparingly.** CTAs use it: _"¿Necesitas ejecutar un proyecto en terreno o conectar múltiples ubicaciones?"_. Body copy is largely impersonal/third-person ("Teslan desarrolla soluciones…").
- **Territorial pride.** The north of Chile is named explicitly and often — it's a credential, not a limitation.
- **No marketing superlatives.** Avoids "líderes," "#1," "revolucionario." Instead: _"Experiencia en proyectos de infraestructura y despliegue técnico."_

### Casing
- **Sentence case** for body copy and most headings.
- **Title Case** only in nav items and brand/product names.
- Acronyms (CCTV, NVR, WiFi) are uppercase.
- No ALL-CAPS except small micro-labels (footer headers, eyebrow text).

### Pronouns
- Section intros use **nosotros / Teslan**: _"Teslan aborda proyectos que combinan…"_
- CTAs use **tú**: _"¿Necesitas…?"_, _"Solicita…"_
- Never **usted** — it's too formal for the brand.

### Emoji & punctuation
- **No emoji** in production copy. (The WhatsApp button uses the WhatsApp _glyph_, not an emoji.)
- `¿ ?` and `¡ !` are used correctly (Spanish rules).
- Hyphens separate services in the tagline: _"SERVICIOS - TELECOMUNICACIONES - SEGURIDAD"_.

### Representative copy samples
> **Hero:** Infraestructura y **despliegue técnico** para proyectos en terreno
>
> **Subhead:** Teslan desarrolla soluciones de infraestructura física, conectividad y seguridad para plantas, recintos, bodegas, faenas y sitios remotos del norte de Chile. Ejecutamos proyectos de montaje, torres, cableado estructurado, CCTV y enlaces multi-sitio.
>
> **CTA primary:** Solicitar evaluación técnica
> **CTA secondary:** Ver servicios
> **CTA tertiary (footer):** Hablar por WhatsApp

### Vibe
Reliable, technical, grounded. **Not** futuristic, not playful, not consumerish. Think _"the team the mine calls when the tower goes down,"_ not _"SaaS dashboard."_

---

## 🎨 VISUAL FOUNDATIONS

### Color
- **Brand blue gradient** is the signature: deep navy (`#0A2A6B`) → electric blue (`#1B52C2`) → cyan (`#2BC4D9`). Drawn straight from the wordmark. Used on hero washes, map graphics, section dividers, outline strokes.
- **Operational orange** (`#E87824`) is the CTA color — primary buttons, key action pills. Used sparingly, never for decoration.
- **WhatsApp green** (`#1FA855`) appears as the fixed "Hablar por WhatsApp" button, respecting WhatsApp's brand.
- **Neutrals** are a cool grey scale — page backgrounds are near-white (`#F7F9FC`), body text a deep slate (`#1B2130`).
- **Dark sections** use `#0F1320` overlaid with the brand gradient at ~85% opacity so night-time tower photography reads through.

### Type
- Sans-serif throughout. Headlines are heavy (700–800), tight leading, slightly negative tracking.
- **Gradient text** treatment on key hero words ("despliegue técnico", "norte de Chile", "múltiples ubicaciones") — the same blue-to-cyan gradient from the logo, clipped to text.
- Body at 16px / 1.6 line-height, secondary grey.

### Backgrounds
- **Full-bleed photography** under hero and section breakers. Photos are field-shot, documentary style — technicians in hardhats, towers against desert sky, CCTV cameras on steel poles.
- **Dark navy washes** over photos via the brand gradient at low alpha to hold contrast for white type.
- **Solid off-white** (`#F7F9FC`) for content sections; alternating with **deep navy** sections for rhythm.
- **No textures, no noise, no hand-drawn patterns, no illustrations.** This is a photography-first brand.
- A subtle **map/constellation motif** appears in the "Capacidad de despliegue" section — thin cyan lines connecting city dots across a dark map. Reuse carefully.

### Imagery color vibe
- **Do not publish the raw field photos** — they show identifiable client work and equipment. The photo library (`teslan web/fotos WEB/`) is **reference only**, used to understand _what_ Teslan does and _how_ it's shot.
- For published imagery, use one of two treatments:
  1. **Branded abstract tiles** — gradient backgrounds in the Teslan palette (navy → blue → cyan), optionally overlaid with a subtle grid/network pattern, with a white monoline Lucide icon centered. This is what the Photography card demonstrates and what should appear on the live site until approved photography is delivered.
  2. **Stock or commissioned photography** — field-shot, documentary style, warm-cool mixed (golden-hour desert tones, industrial greys, saturated sky blues), no heavy grading, no black-and-white, no heavy grain. Realistic, high-contrast, slightly cool overall. Must not depict identifiable client sites.
- When in doubt, prefer the abstract tile over a photo of unclear rights.

### Animation
- **Minimal.** Fades (200–300ms) on image swaps. Hover states on buttons (see below). No bouncy springs, no scroll-hijacking, no parallax.
- Easing: `cubic-bezier(0.2, 0.6, 0.2, 1)` (standard) or `cubic-bezier(0.16, 1, 0.3, 1)` (emphasis).

### Hover states
- **Primary orange button:** darkens ~8% + shadow lifts.
- **Secondary/outline button:** fills with brand blue, text goes white.
- **Links:** underline appears, color shifts one step darker.
- **Cards:** shadow lift from `sh-sm` → `sh-md`, no translate, no scale (keeps layouts calm).

### Press states
- Primary buttons: ~96% scale on active, 0ms duration.
- No color change on press — the scale is the feedback.

### Borders
- 1px, `--border` (`#DDE3EC`) on light; `rgba(255,255,255,0.14)` on dark.
- Cards use border OR shadow, never both.

### Shadows
- Five-step scale (`xs/sm/md/lg/brand/cta`). Shadows are soft, neutral (not colored) except:
  - `--sh-brand`: colored blue, used on elevated brand surfaces.
  - `--sh-cta`: colored orange, used on primary CTAs at rest.

### Corner radii
- **Cards & inputs:** 14px (`--r-lg`)
- **Buttons:** 10px standard, 999px pill-style for hero CTAs
- **Hero imagery blocks:** 20px (`--r-xl`)
- Avatars / logo chips: fully round.

### Cards
- White fill, 1px border OR soft shadow (`sh-sm`). 14px radius. 24px inner padding. Icon top-left (24–28px), title, one short description line.
- "Feature cards" under the hero: dark navy fill, orange/cyan icon, white type — short (1-line) labels only.

### Capsules / pills / chips
- Pill shape (`--r-pill`), used for:
  - Hero CTAs (oversized)
  - "Más información" links inside cards
  - Filter chips (not present in mockup but specified for future use)

### Transparency & blur
- Used **only** in hero overlays (navy gradient over photo) and the sticky WhatsApp bubble (minor drop shadow).
- **No frosted-glass / backdrop-blur UI.** Keep it crisp and photographic.

### Layout
- 1200px max content width, 24px gutter.
- Sections alternate white / off-white / deep-navy for rhythm.
- Hero is full-bleed photo; content sections are centered, ~80px vertical padding.
- Mobile: single column, CTAs become full-width, WhatsApp bubble stays fixed bottom-right.

### Fixed / floating elements
- Sticky header with centered nav + right-side CTA cluster (orange "Solicitar evaluación" + green WhatsApp).
- Floating WhatsApp button bottom-right on mobile and desktop.

---

## 🔣 ICONOGRAPHY

Teslan's mockup shows **monoline, single-weight, slightly-rounded SVG icons** for service pillars (coverage pin, document, network-node, hardhat-worker). Stroke ~1.5px, corner-rounded terminals. Currently using blue (`--teslan-blue-700`) for the service cards and orange for emphasis inside dark hero feature cards.

### What we substitute
No custom icon pack was delivered. We use **[Lucide](https://lucide.dev)** via CDN — its stroke weight, joinery, and slight rounding match the mockup's vocabulary best. Flagged substitution: confirm or deliver a custom icon set before final handoff.

Example Lucide mapping:
| Service pillar | Lucide icon |
|---|---|
| Cobertura / norte de Chile | `map-pin` |
| Infraestructura física / cableado | `file-text` or `cable` |
| Proyectos multi-sitio | `share-2` or `network` |
| Ejecución en terreno | `hard-hat` |
| CCTV y seguridad | `video` or `cctv` |
| Enlaces y despliegue | `radio` or `wifi` |
| Fibra óptica | `cable` |

### Loading Lucide
```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<script>lucide.createIcons();</script>
```
Or inline: `<i data-lucide="map-pin"></i>`.

### Emoji / unicode
**Not used.** The only glyph treated as "decorative" is the official **WhatsApp** mark on its green button (use the real SVG, not an emoji).

### Photography as "icon"
When a service is illustrated at larger sizes, Teslan prefers a **cropped photograph** over an icon (see the "Servicios principales" row in the mockup — tower close-up, fiber bundle, CCTV camera, antenna dish). Use photos when the tile is ≥160px tall; fall back to Lucide icons below that.

---

## 🗂️ Index — what's in this folder

| File / folder | Purpose |
|---|---|
| `README.md` | This document |
| `SKILL.md` | Agent Skill front-matter for Claude Code compatibility |
| `colors_and_type.css` | All design tokens — CSS custom properties + semantic element styles |
| `assets/` | Logo, photos, reference mockup |
| `preview/` | Small HTML cards that populate the Design System tab (one card per token family / component state) |
| `ui_kits/web/` | Hi-fi recreation of the Teslan marketing homepage with modular JSX components |

---

## ⚠️ Known caveats

- **Font substitution.** The mockup uses a humanist sans that looks like a licensed family (possibly Source Sans Pro or a custom cut). We've substituted **Inter** across the system until the real face is delivered.
- **Icon substitution.** Lucide is the best on-the-shelf match; confirm or supply a bespoke pack.
- **Only one mockup.** All layout / spacing / palette decisions are extrapolated from a single homepage mockup. Interior pages, forms, and CRM/client-portal UI (if they exist) are unknown.
- **No codebase.** Components are recreated from visual reference, not extracted from production React.

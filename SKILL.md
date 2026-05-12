---
name: elaine-narcizo-ponte-design
description: Use this skill to generate well-branded interfaces and assets for Elaine Narcizo's PONTE methodology — a Brazilian Portuguese life-project workshop. Use it for production prototypes, throwaway mocks, slides, documents, or any visual artifact that should feel warm, contemplative, hand-made, and rooted in the PONTE pedagogy (Presente · Futuro · Ponte). Contains essential design guidelines, colors, type, fonts, assets, and a UI kit recreation of the guided workshop experience.
user-invocable: true
---

# Elaine Narcizo — PONTE Design System

Read `README.md` at the root of this skill first; it contains the brand context, content fundamentals (voice & tone in PT-BR), visual foundations (colors, type, motion, spacing), and iconography rules.

## Key files

- `README.md` — full guidelines.
- `colors_and_type.css` — drop into any HTML to get the full token system.
- `content/ponte-text.md` — the full PT-BR workshop text by Elaine. Treat as source of truth for tone, vocabulary, and the three-stage architecture.
- `assets/` — texture backgrounds (the three "Fundo" images), logo wordmark, and brand illustrations.
- `preview/` — cards demonstrating the design system pieces in isolation (colors, type, components).
- `ui_kits/ponte/` — interactive HTML recreation of the guided workshop. `index.html` is the entry; supporting JSX modules live alongside.

## When invoked

- If the user asks for a **visual artifact** (slide, mock, throwaway prototype, landing page, certificate, social card): create a self-contained HTML file at the project root or in a sensible subfolder. Copy needed assets out of this skill into the working project — do not reference them by skill-relative paths. Apply `colors_and_type.css` and pick a single theme (`verde` / `laranja` / `amarelo`) for the artifact.
- If the user asks for **production code**: read the rules in `README.md` and emit framework-agnostic HTML + the CSS tokens. The brand is explicitly _no heavy frameworks, no jQuery, pure CSS effects_.
- If the user invokes the skill without other guidance: greet warmly in **Portuguese (Brazilian)**, ask what they want to build, and ask 3–5 clarifying questions in PT-BR (audience, format, stage of PONTE involved, length, output medium). Then act as an expert designer working in the Elaine Narcizo visual language.

## Non-negotiables

- **Portuguese (PT-BR) by default.** All copy and microcopy. Translate only if explicitly asked.
- **Address the reader in the feminine, second person.** ("Você", "satisfeita", "preparada".)
- **No emoji. No decorative unicode.**
- **No gradient backgrounds** (purple-to-blue, peach-to-pink). The brand texture is grainy/risograph, not glossy.
- **No more than one color pair per surface** (verde+creme _or_ laranja+rosa _or_ amarelo+lilás). Never mix pairs.
- **Generous spacing.** The system breathes; do not collapse vertical rhythm to fit more content.
- **No "Inter", no "Fraunces", no system-font fallback as primary.** Use `Newsreader` (display), `DM Sans` (body), `Caveat` (hand accent) as defined in the CSS tokens.
- **Hand letterforms / textures are decorative pano-de-fundo, never small ornaments.** Use them full-bleed or not at all.

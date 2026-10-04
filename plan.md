# Ameya Raut Portfolio — Implementation Plan

## Product intent
A premium, original light-theme personal portfolio for Ameya Raut that bridges mechanical engineering and data science. The experience should feel like an editorial creative agency site: bright, airy, precise, and cinematic without visual noise.

## Design direction
- **Design movement:** Editorial Swiss modernism fused with premium product-launch minimalism.
- **Core principles:** (1) engineered whitespace and alignment, (2) high-contrast editorial type, (3) tactile cobalt accents, (4) motion that clarifies hierarchy rather than decorates it.
- **Color philosophy:** Pearl #FAFAFA gives the page an open laboratory-like calm; pure white cards create a clean workbench surface; deep charcoal #111111 makes the technical copy authoritative; slate #555555 keeps supporting text readable; cobalt #2563EB signals action, intelligence, and precision.
- **Layout paradigm:** A left-anchored, asymmetrical editorial flow with oversized section numbers, offset cards, and narrow reading columns rather than a centered dashboard grid.
- **Signature elements:** cobalt route-marker lines, oversized outlined numerals, and white glass cards with surgical blue edge highlights.
- **Interaction philosophy:** Physical-feeling interactions: hover lifts are small and controlled, cursor attraction is subtle, and reveals move like measured camera focus.
- **Animation:** Hero copy reveals character-by-character; the abstract background uses slow Ken Burns scale and blur-to-focus; sections enter with staggered upward fades; project media subtly drifts on hover; motion respects prefers-reduced-motion and touch devices.
- **Typography system:** Space Grotesk for display and UI, Inter for body copy. H1 is clamp(4rem, 11vw, 10rem), section heads are compact bold editorial statements, metadata is uppercase with tracked spacing.
- **Brand essence:** A mechanical-minded builder translating physical systems into data-driven intelligence. Personality: precise, curious, composed.
- **Brand voice:** Direct, technically fluent, quietly ambitious. Example lines: “I make complex systems legible.” / “Let's build something complex together.”
- **Wordmark & logo:** A compact “AR” monogram built from two cobalt route strokes and a small terminal dot, paired with the Ameya Raut wordmark.
- **Signature brand color:** Precision Cobalt #2563EB.

## Implementation approach
- Use a Next.js App Router shell with TypeScript and Tailwind CSS, with a small custom CSS layer for the editorial grid, video-like visual treatment, and cursor details.
- Keep the page as a semantic single route with section anchors: home, about, skills, projects, contact. Use `framer-motion` for scroll/entrance gestures and a lightweight custom magnetic-button hook.
- Use a self-contained abstract canvas-style “video” treatment made from layered gradients and a muted looping `<video>` hook with a graceful fallback, keeping media lazy and non-blocking.
- Keep all project and skill content in typed constants so the exact supplied copy remains auditable and easy to update.
- Serve `public/manus-routes.json` for the root route and `app.config.ts` for project logo metadata.

## Project structure
- `app/layout.tsx` — global metadata, font loading, viewport, page shell.
- `app/page.tsx` — semantic portfolio composition and Framer Motion interactions.
- `app/globals.css` — Tailwind layers, color tokens, responsive layout, custom animations, reduced-motion rules.
- `public/manus-routes.json` — route manifest for the single-page home route.
- `public/logo.svg` — compact AR monogram used by the site and platform metadata.
- `app.config.ts` — project logo metadata literal.
- `package.json`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`, `next-env.d.ts` — toolchain configuration.

## Responsive behavior
Desktop keeps the split editorial hero and two-column project cards; tablet narrows the type scale and stacks secondary rails; mobile collapses navigation, removes custom cursor behavior, preserves touch-safe buttons, and turns project media into full-width cards.

## Performance and accessibility
Use system fallback fonts behind Google font imports, avoid heavy dependencies beyond Framer Motion, lazy-load project media, add descriptive labels and focus-visible states, use semantic landmarks, provide reduced-motion CSS and Framer Motion guards, and keep decorative layers `aria-hidden`.

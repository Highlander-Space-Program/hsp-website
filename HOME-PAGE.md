# Home page

The implementation follows the four home-page reference screenshots supplied in chat, using the local `HSP-Website-Information` photos and decorative assets. The screenshots take precedence over the earlier JSON export where their layout or dates differ.

## File guide

| File                                    | Responsibility                                                                |
| --------------------------------------- | ----------------------------------------------------------------------------- |
| `src/app/page.tsx`                      | Composes the sections in reference order                                      |
| `src/app/layout.tsx`                    | Site metadata and inherited Arial font                                        |
| `src/app/globals.css`                   | Tailwind import and shared palette, font, and sizing theme tokens             |
| `src/data/home.ts`                      | Project copy, team data, gallery order, sponsor names, and configurable links |
| `src/components/layout/SiteHeader.tsx`  | HSP wordmark, six navigation destinations, mobile toggle                      |
| `src/components/layout/SiteFooter.tsx`  | Logo, action buttons, address, and social placeholders                        |
| `src/components/home/HomeHero.tsx`      | Full launch photograph and corner branding                                    |
| `src/components/home/HomeAbout.tsx`     | Introduction, founding year, Discord placeholder, and tabling photo           |
| `src/components/home/HomeProjects.tsx`  | Poseidon, Clementine, and Tangerine photo/copy rows                           |
| `src/components/home/HomeTeams.tsx`     | Five photo cards and recruitment gallery                                      |
| `src/components/home/HomeOutreach.tsx`  | Named-grid-area outreach collage                                              |
| `src/components/home/HomeEvents.tsx`    | Three event cards and Discord update placeholder                              |
| `src/components/home/HomeSponsors.tsx`  | Six sponsor logo placeholders and test-stand photo                            |
| `src/components/home/CommunityLink.tsx` | Shared handling of real links and unavailable destinations                    |
| `public/images/ASSET-SOURCES.md`        | Mapping for added reference-matching assets                                   |

## Design choices

The page fills the viewport at every width, including monitors wider than the original 1512px design. Typography remains bounded for readability. Navigation collapses at 950px; tablet teams use three columns, phone teams use two, and small phones below 400px use one. Outreach and event layouts also reflow instead of forcing horizontal scrolling. The hero is full-width with a responsive aspect ratio and a maximum height equal to the viewport below the header. Bottom-aligned cropping keeps the orange visible without forcing a tall mobile crop or a minimum viewport height. Project and team arrows are decorative until detail-page destinations exist. Header navigation uses separate routes: `/`, `/projects`, `/teams`, `/join`, `/donate`, and `/contact`. The five new pages are under-development placeholders with shared header and footer navigation.

Arial is a system font rather than a Google Fonts family. `--font-arial` uses Arial with Helvetica and sans-serif fallbacks. All palette values remain in the Tailwind `@theme` in `globals.css`. Layout, typography, responsive states, decorations, and accessibility styles use Tailwind utilities directly in the components. There is no component stylesheet or styles folder. The events mascot uses `-scale-x-100` to mirror the image horizontally.

The BCOE Match Challenge feature sits directly below About, using `HomeFundraiser.tsx`, the supplied launch preparation photo, and the copy from the latest screenshot. Its November 7 matching deadline is distinct from the November 9 event end date. About and Teams use the supplied white contour assets, and Discord links use a shared Discord SVG icon.

## Known placeholders and differences

- Set the `communityLinks` values in `src/data/home.ts` to confirmed Discord, application, donation, Instagram, LinkedIn, and email destinations. Missing links expose `aria-disabled` and a coming-soon label rather than navigating to fabricated URLs.
- Six sponsor names follow the reference; their actual logo artwork was not supplied. The visual slots explicitly say “Logo placeholder.”
- The fundraiser artwork was not supplied, so its card contains a labeled artwork placeholder.
- The exact Structures photo shown in the reference was not found among the supplied files. The card uses `Teams/IMG_1082.webp`, a supplied structures assembly photo.
- The event card now uses October 1–November 9, 2026, matching the latest visual reference. The earlier JSON description gave a different end date.
- Browser visual verification remains pending because the session has no connected browser. Do not treat successful build checks as pixel-level visual verification.

## Validation

Run `npm run check`, `npm run eslint`, `npx tsc --noEmit`, and `npm run build`. The Tailwind migration passes the production build, lint, formatting, and TypeScript checks. The site exports to `out/`. Review the page at desktop and mobile widths with `npm run dev`.

## Routes and loading

The shared site shell now lives in `src/app/layout.tsx`. `src/app/not-found.tsx` follows the supplied 404 copy and background design; static export generates `out/404.html` for the host to serve on unknown URLs. Configure the host to serve that document with a 404 status rather than rewrite missing paths to the home page.

`InitialPageLoad.tsx` renders an initial loading overlay in the HTML on every full visit or reload. After hydration, it waits for decoded images marked `data-initial-load` (header branding and home hero/branding) and fonts. It dismisses immediately when these settle, including image errors, and stops waiting after eight seconds. The native “Continue to site” disclosure can dismiss it even before hydration. JavaScript-disabled browsers do not show the overlay. Covered content is inert only while the hydrated loader is active, and scrolling is restored when it closes. No artificial minimum delay or first-visit storage is used, so cached visits can finish immediately. Lower-page images remain lazy-loaded. `src/app/loading.tsx` supplies a separate route-transition fallback when Next suspends navigation.

No loading-screen specification, named loading asset, or loading instructions were found in `HSP-Website-Information`. This loader uses the existing palette and a lightweight CSS spinner. It does not reduce image transfer sizes: the site still uses unoptimized static images, and the full-resolution hero is about 2.6 MB. Further image compression/responsive variants would improve actual download times.

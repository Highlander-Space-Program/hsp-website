# Additional reference-matching assets

Sourced from `HSP-Website-Information`. Website copies have been resized and compressed for delivery; originals in the information folder are unchanged.

- `home/poseidon-launch-team.webp`: `Home page/content_Tier2TileImage.webp`
- `home/clementine-engine-team.webp`: `Home page/igniter_group_1 (1).webp`
- `home/tangerine-launch-team.webp`: `Home page/IMG_1390.webp`
- `home/propulsion-test.webp`: `Home page/_DSC7809.webp`
- `home/structures-assembly.webp`: `Teams/IMG_1082.webp`
- `home/controls-electronics.webp`: `Home page/IMG_0791 (1).webp`
- `home/gse-hardware.webp`: `Home page/IMG_0421 (1).webp`
- `home/manufacturing-lathe.webp`: `Home page/IMG_0692.webp`
- `home/team-launch-day.webp`: `Home page/IMG_0973.webp`
- `home/team-meeting.webp`: `Home page/_DSC7756.webp`
- `home/team-workshop.webp`: `Home page/JRL02416.webp`
- `home/team-desert.webp`: `Home page/IMG_4805.webp`
- `home/outreach-demonstration.webp`: `Home page/IMG_1189.webp`
- `home/outreach-engine.webp`: `Home page/IMG_1207 (1).webp`
- `brand/hsp-wordmark-dark.png`: `Elements/HSP_darkpng.png`
- `brand/hsp-wordmark-light.png`: `Elements/HSP_light.png`
- `brand/hsp-orbit-light.png`: `Elements/hsplogo_light.png`
- `brand/scotty-resting.webp`: `Elements/Scotty_laying_down.webp`
- `brand/scotty-pushing.png`: `Elements/Scotty_push_1.png`
- `brand/team-topography.png`: `Elements/Riverside-County-1x-topolines.app (6).png`
- `home/events-pattern.png`: `Home page/Screenshot 2026-09-28 at 5.10.04 PM.png`
- `home/outreach-pattern-one.png`: `Home page/Screenshot 2026-09-28 at 5.11.07 PM.png`
- `home/outreach-pattern-two.png`: `Home page/Screenshot 2026-09-28 at 5.11.21 PM.png`
- `home/outreach-pattern-three.png`: `Home page/Screenshot 2026-09-28 at 5.11.34 PM.png`

- `home/bcoe-match-challenge.webp`: `Home page/IMG_3087.webp`
- `brand/about-topography-light.png`: `Elements/Riverside-County-1x-topolines.app (7).png` (white contour lines)
- `brand/team-topography-light.png`: `Elements/Riverside-County-1x-topolines.app (5).png` (white contour lines)

- `pages/not-found-pattern.webp`: `404 Page/culture-7-16x9 (20).png`, resized to 1600px wide and encoded as WebP for delivery.

## Teams page

Descriptions come from `JSON flies/team-structure.json`. The screenshot supplies the layout and the Operations heading. The Payload card intentionally has no photograph, matching the reference.

- `teams/workshop.webp`: `Teams/IMG_0228 (1).webp`
- `teams/airframe.webp`: `Teams/JRL02440.webp`
- `teams/recovery.webp`: `Teams/JRL02519.webp`
- `teams/combustion-devices.webp`: `Teams/_DSC2335.webp`
- `teams/fluid-systems.webp`: `Teams/_DSC8618.webp`
- `teams/firmware.webp`: `Teams/_DSC9207.webp`
- `teams/hardware.webp`: `Teams/_DSC9106.webp`
- `teams/data-acquisition.webp`: `Teams/IMG_0499.webp`
- `teams/gse-hardware.webp`: `Teams/_DSC8687.webp`
- `teams/manufacturing.webp`: `Teams/IMG_0788.webp`
- `teams/gallery-break.webp`: `Teams/IMG_0865 (2).webp`
- `teams/gallery-assembly.webp`: `Teams/IMG_1082.webp`
- `teams/gallery-rocket.webp`: `Teams/IMG_0288 (1).webp`
- `teams/gallery-launch.webp`: `Teams/JRL02431.webp`
- `teams/gallery-tower.webp`: `Teams/_DSC8644.webp`
- `teams/gallery-walk.webp`: `Teams/IMG_1338 (1).webp`
- `teams/gallery-campus.webp`: `Teams/IMG_1429 (1).webp`
- `teams/gallery-desert.webp`: `Teams/IMG_1129 (1).webp`
- `teams/badge-pattern.webp`: `Teams/culture-7-16x9 (6).webp`
- `teams/footer-pattern.webp`: `Teams/Screenshot 2026-09-28 at 4.27.08 PM.png`

## Image optimization (October 27, 2026)

All raster assets in `public/images` were evaluated for compression using Sharp.
Existing photographs were resized within 1600 × 1600 pixels (1920 for the home
hero) and encoded as WebP at quality 80. Brand artwork is capped at 760 pixels;
topography remains up to 1600 pixels. PNGs retain transparency and use optimized
palette encoding. A candidate replaces an existing asset only when it is smaller.
Existing paths are preserved so image references and the GitHub Pages export
continue to work.

New team photographs are WebP at quality 80, up to 1200 pixels wide; collage
photos are up to 800 pixels and the footer artwork is 1600 pixels. Below-the-fold
photos use Next Image's lazy loading, with explicit aspect ratios to reserve space.
The workshop hero is prioritized for the initial view.

- Existing images: 101,372,026 → 4,475,504 bytes (95.6% reduction).
- New team sources: 24,406,422 → 1,563,212 bytes (93.6% reduction).
- Total delivered image assets: 6,038,716 bytes (5.76 MiB).

These totals describe the asset folder, not a single page load. Re-export future
images from the source folder to avoid repeatedly compressing a lossy WebP.

## Donate page and shared sponsors (October 27, 2026)

Both home and donate render `src/data/sponsors.ts` through `SponsorLogos`.
The sponsor list follows the home page, as requested, rather than the companies
pictured in the donate reference. The supplied rocket photograph is retained as-is;
its historical sponsor decals are part of the photograph.

- `donate/sponsor-rocket.webp`: `Donate/JRL02415.JPG`, resized to 1920px wide, WebP quality 82.
- `donate/footer-pattern.webp`: `Donate/Screenshot 2026-09-28 at 4.27.08 PM.webp`, resized to 1600px wide, WebP quality 80.
- `sponsors/triad.webp`: [Triad Magnetics official logo](https://www.triadmagnetics.com/wp-content/uploads/logo-1-1.png).
- `sponsors/katforge.webp`: [KatForge official wordmark](https://katforge.com/brands/katforge/wordmark.png). HSP identifies KatForge Studios as a sponsor in its [public acknowledgement](https://www.linkedin.com/company/highlander-space-program).
- `sponsors/asucr.webp`: page 15 of the [official ASUCR logo pack](https://asucr.ucr.edu/sites/default/files/2021-03/ASUCR%20Logos_0.pdf), linked from [ASUCR's logo resources](https://asucr.ucr.edu/funding/organization/t-shirt). Rendered with Poppler; excess page whitespace trimmed. The blue/gold artwork is preserved on white.
- LabJack reuses the existing `home/sponsors` logo asset.
- `sponsors/parker-aerospace-transparent.webp`: background removal from the existing Parker Aerospace image using ImageGen, with light Aerospace lettering for the dark site. Resized to 1000px wide and compressed as WebP; the original remains available.
- `sponsors/asucr-gold.svg`: official gold variant from page 5 of the ASUCR logo pack, exported as vector paths with Poppler and a tightly framed viewBox. Used on both pages to avoid a white background.

Logos preserve their proportions and are served locally. The shared grid has no
background panels. Triad uses a white CSS treatment for legibility on charcoal;
ASUCR uses its official gold vector variant. On phones the grid uses
two columns and centers the fifth logo; headings and the package link wrap.

No downloadable HSP sponsorship package was found in the information folder or
public search. The page uses a clearly labeled email request to
`highlanderspaceprogram@gmail.com`, confirmed on [HSP's public donate page](https://hsp.ucrhighlanders.org/donate).
Set `sponsorshipPackageUrl` in `src/data/sponsors.ts` to a verified URL to switch
the link to “Download Sponsorship Package”. No benefits or donation tiers were
invented or copied from outdated pages.

The donate hero fills the page width with its original 1512/801 desktop aspect
ratio and no viewport height cap. Its mobile framing is preserved.

// Shared by the home and donate pages. Asset provenance is in ASSET-SOURCES.md.
export const sponsors = [
  { name: "LabJack", image: "/images/home/sponsors/labjack.webp" },
  {
    name: "Parker Aerospace",
    image: "/images/sponsors/parker-aerospace-transparent.webp",
  },
  {
    name: "Associated Students of UCR",
    image: "/images/sponsors/asucr-gold.svg",
  },
  {
    name: "Triad Magnetics",
    image: "/images/sponsors/triad.webp",
    imageClassName: "brightness-0 invert",
  },
  { name: "KatForge", image: "/images/sponsors/katforge.webp" },
];

// No downloadable HSP package could be verified in the supplied files or online.
// Replace null with a confirmed public URL when a package becomes available.
export const sponsorshipPackageUrl: string | null = null;
export const sponsorshipContactUrl =
  "mailto:highlanderspaceprogram@gmail.com?subject=HSP%20Sponsorship%20Package";

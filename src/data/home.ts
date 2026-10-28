// Content follows the supplied home-page screenshots and Figma JSON export.
// Keep image choices, repeated copy, and future destinations out of the layout.
export const projects = [
  {
    name: "Poseidon",
    years: "2022 – 2025",
    subtitle: "UC Riverside’s first liquid propelled rocket.",
    description:
      "Developed between 2023 and 2025, Poseidon flew to a first-place finish in the A Category of 2025’s FAR-OUT Competition. Powered by Nitrous Oxide and Ethanol, Poseidon reached an apogee of 7,350 feet AGL.",
    image: "poseidon-launch-team.webp",
    alt: "Poseidon team at the desert launch site",
    awards: [
      "First Place — 2025 FAR-OUT Category A",
      "Most Efficient Liquid Engine — 2025 FAR-OUT",
    ],
  },
  {
    name: "Clementine",
    years: "2025 – 2027",
    subtitle: "Next gen engine performance, controls, and recovery systems.",
    description:
      "Clementine is a regeneratively cooled, Liquid Oxygen/Ethanol powered engine that represents the future of Highlander Space Program. Targeted for launch in 2027, Clementine is the most ambitious vehicle in HSP history.",
    image: "clementine-engine-team.webp",
    alt: "Clementine engine team gathered around their test hardware",
    awards: [],
  },
  {
    name: "Tangerine",
    years: "2026",
    subtitle: "Small scale test supporting Clementine development",
    description:
      "TANGERInE, or the Test Article for Next Generation Engine and Recovery INtegration Evaluation, is a subscale liquid fueled test article to evaluate various subsystems prior to integration on Clementine.",
    image: "tangerine-launch-team.webp",
    alt: "HSP team celebrating together beneath a bright desert sky",
    awards: [],
  },
];
export const teams = [
  {
    name: "Propulsion",
    image: "propulsion-test.webp",
    alt: "Student working on the propulsion test stand",
    description: "Responsible for lift off.",
    subteams: ["Combustion devices", "Fluids"],
  },
  {
    name: "Structures",
    image: "structures-assembly.webp",
    alt: "Students assembling rocket structures",
    description: "Keeping us in one piece.",
    subteams: ["Airframe", "Recovery", "Payload"],
  },
  {
    name: "Controls",
    image: "controls-electronics.webp",
    alt: "Wiring and electronics inside an orange equipment case",
    description: "Lines of wire & code to stay alive.",
    subteams: ["Firmware", "Hardware"],
  },
  {
    name: "GSE",
    image: "gse-hardware.webp",
    alt: "Student working on ground support electronics",
    description: "Support from a distance.",
    subteams: ["Data acquisition (DAQ)", "Hardware"],
  },
  {
    name: "Manufacturing",
    image: "manufacturing-lathe.webp",
    alt: "Student machining a part on a lathe",
    description: "From plans & prints to final parts.",
    subteams: [],
  },
];
export const teamGallery = [
  {
    image: "team-launch-day.webp",
    alt: "HSP members standing with their rocket at the launch site",
  },
  { image: "team-meeting.webp", alt: "Students attending a team meeting" },
  {
    image: "tangerine-team.webp",
    alt: "The team gathered at the test site after dark",
  },
  {
    image: "team-workshop.webp",
    alt: "Students collaborating in the workshop",
  },
  {
    image: "team-desert.webp",
    alt: "HSP members posing together in the desert",
  },
];
// Replace null with confirmed URLs. Never send visitors to invented destinations.
export const communityLinks: {
  discord: string | null;
  application: string | null;
  donate: string | null;
  instagram: string | null;
  linkedin: string | null;
  email: string | null;
} = {
  discord: "https://discord.gg/rEKQjmkCk",
  application:
    "https://docs.google.com/forms/d/e/1FAIpQLSdJpRq00YBMLYjbXwaeZkX5cVKSROaRFBn6U-BILDaN4LeJxQ/viewform?pli=1",
  donate:
    "https://www.givecampus.com/schools/UniversityofCaliforniaRiverside/bcoe-match-challenge-campaign-2026/pages/highlander-space-program-26",
  instagram: null,
  linkedin: null,
  email: null,
};

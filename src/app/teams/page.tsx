import type { Metadata } from "next";
import Image from "next/image";
import { teamGroups } from "@/data/teams";

export const metadata: Metadata = {
  title: "Teams | Highlander Space Program",
  description:
    "Meet HSP’s Structures, Propulsion, Controls, Ground Support Equipment, and Operations teams building student rockets at UC Riverside.",
};

const badges = [
  {
    name: "Propulsion",
    image: "propulsion",
    target: "propulsion",
    position: "top-[3%] left-[8%]",
  },
  {
    name: "Ground Support Equipment",
    image: "gse",
    target: "ground-support-equipment",
    position: "top-[3%] right-[8%]",
  },
  {
    name: "Operations",
    image: "manufacturing",
    target: "operations",
    position: "top-[32%] left-[39%]",
  },
  {
    name: "Controls",
    image: "controls",
    target: "controls",
    position: "bottom-[3%] left-[8%]",
  },
  {
    name: "Structures",
    image: "structures",
    target: "structures",
    position: "right-[8%] bottom-[3%]",
  },
];

const gallery = [
  {
    image: "break",
    alt: "HSP members working together outside the workshop.",
    position: "col-span-5",
  },
  {
    image: "assembly",
    alt: "Students assembling rocket components together.",
    position: "col-span-4",
  },
  {
    image: "rocket",
    alt: "Team members preparing the rocket on its launch rail.",
    position: "col-span-6",
  },
  {
    image: "launch",
    alt: "The team carrying a rocket at the launch site.",
    position: "col-span-5",
  },
  {
    image: "tower",
    alt: "HSP members gathered beside the launch tower.",
    position: "col-span-4",
  },
  {
    image: "walk",
    alt: "Team members heading out to the launch site.",
    position: "col-span-2",
  },
  {
    image: "campus",
    alt: "Students carrying a rocket across campus.",
    position: "col-span-4",
  },
  {
    image: "desert",
    alt: "The team taking a break in the shade in the desert.",
    position: "col-span-10",
  },
];

export default function Page() {
  return (
    <div>
      <section
        aria-labelledby="teams-title"
        className="relative isolate grid grid-cols-2 overflow-hidden max-sm:grid-cols-1"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[url('/images/brand/about-topography-light.webp')] bg-cover bg-center opacity-60"
        />
        <div className="min-h-[33vw] px-[5%] pt-[3%] max-sm:min-h-48 max-sm:px-5 max-sm:py-8">
          <h1
            id="teams-title"
            className="text-[clamp(48px,6.6vw,100px)] leading-none font-bold tracking-[-0.055em]"
          >
            TEAMS
          </h1>
          <p className="mt-[4%] text-[clamp(17px,2.3vw,35px)] leading-tight font-bold tracking-[-0.045em]">
            Meet the teams that make up HSP.
          </p>
        </div>
        <div className="relative aspect-[3/2]">
          <Image
            src="/images/teams/workshop.webp"
            alt="HSP members collaborating on rocket hardware in the workshop."
            fill
            priority
            data-initial-load
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <nav
          aria-label="Explore the teams"
          className="relative min-h-[29vw] bg-[url('/images/teams/badge-pattern.webp')] bg-cover bg-center max-sm:min-h-72"
        >
          {badges.map((badge) => (
            <a
              key={badge.target}
              href={`#${badge.target}`}
              aria-label={`Explore ${badge.name}`}
              className={`absolute aspect-square w-[23%] rounded-full transition-transform hover:scale-105 motion-reduce:transition-none ${badge.position}`}
            >
              <Image
                src={`/images/brand/${badge.image}-badge.webp`}
                alt={badge.name}
                fill
                sizes="(max-width: 640px) 23vw, 12vw"
                className="object-contain"
              />
            </a>
          ))}
        </nav>
        <div className="flex items-end px-[8%] pb-[5%] max-sm:px-5 max-sm:py-8">
          <p className="max-w-[590px] text-[clamp(20px,2.3vw,35px)] leading-[1.12] font-bold tracking-[-0.04em]">
            Rocketry is a team sport. Our teams design, build, integrate, and
            fly our vehicles.
          </p>
        </div>
      </section>

      <div
        aria-label="Life on the HSP team"
        className="max-sm:auto-rows-36 grid auto-rows-[15vw] grid-cols-20 max-sm:grid-cols-2"
      >
        {gallery.map((photo) => (
          <div
            key={photo.image}
            className={`relative min-w-0 ${photo.position} max-sm:col-span-1`}
          >
            <Image
              src={`/images/teams/gallery-${photo.image}.webp`}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 50vw, 40vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {teamGroups.map((group, index) => (
        <section
          key={group.id}
          id={group.id}
          aria-labelledby={`${group.id}-heading`}
          className={`scroll-mt-28 px-[2.5%] pt-[3%] pb-[4%] max-sm:px-5 max-sm:py-8 ${index % 2 === 1 ? "bg-hsp-navy" : "bg-hsp-charcoal"}`}
        >
          <h2
            id={`${group.id}-heading`}
            className="mb-[1.5%] text-[clamp(28px,4vw,60px)] leading-none font-bold tracking-[-0.06em] uppercase max-sm:mb-5"
          >
            {group.name}
          </h2>
          <div
            className={`grid gap-x-[3.5%] gap-y-8 max-sm:grid-cols-1 ${group.id === "structures" ? "grid-cols-3" : "grid-cols-2"}`}
          >
            {group.subteams.map((team) => (
              <article key={team.name} className="min-w-0">
                {team.image ? (
                  <div className="relative aspect-[3/2]">
                    <Image
                      src={`/images/teams/${team.image}`}
                      alt={team.alt ?? ""}
                      fill
                      sizes={
                        group.id === "structures"
                          ? "(max-width: 640px) 100vw, 30vw"
                          : "(max-width: 640px) 100vw, 46vw"
                      }
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div
                    aria-hidden="true"
                    className="aspect-[3/2] max-sm:hidden"
                  />
                )}
                <h3 className="mt-[3%] mb-[2%] text-center text-[clamp(24px,4vw,60px)] leading-none font-normal tracking-[-0.075em] uppercase max-sm:mt-4 max-sm:mb-3">
                  {team.name}
                </h3>
                <p className="text-justify text-[clamp(14px,1.65vw,25px)] leading-[1.15] font-bold tracking-[-0.035em] max-sm:text-left max-sm:text-base max-sm:leading-snug">
                  {team.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      ))}
      <div
        aria-hidden="true"
        className="relative h-[25vw] min-h-32 overflow-hidden"
      >
        <Image
          src="/images/teams/footer-pattern.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </div>
    </div>
  );
}

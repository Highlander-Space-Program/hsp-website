import Image from "next/image";
import { teams, teamGallery } from "@/data/home";

export default function HomeTeams() {
  return (
    <section
      id="teams"
      className="px-section relative isolate min-w-0 pt-4.5 pb-2 [border-left:clamp(12px,_1.5vw,_22px)_solid_var(--color-hsp-gray)] before:absolute before:top-0 before:left-[calc(-1_*_clamp(12px,_1.5vw,_22px))] before:h-[50%] before:w-[clamp(12px,_1.5vw,_22px)] before:content-[''] before:[background:linear-gradient(_var(--color-hsp-green)_0_33%,_var(--color-hsp-slate)_33%_)] max-[641px]:pt-6 max-[641px]:pb-3"
      aria-labelledby="teams-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 -z-10 h-[45%] w-[40%] bg-[url('/images/brand/team-topography-light.png')] bg-cover bg-[position:right_top] bg-no-repeat opacity-70 max-[641px]:w-[70%]"
      />
      <h2
        className="text-heading m-0 leading-[1.05] font-bold tracking-[-0.065em] uppercase"
        id="teams-heading"
      >
        Teams
      </h2>
      <p className="text-body mt-6 mb-4.5 font-bold tracking-[-0.05em] max-[641px]:my-5 max-[641px]:leading-[1.2]">
        Learn more about the teams making HSP accomplishments possible.
      </p>
      <div className="grid grid-cols-5 gap-[1.4%] max-[641px]:grid-cols-2 max-[641px]:gap-[24px_12px] max-[401px]:grid-cols-1 min-[641px]:max-[951px]:grid-cols-3 min-[641px]:max-[951px]:gap-[24px_16px]">
        {teams.map((team) => (
          <article className="min-w-0" key={team.name}>
            <div className="relative aspect-[1.5]">
              <Image
                className="object-cover"
                src={`/images/home/${team.image}`}
                alt={team.alt}
                fill
                sizes="(max-width: 640px) 45vw, 19vw"
              />
            </div>
            <h3 className="mt-[5px] text-[length:clamp(14px,_1.85vw,_28px)] leading-none font-bold tracking-[-0.075em] whitespace-nowrap uppercase max-[641px]:text-[length:15px] max-[641px]:whitespace-normal max-[401px]:text-[length:20px] min-[641px]:max-[951px]:text-[length:18px] min-[641px]:max-[951px]:whitespace-normal">
              {team.name}
              <span aria-hidden="true">↗</span>
            </h3>
            <p className="text-[length:clamp(10px,_1.15vw,_17px)] leading-none font-bold tracking-[-0.045em] max-[641px]:text-[length:12px] max-[641px]:leading-[1.2] min-[641px]:max-[951px]:text-[length:13px] min-[641px]:max-[951px]:leading-[1.2]">
              {team.description}
            </p>
            {team.subteams.length > 0 && (
              <div className="mt-3 text-[length:clamp(10px,_1.23vw,_18px)] leading-none font-bold tracking-[-0.055em] uppercase max-[641px]:text-[length:12px] max-[641px]:leading-[1.15] min-[641px]:max-[951px]:text-[length:13px] min-[641px]:max-[951px]:leading-[1.2]">
                <h4 className="mb-2">Subteams</h4>
                <ul className="m-0 list-none p-0">
                  {team.subteams.map((name) => (
                    <li className="before:content-['[–]_']" key={name}>
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-[1.36fr_0.67fr_1.49fr_0.67fr_1.28fr] gap-[0.8%] max-[641px]:grid-cols-2 max-[641px]:gap-2">
        {teamGallery.map(({ image, alt }) => (
          <div
            className="relative h-[clamp(130px,_17vw,_257px)] max-[641px]:h-35 max-[641px]:last:col-span-full max-[641px]:last:h-52.5"
            key={image}
          >
            <Image
              className="object-cover"
              src={`/images/home/${image}`}
              alt={alt}
              fill
              sizes="(max-width: 640px) 40vw, 25vw"
            />
          </div>
        ))}
      </div>
      <a
        className="text-heading mx-auto mt-2 mb-0 block w-fit leading-[1.15] font-bold tracking-[-0.06em] uppercase max-[641px]:mt-3.5"
        href="#join"
      >
        Join us<span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}

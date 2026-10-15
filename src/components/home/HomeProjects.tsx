import Image from "next/image";
import { projects } from "@/data/home";

export default function HomeProjects() {
  return (
    <section
      id="projects"
      className="bg-hsp-navy after:bg-hsp-orange px-section relative isolate overflow-hidden pt-4 pb-[3.5%] [border-right:clamp(10px,_1.5vw,_22px)_solid_var(--color-hsp-slate)] after:absolute after:top-[34%] after:right-[-7%] after:aspect-square after:w-[14%] after:rounded-full after:content-[''] max-[641px]:py-6"
      aria-labelledby="projects-heading"
    >
      <h2
        className="text-heading mx-0 mt-0 mb-[2.2%] leading-[1.05] font-bold tracking-[-0.065em] uppercase max-[641px]:mb-6"
        id="projects-heading"
      >
        Projects
      </h2>
      <Image
        className="absolute top-[-1.5%] right-[4%] z-1 h-auto w-[14%] max-[641px]:top-[-15px] max-[641px]:right-[15px] max-[641px]:w-25 min-[1280px]:hidden"
        src="/images/brand/scotty-resting.webp"
        alt=""
        width={190}
        height={150}
      />
      <svg
        className="stroke-hsp-cream absolute top-[1%] right-0 h-full w-[16%] fill-none stroke-1 max-[641px]:w-[25%] max-[641px]:opacity-[0.3]"
        viewBox="0 0 180 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M65 5 C180 -30 190 125 90 160 S0 255 100 265 S180 300 95 340 S20 420 75 465 S5 560 35 600 S155 580 100 655 S-20 775 90 805 S160 865 75 920 S10 970 0 1000" />
      </svg>
      <div className="relative z-1 grid gap-[clamp(24px,_2.6vw,_39px)] max-[641px]:gap-8">
        {projects.map((project, index) => (
          <article
            className="grid grid-cols-[33%_minmax(0,_1fr)] gap-[2.5%] max-[641px]:grid-cols-1 max-[641px]:gap-3.5"
            key={project.name}
          >
            <div className="relative aspect-[1.5] min-w-0">
              <Image
                className="object-cover"
                src={`/images/home/${project.image}`}
                alt={project.alt}
                fill
                sizes="(max-width: 640px) 100vw, 30vw"
              />
              <span
                className="text-hsp-charcoal absolute top-0 left-[1.5%] text-[length:clamp(35px,_4.1vw,_62px)] leading-none data-[right=true]:right-[1.5%] data-[right=true]:left-auto"
                data-right={index === 1}
                aria-hidden="true"
              >
                ✶
              </span>
            </div>
            <div className="min-w-0">
              <div className="relative flex flex-wrap items-start justify-between gap-3 max-[641px]:flex-wrap max-[641px]:gap-2 min-[641px]:max-[951px]:flex-wrap">
                <h3 className="text-[length:clamp(26px,_4vw,_60px)] leading-[0.9] font-normal tracking-[-0.075em] uppercase max-[641px]:text-[length:33px] max-[401px]:text-[length:30px] min-[641px]:max-[951px]:text-[length:30px]">
                  {project.name}
                  <span aria-hidden="true">↗</span>
                </h3>
                <span className="bg-hsp-cream text-hsp-charcoal relative min-w-[24%] shrink-0 text-center text-[length:clamp(20px,_2.8vw,_42px)] leading-[0.95] tracking-[-0.08em] whitespace-nowrap max-[641px]:static max-[641px]:px-1 max-[641px]:py-0.5 max-[641px]:text-[length:23px] min-[641px]:max-[951px]:static min-[641px]:max-[951px]:mb-1 min-[641px]:max-[951px]:text-[length:20px]">
                  {index === 0 && (
                    <Image
                      className="pointer-events-none absolute right-0 bottom-full hidden h-auto w-[clamp(140px,12vw,220px)] translate-y-[24%] min-[1280px]:block"
                      src="/images/brand/scotty-resting.webp"
                      alt=""
                      width={190}
                      height={190}
                    />
                  )}
                  {project.years}
                </span>
              </div>
              <p className="text-body mx-0 mt-2 mb-4.5 max-w-[87%] leading-[1.05] font-bold tracking-[-0.05em] max-[641px]:my-2.5 max-[641px]:max-w-full max-[641px]:leading-[1.2] min-[641px]:max-[951px]:max-w-full">
                {project.subtitle}
              </p>
              <p className="text-body max-w-[85%] text-justify leading-[1.03] tracking-[-0.035em] max-[641px]:max-w-full max-[641px]:text-left max-[641px]:leading-[1.2] min-[641px]:max-[951px]:max-w-full">
                {project.description}
              </p>
              {project.awards.length > 0 && (
                <ul className="mx-0 mt-2 mb-0 list-none p-0 text-[length:clamp(14px,_1.6vw,_24px)] leading-[1.2] font-bold tracking-[-0.025em] max-[641px]:text-[length:14px]">
                  {project.awards.map((award) => (
                    <li key={award}>{award}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

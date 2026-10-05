import Image from "next/image";

// Named grid areas reproduce the reference collage without absolute positioning.
export default function HomeOutreach() {
  return (
    <section
      id="outreach"
      className="bg-hsp-navy grid grid-cols-[14%_28%_29%_29%] [grid-template-areas:'engine_title_table_mission'_'mascot_lecture_invitation_demo'] max-[641px]:grid-cols-2 max-[641px]:[grid-template-areas:'title_mission'_'table_demo'_'lecture_invitation'_'engine_mascot'] max-[401px]:grid-cols-1 max-[401px]:[grid-template-areas:'title'_'mission'_'table'_'demo'_'lecture'_'invitation'_'engine'_'mascot'] min-[641px]:max-[951px]:grid-cols-2 min-[641px]:max-[951px]:[grid-template-areas:'title_mission'_'table_demo'_'lecture_invitation'_'engine_mascot']"
      aria-labelledby="outreach-heading"
    >
      <div className="relative min-h-[clamp(175px,_19vw,_288px)] min-w-0 [grid-area:engine] max-[641px]:min-h-[185px] min-[641px]:max-[951px]:min-h-60">
        <Image
          className="object-cover"
          src="/images/home/outreach-engine.webp"
          alt="Close-up of rocket engine hardware"
          fill
          sizes="15vw"
        />
      </div>
      <div className="relative min-h-[clamp(175px,_19vw,_288px)] min-w-0 bg-[url('/images/home/outreach-pattern-one.png')] bg-[length:100%_auto] bg-[position:bottom_center] bg-no-repeat px-[5%] py-3 [grid-area:title] max-[641px]:min-h-[185px] max-[641px]:px-3 max-[641px]:py-4 max-[401px]:min-h-30 min-[641px]:max-[951px]:min-h-60">
        <h2
          className="text-heading m-0 leading-[1.05] font-bold tracking-[-0.065em] uppercase max-[641px]:text-[length:28px]"
          id="outreach-heading"
        >
          Outreach
        </h2>
      </div>
      <div className="relative min-h-[clamp(175px,_19vw,_288px)] min-w-0 [border-left:clamp(8px,_1.4vw,_21px)_solid_var(--color-hsp-silver)] [grid-area:table] max-[641px]:min-h-[185px] max-[641px]:[border-left:0] min-[641px]:max-[951px]:min-h-60">
        <Image
          className="object-cover"
          src="/images/home/campus-outreach.webp"
          alt="HSP members at a campus outreach table"
          fill
          sizes="(max-width: 640px) 50vw, 29vw"
        />
      </div>
      <div className="relative min-h-[clamp(175px,_19vw,_288px)] min-w-0 bg-[url('/images/home/outreach-pattern-two.png')] bg-[length:100%_auto] bg-[position:bottom_center] bg-no-repeat px-[5%] py-2.5 [grid-area:mission] max-[641px]:min-h-[185px] max-[641px]:px-3 max-[641px]:py-4 min-[641px]:max-[951px]:min-h-60">
        <p className="text-body relative leading-none font-bold tracking-[-0.045em] max-[641px]:text-[length:16px] max-[641px]:leading-[1.15]">
          HSP is committed to inspiring the next generation of scientists and
          engineers through community outreach.
        </p>
      </div>
      <div className="relative min-h-[clamp(175px,_19vw,_288px)] min-w-0 [grid-area:mascot] max-[641px]:min-h-[185px] min-[641px]:max-[951px]:min-h-60">
        <Image
          className="object-contain"
          src="/images/brand/scotty-rocket.webp"
          alt="Scotty leaning on an HSP rocket"
          fill
          sizes="15vw"
        />
      </div>
      <div className="relative min-h-[clamp(175px,_19vw,_288px)] min-w-0 [grid-area:lecture] max-[641px]:min-h-[185px] min-[641px]:max-[951px]:min-h-60">
        <Image
          className="object-cover"
          src="/images/home/student-presentation.webp"
          alt="Students attending a presentation in a lecture hall"
          fill
          sizes="(max-width: 640px) 50vw, 28vw"
        />
      </div>
      <div className="after:bg-hsp-orange relative min-h-[clamp(175px,_19vw,_288px)] min-w-0 bg-[url('/images/home/outreach-pattern-three.png')] bg-[length:100%_auto] bg-[position:bottom_center] bg-no-repeat px-[3%] py-2.5 [border-left:clamp(8px,_1.4vw,_21px)_solid_var(--color-hsp-blue)] [grid-area:invitation] after:absolute after:top-[34%] after:left-[-6%] after:aspect-[0.75] after:w-[16%] after:rounded-[0_100%_100%_0] after:content-[''] max-[641px]:min-h-[185px] max-[641px]:px-3 max-[641px]:py-4 min-[641px]:max-[951px]:min-h-60">
        <p className="text-body relative leading-none font-bold tracking-[-0.045em] max-[641px]:text-[length:16px] max-[641px]:leading-[1.15]">
          Catch us at our next tabling event!
        </p>
      </div>
      <div className="relative min-h-[clamp(175px,_19vw,_288px)] min-w-0 [grid-area:demo] max-[641px]:min-h-[185px] min-[641px]:max-[951px]:min-h-60">
        <Image
          className="object-cover"
          src="/images/home/outreach-demonstration.webp"
          alt="Students discussing rocketry during an outdoor outreach event"
          fill
          sizes="(max-width: 640px) 50vw, 29vw"
        />
      </div>
    </section>
  );
}

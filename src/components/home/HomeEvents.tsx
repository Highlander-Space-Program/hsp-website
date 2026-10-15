import Image from "next/image";
import CommunityLink from "./CommunityLink";
import { communityLinks } from "@/data/home";

export default function HomeEvents() {
  return (
    <section
      id="events"
      className="text-hsp-charcoal px-section relative isolate py-4 [background:var(--color-hsp-cream)_url('/images/home/events-pattern.png')_center_/_cover] max-[641px]:py-6"
      aria-labelledby="events-heading"
    >
      <h2
        className="text-heading mx-0 mt-0 mb-3 leading-[1.05] font-bold tracking-[-0.065em] uppercase max-[641px]:text-[length:30px]"
        id="events-heading"
      >
        Upcoming events
      </h2>
      <Image
        className="absolute bottom-0 left-0 h-auto w-[15%] -scale-x-100 max-[641px]:w-[25%] max-[401px]:hidden min-[641px]:max-[951px]:hidden"
        src="/images/brand/scotty-pushing.png"
        alt=""
        width={220}
        height={220}
      />
      <div className="relative z-1 mr-[8%] ml-[9.5%] grid grid-cols-3 gap-[2%] max-[641px]:mt-5 max-[641px]:mr-0 max-[641px]:mb-0 max-[641px]:ml-[14%] max-[641px]:grid-cols-1 max-[641px]:gap-4 max-[401px]:ml-0 min-[641px]:max-[951px]:mx-0">
        <article className="bg-hsp-slate text-hsp-cream min-h-[clamp(240px,_24vw,_365px)] min-w-0 px-[4%] py-2.5 max-[641px]:min-h-52.5 max-[641px]:p-4.5">
          <h3 className="min-h-[2em] text-[length:clamp(16px,_1.9vw,_28px)] leading-none font-bold tracking-[-0.07em] uppercase max-[641px]:min-h-auto max-[641px]:text-[length:22px] min-[641px]:max-[951px]:text-[length:15px]">
            BCOE Match Challenge
          </h3>
          <p className="mt-2.5 text-[length:clamp(11px,_1.3vw,_20px)] font-bold tracking-[-0.06em] uppercase max-[641px]:mt-6 max-[641px]:text-[length:14px]">
            October 1 – November 9, 2026
          </p>
          <CommunityLink
            className="text-[length:clamp(12px,_1.3vw,_20px)] leading-[1.2] font-bold max-[641px]:text-[length:14px]"
            href={communityLinks.donate}
          >
            Link to donate ↗
          </CommunityLink>
          <div className="relative mt-4 min-h-[clamp(135px,_12.4vw,_188px)] max-[641px]:min-h-37.5">
            <Image
              src="/images/home/bcoe-match-art.webp"
              alt="BCOE Match Challenge campaign artwork"
              className="object-contain"
              fill
              sizes="(max-width: 640px) 80vw, 26vw"
            />
          </div>
        </article>
        <article
          className="bg-hsp-slate text-hsp-cream min-h-[clamp(240px,_24vw,_365px)] min-w-0 px-[4%] py-2.5 max-[641px]:min-h-52.5 max-[641px]:p-4.5"
          id="join"
        >
          <h3 className="min-h-[2em] text-[length:clamp(16px,_1.9vw,_28px)] leading-none font-bold tracking-[-0.07em] uppercase max-[641px]:min-h-auto max-[641px]:text-[length:22px] min-[641px]:max-[951px]:text-[length:15px]">
            Recruitment
          </h3>
          <p className="mt-2.5 text-[length:clamp(11px,_1.3vw,_20px)] font-bold tracking-[-0.06em] uppercase max-[641px]:mt-6 max-[641px]:text-[length:14px]">
            October 1 – 21, 2026
          </p>
          <CommunityLink
            className="text-[length:clamp(12px,_1.3vw,_20px)] leading-[1.2] font-bold max-[641px]:text-[length:14px]"
            href={communityLinks.application}
          >
            Link to application ↗
          </CommunityLink>
        </article>
        <article className="bg-hsp-slate text-hsp-cream min-h-[clamp(240px,_24vw,_365px)] min-w-0 px-[4%] py-2.5 max-[641px]:min-h-52.5 max-[641px]:p-4.5">
          <h3 className="min-h-[2em] text-[length:clamp(16px,_1.9vw,_28px)] leading-none font-bold tracking-[-0.07em] uppercase max-[641px]:min-h-auto max-[641px]:text-[length:22px] min-[641px]:max-[951px]:text-[length:15px]">
            Placeholder event
          </h3>
          <p className="text-body mx-auto mt-[22%] mb-0 max-w-[75%] leading-none font-bold tracking-[-0.055em] max-[641px]:mx-0 max-[641px]:mt-[35px] max-[641px]:mb-0">
            Updated with that week’s recruitment event
          </p>
        </article>
      </div>
      <div className="text-body mt-4.5 mr-0 mb-0 ml-[13.5%] font-bold tracking-[-0.055em] max-[641px]:ml-[14%] max-[641px]:text-[length:16px] max-[401px]:ml-0">
        <CommunityLink href={communityLinks.discord}>
          Latest updates on our discord! ↗
        </CommunityLink>
      </div>
    </section>
  );
}

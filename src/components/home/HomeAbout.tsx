import Image from "next/image";
import CommunityLink from "./CommunityLink";
import DiscordIcon from "@/components/DiscordIcon";
import { communityLinks } from "@/data/home";

export default function HomeAbout() {
  return (
    <section
      id="about"
      className="grid min-w-0 grid-cols-[56.3%_43.7%] max-[641px]:grid-cols-1"
      aria-labelledby="about-heading"
    >
      <div className="before:bg-hsp-orange relative isolate min-w-0 px-[4.5%] pt-3.5 pb-0 before:absolute before:top-0 before:right-0 before:z-1 before:aspect-[0.8] before:h-[17%] before:rounded-[100%_0_0_100%] before:content-[''] after:absolute after:top-0 after:right-0 after:bottom-0 after:w-[2.5%] after:content-[''] after:[background:linear-gradient(_var(--color-hsp-blue)_0_30%,_var(--color-hsp-green)_30%_40%,_var(--color-hsp-gray)_40%_)] max-[641px]:px-6 max-[641px]:py-5.5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[38%] bg-[url('/images/brand/about-topography-light.png')] bg-[length:180%_auto] bg-bottom bg-no-repeat opacity-70"
        />
        <h2
          className="text-heading mx-0 mt-0 mb-2 leading-[1.05] font-bold tracking-[-0.065em] uppercase"
          id="about-heading"
        >
          About us
        </h2>
        <p className="text-body leading-[1.03] font-bold tracking-[-0.045em] max-[641px]:leading-[1.2] min-[641px]:max-[951px]:text-[length:16px]">
          The Highlander Space Program is UC Riverside's flagship Registered
          Student Organization for rocketry. HSP flew UCR's first ever liquid
          fueled rocket, <em>Poseidon</em>, to a first-place finish in the “A”
          Altitude Category in 2025 FAR-OUT Competition. Our current project,
          Clementine, will carry us higher and faster than ever before.
        </p>
        <div className="mt-7 pr-[12%] pb-[5px] text-right max-[641px]:mt-[25px] max-[641px]:p-0">
          <strong className="mb-[25px] block text-[length:clamp(25px,_3vw,_45px)] tracking-[-0.055em] uppercase max-[641px]:mb-3">
            Est. 2019
          </strong>
          <CommunityLink
            className="text-[length:clamp(14px,_1.7vw,_25px)] font-bold"
            href={communityLinks.discord}
          >
            Join our discord:{" "}
            <DiscordIcon className="ml-1 inline-block size-[1.3em] align-middle" />
          </CommunityLink>
        </div>
      </div>
      <div className="relative min-h-[clamp(310px,_29vw,_440px)] max-[641px]:min-h-65">
        <Image
          className="object-cover"
          src="/images/home/recruitment-tabling.webp"
          alt="HSP members sharing rocket hardware at a campus table"
          fill
          sizes="(max-width: 640px) 100vw, 44vw"
        />
      </div>
    </section>
  );
}

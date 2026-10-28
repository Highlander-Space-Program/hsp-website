import LinkArrow from "@/components/LinkArrow";
import Image from "next/image";
import CommunityLink from "./CommunityLink";
import { communityLinks } from "@/data/home";

export default function HomeFundraiser() {
  return (
    <section
      id="fundraiser"
      aria-labelledby="fundraiser-heading"
      className="bg-hsp-cream text-hsp-charcoal grid min-w-0 grid-cols-[38%_minmax(0,1fr)] max-[641px]:grid-cols-1"
    >
      <div className="relative min-h-[clamp(260px,_21vw,_360px)] min-w-0 max-[641px]:aspect-[1.7] max-[641px]:min-h-0">
        <Image
          src="/images/home/bcoe-match-challenge.webp"
          alt="HSP students preparing their rocket at the desert launch site"
          className="object-cover"
          fill
          sizes="(max-width: 640px) 100vw, 38vw"
        />
      </div>
      <div className="relative isolate flex min-w-0 flex-col py-4 pr-[18%] pl-[5%] max-[641px]:px-6 max-[641px]:py-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-[22%] bg-[url('/images/brand/riverside-topography.webp')] bg-[length:auto_180%] bg-left bg-no-repeat max-[641px]:opacity-40"
        />
        <div
          aria-hidden="true"
          className="before:bg-hsp-orange absolute inset-y-0 left-0 w-[2.5%] bg-[linear-gradient(var(--color-hsp-slate)_0_20%,var(--color-hsp-blue)_20%_50%,var(--color-hsp-silver)_50%_66%,var(--color-hsp-gray)_66%_82%,var(--color-hsp-green)_82%)] before:absolute before:top-[17%] before:-left-full before:aspect-square before:w-[230%] before:rounded-r-full before:content-['']"
        />
        <h2
          id="fundraiser-heading"
          className="text-heading mb-2 leading-none font-bold tracking-[-0.065em] uppercase"
        >
          BCOE Match Challenge
        </h2>
        <p className="text-body leading-[1.05] font-bold tracking-[-0.045em] max-[641px]:leading-[1.2]">
          The BCOE Match Challenge is our primary fundraiser for the 2026–2027
          School Year. Through 7 November, our partners at Triad Magnetics will
          match 100% of your donation, up to $1000.
        </p>
        <div className="text-body mt-auto pt-8 font-bold tracking-[-0.045em]">
          <CommunityLink href={communityLinks.donate}>
            Support Us <LinkArrow />
          </CommunityLink>
        </div>
      </div>
    </section>
  );
}

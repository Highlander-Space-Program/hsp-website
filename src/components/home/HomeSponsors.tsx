import Image from "next/image";
import CommunityLink from "./CommunityLink";
import { communityLinks, sponsorPlaceholders } from "@/data/home";

const sponsorLogos: Record<string, string> = {
  LabJack: "/images/home/sponsors/labjack.png",
  "Parker Aerospace": "/images/home/sponsors/parker-aerospace.png",
};

export default function HomeSponsors() {
  return (
    <section
      id="sponsors"
      className="grid grid-cols-[74%_26%] max-[641px]:grid-cols-1"
      aria-labelledby="sponsors-heading"
    >
      <div className="px-[4.5%] pt-4 pb-6 max-[641px]:px-5 max-[641px]:py-6">
        <h2
          className="text-heading m-0 leading-[1.05] font-bold tracking-[-0.065em] uppercase"
          id="sponsors-heading"
        >
          Sponsors
        </h2>
        <p className="text-body mt-4.5 leading-[1.03] font-bold tracking-[-0.045em] max-[641px]:leading-[1.2]">
          Our sponsors make the Highlander Space Program possible. A special
          thanks to the sponsors below who keep our rockets flying.
        </p>
        <div className="text-body mt-9 font-bold tracking-[-0.05em] max-[641px]:mt-6">
          <CommunityLink href={communityLinks.donate}>
            Interested in contributing? ↗
          </CommunityLink>
        </div>
        <div className="mt-10 grid grid-cols-6 gap-[16px_20px] max-[641px]:mt-6 max-[641px]:gap-3">
          {sponsorPlaceholders.map((name) => (
            <div
              className={`flex min-h-[clamp(60px,_7.6vw,_115px)] flex-col items-center justify-center p-2.5 text-center max-[641px]:min-h-22.5 ${sponsorLogos[name] ? "col-span-3" : "col-span-2 [border:1px_dashed_var(--color-hsp-border)] max-[401px]:col-span-6"}`}
              key={name}
            >
              {sponsorLogos[name] ? (
                <div className="relative h-[clamp(60px,_6vw,_90px)] w-full">
                  <Image
                    src={sponsorLogos[name]}
                    alt={name}
                    className="object-contain"
                    fill
                    sizes="(max-width: 640px) 45vw, 33vw"
                  />
                </div>
              ) : (
                <>
                  <strong className="text-[length:clamp(16px,_2vw,_30px)] leading-[1.05]">
                    {name}
                  </strong>
                  <span className="text-hsp-silver mt-[5px] text-[length:clamp(10px,_1vw,_15px)]">
                    Logo placeholder
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="relative max-[641px]:min-h-95">
        <Image
          className="object-cover max-[641px]:object-[center_65%]"
          src="/images/home/clementine-test-stand.webp"
          alt="HSP rocket test stand at the desert facility"
          fill
          sizes="(max-width: 640px) 100vw, 26vw"
        />
      </div>
    </section>
  );
}

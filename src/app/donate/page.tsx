import LinkArrow from "@/components/LinkArrow";
import type { Metadata } from "next";
import Image from "next/image";
import SponsorLogos from "@/components/SponsorLogos";
import { communityLinks } from "@/data/home";
import { sponsorshipContactUrl, sponsorshipPackageUrl } from "@/data/sponsors";

export const metadata: Metadata = {
  title: "Donate | Highlander Space Program",
  description:
    "Support student-built rockets at UC Riverside. Meet Highlander Space Program’s sponsors and help inspire the next generation of aerospace engineers.",
};

export default function Page() {
  return (
    <div>
      <section
        aria-labelledby="donate-title"
        className="relative aspect-[1512/801] w-full overflow-hidden max-sm:aspect-[4/3]"
      >
        <Image
          src="/images/donate/sponsor-rocket.webp"
          alt="HSP’s sponsor-covered rocket on its launch rail in the desert."
          fill
          priority
          data-initial-load
          sizes="100vw"
          className="object-cover object-center max-sm:object-[35%_center]"
        />
        <h1
          id="donate-title"
          className="text-hsp-charcoal absolute top-[7%] left-[4.5%] m-0 text-[clamp(44px,6.6vw,100px)] leading-none font-bold tracking-[-0.065em] max-sm:top-5 max-sm:left-5"
        >
          DONATE
        </h1>
      </section>
      <section
        aria-label="Support HSP"
        className="px-[4.5%] pt-[2%] max-sm:px-5 max-sm:pt-6"
      >
        <p className="text-[clamp(18px,3vw,45px)] leading-[1.05] font-bold tracking-[-0.045em] max-sm:text-lg max-sm:leading-snug">
          HSP is made possible by our donors and sponsors. Your contribution
          directly supports our mission to train, teach, and inspire the next
          generation of aerospace engineers, right here in the Inland Empire. By
          donating today, you are contributing to the future of aerospace
          innovation and space exploration.
        </p>
        {communityLinks.donate && (
          <a
            href={communityLinks.donate}
            className="mt-6 inline-flex min-h-11 items-center gap-2 text-[clamp(18px,2vw,30px)] font-bold"
          >
            Donate now <LinkArrow />
          </a>
        )}
      </section>
      <section
        aria-labelledby="supporters-heading"
        className="px-[7%] pt-[7%] max-sm:px-5 max-sm:pt-12"
      >
        <h2
          id="supporters-heading"
          className="mb-[5%] text-center text-[clamp(28px,4vw,60px)] leading-[1.1] font-bold tracking-[-0.06em] max-sm:mb-7"
        >
          Thank you to our supporters!
        </h2>
        <SponsorLogos />
        <div className="mt-8 text-center max-sm:mt-7">
          <a
            href={sponsorshipPackageUrl ?? sponsorshipContactUrl}
            className="inline-flex min-h-11 max-w-full items-center justify-center gap-2 text-[clamp(23px,4vw,60px)] leading-[1.15] font-bold tracking-[-0.06em] max-sm:py-2"
          >
            <span>
              {sponsorshipPackageUrl
                ? "Download Sponsorship Package"
                : "Request Sponsorship Package"}
            </span>
            <LinkArrow />
          </a>
        </div>
      </section>
      <div
        aria-hidden="true"
        className="relative aspect-[1702/584] min-h-36 overflow-hidden"
      >
        <Image
          src="/images/donate/footer-pattern.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </div>
    </div>
  );
}

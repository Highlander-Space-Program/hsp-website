import Image from "next/image";

export default function HomeHero() {
  return (
    <section
      id="home"
      className="relative aspect-[1.724] max-h-[calc(100svh_-_clamp(70px,_6.6vw,_100px))] w-full min-w-0 overflow-clip max-[641px]:max-h-[calc(100svh_-_66px)]"
      aria-labelledby="hero-heading"
    >
      <Image
        className="object-cover object-bottom"
        src="/images/home/launch-day-hero.webp"
        alt="HSP students preparing their rocket, with an orange in the foreground"
        fill
        priority
        data-initial-load
        sizes="100vw"
      />
      <div
        className="absolute bottom-[2.4%] left-[2.4%] flex w-[41%] min-w-0 items-end gap-[3%]"
        aria-hidden="true"
      >
        <Image
          className="h-auto w-[28%]"
          src="/images/brand/hsp-mission-patch.webp"
          alt=""
          loading="eager"
          data-initial-load
          width={180}
          height={180}
        />
        <Image
          className="h-auto w-[69%]"
          src="/images/brand/hsp-wordmark-dark.webp"
          alt=""
          loading="eager"
          data-initial-load
          width={440}
          height={160}
        />
      </div>
      <h1
        className="text-hsp-charcoal absolute right-[2.4%] bottom-[2.5%] max-w-[44%] text-right text-[length:clamp(11.5px,_4.6vw,_69px)] leading-[0.83] font-bold tracking-[-0.065em] uppercase min-[951px]:text-[length:clamp(14.5px,_5.8vw,_87px)]"
        id="hero-heading"
      >
        Highlander
        <br />
        Space Program
      </h1>
    </section>
  );
}

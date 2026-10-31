import Image from "next/image";
import Link from "next/link";

const images = {
  logo: "/images/events/hsp_logo.jpg",
  team: "/images/events/team.jpg",
  workshop: "/images/events/lookingout.jpg",
  mascot: "/images/events/scotty_orange.jpg",
  pattern: "/images/events/team_photo.jpg",
};

// Add your real URLs when available.
const joinUrl = "";
const sponsorUrl =
  "https://www.givecampus.com/schools/UniversityofCaliforniaRiverside/bcoe-match-challenge-campaign-2026/pages/highlander-space-program-26";

const buttonClasses =
  "inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#f4f2ed] px-[28px] py-[10px] text-[22px] font-extrabold text-[#232730] shadow-md no-underline transition-colors hover:bg-[#ffcfb4]";

type PhotoProps = {
  src: string;
  alt: string;
  contain?: boolean;
};

function Photo({ src, alt, contain = false }: PhotoProps) {
  if (!src) {
    return (
      <div className="grid h-full min-h-[inherit] w-full place-items-center bg-[#434d5d] p-[24px] text-center text-[16px] leading-[1.5] text-[#f4f2ed]">
        {alt}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={
        contain
          ? "295px"
          : "(max-width: 700px) 100vw, (max-width: 1200px) 50vw, 600px"
      }
      className={
        contain ? "object-contain object-right-bottom" : "object-cover"
      }
    />
  );
}

export default function EventsPage() {
  return (
    <div className="mx-auto box-border w-full max-w-[1200px] bg-[#232730] [font-family:Arial,Helvetica,sans-serif] text-[#f4f2ed] [&_*]:box-border [&_a:focus-visible]:[outline:3px_solid_#ff8a49] [&_a:focus-visible]:outline-offset-[5px]">
      {/* Navigation */}
      <header className="flex flex-col items-center gap-5 bg-[#232730] px-5 py-4 lg:flex-row lg:gap-8">
        <Link
          href="/"
          aria-label="Highlander Space Program home"
          className="relative block h-[70px] w-[220px] shrink-0"
        >
          <Image
            src="/images/events/hsp_logo.jpg"
            alt="Highlander Space Program"
            fill
            sizes="220px"
            className="object-contain object-left"
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[16px] font-bold lg:flex-1 lg:justify-between lg:gap-x-4 lg:text-[20px] [&_a]:whitespace-nowrap [&_a]:no-underline [&_a:hover]:text-[#ff7a32]"
        >
          <Link href="/" className="text-[#f4f2ed]">
            HOME
          </Link>

          <Link href="/projects" className="text-[#f4f2ed]">
            PROJECTS
          </Link>

          <Link href="/teams" className="text-[#f4f2ed]">
            TEAMS
          </Link>

          <Link href="/events" aria-current="page" className="text-[#ff5a00]">
            JOIN US
          </Link>

          <Link href="/donate" className="text-[#f4f2ed]">
            DONATE
          </Link>

          <Link href="/contact" className="text-[#f4f2ed]">
            CONTACT US
          </Link>
        </nav>
      </header>

      <main>
        {/* Text panel and team photo */}
        <section
          aria-labelledby="events-title"
          className="grid grid-cols-2 [@media(max-width:700px)]:grid-cols-1"
        >
          <div className="relative min-h-[560px] px-[24px] pt-[28px] pb-[190px] [@media(max-width:700px)]:min-h-[440px] [@media(max-width:700px)]:pb-[160px]">
            <h1
              id="events-title"
              className="m-0 text-[clamp(44px,5.5vw,72px)] leading-none font-extrabold tracking-[-3px]"
            >
              JOIN US
            </h1>

            <p className="mt-[30px] mr-0 mb-0 ml-0 max-w-[390px] text-[clamp(18px,2vw,24px)] leading-[1.3] font-semibold">
              Find how to get involved with our Potential New Member Projects!
            </p>

            <div
              id="get-involved"
              className="mt-[64px] max-w-[270px] scroll-mt-[24px] text-[20px] leading-[1.35] font-semibold [@media(max-width:700px)]:mt-[36px]"
            >
              {joinUrl ? (
                <a
                  href={joinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-inherit underline underline-offset-[5px]"
                >
                  More info here ↗
                  <span className="mt-[8px] block">
                    Applications, projects, and Discord
                  </span>
                </a>
              ) : (
                <p className="m-0">
                  Want to get involved?
                  <span className="mt-[8px] block">
                    Application and Discord links coming soon.
                  </span>
                </p>
              )}
            </div>

            {/* Scotty: edit these pixel values to resize or reposition */}
            {images.mascot && (
              <div className="absolute right-0 bottom-0 h-[295px] w-[295px]">
                <Photo src={images.mascot} alt="" contain />
              </div>
            )}
          </div>

          <div className="relative min-h-[560px] min-w-0 overflow-hidden [@media(max-width:700px)]:min-h-[450px]">
            <Photo
              src={images.team}
              alt="HSP members together at a campus event"
            />
          </div>
        </section>

        {/* Workshop photo and decorative pattern */}
        <section
          aria-label="Life at HSP"
          className="grid grid-cols-2 [@media(max-width:700px)]:grid-cols-1"
        >
          <div className="relative h-[360px] min-w-0 overflow-hidden [@media(max-width:700px)]:h-[280px]">
            <Photo
              src={images.workshop}
              alt="An HSP member working on a project"
            />
          </div>

          <div
            aria-hidden="true"
            className="relative h-[360px] min-w-0 overflow-hidden bg-[#232730] [background-image:repeating-conic-gradient(from_45deg,#d4d5d8_0%_25%,transparent_0%_50%),repeating-conic-gradient(#344ba3_0%_25%,#232730_0%_50%)] [background-size:74px_74px,23px_23px] [background-position:0_0,11px_7px] [@media(max-width:700px)]:h-[280px]"
          >
            {images.pattern && (
              <Image
                src={images.pattern}
                alt=""
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover"
              />
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="grid grid-cols-1 items-center gap-8 bg-[#706c6b] px-6 py-6 text-[#f4f2ed] lg:grid-cols-[1fr_auto_1fr]">
        {/* Left: full HSP logo */}
        <Link
          href="/"
          aria-label="Highlander Space Program home"
          className="relative block h-[145px] w-[300px] max-w-full justify-self-center lg:justify-self-start"
        >
          <Image
            src="/images/events/hsp_logo.jpg"
            alt="Highlander Space Program"
            fill
            sizes="300px"
            className="object-contain object-left"
          />
        </Link>

        {/* Center: buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href={joinUrl || "#get-involved"}
            className="inline-flex min-h-[56px] min-w-[170px] items-center justify-center rounded-full bg-[#f4f2ed] px-7 py-3 text-[26px] font-extrabold text-[#232730] no-underline shadow-md hover:bg-[#ffcfb4]"
          >
            JOIN US
          </a>

          <Link
            href="/donate"
            className="inline-flex min-h-[56px] min-w-[170px] items-center justify-center rounded-full bg-[#f4f2ed] px-7 py-3 text-[26px] font-extrabold text-[#232730] no-underline shadow-md hover:bg-[#ffcfb4]"
          >
            SPONSOR
          </Link>
        </div>

        {/* Right: address and social icons */}
        <div className="justify-self-center text-center lg:justify-self-end lg:text-right">
          <address className="text-[22px] leading-[1.1] font-bold tracking-[-0.6px] not-italic">
            Winston Chung Hall,
            <br />
            446 N Campus Dr,
            <br />
            Riverside, CA 92507
          </address>

          <div className="mt-5 flex items-center justify-center gap-7 lg:justify-end">
            {/* Discord */}
            <span role="img" aria-label="Discord" title="Discord">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <path d="M20.3 4.4a19.8 19.8 0 0 0-4.9-1.5l-.6 1.2a18.4 18.4 0 0 0-5.6 0l-.6-1.2a19.8 19.8 0 0 0-4.9 1.5C.6 9 .1 13.5.4 18a20 20 0 0 0 6 3l1.2-2a12 12 0 0 1-1.9-.9l.5-.4a14.4 14.4 0 0 0 11.6 0l.5.4a12 12 0 0 1-1.9.9l1.2 2a20 20 0 0 0 6-3c.4-5.2-.7-9.6-3.3-13.6ZM8 15.4c-1.2 0-2.1-1.1-2.1-2.4s.9-2.4 2.1-2.4 2.1 1.1 2.1 2.4-.9 2.4-2.1 2.4Zm8 0c-1.2 0-2.1-1.1-2.1-2.4s.9-2.4 2.1-2.4 2.1 1.1 2.1 2.4-.9 2.4-2.1 2.4Z" />
              </svg>
            </span>

            {/* Instagram */}
            <span role="img" aria-label="Instagram" title="Instagram">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </span>

            {/* LinkedIn */}
            <span role="img" aria-label="LinkedIn" title="LinkedIn">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <circle cx="4.5" cy="4.5" r="2" />
                <path d="M3 9h3v12H3zM10 9h3v1.7c.8-1.2 1.9-2 3.5-2 3 0 4.5 1.9 4.5 5V21h-3v-6.5c0-1.8-.6-2.8-2.2-2.8-1.7 0-2.8 1.2-2.8 3V21h-3Z" />
              </svg>
            </span>

            {/* Email */}
            <span role="img" aria-label="Email" title="Email">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m3 6 9 7 9-7" />
              </svg>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

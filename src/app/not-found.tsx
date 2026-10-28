import LinkArrow from "@/components/LinkArrow";
import Link from "next/link";

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-heading"
      className="bg-hsp-cream text-hsp-charcoal flex min-h-[70svh] flex-col items-center justify-center bg-[url('/images/pages/not-found-pattern.webp')] bg-cover bg-center px-6 py-20 text-center"
    >
      <div className="bg-hsp-cream/95 w-full max-w-2xl rounded-3xl px-6 py-10 sm:px-12">
        <p className="text-2xl">Page Not Found</p>
        <h1
          id="not-found-heading"
          className="mt-2 text-[clamp(100px,16vw,160px)] leading-none font-bold tracking-[-0.07em]"
        >
          404
        </h1>
        <p className="mt-5 text-2xl font-bold sm:text-4xl">
          That page hit escape velocity.
        </p>
        <div
          aria-hidden="true"
          className="bg-hsp-orange mx-auto my-8 h-16 w-28 -rotate-12 rounded-[50%]"
        />
        <Link
          href="/"
          className="inline-block text-xl font-bold underline underline-offset-4 sm:text-2xl"
        >
          Reenter to Home <LinkArrow />
        </Link>
      </div>
    </section>
  );
}

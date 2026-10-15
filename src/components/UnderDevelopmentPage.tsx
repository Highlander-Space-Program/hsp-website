import Link from "next/link";
import { Rocket } from "lucide-react";

export default function UnderDevelopmentPage({ title }: { title: string }) {
  return (
    <section
      aria-labelledby="page-heading"
      className="relative isolate flex min-h-[65svh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center"
    >
      <div
        aria-hidden="true"
        className="border-hsp-cream/10 pointer-events-none absolute -right-24 -bottom-32 -z-10 size-96 rounded-full border"
      />
      <Rocket aria-hidden="true" className="text-hsp-orange mb-8 size-14" />
      <h1
        id="page-heading"
        className="text-[clamp(40px,7vw,88px)] leading-none font-bold tracking-[-0.06em] uppercase"
      >
        {title}
      </h1>
      <p className="mt-6 text-2xl font-bold">Under development</p>
      <p className="text-hsp-silver mt-3 max-w-lg text-base sm:text-lg">
        We’re getting this page ready for launch. Check back soon.
      </p>
      <Link
        href="/"
        className="bg-hsp-orange text-hsp-charcoal mt-10 rounded-full px-7 py-3 font-bold"
      >
        Back to home <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}

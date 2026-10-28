import Image from "next/image";
import { sponsors } from "@/data/sponsors";

export default function SponsorLogos() {
  return (
    <ul className="m-0 grid list-none grid-cols-6 items-center gap-x-[4%] gap-y-6 p-0 max-sm:gap-4">
      {sponsors.map((sponsor, index) => (
        <li
          key={sponsor.name}
          className={`${index < 2 ? "col-span-3" : "col-span-2"} min-w-0 max-sm:col-span-3 max-sm:last:col-start-2 max-sm:last:col-end-6`}
        >
          <div className="flex h-[clamp(90px,9vw,140px)] items-center justify-center px-[7%] py-4 max-sm:h-24 max-sm:px-3 max-sm:py-3">
            <div className="relative h-full w-full">
              <Image
                src={sponsor.image}
                alt={sponsor.name}
                fill
                sizes="(max-width: 640px) 44vw, 35vw"
                className={`object-contain ${sponsor.imageClassName ?? ""}`}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

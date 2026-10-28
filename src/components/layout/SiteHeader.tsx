"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Teams", href: "/teams" },
  { label: "Join us", href: "/join" },
  { label: "Donate", href: "/donate" },
  { label: "Contact us", href: "/contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="bg-hsp-charcoal sticky top-0 z-10 flex h-[clamp(70px,_6.6vw,_100px)] min-h-17.5 items-center gap-[3%] px-[1.2%] py-1.5 [border:1px_solid_var(--color-hsp-shadow)] max-[951px]:justify-between max-[951px]:px-4 max-[641px]:h-16.5 max-[641px]:min-h-16.5">
      <Link
        className="flex w-[18%] max-w-67.5 shrink-0 items-center max-[951px]:w-37.5"
        href="/"
        aria-label="Highlander Space Program home"
      >
        <Image
          className="h-auto w-[34%] origin-left scale-200"
          src="/images/brand/hsp-orbit-light.webp"
          alt=""
          width={90}
          height={80}
          priority
          data-initial-load
        />
        <Image
          className="h-auto w-[66%]"
          src="/images/brand/hsp-wordmark-light.webp"
          alt="HSP"
          width={170}
          height={70}
          priority
          data-initial-load
        />
      </Link>
      <button
        className="max-[951px]:text-hsp-cream hidden max-[951px]:block max-[951px]:cursor-pointer max-[951px]:bg-none max-[951px]:p-2.5 max-[951px]:[border:1px_solid_var(--color-hsp-border)]"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="site-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav
        id="site-navigation"
        aria-label="Main navigation"
        className="max-[951px]:bg-hsp-charcoal flex flex-1 items-center justify-around gap-3 max-[951px]:absolute max-[951px]:top-[100%] max-[951px]:right-0 max-[951px]:left-0 max-[951px]:hidden max-[951px]:max-h-[calc(100dvh-70px)] max-[951px]:overflow-y-auto max-[951px]:px-5 max-[951px]:py-4 max-[951px]:data-[open=true]:flex max-[951px]:data-[open=true]:flex-col max-[951px]:data-[open=true]:items-stretch max-[951px]:data-[open=true]:gap-0"
        data-open={open}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setOpen(false);
            document
              .querySelector<HTMLButtonElement>(
                '[aria-controls="site-navigation"]',
              )
              ?.focus();
          }
        }}
      >
        {navigation.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={`text-[length:clamp(13px,_1.7vw,_25px)] font-bold whitespace-nowrap uppercase max-[951px]:pt-3 max-[951px]:pr-3 max-[951px]:pb-3 max-[951px]:pl-3 max-[951px]:text-[length:17px] ${pathname === href ? "text-hsp-orange" : ""}`}
            aria-current={pathname === href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";
import DiscordIcon from "@/components/DiscordIcon";
import { Instagram, Linkedin, Mail } from "lucide-react";
import CommunityLink from "@/components/home/CommunityLink";
import { communityLinks } from "@/data/home";

const socialLinks = [
  { label: "Discord", href: communityLinks.discord, Icon: DiscordIcon },
  { label: "Instagram", href: communityLinks.instagram, Icon: Instagram },
  { label: "LinkedIn", href: communityLinks.linkedin, Icon: Linkedin },
  { label: "Email", href: communityLinks.email, Icon: Mail },
];

export default function SiteFooter() {
  return (
    <footer
      id="contact"
      className="bg-hsp-gray grid grid-cols-[28%_44%_28%] items-center gap-0 px-[2%] py-4.5 max-[641px]:grid-cols-1 max-[641px]:gap-6 max-[641px]:p-6 max-[641px]:text-center"
    >
      <Link
        className="min-w-0"
        href="/"
        aria-label="Highlander Space Program home"
      >
        <Image
          className="h-auto max-h-[165px] w-[95%] object-contain max-[641px]:mx-auto max-[641px]:w-60"
          src="/images/brand/hsp-logo-light.webp"
          width={380}
          height={180}
          alt="Highlander Space Program"
        />
      </Link>
      <div className="flex min-w-0 flex-wrap justify-center gap-[6%] min-[641px]:max-[951px]:gap-3">
        <Link
          className="bg-hsp-cream text-hsp-charcoal min-w-[30%] rounded-[50px] px-6 py-3 text-center text-[length:clamp(16px,_2vw,_30px)] leading-none font-bold uppercase shadow-[0_3px_3px_var(--color-hsp-shadow)] max-[641px]:min-w-30 min-[641px]:max-[951px]:px-4 min-[641px]:max-[951px]:py-3"
          href="/join"
        >
          Join us
        </Link>
        <Link
          className="bg-hsp-cream text-hsp-charcoal min-w-[30%] rounded-[50px] px-6 py-3 text-center text-[length:clamp(16px,_2vw,_30px)] leading-none font-bold uppercase shadow-[0_3px_3px_var(--color-hsp-shadow)] max-[641px]:min-w-30 min-[641px]:max-[951px]:px-4 min-[641px]:max-[951px]:py-3"
          href="/donate"
        >
          Sponsor
        </Link>
      </div>
      <div className="min-w-0 text-right max-[641px]:text-center">
        <address className="text-body leading-none font-bold tracking-[-0.045em] not-italic">
          Winston Chung Hall,
          <br />
          446 N Campus Dr.
          <br />
          Riverside, CA 92507
        </address>
        <div className="mt-2 flex justify-end gap-[9%] max-[641px]:mt-4 max-[641px]:justify-center max-[641px]:gap-6">
          {socialLinks.map(({ label, href, Icon }) => (
            <CommunityLink key={label} href={href} label={label}>
              <Icon aria-hidden="true" />
            </CommunityLink>
          ))}
        </div>
      </div>
    </footer>
  );
}

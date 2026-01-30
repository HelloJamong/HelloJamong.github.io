import type { Props } from "astro";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconSignal from "@/assets/icons/IconSignal.svg";
import IconDiscord from "@/assets/icons/IconDiscord.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/HelloJamong",
    linkTitle: `${SITE.title} on GitHub`,
    icon: IconGitHub,
  },
  {
    name: "Signal",
    href: "https://signal.me/#eu/LS8LCDMm5R3ffq3Q_Mp1z3qZiGNZ9EZFGJQGT0GYrWbmcKhU--pKAZ0vUBgmzrxP",
    linkTitle: `Contact ${SITE.author} on Signal`,
    icon: IconSignal,
  },
  {
    name: "Discord",
    href: "https://discord.com",
    linkTitle: `Discord: jamong`,
    icon: IconDiscord,
  },
] as const;

export const SHARE_LINKS: Social[] = [] as const;

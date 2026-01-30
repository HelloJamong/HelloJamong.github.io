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
    href: "https://signal.org",
    linkTitle: `Signal: igor.670`,
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

"use client";

import Link from "next/link";
import { Layers, Building2, BookOpen, MonitorPlay, Mail } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { localeLink } from "@/lib/locale-link";

const hubs = [
  { label: "Auto Master Suite", path: "/auto-master-suite", icon: Layers },
  { label: "Dealer Services", path: "/dealer-services", icon: Building2 },
  { label: "Company Resources", path: "/company", icon: BookOpen },
  { label: "VQonsole Access", path: "/vqonsole", icon: MonitorPlay },
  { label: "Contact Us", path: "/contact", icon: Mail },
] as const;

export default function HomeHubStrip() {
  const { locale } = useLocale();

  return (
    <section
      aria-label="Primary site sections"
      className="relative z-20 border-y border-white/[0.08] bg-[#0a0a0a]/95 backdrop-blur-sm"
    >
      <div className="container-wide px-4 md:px-6 py-4 md:py-5">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-3 md:mb-4">
          Explore VisQuanta
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
          {hubs.map(({ label, path, icon: Icon }) => {
            const href = localeLink(path, locale);
            return (
              <li key={path}>
                <Link
                  href={href}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-3.5 py-2 sm:px-4 sm:py-2.5 text-sm font-medium text-white/85 transition-all hover:border-[#ff7404]/40 hover:bg-[#ff7404]/[0.08] hover:text-white"
                >
                  <Icon
                    className="h-4 w-4 shrink-0 text-[#ff7404] opacity-90 group-hover:opacity-100"
                    aria-hidden
                  />
                  <span className="whitespace-nowrap">{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
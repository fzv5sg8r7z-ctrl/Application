"use client";

import {
  Instagram,
  Youtube,
  Music2,
  Palette,
  ArrowUp,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const { socials } = siteConfig;

  return (
    <footer className="relative pb-10 pt-8">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-soft p-8 sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 right-10 h-56 w-56 rounded-full bg-flame/20 blur-3xl"
          />
          <div className="relative grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2.5">
                <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-flame text-ink shadow-glow">
                  <span className="font-display text-base font-black leading-none">A</span>
                </span>
                <span className="font-display text-lg font-bold text-bone">
                  {siteConfig.name}
                </span>
              </div>
              <p className="mt-5 max-w-sm text-sm text-bone/70">
                {siteConfig.footer.note}
              </p>
            </div>

            <div className="lg:col-span-3">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-bone/50">
                Navigation
              </div>
              <ul className="mt-4 flex flex-col gap-2.5">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-bone/80 transition-colors hover:text-flame"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-bone/50">
                Suivez le studio
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <SocialLink href={socials.instagram} icon={Instagram} label="Instagram" />
                <SocialLink href={socials.tiktok} icon={Music2} label="TikTok" />
                <SocialLink href={socials.youtube} icon={Youtube} label="YouTube" />
                <SocialLink href={socials.behance} icon={Palette} label="Behance" />
              </div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-6 inline-flex w-full items-center justify-between rounded-2xl border border-white/10 bg-ink px-4 py-3 text-sm font-medium text-bone hover:border-flame/40"
              >
                <span className="text-bone/60">Email</span>
                <span className="font-semibold text-bone">
                  {siteConfig.email}
                </span>
              </a>
            </div>
          </div>

          <div className="relative mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
            <div className="text-xs text-bone/60">{siteConfig.footer.rights}</div>
            <a
              href="#accueil"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-bone/80 transition-all hover:border-flame hover:text-flame"
            >
              Revenir en haut
              <ArrowUp size={14} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: LucideIcon;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-ink text-bone transition-all hover:border-flame hover:bg-flame hover:text-ink"
    >
      <Icon size={18} strokeWidth={1.75} />
    </a>
  );
}

"use client";

import { Circle, Hourglass, Aperture, ToggleRight, Film, Music2 } from "lucide-react";
import { siteConfig } from "@/config/site";

const ICONS = [Circle, Hourglass, Aperture, ToggleRight, Film, Music2];

export default function Trust() {
  const items = siteConfig.clients;
  const loop = [...items, ...items];

  return (
    <section className="relative">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-soft py-8 sm:py-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grain opacity-30"
          />
          <div className="grid items-center gap-6 px-6 sm:px-10 lg:grid-cols-[auto,1fr] lg:gap-10">
            <div className="text-xs font-semibold uppercase leading-snug tracking-[0.18em] text-bone/60 sm:text-sm">
              Ils nous font
              <br />
              confiance
            </div>

            <div className="mask-fade-r relative overflow-hidden">
              <div className="flex w-max items-center gap-10 animate-marquee sm:gap-14">
                {loop.map((label, i) => {
                  const Icon = ICONS[i % ICONS.length];
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-bone/80"
                    >
                      <Icon size={22} strokeWidth={1.75} />
                      <span className="whitespace-nowrap font-display text-base font-bold sm:text-lg">
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

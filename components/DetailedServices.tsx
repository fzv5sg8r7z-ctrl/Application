"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Video,
  Film,
  Share2,
  Compass,
  Plane,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const ICONS: Record<string, LucideIcon> = {
  Photo: Camera,
  Vidéo: Video,
  Montage: Film,
  "Réseaux sociaux": Share2,
  "Direction artistique": Compass,
  "Drone & captation aérienne": Plane,
};

export default function DetailedServices() {
  const items = siteConfig.detailedServices;

  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-wide">
        <div className="grid items-end gap-6 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Services détaillés</span>
            <h2 className="mt-5 section-title text-balance">
              Une expertise complète,
              <br className="hidden sm:block" />
              <span className="text-flame">de A à Z.</span>
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-bone/75">
            De l'idée au rendu final, AWESOME Visuel orchestre toutes les
            étapes pour livrer des contenus à fort impact visuel.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((service, i) => {
            const Icon = ICONS[service.title] ?? Camera;
            const isFeatured = i === 1;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: (i % 3) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-500 hover:-translate-y-1 ${
                  isFeatured
                    ? "border-flame/40 bg-flame-gradient text-bone shadow-glow"
                    : "border-white/10 bg-ink-soft hover:border-white/25 hover:bg-ink-muted"
                }`}
              >
                {isFeatured && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-ink/70 via-transparent to-transparent"
                  />
                )}

                <div className="relative flex items-center justify-between">
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                      isFeatured
                        ? "bg-bone text-ink"
                        : "bg-flame/10 text-flame"
                    }`}
                  >
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      isFeatured ? "text-bone/80" : "text-bone/40"
                    }`}
                  >
                    /0{i + 1}
                  </span>
                </div>

                <h3
                  className={`relative mt-8 font-display text-2xl font-bold leading-tight ${
                    isFeatured ? "text-bone" : "text-bone"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`relative mt-3 text-sm leading-relaxed ${
                    isFeatured ? "text-bone/85" : "text-bone/70"
                  }`}
                >
                  {service.description}
                </p>

                <ul className="relative mt-6 flex flex-col gap-2">
                  {service.points.map((p) => (
                    <li
                      key={p}
                      className={`flex items-center gap-2 text-sm ${
                        isFeatured ? "text-bone/85" : "text-bone/70"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isFeatured ? "bg-bone" : "bg-flame"
                        }`}
                      />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-bone/60">
                    Discutons-en
                  </span>
                  <a
                    href="#contact"
                    aria-label={`Discuter de ${service.title}`}
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45 ${
                      isFeatured ? "bg-bone text-ink" : "bg-white/10 text-bone"
                    }`}
                  >
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

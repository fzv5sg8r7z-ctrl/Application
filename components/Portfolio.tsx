"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Portfolio() {
  const items = siteConfig.portfolio;

  return (
    <section id="realisations" className="relative py-20 sm:py-28">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Réalisations</span>
            <h2 className="mt-5 section-title text-balance">
              Sélection de projets <span className="text-flame">récents.</span>
            </h2>
          </div>
          <a href="#contact" className="btn-ghost">
            Tout voir
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.a
              key={item.title}
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-soft ${
                i === 0 ? "sm:col-span-2 sm:row-span-1" : ""
              }`}
            >
              <div
                className={`relative ${
                  i === 0 ? "aspect-[16/10]" : "aspect-[4/5]"
                } overflow-hidden`}
              >
                <div
                  className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-tr from-ember/10 via-transparent to-flame/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top tag */}
                <div className="absolute left-4 top-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-ink/60 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-bone backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-flame" />
                    {item.category}
                  </span>
                </div>

                {/* Arrow */}
                <div className="absolute right-4 top-4 translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-flame text-ink shadow-glow">
                    <ArrowUpRight size={18} strokeWidth={2.5} />
                  </span>
                </div>

                {/* Bottom title */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <h3 className="font-display text-2xl font-bold leading-tight text-bone sm:text-3xl">
                    {item.title}
                  </h3>
                  <div className="mt-2 h-px w-12 bg-flame transition-all duration-500 group-hover:w-24" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

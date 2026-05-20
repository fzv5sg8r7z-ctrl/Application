"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function ShortServices() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.shortServices.map((service, i) => (
            <motion.a
              key={service.number}
              href="#realisations"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-soft p-6 transition-all duration-500 hover:-translate-y-1 hover:border-flame/40 hover:bg-ink-muted sm:p-7"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-flame/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex items-start justify-between">
                <span className="text-xs font-semibold text-flame">
                  #{service.number}
                </span>
                <span className="h-2 w-2 rounded-full bg-flame transition-all duration-500 group-hover:scale-150 group-hover:shadow-glow" />
              </div>

              <h3 className="mt-12 font-display text-xl font-bold leading-tight text-bone sm:text-2xl">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-bone/70">
                {service.description}
              </p>

              <div className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-[0.18em] text-bone/50 transition-colors group-hover:text-flame">
                Voir plus
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

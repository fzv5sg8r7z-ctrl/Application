"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function About() {
  const { about } = siteConfig;

  return (
    <section id="a-propos" className="relative py-20 sm:py-28">
      <div className="container-wide">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <span className="eyebrow">{about.eyebrow}</span>
            <h2 className="mt-5 section-title text-balance">{about.title}</h2>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {about.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 text-sm text-bone/85"
                >
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-flame/15 text-flame">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-lg leading-relaxed text-bone/80">{about.text}</p>
            <div className="mt-8 flex items-center gap-3">
              <a href={about.cta.href} className="btn-primary">
                {about.cta.label}
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-soft p-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-gradient-to-br from-flame to-ember text-xs font-bold text-bone"
                  >
                    {String.fromCharCode(64 + i)}
                  </span>
                ))}
              </div>
              <div>
                <div className="text-sm font-semibold text-bone">
                  Une équipe disponible & réactive
                </div>
                <div className="text-xs text-bone/60">
                  Réponse sous 24h · Devis offert
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

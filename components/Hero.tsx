"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section
      id="accueil"
      className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40"
    >
      {/* Background gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-40 left-1/2 h-[700px] w-[1200px] -translate-x-1/2 rounded-full bg-flame-gradient opacity-40 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-ember/20 via-flame/5 to-transparent" />
        <div className="absolute inset-0 bg-grain opacity-40" />
      </div>

      <div className="container-wide">
        {/* Hero card */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-flame-gradient p-6 shadow-card sm:p-10 lg:p-14">
          {/* Inner background image */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage: `url(${hero.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.42,
              mixBlendMode: "luminosity",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-tr from-ink/80 via-ember/30 to-flame/40"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-ink/70"
          />

          {/* Top row */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="pill"
            >
              <Sparkles size={14} className="text-flame-glow" />
              {hero.eyebrow}
            </motion.span>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="hidden items-center gap-2 sm:flex"
            >
              <a
                href={hero.secondaryCta.href}
                className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium text-bone backdrop-blur transition-all hover:border-white/40 hover:bg-white/10"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-bone text-ink">
                  <Play size={12} fill="currentColor" />
                </span>
                Showreel 2025 · 1:24
              </a>
            </motion.div>
          </div>

          {/* Main title */}
          <div className="mt-12 grid gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-8">
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={2}
                className="font-display text-[2.65rem] font-bold leading-[0.95] tracking-tight text-bone sm:text-6xl lg:text-[5.25rem]"
              >
                {hero.title.map((line, i) => (
                  <motion.span
                    key={i}
                    variants={fadeUp}
                    custom={2 + i * 0.4}
                    className="block text-balance"
                  >
                    {line}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            <div className="flex flex-col justify-end lg:col-span-4">
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={4}
                className="max-w-md text-pretty text-base text-bone/85 sm:text-lg"
              >
                {hero.description}
              </motion.p>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={5}
                className="mt-6 flex flex-wrap items-center gap-3"
              >
                <a href={hero.primaryCta.href} className="btn-primary">
                  {hero.primaryCta.label}
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </a>
                <a href={hero.secondaryCta.href} className="btn-ghost">
                  {hero.secondaryCta.label}
                </a>
              </motion.div>
            </div>
          </div>

          {/* Bottom stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={6}
            className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/15 pt-8 sm:grid-cols-4 lg:mt-16"
          >
            {hero.stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-xs font-semibold text-flame">
                  #{String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 font-display text-2xl font-bold text-bone sm:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 text-sm text-bone/70">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

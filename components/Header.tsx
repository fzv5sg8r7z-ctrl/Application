"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-wide">
        <div
          className={`flex items-center justify-between rounded-full border border-white/10 px-4 py-2.5 backdrop-blur-xl transition-all duration-500 sm:px-5 ${
            scrolled
              ? "bg-ink/80 shadow-card"
              : "bg-white/[0.03]"
          }`}
        >
          <a href="#accueil" className="group flex items-center gap-2.5">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl bg-flame text-ink shadow-glow">
              <span className="font-display text-base font-black leading-none">A</span>
              <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-full bg-ember ring-2 ring-ink" />
            </span>
            <span className="font-display text-base font-bold tracking-tight text-bone">
              {siteConfig.name}
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-bone/70 transition-colors hover:text-bone"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-bone px-4 py-2 text-sm font-semibold text-ink transition-all duration-300 hover:bg-flame hover:shadow-glow sm:inline-flex"
            >
              Me contacter
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-flame text-ink">
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </span>
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-bone lg:hidden"
              aria-label="Ouvrir le menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-3 rounded-3xl border border-white/10 bg-ink/95 p-3 backdrop-blur-xl lg:hidden">
            <nav className="flex flex-col">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-bone/80 transition-colors hover:bg-white/5 hover:text-bone"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-between rounded-2xl bg-flame px-4 py-3 text-base font-semibold text-ink"
              >
                Me contacter
                <ArrowUpRight size={18} />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, ArrowUpRight, Send, Check } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Contact() {
  const { contact, email, socials } = siteConfig;
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-ink-soft p-6 sm:p-10 lg:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-flame/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-ember/20 blur-3xl"
          />

          <div className="relative grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6"
            >
              <span className="eyebrow">{contact.eyebrow}</span>
              <h2 className="mt-5 section-title text-balance">
                {contact.title}
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-bone/80">
                {contact.description}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a href={`mailto:${email}`} className="btn-primary">
                  <Mail size={16} strokeWidth={2.5} />
                  Écrire un email
                </a>
                <a
                  href={socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  <Instagram size={16} strokeWidth={2.5} />
                  Instagram
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-ink p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-bone/50">
                    Email
                  </div>
                  <div className="mt-2 font-display text-base font-bold text-bone">
                    {email}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-ink p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-bone/50">
                    Localisation
                  </div>
                  <div className="mt-2 font-display text-base font-bold text-bone">
                    {siteConfig.location}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setTimeout(() => setSent(false), 4000);
              }}
            >
              <div className="rounded-3xl border border-white/10 bg-ink/80 p-6 backdrop-blur-xl sm:p-8">
                <div className="grid gap-5">
                  <Field label="Nom" name="name" placeholder="Votre nom" />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="vous@email.com"
                  />
                  <Field
                    label="Projet"
                    name="project"
                    placeholder="Aftermovie, clip, brand, etc."
                  />
                  <Field
                    label="Message"
                    name="message"
                    placeholder="Parlez-nous de votre vision…"
                    textarea
                  />

                  <button
                    type="submit"
                    disabled={sent}
                    className="group mt-2 inline-flex w-full items-center justify-between rounded-full bg-flame px-6 py-4 text-sm font-semibold text-ink shadow-glow transition-all duration-300 hover:bg-flame-bright hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-80"
                  >
                    <span className="flex items-center gap-2">
                      {sent ? (
                        <>
                          <Check size={16} strokeWidth={3} />
                          Merci, on vous répond vite
                        </>
                      ) : (
                        <>
                          <Send size={16} strokeWidth={2.5} />
                          Envoyer le message
                        </>
                      )}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-flame transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight size={16} strokeWidth={2.5} />
                    </span>
                  </button>
                </div>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
}) {
  const base =
    "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-bone placeholder:text-bone/40 transition-all duration-200 focus:border-flame/60 focus:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-flame/20";

  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-bone/60">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          required
          placeholder={placeholder}
          className={`${base} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          required
          placeholder={placeholder}
          className={base}
        />
      )}
    </label>
  );
}

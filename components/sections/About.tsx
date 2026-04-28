"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";
import { ABOUT } from "@/lib/constants";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section relative bg-brand-canvas overflow-hidden"
    >
      <div className="container grid lg:grid-cols-12 gap-14 items-start">
        {/* Left visual block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          {/* Engineering portrait */}
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-brand-deep">
            {/* Subtle blueprint underlay (visible behind transparent image edges) */}
            <div
              className="absolute inset-0 opacity-90"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #002B49 0%, #003a63 50%, #00A3E0 130%)",
              }}
            />
            <div className="absolute inset-0 blueprint opacity-25" />

            {/* Hala portrait */}
            <Image
              src="/images/hala-portrait.jpg"
              alt="האלה דראושה — מהנדסת מים מוסמכת, עם קסדת בנייה וגליל תוכניות"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-[center_top] mix-blend-luminosity hover:mix-blend-normal transition-[mix-blend-mode] duration-700"
            />
            {/* Color tint overlay — gives the deep-blue / cyan brand mood */}
            <div
              className="absolute inset-0 mix-blend-color"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,43,73,0.55) 0%, rgba(0,163,224,0.35) 100%)",
              }}
              aria-hidden
            />
            {/* Bottom gradient for legibility of credential card */}
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-brand-deep via-brand-deep/70 to-transparent pointer-events-none" />

            {/* Front sticker — credential */}
            <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-5">
              <p className="text-eyebrow text-brand-cyan-soft">רישוי הנדסי</p>
              <p className="mt-2 font-display text-lg font-bold text-white">
                רשומה בפנקס המהנדסים והאדריכלים
              </p>
              <p className="mt-1 text-xs text-white/70 font-mono">
                Reg. ENG · 2018
              </p>
            </div>
          </div>

          {/* Floating accent card */}
          <div className="hidden lg:block absolute -top-6 -left-6 rounded-2xl bg-white p-5 shadow-soft border border-brand-line max-w-[200px]">
            <Award className="w-6 h-6 text-brand-cyan" />
            <p className="mt-3 font-display text-2xl font-bold text-brand-deep">
              NFPA&nbsp;13
            </p>
            <p className="text-xs text-brand-muted mt-1">
              הסמכת תכנון ספרינקלרים
            </p>
          </div>
        </motion.div>

        {/* Right text block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <span className="eyebrow">אודות · האלה דראושה</span>
          <h2
            id="about-heading"
            className="mt-4 font-display text-display-lg text-brand-deep text-balance"
          >
            {ABOUT.title}
          </h2>

          <div className="mt-8 space-y-5 text-body text-brand-ink/85 max-w-2xl text-pretty">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Credentials list */}
          <ul className="mt-10 grid sm:grid-cols-2 gap-y-4 gap-x-6">
            {ABOUT.credentials.map((c, i) => (
              <li
                key={i}
                className="flex items-start gap-3 pb-3 border-b border-brand-line"
              >
                <BadgeCheck className="w-5 h-5 mt-0.5 text-brand-cyan flex-none" />
                <div>
                  <p className="text-sm font-semibold text-brand-deep">
                    {c.label}
                  </p>
                  <p className="text-xs text-brand-muted mt-0.5 font-mono">
                    {c.year}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

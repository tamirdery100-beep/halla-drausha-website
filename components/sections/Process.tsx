"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="section relative bg-brand-deep text-white overflow-hidden"
    >
      {/* Decorative gradient + grid */}
      <div className="absolute inset-0 bg-radial-spotlight pointer-events-none opacity-60" />
      <div className="absolute inset-0 blueprint opacity-10 pointer-events-none" />

      <div className="container relative">
        <div className="max-w-2xl">
          <span className="eyebrow text-brand-cyan-soft">תהליך · ארבעה שלבים</span>
          <h2
            id="process-heading"
            className="mt-4 font-display text-display-lg text-white text-balance"
          >
            מאפיון לקוח עד פיקוח עליון —
            <br />
            <span className="text-white/60">תהליך הנדסי מסודר, ללא הפתעות.</span>
          </h2>
        </div>

        {/* Timeline */}
        <ol className="mt-14 grid gap-8 lg:grid-cols-4 relative" role="list">
          {/* Connecting line */}
          <span
            aria-hidden
            className="hidden lg:block absolute right-7 left-7 top-7 h-px bg-gradient-to-l from-transparent via-brand-cyan/40 to-transparent"
          />
          {PROCESS_STEPS.map((step, i) => (
            <motion.li
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative"
            >
              {/* Number node */}
              <div className="relative z-10 flex items-center gap-3">
                <span className="grid place-items-center w-14 h-14 rounded-full bg-white text-brand-deep font-display font-black text-xl shadow-ring-cyan">
                  {step.id}
                </span>
                <span className="lg:hidden font-display text-xl font-bold text-white">
                  {step.title}
                </span>
              </div>

              {/* Title (desktop) */}
              <h3 className="hidden lg:block mt-6 font-display text-xl font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/65 max-w-xs">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

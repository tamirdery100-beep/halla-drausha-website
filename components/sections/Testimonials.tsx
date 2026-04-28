"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="section relative bg-white"
    >
      <div className="container">
        <div className="max-w-2xl">
          <span className="eyebrow">המלצות · לקוחות</span>
          <h2
            id="testimonials-heading"
            className="mt-4 font-display text-display-lg text-brand-deep text-balance"
          >
            למה אדריכלים, יזמים ורשויות
            <br />
            <span className="text-brand-muted">חוזרים לעבוד איתי שוב ושוב.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative rounded-2xl border border-brand-line bg-brand-canvas p-7 lg:p-8 flex flex-col"
            >
              <Quote
                className="w-7 h-7 text-brand-cyan opacity-80 rtl-flip"
                strokeWidth={1.5}
              />
              <blockquote className="mt-5 text-body text-brand-ink leading-relaxed flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-7 pt-6 border-t border-brand-line">
                <p className="font-display font-bold text-brand-deep">{t.name}</p>
                <p className="text-sm text-brand-muted mt-0.5">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

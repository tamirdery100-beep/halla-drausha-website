"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQ } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section bg-white"
    >
      <div className="container grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <span className="eyebrow">FAQ · שאלות נפוצות</span>
          <h2
            id="faq-heading"
            className="mt-4 font-display text-display-lg text-brand-deep text-balance"
          >
            יש לכם שאלה?
            <br />
            <span className="text-brand-muted">סביר להניח שכבר עניתי עליה.</span>
          </h2>
          <p className="mt-6 text-body text-brand-muted max-w-md">
            ולמה שלא מצאתם — צרו קשר ותקבלו תשובה ישירה ממני, לא מצ'אט-בוט,
            תוך פחות מ-12 שעות עבודה.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 text-brand-deep font-semibold link-underline"
          >
            שאלו אותי ישירות ←
          </a>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-brand-line divide-y divide-brand-line bg-brand-canvas/40">
            {FAQ.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="px-5 lg:px-7">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="w-full flex items-center justify-between gap-6 py-5 lg:py-6 text-start"
                  >
                    <span
                      className={cn(
                        "font-display text-lg lg:text-xl font-semibold transition-colors",
                        isOpen ? "text-brand-deep" : "text-brand-ink"
                      )}
                    >
                      {item.q}
                    </span>
                    <span
                      className={cn(
                        "grid place-items-center w-9 h-9 rounded-full border flex-none transition-all",
                        isOpen
                          ? "bg-brand-deep text-white border-brand-deep"
                          : "bg-white text-brand-deep border-brand-line"
                      )}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" strokeWidth={2.5} />
                      ) : (
                        <Plus className="w-4 h-4" strokeWidth={2.5} />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-body text-brand-muted leading-relaxed max-w-2xl">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

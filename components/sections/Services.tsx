"use client";

import { motion } from "framer-motion";
import { Check, ArrowLeft } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section relative bg-brand-canvas"
    >
      <div className="container">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">שירותים · חבילות הנדסיות</span>
            <h2
              id="services-heading"
              className="mt-4 font-display text-display-lg text-brand-deep text-balance"
            >
              שלוש דרכים לעבוד יחד —
              <br />
              <span className="text-brand-muted">מהבסיס המדויק ועד פרויקט מלא.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-body text-brand-muted max-w-md lg:ms-auto">
              כל חבילה כוללת בקרה כפולה, תקשורת ישירה איתי, ואחריות מלאה על
              עמידה בתקנות. בחרו את הרמה שמתאימה לסוג הפרויקט והיקפו.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={cn(
                "card-service flex flex-col",
                service.highlighted &&
                  "lg:-mt-6 ring-1 ring-brand-cyan/30 shadow-depth bg-gradient-to-b from-white to-brand-canvas"
              )}
            >
              {service.badge && (
                <span className="absolute -top-3 right-7 inline-flex items-center gap-1 rounded-full bg-brand-deep text-white px-3 py-1 text-[0.7rem] font-semibold tracking-wide">
                  ★ {service.badge}
                </span>
              )}

              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl font-bold text-brand-deep">
                  {service.name}
                </h3>
                <span className="text-xs font-mono text-brand-muted">
                  0{i + 1}
                </span>
              </div>

              <p className="mt-3 text-sm text-brand-muted leading-relaxed min-h-[3.5rem]">
                {service.blurb}
              </p>

              <div className="mt-6 pb-6 border-b border-brand-line">
                <p className="font-display text-3xl font-bold text-brand-deep">
                  {service.price}
                </p>
                <p className="text-xs text-brand-muted mt-1">{service.priceNote}</p>
              </div>

              <ul className="mt-6 space-y-3 flex-1" role="list">
                {service.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3 text-[0.95rem]">
                    <span
                      className={cn(
                        "mt-0.5 grid place-items-center w-5 h-5 rounded-full flex-none",
                        service.highlighted
                          ? "bg-brand-cyan text-white"
                          : "bg-brand-canvas text-brand-deep border border-brand-line"
                      )}
                    >
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    <span className="text-brand-ink/85">{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={cn(
                  "mt-8 inline-flex items-center justify-center gap-2 rounded-full py-3 px-5 text-sm font-semibold transition-all",
                  service.highlighted
                    ? "bg-brand-deep text-white hover:bg-brand-cyan"
                    : "bg-brand-canvas text-brand-deep hover:bg-brand-deep hover:text-white border border-brand-line"
                )}
              >
                {service.cta}
                <ArrowLeft className="w-4 h-4" />
              </a>
            </motion.article>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-10 text-center text-sm text-brand-muted">
          לא בטוחים איזו חבילה מתאימה?{" "}
          <a
            href="#contact"
            className="text-brand-deep font-semibold link-underline"
          >
            תאמו 30 דקות שיחת אפיון חינם
          </a>
        </p>
      </div>
    </section>
  );
}

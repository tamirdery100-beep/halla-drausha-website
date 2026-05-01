"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { DEVELOPERS } from "@/lib/constants";

/**
 * "יזמים שסומכים עלינו"
 * רצועת לוגו טיפוגרפיים — לוחיות נקיות עם שם החברה בפונט הדיספליי
 * (כשיגיעו קבצי לוגו אמיתיים, החלפה תהיה החלפת <span> ב-<Image> בלבד).
 *
 * משתמש ב:
 *   .section · .container · .eyebrow · .btn-primary  (טוקנים גלובליים)
 */
export default function TrustedDevelopers() {
  return (
    <section
      id="developers"
      aria-labelledby="developers-heading"
      className="section relative bg-white"
    >
      <div className="container">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">שותפים · יזמים מובילים</span>
            <h2
              id="developers-heading"
              className="mt-4 font-display text-display-lg text-brand-deep text-balance"
            >
              יזמים שסומכים עלינו —
              <br />
              <span className="text-brand-muted">
                בכל פרויקט, בכל היקף, בכל לוח זמנים.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-body text-brand-muted max-w-md lg:ms-auto">
              קבוצות יזמות, משרדי אדריכלות ותשתיות לאומיות בוחרות במשרד HDS לליווי
              הנדסי מלא — מהשלב הראשון של ההיתר ועד מסירת המבנה.
            </p>
          </div>
        </div>

        {/* Logo grid */}
        <ul
          role="list"
          className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {DEVELOPERS.map((dev, i) => (
            <motion.li
              key={dev.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: (i % 4) * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col items-center justify-center text-center
                         rounded-2xl border border-brand-line bg-brand-canvas/40
                         px-5 py-9 transition-all duration-500
                         hover:bg-white hover:border-brand-cyan/40 hover:-translate-y-0.5
                         hover:shadow-soft"
            >
              {/* small accent line — engineering tick */}
              <span
                aria-hidden
                className="block w-6 h-px bg-brand-line group-hover:bg-brand-cyan transition-colors duration-500"
              />
              {/* company name as a typographic logo plate */}
              <span
                className="mt-4 font-display text-lg lg:text-xl font-bold text-brand-muted
                           group-hover:text-brand-deep transition-colors duration-500
                           leading-tight"
              >
                {dev.name}
              </span>
              <span className="mt-2 text-[0.7rem] tracking-wider uppercase text-brand-muted/70 font-mono">
                {dev.meta}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <a href="#contact" className="btn-primary group">
            <span>התחילו פרויקט</span>
            <ArrowLeft
              className="w-4 h-4 transition-transform duration-500 group-hover:-translate-x-1"
              strokeWidth={2.4}
            />
          </a>
          <p className="text-sm text-brand-muted">
            או{" "}
            <a href="#projects" className="text-brand-deep font-semibold link-underline">
              צפו בפורטפוליו פרויקטים שהושלמו
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";

export default function TrustStrip() {
  return (
    <section
      aria-label="נתוני אמינות"
      className="relative -mt-1 bg-[#001b2e] text-white border-y border-white/5"
    >
      <div className="container py-10 lg:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative pe-6 lg:pe-10 border-s border-white/10 ps-6 lg:ps-10 first:border-s-0 first:ps-0"
            >
              <p className="font-display text-display-md font-bold text-white">
                {stat.value}
                <span className="text-brand-cyan-soft mr-1.5">·</span>
                <span className="text-white/85 text-2xl lg:text-3xl">
                  {stat.suffix}
                </span>
              </p>
              <p className="mt-2 text-sm text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Marquee strip — partner mention */}
        <div className="mt-12 -mx-6 overflow-hidden mask-fade-bottom">
          <div className="flex whitespace-nowrap animate-marquee gap-12 text-white/40 font-display text-xl">
            {[
              "מלון הירקון 1952",
              "רכבת ישראל",
              "מלון דומוס",
              "קבוצת אזורים",
              "שדה בנייה ופיתוח",
              "נחמני אדריכלים",
              "מלון הירקון 1952",
              "רכבת ישראל",
              "מלון דומוס",
              "קבוצת אזורים",
              "שדה בנייה ופיתוח",
              "נחמני אדריכלים",
            ].map((label, i) => (
              <span key={i} className="inline-flex items-center gap-12">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan/50" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

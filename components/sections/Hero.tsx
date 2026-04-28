"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowLeft, PlayCircle, ShieldCheck, Sparkles } from "lucide-react";

// Lazy-load the 3D — keeps first paint fast
const WaterFlow = dynamic(() => import("@/components/3d/WaterFlow"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-b from-[#001b2e] via-brand-deep to-[#001b2e]" />
  ),
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: 0.15 + i * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden bg-brand-deep text-white"
    >
      {/* 3D background */}
      <div className="absolute inset-0 -z-10">
        <WaterFlow />
      </div>

      {/* Atmospheric overlays */}
      <div className="absolute inset-0 -z-10 bg-radial-spotlight pointer-events-none" />
      <div className="absolute inset-0 -z-10 bg-noise opacity-[0.08] mix-blend-overlay pointer-events-none" />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,27,46,0) 0%, rgba(0,27,46,0.85) 70%, #001b2e 100%)",
        }}
      />

      {/* Content */}
      <div className="container relative pt-32 lg:pt-40 pb-24 grid lg:grid-cols-12 gap-10 items-end min-h-[100svh]">
        <div className="lg:col-span-8 xl:col-span-7">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="eyebrow text-brand-cyan-soft"
          >
            הנדסת מים · רישיון רשמי · מאז 2018
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-6 font-display text-display-xl text-white text-balance"
          >
            תכנון מערכות מים{" "}
            <span className="relative inline-block">
              <span className="relative z-10">תוך 48 שעות</span>
              <span
                aria-hidden
                className="absolute -inset-x-2 bottom-1.5 h-[0.55em] -z-0 bg-brand-cyan/30 rounded-sm"
              />
            </span>
            <span className="block mt-2 text-white/85 font-display font-medium text-display-lg">
              מאושר. מקצועי. ללא עיכובים.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-7 max-w-2xl text-body-lg text-white/75 text-pretty"
          >
            משרד הנדסה עצמאי בראשות האלה דראושה — מומחית לתכנון נספח סניטרי,
            ניקוז, כיבוי אש ופיקוח עליון. {""}
            <span className="text-white/95 font-semibold">150+ פרויקטים</span>{" "}
            למלונאות, תשתית, מסחר ומגורים.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a href="#contact" className="btn-primary group">
              <span>התחילו פרויקט</span>
              <ArrowLeft
                className="w-4 h-4 transition-transform duration-500 group-hover:-translate-x-1"
                strokeWidth={2.4}
              />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white/90 hover:text-white border border-white/15 hover:border-white/35 backdrop-blur transition-colors"
            >
              <PlayCircle className="w-5 h-5 text-brand-cyan-soft" />
              <span className="font-medium">צפו בפורטפוליו</span>
            </a>
          </motion.div>

          {/* Mini trust row */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/65"
          >
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-cyan-soft" />
              רישיון מתכנן רשום
            </span>
            <span className="inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-cyan-soft" />
              חברה באיגוד מהנדסי המים
            </span>
            <span className="hidden md:inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
              זמינה לפרויקטים חדשים
            </span>
          </motion.div>
        </div>

        {/* Right meta column — engineering coords */}
        <motion.aside
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={5}
          className="hidden lg:flex lg:col-span-4 xl:col-span-5 justify-end items-end"
        >
          <div className="glass rounded-2xl p-6 max-w-sm w-full">
            <p className="text-eyebrow text-brand-cyan-soft">חבילה מומלצת</p>
            <p className="mt-3 font-display text-2xl font-bold">Advanced</p>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">
              נספח סניטרי מלא, ניקוז וכיבוי אש לפרויקט מסחרי או מגורים. מסירה ב-48–72 שעות.
            </p>
            <div className="mt-5 flex items-center justify-between text-sm">
              <span className="text-white/60">לקוחות מרוצים</span>
              <span className="font-mono text-brand-cyan-soft">150+</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="text-white/60">שנות ניסיון</span>
              <span className="font-mono text-brand-cyan-soft">8</span>
            </div>
            <a
              href="#services"
              className="mt-5 inline-flex w-full justify-center items-center gap-2 rounded-full bg-white text-brand-deep py-2.5 text-sm font-semibold hover:bg-brand-cyan hover:text-white transition-colors"
            >
              לפירוט החבילות
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>
        </motion.aside>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/55 text-xs tracking-widest"
        aria-hidden
      >
        <span>SCROLL</span>
        <span className="block w-px h-10 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section bg-brand-canvas"
    >
      <div className="container">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">פורטפוליו · 2022–2024</span>
            <h2
              id="projects-heading"
              className="mt-4 font-display text-display-lg text-brand-deep text-balance"
            >
              פרויקטים נבחרים —
              <br />
              <span className="text-brand-muted">
                ממלונאות בוטיק ועד תשתיות לאומיות.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-body text-brand-muted max-w-md lg:ms-auto">
              דוגמאות מייצגות מתוך 150+ פרויקטים — בכל אחד מהם הצלחנו לעמוד בלוחות הזמנים,
              באישורי הרשויות ובאיכות התכנון ההנדסי.
            </p>
          </div>
        </div>

        {/* Grid: 2 × 2 — equal weight, editorial spacing */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.85,
                delay: (i % 2) * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-brand-deep text-white",
                "aspect-[4/3] lg:aspect-[16/11]"
              )}
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/55 to-transparent" />

              {/* Top tags */}
              <div className="absolute top-5 right-5 flex items-center gap-2">
                <span className="rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[0.7rem] font-semibold text-brand-deep tracking-wide">
                  {project.category}
                </span>
                <span className="rounded-full bg-black/30 backdrop-blur px-3 py-1 text-[0.7rem] font-mono text-white/90">
                  {project.year}
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                <p className="text-eyebrow text-brand-cyan-soft">{project.meta}</p>
                <h3 className="mt-2 font-display text-2xl lg:text-[1.75rem] font-bold leading-tight">
                  {project.name}
                </h3>
                <p className="mt-3 max-w-md text-sm text-white/75 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights row */}
                <ul className="mt-5 flex flex-wrap items-center gap-2">
                  {project.highlights.map((h, k) => (
                    <li
                      key={k}
                      className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80"
                    >
                      {h}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white link-underline"
                >
                  פרויקט דומה? בואו נדבר
                  <ArrowLeft className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

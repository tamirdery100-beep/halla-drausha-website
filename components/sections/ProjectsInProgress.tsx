"use client";

import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Building2, Layers, Users2 } from "lucide-react";
import { IN_PROGRESS_PROJECTS } from "@/lib/constants";

/**
 * "פרויקטים בתהליך / בשלבי תכנון"
 * שני כרטיסי נתונים מובנים — בלי תמונות, בעיצוב הקיים של card-service.
 * כל כרטיס: מיקום, סוג, היקף, שותפים.
 */
export default function ProjectsInProgress() {
  return (
    <section
      id="in-progress"
      aria-labelledby="in-progress-heading"
      className="section relative bg-brand-canvas"
    >
      {/* subtle blueprint backdrop — engineering signature */}
      <div className="absolute inset-0 blueprint opacity-[0.35] pointer-events-none" />

      <div className="container relative">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">בתהליך · על שולחן התכנון</span>
            <h2
              id="in-progress-heading"
              className="mt-4 font-display text-display-lg text-brand-deep text-balance"
            >
              פרויקטים בשלבי תכנון —
              <br />
              <span className="text-brand-muted">
                התחדשות עירונית בקנה מידה לאומי.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-body text-brand-muted max-w-md lg:ms-auto">
              משרד HDS מלווה פרויקטים רחבי היקף בתחום ההתחדשות העירונית בשיתוף
              פעולה עם חברות יזמות מובילות — מתכנון התשתיות הראשוני ועד אישור
              הרשויות והמסירה לדיירים.
            </p>
          </div>
        </div>

        {/* Cards — 2 wide cards on desktop */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {IN_PROGRESS_PROJECTS.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="card-service flex flex-col"
            >
              {/* Top row — status pill + sequence number */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-cyan/10 text-brand-deep px-3 py-1 text-[0.7rem] font-semibold tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                  בתכנון פעיל
                </span>
                <span className="text-xs font-mono text-brand-muted">
                  0{i + 1}
                </span>
              </div>

              {/* Location + address */}
              <h3 className="mt-6 font-display text-2xl lg:text-[1.65rem] font-bold text-brand-deep leading-tight">
                {project.location}
                <span className="block mt-1 text-base text-brand-muted font-sans font-medium">
                  {project.address}
                </span>
              </h3>

              {/* Structured data list */}
              <dl className="mt-7 grid grid-cols-1 gap-4 border-t border-brand-line pt-6">
                <DataRow
                  icon={<MapPin className="w-4 h-4" />}
                  label="מיקום"
                  value={`${project.location} · ${project.address}`}
                />
                <DataRow
                  icon={<Building2 className="w-4 h-4" />}
                  label="סוג פרויקט"
                  value={project.type}
                />
                <DataRow
                  icon={<Layers className="w-4 h-4" />}
                  label="היקף"
                  value={project.scope}
                />
                <DataRow
                  icon={<Users2 className="w-4 h-4" />}
                  label="שותפים"
                  value={project.partners.join(" · ")}
                />
              </dl>

              {/* Footer link */}
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-deep link-underline"
              >
                פרויקט דומה? בואו נדבר
                <ArrowLeft className="w-4 h-4" />
              </a>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <a href="#contact" className="btn-primary group">
            <span>התחילו פרויקט</span>
            <ArrowLeft
              className="w-4 h-4 transition-transform duration-500 group-hover:-translate-x-1"
              strokeWidth={2.4}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ----------------- internal -------------------- */

function DataRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="grid place-items-center w-8 h-8 rounded-full bg-brand-canvas border border-brand-line text-brand-cyan flex-none">
        {icon}
      </span>
      <div className="min-w-0">
        <dt className="text-[0.7rem] uppercase tracking-widest text-brand-muted font-mono">
          {label}
        </dt>
        <dd className="mt-0.5 text-[0.95rem] text-brand-ink/90 font-medium leading-snug">
          {value}
        </dd>
      </div>
    </div>
  );
}

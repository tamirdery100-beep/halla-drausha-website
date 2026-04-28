"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Droplet } from "lucide-react";
import { NAV_ITEMS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-brand-line"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container flex h-16 lg:h-20 items-center justify-between gap-6">
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-2.5 group"
          aria-label="עמוד הבית — האלה דראושה"
        >
          <span
            className={cn(
              "relative grid place-items-center w-9 h-9 rounded-full transition-colors",
              scrolled ? "bg-brand-deep" : "bg-white/10 backdrop-blur"
            )}
          >
            <Droplet
              className={cn(
                "w-4 h-4 transition-colors",
                scrolled ? "text-brand-cyan" : "text-white"
              )}
              strokeWidth={2.4}
            />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                "font-display text-[1.1rem] font-bold tracking-tight transition-colors",
                scrolled ? "text-brand-deep" : "text-white"
              )}
            >
              {SITE.name}
            </span>
            <span
              className={cn(
                "text-[0.7rem] mt-0.5 tracking-wider transition-colors",
                scrolled ? "text-brand-muted" : "text-white/70"
              )}
            >
              הנדסת מים מוסמכת
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="ניווט ראשי"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "px-3.5 py-2 rounded-full text-sm font-medium transition-colors",
                scrolled
                  ? "text-brand-ink hover:text-brand-deep hover:bg-brand-canvas"
                  : "text-white/85 hover:text-white hover:bg-white/10"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className={cn(
            "hidden lg:inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all",
            scrolled
              ? "bg-brand-deep text-white hover:bg-brand-deep-2"
              : "bg-white text-brand-deep hover:bg-brand-cyan hover:text-white"
          )}
        >
          התחילו פרויקט
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          className={cn(
            "lg:hidden grid place-items-center w-11 h-11 rounded-full transition-colors",
            scrolled
              ? "bg-brand-deep text-white"
              : "bg-white/10 backdrop-blur text-white"
          )}
          aria-label={open ? "סגור תפריט" : "פתח תפריט"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white border-t border-brand-line shadow-soft"
          >
            <nav className="container py-5 flex flex-col gap-1" aria-label="ניווט נייד">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-brand-ink hover:bg-brand-canvas"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 btn-primary w-full justify-center"
              >
                התחילו פרויקט
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

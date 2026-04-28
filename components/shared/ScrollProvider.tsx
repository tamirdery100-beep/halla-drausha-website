"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Global GSAP scroll choreography:
 *  - Headings split-style fade-in
 *  - Section eyebrows slide
 *  - Image parallax for projects
 * Respects prefers-reduced-motion.
 */
export default function ScrollProvider() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      // Headings — fade up + tiny scale
      gsap.utils.toArray<HTMLElement>("section h2").forEach((h) => {
        gsap.from(h, {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: h,
            start: "top 85%",
          },
        });
      });

      // Eyebrow labels — slide in from right (RTL natural)
      gsap.utils.toArray<HTMLElement>(".eyebrow").forEach((el) => {
        gsap.from(el, {
          x: 24,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        });
      });

      // Section vertical separators — pulse on enter
      gsap.utils.toArray<HTMLElement>(".section").forEach((sec) => {
        ScrollTrigger.create({
          trigger: sec,
          start: "top 70%",
          onEnter: () => sec.classList.add("section-active"),
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}

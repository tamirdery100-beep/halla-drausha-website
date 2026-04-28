"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowLeft, Clock } from "lucide-react";
import { SITE } from "@/lib/constants";

/* Authentic WhatsApp glyph */
function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M16.003 2.667C8.642 2.667 2.67 8.638 2.67 16c0 2.354.617 4.65 1.79 6.677L2.667 29.333l6.85-1.785A13.27 13.27 0 0 0 16.003 29.333c7.36 0 13.333-5.973 13.333-13.333S23.363 2.667 16.003 2.667Zm0 24a10.61 10.61 0 0 1-5.41-1.479l-.388-.23-4.064 1.06 1.084-3.964-.253-.408A10.59 10.59 0 0 1 5.336 16c0-5.882 4.785-10.667 10.667-10.667 5.882 0 10.667 4.785 10.667 10.667S21.885 26.667 16.003 26.667Zm5.86-7.985c-.32-.16-1.901-.938-2.196-1.046-.295-.107-.51-.16-.724.16-.214.321-.83 1.046-1.018 1.26-.187.214-.375.241-.696.08-.32-.16-1.354-.5-2.58-1.594a9.715 9.715 0 0 1-1.79-2.232c-.187-.32-.02-.493.14-.652.144-.144.32-.375.481-.562.16-.187.214-.32.32-.535.107-.214.054-.401-.027-.562-.08-.16-.723-1.745-.99-2.39-.262-.628-.527-.541-.724-.551-.187-.009-.4-.011-.616-.011-.214 0-.562.08-.857.401-.295.32-1.124 1.099-1.124 2.683 0 1.584 1.151 3.115 1.31 3.33.16.214 2.265 3.46 5.49 4.853.768.331 1.367.529 1.834.677.77.245 1.471.21 2.026.128.618-.092 1.901-.776 2.17-1.527.27-.75.27-1.394.187-1.527-.08-.134-.295-.214-.616-.375Z" />
    </svg>
  );
}

/**
 * Direct-contact section. No form — every CTA opens the visitor's native
 * app (phone dialer / mail client / WhatsApp) and is zero-maintenance.
 */

const WHATSAPP_NUMBER = "972502966869"; // ללא +, ללא 0 בהתחלה
const EMAIL_SUBJECT = "פנייה מהאתר — בקשת ייעוץ";
const EMAIL_BODY =
  "שלום האלה,\n\nמצאתי אותך דרך האתר וארצה להתייעץ על פרויקט.\n\nשם:\nחברה / משרד:\nסוג הפרויקט:\nשלב נוכחי:\nלוחות זמנים:\n\nתודה!";
const WHATSAPP_TEXT =
  "שלום האלה, אשמח להתייעץ על פרויקט תכנון מים — מצאתי אותך באתר.";

export default function Contact() {
  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
    EMAIL_SUBJECT
  )}&body=${encodeURIComponent(EMAIL_BODY)}`;
  const whatsapp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_TEXT
  )}`;
  const tel = `tel:${SITE.phone}`;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section relative bg-brand-deep text-white overflow-hidden"
    >
      {/* atmospheric layers */}
      <div className="absolute inset-0 bg-radial-spotlight opacity-70 pointer-events-none" />
      <div className="absolute inset-0 blueprint opacity-10 pointer-events-none" />

      <div className="container relative">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="eyebrow text-brand-cyan-soft">צרו קשר · התחילו פרויקט</span>
          <h2
            id="contact-heading"
            className="mt-4 font-display text-display-lg text-white text-balance"
          >
            יש לכם פרויקט?
            <br />
            <span className="text-white/60">
              דרך מהירה אחת מפרידה בינינו לתכנון מקצועי.
            </span>
          </h2>
          <p className="mt-6 text-body text-white/70 max-w-xl text-pretty">
            שיחת אפיון של 30 דקות — חינם, ללא התחייבות. בחרו את הערוץ
            הנוח לכם ואחזור אליכם תוך 12 שעות עבודה.
          </p>
        </div>

        {/* Three direct-contact cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          <ContactCard
            href={whatsapp}
            external
            icon={<WhatsAppIcon className="w-5 h-5" />}
            channel="WhatsApp"
            value={SITE.phoneDisplay}
            description="הדרך המהירה ביותר — מענה מהיום ועד הערב."
            whatsapp
          />
          <ContactCard
            href={tel}
            icon={<Phone className="w-5 h-5" />}
            channel="שיחת טלפון"
            value={SITE.phoneDisplay}
            description="ימים א׳–ה׳ · 09:00–18:00"
          />
          <ContactCard
            href={mailto}
            icon={<Mail className="w-5 h-5" />}
            channel="אימייל"
            value={SITE.email}
            description="לפניות מפורטות עם תוכניות מצורפות."
            ltrValue
          />
        </div>

        {/* Sub strip — service area + response time */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 max-w-3xl">
          <InfoLine
            icon={<MapPin className="w-4 h-4" />}
            label="אזור שירות"
            value={SITE.serviceArea}
          />
          <InfoLine
            icon={<Clock className="w-4 h-4" />}
            label="זמן תגובה"
            value="עד 12 שעות עבודה · מענה דחוף בטלפון"
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------- Components -------------------- */

function ContactCard({
  href,
  icon,
  channel,
  value,
  description,
  external,
  whatsapp,
  ltrValue,
}: {
  href: string;
  icon: React.ReactNode;
  channel: string;
  value: string;
  description: string;
  external?: boolean;
  whatsapp?: boolean;
  ltrValue?: boolean;
}) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group relative block rounded-2xl p-7 lg:p-8 transition-all duration-500 bg-white/[0.04] border border-white/10 text-white hover:bg-white/[0.07] hover:border-brand-cyan/40 hover:-translate-y-1"
    >
      {/* Top row: icon + arrow */}
      <div className="flex items-start justify-between">
        <span
          className={`grid place-items-center w-12 h-12 rounded-full transition-transform duration-500 group-hover:scale-110 ${
            whatsapp
              ? "bg-[#25D366] text-white shadow-[0_8px_22px_-6px_rgba(37,211,102,0.55)]"
              : "bg-white/10 text-brand-cyan-soft"
          }`}
        >
          {icon}
        </span>
        <ArrowLeft className="w-5 h-5 transition-transform duration-500 group-hover:-translate-x-1 text-white/60" />
      </div>

      {/* Channel name */}
      <p className="mt-7 text-eyebrow !text-brand-cyan-soft">{channel}</p>

      {/* Big value */}
      <p
        dir={ltrValue ? "ltr" : undefined}
        className="mt-2 font-display text-2xl lg:text-[1.65rem] font-bold leading-tight break-all text-white"
      >
        {value}
      </p>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-white/65">
        {description}
      </p>
    </motion.a>
  );
}

function InfoLine({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4 border-t border-white/10 pt-5">
      <span className="grid place-items-center w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 text-brand-cyan-soft flex-none">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-widest text-white/55">
          {label}
        </p>
        <p className="mt-1 text-base text-white/90 leading-snug">{value}</p>
      </div>
    </div>
  );
}

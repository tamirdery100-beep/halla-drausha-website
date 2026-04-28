import { Droplet, Mail, Phone, MapPin, Instagram } from "lucide-react";
import { NAV_ITEMS, SITE } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-brand-deep text-white/80 overflow-hidden">
      {/* Decorative top hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-brand-cyan/60 to-transparent" />
      {/* Decorative blueprint grid */}
      <div className="absolute inset-0 blueprint opacity-[0.18] pointer-events-none" />

      <div className="container relative pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid place-items-center w-10 h-10 rounded-full bg-white/10">
                <Droplet className="w-[18px] h-[18px] text-brand-cyan" strokeWidth={2.4} />
              </span>
              <span className="font-display text-2xl font-bold text-white">
                {SITE.name}
              </span>
            </div>
            <p className="mt-5 text-base leading-relaxed text-white/70 max-w-md">
              משרד הנדסת מים מוסמך, מתמחה בתכנון מערכות מים, ניקוז וכיבוי אש לפרויקטים
              יזמיים, ציבוריים ותעשייתיים — בכל רחבי הארץ.
            </p>
            <div className="mt-7">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram — ${SITE.instagramHandle}`}
                className="group relative inline-flex items-center gap-3 rounded-full bg-white/5 border border-white/10 pe-5 ps-1.5 py-1.5 transition-all duration-300 hover:border-white/30 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_rgba(221,42,123,0.35)]"
              >
                {/* Gradient icon disc — always shows Instagram brand colors */}
                <span
                  className="relative grid place-items-center w-11 h-11 rounded-full text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)] transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 110%, #FEDA77 0%, #F58529 18%, #DD2A7B 45%, #8134AF 70%, #515BD4 100%)",
                  }}
                >
                  <Instagram
                    className="w-[20px] h-[20px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]"
                    strokeWidth={2}
                  />
                </span>
                <span
                  className="text-sm font-medium text-white transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #FEDA77 0%, #DD2A7B 50%, #515BD4 100%)",
                  }}
                  dir="ltr"
                >
                  {SITE.instagramHandle}
                </span>
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div className="lg:col-span-3">
            <p className="text-eyebrow text-brand-cyan/90">ניווט</p>
            <ul className="mt-5 space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-white/75 hover:text-white link-underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <p className="text-eyebrow text-brand-cyan/90">יצירת קשר</p>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-brand-cyan flex-none" />
                <a href={`tel:${SITE.phone}`} className="hover:text-white">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-brand-cyan flex-none" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white break-all">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-brand-cyan flex-none" />
                <span>{SITE.serviceArea}</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-white/10" />

        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-4 text-sm text-white/55">
          <p>© {year} {SITE.name} · כל הזכויות שמורות.</p>
          <p className="font-mono text-xs tracking-wide">
            רישוי הנדסי · מס׳ רישום בפנקס המהנדסים
          </p>
        </div>
      </div>
    </footer>
  );
}

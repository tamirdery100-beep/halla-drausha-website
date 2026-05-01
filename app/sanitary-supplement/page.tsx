import type { Metadata } from "next";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { SANITARY_PAGE, SITE } from "@/lib/constants";
import { ArrowLeft, CheckCircle2, FileCheck2, Workflow, Banknote } from "lucide-react";

export const metadata: Metadata = {
  title: SANITARY_PAGE.metaTitle,
  description: SANITARY_PAGE.metaDescription,
  keywords: [
    "נספח סניטרי",
    "אישור תאגיד מים",
    "תכנון מערכות מים",
    "היתר בנייה מים וביוב",
    "ניקוז",
    "תכנון ביוב",
    "האלה דראושה",
  ],
  alternates: {
    canonical: `${SITE.url}/sanitary-supplement`,
  },
  openGraph: {
    title: SANITARY_PAGE.metaTitle,
    description: SANITARY_PAGE.metaDescription,
    url: `${SITE.url}/sanitary-supplement`,
    type: "article",
    locale: "he_IL",
  },
};

export default function SanitarySupplementPage() {
  const { hero, whatIsIt, process, cost } = SANITARY_PAGE;

  return (
    <>
      <Navigation />
      <main id="main">
        {/* ============================ Hero ============================ */}
        <section
          aria-labelledby="sanitary-hero-heading"
          className="relative bg-brand-deep text-white overflow-hidden pt-32 lg:pt-40 pb-20 lg:pb-28"
        >
          <div className="absolute inset-0 bg-radial-spotlight opacity-70 pointer-events-none" />
          <div className="absolute inset-0 blueprint opacity-10 pointer-events-none" />

          <div className="container relative">
            <div className="max-w-3xl">
              <span className="eyebrow text-brand-cyan-soft">{hero.eyebrow}</span>
              <h1
                id="sanitary-hero-heading"
                className="mt-5 font-display text-display-xl text-white text-balance"
              >
                {hero.title}
              </h1>
              <p className="mt-7 text-body-lg text-white/75 max-w-2xl text-pretty">
                {hero.intro}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a href="/#contact" className="btn-primary group">
                  <span>התחילו פרויקט</span>
                  <ArrowLeft
                    className="w-4 h-4 transition-transform duration-500 group-hover:-translate-x-1"
                    strokeWidth={2.4}
                  />
                </a>
                <a
                  href="/#services"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white/90 hover:text-white border border-white/15 hover:border-white/35 backdrop-blur transition-colors"
                >
                  <span className="font-medium">חבילות שירות</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ====================== מה זה נספח סניטרי? ====================== */}
        <section
          aria-labelledby="what-heading"
          className="section bg-brand-canvas"
        >
          <div className="container grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="eyebrow">חלק מהותי בהיתר</span>
              <h2
                id="what-heading"
                className="mt-4 font-display text-display-lg text-brand-deep text-balance"
              >
                {whatIsIt.title}
              </h2>
              <div className="hidden lg:block mt-8 rounded-2xl border border-brand-line bg-white p-6 shadow-soft">
                <FileCheck2 className="w-6 h-6 text-brand-cyan" />
                <p className="mt-3 font-display text-2xl font-bold text-brand-deep">
                  100% אישור
                </p>
                <p className="mt-1 text-sm text-brand-muted">
                  כל התוכניות שמסרנו עברו אישור תאגיד המים והרשות.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 text-body text-brand-ink/85 max-w-2xl text-pretty">
              {whatIsIt.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              <ul className="mt-8 grid gap-3">
                {whatIsIt.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[0.95rem] text-brand-ink/90"
                  >
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 text-brand-cyan flex-none"
                      strokeWidth={2.2}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ====================== תהליך קבלת אישור ====================== */}
        <section
          aria-labelledby="process-heading"
          className="section relative bg-white"
        >
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <span className="eyebrow">תהליך · שלב אחר שלב</span>
                <h2
                  id="process-heading"
                  className="mt-4 font-display text-display-lg text-brand-deep text-balance"
                >
                  {process.title}
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-body text-brand-muted max-w-md lg:ms-auto">
                  {process.intro}
                </p>
              </div>
            </div>

            <ol
              role="list"
              className="mt-14 grid gap-6 md:grid-cols-3"
            >
              {process.steps.map((step) => (
                <li
                  key={step.n}
                  className="card-service flex flex-col"
                >
                  <div className="flex items-center gap-3">
                    <span className="num-pill !w-9 !h-9 text-sm">{step.n}</span>
                    <Workflow className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-brand-deep leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-brand-muted leading-relaxed">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* =========================== עלות =========================== */}
        <section
          aria-labelledby="cost-heading"
          className="section bg-brand-canvas"
        >
          <div className="container grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="eyebrow">תמחור · שקיפות מלאה</span>
              <h2
                id="cost-heading"
                className="mt-4 font-display text-display-lg text-brand-deep text-balance"
              >
                {cost.title}
              </h2>
              <Banknote className="hidden lg:block mt-10 w-12 h-12 text-brand-cyan" />
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-5 text-body text-brand-ink/85 max-w-2xl text-pretty">
                {cost.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-brand-line bg-white p-7 lg:p-8 shadow-soft">
                <p className="text-eyebrow text-brand-cyan">צעד הבא</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-brand-deep">
                  שיחת אפיון של 30 דקות — חינם
                </h3>
                <p className="mt-3 text-sm text-brand-muted leading-relaxed max-w-md">
                  קבלו הצעת מחיר מדויקת, לוח זמנים והבנה ברורה של מה נדרש —
                  בלי התחייבות.
                </p>
                <a
                  href="/#contact"
                  className="mt-6 btn-primary group"
                >
                  <span>התחילו פרויקט</span>
                  <ArrowLeft
                    className="w-4 h-4 transition-transform duration-500 group-hover:-translate-x-1"
                    strokeWidth={2.4}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

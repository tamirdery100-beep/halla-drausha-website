# claude.md — חוקי פרויקט "האלה דראושה"

> מסמך זה מגדיר את כללי האב של הפרויקט. כל קוד, תוכן ועיצוב חייבים להיות בהתאמה לכללים אלה.

---

## 1. זהות הפרויקט

- **שם**: האתר הרשמי של האלה דראושה (Hala Drausha)
- **תחום**: הנדסת מים מוסמכת — תכנון מערכות מים, נספח סניטרי, ניקוז, כיבוי אש ופיקוח עליון
- **קהל יעד**: אדריכלים, יזמים, קבלנים, רשויות מקומיות
- **טאגליין ראשי**: "תכנון מערכות מים תוך 48 שעות — מאושר, מקצועי וללא עיכובים"

---

## 2. סטאק טכנולוגי (Tech Stack)

| תחום | טכנולוגיה |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Styling | Tailwind CSS |
| Components | Shadcn UI |
| Animation | GSAP + ScrollTrigger, Framer Motion |
| 3D | Three.js / Spline (אפקט "זרימת מים" ב-Hero) |
| Fonts | Google Fonts: `Assistant` (גוף), `Frank Ruhl Libre` (כותרות) |
| Icons | Lucide React |

---

## 3. שפה וכיוונון

- כל האתר בעברית, RTL מלא (`dir="rtl"`, `lang="he"`).
- ל-`<html>` יש להוסיף `lang="he" dir="rtl"`.
- ל-Tailwind להוסיף תוסף `tailwindcss-rtl` או להשתמש ב-logical properties (`ms-`, `me-`, `ps-`, `pe-`).
- מספרים, אחוזים ושנים מוצגים בספרות מערביות (2024, 48 שעות, 150+).

---

## 4. פלטת צבעים (Brand Palette)

מבוסס על שפה הנדסית-מקצועית. **אסור** להשתמש בצבעי ברירת מחדל קרם/כתום של AI.

| תפקיד | HEX | שם פנימי |
|---|---|---|
| ראשי | `#002B49` | `brand-deep` (כחול עמוק — אמינות, הנדסה) |
| מבטא | `#00A3E0` | `brand-cyan` (תכלת טכני — מים, חדשנות) |
| רקע נקי | `#F8FAFC` | `brand-canvas` |
| טקסט | `#0B1220` | `brand-ink` |
| טקסט משני | `#475569` | `brand-muted` |
| גבול עדין | `#E2E8F0` | `brand-line` |
| הצלחה | `#10B981` | `brand-success` |

**שימוש בגרדיאנטים**: רק עדינים, מ-`brand-deep` ל-`brand-cyan` באלמנטים ספציפיים (Hero overlay, CTA hover).

---

## 5. טיפוגרפיה

- **כותרות (H1–H3)**: `Frank Ruhl Libre`, מודגש (700/900), טראקינג -0.02em.
- **גוף הטקסט**: `Assistant`, רגיל (400) ובינוני (500/600).
- **גודלי בסיס**:
  - H1: clamp(2.5rem, 5vw, 4.5rem)
  - H2: clamp(2rem, 3.5vw, 3rem)
  - גוף: 1.0625rem (17px), line-height 1.7

---

## 6. עקרונות עיצוב — מניעת "AI Slop"

1. **בלי מראה Bootstrap גנרי**: ללא קלפים סטנדרטיים עם shadow-md אחיד וכפתורים עגולים זהים.
2. **רשת עריכתית (Editorial Grid)**: שימוש ב-12 עמודות עם א-סימטריה מכוונת.
3. **שילוב טיפוגרפי**: כותרות seriff דקיקות + גוף sans נקי (קונטרסט אדריכלי).
4. **Whitespace נדיב**: padding אנכי 96–160px בין סקציות בדסקטופ.
5. **אנימציה תכליתית**: כל אנימציה משרתת קריאות (reveal-on-scroll), אף פעם לא קישוט.
6. **תמונות אמיתיות**: רנדורים הנדסיים, תוכניות AutoCAD מטושטשות ברקע, צילומי שטח — לא stock generic.

---

## 7. מבנה האתר (Information Architecture)

1. **Hero** — 3D water flow + טאגליין + CTA כפול (התחל פרויקט / צפה בפורטפוליו)
2. **Trust strip** — "8 שנות ניסיון · 150+ לקוחות · 48 שעות תכנון"
3. **שירותים** — חבילות Pro Project / Advanced / Essential
4. **תהליך עבודה** — 4 שלבים (פגישה → אפיון → תכנון → מסירה ופיקוח)
5. **פרויקטים נבחרים** — מלון הירקון (1952), רכבת ישראל חיפה, מלון דומוס ת"א
6. **המלצות** — 3 ציטוטים נבחרים
7. **אודות האלה** — ביוגרפיה קצרה, רישוי, חברות באיגוד
8. **שאלות נפוצות** — Accordion
9. **יצירת קשר** — טופס + פרטים + מפה
10. **Footer** — תפריט, רישוי מס' רישום הנדסי, רשתות, קרדיט

---

## 8. נגישות (WCAG 2.1 AA)

- ניגודיות מינימלית 4.5:1 לטקסט גוף, 3:1 לכותרות גדולות.
- כל תמונה עם `alt` תיאורי בעברית.
- ניווט מקלדת מלא (focus-visible מודגש בתכלת `#00A3E0`).
- `prefers-reduced-motion` מבוטל את אנימציות ה-3D וה-GSAP.
- Skip-link לתוכן הראשי בראש הדף.
- כותרות בהיררכיה תקינה (H1 אחד בלבד לדף).

---

## 9. רספונסיביות

| Breakpoint | רוחב |
|---|---|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

- Mobile-first.
- ב-mobile: 3D מוחלף ב-poster image עם מעבר עדין.
- תפריט המבורגר מתחת ל-`md`.

---

## 10. ביצועים

- Lighthouse target: **95+** בכל ארבעת הציונים.
- תמונות ב-`next/image` עם `priority` רק ל-LCP.
- פונטים ב-`next/font` עם `display: swap` ו-preload.
- 3D נטען עם `dynamic import` ו-`ssr:false`.
- Bundle ראשון מתחת ל-200KB JS.

---

## 11. מבנה תיקיות

```
האלה דראושה אתר/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── (marketing)/
│       ├── about/page.tsx
│       ├── services/page.tsx
│       ├── projects/page.tsx
│       └── contact/page.tsx
├── components/
│   ├── ui/              # shadcn primitives
│   ├── sections/        # Hero, Services, Projects ...
│   ├── 3d/              # WaterFlow scene
│   └── shared/          # Nav, Footer, Buttons
├── lib/
│   ├── utils.ts
│   └── constants.ts     # תוכן עברי (services, projects)
├── public/
│   ├── images/
│   └── fonts/
├── styles/
│   └── tokens.css
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

---

## 12. כללי קוד

- TypeScript strict, ללא `any`.
- שמות קבצים: `kebab-case`. שמות קומפוננטות: `PascalCase`.
- כל קומפוננטת סקציה — קובץ נפרד עם `"use client"` רק בעת הצורך (אנימציות / state).
- כל הטקסטים בעברית מרוכזים ב-`lib/constants.ts` (מאפשר i18n עתידי).
- ללא `console.log` בקוד מסירה.

---

## 13. סדר עבודה (Workflow)

1. ✅ יצירת `claude.md` (קובץ זה)
2. ⏳ הצגת 3 כיוונים עיצוביים — בחירת המשתמש
3. ⏳ הקמת תשתית Next.js + Tailwind + Shadcn
4. ⏳ בניית design tokens ו-globals
5. ⏳ פיתוח Hero + 3D water flow
6. ⏳ סקציות תוכן (שירותים, פרויקטים, אודות, קשר)
7. ⏳ בדיקת נגישות + רספונסיביות
8. ⏳ Screenshot loop לכיוונון ויזואלי
9. ⏳ אופטימיזציה ו-Lighthouse audit

---

*עודכן: 26.04.2026*

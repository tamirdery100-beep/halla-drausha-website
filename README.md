# האלה דראושה — אתר רשמי

> אתר תדמית פרימיום בעברית למשרד הנדסת מים של האלה דראושה.
> Next.js 14 (App Router) · Tailwind · Three.js · GSAP · Framer Motion.

---

## התקנה והרצה מקומית

```bash
# 1. התקנת תלויות
npm install

# 2. הרצה במצב פיתוח (http://localhost:3000)
npm run dev

# 3. בנייה לפרודקשן
npm run build
npm run start
```

---

## יצירת קשר באתר

סקציית "צרו קשר" עובדת בלי שרת ובלי תלויות — שלושה כרטיסים שפותחים ישירות
את אפליקציית הברירת-מחדל של המבקר:

- **WhatsApp** — `wa.me` עם הודעת פתיחה מוכנה.
- **טלפון** — קישור `tel:` (פותח חייגן במובייל, יישומון חיוג בדסקטופ).
- **אימייל** — קישור `mailto:` עם נושא וגוף מוכנים.

לעדכון מספר WhatsApp או נוסחים — `components/sections/Contact.tsx`,
פסקת הקבועים בראש הקובץ.

---

## דרישות סביבה

- Node.js 18.17+ (מומלץ 20 LTS)
- npm 9+ או pnpm 8+

---

## מבנה התיקייה

```
.
├── app/
│   ├── layout.tsx          # RTL, פונטים עבריים, SEO meta
│   ├── page.tsx            # הרכבת כל הסקציות
│   └── globals.css         # design tokens + utility classes
├── components/
│   ├── 3d/
│   │   └── WaterFlow.tsx   # Three.js liquid sphere — Hero
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── TrustStrip.tsx
│   │   ├── Services.tsx
│   │   ├── Process.tsx
│   │   ├── Projects.tsx
│   │   ├── Testimonials.tsx
│   │   ├── About.tsx
│   │   ├── Faq.tsx
│   │   └── Contact.tsx
│   └── shared/
│       ├── Navigation.tsx
│       ├── Footer.tsx
│       └── ScrollProvider.tsx  # GSAP scroll choreography
├── lib/
│   ├── constants.ts         # כל הטקסט העברי (i18n-ready)
│   └── utils.ts
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
└── claude.md                # חוקי הפרויקט המלאים
```

---

## עיצוב ושפה ויזואלית

נבחר כיוון **Liquid Precision**:

- **פלטה**: כחול עמוק `#002B49`, תכלת טכני `#00A3E0`, קנבס `#F8FAFC`
- **טיפוגרפיה**: `Frank Ruhl Libre` לכותרות, `Assistant` לגוף
- **3D**: כדור נוזלי מעוות (icosahedron + MeshDistortMaterial) עם חלקיקים מסלוליים
- **תנועה**: GSAP scroll-triggered + Framer Motion להופעות מקומיות
- **RTL מלא** עם logical properties (`ms-`, `pe-`, etc.)

ראו פירוט מלא ב-[`claude.md`](./claude.md).

---

## נגישות

- WCAG 2.1 AA: ניגודיות 4.5:1+ לטקסט גוף
- Skip-link לתוכן הראשי
- ניווט מקלדת מלא עם `focus-visible` בטון תכלת
- `prefers-reduced-motion` מבוטל את ה-3D וה-GSAP
- `aria-labelledby` בכל סקציה, `aria-expanded` ב-FAQ ובתפריט נייד
- Alt עברי לכל תמונה

---

## התאמות שנותרו לפני עליית פרודקשן

1. **שמירת תמונת הפורטרט של האלה** ב-`public/images/hala-portrait.jpg` (כרגע יש placeholder).
2. **החלפת תמונות הפרויקטים** ב-`lib/constants.ts` בצילומים אמיתיים.
3. **הוספת `robots.txt` ו-`sitemap.xml`** (אפשר עם `next-sitemap`).
4. **חיבור Analytics** (Plausible / GA4).
5. **Lighthouse audit** — היעד 95+ בכל ארבעת הציונים.

### פרטי קשר עדכניים (מוטמעים בקוד)

- טלפון: 050-296-6869
- אימייל: Halla-dr@hotmail.com
- אזור שירות: כל הארץ (פגישות בזום או באתר הפרויקט)

---

## פקודות שימושיות

```bash
npm run lint        # בדיקת ESLint
npx next info       # מידע סביבה לדיבוג
```

---

© האלה דראושה · כל הזכויות שמורות.

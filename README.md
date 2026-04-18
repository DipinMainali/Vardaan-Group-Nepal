# Vardaan Group — Frontend-Only Corporate Website

Modern, image-rich corporate website for **Vardaan Group**, built as a **pure frontend experience** with no backend/API/database/auth integration.

Built with **Next.js 14** (App Router), **TypeScript**, and **Tailwind CSS**.

---

## What this project now includes

- Modern homepage with **large content grids** and high-impact imagery
- Public pages for About, Businesses, and Contact
- Frontend-only admin preview pages (`/admin`) for UI prototyping
- Responsive layouts and reusable UI components
- Zero backend coupling (no auth, no database, no server API routes)

---

## Tech Stack

| Category         | Technology                         |
| ---------------- | ---------------------------------- |
| Framework        | Next.js 14 (App Router)            |
| Language         | TypeScript (strict mode)           |
| Styling          | Tailwind CSS                       |
| UI Components    | Radix UI + CVA (shadcn/ui pattern) |
| Form Handling    | React Hook Form + Zod              |
| State Management | Zustand                            |

---

## Run locally

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Open: `http://localhost:3000`

---

## Environment variables

This frontend build only uses public display values in `.env`:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_CONTACT_PHONE`

No private credentials are required.

---

## Scripts

| Script | Command         | Description              |
| ------ | --------------- | ------------------------ |
| Dev    | `npm run dev`   | Start development server |
| Build  | `npm run build` | Create production build  |
| Start  | `npm start`     | Start production server  |
| Lint   | `npm run lint`  | Run ESLint               |

---

## Notes

- Former backend modules (API routes, authentication, Prisma/database wiring) were intentionally removed.
- Admin pages are now **frontend preview modules** with local demo state only.

---

## License

Private — All rights reserved. © Vardaan Group.

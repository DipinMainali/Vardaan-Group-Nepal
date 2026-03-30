# Folder Structure Documentation

## Vardaan Group Website — Project Organization

```
vardaan-group-website/
├── app/                          # Next.js App Router (pages & API)
│   ├── layout.tsx                # Root layout (Header + Footer)
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles + Tailwind directives
│   │
│   ├── about/
│   │   └── page.tsx              # About Us page
│   │
│   ├── businesses/
│   │   ├── page.tsx              # Business index (all verticals)
│   │   ├── travels/
│   │   │   └── page.tsx          # Vardaan Travels & Holidays
│   │   ├── furnishings/
│   │   │   └── page.tsx          # Vardaan Furnishings
│   │   ├── hotels/
│   │   │   └── page.tsx          # Vardaan Hotels & Banquets
│   │   └── builders/
│   │       └── page.tsx          # Vardaan Builders & Developers
│   │
│   ├── contact/
│   │   ├── page.tsx              # Contact page
│   │   └── contact-form.tsx      # Client-side form component
│   │
│   ├── admin/
│   │   ├── layout.tsx            # Admin layout (auth guard + sidebar)
│   │   ├── page.tsx              # Dashboard overview
│   │   ├── login/
│   │   │   └── page.tsx          # Admin login
│   │   ├── leads/
│   │   │   └── page.tsx          # Lead/query management
│   │   ├── content/
│   │   │   └── page.tsx          # CMS content editor
│   │   ├── team/
│   │   │   └── page.tsx          # Team member CRUD
│   │   └── settings/
│   │       └── page.tsx          # Admin settings
│   │
│   └── api/
│       ├── auth/
│       │   └── [...nextauth]/
│       │       └── route.ts      # NextAuth handler
│       ├── contact/
│       │   └── route.ts          # Contact form API (POST)
│       ├── leads/
│       │   └── route.ts          # Lead management (GET, PATCH)
│       ├── content/
│       │   └── route.ts          # CMS content (GET, PUT)
│       └── team/
│           └── route.ts          # Team CRUD (GET, POST, PUT, DELETE)
│
├── components/
│   ├── layout/
│   │   ├── header.tsx            # Main site header + navigation
│   │   └── footer.tsx            # Site footer
│   │
│   ├── ui/                       # Base UI components (shadcn/ui style)
│   │   ├── button.tsx            # Button with variants
│   │   ├── card.tsx              # Card container
│   │   ├── input.tsx             # Text input with error state
│   │   ├── textarea.tsx          # Textarea with error state
│   │   ├── select.tsx            # Select dropdown (Radix)
│   │   └── badge.tsx             # Badge/tag component
│   │
│   ├── sections/                 # Page-level content sections
│   │   ├── hero-slider.tsx       # Homepage hero carousel
│   │   ├── intro-section.tsx     # Homepage intro/about block
│   │   ├── business-cards.tsx    # Business vertical cards grid
│   │   ├── stats-counter.tsx     # Animated statistics
│   │   ├── testimonials.tsx      # Client testimonials carousel
│   │   ├── latest-news.tsx       # News/blog preview cards
│   │   ├── cta-section.tsx       # Call-to-action banner
│   │   └── business-page-template.tsx  # Reusable business page layout
│   │
│   └── shared/                   # Shared/utility components
│       └── section.tsx           # Section wrapper + SectionHeader
│
├── lib/
│   ├── utils/
│   │   └── index.ts              # cn(), formatDate(), slugify(), etc.
│   │
│   ├── constants/
│   │   └── index.ts              # Site config, nav links, business data
│   │
│   ├── validations/
│   │   └── index.ts              # Zod schemas (contact, login, team, etc.)
│   │
│   ├── services/
│   │   └── prisma.ts             # Prisma client singleton
│   │
│   ├── store/
│   │   └── index.ts              # Zustand stores (UI, notifications)
│   │
│   └── auth/
│       └── index.ts              # NextAuth configuration
│
├── prisma/
│   └── schema.prisma             # Database schema
│
├── docs/                         # Project documentation
│   ├── architecture.md
│   ├── folder-structure.md
│   ├── api-docs.md
│   ├── database-schema.md
│   ├── admin-guide.md
│   ├── deployment.md
│   └── seo-performance.md
│
├── public/                       # Static assets
│
├── .env.example                  # Environment variable template
├── eslint.config.mjs             # ESLint configuration
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies & scripts
├── postcss.config.js             # PostCSS (Tailwind plugin)
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # Project overview
```

---

## Folder Purpose Guide

### `app/`

Contains all routes and API endpoints. Each folder maps to a URL path. Files named `page.tsx` are route pages; `layout.tsx` are shared layouts; `route.ts` are API handlers.

### `components/`

Reusable React components organized by purpose:

- **`layout/`** — Structural components (header, footer, sidebar)
- **`ui/`** — Primitive, composable UI elements (buttons, inputs, cards)
- **`sections/`** — Page-specific content blocks (hero, stats, testimonials)
- **`shared/`** — Cross-cutting utility components

### `lib/`

Non-component code:

- **`utils/`** — Helper functions
- **`constants/`** — Static data, configuration, content
- **`validations/`** — Zod schemas for forms and API validation
- **`services/`** — External service clients (Prisma, email, etc.)
- **`store/`** — Zustand state stores
- **`auth/`** — Authentication configuration

### `prisma/`

Database schema and migration files. The `schema.prisma` file defines all models.

### `docs/`

Project documentation. Auto-generated and maintained with each major feature.

### `public/`

Static files served at the root URL (images, favicons, robots.txt).

---

## Adding New Modules

### New Business Vertical

1. Add vertical data to `lib/constants/index.ts` → `BUSINESS_VERTICALS`
2. Create `app/businesses/<slug>/page.tsx` using `BusinessPageTemplate`
3. Add route to navigation in `NAV_LINKS`
4. Add business enum value to Prisma schema
5. Run `npx prisma db push` to update database

### New Admin Page

1. Create `app/admin/<feature>/page.tsx`
2. Add link to sidebar in `app/admin/layout.tsx`
3. Create corresponding API route in `app/api/<feature>/route.ts`
4. Add Zod validation schema if needed

### New UI Component

1. Create in `components/ui/<name>.tsx`
2. Follow the shadcn/ui pattern: forwardRef, cn(), cva() for variants
3. Export from the component file directly

---

## Naming Conventions

| Item             | Convention         | Example                |
| ---------------- | ------------------ | ---------------------- |
| Files            | kebab-case         | `hero-slider.tsx`      |
| Components       | PascalCase         | `HeroSlider`           |
| Functions        | camelCase          | `formatDate()`         |
| Constants        | UPPER_SNAKE_CASE   | `SITE_CONFIG`          |
| Types/Interfaces | PascalCase         | `ContactFormData`      |
| CSS classes      | kebab-case         | `section-padding`      |
| API routes       | kebab-case folders | `api/contact/route.ts` |
| Database tables  | snake_case         | `team_members`         |
| Prisma models    | PascalCase         | `TeamMember`           |

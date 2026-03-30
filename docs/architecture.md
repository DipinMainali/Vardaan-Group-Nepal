# Architecture Documentation

## Vardaan Group Website — Technical Architecture

### Overview

This application is built using **Next.js 14** with the **App Router** pattern, providing a server-first architecture with selective client-side interactivity. The codebase uses TypeScript in strict mode for type safety across all layers.

---

## App Router Architecture

### Server Components (Default)

All components in the `app/` directory are **React Server Components** by default. This means:

- They render on the server at request time (or build time for static pages)
- They can directly access databases, file systems, and environment variables
- They produce zero client-side JavaScript for their own rendering logic
- They cannot use hooks (`useState`, `useEffect`, etc.) or browser APIs

**Server Component examples:**

- `app/page.tsx` — Homepage (composes server + client components)
- `app/about/page.tsx` — About page
- `app/businesses/*/page.tsx` — Business vertical pages
- `app/admin/layout.tsx` — Admin layout with auth check

### Client Components

Components marked with `"use client"` run in the browser and support:

- React hooks and state management
- Event handlers and interactivity
- Browser APIs (window, document, etc.)

**Client Component examples:**

- `components/layout/header.tsx` — Interactive navigation with dropdowns
- `components/sections/home/hero-slider.tsx` — Autoplay carousel
- `components/sections/about/stats-counter.tsx` — Animated counters
- `app/contact/contact-form.tsx` — Form with validation
- `app/admin/login/page.tsx` — Login form

### Component Boundary Strategy

```
Server Component (page.tsx)
├── Client Component (header.tsx) — uses "use client"
├── Server Component (section.tsx) — renders HTML only
├── Client Component (contact-form.tsx) — uses "use client"
└── Server Component (footer.tsx) — static, no JS
```

**Rule:** Push `"use client"` as deep as possible in the component tree. Only mark components as client when they need interactivity.

---

## Data Flow

### Contact Form → API → Database → Email

```
1. User fills form (Client Component)
   ↓
2. React Hook Form + Zod validation (client-side)
   ↓
3. POST /api/contact (API Route)
   ↓
4. Server-side Zod validation (double validation)
   ↓
5. Optional: reCAPTCHA verification
   ↓
6. Prisma → PostgreSQL (store lead)
   ↓
7. Resend API → Email notification
   ↓
8. JSON response → Thank-you UI
```

### Admin Dashboard Data Flow

```
1. Admin navigates to /admin
   ↓
2. Server-side session check (getServerSession)
   ↓
3. If not authenticated → redirect to /admin/login
   ↓
4. Client components fetch data via API routes
   ↓
5. API routes verify session + query database
   ↓
6. Data rendered in admin UI
```

---

## Authentication Flow

### Login Process

```
1. Admin visits /admin/login
   ↓
2. Submits email + password
   ↓
3. NextAuth CredentialsProvider:
   a. Looks up user in PostgreSQL via Prisma
   b. Compares bcrypt hash
   c. Returns user object with role
   ↓
4. JWT token created with:
   - user.id
   - user.email
   - user.role
   ↓
5. Token stored in HTTP-only cookie
   ↓
6. Redirect to /admin dashboard
```

### Admin Route Protection

The admin layout (`app/admin/layout.tsx`) acts as a server-side guard:

```typescript
export default async function AdminLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");
  return <>{children}</>;
}
```

This runs on every request to any `/admin/*` route, ensuring unauthenticated users are always redirected.

### Role-Based Access

The JWT token includes the user's role (`ADMIN`, `EDITOR`, `VIEWER`). API routes can check this:

```typescript
const session = await getServerSession(authOptions);
if (session?.user?.role !== "ADMIN") {
  return NextResponse.json({ error: "Forbidden" }, { status: 403 });
}
```

---

## State Management

### Server State

- **Prisma ORM** for database queries in API routes and server components
- **Next.js caching** for static page generation

### Client State

- **Zustand** for UI state (mobile menu, modals, notifications)
- **React Hook Form** for form state management
- No global client-side data fetching library (uses native `fetch`)

### Store Architecture

```typescript
// UI Store — controls global UI elements
useUIStore: {
  isMobileMenuOpen: boolean
  isContactModalOpen: boolean
  selectedBusiness: string | null
}

// Notification Store — toast notifications
useNotificationStore: {
  notifications: Notification[]
  addNotification()
  removeNotification()
}
```

---

## Key Design Decisions

| Decision                     | Rationale                                             |
| ---------------------------- | ----------------------------------------------------- |
| App Router over Pages Router | Better server component support, streaming, layouts   |
| Server Components by default | Smaller bundle, faster initial load                   |
| Zustand over Redux           | Simpler API for minimal client state needs            |
| React Hook Form + Zod        | Type-safe validation shared between client and server |
| NextAuth with JWT            | Stateless auth, no session database needed            |
| Prisma ORM                   | Type-safe database queries, easy migrations           |
| Radix UI primitives          | Accessible, unstyled, composable UI                   |
| Tailwind CSS                 | Utility-first, consistent design system               |

---

## Performance Considerations

- **Server Components** reduce JavaScript bundle by ~40%
- **Image optimization** via `next/image` with lazy loading
- **Font optimization** via `next/font` (no layout shift)
- **Static generation** for content pages (ISR-ready)
- **Code splitting** automatic per-route
- **Streaming** for admin dashboard (progressive loading)

# SEO & Performance Guide

## Vardaan Group Website — Search Engine Optimization & Performance

---

## SEO Strategy

### Metadata Architecture

The site uses Next.js **Metadata API** for structured SEO tags.

**Root layout** (`app/layout.tsx`) defines base metadata:

```tsx
export const metadata: Metadata = {
  title: {
    default: "Vardaan Group — Diversified Business Excellence",
    template: "%s | Vardaan Group",
  },
  description: "Vardaan Group is a diversified conglomerate...",
  keywords: ["Vardaan Group", "travels", "furnishings", "hotels", "builders"],
  openGraph: { type: "website", locale: "en_IN", siteName: "Vardaan Group" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};
```

**Page-level metadata** overrides/extends the base:

- Each page can export its own `metadata` or `generateMetadata()` function
- The `title.template` ensures consistent branding: "Page Title | Vardaan Group"

### Page Titles

| Page        | Title                                           |
| ----------- | ----------------------------------------------- |
| Homepage    | Vardaan Group — Diversified Business Excellence |
| About       | About Us \| Vardaan Group                       |
| Businesses  | Our Businesses \| Vardaan Group                 |
| Travels     | Vardaan Travels & Holidays \| Vardaan Group     |
| Furnishings | Vardaan Furnishings \| Vardaan Group            |
| Hotels      | Vardaan Hotels & Banquets \| Vardaan Group      |
| Builders    | Vardaan Builders & Developers \| Vardaan Group  |
| Contact     | Contact Us \| Vardaan Group                     |

### Structured Data (Future Enhancement)

Add JSON-LD structured data for:

- **Organization** — Company info, logo, contact
- **LocalBusiness** — For each vertical with address, hours, reviews
- **BreadcrumbList** — Navigation breadcrumbs
- **FAQ** — Frequently asked questions on service pages

Example implementation in a page component:

```tsx
export default function TravelsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Vardaan Travels & Holidays",
    url: "https://vardaangroup.com/businesses/travels",
    // ...
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Page content */}
    </>
  );
}
```

---

## Technical SEO

### URL Structure

```
/                           → Homepage
/about                      → About Us
/businesses                 → Business overview
/businesses/travels         → Travels vertical
/businesses/furnishings     → Furnishings vertical
/businesses/hotels          → Hotels vertical
/businesses/builders        → Builders vertical
/contact                    → Contact page
/admin                      → Admin (noindex)
```

- Clean, semantic URLs
- No trailing slashes (Next.js default)
- Lowercase only
- Hyphens for word separation

### Robots & Indexing

Configure in `public/robots.txt`:

```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /api

Sitemap: https://www.vardaangroup.com/sitemap.xml
```

The admin and API routes are excluded from indexing via both `robots.txt` and the `robots` metadata field.

### Sitemap (Future Enhancement)

Create `app/sitemap.ts`:

```tsx
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.vardaangroup.com";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/businesses`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/businesses/travels`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/businesses/furnishings`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/businesses/hotels`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/businesses/builders`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
```

---

## Performance Optimization

### Server Components (Default)

All pages use **React Server Components** by default:

- Zero client-side JavaScript for static content
- HTML is streamed from the server
- Only interactive components have the `"use client"` directive

**Client components** (minimal JS sent to browser):

- `hero-slider.tsx` — Carousel interaction
- `stats-counter.tsx` — Intersection Observer animation
- `testimonials.tsx` — Carousel interaction
- `contact-form.tsx` — Form handling
- `header.tsx` — Mobile menu + scroll detection
- Admin pages — All interactive

### Image Optimization

Next.js `<Image>` component provides:

- **Automatic WebP/AVIF** format conversion
- **Responsive sizing** via `sizes` prop
- **Lazy loading** by default
- **Blur placeholders** for perceived performance

Configuration in `next.config.ts`:

```ts
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'images.unsplash.com' },
    { protocol: 'https', hostname: '*.vercel-storage.com' },
  ],
}
```

**Best practices:**

- Always specify `width` and `height` to prevent layout shift
- Use `priority` on above-the-fold images (hero slider)
- Use `sizes` for responsive images: `sizes="(max-width: 768px) 100vw, 50vw"`

### Font Optimization

Using `next/font/google` for **Inter**:

- Self-hosted, no external requests
- `font-display: swap` prevents FOIT
- CSS variable `--font-inter` for Tailwind integration

### Bundle Size

| Strategy          | Implementation                                        |
| ----------------- | ----------------------------------------------------- |
| Server Components | Default for all non-interactive pages                 |
| Dynamic imports   | Use `next/dynamic` for heavy components               |
| Tree shaking      | Import specific Radix components, not entire packages |
| Code splitting    | Next.js automatic per-route splitting                 |

### Caching Strategy

| Resource       | Cache Strategy                       |
| -------------- | ------------------------------------ |
| Static pages   | ISR with `revalidate: 3600` (1 hour) |
| API responses  | No cache (real-time data)            |
| Images         | Next.js Image optimization cache     |
| Fonts          | Immutable, long-lived cache          |
| CSS/JS bundles | Content-hashed, long-lived cache     |

To enable ISR on a page:

```tsx
export const revalidate = 3600; // seconds
```

---

## Core Web Vitals

### Largest Contentful Paint (LCP)

Target: < 2.5 seconds

**Optimizations applied:**

- Hero image uses `priority` for preloading
- Server-side rendering eliminates content loading delay
- Font preloading via `next/font`
- Critical CSS inlined by Next.js

### First Input Delay (FID) / Interaction to Next Paint (INP)

Target: < 200ms

**Optimizations applied:**

- Minimal client-side JavaScript
- No render-blocking scripts
- Event handlers are lightweight
- Complex animations use CSS (not JS)

### Cumulative Layout Shift (CLS)

Target: < 0.1

**Optimizations applied:**

- All images have explicit dimensions
- Font fallback with `font-display: swap` + size-adjust
- No dynamic content injection above the fold
- Cards and sections have fixed heights on mobile

---

## Monitoring

### Vercel Analytics

Enable in Vercel dashboard for:

- Real User Monitoring (RUM)
- Core Web Vitals tracking
- Page load performance
- Geographic distribution

### Google Search Console

1. Verify domain ownership
2. Submit sitemap URL
3. Monitor:
   - Index coverage
   - Core Web Vitals
   - Mobile usability
   - Search performance (clicks, impressions, CTR)

### Lighthouse CI

Run locally:

```bash
npx lighthouse https://localhost:3000 --output html --output-path ./lighthouse-report.html
```

Target scores:

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

---

## Accessibility (a11y)

The site follows WCAG 2.1 AA guidelines:

| Feature             | Implementation                                         |
| ------------------- | ------------------------------------------------------ |
| Semantic HTML       | `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>` |
| ARIA labels         | Navigation landmarks, form controls                    |
| Keyboard navigation | Focus management, skip links                           |
| Color contrast      | AA minimum ratio (4.5:1 text, 3:1 large text)          |
| Responsive text     | rem/em units, scales with user preference              |
| Alt text            | All images have descriptive alt attributes             |
| Focus indicators    | Visible focus rings on interactive elements            |
| Form validation     | Error messages linked to inputs via aria-describedby   |

### Radix UI Components

All Radix primitives (Select, Dialog, Dropdown, Tabs) provide:

- Full keyboard support
- Screen reader announcements
- Focus trapping in modals
- Proper ARIA roles and states

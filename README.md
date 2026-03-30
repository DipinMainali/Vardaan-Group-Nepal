# Vardaan Group — Corporate Website

A scalable, high-performance corporate website for **Vardaan Group**, showcasing multiple business verticals with a centralized lead management system, CMS, and admin dashboard.

Built with **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS**, **Prisma**, and **NextAuth.js**.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Business Verticals](#business-verticals)
- [Admin Dashboard](#admin-dashboard)
- [API Endpoints](#api-endpoints)
- [Database](#database)
- [Documentation](#documentation)
- [Deployment](#deployment)
- [License](#license)

---

## Features

- **2 Active Businesses** — Travels & Holidays and Furnishings
- **Reusable Page Template** — Shared `BusinessPageTemplate` for consistent vertical pages
- **Contact & Lead Management** — Form submissions stored and managed via admin dashboard
- **CMS** — Editable content blocks for dynamic page content
- **Admin Dashboard** — Protected area for leads, content, and team management
- **Authentication** — NextAuth.js with JWT strategy and role-based access (Admin/Editor/Viewer)
- **Responsive Design** — Mobile-first layout with Tailwind CSS
- **Animated UI** — Hero carousel, count-up stats, testimonial slider
- **SEO Optimized** — Metadata API, semantic HTML, structured URLs
- **Accessible** — WCAG 2.1 AA, Radix UI primitives with full keyboard/screen reader support

---

## Tech Stack

| Category         | Technology                         |
| ---------------- | ---------------------------------- |
| Framework        | Next.js 14 (App Router)            |
| Language         | TypeScript (strict mode)           |
| Styling          | Tailwind CSS 3                     |
| UI Components    | Radix UI + CVA (shadcn/ui pattern) |
| Database         | PostgreSQL + Prisma 6              |
| Authentication   | NextAuth.js 4 (JWT + Credentials)  |
| Form Handling    | React Hook Form + Zod              |
| State Management | Zustand                            |
| Email            | Resend (optional)                  |
| Deployment       | Vercel (recommended)               |

---

## Project Structure

```
├── app/                    # Pages and API routes (App Router)
│   ├── about/              # About Us page
│   ├── businesses/         # Business vertical pages
│   ├── contact/            # Contact page + form
│   ├── admin/              # Protected admin dashboard
│   └── api/                # REST API endpoints
├── components/
│   ├── ui/                 # Base UI components (button, card, input...)
│   ├── layout/             # Header, Footer
│   ├── sections/           # Page content sections
│   └── shared/             # Cross-cutting components
├── lib/
│   ├── constants/          # Site config, nav, business data
│   ├── validations/        # Zod schemas
│   ├── services/           # Prisma client
│   ├── auth/               # NextAuth configuration
│   ├── store/              # Zustand stores
│   └── utils/              # Helper functions
├── prisma/                 # Database schema
├── docs/                   # Project documentation
└── public/                 # Static assets
```

See [docs/folder-structure.md](docs/folder-structure.md) for detailed documentation.

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** 9+ or **pnpm**
- **PostgreSQL** 14+ (for database features)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/vardaan-group-website.git
cd vardaan-group-website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your values

# Generate Prisma client
npx prisma generate

# Push database schema (development)
npx prisma db push

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note:** The site works without a database connection. API routes that use Prisma have database calls commented out with mock responses for development. Uncomment the Prisma code when your database is configured.

---

## Environment Variables

Create a `.env` file based on `.env.example`:

| Variable                         | Required | Description                              |
| -------------------------------- | -------- | ---------------------------------------- |
| `DATABASE_URL`                   | Yes\*    | PostgreSQL connection string             |
| `NEXTAUTH_URL`                   | Yes      | Site URL (e.g., `http://localhost:3000`) |
| `NEXTAUTH_SECRET`                | Yes      | Random string for JWT signing            |
| `RESEND_API_KEY`                 | No       | Resend API key for email                 |
| `CONTACT_EMAIL`                  | No       | Email to receive lead notifications      |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | No       | reCAPTCHA v3 site key                    |
| `RECAPTCHA_SECRET_KEY`           | No       | reCAPTCHA v3 secret key                  |
| `ADMIN_EMAIL`                    | Yes      | Default admin login email                |
| `ADMIN_PASSWORD`                 | Yes      | Default admin login password             |

\* Required for database features. The site runs without it using mock data.

Generate `NEXTAUTH_SECRET`:

```bash
openssl rand -base64 32
```

---

## Scripts

| Script          | Command                  | Description                              |
| --------------- | ------------------------ | ---------------------------------------- |
| Dev             | `npm run dev`            | Start development server with hot reload |
| Build           | `npm run build`          | Create production build                  |
| Start           | `npm start`              | Start production server                  |
| Lint            | `npm run lint`           | Run ESLint                               |
| Prisma Studio   | `npx prisma studio`      | Open visual database browser             |
| Prisma Generate | `npx prisma generate`    | Regenerate Prisma client                 |
| Prisma Migrate  | `npx prisma migrate dev` | Create and apply migration               |
| Prisma Push     | `npx prisma db push`     | Push schema without migration            |

---

## Business Verticals

| Vertical                   | Route                     | Status |
| -------------------------- | ------------------------- | ------ |
| Vardaan Travels & Holidays | `/businesses/travels`     | Active |
| Vardaan Furnishings        | `/businesses/furnishings` | Active |

Each vertical page is built with the shared `BusinessPageTemplate` component and includes:

- Hero section with stats bar
- About section
- Services grid
- Image gallery
- Team members (optional)
- Contact CTA

To add a new vertical, see [docs/folder-structure.md](docs/folder-structure.md#new-business-vertical).

---

## Admin Dashboard

Access at `/admin` (requires authentication).

| Section   | Route             | Description                                  |
| --------- | ----------------- | -------------------------------------------- |
| Dashboard | `/admin`          | Overview with stats and recent leads         |
| Leads     | `/admin/leads`    | View, filter, and manage contact submissions |
| Content   | `/admin/content`  | Edit page content blocks (CMS)               |
| Team      | `/admin/team`     | Add, edit, delete team members               |
| Settings  | `/admin/settings` | Site configuration                           |

See [docs/admin-guide.md](docs/admin-guide.md) for complete usage instructions.

---

## API Endpoints

| Method | Endpoint               | Auth   | Description              |
| ------ | ---------------------- | ------ | ------------------------ |
| POST   | `/api/contact`         | Public | Submit contact form      |
| GET    | `/api/leads`           | Admin  | List leads with filters  |
| PATCH  | `/api/leads`           | Admin  | Update lead status/notes |
| GET    | `/api/content?key=...` | Public | Get content block        |
| PUT    | `/api/content`         | Admin  | Create/update content    |
| GET    | `/api/team`            | Public | List team members        |
| POST   | `/api/team`            | Admin  | Add team member          |
| PUT    | `/api/team`            | Admin  | Update team member       |
| DELETE | `/api/team`            | Admin  | Delete team member       |

See [docs/api-docs.md](docs/api-docs.md) for request/response schemas.

---

## Database

**ORM:** Prisma 6  
**Database:** PostgreSQL

### Models

- **User** — Admin accounts with roles (Admin/Editor/Viewer)
- **Lead** — Contact form submissions with status tracking
- **Content** — CMS content blocks (key-value)
- **TeamMember** — Team/leadership profiles
- **NewsPost** — Blog/news articles with publish workflow

See [docs/database-schema.md](docs/database-schema.md) for full schema documentation.

---

## Documentation

All documentation is in the `docs/` folder:

| Document                                        | Description                                      |
| ----------------------------------------------- | ------------------------------------------------ |
| [architecture.md](docs/architecture.md)         | System architecture, data flow, design decisions |
| [folder-structure.md](docs/folder-structure.md) | Project organization and naming conventions      |
| [api-docs.md](docs/api-docs.md)                 | REST API reference with schemas                  |
| [database-schema.md](docs/database-schema.md)   | Prisma models, indexes, and setup                |
| [admin-guide.md](docs/admin-guide.md)           | Admin dashboard user guide                       |
| [deployment.md](docs/deployment.md)             | Vercel/Docker deployment instructions            |
| [seo-performance.md](docs/seo-performance.md)   | SEO strategy and performance optimization        |

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in [Vercel](https://vercel.com/new)
3. Set environment variables
4. Deploy

### Build Command

```
npx prisma generate && next build
```

See [docs/deployment.md](docs/deployment.md) for complete deployment guide including Docker, production checklist, and CI/CD setup.

---

## License

Private — All rights reserved. © Vardaan Group.

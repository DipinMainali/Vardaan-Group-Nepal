# Deployment Guide

## Vardaan Group Website — Production Deployment

---

## Prerequisites

- Node.js 18+ (LTS recommended)
- PostgreSQL 14+ database
- Vercel account (recommended) or any Node.js hosting
- Domain name configured

---

## Environment Variables

Copy `.env.example` to `.env` and fill in all values:

```env
# Database
DATABASE_URL="postgresql://user:password@host:5432/vardaan_group?sslmode=require"

# NextAuth
NEXTAUTH_URL="https://www.vardaangroup.com"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"

# Email (Resend)
RESEND_API_KEY="re_..."
CONTACT_EMAIL="info@vardaangroup.com"

# reCAPTCHA (optional)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY="6L..."
RECAPTCHA_SECRET_KEY="6L..."

# Admin
ADMIN_EMAIL="admin@vardaangroup.com"
ADMIN_PASSWORD="change-this-strong-password"
```

### Generating NEXTAUTH_SECRET

```bash
openssl rand -base64 32
```

---

## Option 1: Deploy to Vercel (Recommended)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-org/vardaan-group-website.git
git push -u origin main
```

### Step 2: Import in Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Framework preset: **Next.js** (auto-detected)
4. Root directory: `./` (default)
5. Build command: `npx prisma generate && next build`
6. Output directory: `.next` (default)

### Step 3: Configure Environment Variables

In Vercel project settings → Environment Variables, add all variables from `.env.example`.

> **Important:** Set `NEXTAUTH_URL` to your production domain.

### Step 4: Set Up Database

**Option A: Vercel Postgres**

1. In Vercel dashboard → Storage → Create Database → Postgres
2. Connect to your project
3. The `DATABASE_URL` is auto-populated

**Option B: External PostgreSQL (Supabase, Neon, Railway)**

1. Create a database on your provider
2. Copy the connection string
3. Set as `DATABASE_URL` in Vercel env vars
4. Ensure SSL is enabled (`?sslmode=require`)

### Step 5: Run Migrations

```bash
# Locally, pointing to production DB:
DATABASE_URL="your-production-url" npx prisma migrate deploy
```

Or use Vercel's build command to auto-migrate:

```
npx prisma migrate deploy && npx prisma generate && next build
```

### Step 6: Seed Admin User

```bash
DATABASE_URL="your-production-url" npx prisma db seed
```

Or manually create via Prisma Studio:

```bash
DATABASE_URL="your-production-url" npx prisma studio
```

### Step 7: Configure Domain

1. In Vercel → Settings → Domains
2. Add your domain (e.g., `vardaangroup.com`)
3. Follow DNS configuration instructions
4. SSL is automatic

---

## Option 2: Self-Hosted (VPS / Docker)

### Docker Setup

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx prisma generate
RUN npm run build

# Production
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
```

For standalone output, add to `next.config.ts`:

```ts
output: 'standalone',
```

### Build & Run

```bash
docker build -t vardaan-group .
docker run -p 3000:3000 --env-file .env vardaan-group
```

### PM2 (Without Docker)

```bash
npm ci
npx prisma generate
npx prisma migrate deploy
npm run build
pm2 start npm --name "vardaan-group" -- start
```

---

## Production Checklist

### Before Launch

- [ ] All environment variables set in production
- [ ] `NEXTAUTH_SECRET` is a strong random string
- [ ] `ADMIN_PASSWORD` is changed from default
- [ ] Database migrations applied
- [ ] Admin user seeded
- [ ] SSL certificate active
- [ ] Domain DNS configured
- [ ] Test all contact forms submit successfully
- [ ] Test admin login/logout flow
- [ ] Verify email delivery (Resend)
- [ ] Check all images load (remote patterns configured)

### Performance

- [ ] Enable Vercel Edge caching
- [ ] Configure ISR for business pages (`revalidate: 3600`)
- [ ] Enable gzip/brotli compression (Vercel does this automatically)
- [ ] Set up CDN for static assets
- [ ] Optimize images to WebP (Next.js Image handles this)

### Security

- [ ] Enable reCAPTCHA on contact form
- [ ] Set up rate limiting (e.g., Vercel Edge Middleware or express-rate-limit)
- [ ] Configure CSP headers in `next.config.ts`
- [ ] Enable HSTS
- [ ] Audit npm dependencies (`npm audit`)
- [ ] Remove any console.log statements in production code

### Monitoring

- [ ] Set up error tracking (Sentry, LogRocket)
- [ ] Configure uptime monitoring (UptimeRobot, Checkly)
- [ ] Enable Vercel Analytics or Google Analytics
- [ ] Set up database monitoring / alerts
- [ ] Configure log aggregation

---

## CI/CD Pipeline

### GitHub Actions (Example)

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm
      - run: npm ci
      - run: npx prisma generate
      - run: npm run build
      - run: npm test
      # Vercel auto-deploys from GitHub; this is for custom hosting
```

---

## Rollback Procedure

1. **Vercel:** Go to Deployments → click on the previous successful deployment → Promote to Production
2. **Self-hosted:** Keep the previous build artifacts and restart with the old version
3. **Database:** Use `npx prisma migrate resolve` if a migration needs to be rolled back

---

## Useful Commands

| Command                     | Purpose                       |
| --------------------------- | ----------------------------- |
| `npm run dev`               | Start development server      |
| `npm run build`             | Production build              |
| `npm start`                 | Start production server       |
| `npx prisma studio`         | Visual database browser       |
| `npx prisma migrate dev`    | Create migration              |
| `npx prisma migrate deploy` | Apply migrations              |
| `npx prisma db push`        | Push schema without migration |
| `npx prisma generate`       | Regenerate Prisma client      |
| `npm audit`                 | Check for vulnerabilities     |

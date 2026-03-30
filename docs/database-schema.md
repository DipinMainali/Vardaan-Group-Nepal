# Database Schema Documentation

## Vardaan Group Website — Prisma + PostgreSQL

Database ORM: **Prisma 6.x**  
Database: **PostgreSQL**  
Schema file: `prisma/schema.prisma`

---

## Entity Relationship Diagram

```
┌─────────┐     ┌──────────┐     ┌─────────────┐
│  User   │     │   Lead   │     │   Content   │
│─────────│     │──────────│     │─────────────│
│ id      │     │ id       │     │ id          │
│ name    │     │ name     │     │ key (unique)│
│ email ◄─┤     │ email    │     │ title       │
│ password│     │ phone    │     │ body        │
│ role    │     │ business │     │ image       │
│ image   │     │ subject  │     │ metadata    │
│ created │     │ message  │     │ created     │
│ updated │     │ status   │     │ updated     │
└─────────┘     │ notes    │     └─────────────┘
                │ created  │
                │ updated  │     ┌─────────────┐
                └──────────┘     │ TeamMember  │
                                 │─────────────│
┌──────────┐                     │ id          │
│ NewsPost │                     │ name        │
│──────────│                     │ role        │
│ id       │                     │ bio         │
│ title    │                     │ image       │
│ slug     │                     │ order       │
│ excerpt  │                     │ created     │
│ content  │                     │ updated     │
│ image    │                     └─────────────┘
│ published│
│ pubDate  │
│ created  │
│ updated  │
└──────────┘
```

---

## Models

### User

Admin/CMS users who manage the website.

| Column      | Type     | Constraints          | Description       |
| ----------- | -------- | -------------------- | ----------------- |
| `id`        | String   | @id @default(cuid()) | Primary key       |
| `name`      | String   | —                    | Display name      |
| `email`     | String   | @unique              | Login email       |
| `password`  | String   | —                    | bcrypt hash       |
| `role`      | Role     | @default(ADMIN)      | Permission level  |
| `image`     | String?  | —                    | Profile image URL |
| `createdAt` | DateTime | @default(now())      | Created timestamp |
| `updatedAt` | DateTime | @updatedAt           | Last modified     |

**Indexes:** Unique on `email` (implicit from @unique)

---

### Lead

Contact form submissions and inquiries from website visitors.

| Column       | Type       | Constraints          | Description          |
| ------------ | ---------- | -------------------- | -------------------- |
| `id`         | String     | @id @default(cuid()) | Primary key          |
| `name`       | String     | —                    | Visitor name         |
| `email`      | String     | —                    | Visitor email        |
| `phone`      | String?    | —                    | Phone number         |
| `business`   | Business   | —                    | Target vertical      |
| `subject`    | String     | —                    | Inquiry subject      |
| `message`    | String     | @db.Text             | Full message         |
| `status`     | LeadStatus | @default(NEW)        | Processing status    |
| `notes`      | String?    | @db.Text             | Internal admin notes |
| `attachment` | String?    | —                    | File URL if any      |
| `createdAt`  | DateTime   | @default(now())      | Submission time      |
| `updatedAt`  | DateTime   | @updatedAt           | Last modified        |

**Indexes:**

- `@@index([business])` — Filter leads by vertical
- `@@index([status])` — Filter by processing status
- `@@index([createdAt])` — Sort by date

---

### Content

CMS content blocks for editable page sections.

| Column      | Type     | Constraints          | Description                        |
| ----------- | -------- | -------------------- | ---------------------------------- |
| `id`        | String   | @id @default(cuid()) | Primary key                        |
| `key`       | String   | @unique              | Lookup key (e.g., `homepage-hero`) |
| `title`     | String   | —                    | Content title                      |
| `body`      | String   | @db.Text             | Rich text / markdown body          |
| `image`     | String?  | —                    | Associated image URL               |
| `metadata`  | Json?    | —                    | Flexible additional data           |
| `createdAt` | DateTime | @default(now())      | Created timestamp                  |
| `updatedAt` | DateTime | @updatedAt           | Last modified                      |

**Indexes:** Unique on `key` (implicit from @unique)

**Usage pattern:** Content is accessed by `key` and upserted — if a key exists, it's updated; otherwise created.

---

### TeamMember

Company leadership and team members displayed on the website.

| Column      | Type     | Constraints          | Description       |
| ----------- | -------- | -------------------- | ----------------- |
| `id`        | String   | @id @default(cuid()) | Primary key       |
| `name`      | String   | —                    | Full name         |
| `role`      | String   | —                    | Job title         |
| `bio`       | String?  | @db.Text             | Biography         |
| `image`     | String?  | —                    | Photo URL         |
| `order`     | Int      | @default(0)          | Display order     |
| `createdAt` | DateTime | @default(now())      | Created timestamp |
| `updatedAt` | DateTime | @updatedAt           | Last modified     |

**Ordering:** Members are retrieved ordered by the `order` field ascending.

---

### NewsPost

Blog/news articles for the website.

| Column        | Type      | Constraints          | Description          |
| ------------- | --------- | -------------------- | -------------------- |
| `id`          | String    | @id @default(cuid()) | Primary key          |
| `title`       | String    | —                    | Article title        |
| `slug`        | String    | @unique              | URL slug             |
| `excerpt`     | String?   | —                    | Short preview text   |
| `content`     | String    | @db.Text             | Full article content |
| `image`       | String?   | —                    | Featured image URL   |
| `published`   | Boolean   | @default(false)      | Publication status   |
| `publishedAt` | DateTime? | —                    | Publication date     |
| `createdAt`   | DateTime  | @default(now())      | Created timestamp    |
| `updatedAt`   | DateTime  | @updatedAt           | Last modified        |

**Indexes:**

- `@@index([published, publishedAt])` — Efficiently query published posts sorted by date
- Unique on `slug` (implicit from @unique)

---

## Enums

### Role

```prisma
enum Role {
  ADMIN     // Full access — manage users, content, leads
  EDITOR    // Edit content and team members
  VIEWER    // Read-only access to admin dashboard
}
```

### Business

```prisma
enum Business {
  travels       // Vardaan Travels & Holidays
  furnishings   // Vardaan Furnishings
  hotels        // Vardaan Hotels & Banquets
  builders      // Vardaan Builders & Developers
  general       // General / unspecified inquiry
}
```

### LeadStatus

```prisma
enum LeadStatus {
  NEW           // Fresh submission, unread
  CONTACTED     // Initial outreach made
  IN_PROGRESS   // Ongoing conversation
  CONVERTED     // Successfully converted
  CLOSED        // Closed without conversion
}
```

---

## Indexing Strategy

| Index                              | Purpose                      | Query Pattern                                      |
| ---------------------------------- | ---------------------------- | -------------------------------------------------- |
| `Lead.business`                    | Filter dashboard by vertical | `WHERE business = 'travels'`                       |
| `Lead.status`                      | Filter by processing stage   | `WHERE status = 'NEW'`                             |
| `Lead.createdAt`                   | Sort by newest first         | `ORDER BY createdAt DESC`                          |
| `NewsPost(published, publishedAt)` | Public blog listing          | `WHERE published = true ORDER BY publishedAt DESC` |
| `User.email` (unique)              | Login lookup                 | `WHERE email = '...'`                              |
| `Content.key` (unique)             | Content block lookup         | `WHERE key = 'homepage-hero'`                      |
| `NewsPost.slug` (unique)           | Article URL resolution       | `WHERE slug = 'our-latest-update'`                 |

---

## Database Setup

### Initial Setup

```bash
# 1. Set DATABASE_URL in .env
DATABASE_URL="postgresql://user:password@localhost:5432/vardaan_group"

# 2. Push schema to database
npx prisma db push

# 3. Generate Prisma client
npx prisma generate

# 4. (Optional) Seed initial admin user
npx prisma db seed
```

### Migrations (Production)

```bash
# Create a migration
npx prisma migrate dev --name describe_change

# Apply in production
npx prisma migrate deploy
```

### Prisma Studio

```bash
# Visual database browser
npx prisma studio
```

---

## Scalability Notes

1. **Read-heavy workload** — Content and team member data changes infrequently. Consider adding Redis caching or Next.js ISR for public pages.

2. **Lead volume** — The Lead table uses indexes on `business`, `status`, and `createdAt`. For high volumes (>100K rows), consider partitioning by `createdAt` or archiving old leads.

3. **JSON metadata** — The `Content.metadata` field uses Prisma's `Json` type. Avoid deeply nested structures; keep it flat for queryability.

4. **Connection pooling** — The Prisma singleton in `lib/services/prisma.ts` prevents connection exhaustion in development. For production on serverless (Vercel), use Prisma Accelerate or PgBouncer.

5. **Future additions** — If adding image uploads, create a separate `Media` model rather than storing URLs inline. If adding multi-tenant support, add an `organizationId` foreign key to relevant models.

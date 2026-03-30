# API Documentation

## Vardaan Group Website — REST API Reference

All API routes are located under `/api/` and use **Next.js App Router Route Handlers**.

---

## Authentication

### `POST /api/auth/[...nextauth]`

NextAuth.js authentication endpoint. Handles sign-in, sign-out, session management, and CSRF tokens.

**Provider:** Credentials (email + password)  
**Strategy:** JWT  
**Session extends:** `{ role: string; id: string }`

#### Sign In

```
POST /api/auth/callback/credentials
Content-Type: application/x-www-form-urlencoded

email=admin@vardaangroup.com&password=yourpassword&csrfToken=...
```

#### Get Session

```
GET /api/auth/session
→ { user: { name, email, role, id }, expires }
```

---

## Contact / Lead Submission

### `POST /api/contact`

Receives a contact form submission. Validates with Zod, stores in database (when enabled), and optionally sends email via Resend.

**Authentication:** None (public)

#### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 98765 43210",
  "business": "travels",
  "subject": "Booking Inquiry",
  "message": "I would like to inquire about a package tour.",
  "recaptchaToken": "optional-token"
}
```

#### Validation Rules

| Field            | Type   | Required | Constraints                                               |
| ---------------- | ------ | -------- | --------------------------------------------------------- |
| `name`           | string | Yes      | 2–100 characters                                          |
| `email`          | string | Yes      | Valid email format                                        |
| `phone`          | string | No       | 10–15 characters if provided                              |
| `business`       | enum   | Yes      | `travels`, `furnishings`, `hotels`, `builders`, `general` |
| `subject`        | string | Yes      | 2–200 characters                                          |
| `message`        | string | Yes      | 10–5000 characters                                        |
| `recaptchaToken` | string | No       | —                                                         |

#### Responses

| Status | Body                                             | Description           |
| ------ | ------------------------------------------------ | --------------------- |
| 201    | `{ success: true, message: "..." }`              | Submission received   |
| 400    | `{ error: "Validation failed", details: [...] }` | Zod validation errors |
| 500    | `{ error: "Internal server error" }`             | Server-side failure   |

---

## Lead Management

### `GET /api/leads`

Retrieve leads with optional filtering and pagination.

**Authentication:** Required (Admin only via `getServerSession`)

#### Query Parameters

| Param      | Type   | Default | Description                 |
| ---------- | ------ | ------- | --------------------------- |
| `page`     | number | `1`     | Page number                 |
| `limit`    | number | `20`    | Results per page            |
| `business` | string | —       | Filter by business vertical |
| `status`   | string | —       | Filter by lead status       |
| `search`   | string | —       | Search name/email/subject   |

#### Response

```json
{
  "leads": [
    {
      "id": "clx...",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+91 98765 43210",
      "business": "travels",
      "subject": "Booking Inquiry",
      "message": "...",
      "status": "NEW",
      "notes": null,
      "createdAt": "2024-01-15T10:30:00Z"
    }
  ],
  "total": 45,
  "page": 1,
  "totalPages": 3
}
```

#### Error Responses

| Status | Description                          |
| ------ | ------------------------------------ |
| 401    | `{ error: "Unauthorized" }`          |
| 500    | `{ error: "Internal server error" }` |

---

### `PATCH /api/leads`

Update a lead's status or notes.

**Authentication:** Required (Admin only)

#### Request Body

```json
{
  "id": "clx...",
  "status": "CONTACTED",
  "notes": "Called on Jan 15, interested in Rajasthan package"
}
```

#### Validation

| Field    | Type   | Required |
| -------- | ------ | -------- | -------------------------------------------------------- |
| `id`     | string | Yes      |
| `status` | enum   | No       | `NEW`, `CONTACTED`, `IN_PROGRESS`, `CONVERTED`, `CLOSED` |
| `notes`  | string | No       |

#### Responses

| Status | Body                                 |
| ------ | ------------------------------------ |
| 200    | `{ success: true, lead: {...} }`     |
| 400    | `{ error: "Lead ID is required" }`   |
| 401    | `{ error: "Unauthorized" }`          |
| 500    | `{ error: "Internal server error" }` |

---

## Content Management

### `GET /api/content?key=<key>`

Retrieve a content block by its unique key.

**Authentication:** None (public)

#### Query Parameters

| Param | Type   | Required | Description                     |
| ----- | ------ | -------- | ------------------------------- |
| `key` | string | Yes      | Unique content block identifier |

#### Known Content Keys

| Key             | Used For                     |
| --------------- | ---------------------------- |
| `homepage-hero` | Homepage hero slider content |
| `about-mission` | About page mission statement |
| `about-vision`  | About page vision statement  |
| `contact-info`  | Contact page details         |

#### Response

```json
{
  "content": {
    "id": "clx...",
    "key": "homepage-hero",
    "title": "Welcome to Vardaan Group",
    "body": "A legacy of excellence...",
    "image": "https://...",
    "metadata": { "subtitle": "..." },
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

#### Error Responses

| Status | Description                            |
| ------ | -------------------------------------- |
| 400    | `{ error: "Content key is required" }` |
| 404    | `{ error: "Content not found" }`       |

---

### `PUT /api/content`

Create or update a content block (upsert by key).

**Authentication:** Required (Admin only)

#### Request Body

```json
{
  "key": "homepage-hero",
  "title": "Updated Title",
  "body": "Updated body copy...",
  "image": "https://images.unsplash.com/...",
  "metadata": { "subtitle": "New subtitle" }
}
```

#### Responses

| Status | Body                                   |
| ------ | -------------------------------------- |
| 200    | `{ success: true, content: {...} }`    |
| 400    | `{ error: "Content key is required" }` |
| 401    | `{ error: "Unauthorized" }`            |

---

## Team Management

### `GET /api/team`

List all team members ordered by display order.

**Authentication:** None (public)

#### Response

```json
{
  "members": [
    {
      "id": "clx...",
      "name": "Rajesh Kumar",
      "role": "Managing Director",
      "bio": "Over 25 years of experience...",
      "image": "https://...",
      "order": 1
    }
  ]
}
```

---

### `POST /api/team`

Add a new team member.

**Authentication:** Required (Admin only)

#### Request Body

```json
{
  "name": "Priya Sharma",
  "role": "VP Operations",
  "bio": "Experienced operations leader...",
  "image": "https://...",
  "order": 5
}
```

#### Validation

| Field   | Type   | Required | Constraints         |
| ------- | ------ | -------- | ------------------- |
| `name`  | string | Yes      | 2–100 characters    |
| `role`  | string | Yes      | 2–100 characters    |
| `bio`   | string | No       | Max 1000 characters |
| `image` | string | No       | Valid URL           |
| `order` | number | No       | Display order       |

#### Responses

| Status | Body                                             |
| ------ | ------------------------------------------------ |
| 201    | `{ success: true, member: {...} }`               |
| 400    | `{ error: "Validation failed", details: [...] }` |
| 401    | `{ error: "Unauthorized" }`                      |

---

### `PUT /api/team`

Update an existing team member.

**Authentication:** Required (Admin only)

#### Request Body

```json
{
  "id": "clx...",
  "name": "Priya Sharma",
  "role": "COO",
  "bio": "Updated bio..."
}
```

#### Responses

| Status | Body                                      |
| ------ | ----------------------------------------- |
| 200    | `{ success: true, member: {...} }`        |
| 400    | `{ error: "Team member ID is required" }` |
| 401    | `{ error: "Unauthorized" }`               |

---

### `DELETE /api/team`

Remove a team member.

**Authentication:** Required (Admin only)

#### Request Body

```json
{
  "id": "clx..."
}
```

#### Responses

| Status | Body                                      |
| ------ | ----------------------------------------- |
| 200    | `{ success: true }`                       |
| 400    | `{ error: "Team member ID is required" }` |
| 401    | `{ error: "Unauthorized" }`               |

---

## Error Handling

All API routes follow consistent error handling:

1. **Validation errors** (400) — Include Zod issue details in `details` array
2. **Authentication errors** (401) — `{ error: "Unauthorized" }`
3. **Not found** (404) — Specific message per resource
4. **Server errors** (500) — Generic message; full error logged server-side

### Error Response Format

```json
{
  "error": "Human-readable error message",
  "details": [
    {
      "path": ["email"],
      "message": "Invalid email format"
    }
  ]
}
```

---

## Security Notes

- Admin endpoints check `getServerSession(authOptions)` for authentication
- Passwords are hashed with **bcryptjs** (12 rounds)
- JWT tokens include user `role` and `id`
- Environment variables protect secrets (see `.env.example`)
- reCAPTCHA token field is available on contact form but server-side verification is not yet implemented
- CORS is handled by Next.js defaults (same-origin)
- Rate limiting should be added in production (see [deployment.md](./deployment.md))

# Admin Dashboard Guide

## Vardaan Group Website — Admin Panel Documentation

The admin dashboard is located at `/admin` and provides centralized management for leads, website content, and team members.

---

## Accessing the Admin Panel

### Login

1. Navigate to `/admin/login`
2. Enter your admin email and password
3. Click **Sign In**
4. You will be redirected to the dashboard

**Default credentials** (set in `.env`):

- Email: Value of `ADMIN_EMAIL`
- Password: Value of `ADMIN_PASSWORD`

> **Security:** Change the default password immediately after first login. Passwords are hashed with bcryptjs.

### Session

- Sessions use **JWT tokens** stored in HTTP-only cookies
- Session duration is managed by NextAuth defaults
- To sign out, click **Sign Out** in the admin header

### Roles

| Role       | Permissions                                                |
| ---------- | ---------------------------------------------------------- |
| **ADMIN**  | Full access — manage leads, content, team, settings, users |
| **EDITOR** | Can edit content and team members                          |
| **VIEWER** | Read-only access to dashboard and leads                    |

---

## Dashboard Overview

**Route:** `/admin`

The dashboard homepage shows:

- **4 Summary Cards** — Total leads, new leads (this month), active content blocks, team members
- **Recent Leads** — Last 5 submissions with name, email, business, and status
- **Quick Actions** — Links to view all leads, edit content, manage team

---

## Leads Management

**Route:** `/admin/leads`

### Viewing Leads

The leads page displays all contact form submissions in a searchable, filterable table.

**Table Columns:**

- Name
- Email
- Business (vertical)
- Subject
- Status (color-coded badge)
- Date
- Actions

### Filtering

Use the filter controls at the top:

- **Search** — Type to search by name, email, or subject
- **Business** — Filter by vertical (Travels, Furnishings, Hotels, Builders, General)
- **Status** — Filter by lead status (New, Contacted, In Progress, Converted, Closed)

### Lead Details

Click **View** on any lead to open the detail modal:

- Full message text
- Phone number
- Submission date/time
- Current status
- Internal notes

### Updating Lead Status

In the detail modal:

1. Click one of the status buttons: **Contact**, **In Progress**, **Converted**, **Close**
2. The status updates immediately via the `/api/leads` PATCH endpoint
3. The lead list refreshes automatically

### Adding Notes

1. Open a lead's detail modal
2. Type in the **Notes** textarea
3. Click **Save Notes**
4. Notes are internal and not visible to the visitor

---

## Content Management (CMS)

**Route:** `/admin/content`

### How Content Blocks Work

The CMS uses a **key-value content system**. Each content block has a unique `key` that identifies where it appears on the website. When you edit a content block, the website updates with the new content.

### Available Content Sections

The sidebar lists all manageable content sections:

- **Homepage Hero** — Main slider content
- **About Mission** — Mission statement text
- **About Vision** — Vision statement text
- **Contact Info** — Contact page details

### Editing Content

1. Click a section in the sidebar
2. Edit the **Title** field
3. Edit the **Body** field (supports plain text; HTML/Markdown can be used if the frontend renders it)
4. Optionally update the **Image URL**
5. Click **Save Content**
6. A success notification confirms the save

### Adding New Content Blocks

Currently, content blocks are created by the admin through the CMS editor. Enter a new content `key` according to the convention `<page>-<section>`, e.g., `businesses-travels-hero`.

---

## Team Management

**Route:** `/admin/team`

### Viewing Team Members

All team members are displayed as cards showing:

- Photo (or initials placeholder)
- Name
- Role/title
- Bio excerpt
- Display order number
- Edit and Delete buttons

### Adding a Team Member

1. Click **Add Member** (top right)
2. Fill in the form:
   - **Name** (required, 2–100 chars)
   - **Role** (required, 2–100 chars)
   - **Bio** (optional, max 1000 chars)
   - **Image URL** (optional, paste a URL)
   - **Order** (number for display position)
3. Click **Save**
4. The new member appears in the list

### Editing a Team Member

1. Click **Edit** on the member's card
2. The form populates with current data
3. Make changes
4. Click **Save**
5. Click **Cancel** to discard changes

### Deleting a Team Member

1. Click **Delete** on the member's card
2. Confirm the deletion in the dialog
3. The member is permanently removed

### Display Order

- Members are displayed in ascending `order` value
- Use numbers like 1, 2, 3 to control position
- Members with the same order appear by creation date

---

## Settings

**Route:** `/admin/settings`

The settings page provides configuration options:

- **Site Name** — Displayed in header and metadata
- **Contact Email** — Receives lead notifications
- **Phone Number** — Shown in header and footer
- **Address** — Shown on contact page

> Note: Currently a placeholder; settings are hardcoded in `lib/constants/index.ts`. A future update will make them database-driven.

---

## Sidebar Navigation

The admin sidebar contains quick links to all sections:

| Icon | Label     | Route             |
| ---- | --------- | ----------------- |
| 📊   | Dashboard | `/admin`          |
| 📨   | Leads     | `/admin/leads`    |
| 📝   | Content   | `/admin/content`  |
| 👥   | Team      | `/admin/team`     |
| ⚙️   | Settings  | `/admin/settings` |

---

## Troubleshooting

### "Unauthorized" error when accessing admin

- Ensure you are logged in at `/admin/login`
- Check that your session hasn't expired (sign out and back in)
- Verify the `NEXTAUTH_SECRET` in `.env` matches what was used to create the session

### Content changes not appearing on website

- Content endpoints use server-side rendering by default
- Changes should appear immediately on page reload
- If using ISR/caching, the cache may need to revalidate (usually within 60 seconds)

### Cannot delete a team member

- Ensure you have ADMIN role
- Check browser console for API errors
- Verify the database connection is active

### Lead status won't update

- Check the browser's network tab for the PATCH request response
- Ensure the lead ID is valid
- Verify your session hasn't expired

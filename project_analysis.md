# 🔍 NxTech Solutions — Complete Project Analysis

## 📌 Overview

**NxTech Solutions** (branded as **NxTechNova**) is a full-stack, production-grade SaaS-style business website for a technology & digital marketing agency. Built with **Next.js 16 App Router**, it includes a public-facing marketing site, a content-rich blog, a careers portal, and a fully-featured admin CMS dashboard — all in a single monorepo.

> [!IMPORTANT]
> The site is live at **https://nxtechnova.com** and deployed on **Vercel**. The project is private & proprietary.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router, TypeScript) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4 |
| **UI Primitives** | Radix UI (Dropdown, Label, Popover, Select, Slot, Switch, Tabs) |
| **Animations** | Motion (Framer Motion v12) |
| **Icons** | Lucide React + Tabler Icons |
| **Database** | PostgreSQL (via Prisma ORM v7 + `@prisma/adapter-pg`) |
| **Database Host** | Neon (serverless Postgres) |
| **Auth** | NextAuth.js v4 (JWT + Credentials) |
| **Image CDN** | ImageKit |
| **AI Chatbot** | OpenRouter API (OpenAI-compatible) |
| **Notifications** | Sonner (toast) |
| **Markdown** | react-markdown |
| **Noise/FX** | simplex-noise |
| **Password Hashing** | bcryptjs |
| **Fonts** | Geist Sans + Geist Mono (Google Fonts) |
| **Deployment** | Vercel (with cron jobs) |
| **Analytics** | Google Tag Manager (`GTM-PK589K8Z`) |

---

## 📁 Project Structure

```
nxtech-solutions/
├── app/
│   ├── layout.tsx                 ← Root layout (GTM, AuthProvider, Toaster)
│   ├── globals.css
│   ├── not-found.tsx
│   ├── favicon.ico
│   ├── (mainRoutes)/              ← Public website route group
│   │   ├── layout.tsx             ← Navbar + Footer + LazyWidgets
│   │   ├── page.tsx               ← Home page (SSR + ISR 1hr)
│   │   ├── about/
│   │   ├── blog/
│   │   ├── careers/
│   │   ├── contact/
│   │   ├── get-quote/
│   │   ├── services/[slug]/       ← Dynamic service pages
│   │   ├── privacy-policy/
│   │   └── terms-of-service/
│   ├── (adminRoutes)/             ← Protected admin area
│   │   ├── auth/                  ← Login page
│   │   └── dashboard/             ← Full CMS dashboard
│   │       ├── achievements/
│   │       ├── applications/
│   │       ├── blogs/
│   │       ├── contacts/
│   │       ├── industries/
│   │       ├── jobs/
│   │       ├── portfolios/
│   │       ├── services/
│   │       ├── settings/
│   │       ├── testimonials/
│   │       └── users/
│   └── api/
│       ├── auth/                  ← NextAuth handler
│       ├── chatbot/               ← AI chatbot (OpenRouter)
│       ├── cron/                  ← Cron jobs (scheduled blogs)
│       ├── revalidate/            ← ISR revalidation endpoint
│       └── admin/                 ← Admin CRUD APIs
│           ├── achievements/
│           ├── applications/
│           ├── blog-categories/
│           ├── blogs/
│           ├── contact-submissions/
│           ├── dashboard/
│           ├── industries/
│           ├── jobs/
│           ├── portfolios/
│           ├── quote-requests/
│           ├── services/
│           ├── settings/
│           ├── team-members/
│           ├── testimonials/
│           ├── uploads/           ← ImageKit file upload
│           └── users/
├── components/
│   ├── admin/                     ← 21 admin dashboard components
│   ├── navigations/               ← Navbar, AdminSidebar, Footer
│   ├── providers/                 ← AuthSessionProvider
│   ├── sections/                  ← 40 page section components
│   ├── services/                  ← Service detail page renderer
│   └── ui/                        ← 29 reusable UI components
├── lib/
│   ├── auth.ts                    ← NextAuth config
│   ├── prisma.ts                  ← Prisma client singleton
│   ├── imagekit.ts                ← ImageKit SDK instance
│   ├── revalidate.ts              ← ISR revalidation helpers
│   ├── utils.ts                   ← cn() utility
│   ├── blog-data.ts               ← Static blog seed data
│   ├── services-data.ts           ← Static services data (34KB)
│   └── core-services-home-data.ts ← Homepage services data
├── prisma/
│   ├── schema.prisma              ← Full DB schema
│   ├── migrations/                ← Migration history
│   └── seed-*.ts / seed.js       ← Seed scripts per entity
├── public/                        ← Static assets (logo, hero images)
├── next.config.ts                 ← Next.js configuration
├── vercel.json                    ← Vercel cron configuration
└── .env                           ← Environment variables
```

---

## 🗄️ Database Schema (PostgreSQL via Prisma)

The database contains **14 models**:

| Model | Purpose |
|---|---|
| `User` | Admin-only login accounts (bcrypt passwords, `isAdmin` flag) |
| `Service` | Services shown across site; JSON fields for rich structured content |
| `Industry` | Industries served (About/Services sections) |
| `Portfolio` | Case study portfolio projects with before/after metrics |
| `CaseStudy` | Sub-model linked to Portfolio projects |
| `Testimonial` | Client testimonials, optionally linked to Portfolio |
| `AchievementCertification` | Achievements + certifications (type enum: ACHIEVEMENT/CERTIFICATION) |
| `BlogCategory` | Blog taxonomy categories |
| `Blog` | Blog posts (HTML content, tags[], publishing/scheduling, author) |
| `TeamMember` | About page team members (no login) |
| `ContactSubmission` | Contact form leads (status: NEW/READ/REPLIED) |
| `QuoteRequest` | Multi-step quote form submissions (status: NEW/IN_PROGRESS/QUOTED/COMPLETED) |
| `ChatLead` | Leads captured via AI chatbot widget |
| `Job` | Career job postings |
| `JobApplication` | Candidate applications (status: NEW/SHORTLISTED/REJECTED) |

---

## 🌐 Public Website — Pages & Routes

| Route | Description |
|---|---|
| `/` | Home — Hero, Core Services, Industries, Testimonials, CTA |
| `/about` | About — Hero, Company Intro, Story, Leadership, Process, Achievements, Culture |
| `/services` | Services listing page |
| `/services/[slug]` | Dynamic detail pages for each service |
| `/blog` | Blog listing |
| `/blog/[slug]` | Blog detail pages |
| `/careers` | Careers listing |
| `/careers/[slug]` | Job detail & application form |
| `/contact` | Contact form page |
| `/get-quote` | Multi-step quote request form |
| `/privacy-policy` | Privacy Policy |
| `/terms-of-service` | Terms of Service |

### Services Offered (19 total)

**Main Services (9):** IT Services, Digital Marketing, Lead Generation, AI Sales Agent, AI Chatbot, Web & App Development, Cloud Solutions, Cybersecurity, Custom Software

**Additional Services (10):** Creatives, Content Writing, Business Plans & Strategy, Administrative Assistance, Website Designing, SEO, Custom Development, CRM Assistance, Staff Augmentation, White Label

---

## 🔐 Admin Dashboard (`/dashboard`)

A fully protected CMS accessible only to users with `isAdmin: true`.

**Authentication:** NextAuth v4 with Credentials provider + JWT sessions + bcrypt password hashing. Admin users are locked behind an `isAdmin` DB flag.

**Dashboard Sections (11 management panels):**

| Panel | Component |
|---|---|
| Overview | Analytics cards, recent activity feed, traffic overview |
| **Blogs** | Rich markdown editor, categories, scheduling, publish/draft |
| **Services** | Full CRUD with JSON rich fields |
| **Portfolios** | Case studies, before/after metrics, featured flag |
| **Testimonials** | Rating, featured toggle, portfolio link |
| **Industries** | Industry list with image and JSON services field |
| **Achievements** | Achievements & Certifications combined |
| **Jobs** | Job postings management |
| **Applications** | View & status job applications |
| **Contacts** | Contact forms, Quote requests, Chatbot leads |
| **Users** | Admin user accounts management |
| **Settings** | Site-wide settings management |

---

## 🤖 AI Chatbot

- Uses **OpenRouter API** (OpenAI-compatible) via `/api/chatbot/route.ts` (15KB — largest API file)
- Captures leads (name, email, phone, company, budget, source page) into the `ChatLead` model
- Displayed as a floating live-chat widget `live-chat-widget.tsx` (24KB)
- Lazily loaded with `lazy-widgets-client.tsx` to reduce initial bundle

---

## ⚡ Performance & Infrastructure

### ISR (Incremental Static Regeneration)
- Home page: `revalidate = 3600` (1 hour)
- Admin mutations call `revalidatePublicPages()` which triggers both `revalidatePath()` and the `/api/revalidate` endpoint for maximum reliability

### Image Optimization
- **Next.js Image** with AVIF + WebP formats
- Remote patterns: Unsplash, ImageKit (`ik.imagekit.io`), Pinterest
- Device sizes tuned from 640px to 1920px

### Code Splitting
- Heavy sections (Testimonials, Industries, CTABanner) use `next/dynamic` for lazy loading
- `optimizePackageImports` for `lucide-react` and `motion`

### Vercel Cron
- **Daily at midnight (UTC)**: `/api/cron/publish-scheduled-blogs` — auto-publishes scheduled blog posts

### Static Asset Caching
- `/_next/static/*` → `Cache-Control: public, max-age=31536000, immutable`

---

## 🎨 UI Component Library (29 components in `/components/ui`)

Custom-built components including:
- `floating-navbar.tsx` — scroll-aware floating navbar
- `resizable-navbar.tsx` — alternative resizable navbar
- `live-chat-widget.tsx` — full AI chat UI
- `hero-parallax.tsx` — parallax hero effect
- `wavy-background.tsx` — animated wavy SVG background
- `particles-background.tsx` — simplex-noise particle system
- `typewriter-effect.tsx` — typewriter animation
- `timeline.tsx` — process/timeline component
- `portfolio-card.tsx` — portfolio display card
- `service-card.tsx` — service display card
- `page-loader.tsx` — full-page loading screen
- `whatsapp-button.tsx` — floating WhatsApp CTA button
- `gtm-delayed.tsx` — performance-safe GTM loader (loads after idle + 2s delay)
- Standard: `button`, `badge`, `card`, `input`, `label`, `select`, `tabs`, `table`, `switch`, `popover`, `dropdown-menu`, `sonner`, `sidebar`

---

## 🔧 Environment Variables

| Variable | Purpose |
|---|---|
| `DATABASE_URL` | Neon PostgreSQL connection string |
| `NEXTAUTH_SECRET` | JWT signing secret |
| `NEXTAUTH_URL` | Auth callback base URL |
| `IMAGEKIT_*` | ImageKit SDK credentials (public key, private key, URL endpoint) |
| `OPENROUTER_API_KEY` | AI chatbot API key |
| `NEXT_PUBLIC_CALENDLY_LINK` | Calendly scheduling embed |
| `NEXT_PUBLIC_SITE_URL` | Production site URL |
| `NEXT_PUBLIC_SITE_NAME` | Site display name ("NxTechNova") |
| `NEXT_PUBLIC_SITE_TAGLINE` | "Vision To Velocity" |
| `NEXT_PUBLIC_USER_EMAIL` | Contact email |
| `NEXT_PUBLIC_USER_PHONE` | Contact phone |
| `NEXT_PUBLIC_FACEBOOK_URL` | Social — Facebook |
| `NEXT_PUBLIC_TWITTER_URL` | Social — Twitter/X |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Social — Instagram |
| `NEXT_PUBLIC_LINKEDIN_URL` | Social — LinkedIn |
| `REVALIDATION_SECRET` | Secret for ISR revalidation API |
| `CRON_SECRET` | Secret to protect cron endpoints |
| `REVALIDATE_TIME` | ISR cache time (3600 seconds) |

---

## 📦 Key NPM Scripts

| Script | Command |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | `prisma generate && next build` |
| `npm run seed:all` | Seed all DB tables from scratch |
| `npm run seed:admin` | Seed admin user only |
| `npm run seed:blogs` | Seed blog posts |
| `npm run seed:services` | Seed services data |
| `npm run seed:portfolios` | Seed portfolio items |
| `npm run seed:testimonials` | Seed testimonials |
| `npm run seed:achievements` | Seed achievements |
| `npm run seed:industries` | Seed industries |

---

## 🏢 Business Contact (from README)

- **Brand**: NxTechNova (NxTech Solutions)
- **Phone**: +44 757 588 8810
- **Email**: contact@nextech.com
- **Address**: Building 40C Office 07, 4th Floor, Main Khayaban-e-Bukhari, DHA Phase 6, Karachi
- **Website**: https://nxtechnova.com
- **Built by**: Uzair Ullah

---

## ✅ Feature Completion Status

| Feature | Status |
|---|---|
| Public marketing website | ✅ Complete |
| Dynamic service pages (19 services) | ✅ Complete |
| Admin CMS dashboard | ✅ Complete |
| Blog system (create, schedule, publish) | ✅ Complete |
| AI chatbot with lead capture | ✅ Complete |
| Contact & quote forms | ✅ Complete |
| Careers portal (jobs + applications) | ✅ Complete |
| ImageKit file uploads | ✅ Complete |
| ISR + cache revalidation | ✅ Complete |
| Vercel cron (scheduled blog publishing) | ✅ Complete |
| Google Tag Manager integration | ✅ Complete |
| Calendly embed | ✅ Complete |
| Multi-language support | ❌ Not started |
| Analytics integration (beyond GTM) | ❌ Not started |
| Performance monitoring | ❌ Not started |

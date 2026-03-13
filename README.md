# dentistssydney.com.au

A fully SEO-optimised multi-page Next.js 14 lead generation website targeting "[suburb] dentist" searches across all Sydney suburbs.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Sitemap:** `next-sitemap`
- **Rendering:** Static Site Generation (SSG) — all suburb pages pre-rendered at build time
- **Deploy target:** Vercel (recommended) or any static host

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 3. Build for production

```bash
npm run build
```

This will:
1. Build the Next.js app (pre-rendering all 250+ suburb pages)
2. Run `next-sitemap` to generate `/sitemap.xml` and `/robots.txt`

---

## Project Structure

```
/app
  /page.tsx                       # Homepage — targets "dentist Sydney"
  /layout.tsx                     # Root layout with Header + Footer
  /globals.css                    # Global Tailwind styles
  /not-found.tsx                  # 404 page
  /dentist/[suburb]/page.tsx      # Suburb page template (SSG)
  /contact/page.tsx               # Contact + lead form
  /about/page.tsx                 # About page
  /privacy/page.tsx               # Privacy Policy
  /terms/page.tsx                 # Terms of Service
  /services/                      # (scaffold for Phase 2 service pages)

/lib
  /suburbs.ts                     # Full suburbs array, slug helpers, region groupings
  /content-generator.ts           # Generates varied content per suburb (no API calls)

/components
  /Header.tsx                     # Sticky nav with dropdown menus
  /Footer.tsx                     # Footer with disclaimer and links
  /LeadForm.tsx                   # Inline + modal lead capture form
  /FAQAccordion.tsx               # Accessible FAQ accordion
  /ServiceCard.tsx                # Service card with icons + data
  /SuburbHero.tsx                 # Hero section for suburb pages
  /BreadcrumbNav.tsx              # Breadcrumb with JSON-LD schema
```

---

## Adding Form Handling

The lead form in `/components/LeadForm.tsx` currently logs submissions to the console and attempts a `POST` to `/api/lead` (which doesn't exist yet). To wire up real form handling:

### Option A: Formspree (easiest)

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy the form endpoint (e.g. `https://formspree.io/f/xyzabc12`)
3. In `LeadForm.tsx`, replace the fetch call:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

### Option B: EmailJS

1. Set up [EmailJS](https://www.emailjs.com/) with your email provider
2. Install: `npm install @emailjs/browser`
3. Replace the fetch in `LeadForm.tsx` with the EmailJS send method

### Option C: Custom API Route (Next.js)

Create `/app/api/lead/route.ts`:

```typescript
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  
  // Send email, write to database, forward to CRM, etc.
  console.log('New lead:', data)
  
  return NextResponse.json({ success: true })
}
```

### Option D: Webhook (Make.com, Zapier, n8n)

Replace the fetch URL with your webhook URL from Make.com or Zapier. The payload format is:

```json
{
  "name": "Jane Smith",
  "phone": "0400 000 000",
  "suburb": "Parramatta",
  "preferredTime": "morning",
  "message": "Looking for a family dentist"
}
```

---

## Adding Suburbs

To add new suburbs, edit `/lib/suburbs.ts` and add suburb names to the `suburbs` array. The `uniqueSuburbs` export deduplicates and sorts automatically.

Each new suburb will automatically get:
- A pre-generated SEO page at `/dentist/[slug]`
- Unique content via the template rotation in `content-generator.ts`
- Sitemap inclusion

---

## Content Customisation

Content is generated in `/lib/content-generator.ts` using template rotation (no AI API required at build time). To customise:

- **Intro paragraphs:** Edit the `templates` array in `generateIntroParagraph()`
- **FAQ answers:** Edit the answer arrays in `generateFAQs()`
- **Why local section:** Edit templates in `generateWhyLocalSection()`
- **Meta descriptions:** Edit templates in `generateMetaDescription()`

The template index is determined by a simple string hash of the suburb name, ensuring the same suburb always gets the same template (deterministic) while different suburbs get different variations.

---

## Deploying to Vercel

1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel will auto-detect Next.js — no additional configuration needed
4. Set the environment variable:
   ```
   SITE_URL=https://dentistssydney.com.au
   ```
5. Deploy

### Custom Domain

In your Vercel project settings → Domains, add `dentistssydney.com.au`. Then update your DNS:
- Type: `A` record, Name: `@`, Value: Vercel's IP (shown in dashboard)
- Type: `CNAME`, Name: `www`, Value: `cname.vercel-dns.com`

---

## SEO Checklist

- ✅ Unique `<title>` and `<meta description>` per suburb page
- ✅ Canonical URLs on all pages
- ✅ Open Graph tags
- ✅ `LocalBusiness` JSON-LD schema on suburb pages
- ✅ `FAQPage` JSON-LD schema on suburb pages
- ✅ `BreadcrumbList` JSON-LD schema
- ✅ `WebSite` JSON-LD schema on homepage
- ✅ `generateStaticParams()` for all suburb pages (SSG)
- ✅ `/sitemap.xml` auto-generated via `next-sitemap`
- ✅ `/robots.txt` auto-generated
- ✅ H1 → H2 → H3 heading hierarchy
- ✅ Internal linking (homepage → suburb pages, suburb → nearby suburbs)
- ✅ ARIA labels and semantic HTML throughout
- ✅ Mobile-first responsive design

---

## Phase 2 — Service Pages

The navigation and footer already include links to service pages. To build them, create:

```
/app/services/general-dentistry/page.tsx
/app/services/cosmetic-dentistry/page.tsx
/app/services/emergency-dentist/page.tsx
/app/services/teeth-whitening/page.tsx
/app/services/invisalign/page.tsx
/app/services/dental-implants/page.tsx
```

Each service page can link to relevant suburb pages for internal linking SEO value.

---

## License

This project is proprietary. All rights reserved.

# SerpEyes Website

Marketing website for SerpEyes, a digital growth agency specialising in Answer Engine
Optimisation (AEO) and Generative Engine Optimisation (GEO), with web development, app
development and digital marketing as supporting services. Built with Astro, React and
Tailwind CSS, deployed on Cloudflare Pages.

## Project Overview

**Company**: SerpEyes, digital growth agency
**Specialisation**: AEO/GEO, getting businesses cited in ChatGPT, Perplexity and Google
AI Overviews, backed by real website/app development capability
**Markets**: Singapore (primary), United Kingdom, United States (in progress)
**Purpose**: Generate leads, book consultations, sell SEO+AEO retainer subscriptions,
showcase real client case studies

## Project Structure

```
serpeyes-website/
├── public/
│   ├── favicon.ico / favicon-*.png
│   ├── robots.txt              # Explicitly allows major AI crawlers (GPTBot, PerplexityBot, etc)
│   ├── llms.txt                # Summary file for AI crawlers, per the emerging llms.txt convention
│   └── case-studies/           # Client logos and proof screenshots
├── src/
│   ├── components/
│   │   ├── ui/                 # Badge, SectionHeader, FeatureCard
│   │   ├── case-studies/       # CaseStudyStat (stat tile), BrowserMockup (macOS screenshot frame)
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── DeviceMockup.jsx    # Homepage hero animated device mockup (React)
│   │   ├── DemoForm.jsx        # Contact/demo request form (React)
│   │   ├── EarlyAccessForm.jsx # Email capture form (React)
│   │   └── WhatsAppWidget.jsx  # Floating WhatsApp contact button (React)
│   ├── content/
│   │   └── config.js           # ALL site content lives here, single source of truth
│   ├── layouts/
│   │   └── BaseLayout.astro    # Shared layout: head/meta tags, Organization JSON-LD, Nav, Footer
│   └── pages/
│       ├── index.astro         # Homepage
│       ├── about.astro
│       ├── aeo.astro           # Main AEO/GEO service page (FAQ + Service schema)
│       ├── aeo/
│       │   ├── singapore.astro # Singapore-specific AEO landing page
│       │   └── uk.astro        # UK-specific AEO landing page
│       ├── services.astro
│       ├── web-development.astro
│       ├── app-development.astro
│       ├── pricing.astro       # SEO+AEO retainer plans with Stripe checkout
│       ├── case-studies/
│       │   ├── index.astro
│       │   ├── k2l-aircon.astro
│       │   ├── truleum-lofts.astro
│       │   └── united-world-sports-management.astro
│       ├── blog.astro
│       ├── blog/[slug].astro   # Dynamic blog post route, generated from BLOG_POSTS
│       ├── seo-glossary.astro
│       ├── request-demo.astro
│       ├── thank-you.astro     # Post-checkout success page
│       ├── privacy.astro
│       ├── terms.astro
│       ├── sitemap.xml.ts
│       └── api/
│           ├── contact.ts          # Contact form submission, sends via Resend
│           ├── create-checkout.ts  # Creates a Stripe subscription checkout session
│           ├── stripe-webhook.ts   # Handles checkout.session.completed, sends confirmation emails
│           └── test-checkout.ts    # Unlisted diagnostic endpoint, generates a $0.50 test session
├── astro.config.mjs
├── tailwind.config.mjs
├── .env.example             # Required environment variables
└── package.json
```

## Tech Stack

- **Framework**: Astro 4.x, hybrid output (static pages + on-demand API routes)
- **UI Library**: React 18 (interactive components only, loaded with `client:load`)
- **Styling**: Tailwind CSS 3.x (base styles disabled, most styling is inline per-component)
- **Fonts**: Sora (headings), DM Sans (body), self-hosted via Google Fonts
- **Deployment**: Cloudflare Pages, `@astrojs/cloudflare` adapter
- **Payments**: Stripe (subscription checkout for retainer plans), integrated via direct
  REST API calls, not the `stripe` npm package, keeps it compatible with the Cloudflare
  Workers runtime
- **Email**: Resend, used by the contact form and post-checkout confirmation emails
- **Language**: JavaScript for content/pages, TypeScript for the `api/` routes

## Content Management

Nearly all website copy lives in `src/content/config.js`: hero text, service descriptions,
FAQ content, pricing plan details, testimonials, blog post metadata, contact info. Edit
that file for content changes, most `.astro` files just render whatever it exports.

Exceptions: the case study pages (`src/pages/case-studies/*.astro`) and the AEO geo pages
(`src/pages/aeo/singapore.astro`, `src/pages/aeo/uk.astro`) have their copy written
directly in the page files rather than in config.js, since each is a one-off page with
unique content, not a repeated template.

## Environment Variables

Copy `.env.example` to `.env` for local development. In production these are set as
Cloudflare Pages environment variables, not committed to the repo.

| Variable | Used by | Notes |
|---|---|---|
| `STRIPE_SECRET_KEY` | `api/create-checkout.ts`, `api/stripe-webhook.ts`, `api/test-checkout.ts` | Same Stripe account/dashboard is shared with another business, switch between `sk_test_...` and `sk_live_...` as needed |
| `STRIPE_WEBHOOK_SECRET` | `api/stripe-webhook.ts` | Per-endpoint AND per-mode, test mode and live mode each need their own webhook endpoint registered in Stripe with their own secret |
| `RESEND_API_KEY` | `api/contact.ts`, `api/stripe-webhook.ts` | |
| `CONTACT_TO_EMAIL` | `api/contact.ts` | Inbox that receives contact form leads |
| `CONTACT_FROM_EMAIL` | `api/contact.ts`, `api/stripe-webhook.ts` | Optional, has a fallback if unset |

The Stripe checkout flow creates monthly subscription sessions for the two retainer plans
defined in `PRICING_RETAINERS` (`src/content/config.js`), with prices duplicated
server-side in `PLANS` inside `api/create-checkout.ts`, the client never dictates price.
The webhook sends a personal-toned confirmation email from the founder to the customer,
and a data-table notification email to the internal team.

## Getting Started

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Visit `http://localhost:4321`

### Build for Production
```bash
npm run build
```
Output: `dist/` folder

### Preview Production Build
```bash
npm run preview
```

There is no automated test suite. Changes are verified with `npm run build` succeeding
and manually checking the built `dist/` output for expected content.

## Pages & Routes

| Route | Purpose |
|---|---|
| `/` | Homepage |
| `/about` | Company story, mission, values |
| `/aeo` | Main AEO/GEO service page, deliberately not using the standard badge/card template |
| `/aeo/singapore` | Singapore-specific AEO landing page |
| `/aeo/uk` | UK-specific AEO landing page |
| `/services` | Full service list overview |
| `/web-development` | Web development service page |
| `/app-development` | App development service page |
| `/pricing` | SEO+AEO retainer plans with live currency display and Stripe checkout |
| `/case-studies` | Case study index |
| `/case-studies/k2l-aircon` | K2L Aircon (Singapore) |
| `/case-studies/truleum-lofts` | Truleum Loft Specialist (Cambridge, UK) |
| `/case-studies/united-world-sports-management` | United World Sports Management (Singapore) |
| `/blog` | Blog index |
| `/blog/[slug]` | Individual blog posts, generated from `BLOG_POSTS` in config.js |
| `/seo-glossary` | SEO/AEO term glossary |
| `/request-demo` | Contact form |
| `/thank-you` | Post-checkout success page |
| `/privacy`, `/terms` | Legal pages |

Each page sets its own meta title/description via `BaseLayout`'s `title`/`description`
props. New pages should keep meta titles to 50-55 characters and descriptions to
140-155 characters where practical.

## Design System

### Colors
- **Primary**: `#1B4FD8` (buttons, links, primary accent)
- **Ink/Body/Muted text**: `#0f172a` / `#475569` / `#94a3b8`
- **Surfaces**: white, `#f8faff` (page background), `#f1f5f9` (card fill), `#e2e8f0`
  (darker alternating section background)
- **Service accent colors**: green `#059669`, purple `#7c3aed`, orange `#ea580c`, pink
  `#db2777` (AEO), gold `#ca8a04`, each tied to a specific service/icon, not interchangeable

### Typography
- **Headings**: Sora, weights 600/700/800
- **Body/UI**: DM Sans, weights 400/500/700

### CSS Classes
- `.badge` - Pill-shaped eyebrow labels
- `.btn-primary` - Primary CTA button
- `.card-hover` - Card with hover lift effect
- `.animate-on-scroll` - Fade-up on scroll animation

### Content Rules
- No em dashes (—) or en dashes (–) anywhere in copy, use commas or periods instead
- Brand name is always "SerpEyes" (capital S, capital E) in display text, the domain,
  email addresses and internal identifiers stay lowercase (`serpeyes.com`, localStorage
  keys, etc)
- AEO and GEO are treated as one combined concept in copy, not explained as two separate
  disciplines

## Interactive Components

Four components use React with `client:load`:

1. **DeviceMockup** - Animated rotating device mockup in the homepage hero, pure CSS
   scaling via `container-type: inline-size`, no JS-based resize measurement
2. **DemoForm** - Contact/request-demo form, posts to `api/contact.ts`
3. **EarlyAccessForm** - Simple email capture
4. **WhatsAppWidget** - Floating WhatsApp contact button, mobile-visible

All other components are static `.astro` files.

## Deployment

See `DEPLOYMENT.md` for Cloudflare Pages deployment instructions. The site deploys
automatically from the `main` branch, there is no staging branch or PR-based workflow,
changes are pushed directly to `main`.

## Support

For questions, contact the SerpEyes team at hello@serpeyes.com

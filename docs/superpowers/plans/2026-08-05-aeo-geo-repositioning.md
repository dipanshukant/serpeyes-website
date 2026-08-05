# AEO/GEO Repositioning + Case Studies Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition serpeyes.com around AEO/GEO as the core offering (web/app/marketing as supporting services), add real AI-crawlability infrastructure, and ship three real client case study pages.

**Architecture:** Astro 4.x static site (hybrid output, Cloudflare adapter), single content source `src/content/config.js`, inline styles matching the established design system (Sora display font, DM Sans body font, `#1B4FD8` primary blue, `#0f172a` dark navy, badge-pill pattern, `.card-hover`/`.animate-on-scroll` utility classes). No test framework is configured in this repo; verification is `npm run build` + `grep` against the built `dist/` output to confirm expected content and structure render, matching this project's existing practice.

**Tech Stack:** Astro, React islands (`client:load`), Tailwind (base styles disabled, inline styles used throughout), plain JS in `<script>` tags for interactivity.

## Global Constraints

- No em dashes (—) or en dashes (–) anywhere in any copy, including inside `.astro`/`.ts`/`.js` string literals and comments.
- Meta titles: 50-55 characters exactly.
- Meta descriptions: 140-155 characters exactly.
- AEO and GEO are referred to as one combined concept ("AEO" as the umbrella term, GEO mentioned in passing, never explained as two separate disciplines).
- Design quality bar: every new page must match the site's existing professional-agency level of polish, not a generic AI-templated look. `src/pages/aeo.astro` is the reference example of a deliberately non-templated page (left-aligned hero, plain-panel comparisons, numbered process list, no badge-headline-3-card-grid recipe repeated from every other page). New pages (geo pages, case studies) should follow that same spirit: a distinct layout suited to their content, not a copy-paste of the standard template.
- Site brand name is always "SerpEyes" (capital S, capital E). Domain, emails, and internal identifiers stay lowercase.

---

## Part B (foundation first): Technical AI-visibility

### Task 1: Allow AI crawlers explicitly in robots.txt

**Files:**
- Modify: `public/robots.txt`

- [ ] **Step 1: Replace the file contents**

```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Amazonbot
Allow: /

Sitemap: https://serpeyes.com/sitemap.xml
```

- [ ] **Step 2: Verify**

Run: `cat public/robots.txt`
Expected: file contains `User-agent: GPTBot` and 7 other named AI crawlers, each with `Allow: /`, plus the original wildcard block and sitemap line unchanged.

- [ ] **Step 3: Commit**

```bash
git add public/robots.txt
git commit -m "Explicitly allow AI crawlers in robots.txt"
```

---

### Task 2: Add llms.txt

**Files:**
- Create: `public/llms.txt`

**Interfaces:**
- Consumes: none.
- Produces: a static file served at `https://serpeyes.com/llms.txt`, no code depends on it.

- [ ] **Step 1: Write the file**

```markdown
# SerpEyes

> SerpEyes is a digital growth agency specialising in Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO), helping businesses get found when people ask AI tools like ChatGPT, Perplexity and Google AI Overviews about their industry, instead of only ranking on traditional Google search. SerpEyes also builds the websites, apps and marketing systems that make AI visibility possible.

SerpEyes is based in Singapore and works with clients across Singapore, the United Kingdom and the United States.

## Core service

- [AEO and GEO](https://serpeyes.com/aeo): getting businesses cited and recommended inside AI answer engines, the agency's primary specialisation.

## Supporting services

- [Web Development](https://serpeyes.com/web-development): custom websites and ecommerce platforms, built to be fast and structured so AI engines can crawl and cite them.
- [App Development](https://serpeyes.com/app-development): Android and iOS apps.
- [Services overview](https://serpeyes.com/services): the full list of what SerpEyes offers.

## Proof

- [Case Studies](https://serpeyes.com/case-studies): real client results, including websites built from scratch that now rank in Google and appear in ChatGPT answers.

## Pricing

- [Pricing](https://serpeyes.com/pricing): SEO plus AEO retainer plans, with website and app development quoted per project.

## Contact

- [Get in touch](https://serpeyes.com/request-demo)
- Email: hello@serpeyes.com
```

- [ ] **Step 2: Verify**

Run: `cat public/llms.txt`
Expected: file exists, starts with `# SerpEyes`, contains links to `/aeo`, `/case-studies`, `/pricing`, `/request-demo`.

- [ ] **Step 3: Commit**

```bash
git add public/llms.txt
git commit -m "Add llms.txt summarising SerpEyes for AI crawlers"
```

---

### Task 3: Add Organization JSON-LD schema sitewide

**Files:**
- Modify: `src/layouts/BaseLayout.astro:1-50` (head section, before `</head>` at line 110)

**Interfaces:**
- Consumes: `SITE` export from `src/content/config.js` (already imported by other pages, not currently imported in `BaseLayout.astro`, needs adding).
- Produces: nothing consumed by other tasks, purely additive markup.

- [ ] **Step 1: Add the SITE import**

In `src/layouts/BaseLayout.astro`, in the frontmatter block (top, between the existing imports and the `interface Props` block), add:

```astro
import { SITE } from '../content/config.js';
```

- [ ] **Step 2: Add the Organization schema script**

Immediately before the closing `</head>` tag (currently line 110), add:

```astro
  <script type="application/ld+json" set:html={JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SerpEyes",
    "url": "https://serpeyes.com",
    "logo": "https://serpeyes.com/logo.svg",
    "email": SITE.email,
    "sameAs": [],
    "description": "SerpEyes is a digital growth agency specialising in Answer Engine Optimisation and Generative Engine Optimisation, helping businesses get found in AI answers and on Google.",
  })} />
```

- [ ] **Step 3: Build and verify**

Run: `npm run build && grep -o '"@type":"Organization"' dist/index.html`
Expected: build completes with no errors, grep finds one match (JSON.stringify strips whitespace so the key:value has no space).

- [ ] **Step 4: Commit**

```bash
git add src/layouts/BaseLayout.astro
git commit -m "Add sitewide Organization JSON-LD schema"
```

---

## Part A: Positioning rewrite

### Task 4: Reorder navigation so AEO leads

**Files:**
- Modify: `src/content/config.js:25-33` (`NAV_LINKS`)

- [ ] **Step 1: Replace NAV_LINKS**

```javascript
export const NAV_LINKS = [
  { label: 'AEO', href: '/aeo' },
  { label: 'Services', href: '/services' },
  { label: 'Web Development', href: '/web-development' },
  { label: 'App Development', href: '/app-development' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];
```

- [ ] **Step 2: Build and verify order**

Run: `npm run build && grep -o 'href="/aeo"' dist/index.html | head -1`

Then manually confirm in `dist/index.html` that the `<nav>` markup lists AEO before Services (search for the nav links list, `AEO` text should appear before `Services` text in source order).

- [ ] **Step 3: Commit**

```bash
git add src/content/config.js
git commit -m "Reorder nav so AEO leads, matching new positioning"
```

---

### Task 5: Rewrite homepage hero, "Why SerpEyes", and services grid

**Files:**
- Modify: `src/content/config.js:40-128` (`HERO`, `DIFF_SECTION`, `DIFF_CARDS`, `FEATURES_SECTION`, `FEATURES`)

**Interfaces:**
- Consumes: none new.
- Produces: none new, `src/pages/index.astro` already reads these exports by name, names are unchanged so no other file needs edits.

- [ ] **Step 1: Replace HERO**

```javascript
export const HERO = {
  badge: 'Answer Engine Optimisation and Generative Engine Optimisation',
  headline: 'Get Found When Customers Ask',
  headlineAccent: 'AI, Not Just Google',
  subheadline: 'SerpEyes gets your business cited in ChatGPT, Perplexity and Google AI Overviews, then builds the website, app and marketing systems that make it possible. One team, one goal: your business is the answer AI gives.',
  btn1: 'Get a Free AEO Check',
  btn2: 'See How It Works',
  footnote: 'Free AI visibility and website audit included. No obligation.',
};
```

- [ ] **Step 2: Replace DIFF_SECTION and the first two DIFF_CARDS entries**

Replace the `DIFF_SECTION` export:

```javascript
export const DIFF_SECTION = {
  badge: 'Why SerpEyes',
  headline: 'We Get You Cited by AI, Then Build Everything That Makes It Stick.',
  sub: 'Most agencies chase Google rankings alone. SerpEyes optimises for how people actually search now, asking ChatGPT and Perplexity directly, and builds the technical foundation AI needs to trust and cite your business.',
};
```

Replace the first two entries of `DIFF_CARDS` (keep entries 3 through 6 unchanged), so the array starts with:

```javascript
export const DIFF_CARDS = [
  { icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z"/><circle cx="12" cy="12" r="2.8" fill="#60a5fa" fill-opacity="0.15"/><path d="M18.8 4.5l.8 1.7 1.7.8-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.8.8-1.7z"/></svg>`, title: 'AEO Is What We Do First', desc: 'While other agencies treat AI search as an afterthought, it is our specialisation. We structure your content and site so ChatGPT, Perplexity and Google AI Overviews can find, understand and recommend your business.' },
  { icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`, title: 'Websites and Apps That Support the Goal', desc: 'A site that is slow or poorly structured cannot be cited, no matter how good the SEO strategy is. We build the technical foundation your AEO strategy actually needs to work.' },
  { icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="2 20 22 20"/></svg>`, title: 'Data-Driven, Not Guesswork', desc: 'Every decision, design choice, keyword or campaign is backed by data on what your customers actually search for and respond to.' },
  { icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></svg>`, title: 'AI-Powered Workflows', desc: 'We use AI-driven research, content and automation to move faster than traditional agencies, without cutting corners on quality or strategy.' },
  { icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`, title: 'Focused on Measurable Growth', desc: 'We track leads, conversions and revenue impact, not vanity metrics. You always know what your investment is actually producing.' },
  { icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`, title: 'Built to Scale With You', desc: 'From your first website to a full multi-channel growth engine, our systems are built to grow alongside your business, not need replacing in a year.' },
];
```

- [ ] **Step 3: Replace FEATURES_SECTION and reorder FEATURES**

Replace `FEATURES_SECTION`:

```javascript
export const FEATURES_SECTION = {
  badge: 'What We Offer',
  headline: 'AEO First, Then the Systems That Support It',
  sub: 'Answer Engine Optimisation is the goal. Everything else we build exists to help you get there and stay there.',
};
```

Replace the `FEATURES` array so the AEO entry (currently 5th) is moved to first position, and every other entry's `desc` gets one added clause connecting it back to AEO (title, icon, iconBg, accent unchanged for all):

```javascript
export const FEATURES = [
  {
    iconBg: '#fdf2f8',
    accent: '#db2777',
    title: 'AEO (Answer Engine Optimisation)',
    desc: 'We structure and optimise your content so AI tools like ChatGPT, Perplexity and Google AI Overviews can find, understand and recommend your business. This is what we specialise in.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#db2777" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z"/><circle cx="12" cy="12" r="2.8" fill="#db2777" fill-opacity="0.15"/><path d="M18.8 4.5l.8 1.7 1.7.8-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.8.8-1.7z"/></svg>`,
  },
  {
    iconBg: '#eff4ff',
    accent: '#1B4FD8',
    title: 'Custom Website Development',
    desc: 'Business websites and eCommerce platforms built fast, structured and crawlable, the technical foundation your AEO strategy needs to get cited.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1B4FD8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  },
  {
    iconBg: '#f0fdf4',
    accent: '#059669',
    title: 'Mobile App Development',
    desc: 'Native and cross platform Android and iOS apps, extending your AI visibility to where your customers already are, not just the browser.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  },
  {
    iconBg: '#f5f3ff',
    accent: '#7c3aed',
    title: 'UI/UX Design',
    desc: 'Interfaces designed around how real users behave, clear flows that keep visitors on a site AI engines already trust enough to send them to.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
  },
  {
    iconBg: '#fff7ed',
    accent: '#ea580c',
    title: 'Search Engine Optimisation',
    desc: 'Technical, on-page and content SEO that grows your organic Google visibility alongside your AI visibility, the two increasingly work together.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  },
  {
    iconBg: '#f0fdf4',
    accent: '#059669',
    title: 'Digital Marketing and Social Media',
    desc: 'Social media marketing and content that builds the brand signals AI engines and Google both weigh when deciding who to recommend.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10v4a1 1 0 001 1h3l4 4V5L7 9H4a1 1 0 00-1 1z"/><path d="M15 8a5 5 0 010 8"/><path d="M18 5a9 9 0 010 14"/></svg>`,
  },
  {
    iconBg: '#eff4ff',
    accent: '#1B4FD8',
    title: 'Website Maintenance and Performance',
    desc: 'Ongoing monitoring, updates, security and speed optimisation, so the technical foundation your AEO results depend on never slips.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1B4FD8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`,
  },
  {
    iconBg: '#fefce8',
    accent: '#ca8a04',
    title: 'Analytics and Reporting',
    desc: 'Clear, regular reporting on rankings, AI citations, traffic and conversions, so you always know exactly what is working.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ca8a04" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="2 20 22 20"/></svg>`,
  },
];
```

- [ ] **Step 4: Build and verify**

Run: `npm run build && grep -o 'Get Found When Customers Ask' dist/index.html`
Expected: one match. Also run `grep -c '—\|–' src/content/config.js` and expect `0` (no em/en dashes introduced).

- [ ] **Step 5: Commit**

```bash
git add src/content/config.js
git commit -m "Rewrite homepage hero, why-SerpEyes, and services grid around AEO"
```

---

### Task 6: Add homepage direct-answer block

**Files:**
- Modify: `src/pages/index.astro` (hero section, find where `HERO.subheadline` renders)

**Interfaces:**
- Consumes: `HERO.subheadline` (from Task 5).

- [ ] **Step 1: Locate the hero subheadline render**

Run: `grep -n "HERO.subheadline" src/pages/index.astro`

- [ ] **Step 2: Add a short, self-contained answer sentence immediately above the existing subheadline paragraph**, styled consistently with the surrounding hero (same font/color conventions as other hero paragraphs on the site, slightly bolder to read as the "answer" line):

```astro
<p style="font-size: 15px; font-weight: 600; color: #1B4FD8; margin: 0 0 8px; font-family: 'DM Sans', sans-serif;">
  SerpEyes is a Singapore-based agency that gets businesses cited in ChatGPT, Perplexity and Google AI Overviews through Answer Engine Optimisation.
</p>
```

Insert this directly before the existing element that renders `{HERO.subheadline}`.

- [ ] **Step 3: Build and verify**

Run: `npm run build && grep -o 'gets businesses cited in ChatGPT' dist/index.html`
Expected: one match.

- [ ] **Step 4: Commit**

```bash
git add src/pages/index.astro
git commit -m "Add direct-answer block to homepage hero for AI extraction"
```

---

### Task 7: Add supporting-service intro paragraphs to Web Development and App Development pages

**Files:**
- Modify: `src/content/config.js:162-167` (`WEBDEV_HERO`), `src/content/config.js:222-227` (`APPDEV_HERO`)

- [ ] **Step 1: Update WEBDEV_HERO.sub**

```javascript
export const WEBDEV_HERO = {
  badge: 'Web Development',
  headline: 'Websites and eCommerce Platforms Built to Convert',
  sub: 'A website that just looks good is not enough. We build fast, modern, secure websites and online stores designed around your customer journey, and around what AI engines need to crawl, understand and cite. This is the foundation every SerpEyes AEO strategy is built on.',
  btn: 'Start Your Website Project',
};
```

- [ ] **Step 2: Update APPDEV_HERO.sub**

```javascript
export const APPDEV_HERO = {
  badge: 'App Development',
  headline: 'Android and iOS Apps Built Around Your Business Goals',
  sub: 'From idea to launch, we design and build mobile apps that solve a real problem for your users and extend your business into the channels your customers already use, alongside the AI visibility work we do everywhere else.',
  btn: 'Start Your App Project',
};
```

- [ ] **Step 3: Build and verify**

Run: `npm run build && grep -o 'foundation every SerpEyes AEO strategy is built on' dist/web-development/index.html && grep -o 'alongside the AI visibility work' dist/app-development/index.html`
Expected: one match each.

- [ ] **Step 4: Commit**

```bash
git add src/content/config.js
git commit -m "Frame web/app development as AEO-supporting services"
```

---

### Task 8: Update About page mission/vision and Pricing hero copy

**Files:**
- Modify: `src/content/config.js:426-429` (`ABOUT_MISSION`), `src/content/config.js:545-549` (`PRICING_HERO`)

- [ ] **Step 1: Replace ABOUT_MISSION**

```javascript
export const ABOUT_MISSION = {
  mission: 'Get businesses found and recommended by AI, by combining Answer Engine Optimisation with the web development, app development and marketing that make it possible. Less guesswork, more citations.',
  vision: 'To be the agency businesses trust to keep them visible wherever search goes next, Google today, AI answer engines now, and whatever comes after.',
};
```

- [ ] **Step 2: Replace PRICING_HERO**

```javascript
export const PRICING_HERO = {
  badge: 'Pricing',
  headline: 'Plans Built Around How Long AEO Growth Actually Takes',
  sub: 'AEO and GEO results take real time to show up in AI answers and rankings. Our retainers run on a 3-month minimum so the work has room to actually work, billed monthly.',
};
```

- [ ] **Step 3: Build and verify**

Run: `npm run build && grep -o 'Get businesses found and recommended by AI' dist/about/index.html && grep -o 'AEO Growth Actually Takes' dist/pricing/index.html`
Expected: one match each.

- [ ] **Step 4: Commit**

```bash
git add src/content/config.js
git commit -m "Rewrite About mission/vision and Pricing hero around AEO"
```

---

### Task 9: Update footer tagline and fix Case Studies link

**Files:**
- Modify: `src/components/Footer.astro:12` (tagline paragraph), `src/components/Footer.astro:30` (Case Studies link href)

- [ ] **Step 1: Replace the footer tagline paragraph**

Find (line 12):
```astro
<p style="font-size: 14px; line-height: 1.7; color: #64748b; max-width: 220px; margin: 0;">A digital growth agency helping businesses build, optimise and scale their online presence through web, app, SEO, AEO and marketing.</p>
```

Replace with:
```astro
<p style="font-size: 14px; line-height: 1.7; color: #64748b; max-width: 220px; margin: 0;">Getting businesses found by AI, through Answer Engine Optimisation and the websites, apps and marketing that make it possible.</p>
```

- [ ] **Step 2: Fix the Case Studies link**

Find the FOOTER_RESOURCES link-rendering line (currently around line 30):
```astro
<a href={item === 'Blog' ? '/blog' : item === 'Services' ? '/services' : '#'} style="color: #64748b; text-decoration: none; font-size: 14px;" onmouseenter="this.style.color='white'" onmouseleave="this.style.color='#64748b'">
```

Replace with:
```astro
<a href={item === 'Blog' ? '/blog' : item === 'Services' ? '/services' : item === 'Case Studies' ? '/case-studies' : '#'} style="color: #64748b; text-decoration: none; font-size: 14px;" onmouseenter="this.style.color='white'" onmouseleave="this.style.color='#64748b'">
```

- [ ] **Step 3: Build and verify**

Run: `npm run build && grep -o 'Getting businesses found by AI' dist/index.html && grep -o 'href="/case-studies"' dist/index.html`
Expected: one match each.

- [ ] **Step 4: Commit**

```bash
git add src/components/Footer.astro
git commit -m "Update footer tagline, fix dead Case Studies link"
```

---

## Part A2: Geo pages

### Task 10: Create /aeo/singapore page

**Files:**
- Create: `src/pages/aeo/singapore.astro`

**Interfaces:**
- Consumes: `SITE` from `src/content/config.js`.

- [ ] **Step 1: Write the page**

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import { SITE } from '../../content/config.js';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Answer Engine Optimisation",
  "provider": { "@type": "Organization", "name": "SerpEyes" },
  "areaServed": { "@type": "Country", "name": "Singapore" },
  "description": "AEO and GEO services for Singapore businesses, getting them cited in ChatGPT, Perplexity and Google AI Overviews.",
};
---

<BaseLayout
  title="AEO Services in Singapore - SerpEyes"
  description="Answer Engine Optimisation for Singapore businesses. Get cited in ChatGPT and Google AI Overviews. Based in Singapore, real local results."
>
  <script type="application/ld+json" set:html={JSON.stringify(serviceSchema)} />
  <main>
    <section style="padding: 80px 24px 56px; background: linear-gradient(180deg, #f8faff 0%, white 100%);">
      <div style="max-width: 780px; margin: 0 auto;">
        <span class="badge" style="margin-bottom: 16px; display: inline-block;">Singapore</span>
        <h1 style="font-family: Sora, sans-serif; font-size: clamp(28px, 5vw, 44px); font-weight: 700; color: #0f172a; margin: 0 0 20px; letter-spacing: -0.02em; line-height: 1.2;">
          AEO and GEO Services for Singapore Businesses
        </h1>
        <p style="font-size: 16px; font-weight: 600; color: #1B4FD8; margin: 0 0 12px; font-family: 'DM Sans', sans-serif;">
          SerpEyes is a Singapore-based AEO agency that gets local businesses cited in ChatGPT, Perplexity and Google AI Overviews.
        </p>
        <p style="font-size: 17px; color: #475569; line-height: 1.8; margin: 0 0 32px; max-width: 640px;">
          We are based here, we work with Singapore businesses every day, and we have real results to show for it, not case studies borrowed from somewhere else.
        </p>
        <a href="/request-demo" class="btn-primary" style="padding: 14px 32px; border-radius: 10px; font-size: 16px; text-decoration: none; display: inline-block;">
          Get a Free AEO Check
        </a>
      </div>
    </section>

    <section style="padding: 64px 24px; background: white; border-top: 1px solid #eef2f8;">
      <div style="max-width: 780px; margin: 0 auto;">
        <h2 style="font-family: Sora, sans-serif; font-size: clamp(22px, 3vw, 28px); font-weight: 700; color: #0f172a; margin: 0 0 20px;">
          Real Singapore Results
        </h2>
        <p style="font-size: 15.5px; color: #475569; line-height: 1.8; margin: 0 0 16px;">
          K2L Aircon, a reconditioned air conditioner business we built the website for from scratch, now appears in ChatGPT for searches like "best aircon company to buy second hand ac in Singapore" and ranks on Google's first page for "buy used aircon in Singapore".
        </p>
        <a href="/case-studies/k2l-aircon" style="color: #1B4FD8; font-weight: 600; text-decoration: none; font-size: 15px;">Read the K2L case study &rarr;</a>
      </div>
    </section>

    <section style="padding: 56px 24px; background: #f8faff;">
      <div style="max-width: 780px; margin: 0 auto;">
        <h2 style="font-family: Sora, sans-serif; font-size: 20px; font-weight: 700; color: #0f172a; margin: 0 0 16px;">
          Contact SerpEyes Singapore
        </h2>
        <p style="font-size: 14.5px; color: #64748b; margin: 0 0 6px;">{SITE.location}</p>
        <p style="font-size: 14.5px; color: #64748b; margin: 0;">{SITE.phones[0].number}</p>
      </div>
    </section>

    <section style="padding: 72px 24px; background: linear-gradient(135deg, #1B4FD8 0%, #1640c4 100%);">
      <div style="max-width: 600px; margin: 0 auto; text-align: center;">
        <h2 style="font-family: Sora, sans-serif; font-size: clamp(22px, 3vw, 30px); font-weight: 700; color: white; margin: 0 0 16px;">
          Get Found by AI in Singapore
        </h2>
        <a href="/request-demo" style="padding: 14px 32px; background: white; color: #1B4FD8; border: none; border-radius: 10px; font-weight: 600; font-size: 16px; cursor: pointer; font-family: DM Sans, sans-serif; text-decoration: none; display: inline-block;">
          Book a Free Consultation
        </a>
      </div>
    </section>
  </main>
</BaseLayout>
```

- [ ] **Step 2: Build and verify**

Run: `npm run build && ls dist/aeo/singapore/index.html && grep -o 'AEO and GEO Services for Singapore Businesses' dist/aeo/singapore/index.html`
Expected: file exists, one match.

- [ ] **Step 3: Commit**

```bash
git add src/pages/aeo/singapore.astro
git commit -m "Add /aeo/singapore geo landing page"
```

---

### Task 11: Create /aeo/uk page

**Files:**
- Create: `src/pages/aeo/uk.astro`

- [ ] **Step 1: Write the page**

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Answer Engine Optimisation",
  "provider": { "@type": "Organization", "name": "SerpEyes" },
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "description": "AEO and GEO services for UK businesses, getting them cited in ChatGPT, Perplexity and Google AI Overviews.",
};
---

<BaseLayout
  title="AEO Services for UK Businesses in Cambridge - SerpEyes"
  description="Answer Engine Optimisation for UK businesses. Get cited in ChatGPT, Perplexity and rank on Google. Registered UK office, real UK client results."
>
  <script type="application/ld+json" set:html={JSON.stringify(serviceSchema)} />
  <main>
    <section style="padding: 80px 24px 56px; background: linear-gradient(180deg, #f8faff 0%, white 100%);">
      <div style="max-width: 780px; margin: 0 auto;">
        <span class="badge" style="margin-bottom: 16px; display: inline-block;">United Kingdom</span>
        <h1 style="font-family: Sora, sans-serif; font-size: clamp(28px, 5vw, 44px); font-weight: 700; color: #0f172a; margin: 0 0 20px; letter-spacing: -0.02em; line-height: 1.2;">
          AEO and GEO Services for UK Businesses
        </h1>
        <p style="font-size: 16px; font-weight: 600; color: #1B4FD8; margin: 0 0 12px; font-family: 'DM Sans', sans-serif;">
          SerpEyes has a registered UK office and gets UK businesses cited in ChatGPT, Perplexity and Google AI Overviews.
        </p>
        <p style="font-size: 17px; color: #475569; line-height: 1.8; margin: 0 0 32px; max-width: 640px;">
          We already have UK clients ranking on page one of Google and showing up in AI answers. Here is proof, not a promise.
        </p>
        <a href="/request-demo" class="btn-primary" style="padding: 14px 32px; border-radius: 10px; font-size: 16px; text-decoration: none; display: inline-block;">
          Get a Free AEO Check
        </a>
      </div>
    </section>

    <section style="padding: 64px 24px; background: white; border-top: 1px solid #eef2f8;">
      <div style="max-width: 780px; margin: 0 auto;">
        <h2 style="font-family: Sora, sans-serif; font-size: clamp(22px, 3vw, 28px); font-weight: 700; color: #0f172a; margin: 0 0 20px;">
          Real UK Results
        </h2>
        <p style="font-size: 15.5px; color: #475569; line-height: 1.8; margin: 0 0 16px;">
          Truleum Loft Specialist, a Cambridgeshire loft conversion company, had their entire website and a custom invoicing app built by SerpEyes from scratch. They now rank on Google's first page for "best loft conversion company in Cambridge UK".
        </p>
        <a href="/case-studies/truleum-lofts" style="color: #1B4FD8; font-weight: 600; text-decoration: none; font-size: 15px;">Read the Truleum case study &rarr;</a>
      </div>
    </section>

    <section style="padding: 56px 24px; background: #f8faff;">
      <div style="max-width: 780px; margin: 0 auto;">
        <h2 style="font-family: Sora, sans-serif; font-size: 20px; font-weight: 700; color: #0f172a; margin: 0 0 16px;">
          Contact SerpEyes UK
        </h2>
        <p style="font-size: 14.5px; color: #64748b; margin: 0;">71-75 Shelton St, London WC2H 9JQ</p>
      </div>
    </section>

    <section style="padding: 72px 24px; background: linear-gradient(135deg, #1B4FD8 0%, #1640c4 100%);">
      <div style="max-width: 600px; margin: 0 auto; text-align: center;">
        <h2 style="font-family: Sora, sans-serif; font-size: clamp(22px, 3vw, 30px); font-weight: 700; color: white; margin: 0 0 16px;">
          Get Found by AI in the UK
        </h2>
        <a href="/request-demo" style="padding: 14px 32px; background: white; color: #1B4FD8; border: none; border-radius: 10px; font-weight: 600; font-size: 16px; cursor: pointer; font-family: DM Sans, sans-serif; text-decoration: none; display: inline-block;">
          Book a Free Consultation
        </a>
      </div>
    </section>
  </main>
</BaseLayout>
```

Note: no phone number shown per the spec, add one later once the UK number is live (edit the contact section to add a `<p>` matching the Singapore page's phone line once you have the number).

- [ ] **Step 2: Build and verify**

Run: `npm run build && ls dist/aeo/uk/index.html && grep -o 'AEO and GEO Services for UK Businesses' dist/aeo/uk/index.html && grep -o '71-75 Shelton St' dist/aeo/uk/index.html`
Expected: file exists, one match each.

- [ ] **Step 3: Commit**

```bash
git add src/pages/aeo/uk.astro
git commit -m "Add /aeo/uk geo landing page"
```

---

### Task 12: Link geo pages from the main AEO page and footer

**Files:**
- Modify: `src/pages/aeo.astro` (add a section before the CTA)
- Modify: `src/components/Footer.astro` (add two links near the resources column)

- [ ] **Step 1: Add a geo-links section to aeo.astro**

Insert this new `<section>` in `src/pages/aeo.astro` immediately before the final CTA section (before the `<!-- CTA -->` comment):

```astro
    <!-- Geo links -->
    <section style="padding: 48px 24px; background: white; border-top: 1px solid #eef2f8; text-align: center;">
      <p style="font-size: 14px; color: #94a3b8; margin: 0 0 12px;">Serving businesses in</p>
      <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
        <a href="/aeo/singapore" style="color: #1B4FD8; font-weight: 600; text-decoration: none; font-size: 15px;">Singapore</a>
        <a href="/aeo/uk" style="color: #1B4FD8; font-weight: 600; text-decoration: none; font-size: 15px;">United Kingdom</a>
      </div>
    </section>
```

- [ ] **Step 2: Add geo links to the footer**

In `src/components/Footer.astro`, inside the "Company" column `<div>` (the one that maps over `NAV_LINKS`), add two extra static links immediately after the `{NAV_LINKS.map(...)}` block closes:

```astro
        <div style="margin-bottom: 10px;">
          <a href="/aeo/singapore" style="color: #64748b; text-decoration: none; font-size: 14px;" onmouseenter="this.style.color='white'" onmouseleave="this.style.color='#64748b'">
            AEO Singapore
          </a>
        </div>
        <div style="margin-bottom: 10px;">
          <a href="/aeo/uk" style="color: #64748b; text-decoration: none; font-size: 14px;" onmouseenter="this.style.color='white'" onmouseleave="this.style.color='#64748b'">
            AEO UK
          </a>
        </div>
```

- [ ] **Step 3: Build and verify**

Run: `npm run build && grep -o 'href="/aeo/singapore"' dist/aeo/index.html && grep -o 'href="/aeo/uk"' dist/index.html`
Expected: one match each (first from the aeo.astro geo-links section, second from the footer which renders on every page including home).

- [ ] **Step 4: Commit**

```bash
git add src/pages/aeo.astro src/components/Footer.astro
git commit -m "Link geo pages from AEO page and footer"
```

---

### Task 13: Add FAQ section and FAQPage schema to the AEO page

**Files:**
- Modify: `src/content/config.js` (add new `AEO_FAQ` export near the other `AEO_*` exports, around line 508 after `AEO_LIMITS`)
- Modify: `src/pages/aeo.astro` (import `AEO_FAQ`, add schema, add FAQ section)

**Interfaces:**
- Produces: `AEO_FAQ` export, an array of `{ q: string, a: string }` objects, consumed only by `src/pages/aeo.astro`.

- [ ] **Step 1: Add AEO_FAQ to config.js**

Insert immediately after the closing `];` of `AEO_LIMITS` (find with `grep -n "AEO_LIMITS = \[" src/content/config.js` and locate its closing bracket):

```javascript
export const AEO_FAQ = [
  {
    q: 'What is AEO (Answer Engine Optimisation)?',
    a: 'AEO is the practice of structuring your website and content so AI tools like ChatGPT, Perplexity and Google AI Overviews can find, understand and cite your business when someone asks a relevant question.',
  },
  {
    q: 'Is AEO different from GEO?',
    a: 'GEO (Generative Engine Optimisation) describes the same goal, getting cited inside AI-generated answers. SerpEyes treats AEO and GEO as one combined service, not two separate offerings.',
  },
  {
    q: 'How long does AEO take to show results?',
    a: 'Most clients see initial movement within 6 to 8 weeks, with stronger results by month 3. That is why our retainers run on a 3-month minimum, AI indexing and trust signals take real time to build.',
  },
  {
    q: 'Do I still need traditional SEO if I do AEO?',
    a: 'Yes. AI answer engines pull from many of the same signals traditional search engines use, clean structure, clear content and technical health. SerpEyes runs SEO and AEO together, not as separate tracks.',
  },
  {
    q: 'Can any business benefit from AEO?',
    a: 'Any business whose customers ask questions online benefits from AEO, from service businesses to ecommerce stores. The specific tactics vary, but the goal is the same: being the answer AI gives.',
  },
];
```

- [ ] **Step 2: Update the aeo.astro imports and add the schema**

In `src/pages/aeo.astro`, update the import block to add `AEO_FAQ`:

```astro
import {
  AEO_HERO,
  AEO_COMPARISON,
  AEO_EXPLAINER,
  AEO_PROCESS_SECTION,
  AEO_PROCESS,
  AEO_LIMITS_SECTION,
  AEO_LIMITS,
  AEO_FAQ,
  AEO_CTA,
} from '../content/config.js';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": AEO_FAQ.map(item => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": { "@type": "Answer", "text": item.a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Answer Engine Optimisation",
  "provider": { "@type": "Organization", "name": "SerpEyes" },
  "description": "Answer Engine Optimisation and Generative Engine Optimisation services, getting businesses cited in ChatGPT, Perplexity and Google AI Overviews.",
};
```

- [ ] **Step 3: Render both schema scripts and the FAQ section**

Immediately after the opening `<BaseLayout ...>` tag in `src/pages/aeo.astro`, add:

```astro
  <script type="application/ld+json" set:html={JSON.stringify(faqSchema)} />
  <script type="application/ld+json" set:html={JSON.stringify(serviceSchema)} />
```

Then add a new FAQ section immediately before the geo-links section added in Task 12 (before `<!-- Geo links -->`):

```astro
    <!-- FAQ -->
    <section style="padding: 80px 24px; background: white;">
      <div style="max-width: 720px; margin: 0 auto;">
        <h2 style="font-family: Sora, sans-serif; font-size: clamp(24px, 3vw, 32px); font-weight: 700; color: #0f172a; margin: 0 0 32px; letter-spacing: -0.02em;">
          Common Questions
        </h2>
        {AEO_FAQ.map(item => (
          <div style="border-bottom: 1px solid #eef2f8; padding: 22px 0;">
            <h3 style="font-family: Sora, sans-serif; font-size: 16.5px; font-weight: 700; color: #0f172a; margin: 0 0 8px;">{item.q}</h3>
            <p style="font-size: 15px; color: #475569; line-height: 1.75; margin: 0;">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
```

- [ ] **Step 4: Build and verify**

Run: `npm run build && grep -o '"@type":"FAQPage"' dist/aeo/index.html && grep -o 'What is AEO' dist/aeo/index.html`
Expected: one match each.

- [ ] **Step 5: Commit**

```bash
git add src/content/config.js src/pages/aeo.astro
git commit -m "Add FAQ section with FAQPage schema to AEO page"
```

---

## Part C: Case studies

### Task 14: Build the CaseStudyStat component (reusable stat tile)

**Files:**
- Create: `src/components/case-studies/CaseStudyStat.astro`

**Interfaces:**
- Consumes: props `{ value: string, label: string }`.
- Produces: a rendered stat tile, imported by the three case study pages (Tasks 17-19).

- [ ] **Step 1: Write the component**

```astro
---
interface Props {
  value: string;
  label: string;
}
const { value, label } = Astro.props;
---
<div style="background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 14px; padding: 24px 20px; text-align: center;">
  <div style="font-family: Sora, sans-serif; font-size: clamp(26px, 4vw, 34px); font-weight: 700; color: #1B4FD8; margin: 0 0 6px;">
    {value}
  </div>
  <div style="font-size: 13px; color: #64748b; text-transform: uppercase; letter-spacing: 0.04em; font-weight: 600;">
    {label}
  </div>
</div>
```

- [ ] **Step 2: Verify the file is syntactically valid**

Run: `npx astro check src/components/case-studies/CaseStudyStat.astro 2>&1 | tail -20`
Expected: no errors referencing this file (the project may report unrelated pre-existing warnings elsewhere, ignore those).

- [ ] **Step 3: Commit**

```bash
git add src/components/case-studies/CaseStudyStat.astro
git commit -m "Add reusable CaseStudyStat tile component"
```

---

### Task 15: Build the BrowserMockup component (macOS-style screenshot frame)

**Files:**
- Create: `src/components/case-studies/BrowserMockup.astro`

**Interfaces:**
- Consumes: props `{ src: string, alt: string, url?: string }`.
- Produces: a framed screenshot, imported by the three case study pages (Tasks 17-19) wherever a ChatGPT-citation screenshot is shown.

- [ ] **Step 1: Write the component**

```astro
---
interface Props {
  src: string;
  alt: string;
  url?: string;
}
const { src, alt, url = 'chatgpt.com' } = Astro.props;
---
<div style="border-radius: 12px; overflow: hidden; box-shadow: 0 20px 50px rgba(15, 23, 42, 0.18); border: 1px solid #e2e8f0; max-width: 100%;">
  <div style="background: #f1f5f9; padding: 10px 14px; display: flex; align-items: center; gap: 8px; border-bottom: 1px solid #e2e8f0;">
    <span style="width: 11px; height: 11px; border-radius: 50%; background: #ff5f57; display: inline-block;"></span>
    <span style="width: 11px; height: 11px; border-radius: 50%; background: #febc2e; display: inline-block;"></span>
    <span style="width: 11px; height: 11px; border-radius: 50%; background: #28c840; display: inline-block;"></span>
    <div style="flex: 1; text-align: center; font-size: 12px; color: #94a3b8; font-family: 'DM Sans', sans-serif;">{url}</div>
  </div>
  <img src={src} alt={alt} style="display: block; width: 100%; height: auto;" loading="lazy" />
</div>
```

- [ ] **Step 2: Verify the file is syntactically valid**

Run: `npx astro check src/components/case-studies/BrowserMockup.astro 2>&1 | tail -20`
Expected: no errors referencing this file.

- [ ] **Step 3: Commit**

```bash
git add src/components/case-studies/BrowserMockup.astro
git commit -m "Add BrowserMockup component for framed AI-citation screenshots"
```

---

### Task 16: Note on screenshot assets

Before Tasks 17-19: the ChatGPT-citation screenshots referenced (`k2l-chatgpt.png`, `uwsm-chatgpt.png`) are not yet saved to the repo, only the logos are (`public/case-studies/k2l-logo.png`, `truleum-logo.png`, `uwsm-logo.webp`, added in the design/spec phase). If the screenshots are not available when implementing Tasks 17-19, either ask the user to provide them and save to `public/case-studies/`, or omit the `<BrowserMockup>` block for that case study and ship without it rather than referencing a missing file (a missing image is worse than no image). Truleum's case study does not have a ChatGPT screenshot at all per the design spec, only a Google ranking claim, so its page does not use `BrowserMockup`.

---

### Task 17: Build the K2L Aircon case study page

**Files:**
- Create: `src/pages/case-studies/k2l-aircon.astro`

**Interfaces:**
- Consumes: `CaseStudyStat` (Task 14), `BrowserMockup` (Task 15).

- [ ] **Step 1: Write the page**

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import CaseStudyStat from '../../components/case-studies/CaseStudyStat.astro';
import BrowserMockup from '../../components/case-studies/BrowserMockup.astro';
---

<BaseLayout
  title="K2L Aircon SEO and AEO Case Study Results - SerpEyes"
  description="How SerpEyes built K2L Aircon's website from scratch, then got them cited in ChatGPT and ranked page one on Google for used aircon searches."
>
  <main>
    <section style="padding: 72px 24px 48px; background: linear-gradient(180deg, #f8faff 0%, white 100%);">
      <div style="max-width: 780px; margin: 0 auto;">
        <span class="badge" style="margin-bottom: 20px; display: inline-block;">Case Study</span>
        <img src="/case-studies/k2l-logo.png" alt="K2L Aircon logo" style="height: 44px; width: auto; margin-bottom: 24px;" />
        <h1 style="font-family: Sora, sans-serif; font-size: clamp(28px, 5vw, 42px); font-weight: 700; color: #0f172a; margin: 0 0 16px; letter-spacing: -0.02em; line-height: 1.2;">
          From a New Website to a ChatGPT Answer
        </h1>
        <p style="font-size: 17px; color: #475569; line-height: 1.8; margin: 0; max-width: 620px;">
          K2L Aircon sells reconditioned air conditioners across Singapore. SerpEyes built their website from scratch, then optimised it for search and AI visibility.
        </p>
      </div>
    </section>

    <section style="padding: 48px 24px; background: white; border-top: 1px solid #eef2f8;">
      <div style="max-width: 780px; margin: 0 auto;">
        <h2 style="font-family: Sora, sans-serif; font-size: 20px; font-weight: 700; color: #0f172a; margin: 0 0 12px;">The Business</h2>
        <p style="font-size: 15.5px; color: #475569; line-height: 1.8; margin: 0;">
          K2L Aircon offers reconditioned and used air conditioners from S$700 installed, alongside repair, servicing and chemical overhauls, all backed by a workmanship warranty. With 10+ years of experience and island-wide coverage, they needed a website and online visibility that matched the quality of the service.
        </p>
      </div>
    </section>

    <section style="padding: 48px 24px; background: #f8faff;">
      <div style="max-width: 780px; margin: 0 auto;">
        <h2 style="font-family: Sora, sans-serif; font-size: 20px; font-weight: 700; color: #0f172a; margin: 0 0 12px;">What SerpEyes Did</h2>
        <p style="font-size: 15.5px; color: #475569; line-height: 1.8; margin: 0;">
          We built K2L's entire website from scratch, then applied technical SEO and AEO, clean structure, fast load times and content written the way real customers search, so both Google and AI tools could understand and recommend the business.
        </p>
      </div>
    </section>

    <section style="padding: 56px 24px; background: white; border-top: 1px solid #eef2f8;">
      <div style="max-width: 780px; margin: 0 auto;">
        <h2 style="font-family: Sora, sans-serif; font-size: 20px; font-weight: 700; color: #0f172a; margin: 0 0 20px;">The Result</h2>
        <p style="font-size: 15.5px; color: #475569; line-height: 1.8; margin: 0 0 28px;">
          K2L now ranks on Google's first page for "buy used aircon in Singapore" and appears directly inside ChatGPT when people ask for the best place to buy a second-hand aircon in Singapore.
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px; margin-bottom: 32px;">
          <CaseStudyStat value="148" label="Clicks / 6 months" />
          <CaseStudyStat value="13.2k" label="Impressions" />
          <CaseStudyStat value="4.4" label="Avg. position" />
          <CaseStudyStat value="5.2%" label="Click-through rate" />
        </div>
        <p style="font-size: 12.5px; color: #94a3b8; margin: 0 0 32px;">Google Search Console data, 6-month period.</p>
        <BrowserMockup src="/case-studies/k2l-chatgpt.png" alt="ChatGPT listing K2L Aircon as a top result for buying a second-hand aircon in Singapore" url="chatgpt.com" />
      </div>
    </section>

    <section style="padding: 72px 24px; background: linear-gradient(135deg, #1B4FD8 0%, #1640c4 100%);">
      <div style="max-width: 600px; margin: 0 auto; text-align: center;">
        <h2 style="font-family: Sora, sans-serif; font-size: clamp(22px, 3vw, 30px); font-weight: 700; color: white; margin: 0 0 16px;">
          Want Results Like This?
        </h2>
        <a href="/request-demo" style="padding: 14px 32px; background: white; color: #1B4FD8; border: none; border-radius: 10px; font-weight: 600; font-size: 16px; cursor: pointer; font-family: DM Sans, sans-serif; text-decoration: none; display: inline-block;">
          Get a Free AEO Check
        </a>
      </div>
    </section>
  </main>
</BaseLayout>
```

- [ ] **Step 2: Build and verify**

Run: `npm run build && ls dist/case-studies/k2l-aircon/index.html && grep -o '148' dist/case-studies/k2l-aircon/index.html`
Expected: file exists, at least one match for the stat value.

Note: the build will succeed even if `k2l-chatgpt.png` does not exist yet (Astro does not validate that referenced `<img src>` paths exist at build time), but the image will 404 at runtime until the screenshot is added to `public/case-studies/`. Per Task 16, add the file or remove the `<BrowserMockup>` block if it is not available.

- [ ] **Step 3: Commit**

```bash
git add src/pages/case-studies/k2l-aircon.astro
git commit -m "Add K2L Aircon case study page"
```

---

### Task 18: Build the Truleum Loft Specialist case study page

**Files:**
- Create: `src/pages/case-studies/truleum-lofts.astro`

**Interfaces:**
- Consumes: `CaseStudyStat` (Task 14). Does not use `BrowserMockup`, no ChatGPT screenshot exists for Truleum per the design spec.

- [ ] **Step 1: Write the page**

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import CaseStudyStat from '../../components/case-studies/CaseStudyStat.astro';
---

<BaseLayout
  title="Truleum Loft Specialist AEO Case Study - SerpEyes UK"
  description="How SerpEyes built Truleum's website and a custom invoicing app from scratch, then got them ranking page one on Google in Cambridge, UK. Real results."
>
  <main>
    <section style="padding: 72px 24px 48px; background: linear-gradient(180deg, #f8faff 0%, white 100%);">
      <div style="max-width: 780px; margin: 0 auto;">
        <span class="badge" style="margin-bottom: 20px; display: inline-block;">Case Study</span>
        <img src="/case-studies/truleum-logo.png" alt="Truleum Loft Specialist logo" style="height: 44px; width: auto; margin-bottom: 24px;" />
        <h1 style="font-family: Sora, sans-serif; font-size: clamp(28px, 5vw, 42px); font-weight: 700; color: #0f172a; margin: 0 0 16px; letter-spacing: -0.02em; line-height: 1.2;">
          A Website, a Custom App, and Page One on Google
        </h1>
        <p style="font-size: 17px; color: #475569; line-height: 1.8; margin: 0; max-width: 620px;">
          Truleum Loft Specialist converts lofts and extends homes across Cambridgeshire. SerpEyes built their website and a custom invoicing tool, then optimised for search.
        </p>
      </div>
    </section>

    <section style="padding: 48px 24px; background: white; border-top: 1px solid #eef2f8;">
      <div style="max-width: 780px; margin: 0 auto;">
        <h2 style="font-family: Sora, sans-serif; font-size: 20px; font-weight: 700; color: #0f172a; margin: 0 0 12px;">The Business</h2>
        <p style="font-size: 15.5px; color: #475569; line-height: 1.8; margin: 0;">
          Truleum specialises in loft conversions, house extensions, bathroom and kitchen renovations across nine locations in Cambridgeshire, including Cambridge, Ely, Huntingdon and Peterborough. Guide prices start from £18,000, backed by a price-match promise and a dedicated project manager on every job.
        </p>
      </div>
    </section>

    <section style="padding: 48px 24px; background: #f8faff;">
      <div style="max-width: 780px; margin: 0 auto;">
        <h2 style="font-family: Sora, sans-serif; font-size: 20px; font-weight: 700; color: #0f172a; margin: 0 0 12px;">What SerpEyes Built</h2>
        <p style="font-size: 15.5px; color: #475569; line-height: 1.8; margin: 0 0 16px;">
          We built Truleum's entire website from scratch, including their location pages, gallery and quote calculator, then optimised it for local SEO across all nine service areas.
        </p>
        <p style="font-size: 15.5px; color: #475569; line-height: 1.8; margin: 0;">
          Beyond the website, SerpEyes also built Truleum a custom invoicing application from scratch, so they can create and send invoices to their own customers directly, without relying on a third-party billing tool. It is the kind of project that shows how our app development work supports what a business actually needs day to day, not just what looks good in a portfolio.
        </p>
      </div>
    </section>

    <section style="padding: 56px 24px; background: white; border-top: 1px solid #eef2f8;">
      <div style="max-width: 780px; margin: 0 auto;">
        <h2 style="font-family: Sora, sans-serif; font-size: 20px; font-weight: 700; color: #0f172a; margin: 0 0 20px;">The Result</h2>
        <p style="font-size: 15.5px; color: #475569; line-height: 1.8; margin: 0 0 28px;">
          Truleum now ranks on Google's first page for "best loft conversion company in Cambridge UK", with real organic traffic to back it up.
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px; margin-bottom: 12px;">
          <CaseStudyStat value="173" label="Clicks / 6 months" />
          <CaseStudyStat value="14.9k" label="Impressions" />
          <CaseStudyStat value="4.7" label="Avg. position" />
          <CaseStudyStat value="5.6%" label="Click-through rate" />
        </div>
        <p style="font-size: 12.5px; color: #94a3b8; margin: 0;">Google Search Console data, 6-month period.</p>
      </div>
    </section>

    <section style="padding: 72px 24px; background: linear-gradient(135deg, #1B4FD8 0%, #1640c4 100%);">
      <div style="max-width: 600px; margin: 0 auto; text-align: center;">
        <h2 style="font-family: Sora, sans-serif; font-size: clamp(22px, 3vw, 30px); font-weight: 700; color: white; margin: 0 0 16px;">
          Want Results Like This?
        </h2>
        <a href="/request-demo" style="padding: 14px 32px; background: white; color: #1B4FD8; border: none; border-radius: 10px; font-weight: 600; font-size: 16px; cursor: pointer; font-family: DM Sans, sans-serif; text-decoration: none; display: inline-block;">
          Get a Free AEO Check
        </a>
      </div>
    </section>
  </main>
</BaseLayout>
```

- [ ] **Step 2: Build and verify**

Run: `npm run build && ls dist/case-studies/truleum-lofts/index.html && grep -o 'custom invoicing application' dist/case-studies/truleum-lofts/index.html`
Expected: file exists, one match.

- [ ] **Step 3: Commit**

```bash
git add src/pages/case-studies/truleum-lofts.astro
git commit -m "Add Truleum Loft Specialist case study page"
```

---

### Task 19: Build the United World Sports Management case study page

**Files:**
- Create: `src/pages/case-studies/united-world-sports-management.astro`

**Interfaces:**
- Consumes: `CaseStudyStat` (Task 14), `BrowserMockup` (Task 15).

- [ ] **Step 1: Write the page**

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import CaseStudyStat from '../../components/case-studies/CaseStudyStat.astro';
import BrowserMockup from '../../components/case-studies/BrowserMockup.astro';
---

<BaseLayout
  title="United World Sports Management Case Study - SerpEyes"
  description="How SerpEyes built United World Sports Management's website and ecommerce store, then got them ranked and cited by ChatGPT in Singapore, for real."
>
  <main>
    <section style="padding: 72px 24px 48px; background: linear-gradient(180deg, #f8faff 0%, white 100%);">
      <div style="max-width: 780px; margin: 0 auto;">
        <span class="badge" style="margin-bottom: 20px; display: inline-block;">Case Study</span>
        <img src="/case-studies/uwsm-logo.webp" alt="United World Sports Management logo" style="height: 44px; width: auto; margin-bottom: 24px;" />
        <h1 style="font-family: Sora, sans-serif; font-size: clamp(28px, 5vw, 42px); font-weight: 700; color: #0f172a; margin: 0 0 16px; letter-spacing: -0.02em; line-height: 1.2;">
          A Full Website and Store, Built to Be Found
        </h1>
        <p style="font-size: 17px; color: #475569; line-height: 1.8; margin: 0; max-width: 620px;">
          United World Sports Management runs cricket coaching and an equipment store in Singapore. SerpEyes built both the marketing site and the ecommerce store from scratch.
        </p>
      </div>
    </section>

    <section style="padding: 48px 24px; background: white; border-top: 1px solid #eef2f8;">
      <div style="max-width: 780px; margin: 0 auto;">
        <h2 style="font-family: Sora, sans-serif; font-size: 20px; font-weight: 700; color: #0f172a; margin: 0 0 12px;">The Business</h2>
        <p style="font-size: 15.5px; color: #475569; line-height: 1.8; margin: 0;">
          United World Sports Management has run cricket coaching in Singapore since 2016, alongside an equipment store carrying brands like Kookaburra, GM, DSC and SG, plus international sports tours and holiday camps. They are an official Last Man Stands franchise partner, with AB de Villiers as LMS Global Ambassador.
        </p>
      </div>
    </section>

    <section style="padding: 48px 24px; background: #f8faff;">
      <div style="max-width: 780px; margin: 0 auto;">
        <h2 style="font-family: Sora, sans-serif; font-size: 20px; font-weight: 700; color: #0f172a; margin: 0 0 12px;">What SerpEyes Built</h2>
        <p style="font-size: 15.5px; color: #475569; line-height: 1.8; margin: 0;">
          We built both the main marketing website and a full ecommerce store for cricket equipment from scratch, then optimised the whole site for search and AI visibility so coaching enquiries and equipment sales could both grow through organic traffic.
        </p>
      </div>
    </section>

    <section style="padding: 56px 24px; background: white; border-top: 1px solid #eef2f8;">
      <div style="max-width: 780px; margin: 0 auto;">
        <h2 style="font-family: Sora, sans-serif; font-size: 20px; font-weight: 700; color: #0f172a; margin: 0 0 20px;">The Result</h2>
        <p style="font-size: 15.5px; color: #475569; line-height: 1.8; margin: 0 0 28px;">
          United World Sports Management ranks in the top 3 on Google for cricket equipment searches in Singapore, and appears in ChatGPT's answer when people ask for the best cricket coaching academy in Singapore.
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px; margin-bottom: 32px;">
          <CaseStudyStat value="714" label="Clicks / 6 months" />
          <CaseStudyStat value="17.8k" label="Impressions" />
          <CaseStudyStat value="3.2" label="Avg. position" />
          <CaseStudyStat value="4%" label="Click-through rate" />
        </div>
        <p style="font-size: 12.5px; color: #94a3b8; margin: 0 0 32px;">Google Search Console data, 6-month period.</p>
        <BrowserMockup src="/case-studies/uwsm-chatgpt.png" alt="ChatGPT listing United World Sports Management as a recommended cricket coaching academy in Singapore" url="chatgpt.com" />
      </div>
    </section>

    <section style="padding: 72px 24px; background: linear-gradient(135deg, #1B4FD8 0%, #1640c4 100%);">
      <div style="max-width: 600px; margin: 0 auto; text-align: center;">
        <h2 style="font-family: Sora, sans-serif; font-size: clamp(22px, 3vw, 30px); font-weight: 700; color: white; margin: 0 0 16px;">
          Want Results Like This?
        </h2>
        <a href="/request-demo" style="padding: 14px 32px; background: white; color: #1B4FD8; border: none; border-radius: 10px; font-weight: 600; font-size: 16px; cursor: pointer; font-family: DM Sans, sans-serif; text-decoration: none; display: inline-block;">
          Get a Free AEO Check
        </a>
      </div>
    </section>
  </main>
</BaseLayout>
```

- [ ] **Step 2: Build and verify**

Run: `npm run build && ls dist/case-studies/united-world-sports-management/index.html && grep -o 'top 3 on Google' dist/case-studies/united-world-sports-management/index.html`
Expected: file exists, one match.

- [ ] **Step 3: Commit**

```bash
git add src/pages/case-studies/united-world-sports-management.astro
git commit -m "Add United World Sports Management case study page"
```

---

### Task 20: Build the case studies index page

**Files:**
- Create: `src/pages/case-studies/index.astro`

- [ ] **Step 1: Write the page**

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';

const studies = [
  {
    href: '/case-studies/k2l-aircon',
    logo: '/case-studies/k2l-logo.png',
    name: 'K2L Aircon',
    summary: 'Built from scratch, now ranked in Google and cited in ChatGPT for used aircon searches in Singapore.',
    stat: '5.2%',
    statLabel: 'click-through rate',
  },
  {
    href: '/case-studies/truleum-lofts',
    logo: '/case-studies/truleum-logo.png',
    name: 'Truleum Loft Specialist',
    summary: 'Website and a custom invoicing app, then ranked page one on Google for loft conversions in Cambridge.',
    stat: '173',
    statLabel: 'clicks in 6 months',
  },
  {
    href: '/case-studies/united-world-sports-management',
    logo: '/case-studies/uwsm-logo.webp',
    name: 'United World Sports Management',
    summary: 'Website and ecommerce store built from scratch, now top 3 on Google and cited in ChatGPT in Singapore.',
    stat: '714',
    statLabel: 'clicks in 6 months',
  },
];
---

<BaseLayout
  title="Case Studies: Real SerpEyes Client Results and Proof"
  description="Real SerpEyes client results: websites we built from scratch that now rank on Google and get cited by ChatGPT and other AI answer engines today."
>
  <main>
    <section style="padding: 80px 24px 56px; background: linear-gradient(180deg, #f8faff 0%, white 100%); text-align: center;">
      <div style="max-width: 700px; margin: 0 auto;">
        <span class="badge" style="margin-bottom: 16px; display: inline-block;">Case Studies</span>
        <h1 style="font-family: Sora, sans-serif; font-size: clamp(28px, 5vw, 44px); font-weight: 700; color: #0f172a; margin: 0 0 20px; letter-spacing: -0.02em;">
          Real Clients, Real Results
        </h1>
        <p style="font-size: 16px; color: #475569; line-height: 1.7; margin: 0;">
          Every business below had their website built by SerpEyes from scratch, then optimised for search and AI visibility. Here is what happened next.
        </p>
      </div>
    </section>

    <section style="padding: 24px 24px 88px; background: white;">
      <div style="max-width: 960px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
        {studies.map(study => (
          <a href={study.href} class="card-hover" style="display: block; background: white; border: 1px solid #cbd5e1; border-radius: 16px; padding: 32px 28px; text-decoration: none;">
            <img src={study.logo} alt={`${study.name} logo`} style="height: 36px; width: auto; margin-bottom: 20px;" />
            <h2 style="font-family: Sora, sans-serif; font-size: 19px; font-weight: 700; color: #0f172a; margin: 0 0 10px;">{study.name}</h2>
            <p style="font-size: 14.5px; color: #64748b; line-height: 1.7; margin: 0 0 20px;">{study.summary}</p>
            <div style="display: flex; align-items: baseline; gap: 6px;">
              <span style="font-family: Sora, sans-serif; font-size: 24px; font-weight: 700; color: #1B4FD8;">{study.stat}</span>
              <span style="font-size: 13px; color: #94a3b8;">{study.statLabel}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  </main>
</BaseLayout>
```

- [ ] **Step 2: Build and verify**

Run: `npm run build && ls dist/case-studies/index.html && grep -o 'Real Clients, Real Results' dist/case-studies/index.html && grep -c 'card-hover' dist/case-studies/index.html`
Expected: file exists, headline matches once, `card-hover` appears 3 times (one per study card).

- [ ] **Step 3: Commit**

```bash
git add src/pages/case-studies/index.astro
git commit -m "Add case studies index page"
```

---

### Task 21: Add all new pages to the sitemap

**Files:**
- Modify: `src/pages/sitemap.xml.ts`

- [ ] **Step 1: Add entries for the 6 new pages**

In the `pages` array in `src/pages/sitemap.xml.ts`, add these entries (matching the existing object shape used for other entries):

```javascript
    {
      url: '/aeo/singapore',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      url: '/aeo/uk',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      url: '/case-studies',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      url: '/case-studies/k2l-aircon',
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      url: '/case-studies/truleum-lofts',
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      url: '/case-studies/united-world-sports-management',
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
```

- [ ] **Step 2: Build and verify**

Run: `npm run build && curl -s http://localhost:4321/sitemap.xml 2>/dev/null; grep -c "case-studies\|aeo/singapore\|aeo/uk" src/pages/sitemap.xml.ts`
Expected: the grep count is at least 6 (one per new URL added, `case-studies` matches 4 times, `aeo/singapore` once, `aeo/uk` once).

- [ ] **Step 3: Commit**

```bash
git add src/pages/sitemap.xml.ts
git commit -m "Add new AEO geo pages and case studies to sitemap"
```

---

### Task 22: Full site build and final verification pass

**Files:** none (verification only).

- [ ] **Step 1: Full clean build**

Run: `npm run build`
Expected: build completes with no errors, all pages listed in the prerender output including `/aeo/singapore`, `/aeo/uk`, `/case-studies`, `/case-studies/k2l-aircon`, `/case-studies/truleum-lofts`, `/case-studies/united-world-sports-management`.

- [ ] **Step 2: Em/en dash scan across all changed files**

Run: `grep -rn '—\|–' src/content/config.js src/pages/aeo.astro src/pages/aeo/ src/pages/case-studies/ src/components/Footer.astro src/pages/index.astro src/layouts/BaseLayout.astro`
Expected: no output (no matches). If any match is found, fix it before proceeding.

- [ ] **Step 3: Confirm meta title/description lengths on new pages**

For each new page (`/aeo/singapore`, `/aeo/uk`, `/case-studies`, `/case-studies/k2l-aircon`, `/case-studies/truleum-lofts`, `/case-studies/united-world-sports-management`), manually count the `title` and `description` prop strings passed to `BaseLayout` and confirm title is 50-55 characters and description is 140-155 characters. Adjust wording if outside range while keeping meaning intact.

- [ ] **Step 4: Confirm no missing image references break the build**

Run: `npm run build 2>&1 | grep -i error`
Expected: no output. Missing `k2l-chatgpt.png` / `uwsm-chatgpt.png` (per Task 16) will not fail the build, but confirm no other errors appear.

- [ ] **Step 5: Final commit if any fixes were needed**

```bash
git add -A
git commit -m "Fix issues found in final verification pass"
```

(Skip this step if no fixes were needed in Steps 2-4.)

- [ ] **Step 6: Push**

```bash
git push origin main
```

---

## Self-Review Notes

- **Spec coverage:** Part A (Tasks 4-9), Part A2 (Tasks 10-12), Part B (Tasks 1-3, 13), Part C (Tasks 14-21) all covered. The homepage direct-answer block and web/app-dev intro paragraphs satisfy the Part B "citability content rewrite" requirement for those specific pages; `/services` and `/about` direct-answer blocks were not broken into their own tasks since their existing hero paragraphs already function as reasonably direct answers, revisit only if the client wants every single page to get a dedicated answer block.
- **Placeholder scan:** no TBD/TODO markers, every task has complete copy and code, not descriptions of copy to write.
- **Type consistency:** `AEO_FAQ` shape `{ q, a }` is used consistently between its definition (Task 13) and its only consumer (`aeo.astro`, same task). `CaseStudyStat` props `{ value, label }` and `BrowserMockup` props `{ src, alt, url }` are used identically across Tasks 17-20.
- **Known gap, flagged not hidden:** the two ChatGPT screenshot image files (`k2l-chatgpt.png`, `uwsm-chatgpt.png`) referenced in Tasks 17 and 19 are not yet saved to the repo. Task 16 documents this and gives the executor a clear fallback (ask for the files, or ship without the `BrowserMockup` block) rather than leaving a broken image reference live.



# SerpEyes - Astro Website

A modern, fast marketing website for SerpEyes, a Singapore-focused SEO platform. Built with Astro, React, and Tailwind CSS, optimized for Cloudflare Pages deployment.

## 🚀 Project Overview

**Product**: SerpEyes - All-In-One SEO Platform for Singapore  
**Target Audience**: Marketing agencies, freelancers, and small business owners in Singapore  
**Stage**: Pre-launch marketing website  
**Purpose**: Generate leads, book demos, build waitlist

## 📁 Project Structure

```
serpeyes-astro/
├── public/
│   ├── favicon.svg          # Site favicon
│   ├── robots.txt           # SEO crawler instructions
│   ├── _headers             # Cloudflare security headers
│   └── _redirects           # URL redirect rules
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── Badge.astro
│   │   │   ├── SectionHeader.astro
│   │   │   └── FeatureCard.astro
│   │   ├── Nav.astro        # Navigation with mobile menu
│   │   ├── Footer.astro     # Site footer
│   │   ├── HeroScanner.jsx  # Interactive SEO scanner (React)
│   │   ├── DemoForm.jsx     # Demo request form (React)
│   │   └── EarlyAccessForm.jsx # Email capture form (React)
│   ├── content/
│   │   └── config.js        # ALL content configuration
│   ├── layouts/
│   │   └── BaseLayout.astro # Shared layout with head/meta tags
│   └── pages/
│       ├── index.astro      # Homepage
│       ├── for-agencies.astro
│       ├── for-freelancers.astro
│       ├── seo-services.astro
│       ├── request-demo.astro
│       └── blog.astro
├── astro.config.mjs         # Astro configuration
├── tailwind.config.mjs      # Tailwind CSS configuration
└── package.json             # Dependencies
```

## 🛠️ Tech Stack

- **Framework**: Astro 4.x (static site generation)
- **UI Library**: React 18 (for interactive components only)
- **Styling**: Tailwind CSS 3.x
- **Fonts**: Google Fonts (Sora, DM Sans)
- **Deployment**: Cloudflare Pages
- **Language**: JavaScript (no TypeScript)

## 📝 Content Management

All website content is centralized in `src/content/config.js`. This file contains:

- Site metadata (name, contact info, copyright)
- Navigation links
- Homepage content (hero, features, testimonials, etc.)
- Page-specific content for all routes
- Scanner component data

**To update content**: Edit `src/content/config.js` - no need to touch any `.astro` or `.jsx` files.

## 🎨 Design System

### Colors
- **Primary Brand**: `#1B4FD8` (brand-600)
- **Brand Scale**: 50-900 defined in `tailwind.config.mjs`

### Typography
- **Headings**: Sora (font-display)
- **Body**: DM Sans (font-body)

### CSS Classes
- `.badge` - Pill-shaped labels
- `.btn-primary` - Primary CTA button
- `.btn-outline` - Outlined button
- `.card-hover` - Card with hover lift effect
- `.gradient-text` - Blue gradient text
- `.hero-bg` - Hero section background
- `.animate-on-scroll` - Fade-up on scroll animation

### Animations
- `fadeUp` - Fade in from bottom
- `fadeIn` - Simple fade in
- `blink` - Cursor blink
- `pulse-dot` - Pulsing dot
- `fadeSlideUp` - Slide up with fade

## 🧩 Interactive Components

Only three components use React (with `client:load`):

1. **HeroScanner** (`HeroScanner.jsx`)
   - Animated SEO scanner demo
   - Auto-loops through typing → scanning → results phases
   - Shows fake website being analyzed with real-time checks

2. **DemoForm** (`DemoForm.jsx`)
   - Request demo form with validation
   - Fields: name, email, company, type, message
   - Shows success confirmation on submit

3. **EarlyAccessForm** (`EarlyAccessForm.jsx`)
   - Simple email capture for waitlist
   - Shows success message on submit

All other components are static `.astro` files for optimal performance.

## 🚦 Getting Started

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

## 📄 Pages & Routes

| Route | File | Title | Description |
|-------|------|-------|-------------|
| `/` | `index.astro` | RankAura - All-In-One SEO Platform for Singapore | Homepage with hero, features, testimonials |
| `/for-agencies` | `for-agencies.astro` | RankAura for Agencies | Agency-focused landing page |
| `/for-freelancers` | `for-freelancers.astro` | RankAura for Freelancers | Freelancer-focused landing page |
| `/seo-services` | `seo-services.astro` | Singapore SEO Services | Managed SEO service with pricing |
| `/request-demo` | `request-demo.astro` | Request a Demo | Demo request form page |
| `/blog` | `blog.astro` | Singapore SEO Blog | Blog post listing |

Each page has unique meta tags (title, description, OG tags) defined in the page file.

## ✏️ Common Changes

### Update Navigation Links
Edit `NAV_LINKS` array in `src/content/config.js`:
```js
export const NAV_LINKS = [
  { label: 'For Agencies', href: '/for-agencies' },
  // Add more links here
];
```

### Change Hero Section Content
Edit `HERO` object in `src/content/config.js`:
```js
export const HERO = {
  badge: 'Coming Soon to Singapore',
  headline: 'SEO Built for',
  headlineAccent: 'Singapore Businesses',
  // ...
};
```

### Add a New Testimonial
Add to `TESTIMONIALS` array in `src/content/config.js`:
```js
export const TESTIMONIALS = [
  { quote: '...', name: 'John Doe', role: 'CEO, Company' },
  // Add new testimonial here
];
```

### Update Footer Contact Info
Edit `SITE` object in `src/content/config.js`:
```js
export const SITE = {
  name: 'SerpEyes',
  email: 'hello@serpeyes.com',
  phone: '+65 8xxx xxxx',
  // ...
};
```

### Modify Pricing Plans
Edit `PLANS` array in `src/content/config.js`:
```js
export const PLANS = [
  {
    name: 'Starter',
    price: '$799',
    period: '/month',
    popular: false,
    desc: '...',
    features: ['...'],
  },
  // Modify or add plans here
];
```

## 🎯 SEO Features

- Unique meta titles and descriptions per page
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URLs
- Semantic HTML structure
- Scroll-triggered animations for engagement
- Fast loading with static generation
- Optimized images and assets

## 🔒 Security Headers

Configured in `public/_headers`:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection enabled
- Referrer-Policy configured
- Permissions-Policy for camera/mic/location

## 📱 Mobile Responsiveness

- Hamburger menu for mobile navigation
- Responsive grid layouts using CSS Grid
- `clamp()` for fluid typography
- Touch-friendly button sizes
- Tested on mobile viewports

## 🐛 Troubleshooting

### Build Errors
- Ensure all imports in `.astro` files use `.js` extension for config
- Check that React components have `client:load` directive
- Verify all content config exports are named exports

### Styling Issues
- Tailwind classes in `.astro` files work normally
- Inline styles in `.jsx` files use camelCase (e.g., `backgroundColor`)
- Global styles are in `BaseLayout.astro` `<style is:global>` tag

### Navigation Not Working
- Ensure links use `/path` format (not `#/path`)
- Check `Astro.url.pathname` for active link detection
- Mobile menu toggle script is in `Nav.astro`

## 📦 Deployment

See `DEPLOYMENT.md` for complete Cloudflare Pages deployment instructions.

## 🤝 Contributing

This is a marketing website for SerpEyes. For content updates, edit `src/content/config.js`. For structural changes, modify the appropriate `.astro` or `.jsx` files.

## 📞 Support

For questions or issues, contact the SerpEyes team at hello@serpeyes.com

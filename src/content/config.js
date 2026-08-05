// =============================================================
// CONTENT CONFIG
// This is the only file you need to edit to change content.
// =============================================================

export const SITE = {
  name: 'SerpEyes',
  email: 'hello@serpeyes.com',
  phones: [
    {
      svg: `<svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="flag-sg"><rect width="20" height="14" rx="2"/></clipPath></defs><g clip-path="url(#flag-sg)"><rect width="20" height="7" fill="#EF3340"/><rect y="7" width="20" height="7" fill="#fff"/><circle cx="4.6" cy="3.5" r="2.1" fill="#fff"/><circle cx="5.5" cy="3.5" r="1.8" fill="#EF3340"/></g></svg>`,
      number: '+65 81933964',
      tel: '+6581933964',
    },
    {
      svg: `<svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="flag-us"><rect width="20" height="14" rx="2"/></clipPath></defs><g clip-path="url(#flag-us)"><rect width="20" height="14" fill="#fff"/><rect y="0" width="20" height="1.08" fill="#B22234"/><rect y="2.15" width="20" height="1.08" fill="#B22234"/><rect y="4.3" width="20" height="1.08" fill="#B22234"/><rect y="6.45" width="20" height="1.08" fill="#B22234"/><rect y="8.6" width="20" height="1.08" fill="#B22234"/><rect y="10.75" width="20" height="1.08" fill="#B22234"/><rect y="12.9" width="20" height="1.08" fill="#B22234"/><rect width="9" height="7.5" fill="#3C3B6E"/></g></svg>`,
      number: '+1-840-877-8879',
      tel: '+18408778879',
    },
  ],
  location: '11 E Coast Rd, #11-01 The Odeon Katong, Singapore 428722',
  copyright: '2026 SerpEyes. All rights reserved.',
};

export const NAV_LINKS = [
  { label: 'AEO', href: '/aeo' },
  { label: 'Services', href: '/services' },
  { label: 'Web Development', href: '/web-development' },
  { label: 'App Development', href: '/app-development' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

export const FOOTER_RESOURCES = ['Services', 'Blog', 'Case Studies'];
export const FOOTER_SOCIALS = ['LinkedIn', 'Twitter'];

// ---- HOMEPAGE ----

export const HERO = {
  badge: 'Web Development. App Development. SEO. AEO. Marketing',
  headline: 'Digital Growth Built for',
  headlineAccent: 'Businesses Ready to Scale',
  subheadline: 'SerpEyes is a digital growth agency that helps businesses establish, optimise and scale their online presence. Websites, mobile apps, SEO, AEO and result-driven marketing, delivered by one team instead of five vendors.',
  btn1: 'Get a Free Consultation',
  btn2: 'View Our Services',
  footnote: 'Free website and SEO audit included. No obligation.',
};

export const DIFF_SECTION = {
  badge: 'Why SerpEyes',
  headline: 'One Growth Partner Instead of Five Vendors.',
  sub: 'Most agencies specialise in one piece: a website, or ads, or SEO. SerpEyes builds and grows the whole system, so every part works toward the same goal, more qualified customers.',
};

export const DIFF_CARDS = [
  { icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>`, title: 'One Team, Every Channel', desc: 'Your website, app, SEO and marketing built by one team that already knows your brand. No handoffs between vendors and no mismatched strategies pulling in different directions.' },
  { icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></svg>`, title: 'AI-Powered Workflows', desc: 'We use AI-driven research, content and automation to move faster than traditional agencies, without cutting corners on quality or strategy.' },
  { icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="2 20 22 20"/></svg>`, title: 'Data-Driven, Not Guesswork', desc: 'Every decision, design choice, keyword or campaign is backed by data on what your customers actually search for and respond to.' },
  { icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z"/><circle cx="12" cy="12" r="2.8" fill="#60a5fa" fill-opacity="0.15"/><path d="M18.8 4.5l.8 1.7 1.7.8-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.8.8-1.7z"/></svg>`, title: 'Built for AI Search Too', desc: 'Search is changing. We optimise for AEO, Answer Engine Optimisation, so your business shows up in ChatGPT, Perplexity and Google AI Overviews, not just Google.' },
  { icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`, title: 'Focused on Measurable Growth', desc: 'We track leads, conversions and revenue impact, not vanity metrics. You always know what your investment is actually producing.' },
  { icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`, title: 'Built to Scale With You', desc: 'From your first website to a full multi-channel growth engine, our systems are built to grow alongside your business, not need replacing in a year.' },
];

export const FEATURES_SECTION = {
  badge: 'Our Services',
  headline: 'Everything Your Business Needs to Grow Online',
  sub: 'From your first website to ongoing marketing and search visibility, SerpEyes covers every stage of your digital presence under one roof.',
};

export const FEATURES = [
  {
    iconBg: '#eff4ff',
    accent: '#1B4FD8',
    title: 'Custom Website Development',
    desc: 'Business websites and eCommerce platforms built on modern, fast, secure technology. Designed to convert visitors into enquiries and sales, not just look good.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1B4FD8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  },
  {
    iconBg: '#f0fdf4',
    accent: '#059669',
    title: 'Mobile App Development',
    desc: 'Native and cross platform Android and iOS apps built around your business goals, from concept and UI/UX design through to launch and maintenance.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  },
  {
    iconBg: '#f5f3ff',
    accent: '#7c3aed',
    title: 'UI/UX Design',
    desc: 'Interfaces designed around how real users behave, not guesswork. Clear flows, strong visual hierarchy and layouts that make it easy for customers to act.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
  },
  {
    iconBg: '#fff7ed',
    accent: '#ea580c',
    title: 'Search Engine Optimisation',
    desc: 'Technical, on-page and content SEO strategies built to grow your organic visibility and search rankings over time, not disappear after month one.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  },
  {
    iconBg: '#fdf2f8',
    accent: '#db2777',
    title: 'AEO (Answer Engine Optimisation)',
    desc: 'We structure and optimise your content so AI tools like ChatGPT, Perplexity and Google AI Overviews can find, understand and recommend your business.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#db2777" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z"/><circle cx="12" cy="12" r="2.8" fill="#db2777" fill-opacity="0.15"/><path d="M18.8 4.5l.8 1.7 1.7.8-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.8.8-1.7z"/></svg>`,
  },
  {
    iconBg: '#f0fdf4',
    accent: '#059669',
    title: 'Digital Marketing & Social Media',
    desc: 'Social media marketing, content strategy and campaigns that build awareness and turn attention into qualified leads, not just impressions.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10v4a1 1 0 001 1h3l4 4V5L7 9H4a1 1 0 00-1 1z"/><path d="M15 8a5 5 0 010 8"/><path d="M18 5a9 9 0 010 14"/></svg>`,
  },
  {
    iconBg: '#eff4ff',
    accent: '#1B4FD8',
    title: 'Website Maintenance & Performance',
    desc: 'Ongoing monitoring, updates, security and speed optimisation, so your site keeps performing and stays secure long after launch day.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1B4FD8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`,
  },
  {
    iconBg: '#fefce8',
    accent: '#ca8a04',
    title: 'Analytics & Reporting',
    desc: 'Clear, regular reporting on traffic, rankings, conversions and campaign performance, so you always know exactly what is working and what is not.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ca8a04" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="2 20 22 20"/></svg>`,
  },
];

export const AUDIENCE_SECTION = {
  badge: 'What We Do',
  headline: 'Wherever Your Business Is Right Now, We Can Help',
};

export const AUDIENCE = [
  { icon: '', title: 'Building From Scratch', desc: 'Need a new website or online store built right the first time. We design and develop custom digital products, ready to launch and built to grow.', href: '/web-development' },
  { icon: '', title: 'Building a Mobile App', desc: 'Have an idea for a mobile app, or need one built for Android and iOS. We handle the full journey from design through to app store launch.', href: '/app-development' },
  { icon: '', title: 'Getting Found Online', desc: 'Already have a site but need more visibility. Our SEO, AEO and marketing services get you found on Google and inside AI search.', href: '/services' },
];

export const SOCIAL_PROOF_LABEL = 'Trusted by growing businesses across multiple markets';

export const TRUST_TAGS = ['Business Owners', 'Startups', 'E-commerce Stores', 'Clinics and Practices', 'Service Businesses'];

export const TESTIMONIALS = [
  { quote: 'SerpEyes built our website and handled our SEO from day one. We finally have a digital presence that actually brings in enquiries.', name: 'Sarah T.', role: 'Business Owner, Singapore' },
  { quote: 'They built our app and kept iterating with us after launch. Communication was clear and nothing felt rushed.', name: 'Marcus L.', role: 'Founder, Retail Startup' },
  { quote: 'As a small business owner I never understood SEO or web development. SerpEyes made it simple and showed me exactly what my clinic needed to grow online.', name: 'Dr. Priya R.', role: 'Clinic Owner, Tampines' },
];

export const CTA_SECTION = {
  headline: 'Ready to Grow Your Digital Presence?',
  sub: 'Tell us about your business and goals. We will get back to you with a clear plan, no pressure and no jargon.',
  btnLabel: 'Get a Free Consultation',
  placeholder: 'Your work email',
  successTitle: 'Thanks, we got it!',
  successSub: 'We will be in touch shortly to discuss your project.',
};

// ---- WEB DEVELOPMENT PAGE ----

export const WEBDEV_HERO = {
  badge: 'Web Development',
  headline: 'Websites and eCommerce Platforms Built to Convert',
  sub: 'A website that just looks good is not enough. We build fast, modern, secure websites and online stores designed around your customer journey and built to turn visitors into leads and sales.',
  btn: 'Start Your Website Project',
};

export const WEBDEV_CARDS = [
  {
    iconBg: '#eff4ff',
    accent: '#1B4FD8',
    title: 'Custom Business Websites',
    desc: 'Purpose-built websites designed around your brand and your customers, not a generic template. Fast, responsive and easy for your team to manage.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1B4FD8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  },
  {
    iconBg: '#f0fdf4',
    accent: '#059669',
    title: 'eCommerce Platforms',
    desc: 'Full online stores built for real sales, including product catalogues, secure checkout, payment integration and a structure ready for growth.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>`,
  },
  {
    iconBg: '#fff7ed',
    accent: '#ea580c',
    title: 'Modern, Fast Technology',
    desc: 'Built on modern frameworks for speed and reliability. A slow site loses customers before they even see what you offer, so performance comes first.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  },
  {
    iconBg: '#f5f3ff',
    accent: '#7c3aed',
    title: 'UI/UX Design That Converts',
    desc: 'Every layout and flow is designed around how real users behave, guiding visitors toward enquiries, bookings or purchases instead of leaving them guessing.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
  },
  {
    iconBg: '#fdf2f8',
    accent: '#db2777',
    title: 'SEO-Ready From Day One',
    desc: 'Every website we build is structured for search from the start: proper headings, fast load times and clean code that search engines and AI tools can actually read.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#db2777" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  },
  {
    iconBg: '#fefce8',
    accent: '#ca8a04',
    title: 'Ongoing Maintenance and Support',
    desc: 'Websites need upkeep. We handle updates, security, backups and performance monitoring, so your site keeps running smoothly long after launch.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ca8a04" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`,
  },
];

export const WEBDEV_CTA = {
  headline: 'Ready to Build a Website That Actually Works for You?',
  sub: 'Book a free consultation and we will map out exactly what your website needs to start generating results.',
  btn: 'Book Free Consultation',
};

// ---- APP DEVELOPMENT PAGE ----

export const APPDEV_HERO = {
  badge: 'App Development',
  headline: 'Android and iOS Apps Built Around Your Business Goals',
  sub: 'From idea to launch, we design and build mobile apps that solve a real problem for your users and fit naturally into how your business already works.',
  btn: 'Start Your App Project',
};

export const APPDEV_CARDS = [
  {
    iconBg: '#eff4ff',
    accent: '#1B4FD8',
    title: 'Native and Cross-Platform Development',
    desc: 'Build once and launch on both Android and iOS, or go fully native when performance demands it. We choose the right approach for your budget and goals.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1B4FD8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  },
  {
    iconBg: '#f5f3ff',
    accent: '#7c3aed',
    title: 'UI/UX Design First',
    desc: 'Every app starts with how real users will actually use it. Clear navigation, intuitive flows and interfaces people do not need instructions to understand.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  },
  {
    iconBg: '#f0fdf4',
    accent: '#059669',
    title: 'Built to Scale',
    desc: 'Your app architecture is built to handle growth from day one, so a spike in users does not mean a rebuild six months later.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  },
  {
    iconBg: '#fff7ed',
    accent: '#ea580c',
    title: 'Backend and API Integration',
    desc: 'Secure, reliable backend systems and integrations with the tools you already use: payments, CRMs, booking systems and more.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>`,
  },
  {
    iconBg: '#fdf2f8',
    accent: '#db2777',
    title: 'App Store Launch Support',
    desc: 'We handle the technical requirements of getting your app approved and live on the Google Play Store and Apple App Store.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#db2777" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
  },
  {
    iconBg: '#fefce8',
    accent: '#ca8a04',
    title: 'Post-Launch Maintenance',
    desc: 'Apps need updates as operating systems change. We keep your app stable, secure and compatible long after the first release.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ca8a04" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  },
];

export const APPDEV_TESTIMONIALS = [
  { quote: 'SerpEyes took our idea from a rough sketch to a working app in a few months. Communication was clear the whole way through.', name: 'Wei C.', role: 'Founder, Retail Startup' },
  { quote: 'They understood exactly what we needed without over-engineering it. The app has been stable since launch.', name: 'Arun P.', role: 'Operations Lead' },
];

export const APPDEV_CTA_BTN = 'Book Free Consultation';

// ---- SERVICES PAGE ----

export const SERVICES_HERO = {
  badge: 'Our Services',
  headline: 'Digital Growth Services Built Around Your Business',
  sub: 'Website development, app development, SEO, AEO and digital marketing, delivered by one team that understands how they all work together.',
  btn: 'Book Free Consultation',
};

export const SERVICES_SECTION = {
  headline: 'A Complete Digital Growth Strategy',
  sub: 'We do not apply the same playbook to every client. We research your market, understand your customers and build a strategy around what actually works for your business.',
};

export const SERVICES_CARDS = [
  {
    iconBg: '#eff4ff',
    accent: '#1B4FD8',
    title: 'Website & eCommerce Development',
    desc: 'Custom business websites and full eCommerce platforms designed to convert visitors into leads and sales, built on modern, secure technology.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1B4FD8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  },
  {
    iconBg: '#f0fdf4',
    accent: '#059669',
    title: 'Mobile App Development',
    desc: 'Android and iOS apps designed around your users and built to scale, from first concept through to app store launch and ongoing support.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  },
  {
    iconBg: '#fff7ed',
    accent: '#ea580c',
    title: 'Search Engine Optimisation',
    desc: 'Technical, on-page and content SEO that grows your organic visibility and keeps you ranking, not just for one month.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  },
  {
    iconBg: '#fdf2f8',
    accent: '#db2777',
    title: 'Answer Engine Optimisation',
    desc: 'Structured, optimised content so your business gets found and recommended inside ChatGPT, Perplexity and Google AI Overviews.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#db2777" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z"/><circle cx="12" cy="12" r="2.8" fill="#db2777" fill-opacity="0.15"/><path d="M18.8 4.5l.8 1.7 1.7.8-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.8.8-1.7z"/></svg>`,
  },
  {
    iconBg: '#f5f3ff',
    accent: '#7c3aed',
    title: 'Digital Marketing & Content Strategy',
    desc: 'Social media marketing, content strategy and campaigns that build awareness and turn attention into qualified leads.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10v4a1 1 0 001 1h3l4 4V5L7 9H4a1 1 0 00-1 1z"/><path d="M15 8a5 5 0 010 8"/><path d="M18 5a9 9 0 010 14"/></svg>`,
  },
];

export const SERVICES_TESTIMONIALS_SECTION = {
  badge: 'Our Clients',
  headline: 'Trusted by Businesses Across Industries',
  sub: 'Brands we have supported with websites, apps, SEO and growth-focused strategy.',
};

export const SERVICES_TESTIMONIALS = [
  {
    company: 'Scanstar Inspection Technology',
    logo: '/clients/scanstar-inspection-technology-logo.png',
    website: 'https://www.scanstarinspection.in/',
    short: 'Scanstar',
  },
  {
    company: 'K2L Aircon Repair & Service',
    logo: '/clients/k2l-logo.png',
    website: 'https://k2lairconsg.com/',
    short: 'K2L Aircon',
  },
  {
    company: 'Truleum Loft Specialist',
    logo: '/clients/truleum-logo.png',
    website: 'https://truleumloftspecialist.com/',
    short: 'Truleum',
  },
];

export const QUOTE_SECTION = {
  headline: 'Every Project Is Scoped Around What You Actually Need',
  sub: 'We do not sell fixed packages. Tell us what you are trying to build or grow and we will put together a proposal based on your goals, timeline and budget.',
  btn: 'Get a Free Quote',
};

export const MARKETS_SECTION = {
  headline: 'Markets We Have Worked In',
  sub: 'We have delivered websites, apps and growth campaigns for businesses across multiple markets. Each one requires a different approach. We research yours before we start.',
};

export const MARKETS = [
  {
    code: 'SG',
    color: '#1B4FD8',
    bg: '#eff4ff',
    market: 'Singapore',
    note: 'Our home market. Deep expertise in local search behaviour, digital habits and what actually drives growth for Singapore businesses.',
  },
  {
    code: 'UK',
    color: '#059669',
    bg: '#f0fdf4',
    market: 'United Kingdom',
    note: 'Websites, apps and local SEO for UK businesses, including Google Business Profile, local directories and regional search intent.',
  },
  {
    code: 'IN',
    color: '#ea580c',
    bg: '#fff7ed',
    market: 'India',
    note: 'Digital growth services for Indian businesses across major cities, with local market considerations built into every project.',
  },
  {
    code: 'SEA',
    color: '#7c3aed',
    bg: '#f5f3ff',
    market: 'Southeast Asia',
    note: 'Malaysia, Indonesia, Philippines and beyond. Growing markets with significant digital opportunities and less saturated competition.',
  },
];

export const SERVICES_CTA = {
  headline: 'Not Sure Where to Start?',
  sub: 'Book a free 20 minute consultation and we will tell you exactly what your business needs, whether that is a new website, an app, stronger SEO or all three.',
  btn: 'Book Free Consultation',
};

// ---- ABOUT PAGE ----

export const ABOUT_HERO = {
  badge: 'About Us',
  headline: 'A Digital Growth Agency Built by Doing the Work',
  sub: 'SerpEyes started as an SEO focused build and grew into a full digital growth agency because a great SEO strategy still needs a website and app worth ranking. Here is who we are and how we work.',
  btn: 'Get a Free Consultation',
};

export const ABOUT_STORY = {
  headline: 'Our Story',
  paragraphs: [
    'SerpEyes began with a simple frustration. SEO results only go so far when the website behind them is slow, hard to update or not built to convert. We kept referring that work out to other vendors until we decided to build the capability ourselves.',
    'Today SerpEyes is a full digital growth agency. We build websites and apps, run SEO and AEO, and handle digital marketing, so every part of a business online presence works toward the same goal instead of being managed by five disconnected vendors.',
    'We are based in Singapore and work with businesses across the UK, India and Southeast Asia, adapting every strategy to the market it needs to perform in.',
  ],
};

export const ABOUT_MISSION = {
  mission: 'Help businesses actually get found online, and grow because of it, by combining solid web development with AI driven SEO and answer engine optimisation. Less guesswork, more results.',
  vision: 'To be the digital growth partner clients trust the way they would trust their sharpest in house team. Quick, data driven and never caught off guard by wherever search and AI decide to go next.',
};

export const ABOUT_VALUES_SECTION = {
  badge: 'What We Stand For',
  headline: 'Our Values',
};

export const ABOUT_VALUES = [
  { icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`, title: 'Ownership', desc: 'If something is broken or unclear, that is the cue to fix it, not work around it.' },
  { icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`, title: 'Integrity', desc: 'We do the right thing for a client even when it would be easier not to.' },
  { icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`, title: 'Customer First', desc: 'If the client wins, we win. Every decision gets weighed against their outcome.' },
  { icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>`, title: 'Continuous Learning', desc: 'Search and AI change constantly, so staying current is part of the job, not an extra.' },
  { icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`, title: 'Teamwork', desc: 'Websites, apps, SEO and marketing are built by one connected team, not siloed specialists.' },
  { icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`, title: 'Respect', desc: 'For clients, for each other, and for everyone else\'s time and workload.' },
];

export const ABOUT_FOUNDER = {
  role: 'Founder and CEO',
  quote: 'SerpEyes started as one person trying to build smarter, AI powered tools. It grew into a team that cares about doing the work properly and building things that actually move the needle for clients.',
};

export const ABOUT_CTA = {
  headline: 'Want to Work With Us?',
  sub: 'Book a free consultation and tell us about your business. We will tell you honestly what would move the needle first.',
  btn: 'Book Free Consultation',
};

// ---- AEO PAGE ----

export const AEO_HERO = {
  badge: 'A Newer Kind of Search',
  headline: 'People Are Starting to Ask AI Instead of Google',
  sub: 'Someone needs an aircon company, a lawyer, a web agency. A few years ago they would have typed it into Google. Now more and more people just ask ChatGPT or Perplexity directly, and act on whatever the AI tells them. If your business is not part of that answer, you were never in the running. That is the whole problem AEO exists to fix.',
  btn: 'Find Out If You Are Missing',
};

export const AEO_COMPARISON = {
  headline: 'The Same Question, Two Different Places to Show Up',
  sub: 'This is not a new marketing channel stacked on top of the old one. It is the same customer intent, showing up somewhere your SEO does not reach.',
  before: {
    label: 'Google Search',
    query: 'best aircon servicing singapore',
    body: 'Ten blue links. Your ranking depends on backlinks, on page SEO, and years of accumulated authority. You have been optimising for this for a decade.',
  },
  after: {
    label: 'Ask ChatGPT',
    query: 'best aircon servicing singapore',
    body: 'One written answer, usually naming two or three businesses by name, built from what the AI has read about them. No ranking position. No blue link. Either you are named, or you are not.',
  },
};

export const AEO_EXPLAINER = {
  headline: 'What AEO Actually Is',
  paragraphs: [
    'Answer Engine Optimisation is the practice of structuring your website and content so AI tools can actually find, understand and confidently repeat information about your business, instead of just crawling it for keywords.',
    'It overlaps with SEO but is not the same job. Good SEO gets a page to rank. Good AEO gets a fact about your business, your services, your service area, your credibility, stated clearly enough that an AI model will quote it back to someone asking.',
    'Nobody outside a handful of specialists has this fully figured out yet, including the AI companies themselves. What we do is grounded in what is currently observable: structured data, clear factual statements, consistent information across the web, and content written to directly answer the questions people actually ask.',
  ],
};

export const AEO_PROCESS_SECTION = {
  headline: 'How We Actually Approach It',
  sub: 'Four steps, done in order, because doing them out of order wastes the earlier ones.',
};

export const AEO_PROCESS = [
  { step: '01', title: 'Check where you stand', desc: 'We ask the AI tools directly, the same questions your customers would, and see whether your business comes up, gets it wrong, or is not there at all.' },
  { step: '02', title: 'Fix the facts first', desc: 'Inconsistent business details across your site, directories and profiles actively hurt you here. We clean that up before anything else.' },
  { step: '03', title: 'Write to be quoted', desc: 'Content structured as direct, unambiguous answers to real questions, not keyword-stuffed copy written for a ranking algorithm.' },
  { step: '04', title: 'Recheck and adjust', desc: 'AI answers change as models update. We check again on a schedule, not once and forgotten.' },
];

export const AEO_LIMITS_SECTION = {
  headline: 'What We Will Not Promise You',
  sub: 'Anyone guaranteeing you will be cited by name in AI answers is guessing, same as anyone who used to guarantee a page one Google ranking.',
};

export const AEO_LIMITS = [
  'AI answers change with every model update, sometimes overnight, in ways nobody outside the AI labs can fully predict.',
  'There is no dashboard that reliably tracks every AI mention the way rank trackers do for Google. Measurement here is still catching up to the channel.',
  'Some categories of business get named far more often than others. A local trade with clear, factual information tends to do better than a business selling something abstract.',
];

export const AEO_CTA = {
  headline: 'Ask ChatGPT About Your Own Business Right Now',
  sub: 'Try it yourself before you talk to us. Ask an AI tool something a real customer would ask about your industry, in your city, and see what comes back. Then tell us what you found.',
  btn: 'Book a Free AEO Check',
};

// ---- BLOG PAGE ----

export const BLOG_HERO = {
  badge: 'The SerpEyes Blog',
  headline: 'Insights on Web, Apps, SEO and Growth',
  sub: 'Practical guides on website development, app building, SEO, AEO and digital marketing for businesses that want to grow online.',
};

export const BLOG_POSTS = [
  {
    slug: 'how-to-check-if-your-business-shows-up-in-ai-search',
    tag: 'AEO',
    title: 'How to Check If Your Business Shows Up in AI Search (And What to Do If It Does Not)',
    metaTitle: 'Check If Your Business Shows Up in AI Search',
    metaDescription: 'A simple way to check if ChatGPT and other AI tools know your business exists, and exactly what to do if they do not show up.',
    excerpt: 'A simple way to check if ChatGPT and other AI tools know your business exists, and exactly what to do if they do not.',
    date: 'Jul 2026',
    readTime: '5 min read',
    featuredImage: '/logo.svg',
  },
  { slug: 'serpeyes-digital-growth-agency-what-we-do', tag: 'Company Update', title: 'SerpEyes Is Now a Full Digital Growth Agency. Here Is What Changed.', excerpt: 'We have expanded from SEO into a complete digital growth agency: websites, apps, SEO, AEO and marketing. Here is what that means for our clients.', date: 'Jul 2026', readTime: '6 min read', featuredImage: '/logo.svg' },
];

// ---- PRICING PAGE ----
// NOTE: priceMonthly values below are placeholders. Update to your real
// monthly rate (in SGD) before this page goes live and starts taking payments.

export const PRICING_HERO = {
  badge: 'Pricing',
  headline: 'Plans Built Around How Long Growth Actually Takes',
  sub: 'SEO and AEO results take real time to show up in rankings and AI answers. Our retainers run on a 3-month minimum so the work has room to actually work, billed monthly.',
};

// Fallback-only conversion rates from SGD, used solely if the live rate fetch
// (frankfurter.dev, fetched client-side on page load) fails. Pulled from
// https://api.frankfurter.dev/v1/latest?base=SGD on 2026-08-03, real rates,
// not estimates. The live fetch overwrites these on every page load when it succeeds.
// Actual billing is always in SGD, other currencies are shown for reference only.
export const PRICING_CURRENCIES = [
  { code: 'SGD', symbol: 'S$', rate: 1 },
  { code: 'USD', symbol: '$', rate: 0.78029 },
  { code: 'GBP', symbol: '£', rate: 0.57927 },
  { code: 'INR', symbol: '₹', rate: 74.39 },
  { code: 'AUD', symbol: 'A$', rate: 1.1136 },
];

export const PRICING_RETAINERS = [
  {
    id: 'seo-aeo',
    name: 'SEO + AEO Retainer',
    tagline: 'Get found on Google and in AI answers like ChatGPT and Perplexity.',
    priceMonthly: 599,
    currency: 'SGD',
    billing: 'per month, 3-month minimum commitment',
    features: [
      'Technical SEO audit and fixes',
      'On-page and content optimisation',
      'AEO structured data and answer-ready content',
      'Monthly ranking and AI-visibility report',
      'Direct access to your account lead',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    id: 'seo-aeo-marketing',
    name: 'SEO + AEO + Digital Marketing Retainer',
    tagline: 'Everything in the SEO + AEO plan, plus social media management.',
    priceMonthly: 799,
    currency: 'SGD',
    billing: 'per month, 3-month minimum commitment',
    features: [
      'Everything in the SEO + AEO Retainer',
      'Instagram, Facebook and YouTube management',
      'Additional social channels if needed',
      'Monthly content calendar',
      'Combined SEO, AEO and social performance report',
    ],
    cta: 'Get Started',
    popular: true,
  },
];

export const PRICING_QUOTES = [
  {
    id: 'web-development',
    name: 'Web Development',
    tagline: 'Custom-built websites, scoped and quoted after a short call with us.',
    cta: 'Request a Quote',
    href: '/request-demo',
  },
  {
    id: 'app-development',
    name: 'App Development',
    tagline: 'iOS, Android or cross-platform apps, scoped and quoted after a short call with us.',
    cta: 'Request a Quote',
    href: '/request-demo',
  },
];

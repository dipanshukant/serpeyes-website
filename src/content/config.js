// =============================================================
// CONTENT CONFIG
// This is the only file you need to edit to change content.
// =============================================================

export const SITE = {
  name: 'Serpeyes',
  email: 'hello@serpeyes.com',
  phone: '+65 84401039',
  location: 'Singapore',
  copyright: '2026 Serpeyes. All rights reserved.',
};

export const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Web Development', href: '/web-development' },
  { label: 'App Development', href: '/app-development' },
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
  subheadline: 'Serpeyes is a digital growth agency that helps businesses establish, optimise and scale their online presence. Websites, mobile apps, SEO, AEO and result-driven marketing, delivered by one team instead of five vendors.',
  btn1: 'Get a Free Consultation',
  btn2: 'View Our Services',
  footnote: 'Free website and SEO audit included. No obligation.',
};

export const DIFF_SECTION = {
  badge: 'Why Serpeyes',
  headline: 'One Growth Partner Instead of Five Vendors.',
  sub: 'Most agencies specialise in one piece: a website, or ads, or SEO. Serpeyes builds and grows the whole system, so every part works toward the same goal, more qualified customers.',
};

export const DIFF_CARDS = [
  { icon: '🔗', title: 'One Team, Every Channel', desc: 'Your website, app, SEO and marketing built by one team that already knows your brand. No handoffs between vendors and no mismatched strategies pulling in different directions.' },
  { icon: '🤖', title: 'AI-Powered Workflows', desc: 'We use AI-driven research, content and automation to move faster than traditional agencies, without cutting corners on quality or strategy.' },
  { icon: '📊', title: 'Data-Driven, Not Guesswork', desc: 'Every decision, design choice, keyword or campaign is backed by data on what your customers actually search for and respond to.' },
  { icon: '🔍', title: 'Built for AI Search Too', desc: 'Search is changing. We optimise for AEO, Answer Engine Optimisation, so your business shows up in ChatGPT, Perplexity and Google AI Overviews, not just Google.' },
  { icon: '🎯', title: 'Focused on Measurable Growth', desc: 'We track leads, conversions and revenue impact, not vanity metrics. You always know what your investment is actually producing.' },
  { icon: '🛠️', title: 'Built to Scale With You', desc: 'From your first website to a full multi-channel growth engine, our systems are built to grow alongside your business, not need replacing in a year.' },
];

export const FEATURES_SECTION = {
  badge: 'Our Services',
  headline: 'Everything Your Business Needs to Grow Online',
  sub: 'From your first website to ongoing marketing and search visibility, Serpeyes covers every stage of your digital presence under one roof.',
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
  { quote: 'Serpeyes built our website and handled our SEO from day one. We finally have a digital presence that actually brings in enquiries.', name: 'Sarah T.', role: 'Business Owner, Singapore' },
  { quote: 'They built our app and kept iterating with us after launch. Communication was clear and nothing felt rushed.', name: 'Marcus L.', role: 'Founder, Retail Startup' },
  { quote: 'As a small business owner I never understood SEO or web development. Serpeyes made it simple and showed me exactly what my clinic needed to grow online.', name: 'Dr. Priya R.', role: 'Clinic Owner, Tampines' },
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
  { quote: 'Serpeyes took our idea from a rough sketch to a working app in a few months. Communication was clear the whole way through.', name: 'Wei C.', role: 'Founder, Retail Startup' },
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
    flag: '🇸🇬',
    market: 'Singapore',
    note: 'Our home market. Deep expertise in local search behaviour, digital habits and what actually drives growth for Singapore businesses.',
  },
  {
    flag: '🇬🇧',
    market: 'United Kingdom',
    note: 'Websites, apps and local SEO for UK businesses, including Google Business Profile, local directories and regional search intent.',
  },
  {
    flag: '🇮🇳',
    market: 'India',
    note: 'Digital growth services for Indian businesses across major cities, with local market considerations built into every project.',
  },
  {
    flag: '🌏',
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
  sub: 'Serpeyes started as an SEO focused build and grew into a full digital growth agency because a great SEO strategy still needs a website and app worth ranking. Here is who we are and how we work.',
  btn: 'Get a Free Consultation',
};

export const ABOUT_STORY = {
  headline: 'Our Story',
  paragraphs: [
    'Serpeyes began with a simple frustration. SEO results only go so far when the website behind them is slow, hard to update or not built to convert. We kept referring that work out to other vendors until we decided to build the capability ourselves.',
    'Today Serpeyes is a full digital growth agency. We build websites and apps, run SEO and AEO, and handle digital marketing, so every part of a business online presence works toward the same goal instead of being managed by five disconnected vendors.',
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
  { title: 'Ownership', desc: 'If something is broken or unclear, that is the cue to fix it, not work around it.' },
  { title: 'Integrity', desc: 'We do the right thing for a client even when it would be easier not to.' },
  { title: 'Customer First', desc: 'If the client wins, we win. Every decision gets weighed against their outcome.' },
  { title: 'Continuous Learning', desc: 'Search and AI change constantly, so staying current is part of the job, not an extra.' },
  { title: 'Teamwork', desc: 'Websites, apps, SEO and marketing are built by one connected team, not siloed specialists.' },
];

export const ABOUT_FOUNDER = {
  name: 'Dipanshu Kant',
  role: 'Founder and CEO',
  quote: 'Serpeyes started as one person trying to build smarter, AI powered tools. It grew into a team that cares about doing the work properly and building things that actually move the needle for clients.',
};

export const ABOUT_CTA = {
  headline: 'Want to Work With Us?',
  sub: 'Book a free consultation and tell us about your business. We will tell you honestly what would move the needle first.',
  btn: 'Book Free Consultation',
};

// ---- BLOG PAGE ----

export const BLOG_HERO = {
  badge: 'The Serpeyes Blog',
  headline: 'Insights on Web, Apps, SEO and Growth',
  sub: 'Practical guides on website development, app building, SEO, AEO and digital marketing for businesses that want to grow online.',
};

export const BLOG_POSTS = [
  { slug: 'serpeyes-digital-growth-agency-what-we-do', tag: 'Company Update', title: 'Serpeyes Is Now a Full Digital Growth Agency. Here Is What Changed.', excerpt: 'We have expanded from SEO into a complete digital growth agency: websites, apps, SEO, AEO and marketing. Here is what that means for our clients.', date: 'Jul 2026', readTime: '6 min read', featuredImage: '/logo.svg' },
];

// =============================================================
// CONTENT CONFIG
// This is the only file you need to edit to change content.
// =============================================================

export const SITE = {
  name: 'SerpEyes',
  email: 'hello@serpeyes.com',
  phone: '+65 84401039',
  location: 'Singapore',
  copyright: '2026 SerpEyes. All rights reserved. Built for Singapore.',
};

export const NAV_LINKS = [
  { label: 'For Agencies', href: '/for-agencies' },
  { label: 'For Freelancers', href: '/for-freelancers' },
  { label: 'SEO Services', href: '/seo-services' },
  { label: 'Blog', href: '/blog' },
];

export const FOOTER_RESOURCES = ['Blog', 'Case Studies', 'SEO Glossary', 'Singapore SEO Guide'];
export const FOOTER_SOCIALS = ['LinkedIn', 'Twitter'];

// ---- HOMEPAGE ----

export const HERO_KEYWORDS = [
  'aircon servicing Singapore',
  'dentist near me Tampines',
  'best SEO agency Singapore',
  'accounting firm Jurong',
  'interior design Singapore',
  'car workshop Woodlands',
  'tuition centre Bishan',
  'plumber Singapore 24hr',
  'wedding photographer SG',
  'cleaning service HDB',
  'digital marketing agency',
  'web design Singapore',
  'physio near me Singapore',
  'food delivery Orchard',
  'renovation contractor SG',
];

export const HERO = {
  badge: 'For Agencies. Freelancers. Business Owners',
  headline: 'The SEO Intelligence Platform Built for',
  headlineAccent: 'Singapore',
  subheadline: 'Generic SEO tools are not built for Singapore. SerpEyes is. Get the intelligence your competitors do not have and turn it into rankings that actually matter for your business. Use the platform yourself or let our team handle your SEO completely.',
  btn1: 'Get Early Access',
  btn2: 'View SEO Services',
  footnote: 'No credit card required. Free during early access.',
};

// Dashboard gauge cards.
// percent = how full the ring looks (0-100). value = text shown inside ring.
export const DASHBOARD_STATS = [
  { label: 'SEO Health', value: '84', percent: 84, color: '#1B4FD8', badge: '+12 pts', badgeBg: '#dcfce7', badgeColor: '#166534', sub: 'out of 100' },
  { label: 'Visibility', value: '91%', percent: 91, color: '#7c3aed', badge: 'Top 3 SG', badgeBg: '#ede9fe', badgeColor: '#5b21b6', sub: 'local search' },
  { label: 'Keywords', value: '127', percent: 63, color: '#059669', badge: '+18 new', badgeBg: '#dcfce7', badgeColor: '#166534', sub: 'ranking now' },
  { label: 'Reports', value: '34', percent: 50, color: '#ea580c', badge: 'this month', badgeBg: '#ffedd5', badgeColor: '#9a3412', sub: 'generated' },
];

// Dashboard bottom chips (3 items).
export const DASHBOARD_CHIPS = [
  { title: '14 hrs saved', sub: 'vs manual work', iconBg: '#eff4ff', iconType: 'zap' },
  { title: '9 active clients', sub: 'all monitored', iconBg: '#f0fdf4', iconType: 'users' },
  { title: '.sg optimised', sub: 'local signals active', iconBg: '#fdf4ff', iconType: 'activity' },
];

export const DIFF_SECTION = {
  badge: 'Why SerpEyes',
  headline: 'Most SEO Tools Miss What Actually Matters in Singapore.',
  sub: 'Generic SEO platforms are built for US and UK markets. They miss the signals that actually matter when your customers are in Singapore.',
};

export const DIFF_CARDS = [
  { icon: '💬', title: 'Local Messaging Readiness', desc: 'Singapore customers expect to reach businesses on WhatsApp before they enquire. SerpEyes identifies gaps in how your business handles local messaging, so you never lose a lead over something this simple.' },
  { icon: '📱', title: 'Contact Credibility Check', desc: 'A missing or broken contact number costs you customers before they even reach out. SerpEyes checks that your local contact details are working exactly the way Singapore customers expect them to.' },
  { icon: '🏛️', title: 'Business Trust Verification', desc: 'Singapore consumers look for signs that a business is legitimate before they spend money. SerpEyes verifies that your business displays the trust credentials that local customers actually look for.' },
  { icon: '🎯', title: 'Local Presence Strength', desc: 'Ranking in Singapore requires a different set of trust signals than ranking anywhere else. SerpEyes analyses your entire local presence and tells you exactly what is holding your rankings back.' },
  { icon: '🌐', title: 'Singapore Market Fit', desc: 'The signals that move rankings in Singapore are not the same ones that work in London or New York. SerpEyes is built around what actually works in this market, not generic global benchmarks.' },
  { icon: '🗺️', title: 'Local Search Alignment', desc: 'Your customers search in ways that generic SEO tools do not understand. SerpEyes is trained on how people in Singapore actually look for businesses, so your content targets the right searches.' },
];

export const FEATURES_SECTION = {
  badge: 'Core Features',
  headline: 'Everything You Need to See the Full SEO Picture',
  sub: 'Eight purpose-built modules covering every stage of SEO work. From winning new clients to tracking your results over time.',
};

export const FEATURES = [
  {
    iconBg: '#eff4ff',
    accent: '#1B4FD8',
    title: 'Prospect Reports',
    desc: 'Walk into every client pitch with a branded, white-label SEO audit report generated in minutes. Built around Singapore market signals so every report reflects what actually matters to Singapore customers, not a generic global template.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1B4FD8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  },
  {
    iconBg: '#f0fdf4',
    accent: '#059669',
    title: 'Site Audit',
    desc: 'Run a complete technical SEO audit on any website. Identifies crawl errors, missing tags, speed issues, mobile problems and Singapore-specific trust signals that generic tools completely miss.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  },
  {
    iconBg: '#f5f3ff',
    accent: '#7c3aed',
    title: 'Article Optimizer',
    desc: 'Paste any existing article and SerpEyes rewrites it for better rankings. Fixes keyword placement, improves heading structure, adds internal links and scores the content before and after.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
  },
  {
    iconBg: '#fff7ed',
    accent: '#ea580c',
    title: 'Keyword Research',
    desc: 'Discover what Singapore customers are actually searching for. Get keyword ideas, search volumes and difficulty scores tailored to Singapore search behaviour and local market intent.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><polyline points="8 11 10 13 14 9"/></svg>`,
  },
  {
    iconBg: '#fdf2f8',
    accent: '#db2777',
    title: 'Competitor Analysis',
    desc: 'See exactly which keywords your competitors are ranking for, what their content strategy looks like and where the gaps are that you can exploit to outrank them.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#db2777" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,
  },
  {
    iconBg: '#f0fdf4',
    accent: '#059669',
    title: 'Performance Reports',
    desc: 'Track your SEO progress month by month with Singapore market context built in. Clean, client-ready reports showing keyword movements, traffic trends and what improved since last month so clients always see the value you deliver.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="2 20 22 20"/></svg>`,
  },
  {
    iconBg: '#eff4ff',
    accent: '#1B4FD8',
    title: 'Search Console',
    desc: 'Connect your Google Search Console data directly into SerpEyes. See your impressions, clicks, average positions and top performing pages all in one place alongside your other SEO data.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1B4FD8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  },
  {
    iconBg: '#fefce8',
    accent: '#ca8a04',
    title: 'Article Generator',
    desc: 'Generate fully structured SEO articles from scratch. Input your target keyword and market and SerpEyes produces a complete draft with proper headings, keyword placement and meta description ready to publish.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ca8a04" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l11.5 11.5"/><circle cx="11" cy="11" r="2"/></svg>`,
  },
];

export const COMING_SOON_SECTION = {
  badge:    'Coming Soon',
  headline: 'What Is Coming Next',
  sub:      'Two powerful modules in development that will push SerpEyes even further ahead of generic SEO tools.',
};

export const COMING_SOON = [
  {
    iconBg: '#eff4ff',
    accent: '#1B4FD8',
    title: 'Rank Tracking',
    desc: 'Monitor your keyword rankings daily starting with Singapore and expanding to international markets. See exactly where you are moving up, where you are slipping and which pages need attention right now.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1B4FD8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  },
  {
    iconBg: '#f5f3ff',
    accent: '#7c3aed',
    title: 'AI Visibility Tracker',
    desc: 'The future of SEO is AI search. Track whether your business appears in ChatGPT, Perplexity and Google AI Overviews. Understand your AI search presence before your competitors even know it matters.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z"/><circle cx="12" cy="12" r="2.8" fill="#7c3aed" fill-opacity="0.15"/><path d="M18.8 4.5l.8 1.7 1.7.8-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.8.8-1.7z"/></svg>`,
  },
];

export const AUDIENCE_SECTION = {
  badge: 'Who Uses SerpEyes',
  headline: 'Whether You Do SEO or Need It Done',
};

export const AUDIENCE = [
  { icon: '', title: 'Agencies', desc: 'Scale your SEO delivery without scaling your team. White-label reports and bulk content generation help you take on more clients profitably.', href: '/for-agencies' },
  { icon: '', title: 'Freelancers', desc: 'Look bigger than you are. Deliver agency-quality SEO audits and content to clients without spending hours doing it manually.', href: '/for-freelancers' },
  { icon: '', title: 'Business Owners', desc: 'Get SEO done for you. SerpEyes gives you a clear picture of where your Singapore business stands online and what to fix first.', href: '/seo-services' },
];

export const SOCIAL_PROOF_LABEL = 'Trusted by SEO professionals across Singapore';

export const TRUST_TAGS = ['Marketing Agencies', 'SEO Freelancers', 'SMB Owners', 'E-commerce Stores', 'Clinics and Practices'];

export const TESTIMONIALS = [
  { quote: 'Finally an SEO tool that actually understands how Singapore businesses work. The WhatsApp checker alone saved us hours of manual auditing.', name: 'Sarah T.', role: 'SEO Agency Owner, Singapore' },
  { quote: 'I use SerpEyes to produce reports that look like they came from a big agency. My clients are impressed and I close more deals now.', name: 'Marcus L.', role: 'Freelance SEO Consultant' },
  { quote: 'As a small business owner I never understood SEO. SerpEyes made it simple and showed me exactly what my clinic website needed to rank.', name: 'Dr. Priya R.', role: 'Clinic Owner, Tampines' },
];

export const CTA_SECTION = {
  headline: 'Be Among the First to Use SerpEyes',
  sub: 'Join the waitlist and get free access during our early launch phase. No payment required. We will reach out personally when your spot is ready.',
  btnLabel: 'Get Early Access',
  placeholder: 'Your work email',
  successTitle: 'You are on the list!',
  successSub: 'We will be in touch when SerpEyes is ready for Singapore.',
};

// ---- FOR AGENCIES PAGE ----

export const AGENCIES_HERO = {
  badge: 'For Agencies',
  headline: 'Deliver Better SEO for More Clients Without Growing Your Team',
  sub: 'SerpEyes is designed for Singapore marketing agencies that want to scale SEO delivery, impress clients with professional reports and stop spending half their week on manual audits.',
  btn: 'Book Agency Demo',
};

export const AGENCIES_CARDS = [
  {
    iconBg: '#eff4ff',
    accent: '#1B4FD8',
    title: 'White-Label Reports in Minutes',
    desc: 'Generate fully branded SEO audit reports with your agency logo and branding. Send them to clients the same day you win a call, not three days later. Each report covers technical SEO, content gaps, market-specific insights and a clear action plan.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1B4FD8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  },
  {
    iconBg: '#f0fdf4',
    accent: '#059669',
    title: 'Free Your Team From Repetitive SEO Work',
    desc: 'Manual SEO audits, keyword research and content briefs consume hours that your team should be spending on strategy and client relationships. SerpEyes automates the repetitive parts so your best people focus on the work that actually grows your agency.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  },
  {
    iconBg: '#fff7ed',
    accent: '#ea580c',
    title: 'Scale Your Client Base',
    desc: 'When delivery takes a fraction of the time you can take on significantly more clients with the same team. SerpEyes handles the heavy lifting so your capacity grows without your headcount growing.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  },
  {
    iconBg: '#f5f3ff',
    accent: '#7c3aed',
    title: 'Singapore-Specific Audit Criteria',
    desc: 'Your clients are in Singapore, not London or New York. SerpEyes audits against the local market signals that actually determine rankings and trust here, the ones that generic Western tools were never designed to check.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
  },
  {
    iconBg: '#fdf2f8',
    accent: '#db2777',
    title: 'Client-Ready Content Briefs',
    desc: 'Stop briefing writers from guesswork. SerpEyes generates content briefs grounded in what Singapore audiences are actually searching for, so every article your team produces targets real demand from day one.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#db2777" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  },
  {
    iconBg: '#fefce8',
    accent: '#ca8a04',
    title: 'Close More Pitches',
    desc: 'Walk into a sales call with a live SEO audit of the prospect website already prepared. Show them the problems before they even ask. That level of preparation closes deals faster than any slide deck.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ca8a04" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  },
];

export const AGENCIES_CTA = {
  headline: 'Ready to Scale Your SEO Agency?',
  sub: 'Book a demo and we will show you exactly how SerpEyes fits into your agency workflow.',
  btn: 'Book Agency Demo',
};

// ---- FOR FREELANCERS PAGE ----

export const FREELANCERS_HERO = {
  badge: 'For Freelancers',
  headline: 'Look Like a Big Agency. Work Like a One-Person Team.',
  sub: 'Singapore clients want professional SEO services but they often work with freelancers who cannot match agency output. SerpEyes closes that gap so you can justify your rates and deliver faster.',
  btn: 'Get Early Access',
};

export const FREELANCERS_CARDS = [
  {
    iconBg: '#eff4ff',
    accent: '#1B4FD8',
    title: 'Deliver Client Work Faster',
    desc: 'Stop spending two days on a single SEO audit. SerpEyes generates a complete, actionable audit report in minutes covering technical issues, on-page problems, content gaps and competitor comparisons automatically.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1B4FD8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
  },
  {
    iconBg: '#f5f3ff',
    accent: '#7c3aed',
    title: 'Look Professional from Day One',
    desc: 'Your clients will see polished, branded reports that look like they came from a full team. You control the branding and the narrative. They just see a professional partner who knows their stuff.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  },
  {
    iconBg: '#f0fdf4',
    accent: '#059669',
    title: 'Deliver Work That Justifies Your Rates',
    desc: 'Clients pay premium rates for premium output. SerpEyes gives you detailed, data-backed audit reports and optimised content that demonstrates clear value, so your pricing reflects the quality of what you actually deliver.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
  },
  {
    iconBg: '#fff7ed',
    accent: '#ea580c',
    title: 'SEO Content That Actually Ranks',
    desc: 'Generate SEO articles built around what your target audience is actually searching for. Each piece is structured with proper headings, keyword placement and internal link suggestions so your content works harder from day one.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
  },
  {
    iconBg: '#fdf2f8',
    accent: '#db2777',
    title: 'Find New Client Opportunities',
    desc: 'Use SerpEyes to audit prospect websites before you pitch them. Walk into every call knowing exactly what is wrong with their SEO and how you will fix it. That preparation wins business.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#db2777" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><path d="M11 8v3l2 2"/></svg>`,
  },
  {
    iconBg: '#fefce8',
    accent: '#ca8a04',
    title: 'Take On More Without Burning Out',
    desc: 'The biggest challenge for solo operators is capacity, not skill. SerpEyes handles the time-consuming audit and research work so you can serve more clients at the same quality without stretching yourself thin.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ca8a04" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`,
  },
];

export const FREELANCER_TESTIMONIALS = [
  { quote: 'Tried SerpEyes on a couple of projects and it definitely speeds up the initial research phase. I would recommend it to other Freelance professionals', name: 'Wei C.', role: 'Freelance SEO Consultant, Singapore' },
  { quote: 'Still early, but SerpEyes is already helping me cut down manual work. Curious to see how it evolves.', name: 'Arun P.', role: 'SEO Freelancer, Singapore' },
];

export const FREELANCERS_CTA_BTN = 'Join the Waitlist';

// ---- SEO SERVICES PAGE ----

export const SERVICES_HERO = {
  badge: 'Done-for-You SEO',
  headline: 'Expert SEO Services Powered by SerpEyes Intelligence',
  sub: 'Generic SEO agencies apply the same playbook everywhere. We research the specific local trust signals, directories and search behaviours that actually move rankings in your market. Singapore, UK, India or anywhere else.',
  btn: 'Book Free Consultation',
};

export const SERVICES_SECTION = {
  headline: 'A Complete SEO Strategy, Built Around Your Market',
  sub: 'We do not apply the same playbook to every client. We research your market, understand your customers and build an SEO strategy around what actually works where your business operates.',
};

export const SERVICES_CARDS = [
  {
    iconBg: '#eff4ff',
    accent: '#1B4FD8',
    title: 'Technical SEO and On-Page Optimisation',
    desc: 'We audit and fix the technical foundation of your website first. Site speed, crawlability, mobile optimisation, title tags, meta descriptions, heading structure, schema markup and Core Web Vitals, all handled before we touch anything else.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1B4FD8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/><path d="M15.54 8.46a5 5 0 010 7.07M8.46 8.46a5 5 0 000 7.07"/></svg>`,
  },
  {
    iconBg: '#fff7ed',
    accent: '#ea580c',
    title: 'Content Strategy and Creation',
    desc: 'We research what your target customers are actually searching for in your market and produce content that answers those questions better than your competitors. Every article is structured, optimised and ready to rank.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  },
  {
    iconBg: '#f5f3ff',
    accent: '#7c3aed',
    title: 'Authority and Link Building',
    desc: 'We build real links from relevant websites in your target market. No shortcuts, no spammy directories and no link farms. Only links from credible sources that actually move your rankings in the right direction.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>`,
  },
  {
    iconBg: '#f0fdf4',
    accent: '#059669',
    title: 'Local Presence Management',
    desc: 'For businesses with a physical location or service area, we manage your complete local presence. Google Business Profile optimisation, local citations, directory submissions and market-specific trust signals that help nearby customers find you first.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  },
];

export const SERVICES_TESTIMONIALS_SECTION = {
  badge: 'Our Clients',
  headline: 'Trusted by Businesses Across Markets',
  sub: 'Brands we have supported with technical SEO, local visibility, and growth-focused strategy.',
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

export const PRICING_SECTION = {
  headline: 'SEO Packages for Singapore Businesses',
  sub:      'Built for businesses that want more visibility, more enquiries, and consistent growth from search. All prices are in SGD',
  badge:    'Pre-Launch Founding Member Pricing',
  badgeSub: 'All plans are available at founding member pricing until we reach capacity. Lock in your rate before we open fully.',
  note:     'No lock-in contracts. Cancel any time with 30 days notice. All prices in SGD.',
};

export const PLANS = [
  {
    name:        'Starter',
    price:       '$699',
    originalPrice: '$799',
    period:      '/month',
    popular:     false,
    desc:        'For small businesses that want to start ranking locally and get consistent leads. Best for single-location businesses looking to build a strong local presence.',
    features: [
      'Local keyword targeting based on how customers search',
      'SEO content focused on service-based, high-intent searches',
      'Google Business Profile optimisation to improve local visibility',
      'Technical SEO fixes to ensure your site is properly indexed and fast',
      'Monthly reporting with clear progress tracking',
      'Monthly strategy call to plan next steps',
    ],
  },
  {
    name:        'Growth',
    price:       '$1,299',
    originalPrice: '$1,499',
    period:      '/month',
    popular:     true,
    desc:        'For businesses that want steady growth and stronger visibility against competitors. Ideal for businesses ready to scale beyond basic SEO and capture more market share.',
    features: [
      'Everything in Starter',
      'Content expansion targeting competitive and multi-location keywords',
      'Link building to improve domain authority and rankings',
      'Competitor tracking to identify gaps and opportunities',
      'Bi-weekly strategy calls to continuously optimise performance',
    ],
  },
  {
    name:        'Authority',
    price:       '$1,999',
    originalPrice: '$2,499',
    period:      '/month',
    popular:     false,
    desc:        'For businesses that want to dominate their category in local search. Designed for companies that want to lead their market and stay ahead of competitors.',
    features: [
      'Everything in Growth',
      'Aggressive SEO strategy across content, links, and technical performance',
      'Advanced optimisation for competitive keywords',
      'Website-level SEO improvements including structure and scaling',
      'Weekly strategy calls with priority support',
      'Dedicated SEO manager focused on your business',
    ],
  },
];

export const MARKETS_SECTION = {
  headline: 'Markets We Have Worked In',
  sub: 'We have delivered local SEO results for businesses across multiple markets. Each market has its own signals, directories and trust factors. We research yours before we start.',
};

export const MARKETS = [
  {
    flag: '🇸🇬',
    market: 'Singapore',
    note: 'Our home market. Deep expertise in local search behaviour, market-specific trust factors and what actually drives rankings for Singapore businesses.',
  },
  {
    flag: '🇬🇧',
    market: 'United Kingdom',
    note: 'Local SEO for UK businesses including Google Business Profile, local directories and regional search intent across England, Scotland and Wales.',
  },
  {
    flag: '🇮🇳',
    market: 'India',
    note: 'Local SEO for Indian businesses across major cities. Local directories, regional search considerations and India-specific trust factors.',
  },
  {
    flag: '🌏',
    market: 'Southeast Asia',
    note: 'Malaysia, Indonesia, Philippines and beyond. Growing markets with significant local SEO opportunities and less competition than Western markets.',
  },
];

export const SERVICES_CTA = {
  headline: 'Not Sure Which Plan Is Right for You?',
  sub: 'Book a free 20 minute consultation and we will tell you exactly what your website needs, which market you are in, and what a realistic SEO timeline looks like for your business.',
  btn: 'Book Free Consultation',
};

// ---- BLOG PAGE ----

export const BLOG_HERO = {
  badge: 'The SerpEyes Blog',
  headline: 'SEO Insights for Singapore Businesses',
  sub: 'Practical SEO guides, local search tips and digital marketing strategies written specifically for the Singapore market.',
};

export const BLOG_POSTS = [
  { slug: 'serpeyes-early-access-what-we-built-and-why', tag: 'Product Update', title: 'SerpEyes Is Now in Early Access. Here Is What We Built and Why.', excerpt: 'After months of building, testing and rebuilding, SerpEyes is now open for early access. We are sharing what we built, why we built it and who we built it for.', date: 'Apr 2025', readTime: '8 min read', featuredImage: '/logo.svg' },
];

// ---- SCANNER COMPONENT DATA ----

export const SCAN_STEPS = [
  { phase: 'typing', duration: 1800 },
  { phase: 'scanning', duration: 2800 },
  { phase: 'results', duration: 3400 },
  { phase: 'done', duration: 2000 },
];

export const SCAN_CHECKS = [
  { label: 'Meta title & description', status: 'fail', score: null },
  { label: 'Local contact verification', status: 'pass', score: null },
  { label: 'Local messaging presence', status: 'pass', score: null },
  { label: 'Business legitimacy signals', status: 'fail', score: null },
  { label: 'Google Business Profile', status: 'warning', score: null },
  { label: 'Page speed (Core Web Vitals)', status: 'warning', score: null },
  { label: 'Market-specific domain health', status: 'pass', score: null },
  { label: 'Mobile responsiveness', status: 'pass', score: null },
  { label: 'Structured data / Schema', status: 'fail', score: null },
  { label: 'Internal linking structure', status: 'warning', score: null },
];

export const RESULT_STATS = [
  { label: 'SEO Score', value: '61', unit: '/100', color: '#ea580c', bg: '#fff7ed' },
  { label: 'Issues Found', value: '3', unit: ' critical', color: '#dc2626', bg: '#fef2f2' },
  { label: 'Passed Checks', value: '6', unit: ' of 10', color: '#059669', bg: '#f0fdf4' },
  { label: 'Est. Traffic Gap', value: '~840', unit: '/mo', color: '#7c3aed', bg: '#f5f3ff' },
];

# SerpEyes: AEO/GEO Repositioning + Case Studies Design

Date: 2026-08-05

## Goal

Reposition SerpEyes from "full-service digital growth agency" (all five services
weighted equally) to "AEO/GEO specialist, with web development, app development
and digital marketing as supporting services that exist to make AI visibility
possible." AEO and GEO are treated as one combined concept sitewide (not
explained as two separate technical disciplines) since most buyers care about
the outcome ("show up when people ask AI about my business"), not the acronym
distinction.

Two work streams:
- **Part A**: Positioning, how the site talks to human visitors.
- **Part B**: Technical AI-visibility, making serpeyes.com itself citable by
  AI answer engines, practicing what the agency sells.
- **Part C**: Real case studies (K2L Aircon, Truleum Loft Specialist, United
  World Sports Management) as proof.

Site-wide constraints that apply to every new/changed piece of copy:
- No em dashes (—) or en dashes (–) anywhere, including inside code strings
  (email templates, UI text, comments), per the existing standing rule.
- Meta titles: 50-55 characters.
- Meta descriptions: 140-155 characters.

## Part A: Positioning (copy only, no URL changes, no page deletions)

- **Nav order**: AEO moves to immediately after the logo, first item. New
  order: AEO, Services, Web Development, App Development, Pricing, About,
  Blog, Case Studies (in footer, see Part C).
- **Homepage hero** (`src/content/config.js` `HERO`): full rewrite. Badge
  leads with AEO/GEO instead of listing all five services equally. Headline
  centers on being found in AI answers. Subhead explicitly names web/app/
  marketing as the supporting work.
- **"Why SerpEyes" section** (`DIFF_SECTION`, `DIFF_CARDS`): lead card is
  explicitly about AEO/GEO expertise. Other 5 cards rewritten to connect back
  to that goal instead of standing alone as generic differentiators.
- **"Our Services" grid** (`FEATURES_SECTION`, `FEATURES`): reordered so
  AEO/GEO is first, other services get one-line connective copy tying them to
  the AEO goal ("the technical foundation your AEO strategy needs," etc).
- **Web Development / App Development pages**: each gets a short added intro
  paragraph explicitly framing that service as supporting AI visibility.
- **About page**: mission/vision copy lightly rewritten around the same
  narrative.
- **Pricing page**: hero copy tightened to mention GEO explicitly. Retainer
  plan names/pricing structure unchanged (already SEO+AEO focused).
- **Footer tagline**: updated to match new positioning.

No pages merge, no URLs change, all reversible copy edits.

## Part A2: Geo pages (new)

Rationale (from discussion): Singapore has full proof (address, phone,
multiple case studies). UK has real proof now (Truleum case study, registered
office at 71-75 Shelton St, London WC2H 9JQ, phone landing within days). USA
has only a phone number, no address, no client yet, actively prospecting, so
no dedicated USA page yet, a thin page with no proof would hurt credibility
more than help. Revisit USA once a first client/case study exists.

- New pages: `src/pages/aeo/singapore.astro` and `src/pages/aeo/uk.astro`.
  Not added as top-level nav items (keeps nav clean per the "light touch"
  decision), linked from the main `/aeo` page and the footer instead.
- Each page: localized H1 ("AEO and GEO Services for Singapore Businesses" /
  "...UK Businesses"), the real case study for that market linked in
  (Truleum for UK, K2L/others for Singapore), local contact block (SG:
  existing address+phone; UK: Shelton St address now, phone added once live,
  show without phone until then), `Service` schema with `areaServed` set
  correctly per page.

## Part B: Technical AI-visibility work

- **`public/robots.txt`**: explicitly allow GPTBot, ChatGPT-User,
  PerplexityBot, ClaudeBot, Google-Extended, CCBot, Applebot-Extended,
  Amazonbot by name, in addition to the existing wildcard allow. Explicit
  naming is both a real signal and a hedge against future default-deny
  changes by any of these crawlers.
- **`public/llms.txt`** (new): plain-text/markdown summary of who SerpEyes
  is, what it does, and links to key pages, following the emerging llms.txt
  convention that LLMs are increasingly checking directly.
- **JSON-LD schema**:
  - `Organization` schema added sitewide via `BaseLayout.astro` (currently
    missing entirely).
  - `Service` schema on `/aeo`, `/aeo/singapore`, `/aeo/uk`.
  - `FAQPage` schema added to `/aeo` (page already has relevant content,
    needs the schema wrapper plus a few more real Q&A pairs).
- **Content rewrite for citability**: every key page (home, `/aeo`,
  `/services`, `/web-development`, `/app-development`, `/about`, the two new
  geo pages) gets a short, self-contained 1-2 sentence "answer block" right
  under the H1, phrased the way an LLM would quote it back verbatim. This is
  the single highest-leverage AEO tactic: generative engines overwhelmingly
  cite short, quotable, self-contained statements, not marketing paragraphs.

## Part C: Case studies

All three businesses below had their websites **built by SerpEyes from
scratch**, then optimized for SEO/AEO. This is a complete story (build,
optimize, get cited) that directly supports the Part A positioning
narrative, not just an SEO result in isolation.

- **`src/pages/case-studies/index.astro`** (new): fixes the existing dead
  footer link (`FOOTER_RESOURCES` already has "Case Studies" pointing to
  `#`). Lists all three case studies with a summary card each, room to add
  more later (Scanstar, Gotrans, etc. are existing SG clients not yet
  covered).
- **`src/pages/case-studies/k2l-aircon.astro`** (new):
  - Business: K2L Aircon Singapore, full-service air conditioning:
    reconditioned/used units from S$700 installed (save up to 50% vs
    new), new installation from S$1,350, general servicing from $50,
    repair from $40, chemical overhaul from $120, gas top-up from $80.
    10+ years experience, 500+ satisfied clients claimed, 24/7 support,
    certified technicians, same-day service if contacted before noon,
    workmanship warranty with free re-fix if the same issue recurs.
    Services all major brands (Daikin, Mitsubishi, Panasonic, LG,
    Samsung and others), island-wide coverage across Singapore, HDB,
    condo, office and commercial. No specific named customer
    testimonials found publicly on-site or via search, don't invent one.
  - Real proof: ranks in ChatGPT for "best aircon company to buy second
    hand ac in singapore" (screenshot provided by user), ranks Google
    page 1 for "buy used aircon in singapore" (per user).
  - Real Search Console data (last 6 months): 148 clicks, 13.2k
    impressions, average position 4.4, 5.2% CTR.
  - Built by SerpEyes from scratch, then optimized.
- **`src/pages/case-studies/truleum-lofts.astro`** (new):
  - Business: Truleum Loft Specialist, loft conversions and home
    extensions across Cambridgeshire (Cambridge, Ely, Huntingdon,
    Peterborough, etc), guide prices from £18,000, price-match promise,
    dedicated project manager.
  - Real proof: ranks Google page 1 for "best loft conversion company in
    Cambridge UK" (per user).
  - Real Search Console data (last 6 months): 173 clicks, 14.9k
    impressions, average position 4.7, 5.6% CTR.
  - Built by SerpEyes from scratch, then optimized.
  - **Additional section**: custom "Invoicing Studio" app built for
    Truleum from scratch, letting them create and charge invoices to
    their own customers directly. This is real proof of the "app
    development as a supporting service" narrative from Part A, not a
    generic feature list.
  - K2L's case study is confirmed SEO/AEO only, no custom app section.
- **`src/pages/case-studies/united-world-sports-management.astro`** (new):
  - Business: United World Sports Management, cricket coaching academy
    in Singapore, plus a cricket equipment ecommerce store (bats, pads,
    gloves, helmets from Kookaburra, GM, DSC, SG and others). Also runs
    international cricket tours and holiday camps. Established 2016,
    official LMS (Last Man Stands) franchise partner, AB de Villiers
    named as LMS Global Ambassador connection.
  - SerpEyes built both the marketing site and the ecommerce store.
  - Real proof: appears in ChatGPT results for "best cricket coaching
    academy in singapore" (listed 5th of 5 with a "best for: all-round
    cricket ecosystem" callout, screenshot provided by user, present a
    genuine inclusion, not overstate as a #1 ranking). Ranks Google top 3
    for cricket equipment Singapore keywords (per user, not independently
    verified beyond the user's statement).
  - Real Search Console data (last 6 months): 714 clicks, 17.8k
    impressions, average position 3.2, 4% CTR, the strongest raw traffic
    number of the three case studies.
  - Presented under the client business name "United World Sports
    Management" per the user's explicit instruction, no ownership
    disclosure line, this was raised as a consideration (same legal
    entity name, UWSM Pte Ltd, that appeared as SerpEyes' own registered
    operating company earlier in this project) and the user chose to
    proceed without disclosure.
  - No individual staff/owner names mentioned anywhere in this case
    study (explicit user instruction), business-level facts only, e.g.
    credentials like "ECB Level 1 certified coaching" can be mentioned
    without attaching them to a named person. Clarified during
    implementation: this targets UWSM's own private staff/owner (e.g.
    do not name the founder), it does NOT extend to AB de Villiers, a
    public LMS Global Ambassador brand partnership fact, which is a
    legitimate credibility point and stays on the page.
- **Data presentation**:
  - Search Console numbers (clicks, impressions, position, CTR) are
    redrawn as native styled stat tiles and a simple trend chart matching
    the site's own design system, not embedded screenshots of the Google
    UI, keeps the pages visually cohesive ("beautiful layout" per the
    user's request). Use the `dataviz` skill's guidance for chart/stat
    styling when implementing.
  - AI-citation proof (the ChatGPT screenshots) are different: these are
    embedded as actual images (can't be meaningfully redrawn as a stat),
    presented inside a clean macOS-style browser/app window mockup frame
    (rounded corners, traffic-light dots, a URL/title bar) rather than a
    raw cropped screenshot, per the user's request for a more polished,
    professional look.
- **Client visuals**: real logos provided and saved at
  `public/case-studies/k2l-logo.png`, `public/case-studies/truleum-logo.png`,
  and `public/case-studies/uwsm-logo.webp`. Use these on the respective case
  study pages and index cards.
- **Footer**: `FOOTER_RESOURCES`'s "Case Studies" link updated from `#` to
  `/case-studies`.

## Out of scope for this pass

- USA geo landing page (revisit once a US client/case study exists).
- Scanstar and Gotrans case studies (mentioned as existing SG clients but no
  data was gathered for them in this session, can be added later using the
  same template established here).
- Any change to actual pricing/plan structure on `/pricing`, copy-only.

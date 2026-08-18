# Blog Content Guide

Reference for creating new blog posts on this site. Read this before writing next week's
post so the pattern stays consistent without re-deriving it from scratch.

There is no CMS or markdown pipeline. Every post is hand-added in two files, and the full
body copy lives directly in JSX inside `src/pages/blog/[slug].astro`.

## 1. Content standards

- **No em dashes (—) or en dashes (–), anywhere.** Use commas or periods instead. Check
  with `grep -c '—\|–' src/pages/blog/[slug].astro` after writing, should return `0` for
  the new section.
- **Write for a general reader, not an SEO specialist.** Short sentences, plain words,
  concrete examples. Assume the reader has heard of ChatGPT but not "SERP" or "schema
  markup" without a quick explanation the first time a term is used.
- **Go deep enough to be genuinely useful, not just long.** A post that's technically
  substantial but padded with filler is worse than a tight one. Cover the topic properly:
  multiple sections, real examples, a clear answer to "why does this matter to me."
  Previous posts run roughly 1,200-2,000 words across 5-9 sections. Don't pad to hit a
  number, and don't stop short just because the core point is made in 400 words.
- **Vary the topic and angle week to week.** Don't reuse the same framing, structure, or
  opening hook as the previous post. If last week was a "term comparison" post
  (AEO vs AI SEO vs GEO), next week could be a how-to, a checklist, a myth-bust, a
  behind-the-scenes look, etc.
- **Every post ends with a soft CTA** pointing at `/request-demo` or `/pricing`, styled
  consistently with existing posts (see any existing `isXPost` branch's final section).
- Brand name is always **"SerpEyes"** (capital S, capital E) in body copy.
- New post's meta title: 50-55 characters. Meta description: 140-155 characters. Verify
  character count for real, don't estimate: `printf '%s' "your description here" | wc -c`.

## 2. Images: hard rule

**Never web-search or pull stock images (Unsplash, etc.) for blog posts.** This was tried
once and explicitly rejected. Only use image files the user provides directly.

If a post is requested and no image has been supplied yet, ask for one (or several, if the
post calls for multiple inline images) rather than sourcing a placeholder.

Once you have a source file:

1. **Rename it SEO-friendly**: lowercase, kebab-case, descriptive of what's in the image,
   not the original filename. Example: `aeo-ai-seo-geo-human-ai-collaboration.webp`, not
   `IMG_4021.png`.
2. **Copy it into `public/blog/`**.
3. **Use it in two places**, both required:
   - As the **listing thumbnail**: set `featuredImage: '/blog/your-file.webp'` on the post's
     entry in `BLOG_POSTS` (see below). The blog index card renders it at a fixed 180px-tall
     box with `object-fit: contain` so the full image shows uncropped, not `cover` (which
     crops) and not left unstyled (which floats the image oddly in padding). Don't change
     the 180px box height when adding a post, existing cards must stay visually consistent.
   - **Inline in the article body**: place an `<img>` immediately after the first `<p>` of
     the post's first section:
     ```jsx
     <img src="/blog/your-file.webp" alt="Descriptive alt text" style="width: 100%; height: auto; border-radius: 14px; margin: 0 0 20px; display: block;" />
     ```
     Write real, descriptive `alt` text, not the filename.

## 3. Adding a new post: exact steps

### Step 1: `src/content/config.js`

Add an entry to the `BLOG_POSTS` array:

```js
{
  slug: 'your-post-slug-here',
  title: 'Post Title As Shown On The Site',
  excerpt: 'One or two sentence summary shown on the blog listing card.',
  featuredImage: '/blog/your-seo-friendly-filename.webp',
  date: 'Aug 2026',
  tag: 'AEO', // or whatever category fits, keep consistent with existing tags
},
```

### Step 2: `src/pages/blog/[slug].astro`

Three things to add, following the existing pattern used by `isAeoCheckPost` and
`isAeoVsGeoPost`:

1. **A boolean flag** near the top of the file, alongside the existing ones:
   ```js
   const isYourNewPost = post.slug === 'your-post-slug-here';
   ```

2. **A `tocItems` branch** (table of contents), one entry per section anchor:
   ```js
   : isYourNewPost ? [
       { id: 'section-one-anchor', label: 'Section One Heading' },
       { id: 'section-two-anchor', label: 'Section Two Heading' },
       // ...
     ]
   ```

3. **A JSX content branch**, added to the same ternary chain as the other posts
   (`isLaunchPost ? (...) : isAeoCheckPost ? (...) : isAeoVsGeoPost ? (...) : isYourNewPost ? (...) : (fallback)`).
   Each section is a `<section id="...">` matching a `tocItems` anchor. Copy the structure
   of an existing branch (headings, paragraph styling, any callout boxes) rather than
   inventing new markup, the visual style should feel identical across all posts.

### Step 3: verify before pushing

- `npm run build` succeeds.
- `grep -c '—\|–' "src/pages/blog/[slug].astro"` shows no new em/en dashes introduced.
- Meta title/description character counts checked with `wc -c`, not eyeballed.
- New image file exists in `public/blog/`, referenced correctly in both the config entry
  and the inline `<img>` tag, filename is SEO-friendly.
- Blog listing page (`/blog`) shows the new card with the image fully visible, not cropped.
- New post page renders, table of contents links scroll to the right sections.

## 4. Why it's built this way

Each post is a hardcoded branch rather than markdown-rendered because posts have custom
inline layouts (callout boxes, comparison tables, embedded screenshots) that a generic
markdown renderer would flatten. It's more manual per post, but keeps full control over
each post's presentation. If posts start needing frequent, near-identical structure, that's
a signal to revisit this and build a shared template component instead of continuing to
copy-paste ternary branches, worth flagging if it gets there.

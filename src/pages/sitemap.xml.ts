import type { APIRoute } from 'astro';
import { BLOG_POSTS } from '../content/config.js';

export const GET: APIRoute = ({ site }) => {
  const pages = [
    {
      url: '/',
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date().toISOString(),
    },
    {
      url: '/for-agencies',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      url: '/for-freelancers',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      url: '/seo-services',
      changefreq: 'monthly',
      priority: 0.9,
      lastmod: new Date().toISOString(),
    },
    {
      url: '/request-demo',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      url: '/blog',
      changefreq: 'weekly',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    },
    {
      url: '/privacy',
      changefreq: 'yearly',
      priority: 0.3,
      lastmod: new Date().toISOString(),
    },
    {
      url: '/terms',
      changefreq: 'yearly',
      priority: 0.3,
      lastmod: new Date().toISOString(),
    },
    {
      url: '/seo-glossary',
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    // Add individual blog posts
    ...BLOG_POSTS.map(post => ({
      url: `/blog/${post.slug}`,
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    })),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `
  <url>
    <loc>${site}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
};

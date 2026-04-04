import { defineConfig, passthroughImageService } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://serpeyes.com',
  output: 'hybrid',
  adapter: cloudflare(),
  image: {
    service: passthroughImageService(),
  },
  integrations: [
    sitemap({
      customPages: [
        'https://serpeyes.com/',
        'https://serpeyes.com/for-agencies',
        'https://serpeyes.com/for-freelancers',
        'https://serpeyes.com/seo-services',
        'https://serpeyes.com/request-demo',
        'https://serpeyes.com/blog',
      ],
    }),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});

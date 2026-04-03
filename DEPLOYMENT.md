# Cloudflare Pages Deployment Guide

This guide walks you through deploying the SerpEyes Astro website to Cloudflare Pages.

## Prerequisites

- GitHub account
- Cloudflare account (free tier works)
- Git installed locally
- Node.js 18+ installed

## Step 1: Push to GitHub

### Initialize Git Repository (if not already done)

```bash
cd SerpEyes-astro
git init
git add .
git commit -m "Initial commit - SerpEyes Astro website"
```

### Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon in the top right → **New repository**
3. Repository name: `serpeyes-website` (or your preferred name)
4. Description: "SerpEyes marketing website - Singapore SEO platform"
5. Choose **Public** or **Private**
6. Do NOT initialize with README (we already have one)
7. Click **Create repository**

### Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/serpeyes-website.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 2: Connect to Cloudflare Pages

### Sign in to Cloudflare

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Sign in or create a free account
3. Navigate to **Pages** in the left sidebar

### Create New Project

1. Click **Create a project**
2. Click **Connect to Git**
3. Choose **GitHub** as your Git provider
4. Authorize Cloudflare to access your GitHub account
5. Select the `serpeyes-website` repository
6. Click **Begin setup**

## Step 3: Configure Build Settings

On the build configuration page, enter the following:

### Project Settings
- **Project name**: `SerpEyes` (or your preferred subdomain)
- **Production branch**: `main`

### Build Settings
- **Framework preset**: Select **Astro**
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (leave as default)

### Environment Variables
Set these in **Cloudflare Pages → Settings → Environment variables**:

- `RESEND_API_KEY` = Your Resend API key
- `CONTACT_TO_EMAIL` = Inbox that should receive form leads (example: `hello@serpeyes.com`)
- `CONTACT_FROM_EMAIL` = Verified sender in Resend (example: `SerpEyes Contact <hello@serpeyes.com>`)

Notes:
- The contact form posts to `/api/contact` (server endpoint).
- This project now uses Astro `output: hybrid` with Cloudflare adapter so the API route runs on Cloudflare Pages Functions.
- If `CONTACT_FROM_EMAIL` is not set, the fallback sender is `onboarding@resend.dev`.

### Advanced Settings (Optional)
- **Node version**: 18 or higher (Cloudflare usually auto-detects)

Click **Save and Deploy**

## Step 4: Wait for Build

Cloudflare will now:
1. Clone your repository
2. Install dependencies (`npm install`)
3. Run the build command (`npm run build`)
4. Deploy the `dist/` folder to their global CDN

This typically takes 2-5 minutes.

### Monitor Build Progress
- You'll see a live build log
- Green checkmarks indicate successful steps
- If build fails, check the error logs

## Step 5: Verify Deployment

Once the build completes:

1. You'll see a success message with your deployment URL
2. Default URL format: `https://SerpEyes.pages.dev`
3. Click **Visit site** to view your live website

### Test All Pages
- Homepage: `/`
- For Agencies: `/for-agencies`
- For Freelancers: `/for-freelancers`
- SEO Services: `/seo-services`
- Request Demo: `/request-demo`
- Blog: `/blog`

### Test Interactive Components
- Hero Scanner animation should auto-play
- Demo form validation should work
- Early access form should submit
- Mobile menu should toggle

## Step 6: Add Custom Domain

### Purchase Domain (if needed)
- Recommended: `serpeyes.com` (primary domain)
- Purchase from any domain registrar (Cloudflare, Namecheap, GoDaddy, etc.)

### Add Domain to Cloudflare Pages

1. In your Cloudflare Pages project, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain: `serpeyes.com`
4. Click **Continue**

### Configure DNS

Cloudflare will provide DNS records to add:

#### If domain is already on Cloudflare:
- Records will be added automatically
- Just click **Activate domain**

#### If domain is elsewhere:
1. Copy the CNAME record provided
2. Go to your domain registrar's DNS settings
3. Add a CNAME record:
   - **Name**: `@` (or leave blank for root domain)
   - **Value**: `SerpEyes.pages.dev` (or the value Cloudflare provides)
   - **TTL**: Auto or 3600

4. For www subdomain, add another CNAME:
   - **Name**: `www`
   - **Value**: `SerpEyes.pages.dev`
   - **TTL**: Auto or 3600

### Wait for DNS Propagation
- Can take 5 minutes to 48 hours
- Usually completes within 1-2 hours
- Check status in Cloudflare Pages dashboard

## Step 7: Set Up WWW Redirect

The `_redirects` file in `public/` already handles www → apex redirect:

```
https://www.serpeyes.com/* https://serpeyes.com/:splat 301!
```

This ensures `www.serpeyes.com` redirects to `serpeyes.com`.

### Verify Redirect
1. Visit `https://www.serpeyes.com`
2. Should automatically redirect to `https://serpeyes.com`
3. Check browser address bar to confirm

## Step 8: Enable HTTPS

Cloudflare automatically provisions SSL certificates:

1. Go to **SSL/TLS** in Cloudflare dashboard
2. Ensure SSL/TLS encryption mode is **Full** or **Full (strict)**
3. Cloudflare will auto-generate a free SSL certificate
4. Your site will be accessible via `https://`

### Force HTTPS
Add to `_redirects` if needed (already configured):
```
http://serpeyes.com/* https://serpeyes.com/:splat 301!
```

## Step 9: Configure Analytics (Optional)

### Cloudflare Web Analytics (Free)
1. Go to **Web Analytics** in Cloudflare dashboard
2. Click **Add a site**
3. Enter `serpeyes.com`
4. Copy the analytics script
5. Add to `BaseLayout.astro` before `</head>`:

```html
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "YOUR_TOKEN"}'></script>
```

## Step 10: Set Up Continuous Deployment

Continuous deployment is automatically enabled:

### How It Works
1. Make changes to your code locally
2. Commit changes: `git commit -am "Update content"`
3. Push to GitHub: `git push`
4. Cloudflare automatically detects the push
5. Triggers a new build and deployment
6. Live site updates in 2-5 minutes

### Preview Deployments
- Every push to a non-production branch creates a preview deployment
- Preview URL format: `https://abc123.SerpEyes.pages.dev`
- Perfect for testing before merging to `main`

## Updating Content

### Quick Content Updates
1. Edit `src/content/config.js` locally
2. Commit and push:
   ```bash
   git add src/content/config.js
   git commit -m "Update hero section content"
   git push
   ```
3. Wait for automatic deployment

### Rollback to Previous Version
1. Go to Cloudflare Pages dashboard
2. Click **Deployments** tab
3. Find the previous successful deployment
4. Click **...** → **Rollback to this deployment**

## Performance Optimization

### Already Configured
- ✅ Static site generation (fast)
- ✅ Cloudflare global CDN
- ✅ Automatic asset optimization
- ✅ Brotli compression
- ✅ HTTP/2 and HTTP/3
- ✅ Security headers in `_headers`

### Additional Optimizations
- Images: Use WebP format when possible
- Fonts: Already using Google Fonts CDN
- Scripts: React components use `client:load` (only load when needed)

## Monitoring

### Check Deployment Status
- Cloudflare Pages dashboard shows all deployments
- Green = successful
- Red = failed (check build logs)

### Build Logs
- Click any deployment to view full build log
- Useful for debugging build failures

### Analytics
- Cloudflare Web Analytics (free)
- Google Analytics (add to BaseLayout if needed)

## Troubleshooting

### Build Fails
**Error**: `npm install` fails
- **Solution**: Check `package.json` for correct dependencies
- Ensure Node version is 18+

**Error**: `npm run build` fails
- **Solution**: Run `npm run build` locally first
- Fix any TypeScript/import errors
- Check all file paths are correct

### Site Not Loading
**Issue**: 404 errors
- **Solution**: Check build output directory is `dist`
- Verify routes match file names in `src/pages/`

**Issue**: Blank page
- **Solution**: Check browser console for errors
- Verify React components have `client:load` directive

### Custom Domain Not Working
**Issue**: DNS not resolving
- **Solution**: Wait for DNS propagation (up to 48 hours)
- Use [dnschecker.org](https://dnschecker.org) to verify

**Issue**: SSL certificate error
- **Solution**: Wait for Cloudflare to provision certificate (5-10 minutes)
- Check SSL/TLS mode is set to **Full**

### Redirect Not Working
**Issue**: www not redirecting
- **Solution**: Verify `_redirects` file is in `public/` folder
- Check Cloudflare Pages dashboard → Functions → Redirects

## Support

### Cloudflare Support
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare Community](https://community.cloudflare.com/)

### Astro Support
- [Astro Documentation](https://docs.astro.build/)
- [Astro Discord](https://astro.build/chat)

### SerpEyes Team
- Email: hello@serpeyes.com
- For website issues or content updates

## Security Checklist

- ✅ HTTPS enabled
- ✅ Security headers configured (`_headers`)
- ✅ No sensitive data in repository
- ✅ Environment variables (if needed) set in Cloudflare dashboard
- ✅ Cloudflare DDoS protection active
- ✅ Bot protection enabled

## Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Hero Scanner animation works
- [ ] Forms submit successfully
- [ ] Mobile menu toggles
- [ ] Custom domain resolves
- [ ] HTTPS certificate active
- [ ] www redirects to apex domain
- [ ] Analytics tracking (if configured)
- [ ] Social sharing (OG tags) works
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`

## Next Steps

1. **Submit to Google Search Console**
   - Add property for `serpeyes.com`
   - Submit sitemap: `https://serpeyes.com/sitemap.xml`

2. **Set Up Email**
   - Configure `hello@serpeyes.com` email
   - Update contact forms to send to real email

3. **Monitor Performance**
   - Set up Cloudflare Web Analytics
   - Monitor Core Web Vitals
   - Track conversion rates

4. **Content Updates**
   - Regularly update blog posts
   - Add new testimonials
   - Update pricing as needed

---

**Congratulations!** Your SerpEyes website is now live on Cloudflare Pages. 🎉

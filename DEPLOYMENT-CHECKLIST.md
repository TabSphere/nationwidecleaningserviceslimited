# Pre-Launch Checklist for Nationwide Cleaning Services Website

## Essential Configuration (MUST DO)

### 1. Form Setup
- [ ] Create Formspree account at https://formspree.io
- [ ] Create new form in Formspree
- [ ] Copy form endpoint URL
- [ ] Update `src/pages/get-a-quote.astro` line 171 with your endpoint
- [ ] Test form submission

### 2. Domain Configuration
- [ ] Update `astro.config.mjs` - change site URL to your actual domain
- [ ] Update `public/sitemap.xml` - replace all URLs with your domain
- [ ] Update canonical URLs in all pages

### 3. Content Review
- [ ] Review all testimonials on homepage
- [ ] Verify service descriptions are accurate
- [ ] Check service areas list matches your coverage
- [ ] Review pricing if mentioned anywhere
- [ ] Verify business hours are correct

## Before Building

### 1. Install Dependencies
```bash
npm install
```

### 2. Test Locally
```bash
npm run dev
```
- [ ] Visit http://localhost:4321
- [ ] Test all pages
- [ ] Check mobile responsiveness
- [ ] Test all links
- [ ] Test form (will fail without endpoint)

### 3. Build for Production
```bash
npm run build
```
- [ ] Check for build errors
- [ ] Review console for warnings
- [ ] Verify dist folder is created

### 4. Preview Production Build
```bash
npm run preview
```
- [ ] Test production build locally
- [ ] Verify everything works as expected

## Deployment to GoDaddy

### Option A: File Manager Upload

1. [ ] Log into GoDaddy cPanel
2. [ ] Navigate to File Manager
3. [ ] Go to `public_html` directory
4. [ ] Delete any existing files (backup first!)
5. [ ] Upload ALL contents from `dist/` folder
6. [ ] Ensure folder structure is maintained
7. [ ] Check file permissions (755 for folders, 644 for files)

### Option B: FTP Upload

1. [ ] Open FTP client (FileZilla, Cyberduck, etc.)
2. [ ] Connect using GoDaddy FTP credentials
3. [ ] Navigate to `public_html`
4. [ ] Delete any existing files (backup first!)
5. [ ] Upload ALL contents from `dist/` folder
6. [ ] Wait for upload to complete

## Post-Deployment Testing

### Functionality Tests
- [ ] Visit your live domain
- [ ] Click every navigation link
- [ ] Test mobile menu
- [ ] Click all CTA buttons
- [ ] Test phone number links (click-to-call)
- [ ] Test email links (click-to-email)
- [ ] Submit test quote form
- [ ] Check form confirmation message
- [ ] Verify you receive form submissions

### SEO Tests
- [ ] Check meta titles in browser tabs
- [ ] View page source - verify meta descriptions
- [ ] Test sitemap.xml loads: yourdomain.com/sitemap.xml
- [ ] Test robots.txt loads: yourdomain.com/robots.txt
- [ ] Verify logo image loads
- [ ] Check Google Maps embed on contact page

### Performance Tests
- [ ] Run Google PageSpeed Insights
- [ ] Check mobile performance score
- [ ] Check desktop performance score
- [ ] Test loading speed on mobile network

### Browser Testing
- [ ] Chrome desktop
- [ ] Chrome mobile
- [ ] Safari mobile (iPhone)
- [ ] Firefox desktop
- [ ] Edge desktop

## Optional Enhancements

### Analytics
- [ ] Set up Google Analytics 4
- [ ] Add tracking code to BaseLayout.astro
- [ ] Set up Google Search Console
- [ ] Submit sitemap to Search Console

### Business Listings
- [ ] Update/create Google Business Profile
- [ ] Add website URL to business listing
- [ ] Update Bing Places
- [ ] Update other directory listings

### Social Media
- [ ] Add social media links to footer (if applicable)
- [ ] Test Open Graph tags (share on Facebook)
- [ ] Test Twitter Card tags (share on Twitter/X)

### Monitoring
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
- [ ] Configure email alerts for downtime
- [ ] Set up form submission notifications

## Regular Maintenance

### Monthly
- [ ] Check form submissions are working
- [ ] Review and respond to quote requests
- [ ] Check website loads correctly
- [ ] Verify all links work

### Quarterly
- [ ] Update testimonials if new ones received
- [ ] Review and update service offerings
- [ ] Check for broken links
- [ ] Review analytics data
- [ ] Update service areas if coverage changes

### Annually
- [ ] Review privacy policy
- [ ] Update copyright year in footer
- [ ] Refresh images if needed
- [ ] Consider design updates

## Emergency Contacts

If something goes wrong:
- **Developer Support**: [Your contact info]
- **GoDaddy Support**: 480-505-8877
- **Formspree Support**: support@formspree.io

## Backup

Before major changes:
- [ ] Download current site files via FTP
- [ ] Store in safe location with date stamp
- [ ] Keep at least 2 recent backups

---

## Quick Reference

**Phone**: 07836 671796  
**Email**: hello@nationwidecleaningserviceslimited.co.uk  
**Address**: Flat 2/1, 13 Lower Bridge Street, Stirling FK8 1AA

**Build Command**: `npm run build`  
**Build Output**: `dist/` folder  
**Upload Target**: GoDaddy `public_html/` directory

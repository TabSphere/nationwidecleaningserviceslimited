# Nationwide Cleaning Services Limited - Website (UPGRADED)

Professional website for Nationwide Cleaning Services Limited, built with Astro and Tailwind CSS.

## ✨ New Features (2026 Upgrade)

### 1. Enhanced Logo Design
- Logo badge with subtle background and border
- Hover glow effects
- Larger, more prominent display
- Consistent branding across header and footer

### 2. Stirling Background Slideshow  
- Rotating background images on ALL page heroes
- 6 Stirling-themed photos (customizable)
- Smooth crossfade transitions
- Subtle Ken Burns zoom effect
- Respects `prefers-reduced-motion`

### 3. Premium Card Animations
- Enhanced hover effects with lift and glow
- Icon animations on hover
- Scroll-triggered fade-in animations
- Staggered appearance timing
- Fully accessible with focus states

### 4. Join Our Team Page
- New `/join-our-team` page
- CV upload functionality
- Job application form
- Why work with us section
- Current opportunities listing

### 5. Smooth Scrolling & Performance
- Smooth scroll behavior for internal links
- Optimized animations
- Accessibility-first approach
- Lighthouse-friendly performance

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🖼️ CRITICAL: Add Stirling Background Images

**Before deploying, you MUST add 6 Stirling photos!**

1. **Create the directory** (if not exists):
   ```bash
   mkdir -p public/images/stirling
   ```

2. **Add 6 images**:
   - `stirling-1.jpg` - Stirling Castle view
   - `stirling-2.jpg` - Wallace Monument
   - `stirling-3.jpg` - Old Town Stirling
   - `stirling-4.jpg` - River Forth
   - `stirling-5.jpg` - Stirling Bridge
   - `stirling-6.jpg` - Stirling cityscape

3. **Image requirements**:
   - Format: JPG or WebP
   - Resolution: 1920x1080 minimum
   - File size: Under 500KB each
   - Compress using [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app)

4. **Where to find images**:
   - [Unsplash](https://unsplash.com/s/photos/stirling-scotland) (free)
   - [Pexels](https://www.pexels.com/search/stirling/) (free)
   - Visit Scotland official photos
   - Your own photography

5. **Customizing slideshow**:
   
   Edit `/src/components/HeroBackground.astro`:
   ```javascript
   const HERO_IMAGES = [
     '/images/stirling/stirling-1.jpg',  // Change filenames here
     '/images/stirling/stirling-2.jpg',
     // ...
   ];
   
   const SLIDE_DURATION = 6000; // Change duration (milliseconds)
   ```

**Without images**: The slideshow will show blank/missing image icons. The site will still work but won't look professional.

## 🔧 Form Configuration

### Quote Request Form

1. Create free [Formspree](https://formspree.io) account
2. Create new form
3. Copy endpoint URL
4. Edit `/src/pages/get-a-quote.astro` line 171:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_ID_HERE', {
   ```

### Join Our Team Form (CV Upload)

**Option A: Formspree Gold (Recommended)** - $10/month

1. Upgrade to [Formspree Gold](https://formspree.io/pricing)
2. Create form with file uploads enabled
3. Edit `/src/pages/join-our-team.astro` line 275:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_ID_HERE', {
   ```

**Option B: Netlify Forms (Free)**

If hosting on Netlify:
1. Add to form tag: `netlify` attribute
2. Add hidden input: `<input type="hidden" name="form-name" value="careers" />`
3. Remove fetch code
4. Submissions appear in Netlify dashboard

**Option C: Email Direct (Simplest)**

Remove form, add email link:
```html
<p>Email your CV to: 
  <a href="mailto:hello@nationwidecleaningserviceslimited.co.uk">
    hello@nationwidecleaningserviceslimited.co.uk
  </a>
</p>
```

## 📦 Deployment

### GoDaddy cPanel (Recommended)

```bash
# 1. Build
npm run build

# 2. Upload to GoDaddy File Manager:
#    - All files from dist/ folder
#    - images/ folder with Stirling photos
#    - Upload to public_html/

# 3. Verify at your domain
```

**Critical**: Make sure to upload the `/images/stirling/` folder!

### Netlify / Vercel

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. **Add Stirling images to repo before deploying!**

## ✏️ Quick Customization

### Change Slideshow Speed
`/src/components/HeroBackground.astro`:
```javascript
const SLIDE_DURATION = 4000; // 4 seconds instead of 6
```

### Change Colors
`tailwind.config.mjs`:
```javascript
colors: {
  navy: '#0F1B3D',
  green: '#2FA44F',
  yellow: '#D6C43A',
}
```

### Disable Animations (if needed)
Add to `/src/layouts/BaseLayout.astro`:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

## 🐛 Troubleshooting

### Background images not showing
- ✅ Check `/public/images/stirling/` has 6 images
- ✅ Verify filenames match in `HeroBackground.astro`
- ✅ Check browser console for 404 errors
- ✅ Upload images to server (they're in `/public`)

### Forms not working
- ✅ Replace `YOUR_FORMSPREE_ENDPOINT_HERE`
- ✅ Endpoint should start with `https://formspree.io/f/`
- ✅ Check browser console for errors

### Build errors
```bash
# Delete and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📊 What's Included

### Pages (7 total)
1. ✅ Home - Enhanced with slideshow & animations
2. ✅ About - Enhanced with slideshow & animations  
3. ✅ Services - Enhanced with slideshow
4. ✅ Get a Quote - Enhanced with slideshow
5. ✅ Contact - Enhanced with slideshow
6. ✅ Privacy - Enhanced with slideshow
7. ✨ **NEW**: Join Our Team - Career page with CV upload

### Features
- ✅ Enhanced logo badge design
- ✅ Rotating background slideshow (6 images)
- ✅ Premium card animations
- ✅ Scroll-triggered effects
- ✅ Smooth scrolling
- ✅ Mobile responsive
- ✅ SEO optimized
- ✅ Accessibility compliant
- ✅ Fast performance

## 📞 Support

**Business Contact**:
- Phone: 07836 671796
- Email: hello@nationwidecleaningserviceslimited.co.uk

**Technical Support**:
- Check this README
- Review `/DEPLOYMENT-CHECKLIST.md`
- Review `/QUICKSTART.md`

---

## 🎯 Pre-Launch Checklist

- [ ] Add 6 Stirling background images to `/public/images/stirling/`
- [ ] Set up Quote form Formspree endpoint
- [ ] Set up Careers form endpoint (or choose alternative)
- [ ] Update domain in `astro.config.mjs`
- [ ] Update URLs in `public/sitemap.xml`
- [ ] Test all pages locally (`npm run dev`)
- [ ] Build for production (`npm run build`)
- [ ] Upload `dist/` folder to hosting
- [ ] Upload `images/` folder to hosting
- [ ] Verify slideshow works on live site
- [ ] Test forms on live site
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse audit

---

**Upgraded February 2026** ✨  
Built with ❤️ using Astro and Tailwind CSS

# Quick Start Guide - Nationwide Cleaning Services Website

## 🚀 Get Running in 5 Minutes

### 1. Install & Run Locally

```bash
# Navigate to project
cd ncs-website

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open browser to `http://localhost:4321`

### 2. Make Your First Change

Edit `src/pages/index.astro` and save. The page will auto-reload!

### 3. Build for Production

```bash
npm run build
```

This creates a `dist/` folder ready for deployment.

## 📤 Deploy to GoDaddy (5 Steps)

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Log into GoDaddy cPanel**

3. **Open File Manager** → Navigate to `public_html`

4. **Upload all files** from your `dist/` folder

5. **Done!** Visit your domain to see it live.

## ⚙️ Essential Setup (DO THIS FIRST)

### Set Up Form Submissions

1. Go to https://formspree.io and create free account
2. Create a new form
3. Copy your form endpoint (looks like `https://formspree.io/f/abcd1234`)
4. Edit `src/pages/get-a-quote.astro`
5. Find line 171 and replace `YOUR_FORMSPREE_ENDPOINT_HERE` with your endpoint
6. Rebuild: `npm run build`

### Update Domain URLs

1. Edit `astro.config.mjs` - update `site:` with your domain
2. Edit `public/sitemap.xml` - replace all URLs with your domain
3. Rebuild: `npm run build`

## 📝 Common Tasks

### Change Contact Information

**File**: `src/layouts/BaseLayout.astro`
- Phone number (multiple places)
- Email address (multiple places)
- Address (footer section)

### Edit Homepage Content

**File**: `src/pages/index.astro`
- Hero headline and subheadline
- Services list
- Testimonials
- Service areas

### Update Services

**File**: `src/pages/services.astro`
- Modify service descriptions
- Update "What's included" lists
- Change "Ideal for" sections

### Change Colors

**File**: `tailwind.config.mjs`
```javascript
colors: {
  navy: '#0F1B3D',    // Change these values
  green: '#2FA44F',   // to update colors
  yellow: '#D6C43A',  // site-wide
}
```

After changes, rebuild: `npm run build`

## 🔍 Testing Checklist

Before deploying, test:
- [ ] All pages load
- [ ] Navigation works
- [ ] Mobile menu works
- [ ] All links work
- [ ] Phone/email links work
- [ ] Form can be submitted
- [ ] Images load
- [ ] Looks good on mobile

## 🐛 Troubleshooting

### "npm: command not found"
Install Node.js from https://nodejs.org (LTS version)

### Build fails
1. Delete `node_modules/` folder
2. Delete `package-lock.json`
3. Run `npm install` again
4. Run `npm run build`

### Form not submitting
1. Check you replaced `YOUR_FORMSPREE_ENDPOINT_HERE`
2. Make sure endpoint starts with `https://formspree.io/f/`
3. Test on Formspree dashboard

### Changes not showing
1. Make sure you rebuilt: `npm run build`
2. Upload the NEW `dist/` folder contents
3. Clear browser cache (Ctrl+Shift+R)

## 📞 Need Help?

**Business Contact**  
Phone: 07836 671796  
Email: hello@nationwidecleaningserviceslimited.co.uk

**Technical Issues**  
Check `README.md` for detailed documentation  
Check `DEPLOYMENT-CHECKLIST.md` for step-by-step deployment guide

## 🎯 Next Steps

1. ✅ Set up form endpoint (Formspree)
2. ✅ Update domain in config files
3. ✅ Build the site (`npm run build`)
4. ✅ Deploy to GoDaddy
5. ✅ Test everything on live site
6. 📊 Set up Google Analytics (optional)
7. 🔍 Submit sitemap to Google Search Console (optional)

That's it! You're ready to go! 🎉

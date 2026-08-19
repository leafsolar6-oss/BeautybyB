# 🚀 Deploying BeautybyB: Complete Guide

## Step 1: Create Your GitHub Repository

1. Go to [github.com](https://github.com) and sign in (or create an account)

2. Click the **+** button in the top right → **New repository**

3. Fill in the details:
   - **Repository name:** `beautybyb`
   - **Description:** `Luxury perfume website built with Next.js`
   - **Visibility:** Public or Private (your choice)
   - **DO NOT** initialize with README, .gitignore, or license

4. Click **Create repository**

## Step 2: Push Your Code to GitHub

Open your terminal and run these commands:

```bash
# Navigate to your project
cd beautybyb

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: BeautybyB luxury perfume website"

# Connect to GitHub
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/beautybyb.git

# Push to GitHub
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Deploy to Vercel (Recommended)

### Why Vercel?
- Built by the creators of Next.js
- Free tier is generous
- Automatic deployments on every git push
- Built-in analytics
- Custom domain support
- SSL certificates automatically

### Deployment Steps:

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click **Sign Up** → **Continue with GitHub**
   - Authorize Vercel to access your GitHub

2. **Import Your Project**
   - Click **Add New Project**
   - Find and select your `beautybyb` repository
   - Vercel will auto-detect it's a Next.js project

3. **Configure & Deploy**
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Click **Deploy**

4. **Wait for Deployment**
   - Takes about 1-2 minutes
   - You'll get a live URL like: `https://beautybyb.vercel.app`

5. **Test Your Site**
   - Visit your Vercel URL
   - Test all pages: Home, Collection, Our Story, Contact
   - Make sure everything looks perfect!

## Step 4: Get Your Custom Domain

### Recommended Domain Registrars:

**Option 1: Namecheap** (Recommended)
- Visit [namecheap.com](https://namecheap.com)
- Search for your domain (e.g., `beautybyb.com`)
- Prices typically $8-15/year
- Free WHOIS privacy

**Option 2: Porkbun** (Budget-friendly)
- Visit [porkbun.com](https://porkbun.com)
- Often cheaper than Namecheap
- Free WHOIS privacy included

**Option 3: Google Domains**
- Visit [domains.google](https://domains.google)
- Clean interface, reliable
- Slightly more expensive

### Domain Name Suggestions:
- `beautybyb.com`
- `beautybybparis.com`
- `beautybybofficial.com`
- `shopbeautybyb.com`
- `beautybybfragrances.com`

## Step 5: Connect Domain to Vercel

1. **In Vercel Dashboard:**
   - Select your project
   - Go to **Settings** → **Domains**
   - Click **Add**
   - Enter your domain (e.g., `beautybyb.com`)

2. **Configure DNS:**
   - Vercel will show you the DNS records to add
   - Copy these records

3. **In Your Domain Registrar:**
   - Go to DNS settings for your domain
   - Add the records Vercel provided:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21
     
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```

4. **Wait for Propagation:**
   - DNS changes take 5 minutes to 48 hours
   - Usually works within 15-30 minutes
   - Vercel will automatically issue SSL certificate

5. **Verify:**
   - Visit your domain
   - Should show your live site with HTTPS!

## 🎉 Alternative: Deploy to Netlify

If you prefer Netlify:

1. Go to [netlify.com](https://netlify.com) and sign up with GitHub

2. Click **Add new site** → **Import an existing project**

3. Select your GitHub repository

4. Configure build settings:
   ```
   Build command: npm run build
   Publish directory: .next
   ```

5. Add environment variable:
   ```
   Key: NEXT_TELEMETRY_DISABLED
   Value: 1
   ```

6. Click **Deploy site**

7. Follow similar domain connection steps as Vercel

## 💰 Cost Breakdown

### Free Tier (Start Here)
- **GitHub:** Free
- **Vercel/Netlify:** Free (includes hosting, SSL, CDN)
- **Total:** $0/year

### With Custom Domain
- **Domain:** ~$10-15/year
- **Hosting:** Free
- **Total:** ~$10-15/year

### Professional Setup (Optional)
- **Domain:** $10-15/year
- **Vercel Pro:** $20/month (advanced analytics, more resources)
- **Total:** ~$250/year

## 📝 Post-Deployment Checklist

- [ ] Test all pages on desktop and mobile
- [ ] Replace placeholder images with your actual product photos
- [ ] Update product names, descriptions, and prices
- [ ] Update contact information (email, address)
- [ ] Test contact form
- [ ] Add real testimonials
- [ ] Set up Google Analytics (optional)
- [ ] Create social media accounts
- [ ] Update footer social links
- [ ] Test newsletter signup
- [ ] Set up custom email (hello@yourdomain.com)

## 🔧 Making Updates

Every time you make changes to your code:

```bash
# Make your changes, then:
git add .
git commit -m "Updated product images"
git push
```

Vercel/Netlify will automatically redeploy your site!

## 🎨 Customizing Your Site

### Change Colors
Edit `src/app/globals.css`:
```css
@theme {
  --color-gold-500: #b08830;  /* Your brand gold */
  --color-deep: #2a1b2d;      /* Your brand dark */
  --color-rose: #c77d8a;      /* Your accent color */
}
```

### Update Products
Edit the product arrays in:
- `src/app/page.tsx` (home page featured products)
- `src/app/shop/page.tsx` (full catalog)

### Change Fonts
In `src/app/globals.css`, update the Google Fonts import:
```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap');
```

## 🆘 Troubleshooting

**Build fails on Vercel/Netlify?**
- Check that all dependencies are in package.json
- Run `npm run build` locally to catch errors

**Images not loading?**
- Make sure images are in `public/images/` folder
- Use relative paths: `/images/perfume.jpg`

**Domain not working?**
- Wait up to 48 hours for DNS propagation
- Check DNS records match exactly what Vercel provided
- Clear browser cache

**Need help?**
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)

## 🚀 Next Steps

1. Deploy your site (follow steps above)
2. Get your custom domain
3. Connect domain to your hosting
4. Customize with your actual products
5. Launch and promote!

---

**Questions?** Check the README.md for more details or reach out to hello@beautybyb.com

# BeautybyB — Luxury Perfume Website

A luxury perfume e-commerce website built with Next.js 15, Tailwind CSS, and a modern glass-morphism design aesthetic.

![BeautybyB](https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&h=630&fit=crop)

## ✨ Features

- **Modern Glass Aesthetic** — Frosted glass effects, soft gradients, and elegant typography
- **Multi-Page Architecture** — Home, Shop/Collection, About, and Contact pages
- **Fully Responsive** — Mobile-first design that looks beautiful on all devices
- **Smooth Animations** — Floating elements, fade-ins, and hover effects
- **Product Catalog** — Filterable fragrance collection with categories
- **Contact Form** — Beautiful glass-morphism contact form
- **Newsletter Signup** — Email subscription in the footer

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/beautybyb.git
cd beautybyb

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Deployment to GitHub & Hosting

### Option 1: Deploy to Vercel (Recommended)

Vercel is the official hosting platform for Next.js and offers the best experience.

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/beautybyb.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com) and sign up/login
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Buy a domain from Namecheap, GoDaddy, or Google Domains
   - In Vercel dashboard → Settings → Domains
   - Add your domain and follow DNS instructions

### Option 2: Deploy to Netlify

1. Push your code to GitHub (see above)

2. Go to [netlify.com](https://netlify.com) and sign up

3. Click "Add new site" → "Import an existing project"

4. Connect your GitHub repository

5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Add environment variable: `NEXT_TELEMETRY_DISABLED=1`

6. Click "Deploy site"

### Option 3: Deploy to GitHub Pages (Static Export)

1. Update `next.config.js`:
   ```js
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   }
   module.exports = nextConfig
   ```

2. Build and deploy:
   ```bash
   npm run build
   # The 'out' folder contains your static site
   ```

3. Push the `out` folder to a `gh-pages` branch:
   ```bash
   git subtree push --prefix out origin gh-pages
   ```

4. Enable GitHub Pages in your repo settings

## 🎨 Customization

### Change Brand Colors

Edit `src/app/globals.css` and modify the color variables:

```css
@theme {
  --color-gold-50: #fdf8f0;
  --color-gold-500: #b08830;
  --color-deep: #2a1b2d;
  /* ... */
}
```

### Update Product Data

Edit the product arrays in:
- `src/app/page.tsx` (featured products)
- `src/app/shop/page.tsx` (full catalog)

### Modify Content

All page content is in:
- `src/app/page.tsx` — Home page
- `src/app/shop/page.tsx` — Shop/Collection
- `src/app/about/page.tsx` — About/Our Story
- `src/app/contact/page.tsx` — Contact page

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Fonts:** Cormorant Garamond (serif), Outfit (sans-serif)
- **Design:** Glass-morphism, gradient effects, smooth animations

## 📁 Project Structure

```
beautybyb/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── shop/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Navbar.tsx
│       └── Footer.tsx
├── public/
│   └── images/
├── package.json
└── README.md
```

## 🌐 Domain & Hosting Recommendations

### Domain Registrars
- **Namecheap** — Affordable, good support
- **Google Domains** — Clean interface, reliable
- **Porkbun** — Cheap, free WHOIS privacy

### Hosting Options
1. **Vercel** — Best for Next.js, free tier, instant deploys
2. **Netlify** — Great alternative, generous free tier
3. **GitHub Pages** — Free but requires static export
4. **Cloudflare Pages** — Fast CDN, free tier

### Recommended Stack
- **Domain:** Namecheap (~$10/year)
- **Hosting:** Vercel (free tier)
- **Analytics:** Vercel Analytics or Google Analytics (free)

## 📝 Next Steps

1. Replace placeholder product images with your actual perfume photos
2. Update product names, descriptions, and prices
3. Add your real contact information
4. Set up a custom domain
5. Configure analytics
6. Add a blog section (optional)
7. Integrate payment processing (Stripe, Shopify, etc.)

## 🤝 Support

For questions or support, contact hello@beautybyb.com

---

Built with ❤️ for luxury fragrance enthusiasts

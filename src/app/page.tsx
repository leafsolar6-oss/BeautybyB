'use client';

import Link from 'next/link';
import { useProducts } from '@/hooks/useProducts';
import { useCart } from '@/context/CartContext';
import BrandSlider from '@/components/BrandSlider';

export default function HomePage() {
  const { products } = useProducts();
  const { addToCart, isInCart } = useCart();

  const bestsellers = products.filter((p) => p.bestseller).slice(0, 12);
  const newArrivals = products.filter((p) => p.newArrival).slice(0, 12);

  return (
    <div>
      {/* ===== TOP ANNOUNCEMENT BAR ===== */}
      <div className="bg-dark text-white text-center py-3">
        <p className="text-sm md:text-base font-medium">
          Free Delivery on Orders Over ₦50,000 | Nationwide Shipping 🇳🇬
        </p>
      </div>

      {/* ===== HERO BANNER ===== */}
      <section className="relative bg-gradient-to-br from-amber-50 to-rose-50 py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 text-center">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-dark mb-6">
            Authentic Luxury Fragrances
          </h1>
          <p className="text-lg md:text-xl text-muted mb-8 max-w-2xl mx-auto">
            Discover Nigeria's premier destination for designer perfumes, skincare, and wellness products
          </p>
          <Link 
            href="/shop" 
            className="inline-block px-8 py-4 bg-dark text-white text-base font-semibold rounded-full hover:bg-dark/80 transition-all"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* ===== BRAND SLIDER ===== */}
      <BrandSlider />

      {/* ===== BEST SELLERS ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <h2 className="font-serif text-3xl md:text-4xl text-dark text-center mb-12">
            BEST SELLERS
          </h2>

          {bestsellers.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {bestsellers.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`} className="group block">
                  <div className="relative bg-offwhite aspect-square overflow-hidden rounded-lg mb-3">
                    {product.image ? (
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-light text-muted/20">
                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-dark leading-tight line-clamp-2 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted mb-1">
                    by <span className="font-medium text-dark">{product.brand}</span>
                  </p>
                  <p className="text-xs text-muted mb-2">
                    {product.concentration} {product.size}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted capitalize">{product.gender}</span>
                    <span className="text-sm font-bold text-dark">{product.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted mb-6">Follow us on Instagram for product updates!</p>
              <a href="https://www.instagram.com/beauty_byb.ng" target="_blank" rel="noopener noreferrer" className="btn-outline inline-block">
                Follow @beauty_byb.ng
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ===== CATEGORY CARDS ===== */}
      <section className="py-16 md:py-24 bg-offwhite">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <h2 className="font-serif text-3xl md:text-4xl text-dark text-center mb-12">
            SHOP BY CATEGORY
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { title: 'Perfumes', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop', link: '/shop?cat=perfume' },
              { title: 'Supplements', image: 'https://images.unsplash.com/photo-1584308666744-24d5c4df491f?w=400&h=400&fit=crop', link: '/shop?cat=supplement' },
              { title: 'Skincare', image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop', link: '/shop?cat=skincare' },
              { title: 'Beauty & Glow', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop', link: '/shop?cat=beauty-glow' },
            ].map((cat) => (
              <Link key={cat.title} href={cat.link} className="group block">
                <div className="relative aspect-square overflow-hidden rounded-lg mb-3">
                  <img 
                    src={cat.image} 
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-center text-lg font-semibold text-dark">
                  {cat.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEW ARRIVALS ===== */}
      {newArrivals.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-8 md:px-16">
            <h2 className="font-serif text-3xl md:text-4xl text-dark text-center mb-12">
              NEW ARRIVALS
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {newArrivals.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`} className="group block">
                  <div className="relative bg-offwhite aspect-square overflow-hidden rounded-lg mb-3">
                    {product.image ? (
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-light text-muted/20">
                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                    {product.newArrival && (
                      <span className="absolute top-2 left-2 bg-dark text-white text-xs font-semibold px-2 py-1 rounded">
                        New
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-dark leading-tight line-clamp-2 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted mb-1">
                    by <span className="font-medium text-dark">{product.brand}</span>
                  </p>
                  <p className="text-xs text-muted mb-2">
                    {product.concentration} {product.size}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted capitalize">{product.gender}</span>
                    <span className="text-sm font-bold text-dark">{product.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== TRUST BADGES ===== */}
      <section className="py-16 bg-offwhite">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <svg className="w-12 h-12 mx-auto mb-3 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="font-semibold text-dark mb-1">100% Authentic</h3>
              <p className="text-sm text-muted">Guaranteed original products</p>
            </div>
            <div>
              <svg className="w-12 h-12 mx-auto mb-3 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <h3 className="font-semibold text-dark mb-1">Free Delivery</h3>
              <p className="text-sm text-muted">On orders over ₦50,000</p>
            </div>
            <div>
              <svg className="w-12 h-12 mx-auto mb-3 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-semibold text-dark mb-1">Fast Shipping</h3>
              <p className="text-sm text-muted">Nationwide delivery</p>
            </div>
            <div>
              <svg className="w-12 h-12 mx-auto mb-3 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <h3 className="font-semibold text-dark mb-1">Expert Support</h3>
              <p className="text-sm text-muted">Fragrance consultation</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="py-16 md:py-24 bg-dark text-white">
        <div className="max-w-[800px] mx-auto px-8 md:px-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Sign Up For Discounts
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Get exclusive offers and new arrival updates
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-dark focus:outline-none"
            />
            <button 
              type="submit"
              className="px-8 py-3 bg-white text-dark font-semibold rounded-full hover:bg-white/90 transition-all"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm text-white/60 mt-4">
            Your first discount will be applied instantly!
          </p>
        </div>
      </section>
    </div>
  );
}

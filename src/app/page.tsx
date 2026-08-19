'use client';

import Link from 'next/link';
import { useProducts } from '@/hooks/useProducts';
import { useCart } from '@/context/CartContext';
import HeroSlider from '@/components/HeroSlider';
import CategoryGrid from '@/components/CategoryGrid';
import ProductCarousel from '@/components/ProductCarousel';
import EmptyState from '@/components/EmptyState';

export default function HomePage() {
  const { products } = useProducts();
  const { addToCart } = useCart();

  const bestsellers = products.filter((p) => p.bestseller).slice(0, 12);
  const newArrivals = products.filter((p) => p.newArrival).slice(0, 12);

  return (
    <div>
      {/* ===== TOP ANNOUNCEMENT BAR ===== */}
      <div className="bg-dark text-white text-center py-3">
        <p className="text-sm font-medium">
          Free Delivery on Orders Over ₦50,000 | Nationwide Shipping 🇳🇬
        </p>
      </div>

      {/* ===== HERO SLIDER ===== */}
      <HeroSlider />

      {/* ===== CATEGORY GRID ===== */}
      <CategoryGrid />

      {/* ===== BEST SELLERS ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <h2 className="font-serif text-3xl md:text-4xl text-dark text-center mb-4">
            Best Sellers
          </h2>
          <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
            Explore the bestselling perfumes of all times
          </p>

          {bestsellers.length > 0 ? (
            <ProductCarousel products={bestsellers} addToCart={addToCart} />
          ) : (
            <EmptyState />
          )}
        </div>
      </section>

      {/* ===== NEW ARRIVALS ===== */}
      {newArrivals.length > 0 && (
        <section className="py-16 md:py-24 bg-offwhite">
          <div className="max-w-[1400px] mx-auto px-8 md:px-16">
            <h2 className="font-serif text-3xl md:text-4xl text-dark text-center mb-4">
              New Arrivals
            </h2>
            <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
              Explore the NEW ARRIVALS perfumes of TOP BRANDS
            </p>

            <ProductCarousel products={newArrivals} addToCart={addToCart} />
          </div>
        </section>
      )}

      {/* ===== TRUST BADGES ===== */}
      <section className="py-20 md:py-28 bg-offwhite">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-gold/30" />
              <div className="w-2 h-2 rounded-full bg-gold" />
              <div className="w-12 h-px bg-gold/30" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-dark mb-3">
              The BeautybyB Promise
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              Our commitment to excellence in every detail
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-gold/20 rounded-full group-hover:border-gold/50 transition-all">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-dark mb-2">100% Authentic</h3>
              <p className="text-sm text-muted leading-relaxed">Guaranteed original products sourced directly</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-gold/20 rounded-full group-hover:border-gold/50 transition-all">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-dark mb-2">Complimentary Delivery</h3>
              <p className="text-sm text-muted leading-relaxed">On orders over ₦50,000 nationwide</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-gold/20 rounded-full group-hover:border-gold/50 transition-all">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-dark mb-2">Express Shipping</h3>
              <p className="text-sm text-muted leading-relaxed">Swift delivery to your doorstep</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-gold/20 rounded-full group-hover:border-gold/50 transition-all">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-dark mb-2">Expert Guidance</h3>
              <p className="text-sm text-muted leading-relaxed">Personal fragrance consultation</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="py-20 md:py-32 bg-dark text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        
        <div className="max-w-[800px] mx-auto px-8 md:px-16 text-center relative z-10">
          {/* Decorative top element */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-px bg-gold/30" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="w-12 h-px bg-gold/30" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl mb-6 tracking-tight">
            Join Our Inner Circle
          </h2>
          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            Receive exclusive access to new arrivals, private sales, and curated fragrance recommendations
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-gold/50 transition-all"
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-gold text-dark font-semibold tracking-wider uppercase hover:bg-gold/90 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-xs text-white/40 mt-6 tracking-wider">
            Be the first to discover our latest collections
          </p>
        </div>
      </section>
    </div>
  );
}

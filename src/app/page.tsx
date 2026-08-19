'use client';

import Link from 'next/link';
import { useProducts } from '@/hooks/useProducts';
import { useCart } from '@/context/CartContext';
import HeroSlider from '@/components/HeroSlider';
import CategoryGrid from '@/components/CategoryGrid';
import ProductCarousel from '@/components/ProductCarousel';

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
            <div className="text-center py-16">
              <p className="text-lg text-muted mb-6">Bestsellers coming soon!</p>
              <Link href="/shop" className="btn-outline inline-block">
                Shop All Products
              </Link>
            </div>
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
      <section className="py-16 bg-white border-t border-border">
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

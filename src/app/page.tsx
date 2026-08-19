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
      {/* ===== HERO SLIDER ===== */}
      <HeroSlider />

      {/* ===== CATEGORY GRID ===== */}
      <CategoryGrid />

      {/* ===== BEST SELLERS ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-dark mb-3">
              BEST SELLERS
            </h2>
            <p className="text-[#666] text-sm md:text-base max-w-2xl mx-auto">
              Explore the bestselling perfumes of all times
            </p>
          </div>

          {bestsellers.length > 0 ? (
            <ProductCarousel products={bestsellers} addToCart={addToCart} />
          ) : (
            <EmptyState />
          )}
        </div>
      </section>

      {/* ===== NEW ARRIVALS ===== */}
      {newArrivals.length > 0 && (
        <section className="py-16 md:py-24 bg-[#f8f8f8]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-dark mb-3">
                NEW ARRIVALS
              </h2>
              <p className="text-[#666] text-sm md:text-base max-w-2xl mx-auto">
                Explore the new arrivals from top brands
              </p>
            </div>

            <ProductCarousel products={newArrivals} addToCart={addToCart} />
          </div>
        </section>
      )}

      {/* ===== TRUST BADGES ===== */}
      <section className="py-16 md:py-20 bg-white border-y border-[#e0e0e0]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <svg className="w-10 h-10 mx-auto mb-3 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="font-serif text-base md:text-lg text-dark mb-1">100% Authentic</h3>
              <p className="text-xs text-[#666]">Guaranteed original products</p>
            </div>
            <div className="text-center">
              <svg className="w-10 h-10 mx-auto mb-3 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <h3 className="font-serif text-base md:text-lg text-dark mb-1">Free Delivery</h3>
              <p className="text-xs text-[#666]">On orders over ₦50,000</p>
            </div>
            <div className="text-center">
              <svg className="w-10 h-10 mx-auto mb-3 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-serif text-base md:text-lg text-dark mb-1">Fast Shipping</h3>
              <p className="text-xs text-[#666]">Nationwide delivery</p>
            </div>
            <div className="text-center">
              <svg className="w-10 h-10 mx-auto mb-3 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <h3 className="font-serif text-base md:text-lg text-dark mb-1">Expert Support</h3>
              <p className="text-xs text-[#666]">Fragrance consultation</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="py-16 md:py-20 bg-[#1a1a1a] text-white">
        <div className="max-w-[700px] mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Sign Up For Discounts
          </h2>
          <p className="text-white/70 text-base mb-8">
            Get exclusive offers and new arrival updates
          </p>
          <form className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-3.5 bg-white text-dark placeholder:text-[#999] text-sm focus:outline-none"
            />
            <button 
              type="submit"
              className="px-8 py-3.5 bg-[#b8956a] text-dark text-xs font-bold tracking-widest uppercase hover:bg-[#a6845a] transition-all"
            >
              Sign Up
            </button>
          </form>
          <p className="text-xs text-white/50 mt-4">
            Your first discount will be applied instantly!
          </p>
        </div>
      </section>
    </div>
  );
}

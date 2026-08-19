'use client';

import Link from 'next/link';
import { useProducts } from '@/hooks/useProducts';

export default function HomePage() {
  const { products } = useProducts();

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="min-h-[80vh] flex items-center justify-center bg-offwhite">
        <div className="max-w-[800px] mx-auto px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl text-dark mb-6">
            Beauty<span className="text-gold">byB</span>
          </h1>
          <p className="text-lg text-muted mb-10 max-w-lg mx-auto">
            Your destination for authentic luxury products
          </p>
          <Link 
            href="/shop" 
            className="inline-block px-8 py-4 bg-dark text-white text-base font-semibold rounded-full hover:bg-dark/80 transition-all"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
}

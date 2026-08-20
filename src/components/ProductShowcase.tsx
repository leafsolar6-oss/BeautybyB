'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const products = [
  // Designer Perfumes
  { id: 'dp1', name: 'Chanel No. 5', category: 'Designer Perfumes', price: 45000, originalPrice: 65000, image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop&q=90', badge: 'Bestseller' },
  { id: 'dp2', name: 'Sauvage EDP', category: 'Designer Perfumes', price: 38000, originalPrice: 55000, image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&h=600&fit=crop&q=90', badge: 'New' },
  { id: 'dp3', name: 'Tom Ford Oud Wood', category: 'Designer Perfumes', price: 72000, originalPrice: 95000, image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600&h=600&fit=crop&q=90' },
  // Imported Skincare
  { id: 'sk1', name: 'SilkSculpt Serum', category: 'Imported Skincare', price: 35000, originalPrice: 70000, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop&q=90', badge: 'Bestseller' },
  { id: 'sk2', name: 'SilkSkin Serum', category: 'Imported Skincare', price: 48000, originalPrice: 60000, image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop&q=90' },
  { id: 'sk3', name: 'HydraLuxe Serum', category: 'Imported Skincare', price: 20000, originalPrice: 40000, image: 'https://images.unsplash.com/photo-1570194065650-d99fb4ee3313?w=600&h=600&fit=crop&q=90', badge: 'New' },
  // Skincare Supplements
  { id: 'ss1', name: 'Collagen Glow', category: 'Skincare Supplements', price: 25000, originalPrice: 45000, image: 'https://images.unsplash.com/photo-1584308666744-24d5c4df491f?w=600&h=600&fit=crop&q=90', badge: 'Bestseller' },
  { id: 'ss2', name: 'Vitamin C Complex', category: 'Skincare Supplements', price: 18000, originalPrice: 30000, image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=600&fit=crop&q=90' },
  // Gym Supplements
  { id: 'gs1', name: 'Whey Protein Isolate', category: 'Gym Supplements', price: 32000, originalPrice: 45000, image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2c7cf?w=600&h=600&fit=crop&q=90', badge: 'Bestseller' },
  { id: 'gs2', name: 'Pre-Workout Formula', category: 'Gym Supplements', price: 28000, originalPrice: 40000, image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop&q=90', badge: 'New' },
];

const categories = ['All', 'Designer Perfumes', 'Imported Skincare', 'Skincare Supplements', 'Gym Supplements'];

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { addToCart } = useCart();

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="py-20 md:py-28 bg-green-950 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-gold text-[11px] tracking-[0.35em] uppercase font-semibold">Our Collection</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-5 leading-tight">
            Best <em className="italic font-normal">Sellers</em>
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            Our most-loved products, trusted by thousands of beauty enthusiasts worldwide.
          </p>
        </div>

        {/* Elegant Filter Tabs */}
        <div className="flex justify-center mb-14">
          <div className="flex flex-wrap justify-center gap-1 bg-white/5 rounded-full p-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-xs md:text-sm tracking-wide transition-all duration-300 rounded-full font-medium whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-gold text-green-950 font-bold shadow-lg'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card group bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-gold/30">
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-white/5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-gold text-green-950 text-[10px] font-bold tracking-wider uppercase rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-4 md:p-5">
                <span className="text-gold text-[9px] tracking-[0.2em] uppercase font-semibold">{product.category}</span>
                <h3 className="font-display text-base md:text-lg font-bold text-white mt-1.5 mb-2 group-hover:text-gold transition-colors leading-snug">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-gold font-bold text-base">₦{product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <span className="text-white/30 line-through text-xs">₦{product.originalPrice.toLocaleString()}</span>
                  )}
                </div>
                <button
                  onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
                  className="w-full py-2.5 bg-gold/10 text-gold text-xs font-bold tracking-wider uppercase rounded-full hover:bg-gold hover:text-green-950 transition-all duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-14">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-wider uppercase hover:text-gold-light transition-colors border-b border-gold/30 pb-1 hover:border-gold"
          >
            View All Products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

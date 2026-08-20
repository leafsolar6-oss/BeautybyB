'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const products = [
  {
    id: '1',
    name: 'Radiance Serum',
    category: 'Skincare',
    price: 89,
    originalPrice: 120,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop&q=90',
    badge: 'Bestseller',
  },
  {
    id: '2',
    name: 'Velvet Matte Lipstick',
    category: 'Makeup',
    price: 45,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=600&fit=crop&q=90',
    badge: 'New',
  },
  {
    id: '3',
    name: 'Midnight Orchid',
    category: 'Fragrance',
    price: 165,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop&q=90',
  },
  {
    id: '4',
    name: 'Hydra Boost Cream',
    category: 'Skincare',
    price: 72,
    originalPrice: 95,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop&q=90',
    badge: '-25%',
  },
];

const categories = ['All', 'Skincare', 'Makeup', 'Fragrances', 'Hair Care'];

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { addToCart } = useCart();

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 md:py-32 bg-green-950 text-white">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-gold text-xs md:text-sm tracking-[0.3em] uppercase font-bold">Our Collection</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
              Best <em className="italic font-normal">Sellers</em>
            </h2>
            <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed max-w-xl">
              Discover our most loved products, trusted by thousands of beauty enthusiasts worldwide.
            </p>
          </div>
          <Link
            href="/shop"
            className="btn-luxury inline-flex items-center gap-3 px-8 py-4 bg-gold text-green-950 font-bold hover:bg-gold-light transition-all duration-500 rounded-sm"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 text-sm tracking-wide transition-all duration-300 rounded-sm ${
                activeCategory === cat
                  ? 'bg-gold text-green-950 font-bold'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card group bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10">
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-white/5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1.5 bg-gold text-green-950 text-xs font-bold tracking-wide rounded-sm">
                    {product.badge}
                  </span>
                )}
                {/* Quick Actions */}
                <div className="absolute right-4 top-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gold transition-colors shadow-lg">
                    <svg className="w-4 h-4 text-green-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 md:p-6">
                <span className="text-gold text-[10px] md:text-xs tracking-[0.15em] uppercase font-bold">{product.category}</span>
                <h3 className="font-display text-lg md:text-xl font-bold text-white mt-2 mb-3 group-hover:text-gold transition-colors leading-tight">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-gold font-bold text-lg">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-white/40 line-through text-sm">${product.originalPrice}</span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
                  className="w-full mt-4 py-3 bg-white/10 text-white text-sm font-bold tracking-wide rounded-sm hover:bg-gold hover:text-green-950 transition-all duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

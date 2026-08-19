'use client';

import { useState } from 'react';
import Link from 'next/link';
import { products } from '@/data/products';

const filterTabs = ['All', 'Perfumes', 'Skincare', 'Supplements', 'Gym'];

const categoryMap: Record<string, string> = {
  'All': '',
  'Perfumes': 'designer',
  'Skincare': 'skincare',
  'Supplements': 'supplements',
  'Gym': 'gym',
};

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <div className="product-card bg-white rounded-xl overflow-hidden border border-[#e5e7eb]/60 group">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
        <img
          src={product.image}
          alt={product.name}
          className="product-image w-full h-full object-cover"
        />
        {product.discount > 0 && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#1a3c34] text-white text-[10px] font-bold rounded-md">
            {product.discount}% off
          </span>
        )}
        {/* Quick actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#c5a572] hover:text-white transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          </button>
          <button className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#1a3c34] hover:text-white transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
          </button>
        </div>
        {/* Category label */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-3">
          <span className="text-white text-xs font-medium">{product.category === 'designer' ? 'Perfumes' : product.category === 'skincare' ? 'Skincare' : product.category === 'supplements' ? 'Supplements' : 'Gym'}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-[#999]">{product.brand}</span>
          <div className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-[#c5a572]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <span className="text-xs font-medium">{product.rating}</span>
          </div>
        </div>
        <h3 className="font-semibold text-sm text-[#1a1a1a] mb-1 truncate">{product.name}</h3>
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#1a3c34] text-sm">₦{product.price.toLocaleString()}</span>
          {product.originalPrice > product.price && (
            <span className="text-xs text-[#999] line-through">₦{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function BestSellersSection() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = activeTab === 'All'
    ? products
    : products.filter((p) => p.category === categoryMap[activeTab]);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-[#c5a572] text-xs tracking-wider uppercase font-medium mb-2">Our Products</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1a1a1a]">
              Our <span className="text-[#c5a572]">Best Sellers</span> Products
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a3c34] text-white text-xs font-bold rounded-full hover:bg-[#c5a572] transition-colors self-start"
          >
            View All Products
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-[#1a3c34] text-white'
                  : 'bg-[#f0f0f0] text-[#666] hover:bg-[#e5e5e5]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {filtered.slice(0, 10).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-[#999] py-12">No products found in this category.</p>
        )}
      </div>
    </section>
  );
}

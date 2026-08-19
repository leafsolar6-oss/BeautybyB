'use client';

import { useState } from 'react';
import { products } from '@/data/products';

const filterTabs = ['All', 'Skin Care', 'Make Up', 'Hair Care', 'Fragrances', 'Nail Care', 'Body Care', 'Accessories & Tools'];

function CountdownTimer() {
  const [time] = useState({ days: 5, hours: 12, mins: 30, secs: 25 });
  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-[#2d5016]/90 backdrop-blur-sm text-white py-2 px-3 flex items-center justify-center gap-2 text-[10px]">
      <div className="text-center"><span className="font-bold text-sm block">{pad(time.days)}</span><span className="text-[8px] opacity-70">Days</span></div>
      <span className="font-bold">:</span>
      <div className="text-center"><span className="font-bold text-sm block">{pad(time.hours)}</span><span className="text-[8px] opacity-70">Hours</span></div>
      <span className="font-bold">:</span>
      <div className="text-center"><span className="font-bold text-sm block">{pad(time.mins)}</span><span className="text-[8px] opacity-70">Mins</span></div>
      <span className="font-bold">:</span>
      <div className="text-center"><span className="font-bold text-sm block">{pad(time.secs)}</span><span className="text-[8px] opacity-70">Sec</span></div>
    </div>
  );
}

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <div className="product-card bg-white rounded-xl overflow-hidden min-w-[220px] md:min-w-[260px] flex-shrink-0 border border-gray-100">
      <div className="relative aspect-square overflow-hidden bg-[#f9f9f9]">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#2d5016] text-white text-[10px] font-bold rounded-md">
          {product.discount}% off
        </span>
        <div className="product-actions absolute top-3 right-3 flex flex-col gap-1.5">
          <button className="w-7 h-7 bg-white rounded-full shadow flex items-center justify-center hover:bg-[#2d5016] hover:text-white transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          </button>
          <button className="w-7 h-7 bg-white rounded-full shadow flex items-center justify-center hover:bg-[#2d5016] hover:text-white transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          </button>
          <button className="w-7 h-7 bg-white rounded-full shadow flex items-center justify-center hover:bg-[#2d5016] hover:text-white transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
          </button>
        </div>
        {product.countdown && <CountdownTimer />}
      </div>
      <div className="p-3.5">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-[#999]">{product.category}</span>
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3 text-[#b8956a]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <span className="text-xs font-medium">{product.rating}</span>
          </div>
        </div>
        <h3 className="font-semibold text-sm text-[#1a1a1a] mb-1">{product.name}</h3>
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#2d5016] text-sm">${product.price.toFixed(2)}</span>
          <span className="text-xs text-[#999] line-through">${product.originalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default function BestSellersSection() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-[#888] text-sm mb-2">Our Products</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1a1a1a]">
              Our <span className="text-[#b8956a]">Best Sellers</span> Products
            </h2>
          </div>
          <a href="/shop" className="inline-flex items-center px-5 py-2.5 bg-[#2d5016] text-white text-xs font-bold rounded-full hover:bg-[#1e3a0e] transition-colors self-start">
            View All Products
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === tab ? 'bg-[#2d5016] text-white' : 'bg-white text-[#666] border border-gray-200 hover:border-[#2d5016]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products - Horizontal Scroll */}
        <div className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar pb-4">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const products = [
  // Designer Perfumes
  { id: 'dp1', name: 'Chanel No. 5', brand: 'Chanel', category: 'designer', price: 45000, originalPrice: 65000, discount: 30, rating: 4.9, reviews: 128, image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop&q=90', badge: 'Bestseller', desc: 'The iconic floral aldehyde fragrance. A timeless classic.' },
  { id: 'dp2', name: 'Sauvage EDP', brand: 'Dior', category: 'designer', price: 38000, originalPrice: 55000, discount: 30, rating: 4.8, reviews: 96, image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&h=600&fit=crop&q=90', badge: 'New', desc: 'A radically fresh composition, raw and noble.' },
  { id: 'dp3', name: 'Oud Wood', brand: 'Tom Ford', category: 'designer', price: 72000, originalPrice: 95000, discount: 24, rating: 4.9, reviews: 67, image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600&h=600&fit=crop&q=90', desc: 'Exotic, rich and rare blend of oud wood and spices.' },
  { id: 'dp4', name: 'Libre EDP', brand: 'YSL', category: 'designer', price: 42000, originalPrice: 60000, discount: 30, rating: 4.7, reviews: 85, image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&h=600&fit=crop&q=90', badge: 'Bestseller', desc: 'The freedom to live life to the fullest.' },
  { id: 'dp5', name: 'Bleu de Chanel', brand: 'Chanel', category: 'designer', price: 48000, originalPrice: 68000, discount: 29, rating: 4.8, reviews: 112, image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&h=600&fit=crop&q=90', desc: 'A woody, aromatic fragrance for the independent man.' },
  { id: 'dp6', name: 'Eros', brand: 'Versace', category: 'designer', price: 35000, originalPrice: 50000, discount: 30, rating: 4.6, reviews: 74, image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&h=600&fit=crop&q=90', badge: 'New', desc: 'Inspired by Greek mythology, the fragrance of love.' },
  // Imported Skincare
  { id: 'sk1', name: 'SilkSculpt Serum', brand: 'BeautybyB', category: 'skincare', price: 35000, originalPrice: 70000, discount: 50, rating: 4.9, reviews: 45, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop&q=90', badge: 'Bestseller', desc: 'Advanced peptide complex for firm, youthful skin.' },
  { id: 'sk2', name: 'SilkSkin Serum', brand: 'BeautybyB', category: 'skincare', price: 48000, originalPrice: 60000, discount: 20, rating: 4.8, reviews: 38, image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop&q=90', desc: 'Luxurious hydration for radiant, glowing skin.' },
  { id: 'sk3', name: 'HydraLuxe Serum', brand: 'BeautybyB', category: 'skincare', price: 20000, originalPrice: 40000, discount: 50, rating: 4.9, reviews: 52, image: 'https://images.unsplash.com/photo-1570194065650-d99fb4ee3313?w=600&h=600&fit=crop&q=90', badge: 'New', desc: 'Deep moisture with hyaluronic acid complex.' },
  { id: 'sk4', name: 'OceanMist Moisturizer', brand: 'BeautybyB', category: 'skincare', price: 20000, originalPrice: 40000, discount: 50, rating: 4.8, reviews: 29, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop&q=90', badge: 'New', desc: 'Lightweight hydration with marine extracts.' },
  // Skincare Supplements
  { id: 'ss1', name: 'Collagen Glow Capsules', brand: 'BeautybyB', category: 'supplements', price: 25000, originalPrice: 45000, discount: 44, rating: 4.7, reviews: 89, image: 'https://images.unsplash.com/photo-1584308666744-24d5c4df491f?w=600&h=600&fit=crop&q=90', badge: 'Bestseller', desc: 'Marine collagen for skin elasticity and glow.' },
  { id: 'ss2', name: 'Vitamin C + E Complex', brand: 'BeautybyB', category: 'supplements', price: 18000, originalPrice: 30000, discount: 40, rating: 4.6, reviews: 56, image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=600&fit=crop&q=90', badge: 'New', desc: 'Powerful antioxidant blend for immune support.' },
  { id: 'ss3', name: 'Biotin Hair & Skin', brand: 'BeautybyB', category: 'supplements', price: 15000, originalPrice: 25000, discount: 40, rating: 4.8, reviews: 73, image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&h=600&fit=crop&q=90', desc: 'Supports healthy hair, skin, and nails.' },
  // Gym Supplements
  { id: 'gs1', name: 'Whey Protein Isolate', brand: 'BeautybyB', category: 'gym', price: 32000, originalPrice: 45000, discount: 29, rating: 4.8, reviews: 134, image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2c7cf?w=600&h=600&fit=crop&q=90', badge: 'Bestseller', desc: '25g protein per serving for lean muscle growth.' },
  { id: 'gs2', name: 'Pre-Workout Formula', brand: 'BeautybyB', category: 'gym', price: 28000, originalPrice: 40000, discount: 30, rating: 4.7, reviews: 98, image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop&q=90', badge: 'New', desc: 'Explosive energy and focus for intense workouts.' },
  { id: 'gs3', name: 'BCAA Recovery Mix', brand: 'BeautybyB', category: 'gym', price: 22000, originalPrice: 35000, discount: 37, rating: 4.6, reviews: 67, image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=600&h=600&fit=crop&q=90', desc: 'Muscle recovery and reduced soreness formula.' },
];

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'designer', name: 'Designer Perfumes' },
  { id: 'skincare', name: 'Imported Skincare' },
  { id: 'supplements', name: 'Skincare Supplements' },
  { id: 'gym', name: 'Gym Supplements' },
];

// Normalization map: accept any variant of a category name and map to canonical ID
// Handles URL-encoded spaces, hyphenated slugs, full names, etc.
const CATEGORY_ALIASES: Record<string, string> = {
  // Designer Perfumes
  'designer': 'designer',
  'designer-perfumes': 'designer',
  'designerperfumes': 'designer',
  // Imported Skincare
  'skincare': 'skincare',
  'imported-skincare': 'skincare',
  'importedskincare': 'skincare',
  // Skincare Supplements
  'supplements': 'supplements',
  'skincare-supplements': 'supplements',
  'skincaresupplements': 'supplements',
  // Gym Supplements
  'gym': 'gym',
  'gym-supplements': 'gym',
  'gymsupplements': 'gym',
};

function normalizeCategory(raw: string | null): string {
  if (!raw) return 'all';
  const lower = raw.toLowerCase().trim();
  return CATEGORY_ALIASES[lower] ?? 'all';
}

function ShopContent() {
  const searchParams = useSearchParams();
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState(normalizeCategory(searchParams.get('category')));
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }, []);

  // Sync active category when URL search params change (e.g., navigating from homepage)
  useEffect(() => {
    setActiveCategory(normalizeCategory(searchParams.get('category')));
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory);
    if (sortBy === 'price-low') result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result = [...result].sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') result = [...result].sort((a, b) => b.rating - a.rating);
    if (sortBy === 'newest') result = [...result].filter(p => p.badge === 'New').concat([...result].filter(p => p.badge !== 'New'));
    return result;
  }, [activeCategory, sortBy]);

  const categoryData = categories.find(c => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-cream pt-24">
      {/* Hero Banner */}
      <section className="bg-green-950 py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 text-center">
          <span className="text-gold text-xs md:text-sm tracking-[0.3em] uppercase font-bold">{categoryData?.name || 'All Products'}</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
            {categoryData?.name === 'Designer Perfumes' && <>Luxury <em className="italic font-normal">Fragrances</em></>}
            {categoryData?.name === 'Imported Skincare' && <>Premium <em className="italic font-normal">Skincare</em></>}
            {categoryData?.name === 'Skincare Supplements' && <>Beauty <em className="italic font-normal">Supplements</em></>}
            {categoryData?.name === 'Gym Supplements' && <>Fitness <em className="italic font-normal">Fuel</em></>}
            {!categoryData || categoryData.name === 'All Products' && <>Our <em className="italic font-normal">Collection</em></>}
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
            Discover our curated selection of premium products, each chosen for quality, efficacy, and luxury.
          </p>
        </div>
      </section>

      {/* Filters & Products */}
      <section id="products" className="py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
          {/* Filters Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-gray-200">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 text-sm font-medium rounded-sm transition-all ${
                    activeCategory === cat.id
                      ? 'bg-green-950 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-gold"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <p className="text-sm text-gray-500 mb-8">{filteredProducts.length} products found</p>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card group bg-white rounded-lg overflow-hidden border border-gray-100">
                <div className="relative aspect-square overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1.5 bg-green-950 text-white text-xs font-bold tracking-wide rounded-sm">
                      {product.badge}
                    </span>
                  )}
                  {product.discount > 0 && (
                    <span className="absolute top-4 right-4 px-3 py-1.5 bg-gold text-green-950 text-xs font-bold rounded-sm">
                      -{product.discount}%
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <span className="text-gold text-[10px] tracking-[0.15em] uppercase font-bold">{product.brand}</span>
                  <h3 className="font-display text-lg font-bold text-green-950 mt-1 mb-2 group-hover:text-gold transition-colors">{product.name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">{product.desc}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      <span className="text-xs font-medium">{product.rating}</span>
                    </div>
                    <span className="text-gray-300">|</span>
                    <span className="text-xs text-gray-500">{product.reviews} reviews</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-green-950 font-bold text-lg">₦{product.price.toLocaleString()}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-gray-400 line-through text-sm">₦{product.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                  <button
                    onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
                    className="w-full py-3 bg-green-950 text-white text-sm font-bold tracking-wide rounded-sm hover:bg-gold hover:text-green-950 transition-all duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream pt-24 flex items-center justify-center"><p>Loading...</p></div>}>
      <ShopContent />
    </Suspense>
  );
}

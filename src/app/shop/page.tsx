'use client';

import { useState } from 'react';
import Link from 'next/link';
import { allProducts, categories, genderFilters } from '@/data/products';

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeGender, setActiveGender] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  let filteredProducts = allProducts.filter((p) => {
    const categoryMatch = activeCategory === 'all' || p.category === activeCategory;
    const genderMatch = activeGender === 'all' || p.gender === activeGender;
    return categoryMatch && genderMatch;
  });

  // Sort
  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.priceNumeric - b.priceNumeric);
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.priceNumeric - a.priceNumeric);
  } else if (sortBy === 'name') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="pt-32 pb-16 px-6">
      {/* Background blobs */}
      <div className="blob w-96 h-96 bg-rose/20 top-10 -left-20" />
      <div className="blob w-72 h-72 bg-gold-200/20 bottom-20 right-10" />

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <span className="font-sans text-xs tracking-widest uppercase text-gold-500">The Collection</span>
        <h1 className="font-serif text-4xl md:text-6xl font-light mt-3 text-deep">
          Our <span className="italic text-gradient">Fragrances</span>
        </h1>
        <p className="mt-4 text-deep/50 max-w-xl mx-auto">
          From our signature Essenza Collection to the world's most coveted luxury houses — explore fragrances crafted for those who demand the extraordinary.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto mb-6">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-deep to-plum text-white shadow-lg shadow-deep/20'
                  : 'glass text-deep/70 hover:text-deep'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gender + Sort Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
          <div className="flex items-center gap-2">
            <span className="text-xs text-deep/50 uppercase tracking-wider mr-2">For:</span>
            {genderFilters.map((g) => (
              <button
                key={g.id}
                onClick={() => setActiveGender(g.id)}
                className={`px-3 py-1.5 rounded-full text-xs tracking-wider transition-all duration-300 ${
                  activeGender === g.id
                    ? 'bg-deep/10 text-deep font-medium'
                    : 'text-deep/50 hover:text-deep/70'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-deep/50 uppercase tracking-wider">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1.5 rounded-full bg-white/40 backdrop-blur-sm border border-white/50 text-xs text-deep focus:outline-none focus:border-gold-300"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A–Z</option>
            </select>
          </div>
        </div>

        {/* Results count */}
        <p className="text-center text-xs text-deep/40 mt-4">
          Showing {filteredProducts.length} fragrance{filteredProducts.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="glass-card rounded-3xl overflow-hidden group transition-all duration-500 flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.brand} ${product.name}`}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  {product.bestseller && (
                    <span className="px-2.5 py-0.5 rounded-full bg-gold-400/90 text-white text-[9px] tracking-widest uppercase">
                      Bestseller
                    </span>
                  )}
                  {product.newArrival && (
                    <span className="px-2.5 py-0.5 rounded-full bg-rose/90 text-white text-[9px] tracking-widest uppercase">
                      New
                    </span>
                  )}
                </div>
                {!product.inStock && (
                  <div className="absolute inset-0 bg-deep/40 flex items-center justify-center">
                    <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs tracking-widest uppercase">
                      Sold Out
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-[10px] tracking-widest uppercase text-gold-500 mb-0.5">{product.brand}</p>
                <h3 className="font-serif text-xl text-deep">{product.name}</h3>
                <p className="text-[11px] text-deep/40 mt-0.5">{product.concentration} — {product.size}</p>
                <p className="text-xs text-deep/50 mt-2 italic">{product.notes}</p>
                <div className="flex items-center justify-between mt-auto pt-4">
                  <span className="font-serif text-lg text-deep">{product.price}</span>
                  <button
                    className={`btn-luxury px-3 py-1.5 rounded-full text-[10px] tracking-wider uppercase transition-all duration-300 ${
                      product.inStock
                        ? 'bg-gradient-to-r from-deep/10 to-plum/10 text-deep hover:from-deep hover:to-plum hover:text-white'
                        : 'bg-deep/5 text-deep/30 cursor-not-allowed'
                    }`}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? 'Add to Bag' : 'Unavailable'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <div className="glass-card rounded-3xl p-10">
          <h3 className="font-serif text-2xl md:text-3xl font-light text-deep">
            Can't Decide? Let Us Guide You
          </h3>
          <p className="mt-3 text-deep/50 text-sm max-w-md mx-auto">
            Book a personalized fragrance consultation with our experts and discover the scent that tells your story.
          </p>
          <Link
            href="/contact"
            className="inline-flex btn-luxury px-8 py-3 rounded-full bg-gradient-to-r from-deep to-plum text-white text-xs tracking-widest uppercase mt-6"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

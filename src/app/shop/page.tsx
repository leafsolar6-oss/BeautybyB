'use client';

import { useState } from 'react';
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

  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.priceNumeric - b.priceNumeric);
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.priceNumeric - a.priceNumeric);
  } else if (sortBy === 'name') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div>
      {/* Page header */}
      <div className="bg-offwhite py-10 px-4 md:px-8 border-b border-border">
        <div className="max-w-[1400px] mx-auto text-center">
          <h1 className="font-serif text-3xl md:text-4xl text-dark">All Fragrances</h1>
          <p className="text-[12px] text-muted mt-2">{filteredProducts.length} products</p>
        </div>
      </div>

      {/* Filters bar */}
      <div className="sticky top-16 z-40 bg-white border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-[11px] font-semibold tracking-wide transition-all rounded-sm ${
                  activeCategory === cat.id
                    ? 'bg-dark text-white'
                    : 'text-muted hover:text-dark hover:bg-offwhite'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gender + Sort */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {genderFilters.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setActiveGender(g.id)}
                  className={`px-2.5 py-1 text-[11px] font-medium transition-all rounded-sm ${
                    activeGender === g.id
                      ? 'text-dark border-b border-dark'
                      : 'text-muted hover:text-dark'
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-[11px] font-medium text-muted bg-transparent border border-border px-3 py-1.5 focus:outline-none focus:border-dark cursor-pointer"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products grid */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card group">
              <div className="relative bg-offwhite aspect-[3/4] overflow-hidden mb-3">
                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
                  {product.bestseller && (
                    <span className="badge badge-best">Bestseller</span>
                  )}
                  {product.newArrival && (
                    <span className="badge badge-new">New</span>
                  )}
                </div>

                <img
                  src={product.image}
                  alt={`${product.brand} ${product.name}`}
                  className="product-image w-full h-full object-cover"
                />

                {/* Sold out overlay */}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
                    <span className="text-[11px] font-semibold text-muted tracking-wider uppercase">Sold Out</span>
                  </div>
                )}

                {/* Quick add */}
                <div className="quick-add absolute bottom-0 left-0 right-0 p-2">
                  <button
                    className={`btn-add text-center ${!product.inStock ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? 'Add' : 'Unavailable'}
                  </button>
                </div>
              </div>

              {/* Product info */}
              <div>
                <p className="text-[10px] text-muted uppercase tracking-wider font-medium">{product.brand}</p>
                <h3 className="text-[13px] font-semibold text-dark mt-0.5 leading-tight">{product.name}</h3>
                <p className="text-[11px] text-muted mt-1 line-clamp-1">{product.notes}</p>

                {/* Size info */}
                <p className="text-[10px] text-muted/60 mt-1">{product.concentration} · {product.size}</p>

                {/* Price */}
                <p className="text-[13px] font-semibold text-dark mt-2">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted text-sm">No products found in this category.</p>
            <button
              onClick={() => { setActiveCategory('all'); setActiveGender('all'); }}
              className="btn-outline mt-4"
            >
              View All Products
            </button>
          </div>
        )}
      </div>

      {/* Consultation CTA */}
      <div className="bg-offwhite py-12 px-4 md:px-8 border-t border-border">
        <div className="max-w-[600px] mx-auto text-center">
          <h3 className="font-serif text-2xl text-dark">Not sure what to choose?</h3>
          <p className="text-[12px] text-muted mt-2">
            Book a personal fragrance consultation and let our experts guide you.
          </p>
          <a href="/contact" className="btn-add inline-block max-w-[220px] text-center mt-5">
            Book Consultation
          </a>
        </div>
      </div>
    </div>
  );
}

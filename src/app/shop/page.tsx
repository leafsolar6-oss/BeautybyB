'use client';

import { useState } from 'react';
import { categories, genderFilters } from '@/data/products';
import { useProducts } from '@/hooks/useProducts';

export default function ShopPage() {
  const { products, loading } = useProducts();
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeGender, setActiveGender] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  let filteredProducts = products.filter((p) => {
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

  if (loading) {
    return (
      <div className="pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto text-center py-20">
          <div className="w-8 h-8 border-2 border-dark border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[13px] text-muted">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Page header */}
      <div className="bg-offwhite py-10 px-4 md:px-8 border-b border-border">
        <div className="max-w-[1400px] mx-auto text-center">
          <h1 className="font-serif text-3xl md:text-4xl text-dark">All Products</h1>
          <p className="text-[12px] text-muted mt-2">{filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}</p>
        </div>
      </div>

      {/* Filters bar */}
      <div className="sticky top-[97px] z-40 bg-white border-b border-border">
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
            <div className="hidden sm:flex items-center gap-1">
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
        {filteredProducts.length > 0 ? (
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

                  {product.image ? (
                    <img
                      src={product.image}
                      alt={`${product.brand} ${product.name}`}
                      className="product-image w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted/30">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}

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
                  {product.notes && (
                    <p className="text-[11px] text-muted mt-1 line-clamp-1">{product.notes}</p>
                  )}
                  {(product.size || product.concentration) && (
                    <p className="text-[10px] text-muted/60 mt-1">
                      {[product.concentration, product.size].filter(Boolean).join(' · ')}
                    </p>
                  )}
                  <p className="text-[13px] font-semibold text-dark mt-2">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted text-sm">
              {products.length === 0
                ? 'Products coming soon. Check back shortly!'
                : 'No products found in this category.'}
            </p>
            {products.length === 0 && (
              <a href="https://www.instagram.com/beauty_byb.ng" target="_blank" rel="noopener noreferrer" className="btn-outline inline-block mt-4">
                DM Us on Instagram
              </a>
            )}
            {products.length > 0 && (
              <button
                onClick={() => { setActiveCategory('all'); setActiveGender('all'); }}
                className="btn-outline mt-4"
              >
                View All Products
              </button>
            )}
          </div>
        )}
      </div>

      {/* Consultation CTA */}
      <div className="bg-offwhite py-12 px-4 md:px-8 border-t border-border">
        <div className="max-w-[600px] mx-auto text-center">
          <h3 className="font-serif text-2xl text-dark">Not sure what to choose?</h3>
          <p className="text-[12px] text-muted mt-2">
            DM us on Instagram and we'll help you find the perfect product.
          </p>
          <a
            href="https://www.instagram.com/beauty_byb.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-add inline-block max-w-[220px] text-center mt-5"
          >
            DM on Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

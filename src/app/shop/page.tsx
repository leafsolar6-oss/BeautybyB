'use client';

import { useState } from 'react';
import { categories, genderFilters } from '@/data/products';
import { useProducts } from '@/hooks/useProducts';
import { useCart } from '@/context/CartContext';

export default function ShopPage() {
  const { products, loading } = useProducts();
  const { addToCart, isInCart } = useCart();
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
      <div className="pt-32 pb-16 px-5">
        <div className="max-w-[1400px] mx-auto text-center py-20">
          <div className="w-8 h-8 border-2 border-dark border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-sm text-muted">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Page header */}
      <div className="bg-offwhite py-8 md:py-10 px-5 md:px-8 border-b border-border">
        <div className="max-w-[1400px] mx-auto text-center">
          <h1 className="font-serif text-2xl md:text-4xl text-dark">All Products</h1>
          <p className="text-sm text-muted mt-2">{filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}</p>
        </div>
      </div>

      {/* Filters bar */}
      <div className="sticky top-[97px] z-40 bg-white border-b border-border">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-3">
          {/* Category tabs - scrollable on mobile */}
          <div className="flex gap-1.5 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide md:flex-wrap md:overflow-visible md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 px-4 py-2 text-xs font-semibold tracking-wide transition-all rounded-full ${
                  activeCategory === cat.id
                    ? 'bg-dark text-white'
                    : 'bg-offwhite text-muted hover:text-dark hover:bg-light'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gender + Sort */}
          <div className="flex items-center justify-between gap-3 mt-2 pt-2 border-t border-border/50">
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
              {genderFilters.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setActiveGender(g.id)}
                  className={`shrink-0 px-3 py-1.5 text-xs font-medium transition-all rounded-full ${
                    activeGender === g.id
                      ? 'text-dark bg-light'
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
              className="text-xs font-medium text-muted bg-offwhite border border-border px-3 py-2 rounded-full focus:outline-none focus:border-dark cursor-pointer shrink-0"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price ↑</option>
              <option value="price-high">Price ↓</option>
              <option value="name">A → Z</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products grid */}
      <div className="max-w-[1400px] mx-auto px-3 sm:px-5 md:px-8 py-4 md:py-10">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-2 gap-y-5 sm:gap-x-4 sm:gap-y-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card group">
                <div className="relative bg-offwhite aspect-[3/4] overflow-hidden rounded-lg mb-2.5 sm:mb-3">
                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
                    {product.bestseller && (
                      <span className="badge badge-best text-[9px] sm:text-[10px]">Bestseller</span>
                    )}
                    {product.newArrival && (
                      <span className="badge badge-new text-[9px] sm:text-[10px]">New</span>
                    )}
                  </div>

                  {product.image ? (
                    <img
                      src={product.image}
                      alt={`${product.brand} ${product.name}`}
                      className="product-image w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted/20 bg-light">
                      <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}

                  {/* Sold out overlay */}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] flex items-center justify-center">
                      <span className="text-[10px] sm:text-[11px] font-semibold text-muted tracking-wider uppercase">Sold Out</span>
                    </div>
                  )}

                  {/* Quick add */}
                  <div className="quick-add absolute bottom-0 left-0 right-0 p-2 sm:p-2.5">
                    <button
                      onClick={() => product.inStock && addToCart(product)}
                      className={`btn-add text-center text-[10px] sm:text-xs ${!product.inStock ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={!product.inStock}
                    >
                      {isInCart(product.id) ? 'Added ✓' : product.inStock ? 'Add to Cart' : 'Unavailable'}
                    </button>
                  </div>
                </div>

                {/* Product info */}
                <div className="px-0.5">
                  <p className="text-[9px] sm:text-[10px] text-muted uppercase tracking-wider font-medium truncate">{product.brand}</p>
                  <h3 className="text-[11px] sm:text-[13px] font-semibold text-dark mt-0.5 leading-snug line-clamp-2">{product.name}</h3>
                  {product.notes && (
                    <p className="text-[10px] sm:text-[11px] text-muted mt-0.5 sm:mt-1 line-clamp-1">{product.notes}</p>
                  )}
                  {(product.size || product.concentration) && (
                    <p className="text-[9px] sm:text-[10px] text-muted/50 mt-0.5">
                      {[product.concentration, product.size].filter(Boolean).join(' · ')}
                    </p>
                  )}
                  <p className="text-[12px] sm:text-[13px] font-semibold text-dark mt-1.5 sm:mt-2">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 px-5">
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
      <div className="bg-offwhite py-10 md:py-12 px-5 md:px-8 border-t border-border">
        <div className="max-w-[600px] mx-auto text-center">
          <h3 className="font-serif text-xl md:text-2xl text-dark">Not sure what to choose?</h3>
          <p className="text-sm text-muted mt-2">
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

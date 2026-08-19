'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { categories, genderFilters, perfumeSubcategories, topBrands } from '@/data/products';
import { useProducts } from '@/hooks/useProducts';
import { useCart } from '@/context/CartContext';

export default function ShopPage() {
  const { products, loading } = useProducts();
  const { addToCart, isInCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSubcategory, setActiveSubcategory] = useState('all');
  const [activeGender, setActiveGender] = useState('all');
  const [activeBrand, setActiveBrand] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      const categoryMatch = activeCategory === 'all' || p.category === activeCategory;
      const genderMatch = activeGender === 'all' || p.gender === activeGender;
      const brandMatch = activeBrand === 'all' || p.brand === activeBrand;

      // Subcategory filtering for perfumes
      let subcategoryMatch = true;
      if (activeCategory === 'perfume' && activeSubcategory !== 'all') {
        const notes = p.notes.toLowerCase();
        const name = p.name.toLowerCase();
        const combined = `${name} ${notes}`;

        if (activeSubcategory === 'designer') {
          subcategoryMatch = ['dior', 'armani', 'louis vuitton', 'ysl', 'zara', 'paco', 'valentino', 'prada', 'gucci', 'versace', 'ferragamo', 'calvin klein', 'burberry', 'bvlgari', 'cartier'].some(b => combined.includes(b));
        } else if (activeSubcategory === 'arabian') {
          subcategoryMatch = ['afnan', 'al haramain', 'lattafa', 'arabian', 'oud', 'ajmal', 'rasasi', 'swiss arabian', 'al-rehab', 'orientica', 'orient', 'middle east'].some(b => combined.includes(b));
        } else if (activeSubcategory === 'niche') {
          subcategoryMatch = ['amouage', 'xerjoff', 'nishane', 'maison', 'niche', 'parfums de marly', 'creed', 'initio', 'memo', 'liquid', 'roja', 'frederic malle', 'byredo', 'le labo'].some(b => combined.includes(b));
        } else if (activeSubcategory === 'unisex') {
          subcategoryMatch = p.gender === 'unisex';
        }
      }

      return categoryMatch && genderMatch && brandMatch && subcategoryMatch;
    });

    // Sorting
    if (sortBy === 'price-low') {
      result = [...result].sort((a, b) => a.priceNumeric - b.priceNumeric);
    } else if (sortBy === 'price-high') {
      result = [...result].sort((a, b) => b.priceNumeric - a.priceNumeric);
    } else if (sortBy === 'name') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'bestsellers') {
      result = [...result].sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
    } else if (sortBy === 'newest') {
      result = [...result].sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
    }

    return result;
  }, [products, activeCategory, activeSubcategory, activeGender, activeBrand, sortBy]);

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
      <div className="bg-offwhite py-6 md:py-10 px-5 md:px-8 border-b border-border">
        <div className="max-w-[1400px] mx-auto text-center">
          <h1 className="font-serif text-2xl md:text-4xl text-dark">
            {activeCategory === 'all' ? 'All Products' :
             activeCategory === 'perfume' ? 'Perfumes' :
             activeCategory === 'supplement' ? 'Supplements' :
             activeCategory === 'skincare' ? 'Skincare' : 'Beauty & Glow'}
          </h1>
        </div>
      </div>

      {/* Filters bar */}
      <div className="sticky top-[97px] z-40 bg-white border-b border-border">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-3 space-y-2.5">
          {/* Main category tabs */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setActiveSubcategory('all'); }}
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

          {/* Subcategory filters (only for perfumes) */}
          {activeCategory === 'perfume' && (
            <div className="flex gap-1.5 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide border-t border-border/40 pt-2.5">
              {perfumeSubcategories.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setActiveSubcategory(sub.id)}
                  className={`shrink-0 px-3 py-1.5 text-[11px] font-medium transition-all rounded-full border ${
                    activeSubcategory === sub.id
                      ? 'bg-dark text-white border-dark'
                      : 'border-border text-muted hover:text-dark hover:border-dark/30'
                  }`}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          )}

          {/* Brand filters + Gender + Sort */}
          <div className="flex items-center gap-3 border-t border-border/40 pt-2.5 overflow-x-auto scrollbar-hide -mx-1 px-1">
            {/* Brands */}
            <div className="flex gap-1 shrink-0">
              {topBrands.map((brand) => (
                <button
                  key={brand.id}
                  onClick={() => setActiveBrand(brand.id)}
                  className={`shrink-0 px-2.5 py-1 text-[10px] font-medium transition-all rounded-full ${
                    activeBrand === brand.id
                      ? 'bg-gold/10 text-gold border border-gold/30'
                      : 'text-muted/70 hover:text-dark'
                  }`}
                >
                  {brand.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 shrink-0 ml-auto">
              {/* Gender */}
              <div className="flex gap-1">
                {genderFilters.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setActiveGender(g.id)}
                    className={`px-2.5 py-1 text-[10px] font-medium transition-all rounded-full ${
                      activeGender === g.id
                        ? 'bg-light text-dark'
                        : 'text-muted hover:text-dark'
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-[11px] font-medium text-muted bg-offwhite border border-border px-2.5 py-1.5 rounded-full focus:outline-none focus:border-dark cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="bestsellers">Bestsellers</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price ↑</option>
                <option value="price-high">Price ↓</option>
                <option value="name">A → Z</option>
              </select>
            </div>
          </div>

          {/* Active filters summary */}
          {(activeSubcategory !== 'all' || activeBrand !== 'all' || activeGender !== 'all') && (
            <div className="flex items-center gap-2 pt-1 text-[10px] text-muted">
              <span>Showing:</span>
              {activeSubcategory !== 'all' && (
                <span className="px-2 py-0.5 bg-light rounded-full">{perfumeSubcategories.find(s => s.id === activeSubcategory)?.label}</span>
              )}
              {activeBrand !== 'all' && (
                <span className="px-2 py-0.5 bg-light rounded-full">{topBrands.find(b => b.id === activeBrand)?.label}</span>
              )}
              {activeGender !== 'all' && (
                <span className="px-2 py-0.5 bg-light rounded-full capitalize">{activeGender}</span>
              )}
              <button
                onClick={() => { setActiveSubcategory('all'); setActiveBrand('all'); setActiveGender('all'); }}
                className="text-gold hover:underline ml-1"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Products grid */}
      <div className="max-w-[1400px] mx-auto px-3 sm:px-5 md:px-8 py-4 md:py-10">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-2 gap-y-5 sm:gap-x-4 sm:gap-y-8">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} className="product-card group block">
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
              </Link>
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

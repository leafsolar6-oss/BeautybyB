'use client';

import { useState, useMemo } from 'react';
import { useProducts } from '@/hooks/useProducts';
import { useCart } from '@/context/CartContext';
import { categories, genderFilters } from '@/data/products';
import Link from 'next/link';
import ProductCarousel from '@/components/ProductCarousel';

export default function ShopPage() {
  const { products, loading } = useProducts();
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeGender, setActiveGender] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      const categoryMatch = activeCategory === 'all' || p.category === activeCategory;
      const genderMatch = activeGender === 'all' || p.gender === activeGender;
      return categoryMatch && genderMatch;
    });

    if (sortBy === 'price-low') {
      result = [...result].sort((a, b) => a.priceNumeric - b.priceNumeric);
    } else if (sortBy === 'price-high') {
      result = [...result].sort((a, b) => b.priceNumeric - a.priceNumeric);
    } else if (sortBy === 'name') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'bestsellers') {
      result = [...result].sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
    }

    return result;
  }, [products, activeCategory, activeGender, sortBy]);

  if (loading) {
    return (
      <div className="py-32 text-center">
        <div className="w-10 h-10 border-2 border-dark border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-muted">Loading products...</p>
      </div>
    );
  }

  return (
    <div>
      {/* ===== SHOP HEADER ===== */}
      <section className="bg-offwhite py-16 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-dark mb-4">Shop All Products</h1>
        <p className="text-muted text-lg">{filteredProducts.length} products available</p>
      </section>

      {/* ===== FILTERS ===== */}
      <section className="sticky top-20 z-40 bg-white border-b border-border py-4">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex flex-wrap items-center gap-4">
            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-sm font-semibold rounded-full whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? 'bg-dark text-white'
                      : 'bg-offwhite text-muted hover:text-dark'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Gender Filter */}
            <div className="flex gap-2 ml-auto">
              {genderFilters.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setActiveGender(g.id)}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                    activeGender === g.id
                      ? 'bg-dark text-white'
                      : 'bg-offwhite text-muted hover:text-dark'
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
              className="px-4 py-2 text-sm font-semibold border border-border rounded-full focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="bestsellers">Bestsellers</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A-Z</option>
            </select>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-8">
          {filteredProducts.length > 0 ? (
            <ProductCarousel products={filteredProducts} addToCart={addToCart} />
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted mb-6">No products found in this category.</p>
              <button
                onClick={() => { setActiveCategory('all'); setActiveGender('all'); }}
                className="btn-outline inline-block"
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

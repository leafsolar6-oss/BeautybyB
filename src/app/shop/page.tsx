'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

function ShopContent() {
  const searchParams = useSearchParams();
  const genderFilter = searchParams.get('gender');
  const brandFilter = searchParams.get('brand');

  const [sort, setSort] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (genderFilter) {
      result = result.filter((p) => p.gender === genderFilter);
    }
    if (brandFilter) {
      result = result.filter((p) => p.brand === brandFilter);
    }

    switch (sort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'discount':
        result.sort((a, b) => b.discount - a.discount);
        break;
      case 'reviews':
        result.sort((a, b) => b.reviews - a.reviews);
        break;
    }

    return result;
  }, [genderFilter, brandFilter, sort]);

  return (
    <div>
      {/* Page Header */}
      <div className="bg-[#f8f8f8] py-10 md:py-14 border-b border-[#e0e0e0]">
        <div className="max-w-[1400px] mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl md:text-5xl uppercase tracking-wider mb-2">
            {genderFilter ? `${genderFilter}'s Fragrances` : brandFilter ? brandFilter : 'Shop All'}
          </h1>
          <p className="text-sm text-[#666]">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="sticky top-[108px] z-30 bg-white border-b border-[#e0e0e0] py-3">
        <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#666]">Sort by:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-[#e0e0e0] px-3 py-1.5 text-sm focus:outline-none focus:border-[#c8102e]"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="discount">Biggest Discount</option>
              <option value="reviews">Most Reviews</option>
            </select>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {(genderFilter || brandFilter) && (
              <span className="text-xs text-[#666]">
                {genderFilter && `Gender: ${genderFilter}`}
                {genderFilter && brandFilter && ' • '}
                {brandFilter && `Brand: ${brandFilter}`}
              </span>
            )}
            <a
              href="/shop"
              className="text-xs text-[#c8102e] font-semibold uppercase tracking-wider hover:underline"
            >
              Clear Filters
            </a>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-10 md:py-14">
        <div className="max-w-[1400px] mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg text-[#666]">No products match your filters.</p>
              <a href="/shop" className="btn-primary inline-block mt-6">
                View All Products
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}

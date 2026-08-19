'use client';

import { useState, useMemo } from 'react';
import { useProducts } from '@/hooks/useProducts';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function SearchBar() {
  const { products } = useProducts();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { addToCart } = useCart();

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const lower = query.toLowerCase();
    return products
      .filter(p => 
        p.name.toLowerCase().includes(lower) ||
        p.brand.toLowerCase().includes(lower) ||
        p.notes.toLowerCase().includes(lower) ||
        p.category.toLowerCase().includes(lower)
      )
      .slice(0, 8);
  }, [query, products]);

  return (
    <div className="relative">
      {/* Search trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-offwhite border border-border rounded-full hover:border-dark/30 transition-colors"
        aria-label="Search products"
      >
        <svg className="w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="text-xs text-muted hidden sm:inline">Search products...</span>
      </button>

      {/* Modal overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" onClick={() => setIsOpen(false)}>
          <div
            className="bg-white w-full max-w-2xl mx-auto mt-20 rounded-2xl shadow-2xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-border">
              <svg className="w-5 h-5 text-muted shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                autoFocus
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search by name, brand, or notes..."
                className="flex-1 text-sm text-dark placeholder:text-muted/50 focus:outline-none"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted hover:text-dark transition-colors"
                aria-label="Close search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto">
              {query.trim() === '' ? (
                <div className="py-12 text-center">
                  <svg className="w-12 h-12 text-muted/20 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <p className="text-sm text-muted">Start typing to search products...</p>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="py-12 text-center">
                  <p className="text-sm text-muted">No products found for "{query}"</p>
                  <p className="text-xs text-muted/60 mt-1">Try different keywords</p>
                </div>
              ) : (
                <div className="py-2">
                  {searchResults.map(product => (
                    <div key={product.id} className="flex items-center gap-3 px-6 py-3 hover:bg-offwhite transition-colors">
                      <Link href={`/product/${product.id}`} className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="w-12 h-12 bg-offwhite rounded-lg overflow-hidden shrink-0">
                          {product.image ? (
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-muted/20">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-muted uppercase tracking-wider truncate">{product.brand}</p>
                          <h3 className="text-sm font-semibold text-dark truncate">{product.name}</h3>
                          {product.notes && <p className="text-[10px] text-muted/70 truncate">{product.notes}</p>}
                        </div>
                        <p className="text-sm font-semibold text-dark shrink-0">{product.price}</p>
                      </Link>
                      <button
                        onClick={() => addToCart(product)}
                        className="px-3 py-1.5 bg-dark text-white text-[10px] font-semibold rounded-full hover:bg-dark/80 transition-colors shrink-0"
                      >
                        Add
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

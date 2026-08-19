'use client';

import { useState } from 'react';
import { useProducts } from '@/hooks/useProducts';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const { products } = useProducts();
  const { addToCart } = useCart();

  const results = query.length > 0 
    ? products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.brand.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 6)
    : [];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-border hover:border-gold transition-all"
      >
        <svg className="w-5 h-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-xl">
          <div className="max-w-3xl mx-auto px-8 pt-32">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-luxury text-3xl text-text">Search Collection</h3>
              <button
                onClick={() => { setIsOpen(false); setQuery(''); }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-border hover:border-gold transition-all"
              >
                <svg className="w-5 h-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for fragrances, brands..."
              className="w-full bg-surface border border-border rounded-lg px-6 py-4 text-text placeholder:text-text-muted focus:outline-none focus:border-gold transition-all text-lg"
              autoFocus
            />

            {results.length > 0 && (
              <div className="mt-8 space-y-4">
                {results.map((product) => (
                  <div key={product.id} className="flex items-center gap-4 p-4 bg-surface border border-border rounded-lg hover:border-gold transition-all">
                    <Link href={`/product/${product.id}`} className="flex items-center gap-4 flex-1">
                      <div className="w-16 h-16 bg-surface-light rounded-lg overflow-hidden flex-shrink-0">
                        {product.image ? (
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-text-muted">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-luxury text-lg text-text mb-1">{product.name}</h4>
                        <p className="text-xs text-text-muted uppercase tracking-wider">{product.brand}</p>
                      </div>
                      <p className="text-lg font-semibold text-gold">{product.price}</p>
                    </Link>
                    <button
                      onClick={() => addToCart(product)}
                      className="btn-luxury-filled px-6 py-2 text-xs"
                    >
                      Add
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

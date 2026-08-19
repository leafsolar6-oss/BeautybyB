'use client';

import Link from 'next/link';
import { Product } from '@/data/products';

interface ProductCarouselProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

export default function ProductCarousel({ products, addToCart }: ProductCarouselProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
      {products.map((product) => (
        <div key={product.id} className="group">
          <div className="relative bg-offwhite aspect-[3/4] overflow-hidden rounded-lg mb-4">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-light text-muted/20">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
          </div>

          <p className="text-xs text-muted uppercase tracking-wider mb-1">{product.brand}</p>
          <p className="text-xs text-muted capitalize mb-2">{product.gender}</p>

          <h3 className="text-sm font-semibold text-dark leading-tight mb-2 line-clamp-2">
            {product.name}
          </h3>

          <div className="flex items-center justify-between mb-3">
            <span className="text-base font-bold text-dark">{product.price}</span>
          </div>

          <div className="space-y-2">
            <Link
              href={`/product/${product.id}`}
              className="block w-full py-2 text-center text-sm font-semibold border border-dark text-dark rounded hover:bg-dark hover:text-white transition-all"
            >
              View Details
            </Link>
            <button
              onClick={() => addToCart(product)}
              className="block w-full py-2 text-center text-sm font-semibold bg-dark text-white rounded hover:bg-dark/80 transition-all"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

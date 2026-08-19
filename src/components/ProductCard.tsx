'use client';

import Link from 'next/link';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

export default function ProductCard({ product, addToCart }: ProductCardProps) {
  return (
    <div className="card-luxury rounded-lg overflow-hidden group">
      <Link href={`/product/${product.id}`} className="block">
        <div className="aspect-[3/4] bg-surface-light overflow-hidden relative">
          {product.image ? (
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-text-muted">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}

          {/* Badges */}
          {product.bestseller && (
            <span className="absolute top-4 left-4 bg-gold text-primary text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
              Bestseller
            </span>
          )}
          {product.newArrival && (
            <span className="absolute top-4 left-4 bg-white text-primary text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
              New
            </span>
          )}
        </div>

        <div className="p-5">
          <p className="text-[10px] text-gold uppercase tracking-widest mb-2">{product.brand}</p>
          <h3 className="font-luxury text-base text-text mb-2 line-clamp-2">{product.name}</h3>
          {product.concentration && (
            <p className="text-xs text-text-muted mb-3">{product.concentration}</p>
          )}
          <p className="text-xl font-semibold text-gold">{product.price}</p>
        </div>
      </Link>

      <div className="px-5 pb-5">
        <button
          onClick={() => addToCart(product)}
          className="btn-luxury w-full text-xs"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

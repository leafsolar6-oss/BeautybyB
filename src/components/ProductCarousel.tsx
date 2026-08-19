'use client';

import Link from 'next/link';
import { Product } from '@/data/products';

interface ProductCarouselProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

export default function ProductCarousel({ products, addToCart }: ProductCarouselProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
      {products.map((product) => (
        <div key={product.id} className="group">
          <Link href={`/product/${product.id}`} className="block">
            <div className="relative bg-[#f8f8f8] aspect-[3/4] overflow-hidden mb-3">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[#ccc]">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </div>

            {/* Brand & Gender */}
            <p className="text-[10px] text-[#b8956a] uppercase tracking-widest font-bold mb-1">
              {product.brand}
            </p>
            <p className="text-[10px] text-[#999] uppercase tracking-wider mb-2">
              {product.gender}
            </p>

            {/* Product Name */}
            <h3 className="text-sm font-semibold text-dark leading-snug mb-2 line-clamp-2 min-h-[2.5rem]">
              {product.name}
            </h3>

            {/* Concentration/Size */}
            {product.concentration && (
              <p className="text-[10px] text-[#999] mb-2">
                {product.concentration} {product.size && `· ${product.size}`}
              </p>
            )}

            {/* Price */}
            <p className="text-base font-bold text-dark mb-3">
              {product.price}
            </p>
          </Link>

          {/* Action buttons */}
          <div className="space-y-2">
            <Link
              href={`/product/${product.id}`}
              className="block w-full py-2.5 text-center text-[10px] font-bold tracking-widest uppercase border border-dark text-dark hover:bg-dark hover:text-white transition-all"
            >
              View Details
            </Link>
            <button
              onClick={() => addToCart(product)}
              className="block w-full py-2.5 text-center text-[10px] font-bold tracking-widest uppercase bg-dark text-white hover:bg-[#b8956a] transition-all"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

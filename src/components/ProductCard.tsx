'use client';

import Link from 'next/link';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [hovering, setHovering] = useState(false);

  return (
    <div
      className="product-card group"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="relative aspect-[3/4] bg-[#f8f8f8] overflow-hidden mb-3">
        <Link href={`/product/${product.id}`}>
          {product.hoverImage && hovering ? (
            <img
              src={product.hoverImage}
              alt={product.name}
              className="product-image w-full h-full object-cover"
            />
          ) : (
            <img
              src={product.image}
              alt={product.name}
              className="product-image w-full h-full object-cover"
            />
          )}
        </Link>

        {/* Sale badge */}
        <span className="absolute top-3 left-3 badge-sale">Sale</span>
      </div>

      <div className="space-y-1">
        <Link href={`/product/${product.id}`} className="block text-xs font-semibold text-[#c8102e] uppercase tracking-wider hover:underline">
          View details
        </Link>

        <p className="text-xs text-[#666]">{product.brand}</p>

        <p className="text-xs text-[#666]">{product.gender}</p>

        <Link href={`/product/${product.id}`} className="block">
          <h3 className="text-sm font-bold text-[#333] line-clamp-2 hover:text-[#c8102e] transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-baseline gap-2 pt-1">
          <span className="text-base font-bold text-[#c8102e]">
            From ${product.price.toFixed(2)}
          </span>
          <span className="text-xs text-[#999] line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
          <span className="text-xs font-semibold text-[#c8102e]">
            {product.discount}% off
          </span>
        </div>

        {product.reviews > 0 && (
          <p className="text-xs text-[#666]">
            {product.reviews} review{product.reviews !== 1 ? 's' : ''}
          </p>
        )}
      </div>
    </div>
  );
}

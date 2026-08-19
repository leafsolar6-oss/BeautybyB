'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';
import { useState } from 'react';

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-[1400px] mx-auto px-4 py-20 text-center">
        <h1 className="font-heading text-3xl uppercase mb-4">Product Not Found</h1>
        <Link href="/shop" className="btn-primary inline-block">
          Continue Shopping
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.brand === product.brand && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      addToCart(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-4 py-4">
        <nav className="text-xs text-[#666]">
          <Link href="/" className="hover:text-[#c8102e]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-[#c8102e]">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-[#333]">{product.name}</span>
        </nav>
      </div>

      {/* Product Main */}
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image */}
          <div className="bg-[#f8f8f8] aspect-square">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {/* Info */}
          <div>
            <p className="text-xs text-[#c8102e] uppercase tracking-widest font-bold mb-2">
              {product.brand}
            </p>
            <h1 className="font-heading text-3xl md:text-4xl uppercase tracking-wider mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            {product.reviews > 0 && (
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-[#ffc107]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-[#666]">({product.reviews} reviews)</span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-[#c8102e]">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-lg text-[#999] line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
              <span className="text-sm font-bold text-[#c8102e]">
                {product.discount}% OFF
              </span>
            </div>

            <p className="text-sm text-[#666] mb-2">
              <span className="font-semibold text-[#333]">Gender:</span> {product.gender}
            </p>
            <p className="text-sm text-[#666] mb-2">
              <span className="font-semibold text-[#333]">Size:</span> {product.size}
            </p>
            <p className="text-sm text-[#666] mb-2">
              <span className="font-semibold text-[#333]">Concentration:</span> {product.concentration}
            </p>
            {product.notes && (
              <p className="text-sm text-[#666] mb-6">
                <span className="font-semibold text-[#333]">Notes:</span> {product.notes}
              </p>
            )}

            {/* Add to Cart */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center border border-[#e0e0e0]">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100"
                >
                  −
                </button>
                <span className="w-12 text-center">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 btn-primary"
              >
                {added ? '✓ Added to Cart' : 'Add to Cart'}
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#e0e0e0]">
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-wider mb-1">Authentic</p>
                <p className="text-xs text-[#666]">100% original</p>
              </div>
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-wider mb-1">Free Ship</p>
                <p className="text-xs text-[#666]">Over $59</p>
              </div>
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-wider mb-1">Secure</p>
                <p className="text-xs text-[#666]">Payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 md:py-16 bg-[#f8f8f8]">
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl uppercase tracking-wider text-center mb-8">
              More from {product.brand}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

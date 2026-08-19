'use client';

import { useParams } from 'next/navigation';
import { useProducts } from '@/hooks/useProducts';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function ProductPage() {
  const { id } = useParams();
  const { products, loading } = useProducts();
  const { addToCart, isInCart } = useCart();

  const product = products.find(p => p.id === parseInt(id as string));

  if (loading) {
    return (
      <div className="py-32 text-center">
        <div className="w-10 h-10 border-2 border-dark border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-muted">Loading...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-[800px] mx-auto px-8 py-32 text-center">
        <h1 className="font-serif text-3xl text-dark mb-4">Product Not Found</h1>
        <p className="text-muted mb-8">The product you're looking for doesn't exist.</p>
        <Link href="/shop" className="btn-outline inline-block">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="bg-offwhite rounded-lg overflow-hidden aspect-square">
          {product.image ? (
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted/20">
              <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <p className="text-sm text-muted uppercase tracking-wider mb-2">{product.brand}</p>
          <h1 className="font-serif text-3xl md:text-4xl text-dark mb-4">{product.name}</h1>

          <p className="text-2xl font-bold text-dark mb-6">{product.price}</p>

          <div className="space-y-4 mb-8">
            {product.concentration && (
              <p className="text-muted">
                <span className="font-semibold text-dark">Concentration:</span> {product.concentration}
              </p>
            )}
            {product.size && (
              <p className="text-muted">
                <span className="font-semibold text-dark">Size:</span> {product.size}
              </p>
            )}
            {product.gender && (
              <p className="text-muted">
                <span className="font-semibold text-dark">For:</span> {product.gender}
              </p>
            )}
          </div>

          {product.notes && (
            <div className="mb-8">
              <h3 className="font-semibold text-dark mb-2">Fragrance Notes</h3>
              <p className="text-muted leading-relaxed">{product.notes}</p>
            </div>
          )}

          <div className="space-y-3">
            <button
              onClick={() => product.inStock && addToCart(product)}
              disabled={!product.inStock}
              className={`w-full py-3 font-semibold rounded transition-all ${
                product.inStock
                  ? 'bg-dark text-white hover:bg-dark/80'
                  : 'bg-muted/20 text-muted cursor-not-allowed'
              }`}
            >
              {isInCart(product.id) ? '✓ Added to Cart' : product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
            <Link
              href="/shop"
              className="block w-full py-3 text-center font-semibold border border-dark text-dark rounded hover:bg-dark hover:text-white transition-all"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

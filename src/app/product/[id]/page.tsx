'use client';

import { useParams } from 'next/navigation';
import { useProducts } from '@/hooks/useProducts';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function ProductPage() {
  const { id } = useParams();
  const { products } = useProducts();
  const { addToCart, isInCart } = useCart();

  const product = products.find(p => p.id === parseInt(id as string));
  
  // Get related products from same category
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-20 text-center">
        <h1 className="font-serif text-3xl text-dark mb-4">Product Not Found</h1>
        <p className="text-muted mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link href="/shop" className="btn-outline">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-6 md:py-10">
      <Breadcrumbs />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Product Image */}
        <div className="bg-offwhite rounded-2xl overflow-hidden aspect-square">
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
        <div className="flex flex-col">
          <div className="mb-6">
            <p className="text-xs text-muted uppercase tracking-wider font-medium mb-2">{product.brand}</p>
            <h1 className="font-serif text-3xl md:text-4xl text-dark mb-3">{product.name}</h1>
            
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              {product.bestseller && (
                <span className="px-3 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full">Bestseller</span>
              )}
              {product.newArrival && (
                <span className="px-3 py-1 bg-dark/5 text-dark text-xs font-semibold rounded-full">New Arrival</span>
              )}
              {!product.inStock && (
                <span className="px-3 py-1 bg-red-50 text-red-600 text-xs font-semibold rounded-full">Out of Stock</span>
              )}
            </div>

            {/* Price */}
            <p className="text-2xl font-semibold text-dark mb-6">{product.price}</p>

            {/* Notes/Description */}
            {product.notes && (
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-dark uppercase tracking-wider mb-2">Fragrance Notes</h3>
                <p className="text-sm text-muted leading-relaxed">{product.notes}</p>
              </div>
            )}

            {/* Size & Concentration */}
            {(product.size || product.concentration) && (
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-dark uppercase tracking-wider mb-2">Details</h3>
                <div className="space-y-1">
                  {product.concentration && (
                    <p className="text-sm text-muted">
                      <span className="text-dark font-medium">Concentration:</span> {product.concentration}
                    </p>
                  )}
                  {product.size && (
                    <p className="text-sm text-muted">
                      <span className="text-dark font-medium">Size:</span> {product.size}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Gender */}
            {product.gender && (
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-dark uppercase tracking-wider mb-2">For</h3>
                <p className="text-sm text-muted capitalize">{product.gender}</p>
              </div>
            )}
          </div>

          {/* Add to Cart */}
          <div className="flex gap-3 mt-auto">
            <button
              onClick={() => product.inStock && addToCart(product)}
              disabled={!product.inStock}
              className={`flex-1 py-3 px-6 rounded-full font-semibold text-sm transition-all ${
                product.inStock
                  ? 'bg-dark text-white hover:bg-dark/80'
                  : 'bg-muted/20 text-muted cursor-not-allowed'
              }`}
            >
              {isInCart(product.id) ? '✓ Added to Cart' : product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>

          {/* Shipping Info */}
          <div className="mt-6 pt-6 border-t border-border">
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-gold mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <div>
                  <p className="font-semibold text-dark">Fast Delivery</p>
                  <p className="text-muted">Nationwide shipping</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-gold mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <p className="font-semibold text-dark">100% Authentic</p>
                  <p className="text-muted">Guaranteed original</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16 md:mt-24">
          <h2 className="font-serif text-2xl md:text-3xl text-dark mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {relatedProducts.map(item => (
              <Link key={item.id} href={`/product/${item.id}`} className="product-card group">
                <div className="relative bg-offwhite aspect-square overflow-hidden rounded-lg mb-2">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="product-image w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted/20">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>
                <p className="text-[10px] text-muted uppercase tracking-wider font-medium truncate">{item.brand}</p>
                <h3 className="text-xs md:text-sm font-semibold text-dark mt-0.5 leading-snug line-clamp-2">{item.name}</h3>
                <p className="text-xs md:text-sm font-semibold text-dark mt-1">{item.price}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

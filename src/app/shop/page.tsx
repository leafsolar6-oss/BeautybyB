'use client';

import { useProducts } from '@/hooks/useProducts';

export default function ShopPage() {
  const { products, loading } = useProducts();

  if (loading) {
    return (
      <div className="py-32 text-center">
        <div className="w-10 h-10 border-2 border-dark border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-muted">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-8 py-32 text-center">
      <h1 className="font-serif text-4xl text-dark mb-6">Shop</h1>
      <p className="text-lg text-muted mb-8">
        {products.length === 0 
          ? 'Products coming soon.' 
          : `${products.length} products available.`}
      </p>
    </div>
  );
}

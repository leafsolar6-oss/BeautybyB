'use client';

import Link from 'next/link';
import { useProducts } from '@/hooks/useProducts';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';

export default function HomePage() {
  const { products } = useProducts();
  const { addToCart } = useCart();

  const featured = products.filter((p) => p.bestseller).slice(0, 3);
  const newArrivals = products.filter((p) => p.newArrival).slice(0, 8);
  const allProducts = products.slice(0, 12);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-transparent z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541643600914-78b084683601?w=1920&h=1080&fit=crop)' }}
        />
        
        <div className="relative z-20 h-full flex items-center px-16">
          <div className="max-w-2xl">
            <h1 className="font-luxury text-6xl text-text mb-6 leading-tight">
              The Art of
              <br />
              <span className="gradient-gold">Dark Luxury</span>
            </h1>
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              Discover our exclusive collection of premium fragrances and skincare, 
              curated for those who appreciate the finest things in life.
            </p>
            <Link href="/shop" className="btn-luxury-filled inline-block">
              Explore Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {featured.length > 0 && (
        <section className="py-20 px-16">
          <div className="mb-12">
            <h2 className="font-luxury text-4xl text-text mb-4">Featured Collection</h2>
            <div className="w-24 h-px bg-gold" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((product) => (
              <div key={product.id} className="card-luxury rounded-lg overflow-hidden hover-luxury">
                <Link href={`/product/${product.id}`} className="block">
                  <div className="aspect-[3/4] bg-surface-light overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-gold uppercase tracking-widest mb-2">{product.brand}</p>
                    <h3 className="font-luxury text-xl text-text mb-3">{product.name}</h3>
                    <p className="text-text-muted text-sm mb-4 line-clamp-2">{product.notes}</p>
                    <p className="text-2xl font-semibold text-gold">{product.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* All Products Grid */}
      <section className="py-20 px-16 bg-surface">
        <div className="mb-12">
          <h2 className="font-luxury text-4xl text-text mb-4">Latest Arrivals</h2>
          <div className="w-24 h-px bg-gold mb-6" />
          <Link href="/shop" className="text-xs text-gold uppercase tracking-widest hover:text-gold-light transition-colors">
            View All Products →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-16">
        <div className="mb-12">
          <h2 className="font-luxury text-4xl text-text mb-4">Shop by Category</h2>
          <div className="w-24 h-px bg-gold" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Fragrances', href: '/shop?cat=perfume', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop' },
            { name: 'Skincare', href: '/shop?cat=skincare', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=600&fit=crop' },
            { name: 'Supplements', href: '/shop?cat=supplement', image: 'https://images.unsplash.com/photo-1584308666744-24d5c4df491f?w=600&h=600&fit=crop' },
            { name: 'Beauty & Glow', href: '/shop?cat=beauty-glow', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=600&fit=crop' },
          ].map((cat) => (
            <Link key={cat.name} href={cat.href} className="group">
              <div className="relative aspect-square bg-surface overflow-hidden rounded-lg border border-border hover:border-gold transition-all">
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-luxury text-2xl text-text group-hover:text-gold transition-colors">
                    {cat.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

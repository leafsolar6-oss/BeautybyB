import Link from 'next/link';
import { products } from '@/data/products';

export default function NewArrivalsSection() {
  const newArrivals = products.filter((p) => p.isNew).slice(0, 6);
  const remaining = products.filter((p) => !p.isNew).slice(0, 6 - newArrivals.length);
  const displayProducts = [...newArrivals, ...remaining].slice(0, 6);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-[#c5a572] text-xs tracking-wider uppercase font-medium mb-2">New Arrival</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1a1a1a]">
              New Arrival <span className="text-[#c5a572]">Products</span>
            </h2>
          </div>
          <p className="text-[#999] text-sm max-w-md">
            Discover our latest arrivals — carefully curated beauty products just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {/* Featured tall image */}
          <div className="relative rounded-xl overflow-hidden aspect-[3/4] md:aspect-auto md:row-span-2 bg-[#f5f5f5] group">
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=900&fit=crop&q=80"
              alt="New Arrival"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-white text-3xl font-heading font-bold">50% Off</span>
              <p className="text-white/80 text-sm mt-1">Limited time offer</p>
              <Link
                href="/shop"
                className="inline-block mt-3 px-4 py-2 bg-white text-[#1a3c34] text-xs font-bold rounded-full hover:bg-[#c5a572] hover:text-white transition-colors"
              >
                SHOP NOW
              </Link>
            </div>
          </div>

          {/* Product Grid */}
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
            {displayProducts.map((product) => (
              <div key={product.id} className="product-card bg-white rounded-xl overflow-hidden border border-[#e5e7eb]/60 group">
                <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
                  <img src={product.image} alt={product.name} className="product-image w-full h-full object-cover" />
                  {product.discount > 0 && (
                    <span className="absolute top-2 left-2 px-2 py-0.5 bg-[#1a3c34] text-white text-[9px] font-bold rounded-md">
                      {product.discount}% off
                    </span>
                  )}
                  <div className="absolute top-2 right-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-7 h-7 bg-white rounded-full shadow flex items-center justify-center hover:bg-[#c5a572] hover:text-white transition-colors">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                    </button>
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[10px] text-[#999]">{product.category === 'designer' ? 'Perfumes' : product.category === 'skincare' ? 'Skincare' : product.category === 'supplements' ? 'Supplements' : 'Gym'}</span>
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3 text-[#c5a572]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      <span className="text-[10px] font-medium">{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-xs text-[#1a1a1a] mb-1 truncate">{product.name}</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-[#1a3c34] text-xs">₦{product.price.toLocaleString()}</span>
                    <span className="text-[10px] text-[#999] line-through">₦{product.originalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

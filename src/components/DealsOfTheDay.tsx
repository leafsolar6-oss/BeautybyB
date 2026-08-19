import Link from 'next/link';
import { products } from '@/data/products';

export default function DealsOfTheDay() {
  const dealProducts = products.filter((p) => p.discount >= 50).slice(0, 4);

  return (
    <section className="py-12 md:py-16 bg-[#f8f9f8]">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-[#c5a572] text-xs tracking-wider uppercase font-medium mb-2">Today&apos;s Offers</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1a1a1a]">
            Deals <span className="text-[#c5a572]">of the Day</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {dealProducts.map((product) => (
            <div key={product.id} className="product-card bg-white rounded-xl overflow-hidden border border-[#e5e7eb]/60 group">
              <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
                <img src={product.image} alt={product.name} className="product-image w-full h-full object-cover" />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#1a3c34] text-white text-[10px] font-bold rounded-md">
                  {product.discount}% off
                </span>
                <div className="absolute top-3 right-3 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#c5a572] hover:text-white transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs text-[#999]">{product.category === 'designer' ? 'Perfumes' : product.category === 'skincare' ? 'Skincare' : product.category === 'supplements' ? 'Supplements' : 'Gym'}</span>
                <h3 className="font-semibold text-sm text-[#1a1a1a] mb-1 truncate">{product.name}</h3>
                <p className="text-xs text-[#999] mb-2 line-clamp-2">Premium quality product with amazing results</p>
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-bold text-[#1a3c34]">₦{product.price.toLocaleString()}</span>
                  <span className="text-xs text-[#999] line-through">₦{product.originalPrice.toLocaleString()}</span>
                </div>
                <Link
                  href={`/shop`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1a3c34] hover:text-[#c5a572] transition-colors"
                >
                  Shop Now
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

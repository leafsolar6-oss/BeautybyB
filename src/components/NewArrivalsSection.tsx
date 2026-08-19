import { products } from '@/data/products';

export default function NewArrivalsSection() {
  const newArrivals = products.filter(p => p.isNew).slice(0, 6);

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
          <div>
            <p className="text-[#888] text-sm mb-2">New Arrival</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1a1a1a]">
              <span className="text-[#b8956a]">New Arrival</span> Products
            </h2>
          </div>
          <p className="text-[#999] text-sm max-w-md mt-2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {/* Featured tall image */}
          <div className="relative rounded-xl overflow-hidden aspect-[3/5] md:aspect-auto md:row-span-2 bg-[#f9f9f9] group">
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&h=700&fit=crop&q=80"
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
              <p className="text-white text-3xl font-heading font-bold">50% Off</p>
              <p className="text-white/80 text-xs mt-1">10 JAN - 26 JAN</p>
              <a href="/shop" className="inline-block mt-2 text-white text-xs font-bold uppercase tracking-wider hover:text-[#b8956a] transition-colors">
                Shop Now
              </a>
            </div>
          </div>

          {/* Product Grid */}
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
            {newArrivals.map((product) => (
              <div key={product.id} className="product-card bg-white rounded-xl overflow-hidden border border-gray-100 group">
                <div className="relative aspect-square overflow-hidden bg-[#f9f9f9]">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-[#2d5016] text-white text-[9px] font-bold rounded-md">
                    {product.discount}% off
                  </span>
                  <div className="product-actions absolute top-2 right-2 flex flex-col gap-1">
                    <button className="w-6 h-6 bg-white rounded-full shadow flex items-center justify-center">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                    </button>
                    <button className="w-6 h-6 bg-white rounded-full shadow flex items-center justify-center">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/></svg>
                    </button>
                    <button className="w-6 h-6 bg-white rounded-full shadow flex items-center justify-center">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                    </button>
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[10px] text-[#999]">{product.category}</span>
                    <div className="flex items-center gap-1">
                      <svg className="w-2.5 h-2.5 text-[#b8956a]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      <span className="text-[10px] font-medium">{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-xs text-[#1a1a1a] mb-0.5 truncate">{product.name}</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-[#2d5016] text-xs">${product.price.toFixed(2)}</span>
                    <span className="text-[10px] text-[#999] line-through">${product.originalPrice.toFixed(2)}</span>
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

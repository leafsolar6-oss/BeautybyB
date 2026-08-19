import Link from 'next/link';

export default function PromoBanners() {
  return (
    <section className="py-8 md:py-12 bg-[#f8f9f8]">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Hair Care Deals */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a3c34] to-[#256046] text-white p-8 md:p-10">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-80">
              <img
                src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=500&fit=crop&q=80"
                alt="Hair Care"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 max-w-[200px]">
              <span className="inline-block px-3 py-1 bg-[#c5a572] text-[#1a3c34] text-xs font-bold rounded-full mb-3">Flat 25% Discount</span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">Special Hair<br/>Care Deals</h3>
              <p className="text-white/70 text-sm mb-4">Premium imported hair care products for radiant locks</p>
              <Link
                href="/shop?category=skincare"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#1a3c34] text-xs font-bold rounded-full hover:bg-[#c5a572] transition-colors"
              >
                Shop Now
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            </div>
          </div>

          {/* Skincare Deals */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a3c34] to-[#256046] text-white p-8 md:p-10">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-80">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=500&fit=crop&q=80"
                alt="Skincare"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 max-w-[200px]">
              <span className="inline-block px-3 py-1 bg-[#c5a572] text-[#1a3c34] text-xs font-bold rounded-full mb-3">Flat 20% Discount</span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">Save Big on<br/>Skincare</h3>
              <p className="text-white/70 text-sm mb-4">Glow with our curated skincare collection</p>
              <Link
                href="/shop?category=skincare"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#1a3c34] text-xs font-bold rounded-full hover:bg-[#c5a572] transition-colors"
              >
                Shop Now
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';

export default function PromoBanners() {
  return (
    <section className="py-6 md:py-10 bg-[#f5f5f5]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Left - Light */}
          <div className="relative rounded-2xl overflow-hidden bg-[#f8f5f0] p-6 md:p-8 min-h-[280px] flex items-center">
            <div className="relative z-10 max-w-[55%]">
              <span className="inline-block px-3 py-1 bg-[#b8956a]/20 text-[#b8956a] text-xs font-bold rounded-full mb-3">
                Flat 25% Discount
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-2 leading-tight">
                Special <span className="text-[#b8956a]">Hair</span><br/>Care Deals
              </h3>
              <p className="text-[#888] text-sm mb-4 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2d5016] text-white text-xs font-semibold rounded-full hover:bg-[#1e3a0e] transition-colors"
              >
                Shop Now
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-[50%]">
              <img
                src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500&h=500&fit=crop&q=80"
                alt="Hair Care"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Dark Green */}
          <div className="relative rounded-2xl overflow-hidden bg-[#2d5016] p-6 md:p-8 min-h-[280px] flex items-center">
            <div className="relative z-10 max-w-[55%]">
              <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full mb-3">
                Flat 20% Discount
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                Save Big on <span className="text-[#b8956a]">Skincare</span>
              </h3>
              <p className="text-white/70 text-sm mb-4 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#2d5016] text-xs font-semibold rounded-full hover:bg-[#b8956a] hover:text-white transition-colors"
              >
                Shop Now
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-[50%]">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=500&fit=crop&q=80"
                alt="Skincare"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

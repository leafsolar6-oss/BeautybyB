import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-white py-12 md:py-20 relative overflow-hidden">
      {/* Subtle sparkle decorations */}
      <div className="absolute top-10 left-10 text-[#b8956a]/20 text-2xl">✦</div>
      <div className="absolute top-20 right-1/4 text-[#b8956a]/15 text-lg">✧</div>
      <div className="absolute bottom-20 left-1/4 text-[#b8956a]/20 text-xl">✦</div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white shadow-sm rounded-full px-4 py-2 mb-6 border border-gray-100">
              <span className="text-sm">🌿</span>
              <span className="text-sm font-medium text-[#333]">Glow with Confidence, Shop with Trust</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-4 text-[#1a1a1a]">
              Your Ultimate <span className="text-[#b8956a] italic">Beauty</span><br />
              & Cosmetics Hub
            </h1>

            {/* Description */}
            <p className="text-[#888] text-base mb-8 max-w-md leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#2d5016] text-white text-sm font-semibold rounded-full hover:bg-[#1e3a0e] transition-colors"
              >
                Shop Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/shop"
                className="text-sm font-medium text-[#333] underline hover:text-[#2d5016] transition-colors"
              >
                View All Products
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Palm leaf decorations */}
            <div className="absolute -right-6 -top-6 w-40 h-40 opacity-30 pointer-events-none">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 200C100 200 50 130 80 90C110 50 170 30 170 30C170 30 150 90 100 120C50 150 100 200 100 200Z" fill="#2d5016"/>
                <path d="M100 200C100 200 150 130 120 90C90 50 30 30 30 30C30 30 50 90 100 120C150 150 100 200 100 200Z" fill="#2d5016" opacity="0.5"/>
              </svg>
            </div>

            {/* Main image container */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&h=1000&fit=crop&q=80"
                alt="Beauty"
                className="w-full h-full object-cover"
              />

              {/* 100% Authentic badge */}
              <div className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#2d5016] flex items-center justify-center shadow-lg">
                <div className="text-center leading-tight">
                  <span className="text-[#b8956a] text-[10px] font-bold block">100%</span>
                  <span className="text-white text-[7px] md:text-[8px] block uppercase tracking-wider">Authentic</span>
                  <span className="text-white text-[7px] md:text-[8px] block uppercase tracking-wider">Products</span>
                </div>
              </div>

              {/* Floating Fast Delivery badge */}
              <div className="absolute top-1/3 left-0 bg-white rounded-full px-3 py-2 shadow-md flex items-center gap-2 -translate-x-2">
                <span className="text-sm"></span>
                <span className="text-xs font-medium text-[#333]">Fast Delivery</span>
              </div>

              {/* Floating Secure Payment badge */}
              <div className="absolute bottom-1/4 right-0 bg-white rounded-full px-3 py-2 shadow-md flex items-center gap-2 translate-x-2">
                <span className="text-sm">🔒</span>
                <span className="text-xs font-medium text-[#333]">Secure Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

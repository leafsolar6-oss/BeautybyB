import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-[#f0f7f4] rounded-full px-4 py-2 mb-6">
              <span className="text-green-600">✨</span>
              <span className="text-sm font-medium text-[#1a3c34]">Glow with Confidence, Shop with Trust</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Your Ultimate <span className="text-[#c5a572] italic">Beauty</span><br />
              & Cosmetics Hub
            </h1>

            {/* Description */}
            <p className="text-[#666] text-base md:text-lg mb-8 max-w-md leading-relaxed">
              Discover authentic designer perfumes, premium skincare, and beauty supplements — delivered right to your door in Lagos and beyond.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1a3c34] text-white text-sm font-semibold rounded-full hover:bg-[#256046] transition-all duration-300 shadow-lg shadow-[#1a3c34]/20"
              >
                Shop Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-[#1a3c34] text-sm font-semibold rounded-full border-2 border-[#1a3c34]/20 hover:border-[#1a3c34] transition-all duration-300"
              >
                View All Products
              </Link>
            </div>

            {/* Floating Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white shadow-md rounded-full px-4 py-2.5">
                <div className="w-8 h-8 rounded-full bg-[#1a3c34] flex items-center justify-center">
                  <span className="text-white text-sm"></span>
                </div>
                <span className="text-xs font-medium text-[#333]">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2 bg-white shadow-md rounded-full px-4 py-2.5">
                <div className="w-8 h-8 rounded-full bg-[#c5a572] flex items-center justify-center">
                  <span className="text-white text-sm"></span>
                </div>
                <span className="text-xs font-medium text-[#333]">Secure Payment</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Decorative Palm Leaves */}
            <div className="absolute -right-4 -top-4 w-48 h-48 opacity-20">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 200C100 200 60 140 80 100C100 60 160 40 160 40C160 40 140 100 100 120C60 140 100 200 100 200Z" fill="#1a3c34"/>
                <path d="M100 200C100 200 140 140 120 100C100 60 40 40 40 40C40 40 60 100 100 120C140 140 100 200 100 200Z" fill="#1a3c34" opacity="0.5"/>
              </svg>
            </div>

            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-[#e8f0ec] to-[#f0e8dc]">
              <img
                src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&h=1000&fit=crop&q=80"
                alt="Beauty Products"
                className="w-full h-full object-cover"
              />
              {/* Green circular badge */}
              <div className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#1a3c34] flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <span className="text-[#c5a572] text-xs font-bold block">100%</span>
                  <span className="text-white text-[8px] md:text-[9px] block leading-tight">Authentic</span>
                  <span className="text-white text-[8px] md:text-[9px] block leading-tight">Products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutSection() {
  return (
    <section className="py-12 md:py-16 bg-[#f8f9f8]">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Photo Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="rounded-xl overflow-hidden aspect-square">
                  <img src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop&q=80" alt="Beauty" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden aspect-square">
                  <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop&q=80" alt="Skincare" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-3 pt-6">
                <div className="rounded-xl overflow-hidden aspect-square">
                  <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=400&fit=crop&q=80" alt="Beauty routine" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden aspect-square">
                  <img src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop&q=80" alt="Glowing skin" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            {/* Center Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#1a3c34] flex items-center justify-center shadow-xl z-10">
              <div className="text-center">
                <span className="text-[#c5a572] text-[10px] font-bold block">BEAUTY</span>
                <span className="text-white text-[8px] block">byB</span>
              </div>
            </div>
            {/* Decorative stars */}
            <div className="absolute -bottom-3 -left-3 text-[#c5a572] text-3xl opacity-60">✦</div>
          </div>

          {/* Content */}
          <div>
            <p className="text-[#c5a572] text-xs tracking-wider uppercase font-medium mb-2">About Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
              Your Journey to<br/><span className="text-[#c5a572]">Effortless Elegance</span>
            </h2>
            <p className="text-[#666] leading-relaxed mb-6">
              At BeautybyB, we bring you the finest collection of authentic designer perfumes, premium skincare, and beauty supplements. Based in Lagos, we&apos;re dedicated to helping you look and feel your best with products you can trust.
            </p>

            {/* Stats */}
            <div className="bg-[#1a3c34] rounded-xl p-5 mb-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-[#c5a572] text-2xl md:text-3xl font-bold font-heading">24+</p>
                  <p className="text-white/70 text-xs mt-1">Categories</p>
                </div>
                <div>
                  <p className="text-[#c5a572] text-2xl md:text-3xl font-bold font-heading">2500+</p>
                  <p className="text-white/70 text-xs mt-1">Products</p>
                </div>
                <div>
                  <p className="text-[#c5a572] text-2xl md:text-3xl font-bold font-heading">99%</p>
                  <p className="text-white/70 text-xs mt-1">Satisfied Customer</p>
                </div>
              </div>
            </div>

            {/* Signature */}
            <p className="font-script text-2xl text-[#c5a572]">BeautybyB</p>
          </div>
        </div>
      </div>
    </section>
  );
}

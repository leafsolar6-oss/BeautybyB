export default function AboutSection() {
  return (
    <section className="py-14 md:py-20 bg-[#f5f5f5]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Photo Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 max-w-md">
              <div className="space-y-3">
                <div className="rounded-tl-3xl rounded-tr-lg rounded-bl-lg rounded-br-lg overflow-hidden aspect-square border-t-4 border-l-4 border-[#2d5016]">
                  <img src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop&q=80" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden aspect-square">
                  <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop&q=80" alt="" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-3 pt-4">
                <div className="rounded-lg overflow-hidden aspect-square">
                  <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=400&fit=crop&q=80" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-br-3xl rounded-bl-lg rounded-tl-lg rounded-tr-lg overflow-hidden aspect-square border-b-4 border-r-4 border-[#b8956a]">
                  <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=400&fit=crop&q=80" alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            {/* Center Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#2d5016] flex items-center justify-center shadow-xl z-10 border-4 border-white">
              <div className="text-center leading-tight">
                <span className="text-[#b8956a] text-[9px] font-bold block">100%</span>
                <span className="text-white text-[7px] block uppercase">Authentic</span>
              </div>
            </div>
            {/* Decorative sparkles */}
            <div className="absolute -bottom-2 -left-2 text-[#2d5016] text-2xl">✦</div>
            <div className="absolute -bottom-4 left-4 text-[#b8956a] text-xl">✧</div>
          </div>

          {/* Content */}
          <div>
            <p className="text-[#888] text-sm mb-2">About Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4 leading-tight">
              Your Journey to<br/><span className="text-[#b8956a]">Effortless Elegance</span>
            </h2>
            <p className="text-[#888] leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>

            {/* Stats Bar */}
            <div className="bg-[#2d5016] rounded-xl p-5 mb-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-[#b8956a] text-2xl md:text-3xl font-bold font-heading">24+</p>
                  <p className="text-white/80 text-xs mt-1">Categories</p>
                </div>
                <div className="border-x border-white/20">
                  <p className="text-[#b8956a] text-2xl md:text-3xl font-bold font-heading">2500+</p>
                  <p className="text-white/80 text-xs mt-1">Products</p>
                </div>
                <div>
                  <p className="text-[#b8956a] text-2xl md:text-3xl font-bold font-heading">99%</p>
                  <p className="text-white/80 text-xs mt-1">Satisfied Customer</p>
                </div>
              </div>
            </div>

            {/* Signature */}
            <p className="font-script text-3xl text-[#333]">Jenny Alexander</p>
          </div>
        </div>
      </div>
    </section>
  );
}

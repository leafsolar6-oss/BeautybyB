export default function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl image-zoom">
                  <img
                    src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&h=800&fit=crop&q=90"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl image-zoom">
                  <img
                    src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=600&fit=crop&q=90"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="aspect-square overflow-hidden rounded-2xl image-zoom">
                  <img
                    src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=600&fit=crop&q=90"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-2xl image-zoom">
                  <img
                    src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=800&fit=crop&q=90"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gold flex items-center justify-center shadow-2xl animate-scale-in">
              <div className="text-center">
                <span className="block font-display text-3xl font-bold text-green-950">10+</span>
                <span className="block text-green-950/80 text-xs tracking-wider uppercase">Years</span>
                <span className="block text-green-950/80 text-xs tracking-wider uppercase">of Excellence</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="md:pl-8">
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">Our Story</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-green-950 mt-4 mb-8 leading-tight">
              Crafting Beauty<br />
              <em className="italic font-normal">Since 2014</em>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Born from a passion for authentic luxury beauty, BeautybyB brings together the world's finest skincare, fragrances, and cosmetics. Every product in our collection is carefully curated to meet the highest standards of quality and efficacy.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              We believe that true beauty comes from within, and our mission is to provide you with the tools to enhance your natural radiance. From clean, sustainable formulations to time-tested luxury ingredients, we offer a holistic approach to beauty that honors both you and the planet.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              {[
                { number: '2500+', label: 'Products' },
                { number: '50K+', label: 'Happy Clients' },
                { number: '99%', label: 'Satisfaction' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl md:text-4xl font-bold text-green-950 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Signature */}
            <div className="mt-12">
              <p className="font-display italic text-2xl text-green-950">BeautybyB</p>
              <p className="text-gray-500 text-sm mt-1">Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

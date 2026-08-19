import Link from 'next/link';

const featuredProducts = [
  {
    id: 1,
    name: 'Patron De Nuit',
    brand: 'Essenza Collection',
    tagline: 'Commanding & Mysterious',
    price: '₦132,000',
    notes: 'Oud, Leather, Black Amber',
    image: 'https://www.essenza.ng/cdn/shop/products/essenza_patron_de_nuit-min_1.jpg?v=1722428451&width=916',
  },
  {
    id: 5,
    name: 'Ambre Exclusif',
    brand: 'Essenza Collection',
    tagline: 'Warm & Opulent',
    price: '₦132,000',
    notes: 'Amber, Benzoin, Tonka Bean',
    image: 'https://www.essenza.ng/cdn/shop/products/essenza_exclusif-min_1.jpg?v=1722428383&width=916',
  },
  {
    id: 7,
    name: 'Gemme Sapphire',
    brand: 'Essenza Gemme',
    tagline: 'Royal & Captivating',
    price: '₦164,000',
    notes: 'Sapphire Accord, Iris, White Musk',
    image: 'https://www.essenza.ng/cdn/shop/products/DSC_8604-Editcopy.png?v=1663327991&width=4016',
  },
];

const testimonials = [
  {
    name: 'Adaeze O.',
    location: 'Lagos',
    text: "Essenza's Patron De Nuit is unlike anything I've ever worn. It lingers beautifully and I receive compliments every single time. Pure luxury.",
    rating: 5,
  },
  {
    name: 'Chidinma M.',
    location: 'Abuja',
    text: "Gemme Sapphire makes me feel like royalty. The sillage is incredible — people notice me before I even enter the room. Absolutely divine.",
    rating: 5,
  },
  {
    name: 'Tunde A.',
    location: 'Lagos',
    text: "Le Meilleur has become my signature scent. The quality rivals anything from Dubai or Paris. BeautybyB understands African luxury.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
        {/* Background blobs */}
        <div className="blob w-96 h-96 bg-rose/30 top-20 -left-20" />
        <div className="blob w-80 h-80 bg-gold-200/30 bottom-20 right-10" />
        <div className="blob w-64 h-64 bg-plum/20 top-1/2 left-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Decorative element */}
          <div className="mb-8 animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-xs tracking-widest uppercase text-deep/70">
              ✦ Luxury Fragrances ✦
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Where Scent
            <br />
            Becomes <span className="text-gradient italic">Art</span>
          </h1>

          <p className="font-sans text-lg md:text-xl text-deep/60 max-w-2xl mx-auto mb-10 animate-fade-in-up font-light" style={{ animationDelay: '0.4s' }}>
            Discover fragrances meticulously crafted from the world's rarest ingredients.
            Each bottle holds a story waiting to be told.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link
              href="/shop"
              className="btn-luxury px-8 py-3.5 rounded-full bg-gradient-to-r from-deep to-plum text-white text-sm tracking-widest uppercase hover:shadow-xl hover:shadow-deep/20 transition-all"
            >
              Explore Collection
            </Link>
            <Link
              href="/about"
              className="btn-luxury px-8 py-3.5 rounded-full glass text-sm tracking-widest uppercase text-deep/80 hover:text-deep transition-all"
            >
              Our Story
            </Link>
          </div>

          {/* Floating bottle image */}
          <div className="mt-16 animate-float">
            <div className="glass-card rounded-3xl p-8 max-w-md mx-auto">
              <img
                src="https://www.essenza.ng/cdn/shop/products/essenza_patron_de_nuit-min_1.jpg?v=1722428451&width=916"
                alt="Essenza Patron De Nuit — Featured Fragrance"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="mt-4 text-center">
                <p className="font-serif text-lg text-deep/80">Patron De Nuit</p>
                <p className="text-sm text-deep/50 mt-1">Essenza Collection — Our Signature Scent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED COLLECTION ===== */}
      <section className="relative py-24 px-6">
        <div className="blob w-72 h-72 bg-gold-200/20 top-0 right-0" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-xs tracking-widest uppercase text-gold-500">Essenza Collection</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light mt-3 text-deep">
              Signature <span className="italic text-gradient">Fragrances</span>
            </h2>
            <p className="mt-4 text-deep/50 max-w-xl mx-auto">
              Our house collection — masterpieces inspired by African excellence, crafted for those who seek the extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="glass-card rounded-3xl overflow-hidden group transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <p className="text-[10px] tracking-widest uppercase text-deep/40 mb-0.5">{product.brand}</p>
                  <p className="text-xs tracking-widest uppercase text-gold-500 mb-1">{product.tagline}</p>
                  <h3 className="font-serif text-2xl text-deep">{product.name}</h3>
                  <p className="text-sm text-deep/50 mt-2">{product.notes}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-serif text-xl text-deep">{product.price}</span>
                    <button className="btn-luxury px-4 py-2 rounded-full bg-gradient-to-r from-deep/10 to-plum/10 text-xs tracking-wider uppercase text-deep hover:from-deep hover:to-plum hover:text-white transition-all duration-300">
                      Add to Bag
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 font-sans text-sm tracking-widest uppercase text-deep/70 hover:text-gold-500 transition-colors"
            >
              View Full Collection
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SNIPPET ===== */}
      <section className="relative py-24 px-6">
        <div className="blob w-80 h-80 bg-rose/20 bottom-0 left-10" />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative">
              <div className="glass-card rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600&h=700&fit=crop"
                  alt="Perfume crafting"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-5 max-w-[200px]">
                <p className="font-serif text-3xl text-gradient font-semibold">15+</p>
                <p className="text-xs text-deep/60 mt-1">Years of Perfumery Excellence</p>
              </div>
            </div>

            {/* Text side */}
            <div>
              <span className="font-sans text-xs tracking-widest uppercase text-gold-500">Our Philosophy</span>
              <h2 className="font-serif text-4xl md:text-5xl font-light mt-3 text-deep leading-tight">
                Crafted with <span className="italic text-gradient">Passion</span>,<br />Worn with Confidence
              </h2>
            <p className="mt-6 text-deep/60 leading-relaxed">
              At BeautybyB, we believe fragrance is the most intimate form of self-expression.
              Inspired by African excellence and built on the cultural heritage of the Essenza brand,
              we bring you the finest perfumes from Nigeria and the world's most prestigious houses.
            </p>
            <p className="mt-4 text-deep/60 leading-relaxed">
              From our signature Essenza Collection to curated selections from Tom Ford, Xerjoff,
              Amouage, and Nishane — every fragrance we offer is a testament to uncompromising quality
              and timeless elegance.
            </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 font-sans text-sm tracking-widest uppercase text-deep/70 hover:text-gold-500 transition-colors"
              >
                Discover Our Story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="relative py-24 px-6">
        <div className="blob w-64 h-64 bg-plum/15 top-20 right-20" />

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-xs tracking-widest uppercase text-gold-500">Testimonials</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light mt-3 text-deep">
              Loved by <span className="italic text-gradient">Many</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card rounded-3xl p-8 transition-all duration-500"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-deep/70 text-sm leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-300 to-rose flex items-center justify-center">
                    <span className="font-serif text-sm text-white">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <span className="font-sans text-sm text-deep/80">{testimonial.name}</span>
                    <p className="text-[10px] text-deep/40">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-deep/5 to-plum/5" />
            <div className="relative z-10">
              <h2 className="font-serif text-3xl md:text-4xl font-light text-deep">
                Find Your <span className="italic text-gradient">Signature</span> Scent
              </h2>
              <p className="mt-4 text-deep/60 max-w-lg mx-auto">
                Take our fragrance quiz or explore the collection to discover the perfume that speaks to your soul.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <Link
                  href="/shop"
                  className="btn-luxury px-8 py-3.5 rounded-full bg-gradient-to-r from-deep to-plum text-white text-sm tracking-widest uppercase"
                >
                  Shop Collection
                </Link>
                <Link
                  href="/contact"
                  className="btn-luxury px-8 py-3.5 rounded-full glass text-sm tracking-widest uppercase text-deep/80"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

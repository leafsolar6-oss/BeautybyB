import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      {/* ===== HERO BANNER ===== */}
      <section className="relative bg-offwhite">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
            {/* Text side */}
            <div className="flex flex-col justify-center px-8 md:px-16 py-16">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-gold mb-4">New Season</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark leading-[1.1] font-normal">
                Discover your
                <br />
                <span className="italic">signature scent</span>
              </h1>
              <p className="text-sm text-muted mt-5 max-w-md leading-relaxed">
                Luxury fragrances from the world's most prestigious houses — delivered across Nigeria.
              </p>
              <div className="flex gap-3 mt-8">
                <Link
                  href="/shop"
                  className="btn-add max-w-[200px] text-center"
                >
                  Shop Now
                </Link>
                <Link
                  href="/about"
                  className="btn-outline"
                >
                  Our Story
                </Link>
              </div>
            </div>

            {/* Image side */}
            <div className="relative overflow-hidden bg-light min-h-[300px] lg:min-h-0">
              <img
                src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=900&fit=crop"
                alt="Luxury fragrance"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== BRAND STRIP ===== */}
      <div className="border-b border-border py-6">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {['Tom Ford', 'Xerjoff', 'Amouage', 'Nishane', 'Versace', 'Armani', 'Valentino'].map((brand) => (
            <span key={brand} className="text-[13px] font-medium text-muted/50 hover:text-dark transition-colors cursor-default tracking-wide">
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="py-14 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-dark">Bestsellers</h2>
              <p className="text-[12px] text-muted mt-1">Our most loved fragrances</p>
            </div>
            <Link href="/shop" className="text-[12px] font-semibold text-dark underline underline-offset-2 hover:no-underline transition-all">
              View All →
            </Link>
          </div>

          <div className="bg-offwhite py-16 text-center">
            <p className="text-muted text-sm">Products coming soon.</p>
            <Link href="/shop" className="btn-outline inline-block mt-4">Browse Shop</Link>
          </div>
        </div>
      </section>

      {/* ===== CATEGORY TILES ===== */}
      <section className="py-6 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Designer', desc: 'Tom Ford, Versace & more', image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&h=500&fit=crop', link: '/shop?cat=designer' },
              { title: 'Niche & Exclusive', desc: 'Xerjoff, Amouage, Nishane', image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600&h=500&fit=crop', link: '/shop?cat=niche' },
              { title: 'Perfume Oils', desc: 'Concentrated luxury', image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=500&fit=crop', link: '/shop?cat=perfume-oils' },
            ].map((cat) => (
              <Link key={cat.title} href={cat.link} className="category-tile relative h-[280px] md:h-[340px] block">
                <img src={cat.image} alt={cat.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="font-serif text-xl md:text-2xl">{cat.title}</h3>
                  <p className="text-[12px] mt-1 opacity-80">{cat.desc}</p>
                  <span className="text-[11px] font-semibold mt-3 inline-block underline underline-offset-2">Shop Now →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EDITORIAL BANNER ===== */}
      <section className="py-6 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-[320px] md:h-[400px] overflow-hidden bg-offwhite">
              <img
                src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600&h=700&fit=crop"
                alt="Fragrance collection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <span className="text-[10px] font-semibold tracking-widest uppercase opacity-80">Curated Selection</span>
                <h3 className="font-serif text-2xl md:text-3xl mt-2">The Collection</h3>
                <p className="text-[12px] mt-1 opacity-80 max-w-[200px]">Every scent tells a story. Find yours.</p>
                <Link href="/shop" className="text-[11px] font-semibold mt-3 inline-block underline underline-offset-2">
                  Discover →
                </Link>
              </div>
            </div>
            <div className="relative h-[320px] md:h-[400px] overflow-hidden bg-offwhite">
              <img
                src="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=600&h=700&fit=crop"
                alt="Fragrance consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <span className="text-[10px] font-semibold tracking-widest uppercase opacity-80">Personal Service</span>
                <h3 className="font-serif text-2xl md:text-3xl mt-2">Fragrance Consultation</h3>
                <p className="text-[12px] mt-1 opacity-80 max-w-[200px]">Let our experts help you find your perfect scent.</p>
                <Link href="/contact" className="text-[11px] font-semibold mt-3 inline-block underline underline-offset-2">
                  Book Now →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="py-14 px-4 md:px-8 bg-offwhite">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl text-dark">What our customers say</h2>
            <div className="flex items-center justify-center gap-1 mt-2">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Adaeze O.', city: 'Lagos', text: "The quality is unmatched. I receive compliments every time. Pure luxury." },
              { name: 'Chidinma M.', city: 'Abuja', text: "Beautiful fragrances and fast delivery. My new go-to store." },
              { name: 'Tunde A.', city: 'Lagos', text: "The consultation helped me find my perfect signature scent. Highly recommend." },
            ].map((review, i) => (
              <div key={i} className="bg-white p-6 border border-border">
                <div className="flex gap-0.5 mb-3">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[13px] text-text leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                <div className="mt-4 pt-3 border-t border-border">
                  <p className="text-[12px] font-semibold text-dark">{review.name}</p>
                  <p className="text-[11px] text-muted">{review.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FRAGRANCE DIAGNOSIS ===== */}
      <section className="py-14 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-offwhite p-8 md:p-14 text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-dark">Find your perfect fragrance</h2>
            <p className="text-[13px] text-muted mt-2 max-w-md mx-auto">
              Not sure where to start? Book a personal consultation with our fragrance experts and discover your signature scent.
            </p>
            <div className="flex justify-center gap-3 mt-6">
              <Link href="/contact" className="btn-add max-w-[220px] text-center">
                Book Consultation
              </Link>
              <Link href="/shop" className="btn-outline">
                Shop All
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

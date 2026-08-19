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
                From our signature Essenza Collection to Tom Ford, Xerjoff, and Amouage — luxury fragrances delivered across Nigeria.
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
                src="https://www.essenza.ng/cdn/shop/products/essenza_patron_de_nuit-min_1.jpg?v=1722428451&width=916"
                alt="Essenza Patron De Nuit"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== BRAND STRIP ===== */}
      <div className="border-b border-border py-6">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {['Essenza', 'Tom Ford', 'Xerjoff', 'Amouage', 'Nishane', 'Versace', 'Armani', 'Valentino'].map((brand) => (
            <span key={brand} className="text-[13px] font-medium text-muted/50 hover:text-dark transition-colors cursor-default tracking-wide">
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* ===== BESTSELLERS ===== */}
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
            {[
              { name: 'Patron De Nuit', brand: 'Essenza Collection', price: '₦132,000', notes: 'Oud, Leather, Black Amber', image: 'https://www.essenza.ng/cdn/shop/products/essenza_patron_de_nuit-min_1.jpg?v=1722428451&width=916', badge: 'best' },
              { name: 'Hacivat', brand: 'Nishane', price: '₦324,000', notes: 'Pineapple, Grapefruit, Oakmoss', image: 'https://www.essenza.ng/cdn/shop/files/Screenshot2025-03-11at16.18.29.png?v=1741963636&width=1149', badge: 'best' },
              { name: 'Ombré Leather', brand: 'Tom Ford', price: '₦258,000', notes: 'Leather, Cardamom, Jasmine', image: 'https://www.essenza.ng/cdn/shop/files/888066075138_50ML_1.jpg?v=1695373378&width=2000', badge: 'best' },
              { name: 'Erba Pura', brand: 'Xerjoff', price: '₦248,000', notes: 'Orange, Lemon, Amber, Musk', image: 'https://www.essenza.ng/cdn/shop/files/Vibe-ERBAPURA-eaudeparfum-100ml-flacon_8054320902584_1000x_7dbc675a-ec96-4fda-bd4a-d57ad579ad0d.webp?v=1757416315&width=1000', badge: 'best' },
            ].map((product, i) => (
              <div key={i} className="product-card group">
                <div className="relative bg-offwhite aspect-[3/4] overflow-hidden mb-3">
                  {product.badge === 'best' && (
                    <span className="badge badge-best absolute top-2 left-2 z-10">Bestseller</span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image w-full h-full object-cover"
                  />
                  <div className="quick-add absolute bottom-0 left-0 right-0 p-2">
                    <button className="btn-add text-center">Add</button>
                  </div>
                </div>
                <p className="text-[10px] text-muted uppercase tracking-wider font-medium">{product.brand}</p>
                <h3 className="text-[13px] font-semibold text-dark mt-0.5">{product.name}</h3>
                <p className="text-[11px] text-muted mt-0.5">{product.notes}</p>
                <p className="text-[13px] font-semibold text-dark mt-1.5">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CATEGORY TILES ===== */}
      <section className="py-6 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Essenza Collection', desc: 'Our signature line', image: 'https://www.essenza.ng/cdn/shop/products/essenza_le_perle-min.jpg?v=1722428396&width=916', link: '/shop?cat=essenza-collection' },
              { title: 'Designer Fragrances', desc: 'Tom Ford, Versace & more', image: 'https://www.essenza.ng/cdn/shop/files/888066075138_50ML_1.jpg?v=1695373378&width=2000', link: '/shop?cat=designer' },
              { title: 'Niche & Exclusive', desc: 'Xerjoff, Amouage, Nishane', image: 'https://www.essenza.ng/cdn/shop/files/0c820690-8354-41fa-a305-21b798e8eb62.jpg?v=1780389930&width=550', link: '/shop?cat=niche' },
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

      {/* ===== NEW ARRIVALS ===== */}
      <section className="py-14 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-dark">Just In</h2>
              <p className="text-[12px] text-muted mt-1">Fresh arrivals you'll love</p>
            </div>
            <Link href="/shop" className="text-[12px] font-semibold text-dark underline underline-offset-2 hover:no-underline transition-all">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
            {[
              { name: 'Uomo Born In Roma Intense', brand: 'Valentino', price: '₦215,000', notes: 'Ginger, Vanilla, Bourbon', image: 'https://www.essenza.ng/cdn/shop/files/0c820690-8354-41fa-a305-21b798e8eb62.jpg?v=1780389930&width=550', badge: 'new' },
              { name: 'Sequence Man', brand: 'Amouage', price: '₦687,000', notes: 'Elemi, Orris, Leather', image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=500&fit=crop', badge: 'new' },
              { name: 'Dylan Blush Pour Femme', brand: 'Versace', price: '₦214,000', notes: 'Pink Rose, Grapefruit, Musk', image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&h=500&fit=crop', badge: 'new' },
              { name: 'Oud Paradise', brand: 'Franck Olivier', price: '₦51,000', notes: 'Oud, Rose, Saffron', image: 'https://www.essenza.ng/cdn/shop/files/3516642515316_-_franck_olivier_-_franck_olivier_oud_paradise_edp_100_ml_-_100_ml_-fd.png?v=1776087321&width=750', badge: 'new' },
              { name: 'Stronger With You Intensely', brand: 'Emporio Armani', price: '₦225,000', notes: 'Cinnamon, Toffee, Vanilla', image: 'https://www.essenza.ng/cdn/shop/products/emporio_armani_stronger_with_you_intensely_edp_100ml-min.jpg?v=1722420684&width=916', badge: 'new' },
              { name: '1 Million Black', brand: 'Rabanne', price: '₦215,000', notes: 'Cinnamon, Leather, Patchouli', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop', badge: 'new' },
              { name: 'Paradigme Le Parfum', brand: 'Prada', price: '₦296,000', notes: 'Iris, Amber, Leather', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=500&fit=crop', badge: 'new' },
              { name: 'Perseveranza', brand: 'Xerjoff × Lamborghini', price: '₦615,000', notes: 'Bergamot, Saffron, Oud', image: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=400&h=500&fit=crop', badge: 'new' },
            ].map((product, i) => (
              <div key={i} className="product-card group">
                <div className="relative bg-offwhite aspect-[3/4] overflow-hidden mb-3">
                  {product.badge === 'new' && (
                    <span className="badge badge-new absolute top-2 left-2 z-10">New</span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image w-full h-full object-cover"
                  />
                  <div className="quick-add absolute bottom-0 left-0 right-0 p-2">
                    <button className="btn-add text-center">Add</button>
                  </div>
                </div>
                <p className="text-[10px] text-muted uppercase tracking-wider font-medium">{product.brand}</p>
                <h3 className="text-[13px] font-semibold text-dark mt-0.5">{product.name}</h3>
                <p className="text-[11px] text-muted mt-0.5">{product.notes}</p>
                <p className="text-[13px] font-semibold text-dark mt-1.5">{product.price}</p>
              </div>
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
                src="https://www.essenza.ng/cdn/shop/products/essenza_exclusif-min_1.jpg?v=1722428383&width=916"
                alt="Ambre Exclusif"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <span className="text-[10px] font-semibold tracking-widest uppercase opacity-80">Essenza Collection</span>
                <h3 className="font-serif text-2xl md:text-3xl mt-2">Ambre Exclusif</h3>
                <p className="text-[12px] mt-1 opacity-80 max-w-[200px]">Warm amber, benzoin & tonka bean — our most coveted scent.</p>
                <Link href="/shop" className="text-[11px] font-semibold mt-3 inline-block underline underline-offset-2">
                  Discover →
                </Link>
              </div>
            </div>
            <div className="relative h-[320px] md:h-[400px] overflow-hidden bg-offwhite">
              <img
                src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600&h=700&fit=crop"
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

      {/* ===== ESSENZA COLLECTION ===== */}
      <section className="py-14 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-dark">Essenza Collection</h2>
              <p className="text-[12px] text-muted mt-1">Our own signature line</p>
            </div>
            <Link href="/shop" className="text-[12px] font-semibold text-dark underline underline-offset-2 hover:no-underline transition-all">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8">
            {[
              { name: 'Patron De Nuit', price: '₦132,000', notes: 'Oud, Leather, Amber', image: 'https://www.essenza.ng/cdn/shop/products/essenza_patron_de_nuit-min_1.jpg?v=1722428451&width=916' },
              { name: 'La Perle', price: '₦132,000', notes: 'Pearl Accord, Jasmine', image: 'https://www.essenza.ng/cdn/shop/products/essenza_le_perle-min.jpg?v=1722428396&width=916' },
              { name: 'Ambre Exclusif', price: '₦132,000', notes: 'Amber, Benzoin, Tonka', image: 'https://www.essenza.ng/cdn/shop/products/essenza_exclusif-min_1.jpg?v=1722428383&width=916' },
              { name: 'Le Meilleur', price: '₦132,000', notes: 'Bergamot, Vetiver', image: 'https://www.essenza.ng/cdn/shop/products/le_meilleur-min.jpg?v=1722428417&width=916' },
              { name: 'Gemme Sapphire', price: '₦164,000', notes: 'Iris, White Musk', image: 'https://www.essenza.ng/cdn/shop/products/DSC_8604-Editcopy.png?v=1663327991&width=4016' },
            ].map((product, i) => (
              <div key={i} className="product-card group">
                <div className="relative bg-offwhite aspect-[3/4] overflow-hidden mb-3">
                  <img src={product.image} alt={product.name} className="product-image w-full h-full object-cover" />
                  <div className="quick-add absolute bottom-0 left-0 right-0 p-2">
                    <button className="btn-add text-center">Add</button>
                  </div>
                </div>
                <h3 className="text-[13px] font-semibold text-dark">{product.name}</h3>
                <p className="text-[11px] text-muted mt-0.5">{product.notes}</p>
                <p className="text-[13px] font-semibold text-dark mt-1.5">{product.price}</p>
              </div>
            ))}
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
              <span className="text-[12px] text-muted ml-2">Based on 2,400+ reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Adaeze O.', city: 'Lagos', text: "Patron De Nuit is unlike anything I've worn. I receive compliments every time. Pure luxury." },
              { name: 'Chidinma M.', city: 'Abuja', text: "The Gemme collection is stunning. Sapphire makes me feel like royalty — incredible sillage." },
              { name: 'Tunde A.', city: 'Lagos', text: "Le Meilleur has become my signature. Quality rivals anything from Dubai or Paris." },
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

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-16 px-6">
      {/* Background blobs */}
      <div className="blob w-96 h-96 bg-plum/15 top-20 right-0" />
      <div className="blob w-72 h-72 bg-rose/20 bottom-40 left-10" />

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <span className="font-sans text-xs tracking-widest uppercase text-gold-500">Our Story</span>
        <h1 className="font-serif text-4xl md:text-6xl font-light mt-3 text-deep">
          The Art of <span className="italic text-gradient">BeautybyB</span>
        </h1>
        <p className="mt-6 text-deep/60 text-lg max-w-2xl mx-auto leading-relaxed">
          Born from a passion for the extraordinary, BeautybyB is a celebration of fragrance as the most
          intimate form of self-expression.
        </p>
      </div>

      {/* Origin Story */}
      <section className="max-w-6xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="glass-card rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600&h=700&fit=crop"
                alt="The founding of BeautybyB"
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-5 max-w-[180px]">
              <p className="font-serif text-3xl text-gradient font-semibold">2011</p>
              <p className="text-xs text-deep/60 mt-1">The Year We Began</p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-deep leading-tight">
              A Dream Born in<br />
              <span className="italic text-gradient">Grasse, France</span>
            </h2>
            <div className="mt-6 space-y-4 text-deep/60 leading-relaxed">
              <p>
                BeautybyB was born in 2011, in the perfumery capital of the world. Our founder, after years
                of studying under master perfumers in Grasse, envisioned a brand that would bridge the
                time-honored traditions of French perfumery with the vibrant energy of modern self-expression.
              </p>
              <p>
                What began as a small atelier crafting bespoke fragrances for a select clientele has grown
                into a globally recognized house — yet our philosophy remains unchanged: every scent must
                be a work of art.
              </p>
              <p>
                We source only the finest raw materials — Bulgarian rose absolute, Indian sandalwood,
                Haitian vetiver, and rare oud from sustainably managed forests. Each ingredient is
                chosen not just for its scent, but for the story it tells.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto mb-24">
        <div className="text-center mb-16">
          <span className="font-sans text-xs tracking-widest uppercase text-gold-500">What We Stand For</span>
          <h2 className="font-serif text-4xl font-light mt-3 text-deep">
            Our <span className="italic text-gradient">Values</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '✦',
              title: 'Artisan Craftsmanship',
              description:
                'Each fragrance is composed by hand, blending rare ingredients through a meticulous process that can take months to perfect. We never rush creation.',
            },
            {
              icon: '◈',
              title: 'Sustainable Luxury',
              description:
                'We believe true luxury leaves no trace. Our bottles are refillable, our packaging is recyclable, and our ingredients are ethically sourced.',
            },
            {
              icon: '❋',
              title: 'Inclusive Beauty',
              description:
                'Fragrance has no gender, no boundaries. Our collections are designed to be worn by anyone who appreciates the art of scent.',
            },
          ].map((value) => (
            <div key={value.title} className="glass-card rounded-3xl p-8 text-center transition-all duration-500">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-200/40 to-rose/20 flex items-center justify-center mx-auto mb-5">
                <span className="text-2xl text-gold-500">{value.icon}</span>
              </div>
              <h3 className="font-serif text-xl text-deep mb-3">{value.title}</h3>
              <p className="text-sm text-deep/60 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-6xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <span className="font-sans text-xs tracking-widest uppercase text-gold-500">The Process</span>
            <h2 className="font-serif text-3xl md:text-4xl font-light mt-3 text-deep leading-tight">
              From <span className="italic text-gradient">Essence</span> to Elegance
            </h2>
            <div className="mt-8 space-y-6">
              {[
                { step: '01', title: 'Inspiration', desc: 'Each fragrance begins with a story — a place, a memory, an emotion.' },
                { step: '02', title: 'Composition', desc: 'Our perfumers craft up to 200 trials before a scent is finalized.' },
                { step: '03', title: 'Maturation', desc: 'The blend rests for weeks, allowing the notes to harmonize perfectly.' },
                { step: '04', title: 'Bottling', desc: 'Hand-finished in our atelier, each bottle is inspected for perfection.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <span className="font-serif text-2xl text-gradient font-semibold min-w-[40px]">{item.step}</span>
                  <div>
                    <h4 className="font-serif text-lg text-deep">{item.title}</h4>
                    <p className="text-sm text-deep/50 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="glass-card rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=600&h=700&fit=crop"
                alt="Perfume crafting process"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto text-center">
        <div className="glass-card rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-deep/5 to-plum/5" />
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-deep">
              Experience <span className="italic text-gradient">BeautybyB</span>
            </h2>
            <p className="mt-4 text-deep/60 max-w-lg mx-auto">
              Discover our collection or reach out to schedule a private fragrance consultation.
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
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

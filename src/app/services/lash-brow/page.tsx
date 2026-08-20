import Link from 'next/link';

const services = [
  {
    id: 'classic-lashes',
    name: 'Classic Lashes',
    duration: '2 hours',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1583001809873-a128495da465?w=800&h=600&fit=crop&q=90',
    description: 'Natural-looking lashes applied one by one for a subtle, elegant enhancement. Perfect for everyday wear.',
    features: ['1:1 lash application', 'Natural look', '4-6 weeks retention', 'Patch test included'],
  },
  {
    id: 'hybrid-lashes',
    name: 'Hybrid Lashes',
    duration: '2.5 hours',
    price: 20000,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&h=600&fit=crop&q=90',
    description: 'A mix of classic and volume lashes for a fuller, textured look that bridges natural and dramatic.',
    features: ['Mix of classic & volume', 'Textured finish', '5-7 weeks retention', 'Custom mapping'],
  },
  {
    id: 'volume-lashes',
    name: 'Volume Lashes',
    duration: '3 hours',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop&q=90',
    description: 'Multiple ultra-fine lashes fanned and applied to each natural lash for a bold, glamorous effect.',
    features: ['2-6D volume fans', 'Dramatic look', '5-8 weeks retention', 'Premium mink/silk'],
  },
  {
    id: 'lash-refill',
    name: 'Lash Refill',
    duration: '1 hour',
    price: 8000,
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=600&fit=crop&q=90',
    description: 'Refresh your existing lash set by filling in gaps from natural lash shedding. Keeps your lashes looking full.',
    features: ['2-3 week maintenance', 'Gap filling', 'Lash cleaning', 'Style refresh'],
  },
  {
    id: 'brow-tint',
    name: 'Brow Tint',
    duration: '45 mins',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop&q=90',
    description: 'Semi-permanent tint to darken and define your brows, giving them a fuller, more polished appearance.',
    features: ['Custom color match', 'Lasts 4-6 weeks', 'Shape consultation', 'Aftercare guide'],
  },
  {
    id: 'brow-lamination',
    name: 'Brow Lamination',
    duration: '1 hour',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop&q=90',
    description: 'Chemical straightening treatment that sets brow hairs in place for a fuller, brushed-up look.',
    features: ['6-8 weeks effect', 'Fuller appearance', 'Tint included', 'Nourishing serum'],
  },
  {
    id: 'other-brow-services',
    name: 'Other Brow Services',
    duration: 'Varies',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop&q=90',
    description: 'Brow shaping, waxing, threading, and custom brow design tailored to your face shape and preferences.',
    features: ['Brow waxing', 'Threading', 'Shape design', 'Maintenance plan'],
  },
];

export default function LashBrowPage() {
  return (
    <div className="min-h-screen bg-cream pt-24">
      {/* Hero Banner */}
      <section className="bg-green-950 py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 text-center">
          <span className="text-gold text-xs md:text-sm tracking-[0.3em] uppercase font-bold">BeautybyB Studio</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
            Lash & Brow <em className="italic font-normal">Booking</em>
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
            Professional lash extensions and brow services by our certified beauty artists. Book your appointment today.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <div key={service.id} className="product-card group bg-white rounded-lg overflow-hidden border border-gray-100">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-green-950 text-sm font-bold rounded-sm">
                    {service.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-green-950 mb-3 group-hover:text-gold transition-colors">{service.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-xs text-gray-500">Starting from</span>
                      <p className="text-green-950 font-bold text-xl">₦{service.price.toLocaleString()}</p>
                    </div>
                    <a
                      href="https://wa.me/2348012345678?text=Hello! I'd like to book ${service.name}"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-green-950 text-white text-sm font-bold tracking-wide rounded-sm hover:bg-gold hover:text-green-950 transition-all duration-300"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-gold text-xs md:text-sm tracking-[0.3em] uppercase font-bold">Booking Info</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-green-950 mt-4 mb-6">
              What to <em className="italic font-normal">Expect</em>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: '', title: 'Book Ahead', desc: 'Reserve your slot at least 24 hours in advance for the best availability.' },
                { icon: '🕐', title: 'Arrive On Time', desc: 'Please arrive 10 minutes early to complete your consultation form.' },
                { icon: '💳', title: 'Secure Payment', desc: 'Pay via bank transfer, card, or WhatsApp payment. Receipt provided.' },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-green-950 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

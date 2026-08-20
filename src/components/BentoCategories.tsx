import Link from 'next/link';

const categories = [
  {
    name: 'Designer Perfumes',
    description: 'Luxury fragrances & scents',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop&q=90',
    size: 'large',
  },
  {
    name: 'Imported Skincare',
    description: 'Premium serums & creams',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop&q=90',
    size: 'medium',
  },
  {
    name: 'Skincare Supplements',
    description: 'Beauty from within',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c4df491f?w=600&h=600&fit=crop&q=90',
    size: 'medium',
  },
  {
    name: 'Gym Supplements',
    description: 'Performance & recovery',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop&q=90',
    size: 'small',
  },
  {
    name: 'Lash & Brow Booking',
    description: 'Book your appointment',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=600&fit=crop&q=90',
    size: 'small',
  },
];

// Map category display names to their filter IDs (used in homepage ProductShowcase section)
const CATEGORY_FILTER_MAP: Record<string, string> = {
  'Designer Perfumes': 'designer',
  'Imported Skincare': 'skincare',
  'Skincare Supplements': 'supplements',
  'Gym Supplements': 'gym',
};

export default function BentoCategories() {
  return (
    <section id="categories" className="py-24 md:py-32 bg-cream">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 px-4">
          <span className="text-gold text-xs md:text-sm tracking-[0.3em] uppercase font-bold">Curated For You</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-green-950 mt-4 mb-6 leading-tight">
            Shop by <em className="italic font-normal">Category</em>
          </h2>
          <p className="text-gray-700 text-base md:text-lg font-medium leading-relaxed max-w-3xl mx-auto px-4">
            Explore our meticulously curated collections, each product selected for quality, efficacy, and luxury.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[350px]">
          {categories.map((cat) => {
            const href =
              cat.name === 'Lash & Brow Booking'
                ? '/services/lash-brow'
                : `/?filter=${CATEGORY_FILTER_MAP[cat.name]}#bestsellers`;

            return (
            <Link
              key={cat.name}
              href={href}
              className={`group relative overflow-hidden rounded-lg image-zoom ${
                cat.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''
              } ${cat.size === 'medium' ? 'md:col-span-1 md:row-span-1' : ''}
              ${cat.size === 'small' ? 'md:col-span-1 md:row-span-1' : ''}`}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 via-green-950/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-12">
                <div className="transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-2 md:mb-3 leading-tight">
                    {cat.name}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base font-medium leading-relaxed">
                    {cat.description}
                  </p>
                  <div className="mt-4 md:mt-6 inline-flex items-center gap-2 text-gold text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Explore
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

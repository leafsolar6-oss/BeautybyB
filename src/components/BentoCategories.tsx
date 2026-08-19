import Link from 'next/link';

const categories = [
  {
    name: 'Skincare',
    description: 'Luxury serums & moisturizers',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=800&fit=crop&q=90',
    count: 52,
    size: 'large',
  },
  {
    name: 'Fragrances',
    description: 'Signature scents',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop&q=90',
    count: 27,
    size: 'medium',
  },
  {
    name: 'Makeup',
    description: 'Professional cosmetics',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop&q=90',
    count: 48,
    size: 'medium',
  },
  {
    name: 'Hair Care',
    description: 'Premium treatments',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=600&fit=crop&q=90',
    count: 86,
    size: 'small',
  },
  {
    name: 'Body Care',
    description: 'Nourishing essentials',
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4ee3313?w=600&h=600&fit=crop&q=90',
    count: 64,
    size: 'small',
  },
];

export default function BentoCategories() {
  return (
    <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">Curated For You</span>
          <h2 className="font-display text-4xl md:text-6xl font-light text-green-950 mt-4 mb-6">
            Shop by <em className="italic font-normal">Category</em>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our meticulously curated collections, each product selected for quality, efficacy, and luxury.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[350px]">
          {categories.map((cat, i) => (
            <Link
              key={cat.name}
              href={`/shop?category=${cat.name.toLowerCase()}`}
              className={`group relative overflow-hidden rounded-2xl image-zoom ${
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
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <div className="transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                  <span className="text-gold text-sm tracking-wider uppercase mb-2 block">
                    {cat.count} Products
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl font-light text-white mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-white/70 text-sm md:text-base">
                    {cat.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Explore
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

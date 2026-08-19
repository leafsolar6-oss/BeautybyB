const images = [
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop&q=90',
  'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop&q=90',
  'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=400&fit=crop&q=90',
  'https://images.unsplash.com/photo-1570194065650-d99fb4ee3313?w=400&h=400&fit=crop&q=90',
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=400&fit=crop&q=90',
  'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&q=90',
];

export default function InstagramFeed() {
  return (
    <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
          {/* Header */}
        <div className="text-center mb-12">
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">Follow Us</span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-green-950 mt-4 mb-4">
            @beautybyb on <em className="italic font-normal">Instagram</em>
          </h2>
          <p className="text-gray-600">Share your beauty moments with #BeautybyB</p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {images.map((img, i) => (
            <a
              key={i}
              href="https://instagram.com/beauty_byb.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl image-zoom"
            >
              <img
                src={img}
                alt={`Instagram ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-green-950/0 group-hover:bg-green-950/60 transition-all duration-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const instagramImages = [
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1570194065650-d99fb4ee3313?w=400&h=400&fit=crop&q=80',
];

export default function InstagramSection() {
  return (
    <section className="py-12 md:py-16 bg-[#f8f9f8]">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-[#c5a572] text-xs tracking-wider uppercase font-medium mb-2">Follow Us</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1a1a1a]">
            Follow Us On <span className="text-[#c5a572]">Instagram</span>
          </h2>
          <a href="https://www.instagram.com/beauty_byb.ng" target="_blank" rel="noopener noreferrer" className="text-sm text-[#c5a572] hover:text-[#1a3c34] transition-colors mt-2 inline-block">
            @beauty_byb.ng
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {/* Center large image on desktop */}
          <div className="md:col-span-2 md:row-span-2 rounded-xl overflow-hidden">
            <a href="https://www.instagram.com/beauty_byb.ng" target="_blank" rel="noopener noreferrer" className="block group">
              <img
                src={instagramImages[2]}
                alt="Instagram"
                className="w-full h-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </a>
          </div>
          {instagramImages.filter((_, i) => i !== 2).map((img, i) => (
            <div key={i} className="rounded-xl overflow-hidden">
              <a href="https://www.instagram.com/beauty_byb.ng" target="_blank" rel="noopener noreferrer" className="block group">
                <img
                  src={img}
                  alt="Instagram post"
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

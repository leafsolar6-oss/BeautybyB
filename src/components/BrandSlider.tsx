'use client';

import { useEffect, useRef } from 'react';

const brands = [
  { name: 'Amouage', logo: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop' },
  { name: 'Dior', logo: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=200&h=200&fit=crop' },
  { name: 'Zara', logo: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=200&h=200&fit=crop' },
  { name: 'Armani', logo: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=200&h=200&fit=crop' },
  { name: 'Louis Vuitton', logo: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=200&h=200&fit=crop' },
  { name: "Victoria's Secret", logo: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=200&h=200&fit=crop' },
  { name: 'Paco Rabanne', logo: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=200&h=200&fit=crop' },
  { name: 'YSL', logo: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=200&h=200&fit=crop' },
];

export default function BrandSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5;

    const animate = () => {
      if (scrollContainer) {
        scrollPos += speed;
        if (scrollPos >= scrollContainer.scrollWidth / 2) {
          scrollPos = 0;
        }
        scrollContainer.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-offwhite overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 mb-8">
        <h2 className="font-serif text-2xl md:text-3xl text-dark text-center">
          PROUD PARTNERS OF LEADING BRANDS
        </h2>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide px-8 md:px-16"
        style={{ scrollBehavior: 'auto' }}
      >
        {/* Duplicate brands for seamless loop */}
        {[...brands, ...brands].map((brand, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-32 md:w-40"
          >
            <div className="aspect-square bg-white rounded-lg shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow">
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <p className="text-center text-sm font-medium text-dark mt-2">
              {brand.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';

const allProducts = [
  {
    id: 1,
    name: 'Noir Élégance',
    tagline: 'Mysterious & Bold',
    price: 185,
    category: 'eau-de-parfum',
    notes: 'Oud, Black Rose, Amber',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop',
    bestseller: true,
  },
  {
    id: 2,
    name: 'Rose Éternelle',
    tagline: 'Timeless & Romantic',
    price: 210,
    category: 'eau-de-parfum',
    notes: 'Damask Rose, Peony, Musk',
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400&h=500&fit=crop',
    bestseller: true,
  },
  {
    id: 3,
    name: "Soleil d'Or",
    tagline: 'Radiant & Warm',
    price: 195,
    category: 'eau-de-parfum',
    notes: 'Bergamot, Jasmine, Sandalwood',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=500&fit=crop',
    bestseller: true,
  },
  {
    id: 4,
    name: 'Velvet Oud',
    tagline: 'Deep & Enveloping',
    price: 245,
    category: 'extrait',
    notes: 'Oud, Vanilla, Saffron',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=500&fit=crop',
    bestseller: false,
  },
  {
    id: 5,
    name: 'Fleur de Minuit',
    tagline: 'Floral & Ethereal',
    price: 175,
    category: 'eau-de-parfum',
    notes: 'Tuberose, Iris, White Musk',
    image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&h=500&fit=crop',
    bestseller: false,
  },
  {
    id: 6,
    name: 'Ambre Royal',
    tagline: 'Opulent & Warm',
    price: 225,
    category: 'extrait',
    notes: 'Amber, Benzoin, Tonka Bean',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=500&fit=crop',
    bestseller: false,
  },
  {
    id: 7,
    name: 'Brise Marine',
    tagline: 'Fresh & Aquatic',
    price: 165,
    category: 'eau-de-toilette',
    notes: 'Sea Salt, Neroli, Driftwood',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=500&fit=crop',
    bestseller: false,
  },
  {
    id: 8,
    name: 'Nuit Étoilée',
    tagline: 'Celestial & Dreamy',
    price: 235,
    category: 'extrait',
    notes: 'Violet, Incense, Cashmere Wood',
    image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=500&fit=crop',
    bestseller: false,
  },
];

const categories = [
  { id: 'all', label: 'All Fragrances' },
  { id: 'eau-de-parfum', label: 'Eau de Parfum' },
  { id: 'extrait', label: 'Extrait de Parfum' },
  { id: 'eau-de-toilette', label: 'Eau de Toilette' },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts =
    activeCategory === 'all'
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-32 pb-16 px-6">
      {/* Background blobs */}
      <div className="blob w-96 h-96 bg-rose/20 top-10 -left-20" />
      <div className="blob w-72 h-72 bg-gold-200/20 bottom-20 right-10" />

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="font-sans text-xs tracking-widest uppercase text-gold-500">The Collection</span>
        <h1 className="font-serif text-4xl md:text-6xl font-light mt-3 text-deep">
          Our <span className="italic text-gradient">Fragrances</span>
        </h1>
        <p className="mt-4 text-deep/50 max-w-xl mx-auto">
          Explore our complete range of handcrafted luxury perfumes. Each scent is a journey through the world's most exquisite ingredients.
        </p>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs tracking-widest uppercase transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-deep to-plum text-white shadow-lg shadow-deep/20'
                  : 'glass text-deep/70 hover:text-deep'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="glass-card rounded-3xl overflow-hidden group transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {product.bestseller && (
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gold-400/90 text-white text-[10px] tracking-widest uppercase">
                    Bestseller
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-5">
                <p className="text-[10px] tracking-widest uppercase text-gold-500 mb-1">{product.tagline}</p>
                <h3 className="font-serif text-xl text-deep">{product.name}</h3>
                <p className="text-xs text-deep/50 mt-1.5">{product.notes}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-serif text-lg text-deep">${product.price}</span>
                  <button className="btn-luxury px-3 py-1.5 rounded-full bg-gradient-to-r from-deep/10 to-plum/10 text-[10px] tracking-wider uppercase text-deep hover:from-deep hover:to-plum hover:text-white transition-all duration-300">
                    Add to Bag
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <div className="glass-card rounded-3xl p-10">
          <h3 className="font-serif text-2xl md:text-3xl font-light text-deep">
            Can't Decide? Let Us Help
          </h3>
          <p className="mt-3 text-deep/50 text-sm max-w-md mx-auto">
            Book a personalized fragrance consultation with our experts and find your perfect match.
          </p>
          <Link
            href="/contact"
            className="inline-flex btn-luxury px-8 py-3 rounded-full bg-gradient-to-r from-deep to-plum text-white text-xs tracking-widest uppercase mt-6"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { useState } from 'react';

interface CategoryPopupProps {
  title: string;
  description: string;
  image: string;
  link: string;
  buttonText: string;
}

export default function CategoryPopup({ title, description, image, link, buttonText }: CategoryPopupProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={link}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-offwhite aspect-square">
        {/* Image */}
        <img 
          src={image} 
          alt={title}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-90'
        }`} />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <h3 className="font-serif text-3xl md:text-4xl text-white mb-3">
            {title}
          </h3>
          <p className="text-base text-white/90 mb-6 leading-relaxed">
            {description}
          </p>
          <button className={`inline-block px-6 py-3 bg-white text-dark text-base font-semibold rounded-full transition-all ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-90'
          }`}>
            {buttonText}
          </button>
        </div>
      </div>
    </Link>
  );
}

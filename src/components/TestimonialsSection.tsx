'use client';

import { useState } from 'react';

const testimonials = [
  { name: 'Bessie Cooper', role: 'Happy Customer', title: "The Best Thing I've Used for My Skin!", text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.', rating: 5.0, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&q=80' },
  { name: 'Sarah Johnson', role: 'Beauty Enthusiast', title: 'Authentic Products, Fast Delivery', text: 'I was worried about buying products online but BeautybyB delivered exactly as promised. The quality is amazing and packaging was perfect.', rating: 5.0, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80' },
  { name: 'Adaeze Nwankwo', role: 'Loyal Customer', title: 'My Go-To for Skincare', text: 'The imported skincare products are top-notch. I love how they curate only the best products. Customer service is also excellent.', rating: 4.9, avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&q=80' },
  { name: 'Chioma Okafor', role: 'Verified Buyer', title: 'Best Shopping Experience', text: 'The variety of products is unmatched. I found my favorite items at unbeatable prices. Delivery was super fast to Lagos.', rating: 5.0, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&q=80' },
  { name: 'Funke Adeyemi', role: 'Regular Buyer', title: 'Great Quality Products', text: 'I order from BeautybyB every month. The quality is consistent, prices are fair, and the delivery is always on time. Five stars!', rating: 4.8, avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&q=80' },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="py-14 md:py-20 bg-[#f5f5f5]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <p className="text-[#888] text-sm mb-2">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1a1a1a]">
            Testimonials from <span className="text-[#b8956a]">Our Loyal Customers</span>
          </h2>
        </div>

        {/* Avatars */}
        <div className="flex justify-center gap-3 mb-8">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(i)}
              className={`w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden transition-all duration-300 ${
                i === active ? 'ring-2 ring-[#2d5016] ring-offset-2 scale-110' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto text-center relative">
          <button
            onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-[#b8956a] text-white flex items-center justify-center hover:bg-[#2d5016] transition-colors shadow-lg"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button
            onClick={() => setActive((active + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-[#2d5016] text-white flex items-center justify-center hover:bg-[#b8956a] transition-colors shadow-lg"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
          </button>

          <h3 className="font-heading text-xl md:text-2xl font-bold text-[#1a1a1a] mb-3">{current.title}</h3>
          <p className="text-[#666] leading-relaxed mb-4">{current.text}</p>

          <div className="flex items-center justify-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-4 h-4 text-[#b8956a]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
            <span className="text-sm font-medium text-[#333] ml-1">{current.rating}</span>
          </div>
          <p className="font-semibold text-[#1a1a1a]">{current.name}</p>
          <p className="text-xs text-[#999]">{current.role}</p>
        </div>
      </div>
    </section>
  );
}

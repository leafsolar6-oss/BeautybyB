'use client';

import { useState } from 'react';

const testimonials = [
  {
    name: 'Alexandra Chen',
    role: 'Beauty Editor, Vogue',
    text: 'BeautybyB has redefined luxury skincare for me. Their curated selection is unmatched, and the quality of every product I\'ve tried has exceeded expectations. This is where discerning beauty lovers shop.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&q=90',
  },
  {
    name: 'Sofia Rodriguez',
    role: 'Loyal Client',
    text: 'I\'ve been shopping with BeautybyB for three years now. The personalized service, authentic products, and attention to detail make every purchase feel special. They truly understand luxury beauty.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=90',
  },
  {
    name: 'Emma Thompson',
    role: 'Dermatologist',
    text: 'As a skincare professional, I\'m extremely selective about what I recommend. BeautybyB\'s commitment to clean, effective formulations aligns perfectly with my standards for patient care.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&q=90',
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
          {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">Testimonials</span>
          <h2 className="font-display text-4xl md:text-6xl font-light text-green-950 mt-4">
            Words from Our <em className="italic font-normal">Clients</em>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${
                  i === active ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
              >
                <div className="text-center">
                  {/* Quote Icon */}
                  <svg className="w-12 h-12 text-gold/30 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <svg key={j} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Text */}
                  <p className="font-display text-2xl md:text-3xl font-light text-green-950 leading-relaxed mb-8 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-gold"
                    />
                    <div className="text-left">
                      <p className="font-semibold text-green-950">{testimonial.name}</p>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === active ? 'w-8 bg-gold' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

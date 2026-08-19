'use client';

import { useState } from 'react';

const faqs = [
  { question: 'What types of products do you offer?', answer: 'We offer a wide range of beauty and skincare products including Skin Care, Makeup, Hair Care, Fragrances, Nail Care, and Body Care products from top brands.' },
  { question: 'Do you offer any discounts or promotions?', answer: 'Yes! We regularly offer discounts and promotions. Sign up for our newsletter to get 25% off on your first order and stay updated on our latest deals.' },
  { question: 'How can I provide feedback about my experience?', answer: 'You can provide feedback through our contact page, via email, or by leaving a review on our product pages. We value all customer feedback.' },
  { question: 'What payment methods do you accept?', answer: 'We accept multiple secure payment options including credit/debit cards, bank transfers, and mobile payment solutions.' },
  { question: 'Do you offer customer support?', answer: 'Yes! Our customer support team is available 24/7 to assist you with any questions or concerns you may have.' },
  { question: 'How do I track my order?', answer: 'Once your order is shipped, you will receive a tracking number via email. You can use this to track your order in real-time.' },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <p className="text-[#888] text-sm mb-2">FAQs</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1a1a1a]">
            Question? <span className="text-[#b8956a]">Look here.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* FAQ Accordion */}
          <div className="md:col-span-3">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className={`w-full flex items-center justify-between py-4 text-left transition-colors ${openIndex === i ? 'bg-[#2d5016] text-white px-5 rounded-lg -mx-5 my-2' : ''}`}
                >
                  <span className="font-semibold text-sm md:text-base pr-4">{faq.question}</span>
                  <span className={`text-xl flex-shrink-0 transition-transform ${openIndex === i ? 'text-white' : 'text-[#2d5016]'}`}>
                    {openIndex === i ? '−' : '+'}
                  </span>
                </button>
                {openIndex === i && (
                  <div className="pb-4 px-5">
                    <p className="text-sm text-white/80 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Card */}
          <div className="md:col-span-2">
            <div className="bg-[#2d5016] rounded-2xl p-6 md:p-8 text-white h-full flex flex-col justify-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-heading text-xl font-bold mb-2">You have different questions?</h3>
              <p className="text-white/70 text-sm mb-6">Our team will answer all your questions. We ensure a quick response.</p>
              <a href="#" className="inline-flex items-center px-5 py-2.5 bg-white text-[#2d5016] text-sm font-bold rounded-full hover:bg-[#b8956a] hover:text-white transition-colors self-start">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-8">
          {[
            { icon: '📦', title: 'Free Shipping', desc: 'Free shipping for order above $50' },
            { icon: '💳', title: 'Flexible Payment', desc: 'Multiple secure payment options' },
            { icon: '🎧', title: '24x7 Support', desc: 'We support online all days' },
          ].map((badge) => (
            <div key={badge.title} className="flex items-center gap-4">
              <span className="text-3xl">{badge.icon}</span>
              <div>
                <p className="font-semibold text-[#1a1a1a]">{badge.title}</p>
                <p className="text-xs text-[#999]">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

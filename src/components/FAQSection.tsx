'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What types of products do you offer?',
    answer: 'We offer authentic designer perfumes, imported skincare products, skincare supplements, gym supplements, and professional lash & brow services. All our products are 100% authentic and sourced from trusted suppliers.',
  },
  {
    question: 'Do you offer any discounts or promotions?',
    answer: 'Yes! We regularly offer discounts on our products. Sign up for our newsletter to get 20% off your first order, and check our website for weekly deals and seasonal promotions.',
  },
  {
    question: 'How can I track my order?',
    answer: 'Once your order is shipped, you\'ll receive a tracking number via email and WhatsApp. You can use this number to track your delivery in real-time through our logistics partner.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfers, debit/credit cards, and various mobile payment options. All transactions are processed through our secure payment gateway for your safety.',
  },
  {
    question: 'Do you offer customer support?',
    answer: 'Yes! Our customer support team is available 24/7 via WhatsApp, Instagram DMs, and email. We typically respond within 2 hours during business hours.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-[#c5a572] text-xs tracking-wider uppercase font-medium mb-2">FAQs</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1a1a1a]">
            Question? <span className="text-[#c5a572]">Look here.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* FAQ List */}
          <div className="md:col-span-3">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="font-semibold text-[#1a1a1a] text-sm md:text-base pr-4">{faq.question}</span>
                  <span className={`text-[#c5a572] text-xl flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? 'max-h-40 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-sm text-[#666] leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Card */}
          <div className="md:col-span-2">
            <div className="bg-[#1a3c34] rounded-2xl p-6 md:p-8 text-white h-full flex flex-col justify-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-heading text-xl font-bold mb-2">You have different questions?</h3>
              <p className="text-white/70 text-sm mb-6">Our team will answer all your questions. We ensure a quick response.</p>
              <a
                href="https://wa.me/2348012345678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#1a3c34] text-sm font-bold rounded-full hover:bg-[#c5a572] transition-colors self-start"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-8">
          {[
            { icon: '📦', title: 'Free Shipping', desc: 'Free shipping for order above ₦50,000' },
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

'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-offwhite py-12 px-4 md:px-8 border-b border-border">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="font-serif text-3xl md:text-4xl text-dark">Get in Touch</h1>
          <p className="text-[13px] text-muted mt-3 max-w-md mx-auto">
            Questions about a fragrance? Need a personal recommendation? We're here to help.
          </p>
        </div>
      </div>

      {/* Contact grid */}
      <section className="py-14 px-4 md:px-8">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            {/* Info */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-[11px] font-semibold tracking-widest uppercase text-dark mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] text-muted uppercase tracking-wider font-medium">Email</p>
                    <p className="text-[13px] text-dark mt-0.5">hello@beautybyb.com</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted uppercase tracking-wider font-medium">Atelier</p>
                    <p className="text-[13px] text-dark mt-0.5">12 Rue de la Paix<br />Paris, France 75002</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted uppercase tracking-wider font-medium">Hours</p>
                    <p className="text-[13px] text-dark mt-0.5">Mon — Sat: 10am — 7pm<br />Sunday: By appointment</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="text-[11px] font-semibold tracking-widest uppercase text-dark mb-3">Follow Us</h3>
                <div className="flex gap-4">
                  {['Instagram', 'TikTok', 'Pinterest'].map((social) => (
                    <span key={social} className="text-[12px] text-muted hover:text-dark cursor-pointer font-medium transition-colors">
                      {social}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-offwhite p-5 border border-border">
                <h4 className="text-[12px] font-semibold text-dark mb-1">Fragrance Consultation</h4>
                <p className="text-[11px] text-muted leading-relaxed">
                  Book a one-on-one session with our fragrance experts. We'll help you find your perfect scent.
                </p>
                <button className="btn-outline mt-3 text-[11px] py-2 px-4">Book Now</button>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              <h3 className="text-[11px] font-semibold tracking-widest uppercase text-dark mb-5">Send Us a Message</h3>

              {isSubmitted && (
                <div className="mb-5 p-4 bg-sage-light border border-sage/30">
                  <p className="text-[12px] text-dark font-medium">✓ Thank you! We'll get back to you within 24 hours.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-muted uppercase tracking-wider font-medium mb-1.5">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 border border-border text-[13px] text-dark focus:outline-none focus:border-dark transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-muted uppercase tracking-wider font-medium mb-1.5">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 border border-border text-[13px] text-dark focus:outline-none focus:border-dark transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-muted uppercase tracking-wider font-medium mb-1.5">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 border border-border text-[13px] text-dark focus:outline-none focus:border-dark transition-colors bg-white"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Support</option>
                    <option value="consultation">Fragrance Consultation</option>
                    <option value="wholesale">Wholesale / Collaboration</option>
                    <option value="press">Press Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] text-muted uppercase tracking-wider font-medium mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2.5 border border-border text-[13px] text-dark focus:outline-none focus:border-dark transition-colors resize-none"
                    placeholder="How can we help?"
                  />
                </div>

                <button type="submit" className="btn-add max-w-[200px] text-center">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="pt-32 pb-16 px-6">
      {/* Background blobs */}
      <div className="blob w-80 h-80 bg-gold-200/20 top-20 left-0" />
      <div className="blob w-64 h-64 bg-rose/20 bottom-20 right-10" />

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <span className="font-sans text-xs tracking-widest uppercase text-gold-500">Get in Touch</span>
        <h1 className="font-serif text-4xl md:text-6xl font-light mt-3 text-deep">
          We'd Love to <span className="italic text-gradient">Hear</span> from You
        </h1>
        <p className="mt-6 text-deep/60 text-lg max-w-xl mx-auto">
          Whether you have a question about our fragrances, need a personal recommendation,
          or want to explore collaboration — we're here for you.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Info Column */}
          <div className="md:col-span-2 space-y-8">
            {/* Contact Details */}
            <div className="glass-card rounded-3xl p-8 transition-all duration-500">
              <h3 className="font-serif text-xl text-deep mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-200/40 to-rose/20 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-gold-500 mb-1">Email</p>
                    <p className="text-sm text-deep/70">hello@beautybyb.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-200/40 to-rose/20 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-gold-500 mb-1">Atelier</p>
                    <p className="text-sm text-deep/70">12 Rue de la Paix<br />Paris, France 75002</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-200/40 to-rose/20 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-gold-500 mb-1">Hours</p>
                    <p className="text-sm text-deep/70">Mon — Sat: 10am — 7pm<br />Sunday: By appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="glass-card rounded-3xl p-8 transition-all duration-500">
              <h3 className="font-serif text-xl text-deep mb-4">Follow Us</h3>
              <p className="text-sm text-deep/60 mb-5">
                Stay connected for behind-the-scenes, new launches, and fragrance inspiration.
              </p>
              <div className="flex gap-3">
                {['Instagram', 'Pinterest', 'TikTok'].map((social) => (
                  <span
                    key={social}
                    className="px-4 py-2 rounded-full glass text-xs tracking-wider text-deep/70 hover:text-gold-500 cursor-pointer transition-colors"
                  >
                    {social}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="md:col-span-3">
            <div className="glass-card rounded-3xl p-8 md:p-10 transition-all duration-500">
              <h3 className="font-serif text-2xl text-deep mb-2">Send Us a Message</h3>
              <p className="text-sm text-deep/50 mb-8">We typically respond within 24 hours.</p>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-green-100/50 to-emerald-100/50 border border-green-200/50">
                  <p className="text-sm text-green-800">
                    ✓ Thank you! Your message has been sent. We'll be in touch soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-deep/60 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/50 text-sm text-deep placeholder:text-deep/30 focus:outline-none focus:border-gold-300 transition-colors"
                      placeholder="Amara Johnson"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-deep/60 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/50 text-sm text-deep placeholder:text-deep/30 focus:outline-none focus:border-gold-300 transition-colors"
                      placeholder="amara@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-deep/60 mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/50 text-sm text-deep focus:outline-none focus:border-gold-300 transition-colors"
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
                  <label className="block text-xs tracking-widest uppercase text-deep/60 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/50 text-sm text-deep placeholder:text-deep/30 focus:outline-none focus:border-gold-300 transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-luxury w-full py-3.5 rounded-full bg-gradient-to-r from-deep to-plum text-white text-sm tracking-widest uppercase hover:shadow-xl hover:shadow-deep/20 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map / Location banner */}
      <div className="max-w-6xl mx-auto mt-16">
        <div className="glass-card rounded-3xl overflow-hidden">
          <div className="h-64 bg-gradient-to-br from-deep/10 via-plum/5 to-rose/10 flex items-center justify-center relative">
            <div className="absolute inset-0 opacity-20">
              <div className="blob w-48 h-48 bg-gold-300 top-0 left-1/4" />
              <div className="blob w-36 h-36 bg-rose bottom-0 right-1/4" />
            </div>
            <div className="relative text-center z-10">
              <svg className="w-8 h-8 text-gold-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="font-serif text-xl text-deep">12 Rue de la Paix, Paris</p>
              <p className="text-sm text-deep/50 mt-1">Visit our flagship atelier</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

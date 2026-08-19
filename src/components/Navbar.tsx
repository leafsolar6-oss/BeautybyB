'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Collection' },
    { href: '/about', label: 'Our Story' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass py-3 shadow-lg shadow-black/5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <span className="font-serif text-2xl md:text-3xl font-semibold tracking-wide text-deep">
            Beauty<span className="text-gradient">byB</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative font-sans text-sm tracking-widest uppercase transition-colors duration-300 ${
                pathname === link.href
                  ? 'text-gold-500'
                  : 'text-deep/70 hover:text-gold-500'
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-gold-400 to-gold-300" />
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/shop"
          className="hidden md:inline-flex btn-luxury px-6 py-2.5 rounded-full bg-gradient-to-r from-deep to-plum text-white text-xs tracking-widest uppercase"
        >
          Shop Now
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-px bg-deep transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-px bg-deep transition-all duration-300 ${isMobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-px bg-deep transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass transition-all duration-500 overflow-hidden ${
          isMobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center py-8 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className={`font-sans text-sm tracking-widest uppercase ${
                pathname === link.href ? 'text-gold-500' : 'text-deep/70'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/shop"
            onClick={() => setIsMobileOpen(false)}
            className="btn-luxury px-6 py-2.5 rounded-full bg-gradient-to-r from-deep to-plum text-white text-xs tracking-widest uppercase"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

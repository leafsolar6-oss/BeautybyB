import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-[1200px] mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="font-serif text-xl text-dark mb-2">
              Beauty<span className="text-gold">byB</span>
            </h3>
            <p className="text-sm text-muted">Nigeria's luxury destination</p>
          </div>
          <div className="flex gap-6">
            <Link href="/shop" className="text-sm text-muted hover:text-dark">Shop</Link>
            <Link href="/about" className="text-sm text-muted hover:text-dark">About</Link>
            <Link href="/contact" className="text-sm text-muted hover:text-dark">Contact</Link>
          </div>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/beauty_byb.ng" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-dark">Instagram</a>
            <a href="https://wa.me/2348012345678" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-dark">WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="border-t border-border bg-offwhite">
        <div className="max-w-[1200px] mx-auto px-8 py-4 text-center">
          <p className="text-sm text-muted">© 2026 BeautybyB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

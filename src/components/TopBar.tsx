'use client';

import CartDrawer from '@/components/CartDrawer';
import SearchBar from '@/components/SearchBar';

export default function TopBar() {
  return (
    <header className="fixed top-0 right-0 left-64 h-20 bg-primary/80 backdrop-blur-xl border-b border-border z-30">
      <div className="h-full flex items-center justify-between px-8">
        {/* Breadcrumb / Page Title */}
        <div className="flex items-center gap-4">
          <h2 className="font-luxury text-xl text-text">
            Dark Luxury Collection
          </h2>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <SearchBar />
          <CartDrawer />
        </div>
      </div>
    </header>
  );
}

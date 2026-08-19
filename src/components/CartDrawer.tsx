'use client';

import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();

  return (
    <>
      {/* Cart button - used in Navbar */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative text-muted hover:text-dark transition-colors"
        aria-label="Open cart"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        {totalItems > 0 && (
          <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-dark text-white text-[9px] rounded-full flex items-center justify-center font-bold">
            {totalItems}
          </span>
        )}
      </button>

      {/* Cart overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Cart drawer */}
      <div
        className={`fixed right-0 top-0 bottom-0 w-full max-w-[420px] bg-white z-50 shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <h2 className="font-serif text-lg text-dark">Your Cart ({totalItems})</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-offwhite transition-colors"
            aria-label="Close cart"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4" style={{ maxHeight: 'calc(100vh - 200px)' }}>
          {items.length === 0 ? (
            <div className="text-center py-16">
              <svg className="w-12 h-12 text-muted/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-sm text-muted">Your cart is empty</p>
              <button
                onClick={() => setIsOpen(false)}
                className="btn-outline mt-4 text-xs"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex gap-3 pb-4 border-b border-border/50">
                  <div className="w-16 h-20 bg-offwhite rounded-lg overflow-hidden shrink-0">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted/20">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-muted uppercase tracking-wider font-medium truncate">{item.brand}</p>
                    <h3 className="text-xs font-semibold text-dark mt-0.5 leading-snug line-clamp-2">{item.name}</h3>
                    {item.size && <p className="text-[9px] text-muted/60 mt-0.5">{item.size}</p>}
                    <p className="text-xs font-semibold text-dark mt-1">{item.price}</p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center rounded-full border border-border text-xs hover:bg-offwhite transition-colors"
                      >
                        −
                      </button>
                      <span className="text-xs font-medium w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center rounded-full border border-border text-xs hover:bg-offwhite transition-colors"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-[10px] text-muted hover:text-dark transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 px-5 py-4 border-t border-border bg-white">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted">Subtotal</span>
              <span className="text-sm font-semibold text-dark">₦{totalPrice.toLocaleString()}</span>
            </div>
            <button className="btn-add w-full text-center">
              Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full text-center text-[10px] text-muted hover:text-dark mt-2 transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}

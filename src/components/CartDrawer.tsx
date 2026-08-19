'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, totalItems, totalPrice, removeFromCart } = useCart();

  const freeShippingThreshold = 59;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - totalPrice);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors relative"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {totalItems > 0 && (
          <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-[#c8102e] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-200">
              <h3 className="font-heading text-xl uppercase tracking-wider">Your cart</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-full"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Free shipping bar */}
            <div className="px-5 py-3 bg-[#1a1a1a] text-white text-xs">
              Spend ${remainingForFreeShipping.toFixed(2)} more to Unlock Free Shipping
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-5">
              {items.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-base text-[#666] mb-4">Your cart is currently empty.</p>
                  <Link
                    href="/shop"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary inline-block"
                  >
                    Continue shopping
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 pb-4 border-b border-gray-200">
                      <div className="w-20 h-24 bg-gray-100 flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <Link href={`/product/${item.id}`} className="block">
                          <h4 className="text-sm font-semibold text-[#333] mb-1 hover:text-[#c8102e]">
                            {item.name}
                          </h4>
                        </Link>
                        <p className="text-xs text-[#666] mb-2">Qty: {item.quantity}</p>
                        <p className="text-sm font-bold text-[#c8102e]">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#999] hover:text-[#c8102e]"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-base font-semibold">Subtotal</span>
                  <span className="text-xl font-bold text-[#c8102e]">${totalPrice.toFixed(2)}</span>
                </div>
                <button className="btn-primary w-full mb-2">
                  Checkout
                </button>
                <Link
                  href="/shop"
                  onClick={() => setIsOpen(false)}
                  className="block text-center text-xs text-[#666] hover:text-[#c8102e] uppercase tracking-wider"
                >
                  Continue shopping
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

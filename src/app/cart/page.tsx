'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-cream pt-24 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center px-8">
          <svg className="w-24 h-24 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          <h1 className="font-display text-3xl font-bold text-green-950 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven't added any products yet. Start shopping to fill it up!</p>
          <Link
            href="/#bestsellers"
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-950 text-white font-bold tracking-wide rounded-sm hover:bg-gold hover:text-green-950 transition-all duration-300"
          >
            Start Shopping
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream pt-24">
      {/* Hero */}
      <section className="bg-green-950 py-12">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white">
            Shopping <em className="italic font-normal">Cart</em>
          </h1>
          <p className="text-white/70 mt-2">{totalItems} item{totalItems !== 1 ? 's' : ''} in your cart</p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-xl font-bold text-green-950">Cart Items</h2>
                  <button
                    onClick={clearCart}
                    className="text-sm text-gray-500 hover:text-red-500 transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>

                <div className="space-y-6">
                  {items.map(item => (
                    <div key={item.id} className="flex gap-4 md:gap-6 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-bold text-green-950 text-lg mb-1">{item.name}</h3>
                            <p className="text-gold font-bold text-xl">₦{item.price.toLocaleString()}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                            aria-label="Remove item"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        <div className="flex items-center gap-3 mt-4">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100 transition-colors"
                          >
                            -
                          </button>
                          <span className="text-sm font-bold w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100 transition-colors"
                          >
                            +
                          </button>
                          <span className="text-sm text-gray-500 ml-auto">
                            Subtotal: ₦{(item.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg p-6 md:p-8 sticky top-28">
                <h2 className="font-display text-xl font-bold text-green-950 mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium text-green-600">
                      {totalPrice >= 50000 ? 'Free' : '₦2,500'}
                    </span>
                  </div>
                  {totalPrice < 50000 && (
                    <p className="text-xs text-gold bg-gold/10 px-3 py-2 rounded-sm">
                      Add ₦{(50000 - totalPrice).toLocaleString()} more for free shipping!
                    </p>
                  )}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between">
                      <span className="font-bold text-green-950 text-lg">Total</span>
                      <span className="font-bold text-green-950 text-lg">
                        ₦{(totalPrice + (totalPrice >= 50000 ? 0 : 2500)).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="btn-luxury block w-full py-4 bg-green-950 text-white font-bold tracking-wide rounded-sm hover:bg-gold hover:text-green-950 transition-all duration-300 text-center mb-3"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  href="/#bestsellers"
                  className="block w-full py-3 text-sm text-center text-gray-600 hover:text-green-950 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { useState } from 'react';

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    notes: '',
  });
  const [orderSent, setOrderSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build WhatsApp message
    let message = `*New Order from BeautybyB*\n\n`;
    message += `*Customer Details:*\n`;
    message += `Name: ${formData.name}\n`;
    message += `Phone: ${formData.phone}\n`;
    message += `Address: ${formData.address}, ${formData.city}\n`;
    if (formData.notes) message += `Notes: ${formData.notes}\n`;
    
    message += `\n*Order Items:*\n`;
    items.forEach((item, idx) => {
      message += `${idx + 1}. ${item.name} x${item.quantity} - ${item.price}\n`;
    });
    
    message += `\n*Total: ₦${totalPrice.toLocaleString()}*\n`;
    message += `\nPlease confirm availability and delivery details. Thank you!`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2348012345678?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Clear cart and show success
    clearCart();
    setOrderSent(true);
  };

  if (orderSent) {
    return (
      <div className="max-w-[600px] mx-auto px-5 md:px-8 py-20 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-serif text-3xl text-dark mb-4">Order Sent!</h1>
        <p className="text-muted mb-6">
          Your order has been sent via WhatsApp. We'll confirm availability and delivery details shortly.
        </p>
        <Link href="/shop" className="btn-outline">
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-[600px] mx-auto px-5 md:px-8 py-20 text-center">
        <svg className="w-16 h-16 text-muted/20 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <h1 className="font-serif text-3xl text-dark mb-4">Your Cart is Empty</h1>
        <p className="text-muted mb-6">Add some products to your cart before checking out.</p>
        <Link href="/shop" className="btn-outline">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-6 md:py-10">
      <h1 className="font-serif text-3xl md:text-4xl text-dark mb-8">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="bg-offwhite rounded-2xl p-6">
          <h2 className="font-serif text-xl text-dark mb-4">Order Summary</h2>
          <div className="space-y-3 mb-6 max-h-[400px] overflow-y-auto">
            {items.map(item => (
              <div key={item.id} className="flex items-center gap-3 pb-3 border-b border-border/50">
                <div className="w-12 h-12 bg-white rounded-lg overflow-hidden shrink-0">
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
                  <p className="text-xs font-semibold text-dark truncate">{item.name}</p>
                  <p className="text-[10px] text-muted">Qty: {item.quantity}</p>
                </div>
                <p className="text-xs font-semibold text-dark">{item.price}</p>
              </div>
            ))}
          </div>
          <div className="pt-4 border-t border-border">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted">Subtotal</span>
              <span className="text-sm font-semibold text-dark">₦{totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-muted">Delivery</span>
              <span className="text-xs text-muted">Calculated on confirmation</span>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-border">
              <span className="font-semibold text-dark">Total</span>
              <span className="text-xl font-semibold text-dark">₦{totalPrice.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Delivery Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-dark mb-1.5">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:border-dark transition-colors"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-dark mb-1.5">Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:border-dark transition-colors"
                placeholder="e.g., 08012345678"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-dark mb-1.5">Delivery Address *</label>
              <textarea
                required
                value={formData.address}
                onChange={e => setFormData({...formData, address: e.target.value})}
                className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:border-dark transition-colors resize-none"
                rows={3}
                placeholder="Street address, area, landmark"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-dark mb-1.5">City *</label>
              <input
                type="text"
                required
                value={formData.city}
                onChange={e => setFormData({...formData, city: e.target.value})}
                className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:border-dark transition-colors"
                placeholder="e.g., Lagos, Abuja, Ibadan"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-dark mb-1.5">Order Notes (Optional)</label>
              <textarea
                value={formData.notes}
                onChange={e => setFormData({...formData, notes: e.target.value})}
                className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:border-dark transition-colors resize-none"
                rows={2}
                placeholder="Any special instructions..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-green-600 text-white rounded-full font-semibold text-sm hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Send Order via WhatsApp
            </button>
            <p className="text-[10px] text-muted text-center">
              You'll be redirected to WhatsApp to complete your order
            </p>
          </form>

          <div className="mt-6 pt-6 border-t border-border">
            <h3 className="text-xs font-semibold text-dark mb-3">What happens next?</h3>
            <ol className="space-y-2 text-xs text-muted">
              <li className="flex gap-2">
                <span className="font-semibold text-gold">1.</span>
                <span>Order details sent to us via WhatsApp</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-gold">2.</span>
                <span>We confirm product availability</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-gold">3.</span>
                <span>Delivery cost calculated based on your location</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-gold">4.</span>
                <span>Payment and delivery arranged</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

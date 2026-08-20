'use client';

import { useState } from 'react';

export default function AccountPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login/signup
    alert(isLogin ? 'Login successful!' : 'Account created!');
  };

  return (
    <div className="min-h-screen bg-cream pt-24">
      {/* Hero */}
      <section className="bg-green-950 py-12">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white">
            My <em className="italic font-normal">Account</em>
          </h1>
          <p className="text-white/70 mt-2">Welcome to your BeautybyB account</p>
        </div>
      </section>

      {/* Account Content */}
      <section className="py-12">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg p-8 md:p-10">
              {/* Tabs */}
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-3 font-bold tracking-wide transition-all ${
                    isLogin ? 'bg-green-950 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-3 font-bold tracking-wide transition-all ${
                    !isLogin ? 'bg-green-950 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Sign Up
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-green-950 mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-gold transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-green-950 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-gold transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-green-950 mb-2">Phone</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-gold transition-colors"
                      placeholder="+234..."
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-green-950 mb-2">Password</label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-gold transition-colors"
                    placeholder="••••••••"
                  />
                </div>

                {isLogin && (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-gray-600">Remember me</span>
                    </label>
                    <a href="#" className="text-gold hover:text-gold-dark transition-colors">Forgot password?</a>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-luxury w-full py-4 bg-green-950 text-white font-bold tracking-wide rounded-sm hover:bg-gold hover:text-green-950 transition-all duration-300"
                >
                  {isLogin ? 'Login' : 'Create Account'}
                </button>
              </form>

              {/* Social Login */}
              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-sm hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    <span className="text-sm font-medium">Facebook</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-sm hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
                    <span className="text-sm font-medium">Google</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: '🎁', title: 'Exclusive Offers', desc: 'Get 20% off your first order' },
                { icon: '📦', title: 'Track Orders', desc: 'Real-time order updates' },
                { icon: '❤️', title: 'Wishlist', desc: 'Save your favorites' },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-green-950 text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

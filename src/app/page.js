'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [location, setLocation] = useState('');

  return (
    <div className="min-h-screen bg-white">
      
      {/* Top Banner */}
      <div className="bg-primary text-white text-sm py-2 text-center">
        <div className="container mx-auto px-4 flex justify-center gap-6">
          <span>💰 Money back guarantee</span>
          <span>💬 Answer messages for free</span>
        </div>
      </div>

      {/* Main Hero Section */}
      <div className="container mx-auto px-4 py-12 text-center">
        
        {/* Logo Image on Homepage */}
        <div className="flex justify-center mb-8">
          <img 
            src="/logo.png" 
            alt="Tap & Tidy Logo" 
            className="w-80 h-auto object-contain mx-auto"
          />
        </div>

        {/* Tagline */}
        <p className="text-2xl text-gray-600 mb-4 font-light">
          Cleaning you can rely on
        </p>

        {/* Trust Badge */}
        <p className="text-gray-500 mb-8">
          Trusted by 10+ happy customers
        </p>

        {/* Stats Cards Row */}
        <div className="flex justify-center gap-12 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">0+</div>
            <div className="text-gray-600 text-sm">Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary">0+</div>
            <div className="text-gray-600 text-sm">Cleaners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">0+</div>
            <div className="text-gray-600 text-sm">Jobs Completed</div>
          </div>
        </div>

        {/* Service Types Row */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <div className="bg-primaryLight border border-primary/20 px-5 py-2 rounded-full text-primary text-sm font-medium hover:bg-primary hover:text-white transition cursor-pointer">
            🏠 Home/Apartment
          </div>
          <div className="bg-primaryLight border border-primary/20 px-5 py-2 rounded-full text-primary text-sm font-medium hover:bg-primary hover:text-white transition cursor-pointer">
            🏢 Office
          </div>
          <div className="bg-primaryLight border border-primary/20 px-5 py-2 rounded-full text-primary text-sm font-medium hover:bg-primary hover:text-white transition cursor-pointer">
            🏨 Airbnb
          </div>
          <div className="bg-primaryLight border border-primary/20 px-5 py-2 rounded-full text-primary text-sm font-medium hover:bg-primary hover:text-white transition cursor-pointer">
            🏘️ End of Tenancy
          </div>
          <div className="bg-primaryLight border border-primary/20 px-5 py-2 rounded-full text-primary text-sm font-medium hover:bg-primary hover:text-white transition cursor-pointer">
            🧹 Deep Clean
          </div>
        </div>

        {/* Search Section */}
        <div className="max-w-md mx-auto mb-8">
          <p className="text-gray-700 mb-3 font-medium">Quickly find a trusted cleaner</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City or postal code"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <Link href="/register">
              <button className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition shadow-md">
                Get started for free
              </button>
            </Link>
          </div>
        </div>

        {/* Rating */}
        <div className="flex justify-center items-center gap-2">
          <div className="flex text-secondary">
            <span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <span className="text-gray-600">4 / 5</span>
          <span className="text-gray-400 text-sm ml-2">(5+ reviews)</span>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-primaryLight py-3 mt-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-md">
                1
              </div>
              <h3 className="font-bold text-lg text-primary mb-2">Create Account</h3>
              <p className="text-gray-600">Sign up as a customer or cleaner in minutes</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-md">
                2
              </div>
              <h3 className="font-bold text-lg text-secondary mb-2">Find Match</h3>
              <p className="text-gray-600">Connect with trusted cleaners or find cleaning jobs</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-md">
                3
              </div>
              <h3 className="font-bold text-lg text-primary mb-2">Get Tidy</h3>
              <p className="text-gray-600">Enjoy a clean space or grow your cleaning business</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primaryDark text-purple py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm opacity-75">
            <p>© 2024 Tap & Tidy. All rights reserved.</p>
            <p className="mt-1">Professional cleaning services you can trust</p>
          </div>
        </div>
      </footer>

      {/* Bottom Navigation (Mobile) - Purple & Pink Theme */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-primary/20 py-2 px-4 flex justify-around items-center md:hidden z-50 shadow-lg">
        <Link href="/" className="flex flex-col items-center group">
          <span className="text-xl text-primary group-hover:text-secondary transition">🏠</span>
          <span className="text-xs text-gray-500 group-hover:text-secondary transition">Home</span>
        </Link>
        <Link href="/search" className="flex flex-col items-center group">
          <span className="text-xl text-gray-400 group-hover:text-secondary transition">🔍</span>
          <span className="text-xs text-gray-400 group-hover:text-secondary transition">Search</span>
        </Link>
        <Link href="/bookings" className="flex flex-col items-center group">
          <span className="text-xl text-gray-400 group-hover:text-secondary transition">📅</span>
          <span className="text-xs text-gray-400 group-hover:text-secondary transition">Bookings</span>
        </Link>
        <Link href="/messages" className="flex flex-col items-center group">
          <span className="text-xl text-gray-400 group-hover:text-secondary transition">💬</span>
          <span className="text-xs text-gray-400 group-hover:text-secondary transition">Messages</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center group">
          <span className="text-xl text-gray-400 group-hover:text-secondary transition">👤</span>
          <span className="text-xs text-gray-400 group-hover:text-secondary transition">Profile</span>
        </Link>
      </div>

    </div>
  );
}
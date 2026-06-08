'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Logo from '@/components/Logo';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    localStorage.removeItem('user');
    setUser(null);
    router.push('/');
  };

  return (
    <nav className="bg-white shadow-md border-b border-primary/10 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-600 hover:text-primary transition">Home</Link>
          
          {user ? (
            <>
              <Link 
                href={user.userType === 'customer' ? '/customer/dashboard' : '/cleaner/dashboard'} 
                className="text-gray-600 hover:text-primary transition"
              >
                Dashboard
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">👋 {user.name}</span>
              <button 
                onClick={handleLogout} 
                className="text-red-500 hover:text-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-gray-600 hover:text-primary transition">Login</Link>
              <Link 
                href="/register" 
                className="bg-secondary text-white px-5 py-2 rounded-lg hover:bg-secondary/90 transition shadow-sm"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-primary text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 flex flex-col gap-3">
          <Link href="/" className="text-gray-600 hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          
          {user ? (
            <>
              <Link 
                href={user.userType === 'customer' ? '/customer/dashboard' : '/cleaner/dashboard'} 
                className="text-gray-600 hover:text-primary transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <span className="text-gray-600">👋 {user.name}</span>
              <button 
                onClick={handleLogout} 
                className="text-red-500 hover:text-red-600 transition text-left"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-gray-600 hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>Login</Link>
              <Link 
                href="/register" 
                className="bg-secondary text-white px-4 py-2 rounded-lg text-center hover:bg-secondary/90 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
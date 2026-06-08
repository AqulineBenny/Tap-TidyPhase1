'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CleanerDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
      return;
    }
    const parsedUser = JSON.parse(userData);
    if (parsedUser.userType !== 'cleaner') {
      router.push('/customer/dashboard');
      return;
    }
    setUser(parsedUser);
    setLoading(false);
  }, [router]);

  if (loading) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Content - NO duplicate navbar */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary">Cleaner Dashboard</h1>
          <p className="text-gray-600">Manage your cleaning business</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-secondary to-secondary/80 text-white rounded-xl p-6">
            <div className="text-3xl mb-2">📋</div>
            <div className="text-2xl font-bold">0</div>
            <div className="opacity-90">Total Jobs</div>
          </div>
          <div className="bg-gradient-to-r from-secondary to-primary text-white rounded-xl p-6">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold">0.0</div>
            <div className="opacity-90">Rating</div>
          </div>
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl p-6">
            <div className="text-3xl mb-2">💰</div>
            <div className="text-2xl font-bold">$0</div>
            <div className="opacity-90">Earnings</div>
          </div>
        </div>

        {/* Placeholder for future features */}
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <div className="text-5xl mb-4">📅</div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Job Management Coming Soon</h2>
          <p className="text-gray-500">
            In Phase 2, you'll be able to view job requests, manage your schedule, and track earnings.
          </p>
        </div>
      </div>
    </div>
  );
}
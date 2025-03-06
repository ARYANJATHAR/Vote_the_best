'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Navigation from '@/components/Navigation';
import { Profile } from '@/types';

export default function DashboardPage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedProfiles = JSON.parse(localStorage.getItem('profiles') || '[]');
    const currentProfile = storedProfiles[storedProfiles.length - 1];
    
    if (!currentProfile) {
      toast.error('No profile found. Please register first.');
      router.push('/profile');
      return;
    }
    
    setProfile(currentProfile);
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center p-8">
          <div className="h-12 w-12 rounded-full border-4 border-t-gray-900 border-gray-100 animate-spin mb-4"></div>
          <div className="text-lg font-medium text-gray-800">Loading profile...</div>
        </div>
      </div>
    );
  }

  if (!profile) return null;

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 mb-1">My Profile</p>
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-sm text-gray-500">View and manage your profile statistics</p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-md shadow-sm">
              <button 
                onClick={() => router.push('/profile')}
                className="px-8 py-2 text-sm font-medium text-gray-500 bg-white hover:text-gray-700 border border-r-0 border-gray-200 rounded-l-md"
              >
                Register
              </button>
              <button className="px-8 py-2 text-sm font-medium bg-gray-900 text-white rounded-r-md">
                My Dashboard
              </button>
            </div>
          </div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100"
          >
            {/* Profile Header */}
            <div className="p-8 border-b border-gray-100">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
                <div className="relative w-32 h-32 flex-shrink-0">
                  <img
                    src={profile.imageUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover rounded-xl shadow-sm"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold text-gray-900">{profile.name}, {profile.age}</h2>
                  <p className="text-gray-500 text-lg">{profile.location}</p>
                  <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                    {profile.interests.map((interest, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {profile.likes || 0}
                </div>
                <p className="text-gray-500">Total Votes</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {profile.battles || 0}
                </div>
                <p className="text-gray-500">Battles</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {profile.battles ? Math.round((profile.wins / profile.battles) * 100) : 0}%
                </div>
                <p className="text-gray-500">Win Rate</p>
              </div>
            </div>

            {/* Bio Section */}
            <div className="p-8 border-t border-gray-100">
              <h3 className="text-lg font-medium text-gray-900 mb-4">About Me</h3>
              <div className="space-y-2">
                {profile.bio.split('.').filter(Boolean).map((point, index) => (
                  <div key={index} className="flex items-start space-x-2 text-gray-600">
                    <span className="mt-1.5">○</span>
                    <p>{point.trim()}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="p-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <button
                onClick={() => router.push('/profile')}
                className="px-6 py-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                Edit Profile
              </button>
              <button
                onClick={() => router.push('/leaderboard')}
                className="px-6 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
              >
                View Leaderboard
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
} 
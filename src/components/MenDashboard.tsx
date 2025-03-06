'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

interface ProfileData {
  name: string;
  age: number;
  bio: string;
  imageUrl: string;
  interests: string[];
  location: string;
  likes: number;
  battles: number;
  wins: number;
}

const MenDashboard: React.FC = () => {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedProfiles = JSON.parse(localStorage.getItem('profiles') || '[]');
    const currentProfile = storedProfiles[storedProfiles.length - 1];
    
    if (!currentProfile) {
      toast.error('No profile found. Please register first.');
      router.push('/men/register');
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
    <div className="fixed inset-0 flex items-center justify-center bg-white overflow-hidden">
      <div className="w-full max-w-3xl h-[85vh] max-h-[800px] px-4 flex flex-col my-8">
        {/* Header */}
        <div className="text-center mb-4 mt-2">
          <p className="text-sm text-gray-500 mb-1">My Profile</p>
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">Dashboard</h1>
          <p className="text-sm text-gray-500">View and manage your profile statistics</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-md shadow-sm">
            <button 
              onClick={() => router.push('/men/register')}
              className="px-6 py-1.5 text-sm font-medium text-gray-500 bg-white hover:text-gray-700 border border-r-0 border-gray-200 rounded-l-md"
            >
              Register
            </button>
            <button className="px-6 py-1.5 text-sm font-medium bg-gray-900 text-white rounded-r-md">
              My Dashboard
            </button>
          </div>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col"
        >
          {/* Profile Header */}
          <div className="p-5 border-b border-gray-100">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="relative w-24 h-24 flex-shrink-0">
                <img
                  src={profile.imageUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover rounded-xl shadow-sm"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-xl font-bold text-gray-900">{profile.name}, {profile.age}</h2>
                <p className="text-gray-500">{profile.location}</p>
                <div className="mt-3 flex flex-wrap gap-2 justify-center md:justify-start">
                  {profile.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-0.5 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-5">
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-gray-900">
                {profile.likes || 0}
              </div>
              <p className="text-sm text-gray-500">Total Votes</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-gray-900">
                {profile.battles || 0}
              </div>
              <p className="text-sm text-gray-500">Battles</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-gray-900">
                {profile.battles ? Math.round((profile.wins / profile.battles) * 100) : 0}%
              </div>
              <p className="text-sm text-gray-500">Win Rate</p>
            </div>
          </div>

          {/* Bio Section */}
          <div className="p-5 border-t border-gray-100 flex-1 overflow-auto">
            <h3 className="text-base font-medium text-gray-900 mb-3">About Me</h3>
            <div className="space-y-2">
              {profile.bio.split('.').filter(Boolean).map((point, index) => (
                <div key={index} className="flex items-start space-x-2 text-gray-600">
                  <span className="mt-1">○</span>
                  <p className="text-sm">{point.trim()}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="p-5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
            <button
              onClick={() => router.push('/men/register')}
              className="px-5 py-1.5 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Edit Profile
            </button>
            <button
              onClick={() => router.push('/men/leaderboard')}
              className="px-5 py-1.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              View Leaderboard
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MenDashboard; 
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Navigation from '@/components/Navigation';
import { Profile } from '@/types';

// Demo data
const demoProfiles: Profile[] = [
  {
    id: '1',
    name: "ARYAN",
    age: 21,
    bio: "I LOVE GAMES",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    interests: ["Sports", "Travel"],
    location: "Mumbai",
    likes: 0,
    battles: 0,
    wins: 0,
    college: "VJTI",
    instagram: "https://instagram.com"
  },
  {
    id: '2',
    name: "Rahul",
    age: 22,
    bio: "Coffee and Code",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    interests: ["Coding", "Music"],
    location: "Delhi",
    likes: 0,
    battles: 0,
    wins: 0,
    college: "IIT Delhi",
    instagram: "https://instagram.com"
  },
  {
    id: '3',
    name: "Aditya",
    age: 23,
    bio: "Photography enthusiast",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    interests: ["Photography", "Travel"],
    location: "Bangalore",
    likes: 0,
    battles: 0,
    wins: 0,
    college: "IIT Bangalore",
    instagram: "https://instagram.com"
  }
];

export default function BattlePage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [currentPair, setCurrentPair] = useState<[Profile | null, Profile | null]>([null, null]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setProfiles(demoProfiles);
    setCurrentPair([demoProfiles[0], demoProfiles[1]]);
    setProgress(0);
    setLoading(false);
  }, []);

  const handleVote = (winnerIndex: number) => {
    if (!currentPair[0] || !currentPair[1]) return;
    
    const winner = currentPair[winnerIndex];
    if (!winner) return;
    
    toast.success(`Voted for ${winner.name}!`);
    showNextPair();
  };

  const showNextPair = () => {
    const currentIdx = profiles.findIndex(p => p.id === currentPair[1]?.id);
    const nextIdx = currentIdx + 1;
    
    if (nextIdx < profiles.length - 1) {
      setTimeout(() => {
        setCurrentPair([profiles[nextIdx], profiles[nextIdx + 1]]);
        setProgress(((nextIdx + 1) / profiles.length) * 100);
      }, 300);
    } else {
      toast.success("All profiles compared! Starting over");
      setTimeout(() => {
        setCurrentPair([profiles[0], profiles[1]]);
        setProgress(0);
      }, 300);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse flex flex-col items-center p-8">
          <div className="h-12 w-12 rounded-full border-4 border-t-rose-400 border-rose-100 animate-spin mb-4"></div>
          <div className="text-lg font-medium text-gray-800">Loading profiles...</div>
        </div>
      </div>
    );
  }

  if (!currentPair[0] || !currentPair[1]) {
    return (
      <div className="min-h-screen bg-white p-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">No Profiles Available</h1>
          <p className="text-gray-500">We need profiles to start comparing.</p>
          <button
            onClick={() => router.push('/leaderboard')}
            className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
          >
            View Leaderboard
          </button>
        </div>
      </div>
    );
  }

  const ProfileCard = ({ profile, onVote }: { profile: Profile; onVote: () => void }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center relative cursor-pointer hover:shadow-xl transition-shadow"
      onClick={onVote}
    >
      {/* Profile Image */}
      <motion.div 
        className="w-48 h-48 rounded-xl overflow-hidden mb-4"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <img
          src={profile.imageUrl}
          alt={profile.name}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Profile Info */}
      <div className="text-center space-y-2 w-full">
        <h2 className="text-xl font-semibold text-gray-800">{profile.name}</h2>
        <p className="text-gray-600 text-sm">
          {profile.bio}
        </p>

        {/* Bullet Points */}
        <div className="space-y-2 text-left text-gray-600 text-sm">
          {profile.interests.map((interest, idx) => (
            <motion.div 
              key={idx} 
              className="flex items-start space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <span className="mt-1">○</span>
              <span>{interest}</span>
            </motion.div>
          ))}
        </div>

        {/* Instagram Icon */}
        {profile.instagram && (
          <div className="mt-4">
            <a 
              href={profile.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-gray-600 hover:text-gray-800 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-16 pb-8">
        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Who's Your Pick?</h1>
            <p className="text-gray-500">Click on your favorite profile to vote</p>
          </div>

          {/* Profile Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto relative">
            <AnimatePresence mode="wait">
              {currentPair[0] && (
                <ProfileCard 
                  profile={currentPair[0]} 
                  onVote={() => handleVote(0)}
                />
              )}
            </AnimatePresence>
            <AnimatePresence mode="wait">
              {currentPair[1] && (
                <ProfileCard 
                  profile={currentPair[1]} 
                  onVote={() => handleVote(1)}
                />
              )}
            </AnimatePresence>

            {/* VS Badge */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-rose-500 text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg">
                VS
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div 
                className="bg-rose-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center py-4 text-gray-400 text-sm">
          © 2024 CampusVote. All rights reserved.
        </footer>
      </div>
    </>
  );
} 
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
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
    likes: 150,
    battles: 200,
    wins: 180,
    college: "VJTI",
    rank: 1
  },
  {
    id: '2',
    name: "Rahul",
    age: 22,
    bio: "Coffee and Code",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    interests: ["Coding", "Music"],
    location: "Delhi",
    likes: 120,
    battles: 180,
    wins: 150,
    college: "IIT Delhi",
    rank: 2
  },
  {
    id: '3',
    name: "Aditya",
    age: 23,
    bio: "Photography enthusiast",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    interests: ["Photography", "Travel"],
    location: "Bangalore",
    likes: 100,
    battles: 150,
    wins: 120,
    college: "IIT Bangalore",
    rank: 3
  }
];

export default function LeaderboardPage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedProfiles = JSON.parse(localStorage.getItem('profiles') || '[]');
    const sortedProfiles = [...demoProfiles, ...storedProfiles].sort((a, b) => {
      const aWinRate = a.battles ? (a.wins / a.battles) : 0;
      const bWinRate = b.battles ? (b.wins / b.battles) : 0;
      if (bWinRate !== aWinRate) {
        return bWinRate - aWinRate;
      }
      return (b.likes || 0) - (a.likes || 0);
    });
    setProfiles(sortedProfiles);
    setLoading(false);
  }, []);

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

  const ProfileRow = ({ profile, rank, isTopWinner = false }: { profile: Profile; rank: number; isTopWinner?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center space-x-4 py-4 px-6 hover:bg-gray-50 rounded-lg transition-colors"
    >
      <div className="flex-shrink-0 w-8 text-sm font-medium text-gray-500">
        {isTopWinner ? (
          <span className="text-lg">
            {rank === 1 ? "🥇" : rank === 2 ? "🥈" : "🥉"}
          </span>
        ) : (
          `${rank}`
        )}
      </div>
      <div className="flex-shrink-0">
        <img
          src={profile.imageUrl}
          alt={profile.name}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
      <div className="flex-grow">
        <div className="flex items-center">
          <span className="font-medium text-gray-900">{profile.name}</span>
          <span className="ml-2 text-gray-500">{profile.age}</span>
        </div>
        <div className="text-sm text-gray-500">{profile.location}</div>
      </div>
      <div className="flex-shrink-0 text-right">
        <div className="text-sm font-medium text-gray-900">{profile.wins} votes</div>
      </div>
    </motion.div>
  );

  const topWinners = profiles.slice(0, 3);
  const otherProfiles = profiles.slice(3);

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="max-w-2xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-gray-500 mb-2">Leaderboard</p>
            <h1 className="text-2xl font-semibold text-gray-900">Campus Favorites</h1>
            <p className="text-sm text-gray-500 mt-1">Based on votes from your peers</p>
          </div>

          {/* Top Winners Section */}
          <div className="bg-white rounded-xl shadow-sm mb-6">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-sm font-medium text-gray-900">
                ⭐ Top Winners
              </h2>
            </div>
            <div className="divide-y divide-gray-100">
              {topWinners.map((profile, index) => (
                <ProfileRow
                  key={profile.id}
                  profile={profile}
                  rank={index + 1}
                  isTopWinner={true}
                />
              ))}
            </div>
          </div>

          {/* Other Rankings Section */}
          {otherProfiles.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm">
              <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="text-sm font-medium text-gray-900">
                  Other Rankings
                </h2>
              </div>
              <div className="divide-y divide-gray-100">
                {otherProfiles.map((profile, index) => (
                  <ProfileRow
                    key={profile.id}
                    profile={profile}
                    rank={index + 4}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Back Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => router.push('/battle')}
              className="px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              Back to Voting
            </button>
          </div>
        </div>
      </div>
    </>
  );
} 
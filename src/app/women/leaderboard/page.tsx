'use client';

import Leaderboard from '@/components/Leaderboard';
import Navbar from '@/components/Navbar';

export default function LeaderboardPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Leaderboard section="women" />
      </main>
    </>
  );
} 
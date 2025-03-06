'use client';

import BattleScreen from '@/components/BattleScreen';
import Navbar from '@/components/Navbar';

export default function BattlePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <BattleScreen section="women" />
      </main>
    </>
  );
} 
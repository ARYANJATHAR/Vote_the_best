'use client';

import ProfileForm from '@/components/ProfileForm';
import Navbar from '@/components/Navbar';

export default function MenRegisterPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <ProfileForm />
      </main>
    </>
  );
} 
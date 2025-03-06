'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navigation() {
  const pathname = usePathname();
  const isWomenSection = pathname?.includes('/women');
  const isMenSection = pathname?.includes('/men');

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/"
            className="flex items-center space-x-2 text-gray-800 hover:text-gray-600 transition-colors"
          >
            <span className="text-2xl">❤️</span>
            <span className="font-semibold text-lg">CampusVote</span>
          </Link>

          <div className="flex items-center space-x-6">
            {isMenSection && (
              <>
                <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  href="/profile"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Register
                </Link>
              </>
            )}
            {isWomenSection && (
              <Link
                href="/battle"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                Battle
              </Link>
            )}
            <Link
              href="/leaderboard"
              className="flex items-center space-x-2 text-gray-800 hover:text-gray-600 transition-colors"
            >
              <span className="text-sm font-semibold">
                <span className="inline-block align-middle">👤</span> Leaderboard
              </span>
            </Link>
            <Link
              href="/login"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
} 
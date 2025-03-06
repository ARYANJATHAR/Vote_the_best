'use client';

import { motion, Variants } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LandingPage = () => {
  const router = useRouter();

  // Animation variants
  const fadeInUp: Variants = {
    initial: { 
      opacity: 0, 
      y: 20 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren: Variants = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const buttonHover = {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100 shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="flex items-center space-x-2">
                <motion.span 
                  animate={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                  className="text-2xl"
                >
                  ❤️
                </motion.span>
                <span className="font-semibold text-lg text-gray-900">CampusVote</span>
              </Link>
            </motion.div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-4">
              <motion.div whileHover={buttonHover}>
                <Link 
                  href="/" 
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                >
                  Home
                </Link>
              </motion.div>
              <motion.button 
                whileHover={buttonHover}
                onClick={() => router.push('/login')}
                className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                Login
              </motion.button>
              <motion.button
                whileHover={buttonHover}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/signup')}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                Sign Up
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            {/* Main Headings */}
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
              variants={fadeInUp}
            >
              <motion.span 
                className="block mb-2 text-blue-600"
                variants={fadeInUp}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Cast Your Vote
              </motion.span>
              <motion.span 
                className="block"
                variants={fadeInUp}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Choose the Best
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12"
              variants={fadeInUp}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Join our community and help decide who stands out. Vote for your favorite profiles 
              and discover amazing students from across India. Be part of the journey in finding 
              the most outstanding individuals in our campus community.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={fadeInUp}
                onClick={() => router.push('/women/battle')}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg w-full sm:w-auto hover:shadow-lg"
              >
                Start Voting Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={fadeInUp}
                onClick={() => router.push('/women/leaderboard')}
                className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium text-lg flex items-center justify-center gap-2 w-full sm:w-auto group"
              >
                View Leaderboard
                <motion.span 
                  className="text-xl"
                  animate={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  🏆
                </motion.span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={fadeInUp}
                onClick={() => router.push('/men/register')}
                className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-lg w-full sm:w-auto hover:shadow-lg"
              >
                Register Profile
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-3xl font-bold text-center text-gray-900 mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              How It Works
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Choose Your Favorite */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <motion.div 
                  className="w-20 h-20 mx-auto mb-6 bg-pink-100 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  animate={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  <span className="text-4xl">❤️</span>
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Choose Your Favorite
                </h3>
                <p className="text-gray-600">
                  Compare profiles side by side and vote for the ones that stand out to you.
                </p>
              </motion.div>

              {/* Track Rankings */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <motion.div 
                  className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  animate={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2.5 }}
                >
                  <span className="text-4xl">🏆</span>
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Track Rankings
                </h3>
                <p className="text-gray-600">
                  Watch as profiles rise through the ranks based on community votes.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage; 
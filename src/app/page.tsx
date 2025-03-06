'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  // Animation variants
  const fadeInUp = {
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

  const staggerChildren = {
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
      {/* Hero Section */}
      <section className="py-20 px-4">
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

            {/* CTA Button */}
            <motion.div 
              className="flex justify-center"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >
              <Link href="/leaderboard">
                <motion.button
                  whileHover={buttonHover}
                  whileTap={{ scale: 0.95 }}
                  variants={fadeInUp}
                  className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium text-lg flex items-center justify-center gap-2 group"
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
              </Link>
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

            {/* Men's Process */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-center mb-8 text-blue-600">For Men</h3>
              <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {/* Step 1 */}
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div 
                    className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-2xl">✍️</span>
                  </motion.div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Sign Up</h4>
                  <p className="text-sm text-gray-600">Create your account</p>
                </motion.div>

                {/* Step 2 */}
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div 
                    className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-2xl">🔑</span>
                  </motion.div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Login</h4>
                  <p className="text-sm text-gray-600">Access your account</p>
                </motion.div>

                {/* Step 3 */}
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div 
                    className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-2xl">👤</span>
                  </motion.div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Register Profile</h4>
                  <p className="text-sm text-gray-600">Create your profile</p>
                </motion.div>

                {/* Step 4 */}
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div 
                    className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-2xl">📊</span>
                  </motion.div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Profile Dashboard</h4>
                  <p className="text-sm text-gray-600">View dashboard & leaderboard</p>  
                </motion.div>
              </div>
            </div>

            {/* Women's Process */}
            <div>
              <h3 className="text-2xl font-semibold text-center mb-8 text-pink-600">For Women</h3>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {/* Step 1 */}
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div 
                    className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-2xl">✍️</span>
                  </motion.div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Sign Up & Login</h4>
                  <p className="text-sm text-gray-600">Create and access your account</p>
                </motion.div>

                {/* Step 2 */}
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div 
                    className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-2xl">❤️</span>
                  </motion.div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Vote on Profiles</h4>
                  <p className="text-sm text-gray-600">Choose your favorites</p>
                </motion.div>

                {/* Step 3 */}
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div 
                    className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-2xl">🏆</span>
                  </motion.div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">View Leaderboard</h4>
                  <p className="text-sm text-gray-600">See top profiles</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About & Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">About Us</h2>
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-lg text-gray-600">
                CampusVote is your go-to platform for campus-wide profile competitions. 
                We provide a fun and engaging way for students to showcase their profiles 
                and participate in voting. Men can create profiles and compete, while women 
                can vote and influence the rankings. Join us in celebrating the diversity 
                and uniqueness of our campus community!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="max-w-xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <motion.div 
                  className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-2xl">📧</span>
                </motion.div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600">support@campusvote.com</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <motion.div 
                  className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-2xl">📱</span>
                </motion.div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">+91 1234567890</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500">© 2024 CampusVote. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

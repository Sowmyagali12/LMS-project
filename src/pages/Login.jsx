import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaGift } from 'react-icons/fa';

export default function Login() {
  const [showGift, setShowGift] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setShowGift(true);

    // Delay navigation by 2.5 seconds after showing gift
    setTimeout(() => {
      navigate('/dashboard');
    }, 2500);
  };

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row overflow-hidden">
      {/* 🔐 Login Form Section */}
      <motion.div
        className="w-full md:w-1/2 px-8 sm:px-12 md:px-16 py-10 bg-white flex flex-col justify-center items-center text-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">Login to Your Account</h2>

        {/* 🎁 GIFT CARD SHOWN AFTER SIGN‑IN */}
        {showGift && (
          <motion.div
            className="w-full max-w-md bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-xl shadow-md flex items-center gap-4 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaGift size={26} />
            <div>
            <h3 className="text-lg font-bold">🎉 Login Successful!</h3>
            <p className="text-sm">Your journey just began — get ready to unlock powerful new skills! 🔓✨</p>

            </div>
          </motion.div>
        )}

        <form className="w-full max-w-md space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <div className="flex justify-start text-xs text-gray-600">
            <Link to="/forgot-password" className="hover:text-blue-500">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 rounded-md transition"
            disabled={showGift} // Disable while animation is showing
          >
            {showGift ? 'Redirecting...' : 'Sign In'}
          </button>
        </form>
      </motion.div>

      {/* ✨ Signup CTA Section */}
      <motion.div
        className="w-full md:w-1/2 bg-gradient-to-br from-[#0793d1] to-[#a2e4fa] flex flex-col items-center justify-center text-white text-center p-8 md:p-16"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-2"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          New Here?
        </motion.h2>

        <motion.p
          className="text-md sm:text-lg font-medium mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Join our community today!
        </motion.p>

        <ul className="text-sm px-4 sm:px-6 mb-4 space-y-1 text-white text-left max-w-sm">
          <li>🌟 Instant access to exclusive features</li>
          <li>🎯 Track your learning journey</li>
          <li>💬 Connect with mentors & peers</li>
          <li>🔐 Safe, secure & easy</li>
        </ul>

        <motion.p
          className="text-xs px-6 sm:px-8 italic mb-8"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          It takes just 30 seconds to change your future. Let's go! 🚀
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            to="/signup"
            className="bg-white text-[#0793d1] font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition"
          >
            Sign Up
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

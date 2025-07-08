import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Login() {
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

        <form className="w-full max-w-md space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 rounded-md transition"
          >
            Sign In
          </button>
        </form>

        <div className="flex justify-between w-full max-w-md text-xs mt-4 text-gray-600">
          <Link to="/forgot-password" className="hover:text-blue-500">Forgot Password?</Link>
          <Link to="/change-password" className="hover:text-blue-500">Change Password?</Link>
        </div>
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

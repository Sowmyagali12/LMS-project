import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-[#C75DFF] mb-6">Login</h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d7a6f2]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d7a6f2]"
          />
          <button
            type="submit"
            className="w-full bg-[#C75DFF] hover:bg-[#B14CE0] text-white py-2 rounded  transition"
          >
            Login
          </button>
        </form>

        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <Link to="/forgot-password" className="hover:text-[#C75DFF]" >Forgot Password?</Link>
          <Link to="/signup" className="hover:text-[#C75DFF]">Sign Up</Link>
        </div>
      </div>
    </motion.div>
  );
}

import React, { useRef } from 'react';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const RegisterPage = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Almost There! 🎉',
      text: 'Check your email for your login password.',
      icon: 'success',
      confirmButtonColor: '#2563EB', // Blue
      confirmButtonText: 'Okay!',
      background: '#f0f9ff',
    }).then(() => {
      formRef.current.reset(); // Reset form
    });
  };

  return (
    <div className="min-h-screen bg-[#F3F8FF] flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-xl bg-white p-10 rounded-xl shadow-md"
      >
        <h2 className="text-3xl font-extrabold text-center text-[#1e3a8a] mb-6">
          Create Your Account
        </h2>
        <p className="text-center text-sm text-gray-600 mb-8">
          Start your journey with expert-led learning today.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              required
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">WhatsApp Number</label>
            <input
              type="tel"
              required
              placeholder="Enter your whatsapp number"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg transition duration-300"
          >
            Sign Up
          </motion.button>

          <p className="text-sm text-center text-gray-600 mt-4">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:underline font-medium">
              Login here
            </a>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default RegisterPage;



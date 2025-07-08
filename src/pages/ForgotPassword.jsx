import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert(`🔗 Password reset link sent to ${email}`);
      setLoading(false);
      setEmail("");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f3e6ff] to-white py-20 px-4 lg:py-28">
      <div className="w-full max-w-md bg-white border border-purple-200 p-8 rounded-2xl shadow-2xl relative overflow-hidden">

        <h2 className="text-3xl font-extrabold text-center text-[#0793d1] mb-2">
          Forgot Your Password?
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Enter your email to receive a reset link.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0793d1] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded-lg font-semibold transition duration-300 ${
              loading
                ? "bg-[#0793d1]/70 cursor-not-allowed"
                : "bg-[#0793d1] hover:bg-[rgba(7,148,209,0.91)] text-white"
            }`}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link to="/login" className="text-sm text-[#0793d1] hover:underline font-medium">
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

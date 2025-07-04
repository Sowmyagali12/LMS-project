import React from 'react';

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen font-sans bg-[#FCEBFF]">
      {/* Left Panel */}
      <div className="w-1/2 hidden md:flex flex-col justify-center items-center p-10 bg-white shadow-xl">
        <div className="max-w-md text-center">
          <h3 className="text-2xl font-bold mb-6 text-[#C75DFF]">Why Register With Us?</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
            <li>Learn from experienced professionals.</li>
            <li>Hands-on experience with real-world projects.</li>
            <li>Certificate upon successful completion.</li>
            <li>Career counseling & job placement support.</li>
          </ul>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJUntMEZEHKrmeNv1l-2O-WW0cgddVxovtDg&s"
            alt="Student Registration"
            className="mt-8 rounded-lg w-[450px] h-[250px] object-cover"
          />
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 py-10 bg-[#FBEFFF] shadow-inner">
        <h2 className="text-3xl font-extrabold text-center text-[#3D3B40] mb-10">
          Sign Up
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-800 font-semibold mb-2">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#f2ebf2] border-none focus:ring-2 focus:ring-[#C75DFF] transition"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-semibold mb-2">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#f2ebf2] border-none focus:ring-2 focus:ring-[#C75DFF] transition"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-semibold mb-2">
              Contact Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#f2ebf2] border-none focus:ring-2 focus:ring-[#C75DFF] transition"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-[#C75DFF] hover:bg-[#B14CE0] text-white py-3 rounded-lg font-semibold text-lg transition duration-300 shadow-md"
          >
            Sign Up
          </button>

          <p className="text-sm text-center mt-4 text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-[#A600FF] hover:underline font-medium">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

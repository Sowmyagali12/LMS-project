import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Section */}
        <div className="text-center md:text-left">
          &copy; {new Date().getFullYear()} <span className="text-[#C75DFF] font-semibold">LMS Learning</span>. All rights reserved.
        </div>

        {/* Right Section - Links */}
        <div className="flex space-x-6 text-sm">
          <a href="/support" className="hover:text-[#C75DFF] transition">Support</a>
          <a href="/terms" className="hover:text-[#C75DFF] transition">Terms of Service</a>
          <a href="/privacy" className="hover:text-[#C75DFF] transition">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

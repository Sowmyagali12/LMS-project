import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const toggleMobileMenu = () => setMenuOpen((prev) => !prev);

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("You have been logged out!");
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setDropdownOpen(false);
      setMenuOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="w-full top-0 left-0 z-50 shadow-md">
      {/* Top Bar */}
      <div className="bg-black text-white text-sm px-4 py-2 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex items-center justify-center md:justify-start mb-2 md:mb-0">
          <span className="font-semibold">For Enquiry : +91 9849175588</span>
        </div>
        <div className="flex justify-center md:justify-end">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded-full text-white font-semibold text-xs flex items-center gap-1"
          >
            <i className="fab fa-youtube text-white"></i> Our Free Tutorials
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white py-4 px-6 flex items-center justify-between md:px-12">
        <RouterLink to="/" className="flex items-center">
          <img
            src="http://technohubtrainings.in/img/technohub-logo.png"
            alt="TechnoHub Logo"
            className="h-14 w-auto object-contain bg-cover"
          />
        </RouterLink>

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleMobileMenu();
          }}
          className="text-2xl md:hidden text-gray-600"
        >
          ☰
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <RouterLink to="/" className="text-gray-700 hover:text-[#0793d1]">
            Home
          </RouterLink>

          {/* Services Dropdown */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={toggleDropdown}
              className="text-gray-700 hover:text-[#0793d1] flex items-center"
            >
              Services
              <svg
                className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute top-8 left-0 w-56 bg-white border rounded-lg shadow-lg z-50">
                <Link
                  smooth
                  to="/#online-training"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#a8dcf3]"
                >
                  Online Training
                </Link>
                
                <Link
                  smooth
                  to="/#internships"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#a8dcf3]"
                >
                  Internships
                </Link>
              </div>
            )}
          </div>

          <RouterLink
            to="/courses"
            className="text-gray-700 hover:text-[#0793d1]"
          >
            Courses Offering
          </RouterLink>

          <RouterLink
            to="/aboutus"
            className="text-gray-700 hover:text-[#0793d1]"
          >
            About Us
          </RouterLink>

          <RouterLink
            to="/contactus"
            className="text-gray-700 hover:text-[#0793d1]"
          >
            Contact Us
          </RouterLink>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-red-500 font-semibold hover:underline"
            >
              Logout
            </button>
          ) : (
            <RouterLink
              to="/signup"
              className="text-[#0793d1] font-semibold hover:underline"
            >
              Sign Up
            </RouterLink>
          )}
        </nav>
      </div>


      {/* Mobile Nav bar */}
      {menuOpen && (
      <div className="md:hidden bg-white px-6 pb-6 shadow-lg space-y-4">
        <RouterLink
          to="/"
          className="block text-gray-700"
          onClick={toggleMobileMenu}
        >
          Home
        </RouterLink>

        {/* Mobile Services Dropdown using state */}
        <div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setDropdownOpen((prev) => !prev);
            }}
            className="w-full flex justify-between items-center text-gray-700 font-medium"
          >
            Services
            <span className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}>▼</span>
          </button>
          {dropdownOpen && (
            <div className="ml-4 mt-2 space-y-1">
              <Link
                smooth
                to="/#online-training"
                className="block text-sm text-gray-600"
                onClick={toggleMobileMenu}
              >
                Online Training
              </Link>
              
              <Link
                smooth
                to="/#internships"
                className="block text-sm text-gray-600"
                onClick={toggleMobileMenu}
              >
                Internships
              </Link>
            </div>
          )}
        </div>

        <RouterLink
          to="/courses"
          className="block text-gray-700"
          onClick={toggleMobileMenu}
        >
          Courses Offering
        </RouterLink>

        <RouterLink
          to="/contactus"
          className="block text-gray-700"
          onClick={toggleMobileMenu}
        >
          Contact Us
        </RouterLink>

        <RouterLink
          to="/aboutus"
          className="block text-gray-700"
          onClick={toggleMobileMenu}
        >
          About Us
        </RouterLink>

        {isLoggedIn ? (
          <button
            onClick={() => {
              handleLogout();
              toggleMobileMenu();
            }}
            className="block text-red-500 font-semibold"
          >
            Logout
          </button>
        ) : (
          <RouterLink
            to="/signup"
            className="block text-[#0793d1] font-semibold"
            onClick={toggleMobileMenu}
          >
            Sign Up
          </RouterLink>
        )}
      </div>
      )}

</header>
  );
};

export default Navbar;

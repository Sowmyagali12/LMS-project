// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleSidebar = () => {} }) => {
  return (
    <nav className="bg-blue-900 text-white flex justify-between items-center px-6 py-4 shadow-md fixed top-0 left-0 right-0 z-50">
      {/* Left: Student Panel button */}
      <div>
        <button
          onClick={toggleSidebar}
          className="hover:bg-blue-800 px-4 py-2 rounded transition"
        >
          Student Panel
        </button>
      </div>

      {/* Right: Logout */}
      <div>
        <Link
          to="/logout"
          className="hover:bg-blue-800 px-4 py-2 rounded transition"
        >
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

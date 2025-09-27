import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MyLogo from "../assests/image.png";

import {
  FaTachometerAlt,
  FaUsers,
  FaSignOutAlt,
  FaCreditCard,
  FaUserTie,
  FaGift,
  FaCheckCircle,
  FaBook,
  FaBriefcase,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const AdminSidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // Mobile toggle

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
    { name: "Batches Completed", icon: <FaCheckCircle />, path: "/batches" },
    { name: "Courses", icon: <FaBook />, path: "/courses" },
    { name: "Internships", icon: <FaBriefcase />, path: "/internships" },
    { name: "Employers", icon: <FaUserTie />, path: "/employers" },
    { name: "Students Hired", icon: <FaUsers />, path: "/students-hired" },
    { name: "Payments", icon: <FaCreditCard />, path: "/payments" },
    { name: "Coupons Generated", icon: <FaGift />, path: "/coupons" },
  ];

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded bg-blue-700 text-white shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-blue-700 to-blue-500 text-white shadow-xl transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative flex flex-col`}
      >
        {/* White curved top only for logo */}
        <div className="w-full h-28 bg-white rounded-b-[50%] shadow-md"></div>

        {/* Logo */}
        <div className="flex justify-center -mt-16 z-10">
          <div className="w-32 h-32 rounded-full border-4 border-blue-900 bg-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src={MyLogo}
              alt="TechnoHub Logo"
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>

        {/* Menu + Logout */}
        <div className="flex flex-col flex-1 mt-6 px-4">
          {/* Menu */}
          <nav className="flex-1">
            <ul className="space-y-4">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-base font-medium transition-all duration-300
                        ${
                          isActive
                            ? "bg-white text-blue-700 shadow-md"
                            : "hover:bg-white/20 hover:translate-x-1"
                        }`}
                      onClick={() => setIsOpen(false)} // Close menu on mobile
                    >
                      {item.icon} <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Logout at bottom */}
          <div className="mt-auto mb-3">
            <button
              onClick={() => alert("Logging out...")}
              className="w-full flex items-center justify-center gap-3 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition-all duration-300 font-semibold shadow-md hover:scale-105"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default AdminSidebar;

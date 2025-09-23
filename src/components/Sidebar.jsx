import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MyLogo from "../assets/image.png";
import { toast } from "react-toastify";

import {
  FaTachometerAlt,
  FaBullhorn,
  FaSignOutAlt,
  FaLaptopCode,
  FaFileAlt,
  FaCertificate,
  FaUniversity,
  FaCreditCard,
} from "react-icons/fa";
import { StudentContext } from "../context/StudentContext";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setStudent } = useContext(StudentContext); // access context

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
    { name: "Classroom", icon: <FaUniversity />, path: "/classroom" },
    { name: "Placements", icon: <FaBullhorn />, path: "/Placements" },
    { name: "Internship", icon: <FaLaptopCode />, path: "/internship" },
    { name: "Resume Builder", icon: <FaFileAlt />, path: "/resume-builder" },
    { name: "Certificate", icon: <FaCertificate />, path: "/certificate" },
    { name: "Payments", icon: <FaCreditCard />, path: "/payments" },
  ];

 const handleLogout = () => {
  setStudent(null); // clear context
  toast.success("Logged out successfully!");
  navigate("/logout"); // navigate to logout page
};


  return (
    <div className="w-64 min-h-screen flex flex-col bg-gradient-to-b from-blue-700 to-blue-500 text-white relative shadow-xl">
      {/* White curved top with shadow */}
      <div className="w-full h-28 bg-white rounded-b-[50%] shadow-md absolute top-0 left-0"></div>

      {/* Logo */}
      <div className="flex justify-center mt-8 relative z-10">
        <div className="w-28 h-28 rounded-full border-4 border-blue-900 bg-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
          <img src={MyLogo} alt="Logo" className="w-20 h-20 object-contain" />
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-6 mt-12">
        <ul className="space-y-4">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 
                    ${
                      isActive
                        ? "bg-white text-blue-700 shadow-md"
                        : "hover:bg-white/20 hover:translate-x-1"
                    }`}
                >
                  {item.icon} <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-6">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 py-3 bg-red-500 rounded-lg hover:bg-red-600 transition-all duration-300 font-semibold shadow-md hover:scale-105"
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

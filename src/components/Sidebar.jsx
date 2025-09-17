import React from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaChalkboardTeacher,
  FaGift,
  FaUserEdit,
  FaBriefcase,
  FaCertificate,
  FaSignOutAlt,
} from "react-icons/fa";

const menuItems = [
  {
    name: "Dashboard",
    icon: <FaTachometerAlt />,
    links: [
      { name: "Weekly Progress", path: "/dashboard/weekly-progress" },
      { name: "Assignment Status", path: "/dashboard/assignments" },
      { name: "Placement Portal", path: "/dashboard/placement" },
      { name: "Updates", path: "/dashboard/updates" },
      { name: "Courses", path: "/dashboard/courses" },
    ],
  },
  {
    name: "Classroom",
    icon: <FaChalkboardTeacher />,
    links: [
      { name: "Completed Courses", path: "/classroom/completed" },
      { name: "Running Courses", path: "/classroom/running" },
    ],
  },
  {
    name: "Coupons Available",
    icon: <FaGift />,
    links: [
      {
        name: "Recent Placement Companies",
        path: "/coupons/recent-placement",
      },
      { name: "Job Portal", path: "/coupons/job-portal" },
    ],
  },
  { name: "Resume Builder", icon: <FaUserEdit />, path: "/resume-builder" },
  { name: "Internship", icon: <FaBriefcase />, path: "/internship" },
  { name: "Certificate", icon: <FaCertificate />, path: "/certificate" },
];

const Sidebar = ({ closeSidebar }) => {
  return (
    <>
      {/* Background overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={closeSidebar}
      ></div>

      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-64 bg-purple-700 text-white shadow-lg z-50 pt-16 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-purple-500">
          <h2 className="text-lg font-bold">Student Panel</h2>
          <button
            onClick={closeSidebar}
            className="text-white hover:text-gray-300 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Menu */}
        <ul className="px-4 py-4 space-y-2 flex-1 overflow-y-auto">
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.links ? (
                <details className="group">
                  <summary className="cursor-pointer flex items-center gap-3 px-2 py-2 hover:bg-purple-600 rounded transition">
                    {item.icon} <span>{item.name}</span>
                  </summary>
                  <ul className="ml-8 mt-2 space-y-1">
                    {item.links.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subItem.path}
                          className="block px-2 py-1 rounded hover:bg-purple-600 transition"
                          onClick={closeSidebar}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <Link
                  to={item.path}
                  className="flex items-center gap-3 px-2 py-2 rounded hover:bg-purple-600 transition"
                  onClick={closeSidebar}
                >
                  {item.icon} <span>{item.name}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Logout at bottom */}
        <div className="p-4 border-t border-purple-500">
          <Link
            to="/logout"
            className="flex items-center gap-3 px-2 py-2 rounded hover:bg-purple-600 transition"
            onClick={closeSidebar}
          >
            <FaSignOutAlt /> <span>Logout</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

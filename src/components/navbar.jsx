import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";

const Navbar = ({ notifications }) => {
  const { student } = useContext(StudentContext);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const profileRef = useRef();
  const notifRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setNotifOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const avatar = student?.avatar || "/default-avatar.png";
  const name = student?.name || "Guest";
  const city = student?.currentCity || "-";
  const state = student?.currentState || "-";

  return (
    <div className="w-full bg-white shadow-md sticky top-0 z-10">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Hamburger menu */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded hover:bg-gray-100 transition"
          >
            ☰
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative" ref={notifRef}>
            <button
              onClick={() => setNotifOpen(!notifOpen)}
              className="relative p-2 rounded-full hover:bg-gray-100 transition"
            >
              🔔
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </button>
            {notifOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md p-3 z-50">
                <h4 className="font-semibold mb-2">Notifications</h4>
                {notifications.length > 0
                  ? notifications.map((n, idx) => (
                      <p key={idx} className="text-sm mb-1">{n.message}</p>
                    ))
                  : <p className="text-sm text-gray-500">No new notifications</p>}
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition shadow-sm"
            >
              <img
                src={avatar}
                alt="Profile"
                className="w-8 h-8 rounded-full border-2 border-blue-500"
              />
              <span className="font-medium text-gray-800">{name}</span>
              <span className="text-sm text-gray-500">▼</span>
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-xl p-4 z-50 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={avatar}
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-2 border-blue-500"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{name}</p>
                    <p className="text-sm text-gray-500">{city}, {state}</p>
                  </div>
                </div>
                <hr className="my-2 border-gray-200" />
                <button
                  onClick={() => navigate("/profile")}
                  className="w-full text-left px-2 py-2 rounded hover:bg-gray-100 transition"
                >
                  Profile
                </button>
                <button
                  onClick={() => navigate("/settings")}
                  className="w-full text-left px-2 py-2 rounded hover:bg-gray-100 transition"
                >
                  Settings
                </button>
                <button
                  onClick={() => navigate("/logout")}
                  className="w-full text-left px-2 py-2 rounded hover:bg-gray-100 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminNavbar = ({ notifications = [] }) => {
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

  return (
    <div className="w-full bg-white shadow sticky top-0 z-20">
      <div className="flex justify-between items-center px-4 py-3">

        {/* Left */}
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-gray-700 hidden md:block">
            Admin Panel
          </h1>
        </div>

        {/* Right - Desktop */}
        <div className="hidden md:flex items-center space-x-4">

          {/* Notifications */}
          <div className="relative" ref={notifRef}>
            <button
              onClick={() => setNotifOpen(!notifOpen)}
              className="relative p-2 rounded hover:bg-gray-100"
            >
              🔔
              {notifications.length > 0 && (
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              )}
            </button>

            {notifOpen && (
              <div className="absolute right-0 mt-2 w-64 max-h-60 overflow-y-auto bg-white shadow rounded p-2 z-50">
                <h4 className="font-semibold mb-1">Notifications</h4>
                {notifications.length > 0 ? (
                  notifications.map((n, idx) => (
                    <p key={idx} className="text-sm mb-1">{n.message}</p>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">No new notifications</p>
                )}
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded hover:bg-gray-200"
            >
              <span>Admin</span>
              <span>▼</span>
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow rounded p-2 z-50">
                <p className="font-semibold">TechnoHub Admin</p>
                <p className="text-sm text-gray-500">System Manager</p>
                <hr className="my-1" />
                <button
                  onClick={() => navigate("/admin/settings")}
                  className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
                >
                  Settings
                </button>
                <button
                  onClick={() => alert("Logging out")}
                  className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded text-red-600"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded hover:bg-gray-100 text-lg"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200 p-3 space-y-3 max-h-[70vh] overflow-y-auto">

          {/* Profile & Settings */}
          <div className="border-b border-gray-200 pb-2">
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/admin/settings");
              }}
              className="w-full text-left px-2 py-2 hover:bg-gray-100 rounded mb-1"
            >
              Settings
            </button>
            <button
              onClick={() => alert("Logging out")}
              className="w-full text-left px-2 py-2 hover:bg-gray-100 rounded text-red-600"
            >
              Logout
            </button>
          </div>

          {/* Notifications */}
          <div>
            <h4 className="font-semibold mb-1 text-sm">Notifications</h4>
            {notifications.length > 0 ? (
              notifications.map((n, idx) => (
                <p key={idx} className="text-sm mb-1">{n.message}</p>
              ))
            ) : (
              <p className="text-sm text-gray-500">No new notifications</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminNavbar;

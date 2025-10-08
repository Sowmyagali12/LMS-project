import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCog, FaSun, FaMoon } from "react-icons/fa";

const Settings = () => {
  const [theme, setTheme] = useState("light"); // default light mode

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Apply theme to document and save to localStorage
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-md p-6 flex flex-col gap-6 transition-colors duration-500">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Settings</h1>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-2">
            <FaCog /> Theme Mode
          </h2>

          {/* Toggle Switch */}
          <div
            onClick={toggleTheme}
            className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
              theme === "light" ? "bg-gray-300" : "bg-blue-500"
            }`}
          >
            <div
              className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center text-yellow-500 ${
                theme === "light" ? "translate-x-0" : "translate-x-8"
              }`}
            >
              {theme === "light" ? <FaSun size={14} /> : <FaMoon size={14} />}
            </div>
          </div>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8 transition-colors duration-500">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm min-h-[300px] transition-colors duration-500">
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={theme}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                {theme === "light" ? "Light Mode Active" : "Dark Mode Active"}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Toggle between light and dark themes dynamically. Your selection will be remembered even if you reload the page.
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default Settings;

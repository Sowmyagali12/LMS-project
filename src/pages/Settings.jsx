import React, { useState } from "react";
import { motion } from "framer-motion";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "account", label: "Account" },
    { id: "security", label: "Security" },
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-50 font-sans">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Settings</h1>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 -mb-px font-medium text-gray-700 transition ${
              activeTab === tab.id
                ? "border-b-2 border-blue-600 text-blue-600"
                : "hover:text-gray-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        {activeTab === "profile" && (
          <motion.div
            key="profile"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Profile Settings
            </h2>
            <p className="text-gray-600 text-sm">
              Update your personal information here.
            </p>
          </motion.div>
        )}
        {activeTab === "account" && (
          <motion.div
            key="account"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Account Settings
            </h2>
            <p className="text-gray-600 text-sm">
              Manage your account preferences and details.
            </p>
          </motion.div>
        )}
        {activeTab === "security" && (
          <motion.div
            key="security"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Security Settings
            </h2>
            <p className="text-gray-600 text-sm">
              Change your password and enable two-factor authentication.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Settings;

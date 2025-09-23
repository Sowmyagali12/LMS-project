import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Settings = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  const [user, setUser] = useState({ name: "John Doe", email: "johndoe@example.com" });
  const [passwords, setPasswords] = useState({ current: "", new: "", confirm: "" });
  const [notifications, setNotifications] = useState({ email: true, sms: false, push: true });
  const [transition, setTransition] = useState(false);

  // Trigger animation on tab change
  useEffect(() => {
    setTransition(true);
    const timer = setTimeout(() => setTransition(false), 300);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const handleProfileChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const handlePasswordChange = (e) => setPasswords({ ...passwords, [e.target.name]: e.target.value });
  const handleNotificationsChange = (e) => setNotifications({ ...notifications, [e.target.name]: e.target.checked });

  const handleSaveProfile = () => alert("Profile updated!");
  const handleChangePassword = () => {
    if (passwords.new !== passwords.confirm) return alert("Passwords do not match!");
    alert("Password changed successfully!");
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="bg-white p-6 shadow rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleProfileChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleProfileChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={handleSaveProfile}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Save Profile
            </button>
          </div>
        );
      case "password":
        return (
          <div className="bg-white p-6 shadow rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>
            {["current", "new", "confirm"].map((field) => (
              <div className="mb-4" key={field}>
                <label className="block mb-1 font-medium">
                  {field === "current"
                    ? "Current Password"
                    : field === "new"
                    ? "New Password"
                    : "Confirm New Password"}
                </label>
                <input
                  type="password"
                  name={field}
                  value={passwords[field]}
                  onChange={handlePasswordChange}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
            <button
              onClick={handleChangePassword}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Change Password
            </button>
          </div>
        );
      case "notifications":
        return (
          <div className="bg-white p-6 shadow rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
            {Object.keys(notifications).map((key) => (
              <div className="flex items-center mb-2" key={key}>
                <input
                  type="checkbox"
                  name={key}
                  checked={notifications[key]}
                  onChange={handleNotificationsChange}
                  className="mr-2"
                />
                <label>{key.charAt(0).toUpperCase() + key.slice(1)} Notifications</label>
              </div>
            ))}
          </div>
        );
      case "account":
        return (
          <div className="bg-white p-6 shadow rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-4">Account Actions</h2>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition mr-2">
              Deactivate Account
            </button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
              Logout
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto relative">
      {/* Back Arrow */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 p-2 rounded-full hover:bg-blue-100 transition z-50"
      >
        <FaArrowLeft className="text-blue-600 w-6 h-6" />
      </button>

      <h1 className="text-3xl font-bold mb-6 text-center">Settings</h1>

      {/* Tabs */}
      <div className="flex border-b mb-6 justify-center">
        {["profile", "password", "notifications", "account"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium transition ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Animated Content */}
      <div
        className={`transition-all duration-300 ease-in-out transform ${
          transition ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        {renderTabContent()}
      </div>

      {/* Inline animation styles for smooth fade/slide */}
      <style>
        {`
          input:focus {
            outline: none;
            box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
          }
        `}
      </style>
    </div>
  );
};

export default Settings;

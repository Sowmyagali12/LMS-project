import React, { useState } from "react";

export default function ChangePassword() {
  const [form, setForm] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.oldPassword || !form.newPassword) {
      setMessage("⚠ Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/stu/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      
        body: JSON.stringify(form),
      });


      const data = await response.json();
      console.log("Server response:", data);

      if (response.ok) {
        setMessage("✅ Password changed successfully!");
        setForm({ email: "", oldPassword: "", newPassword: "" });
      } else {
        setMessage(`❌ ${data.message || "Password change failed."}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("❌ Server error. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-pink-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">🔒 Change Password</h2>

        {message && (
          <div
            className={`mb-4 text-sm font-medium p-3 rounded ${
              message.includes("✅")
                ? "bg-green-100 text-green-800 border border-green-300"
                : "bg-red-100 text-red-800 border border-red-300"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Old Password</label>
            <input
              type="password"
              name="oldPassword"
              value={form.oldPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your current password"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={form.newPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter a new password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}

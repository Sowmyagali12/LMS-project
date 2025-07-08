import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CourseRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    course: "",
    mode: "",
  });

  const [message, setMessage] = useState({ text: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allFilled = Object.values(formData).every((val) => val.trim() !== "");

    if (!allFilled) {
      setMessage({ text: "❌ Please fill in all fields.", type: "error" });
    } else {
      setMessage({ text: "✅ Registration submitted successfully!", type: "success" });
    }
  };

  return (
    <div className="min-h-screen py-10 flex items-center justify-center bg-gradient-to-br from-gray-300 to-blue-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Course Registration Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Mobile Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Gender</label>
            <div className="flex gap-4">
              {["Male", "Female", "Other"].map((g) => (
                <label key={g} className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={formData.gender === g}
                    onChange={handleChange}
                    className="accent-blue-500"
                  />
                  {g}
                </label>
              ))}
            </div>
          </div>

          {/* Select Course */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Select Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">-- Choose Course --</option>
              <option value="Python">Python</option>
              <option value="Web Development">Web Development</option>
              <option value="Java">Java</option>
              <option value="UI/UX">UI/UX</option>
            </select>
          </div>

          {/* Course Mode */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Course Mode</label>
            <div className="flex gap-4">
              {["Online", "Offline"].map((mode) => (
                <label key={mode} className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="radio"
                    name="mode"
                    value={mode}
                    checked={formData.mode === mode}
                    onChange={handleChange}
                    className="accent-blue-500"
                  />
                  {mode}
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          {message.text && (
            <div
              className={`p-2 text-sm rounded text-center font-medium ${
                message.type === "success"
                  ? "text-green-700 bg-green-100 border border-green-300"
                  : "text-red-700 bg-red-100 border border-red-300"
              }`}
            >
              {message.text}
            </div>
          )}

          {/* Register Button (Link) */}
          <div className="pt-4">
            <Link
                to="/payment"
                className="block w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
                Register Now
            </Link>
            </div>

        </form>
      </div>
    </div>
  );
}


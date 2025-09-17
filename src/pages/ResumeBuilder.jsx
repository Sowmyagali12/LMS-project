import React, { useState } from "react";

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">
        📄 Resume Builder
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side - Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">
            Enter Your Details
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Education
              </label>
              <textarea
                name="education"
                value={formData.education}
                onChange={handleChange}
                rows="3"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="E.g. B.Tech in Computer Science, XYZ University"
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Experience
              </label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                rows="3"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="E.g. Intern at ABC Company (3 months)"
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Skills
              </label>
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="E.g. React, Python, Communication"
              />
            </div>
          </form>
        </div>

        {/* Right Side - Preview */}
        <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">
            Resume Preview
          </h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-2xl font-bold text-blue-900">
                {formData.fullName || "Your Name"}
              </h3>
              <p className="text-gray-600">
                {formData.email || "your.email@example.com"} |{" "}
                {formData.phone || "Phone Number"}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-blue-800">🎓 Education</h4>
              <p>{formData.education || "Your education details will appear here."}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-blue-800">💼 Experience</h4>
              <p>{formData.experience || "Your work experience will appear here."}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-blue-800">🛠 Skills</h4>
              <p>{formData.skills || "Your skills will appear here."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;

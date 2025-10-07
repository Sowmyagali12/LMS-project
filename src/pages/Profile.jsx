import React, { useState, useContext, useEffect } from "react";
import { StudentContext } from "../context/StudentContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const ProfilePage = () => {
  const { student, setStudent } = useContext(StudentContext);
  const navigate = useNavigate();

  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    ...student,
    skills: Array.isArray(student?.skills)
      ? student.skills
      : student?.skills?.split(",") || [],
  });
  const [skillInput, setSkillInput] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(student?.avatar || "");

  // Update form data when student changes
  useEffect(() => {
    if (!student) navigate("/logout");
    else {
      setFormData({
        ...student,
        skills: Array.isArray(student.skills)
          ? student.skills
          : student.skills?.split(",") || [],
      });
      setAvatarPreview(student.avatar || "");
    }
  }, [student, navigate]);

  // Clean up object URL to avoid memory leaks
  useEffect(() => {
    return () => {
      if (avatarPreview && formData.avatar instanceof File) {
        URL.revokeObjectURL(avatarPreview);
      }
    };
  }, [avatarPreview, formData.avatar]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, avatar: file });
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    const skill = skillInput.trim();
    if (
      skill &&
      !formData.skills.some((s) => s.toLowerCase() === skill.toLowerCase())
    ) {
      setFormData({ ...formData, skills: [...formData.skills, skill] });
      setSkillInput("");
      toast.success(`Added skill: ${skill}`);
    }
  };

  const handleRemoveSkill = (skill) => {
    setFormData({ ...formData, skills: formData.skills.filter((s) => s !== skill) });
    toast.info(`Removed skill: ${skill}`);
  };

  const handleSave = () => {
    let updatedData = { ...formData };
    if (formData.avatar instanceof File) updatedData.avatar = avatarPreview;
    setStudent(updatedData);
    setEditing(false);
    toast.success("Profile updated successfully!");
  };

  const handleCancel = () => {
    setFormData(student);
    setAvatarPreview(student.avatar || "");
    setSkillInput("");
    setEditing(false);
  };

  if (!student) return null;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <AnimatePresence mode="wait">
        {!editing ? (
          // View Mode
          <motion.div
            key="view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
          >
            <div className="col-span-1 text-center">
              <img
                src={avatarPreview}
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 shadow-md mb-4"
              />
              <button
                onClick={() => setEditing(true)}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Edit Profile
              </button>
            </div>
            <div className="col-span-2 space-y-2">
              <h2 className="text-3xl font-bold text-gray-800">{student.name}</h2>
              <p className="text-gray-600">{student.email}</p>
              <p className="text-gray-600">{student.phone}</p>
              <p className="text-gray-600">
                {student.currentCity}, {student.currentState}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Education:</span> {student.education}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Skills:</span>{" "}
                {student.skills.length
                  ? student.skills.map((s, i) => (
                      <span
                        key={i}
                        className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mr-2 mb-2 shadow-sm"
                      >
                        {s}
                      </span>
                    ))
                  : "No skills added"}
              </p>
              <p className="text-gray-600 italic">{student.about}</p>
            </div>
          </motion.div>
        ) : (
          // Edit Mode
          <motion.div
            key="edit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Avatar */}
            <div className="col-span-1 text-center">
              <img
                src={avatarPreview}
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 shadow-md mb-2"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="mt-2"
              />
            </div>

            {/* Form Fields */}
            <div className="col-span-2 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name || ""}
                    onChange={handleChange}
                    className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email || ""}
                    onChange={handleChange}
                    className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone || ""}
                    onChange={handleChange}
                    className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">Education</label>
                  <input
                    type="text"
                    name="education"
                    value={formData.education || ""}
                    onChange={handleChange}
                    className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium">City</label>
                  <input
                    type="text"
                    name="currentCity"
                    value={formData.currentCity || ""}
                    onChange={handleChange}
                    className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">State</label>
                  <input
                    type="text"
                    name="currentState"
                    value={formData.currentState || ""}
                    onChange={handleChange}
                    className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium">About Me</label>
                <textarea
                  name="about"
                  value={formData.about || ""}
                  onChange={handleChange}
                  className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  rows={3}
                />
              </div>

              {/* Skills */}
              <div>
                <label className="block text-gray-700 font-medium">Skills</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {formData.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm shadow-sm"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => handleRemoveSkill(skill)}
                        className="ml-2 text-red-500 hover:text-red-700"
                        aria-label={`Remove skill ${skill}`}
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                </div>
                <form onSubmit={handleAddSkill} className="flex gap-2">
                  <input
                    type="text"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    placeholder="Add a skill"
                    className="flex-1 border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600 transition"
                  >
                    Add
                  </button>
                </form>
              </div>

              <div className="flex gap-4 mt-4">
                <button
                  onClick={handleSave}
                  className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfilePage;

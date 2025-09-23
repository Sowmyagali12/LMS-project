import React, { useState, useContext, useEffect } from "react";
import { StudentContext } from "../context/StudentContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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

  // Redirect if no student data
  useEffect(() => {
    if (!student) {
      navigate("/logout");
    } else {
      setFormData({
        ...student,
        skills: Array.isArray(student.skills)
          ? student.skills
          : student.skills?.split(",") || [],
      });
      setAvatarPreview(student.avatar || "");
    }
  }, [student, navigate]);

  // Handle text inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle avatar change
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, avatar: file });
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  // Add skill
  const handleAddSkill = (e) => {
    e.preventDefault();
    const skill = skillInput.trim();
    if (skill && !formData.skills.includes(skill)) {
      setFormData({ ...formData, skills: [...formData.skills, skill] });
      setSkillInput("");
      toast.success(`Added skill: ${skill}`);
    }
  };

  // Remove skill
  const handleRemoveSkill = (skill) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s) => s !== skill),
    });
    toast.info(`Removed skill: ${skill}`);
  };

  // Save changes
  const handleSave = () => {
    let updatedData = { ...formData };
    if (formData.avatar instanceof File) {
      updatedData.avatar = avatarPreview; // Use preview URL for simplicity
    }
    setStudent(updatedData);
    setEditing(false);
    toast.success("Profile updated successfully!");
  };

  // Cancel editing
  const handleCancel = () => {
    setFormData(student);
    setAvatarPreview(student.avatar || "");
    setEditing(false);
  };

  if (!student) return null; // safety fallback

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      {!editing ? (
        // View Mode
        <div className="space-y-4 text-center">
          <img
            src={avatarPreview}
            alt="Profile"
            className="w-28 h-28 rounded-full mx-auto border-4 border-blue-500 shadow-md"
          />
          <h2 className="text-2xl font-bold text-gray-800">{student.name}</h2>
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
            {student.skills.length > 0
              ? student.skills.map((s, i) => (
                  <span
                    key={i}
                    className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                  >
                    {s}
                  </span>
                ))
              : "No skills added"}
          </p>
          <p className="text-gray-600 italic">{student.about}</p>

          <button
            onClick={() => setEditing(true)}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Edit Profile
          </button>
        </div>
      ) : (
        // Edit Mode
        <div className="space-y-4">
          {/* Avatar */}
          <div className="text-center">
            <img
              src={avatarPreview}
              alt="Profile"
              className="w-28 h-28 rounded-full mx-auto border-4 border-blue-500 shadow-md mb-2"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="mt-2"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone || ""}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* City + State */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">Current City</label>
              <input
                type="text"
                name="currentCity"
                value={formData.currentCity || ""}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Current State</label>
              <input
                type="text"
                name="currentState"
                value={formData.currentState || ""}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
          </div>

          {/* Education */}
          <div>
            <label className="block text-gray-700 font-medium">Education</label>
            <input
              type="text"
              name="education"
              value={formData.education || ""}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* About */}
          <div>
            <label className="block text-gray-700 font-medium">About Me</label>
            <textarea
              name="about"
              value={formData.about || ""}
              onChange={handleChange}
              className="w-full border p-2 rounded"
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
                  className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(skill)}
                    className="ml-2 text-red-500 hover:text-red-700"
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
                placeholder="Add a skill and press Enter"
                className="flex-1 border p-2 rounded"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
              >
                Add
              </button>
            </form>
          </div>

          {/* Buttons */}
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
      )}
    </div>
  );
};

export default ProfilePage;

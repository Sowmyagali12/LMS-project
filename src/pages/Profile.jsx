import React, { useState, useContext, useEffect } from "react";
import { StudentContext } from "../context/StudentContext";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const { student, setStudent } = useContext(StudentContext);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ ...student });
  const [avatarPreview, setAvatarPreview] = useState(student.avatar);
  const [resumeName, setResumeName] = useState(student.resume ? student.resume.name : "");

  useEffect(() => {
    setFormData({ ...student });
    setAvatarPreview(student.avatar);
    setResumeName(student.resume ? student.resume.name : "");
  }, [student]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, avatar: file });
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, resume: file });
      setResumeName(file.name);
    }
  };

  const handleSave = () => {
    const updatedData = { ...formData };
    if (formData.avatar instanceof File) updatedData.avatar = avatarPreview;
    setStudent({ ...updatedData });
    setEditing(false);
    toast.success("Profile updated successfully!");
  };

  const handleCancel = () => {
    setFormData(student);
    setAvatarPreview(student.avatar);
    setResumeName(student.resume ? student.resume.name : "");
    setEditing(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      {!editing ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="col-span-1 text-center">
            <img src={avatarPreview} alt="Profile" className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 shadow-md mb-4" />
            <button onClick={() => setEditing(true)} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
              Edit Profile
            </button>
          </div>
          <div className="col-span-2 space-y-2">
            <h2 className="text-3xl font-bold text-gray-800">{student.name}</h2>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Phone:</strong> {student.phone}</p>
            <p><strong>WhatsApp:</strong> {student.whatsapp}</p>
            <p><strong>DOB:</strong> {student.dob}</p>
            <p><strong>Gender:</strong> {student.gender}</p>
            <p><strong>Address:</strong> {student.address}</p>
            <p><strong>Education:</strong> {student.education}</p>
            <p><strong>Skills:</strong> {student.skills.join(", ")}</p>
            <p>{student.about}</p>
            {student.resume && <p><strong>Resume:</strong> {student.resume.name || "Uploaded"}</p>}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 text-center">
            <img src={avatarPreview} alt="Profile" className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 shadow-md mb-2" />
            <input type="file" accept="image/*" onChange={handleAvatarChange} className="mt-2"/>
            <div className="mt-4">
              <label className="block font-medium mb-1">Upload Resume</label>
              <input type="file" accept=".pdf,.doc,.docx" onChange={handleResumeChange} />
              {resumeName && <p className="text-gray-600 mt-1">{resumeName}</p>}
            </div>
          </div>
          <div className="col-span-2 space-y-4">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400"/>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400"/>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400"/>
            <input type="text" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="WhatsApp Number" className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400"/>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400"/>
            <select name="gender" value={formData.gender} onChange={handleChange} className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400" rows={3}/>
            <textarea name="about" value={formData.about} onChange={handleChange} placeholder="About Me" className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400" rows={3}/>
            <div className="flex gap-4 mt-4">
              <button onClick={handleSave} className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">Save</button>
              <button onClick={handleCancel} className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;

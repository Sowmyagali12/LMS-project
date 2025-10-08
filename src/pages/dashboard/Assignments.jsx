// src/pages/dashboard/Assignments.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaClock, FaCheck, FaUpload, FaArrowLeft, FaExclamationCircle } from "react-icons/fa";
import { useProgress } from "../../context/ProgressContext";

const assignmentsList = [
  { id: 1, title: "JavaScript Basics", deadline: "2025-09-10" },
  { id: 2, title: "React Components", deadline: "2025-09-12" },
  { id: 3, title: "Node.js Intro", deadline: "2025-09-14" },
  { id: 4, title: "Database Assignment", deadline: "2025-09-16" },
  { id: 5, title: "Resume Draft", deadline: "2025-09-18" },
];

const Assignments = () => {
  const navigate = useNavigate();
  const { assignmentsProgress, updateAssignmentProgress } = useProgress();
  const [uploadProgress, setUploadProgress] = useState({});

  const statusStyles = {
    pending: { color: "bg-blue-300", icon: <FaArrowLeft /> },
    "in-progress": { color: "bg-blue-400", icon: <FaClock /> },
    completed: { color: "bg-blue-600", icon: <FaCheck /> },
    overdue: { color: "bg-blue-700", icon: <FaExclamationCircle /> },
  };

  const daysLeft = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const handleUpload = (e, id) => {
    const file = e.target.files[0];
    if (file) {
      setUploadProgress((prev) => ({ ...prev, [id]: 0 }));
      updateAssignmentProgress(id, "in-progress");

      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          const newVal = prev[id] + 20;
          if (newVal >= 100) {
            clearInterval(interval);
            updateAssignmentProgress(id, "completed");
            return { ...prev, [id]: 100 };
          }
          return { ...prev, [id]: newVal };
        });
      }, 300);
    }
  };

  const renderProgressBar = (id) => {
    if (uploadProgress[id] !== undefined && uploadProgress[id] < 100) {
      return (
        <div className="w-full mt-1">
          <span className="text-sm text-blue-800">Uploading...</span>
          <div className="w-full bg-blue-100 rounded-full h-2 mt-1 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-700 h-2 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${uploadProgress[id]}%` }}
            />
          </div>
        </div>
      );
    }
    if (uploadProgress[id] === 100) {
      return <span className="text-sm text-blue-900 font-semibold">Upload Complete</span>;
    }
    return null;
  };

  return (
    <div className="p-4 md:p-8 bg-blue-50 min-h-screen relative">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 p-2 rounded-full hover:bg-blue-200 transition z-50"
        aria-label="Go Back"
      >
        <FaArrowLeft className="text-blue-700 w-6 h-6" />
      </button>

      {/* Header */}
      <h1 className="text-3xl md:text-5xl font-extrabold mb-8 text-center text-black drop-shadow-lg">
        Assignment List
      </h1>

      {/* Assignment List */}
      <div className="flex flex-col gap-4">
        {assignmentsList.map((a, index) => {
          const baseStatus = assignmentsProgress[a.id] || "pending";
          const remainingDays = daysLeft(a.deadline);
          const status =
            remainingDays < 0 && baseStatus !== "completed" ? "overdue" : baseStatus;
          const { color, icon } = statusStyles[status];

          return (
            <div
              key={a.id}
              className="flex items-center justify-between bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              {/* Left Accent */}
              <div className={`w-2 ${color} h-full rounded-l-xl`}></div>

              {/* Content */}
              <div className="flex-1 flex flex-col md:flex-row justify-between items-center px-4 py-3 gap-2 md:gap-6">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <span className="font-semibold text-lg">{index + 1}. {a.title}</span>
                  <span className="text-sm text-gray-700">Deadline: {a.deadline}</span>
                  <span className="text-sm text-gray-700">
                    {remainingDays >= 0 ? `${remainingDays} day${remainingDays>1?'s':''} left` : "Deadline passed"}
                  </span>
                </div>
                <div className="flex flex-col items-center md:items-end gap-2">
                  <span className="flex items-center gap-1 font-semibold text-blue-800">
                    {icon} {status.replace("-", " ").toUpperCase()}
                  </span>
                  <label className="flex flex-col items-end gap-2 cursor-pointer">
                    <button className="flex items-center gap-2 px-4 py-1 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full hover:from-blue-600 hover:to-blue-800 transition">
                      <FaUpload /> Upload
                    </button>
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => handleUpload(e, a.id)}
                    />
                    {renderProgressBar(a.id)}
                  </label>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Assignments;

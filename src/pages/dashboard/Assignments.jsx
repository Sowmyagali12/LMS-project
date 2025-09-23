// src/pages/dashboard/Assignments.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCheck, FaClock, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { useProgress } from "../../context/ProgressContext";

// Assignments data
const assignmentsList = [
  { id: 1, title: "JavaScript Basics", deadline: "10 Sept 2025" },
  { id: 2, title: "React Components", deadline: "12 Sept 2025" },
  { id: 3, title: "Node.js Intro", deadline: "14 Sept 2025" },
  { id: 4, title: "Database Assignment", deadline: "16 Sept 2025" },
  { id: 5, title: "Resume Draft", deadline: "18 Sept 2025" },
];

const Assignments = () => {
  const navigate = useNavigate();
  const { assignmentsProgress, updateAssignmentProgress } = useProgress();

  // Compute status counts
  const statusCounts = assignmentsList.reduce(
    (acc, a) => {
      const status = assignmentsProgress[a.id] || "pending";
      if (status === "completed") acc.submitted += 1;
      else if (status === "in-progress") acc.inProgress += 1;
      else acc.pending += 1;
      return acc;
    },
    { submitted: 0, inProgress: 0, pending: 0 }
  );

  // Badge colors & icons
  const statusStyles = {
    pending: { color: "bg-red-100 text-red-700", icon: <FaTimes /> },
    "in-progress": { color: "bg-yellow-100 text-yellow-700", icon: <FaClock /> },
    completed: { color: "bg-green-100 text-green-700", icon: <FaCheck /> },
  };

  // Toggle assignment status: pending -> in-progress -> completed -> pending
  const toggleStatus = (id) => {
    const current = assignmentsProgress[id] || "pending";
    const next =
      current === "pending"
        ? "in-progress"
        : current === "in-progress"
        ? "completed"
        : "pending";
    updateAssignmentProgress(id, next);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen relative">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 p-2 rounded-full hover:bg-blue-100 transition z-50"
      >
        <FaArrowLeft className="text-blue-600 w-6 h-6" />
      </button>

      {/* Header */}
      <h1
        className="text-4xl md:text-5xl font-extrabold mb-10 text-center
                  bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#3B82F6]
                  bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(30,58,138,0.5)]"
      >
        Assignment Status
      </h1>

      {/* Summary Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-green-100 text-green-800 p-6 rounded-xl shadow text-center"
        >
          <h2 className="text-2xl font-bold">{statusCounts.submitted}</h2>
          <p className="font-medium">Assignments Completed</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-yellow-100 text-yellow-800 p-6 rounded-xl shadow text-center"
        >
          <h2 className="text-2xl font-bold">{statusCounts.inProgress}</h2>
          <p className="font-medium">In Progress</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-red-100 text-red-800 p-6 rounded-xl shadow text-center"
        >
          <h2 className="text-2xl font-bold">{statusCounts.pending}</h2>
          <p className="font-medium">Pending</p>
        </motion.div>
      </section>

      {/* Assignment Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {assignmentsList.map((a) => {
          const status = assignmentsProgress[a.id] || "pending";
          const { color, icon } = statusStyles[status];

          return (
            <motion.div
              key={a.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-800">{a.title}</h3>
                <span
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${color}`}
                >
                  {icon} {status.replace("-", " ").toUpperCase()}
                </span>
              </div>
              <p className="text-gray-600">
                Deadline: <b>{a.deadline}</b>
              </p>

              <button
                onClick={() => toggleStatus(a.id)}
                className={`mt-4 px-4 py-1 rounded-full transition text-white ${
                  status === "completed"
                    ? "bg-gray-400 hover:bg-gray-500"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {status === "completed" ? "Reset" : "Next Status"}
              </button>
            </motion.div>
          );
        })}
      </section>

      {/* Notes Section */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">Remarks / Notes</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Submit <b>Node.js Intro</b> before the deadline.</li>
          <li>Database assignment still needs final testing.</li>
          <li>Excellent improvement in React assignments.</li>
        </ul>
      </section>
    </div>
  );
};

export default Assignments;

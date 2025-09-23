// src/pages/dashboard/Courses.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { courses } from "../../components/coursesData";
import { motion } from "framer-motion";
import { useProgress } from "../../context/ProgressContext";
import { FaArrowLeft } from "react-icons/fa";

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CourseCard = ({ course, status, updateProgress }) => {
  const navigate = useNavigate();

  const statusColors = {
    "not-started": "bg-gray-100 text-gray-700",
    "in-progress": "bg-yellow-100 text-yellow-800",
    completed: "bg-green-100 text-green-800",
  };

  const renderActionButton = () => {
    if (status === "not-started") {
      return (
        <button
          onClick={() => updateProgress(course.id, "in-progress")}
          className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200 transition"
        >
          Start Course
        </button>
      );
    }

    if (status === "in-progress") {
      return (
        <button
          onClick={() => updateProgress(course.id, "completed")}
          className="px-4 py-2 rounded-full bg-green-100 text-green-800 hover:bg-green-200 transition"
        >
          Mark Completed
        </button>
      );
    }

    return null;
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.03 }}
      className="relative p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
    >
      <div>
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-blue-600">{course.title}</h3>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[status]}`}
          >
            {status.replace("-", " ").toUpperCase()}
          </span>
        </div>
        <p className="text-gray-600 mt-2">{course.description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 justify-between items-center">
        <button
          onClick={() => navigate(`/course/${course.id}/syllabus`)}
          className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          View Syllabus
        </button>
        {renderActionButton()}
      </div>
    </motion.div>
  );
};

const Courses = () => {
  const { coursesProgress, updateProgress } = useProgress();
  const navigate = useNavigate();

  const staggerDelay = window.innerWidth >= 1024 ? 0.1 : 0.15;

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: staggerDelay } },
  };

  return (
    <div className="pt-20 px-6 pb-8 min-h-screen bg-blue-50 max-w-[1200px] mx-auto relative">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 p-2 rounded-full hover:bg-blue-100 transition z-50"
      >
        <FaArrowLeft className="text-blue-600 w-6 h-6" />
      </button>

      <h1 className="text-4xl font-bold text-blue-600 mb-8">Courses</h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            status={coursesProgress[course.id] || "not-started"}
            updateProgress={updateProgress}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Courses;

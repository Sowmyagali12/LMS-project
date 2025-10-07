// src/pages/dashboard/CourseSyllabus.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../../components/coursesData";
import { useProgress } from "../../context/ProgressContext";
import { FaCheckCircle, FaBook, FaCode, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const CourseSyllabus = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { coursesProgress, updateCourseProgress } = useProgress();
  const [expandedWeeks, setExpandedWeeks] = useState({});

  const course = courses.find((c) => String(c.id) === String(id));

  if (!course) {
    return (
      <div className="ml-4 md:ml-16 p-8 text-center text-red-500">
        Course not found (id: {id})
      </div>
    );
  }

  const courseProgress = coursesProgress[course.id] || {
    status: "not-started",
    completedWeeks: [],
  };

  const toggleWeekCompletion = (weekIndex) => {
    const updatedWeeks = courseProgress.completedWeeks.includes(weekIndex)
      ? courseProgress.completedWeeks.filter((w) => w !== weekIndex)
      : [...courseProgress.completedWeeks, weekIndex];

    let newStatus = "not-started";
    if (updatedWeeks.length > 0 && updatedWeeks.length < course.syllabus.length) {
      newStatus = "in-progress";
    } else if (updatedWeeks.length === course.syllabus.length) {
      newStatus = "completed";
    }

    updateCourseProgress(course.id, newStatus, updatedWeeks);
  };

  const toggleExpand = (weekIndex) => {
    setExpandedWeeks((prev) => ({
      ...prev,
      [weekIndex]: !prev[weekIndex],
    }));
  };

  const icons = [<FaBook />, <FaCode />, <FaLaptopCode />];

  return (
    <div className="min-h-screen p-4 md:ml-16 bg-gradient-to-b from-gray-50 to-blue-50">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        ← Back to Courses
      </button>

      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
        {course.title}
      </h1>
      <p className="text-gray-700 mb-12 text-base md:text-lg">{course.description}</p>

      {/* Timeline Container */}
      <div className="relative">
        <div className="absolute left-8 top-0 w-1 h-full bg-gray-300 rounded"></div>

        {course.syllabus.map((weekContent, idx) => {
          const isCompleted = courseProgress.completedWeeks.includes(idx);
          const isOpen = expandedWeeks[idx] || false;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative flex items-start mb-8"
            >
              {/* Icon Circle */}
              <div className="flex flex-col items-center mr-8 z-10">
                <div
                  onClick={() => toggleExpand(idx)}
                  className={`w-12 h-12 flex items-center justify-center rounded-full shadow-lg cursor-pointer transition-transform ${
                    isCompleted ? "bg-green-500" : "bg-blue-500"
                  } ${isOpen ? "scale-105" : ""}`}
                >
                  <span className="text-white text-xl md:text-2xl">{icons[idx % icons.length]}</span>
                </div>
              </div>

              {/* Content Card */}
              <div className="flex-1">
                <div
                  onClick={() => toggleExpand(idx)}
                  className="flex justify-between items-center p-4 md:p-6 rounded-2xl shadow-lg bg-white border border-gray-200 hover:shadow-xl cursor-pointer transition-all"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-blue-600">Week {idx + 1}</h3>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWeekCompletion(idx);
                    }}
                    className={`flex items-center space-x-1 text-sm md:text-base font-normal ${
                      isCompleted ? "text-green-600" : "text-gray-400"
                    }`}
                  >
                    <FaCheckCircle />
                    <span>{isCompleted ? "Completed" : "Mark Complete"}</span>
                  </button>
                </div>

                {/* Collapsible Content */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden p-4 md:p-6 bg-gray-50 rounded-b-2xl border-l border-r border-b border-gray-200"
                >
                  <pre className="whitespace-pre-line text-gray-800 text-sm md:text-base font-normal">
                    {weekContent}
                  </pre>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseSyllabus;

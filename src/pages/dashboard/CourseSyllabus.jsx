// src/pages/dashboard/SyllabusPage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../../components/coursesData";
import { FaBook, FaCode, FaLaptopCode, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const CourseSyllabus = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="ml-4 md:ml-16 p-8 text-center text-red-500">
        Course not found
      </div>
    );
  }

  const getIcon = (index) => {
    const icons = [<FaBook />, <FaCode />, <FaLaptopCode />];
    return icons[index % icons.length];
  };

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="p-4 md:ml-16 min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        ← Back to Courses
      </button>

      {/* Course Title */}
      <h1 className="text-3xl md:text-4xl font-normal text-blue-700 mb-4">{course.title}</h1>
      <p className="text-gray-700 mb-12 text-base md:text-lg font-normal">{course.description}</p>

      {/* Vertical Roadmap */}
      <motion.div
        className="relative pl-12 md:pl-16"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Vertical timeline */}
        <div className="absolute left-6 top-0 h-full w-1 bg-gray-300 rounded"></div>

        {course.syllabus.map((weekContent, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="flex flex-col md:flex-row items-start mb-12 relative"
          >
            {/* Node Icon */}
            <div className="flex flex-col items-center mr-6 md:mr-8 z-10">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl md:text-2xl shadow-lg mb-2">
                {getIcon(idx)}
              </div>
            </div>

            {/* Content Card */}
            <div className="flex-1 min-w-0 p-4 md:p-6 rounded-2xl shadow-lg border border-gray-200 bg-white hover:shadow-xl transition-all">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg md:text-xl text-blue-600 font-normal">
                  Week {idx + 1}
                </h3>
                <div className="flex items-center space-x-1 text-green-600 text-sm md:text-base font-normal">
                  <FaCheckCircle /> <span>Completed</span>
                </div>
              </div>
              <pre className="whitespace-pre-line text-gray-800 text-sm md:text-base font-normal">{weekContent}</pre>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CourseSyllabus;
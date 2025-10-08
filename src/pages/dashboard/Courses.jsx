// src/pages/dashboard/Courses.jsx
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { courses } from "../../components/coursesData";
import { motion, useAnimation } from "framer-motion";
import { useProgress } from "../../context/ProgressContext";
import { FaArrowLeft } from "react-icons/fa";

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Animated Progress Bar using useRef (no ESLint warning)
const ProgressBar = ({ progress }) => {
  const controls = useAnimation();
  const [displayProgress, setDisplayProgress] = useState(0);
  const displayRef = useRef(0);

  useEffect(() => {
    // Animate the bar width
    controls.start({ width: `${progress}%`, transition: { duration: 0.8, ease: "easeOut" } });

    const duration = 800;
    const steps = duration / 16;
    const increment = (progress - displayRef.current) / steps;

    const interval = setInterval(() => {
      displayRef.current += increment;
      if (
        (increment > 0 && displayRef.current >= progress) ||
        (increment < 0 && displayRef.current <= progress)
      ) {
        displayRef.current = progress;
        setDisplayProgress(progress);
        clearInterval(interval);
      } else {
        setDisplayProgress(Math.round(displayRef.current));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [progress, controls]);

  return (
    <div className="mt-4">
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <motion.div
          className="h-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
          initial={{ width: 0 }}
          animate={controls}
        />
      </div>
      <p className="text-sm text-gray-600 mt-1">{displayProgress}% completed</p>
    </div>
  );
};

const CourseCard = ({ course, status, progress, updateProgress, courseProgress }) => {
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
          onClick={() => updateProgress(course.id, "in-progress", [])}
          className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200 transition"
        >
          Start Course
        </button>
      );
    }

    if (status === "in-progress") {
      const isFullyCompleted =
        courseProgress?.completedWeeks?.length === course.syllabus.length;

      return (
        <button
          onClick={() =>
            updateProgress(
              course.id,
              "completed",
              Array.from({ length: course.syllabus.length }, (_, i) => i)
            )
          }
          className={`px-4 py-2 rounded-full transition ${
            isFullyCompleted
              ? "bg-gray-300 text-gray-700 cursor-not-allowed"
              : "bg-green-100 text-green-800 hover:bg-green-200"
          }`}
          disabled={isFullyCompleted}
        >
          {isFullyCompleted ? "Completed" : "Mark Completed"}
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

      <ProgressBar progress={progress} />

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
  const { coursesProgress, updateCourseProgress } = useProgress();
  const navigate = useNavigate();

  const staggerDelay = window.innerWidth >= 1024 ? 0.1 : 0.15;

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: staggerDelay } },
  };

  const calculateProgress = (course, courseProgress) => {
    if (!courseProgress || !course.syllabus || course.syllabus.length === 0) return 0;

    const totalWeeks = course.syllabus.length;
    const completed = courseProgress.completedWeeks?.length || 0;
    const progress = Math.round((completed / totalWeeks) * 100);

    return Math.min(Math.max(progress, 0), 100);
  };

  return (
    <div className="pt-20 px-6 pb-8 min-h-screen bg-blue-50 max-w-[1200px] mx-auto relative">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 p-2 rounded-full hover:bg-blue-100 transition z-50"
      >
        <FaArrowLeft className="text-blue-600 w-6 h-6" />
      </button>

      {/* Increased heading size */}
      <h1 className="text-5xl font-extrabold text-black mb-10 drop-shadow-lg text-center">
        Courses
      </h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {courses.map((course) => {
          const courseProgress = coursesProgress[course.id];
          const status = courseProgress?.status || "not-started";
          const progress = calculateProgress(course, courseProgress);

          return (
            <CourseCard
              key={course.id}
              course={course}
              status={status}
              progress={progress}
              updateProgress={updateCourseProgress}
              courseProgress={courseProgress}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Courses;

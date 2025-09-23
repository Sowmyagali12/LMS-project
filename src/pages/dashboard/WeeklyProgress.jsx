import React, { useRef, useEffect, useState } from "react";
import { FaCheck, FaTimes, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const WeeklyProgress = ({ weeklyData = [], hoursStudied = 0 }) => {
  const navigate = useNavigate();

  if (weeklyData.length === 0) {
    weeklyData = [
      { day: "Mon", completed: true },
      { day: "Tue", completed: true },
      { day: "Wed", completed: false },
      { day: "Thu", completed: true },
      { day: "Fri", completed: false },
      { day: "Sat", completed: true },
      { day: "Sun", completed: false },
    ];
  }

  const totalTasks = weeklyData.length;
  const completedTasks = weeklyData.filter((d) => d.completed).length;

  const upcomingTasks = [
    { task: "React Hooks tutorial", priority: "High" },
    { task: "Submit Assignment 3", priority: "Medium" },
    { task: "APIs in React", priority: "Low" },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-700 border-red-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Low":
        return "bg-green-100 text-green-700 border-green-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    const handleScroll = () => {
      const cards = Array.from(container.children);
      const containerCenter = container.scrollLeft + container.offsetWidth / 2;
      const distances = cards.map(
        (card) => Math.abs(card.offsetLeft + card.offsetWidth / 2 - containerCenter)
      );
      const closestIndex = distances.indexOf(Math.min(...distances));
      setActiveIndex(closestIndex);
    };
    container.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="p-6 bg-white rounded-3xl shadow-md space-y-8 relative">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 p-2 rounded-full hover:bg-blue-100 transition z-50"
      >
        <FaArrowLeft className="text-blue-600 w-6 h-6" />
      </button>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-gray-800">
        Weekly Progress
      </h1>

      {/* Horizontal Day Cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory"
      >
        {weeklyData.map((day, index) => (
          <motion.div
            key={index}
            animate={{
              scale: index === activeIndex ? 1.08 : 1,
              boxShadow:
                index === activeIndex
                  ? "0 8px 20px rgba(0,0,0,0.15)"
                  : "0 2px 6px rgba(0,0,0,0.05)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`flex-shrink-0 w-28 p-4 rounded-2xl border flex flex-col items-center justify-center font-semibold transition-all duration-300 snap-start ${
              day.completed
                ? "bg-green-50 border-green-200 text-green-800"
                : "bg-red-50 border-red-200 text-red-800"
            }`}
          >
            <span className="text-lg">{day.day}</span>
            <span className="text-3xl my-2">
              {day.completed ? <FaCheck /> : <FaTimes />}
            </span>
            <span className="text-sm">{day.completed ? "Done" : "Pending"}</span>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div whileHover={{ scale: 1.03 }} className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-2xl text-center">
          <h3 className="text-lg font-semibold mb-2">✅ Completed Tasks</h3>
          <p className="text-2xl">{completedTasks} / {totalTasks}</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.03 }} className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-6 rounded-2xl text-center">
          <h3 className="text-lg font-semibold mb-2">⏳ Pending Tasks</h3>
          <p className="text-2xl">{totalTasks - completedTasks}</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.03 }} className="bg-blue-50 border border-blue-200 text-blue-800 p-6 rounded-2xl text-center">
          <h3 className="text-lg font-semibold mb-2">📚 Hours Studied</h3>
          <p className="text-2xl">{hoursStudied} hrs</p>
        </motion.div>
      </div>

      {/* Upcoming Tasks */}
      <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Upcoming Tasks</h2>
        <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory">
          {upcomingTasks.map((task, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className={`flex-shrink-0 px-4 py-2 rounded-full font-medium border snap-start ${getPriorityColor(task.priority)}`}
            >
              {task.task}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeeklyProgress;

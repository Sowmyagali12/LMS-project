// src/pages/dashboard/Placements.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaBriefcase, FaBuilding } from "react-icons/fa";
import { motion } from "framer-motion";

const Placements = () => {
  const navigate = useNavigate();

  const placementCards = [
    {
      title: "Job Portal",
      description: "Explore job opportunities and apply directly.",
      icon: <FaBriefcase size={22} />, // removed color
      link: "/placements/job-portal",
      bg: "from-indigo-100 to-blue-50",
      hover: "hover:shadow-indigo-300",
    },
    {
      title: "Recent Placement Companies",
      description: "Check out companies where students were placed recently.",
      icon: <FaBuilding size={22} />, // removed color
      link: "/placements/recent-placement-companies",
      bg: "from-teal-100 to-green-50",
      hover: "hover:shadow-teal-300",
    },
  ];

  return (
    <div
      className="p-8 min-h-screen font-sans relative
      bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300"
    >
      {/* Back Arrow */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 p-2 rounded-full hover:bg-blue-100 transition z-50"
      >
        <FaArrowLeft className="text-blue-600 w-6 h-6" />
      </button>

      {/* Header */}
      <motion.div
        className="mb-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold !text-black drop-shadow-sm mb-2">
          Placements
        </h1>
        <p className="text-blue-700 text-sm md:text-base">
          Explore placement opportunities and job portals.
        </p>
      </motion.div>

      {/* Placement Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {placementCards.map((card, idx) => (
          <Link to={card.link} key={idx}>
            <motion.div
              className={`
                rounded-2xl p-6 border border-gray-200 shadow-md
                bg-gradient-to-br ${card.bg}
                transform transition-all duration-300
                hover:-translate-y-2 hover:scale-105 ${card.hover}
                cursor-pointer
              `}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.07, boxShadow: "0 15px 25px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                className="flex items-center justify-between"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 + 0.3 }}
              >
                <div className="p-4 bg-white rounded-full shadow-sm text-gray-800">
                  {card.icon}
                </div>
              </motion.div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold !text-black">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-700 mt-1">
                  {card.description}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Placements;

import React from "react";
import { FaBullhorn, FaReact, FaCalendarAlt, FaFileAlt, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const updates = [
  {
    id: 1,
    type: "announcement",
    title: "New Internship Openings",
    date: "15 Sept 2025",
    description: "Several new internships have been posted in the Placement Portal. Check them out!",
    icon: <FaBullhorn />,
    gradient: "from-yellow-400 to-yellow-200",
  },
  {
    id: 2,
    type: "workshop",
    title: "React Workshop",
    date: "12 Sept 2025",
    description: "A hands-on workshop on React.js will be conducted this Friday at 3 PM in Lab 2.",
    icon: <FaReact />,
    gradient: "from-blue-400 to-blue-200",
  },
  {
    id: 3,
    type: "deadline",
    title: "Assignment Deadline Reminder",
    date: "10 Sept 2025",
    description: "Submit your Node.js Intro assignment by 14 Sept 2025 to avoid late penalties.",
    icon: <FaFileAlt />,
    gradient: "from-green-400 to-green-200",
  },
  {
    id: 4,
    type: "session",
    title: "Resume Building Session",
    date: "8 Sept 2025",
    description: "Attend the resume building session on Monday at 2 PM. Limited seats available.",
    icon: <FaCalendarAlt />,
    gradient: "from-purple-400 to-purple-200",
  },
];

const Updates = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 md:p-8 bg-gray-50 min-h-screen relative">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 p-2 rounded-full hover:bg-blue-100 transition z-50"
      >
        <FaArrowLeft className="text-blue-600 w-6 h-6" />
      </button>

      {/* Header */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-12 
                     bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 
                     bg-clip-text text-transparent 
                     drop-shadow-[0_0_15px_rgba(99,102,241,0.7)] 
                     tracking-tight text-center">
        Latest Updates
      </h1>

      {/* Desktop Timeline */}
      <div className="hidden md:block relative ml-12">
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-300 rounded-full"></div>
        <div className="space-y-10">
          {updates.map((update, index) => (
            <motion.div
              key={update.id}
              className="relative flex items-start group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Icon */}
              <div className="flex flex-col items-center mr-8">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg bg-gradient-to-r ${update.gradient}`}
                >
                  {update.icon}
                </div>
                {index !== updates.length - 1 && <div className="flex-1 w-1 bg-gray-300"></div>}
              </div>

              {/* Card */}
              <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 w-full">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-2xl font-semibold text-gray-800">{update.title}</h2>
                  <span className="text-gray-500 text-sm flex items-center gap-1">
                    <FaCalendarAlt /> {update.date}
                  </span>
                </div>
                <p className="text-gray-700 text-lg">{update.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden relative overflow-x-auto py-4 snap-x snap-mandatory flex space-x-6">
        {updates.map((update, index) => (
          <motion.div
            key={update.id}
            className="flex-shrink-0 w-80 relative snap-start group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex flex-col items-center mb-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg bg-gradient-to-r ${update.gradient}`}
              >
                {update.icon}
              </div>
              {index !== updates.length - 1 && <div className="h-12 w-1 bg-gray-300 mt-2"></div>}
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 w-full">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-gray-800">{update.title}</h2>
                <span className="text-gray-500 text-sm flex items-center gap-1">
                  <FaCalendarAlt /> {update.date}
                </span>
              </div>
              <p className="text-gray-700">{update.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Updates;

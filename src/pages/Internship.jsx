import React from "react";
import { FaBriefcase, FaCalendarAlt, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const internships = [
  {
    company: "Google",
    role: "Frontend Developer Intern",
    duration: "June 2024 - Aug 2024",
    description:
      "Built reusable React UI components and optimized performance by 20%.",
    status: "Completed",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    skills: ["React", "JavaScript", "CSS", "Performance Optimization"],
  },
  {
    company: "Microsoft",
    role: "Data Science Intern",
    duration: "Jan 2024 - Mar 2024",
    description:
      "Analyzed datasets and developed predictive models to support business insights.",
    status: "Ongoing",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    skills: ["Python", "SQL", "Machine Learning", "Data Analysis"],
  },
];

const Internship = () => {
  const navigate = useNavigate();

  return (
    <div className="p-10 min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 text-gray-900 relative font-sans">
      {/* Back Arrow */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 p-2 rounded-full hover:bg-blue-100 transition z-50"
      >
        <FaArrowLeft className="text-blue-600 w-6 h-6" />
      </button>

      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-5xl font-extrabold mb-3 text-blue-900 drop-shadow-sm">
          Internships
        </h1>
        <p className="text-blue-700 text-lg max-w-2xl mx-auto">
          A journey of hands-on industry experience and skill application.
        </p>
      </motion.div>

      {/* Internship Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {internships.map((intern, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="rounded-2xl p-6 bg-white border border-gray-200 shadow-md 
                       transform transition-all duration-300 hover:-translate-y-2 
                       hover:shadow-lg hover:scale-105"
          >
            {/* Header: Logo + Company + Status */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-white rounded-full shadow-md">
                  <img
                    src={intern.logo}
                    alt={intern.company}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  {intern.company}
                </h2>
              </div>
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full shadow-sm ${
                  intern.status === "Completed"
                    ? "bg-gradient-to-r from-green-200 to-green-400 text-green-800"
                    : "bg-gradient-to-r from-yellow-200 to-yellow-400 text-yellow-800"
                }`}
              >
                {intern.status}
              </span>
            </div>

            <hr className="border-gray-200 mb-4" />

            {/* Role & Duration */}
            <p className="text-lg font-semibold flex items-center gap-2 text-gray-800">
              <FaBriefcase className="text-blue-500" />
              {intern.role}
            </p>
            <p className="text-sm flex items-center gap-2 mb-3 text-gray-500">
              <FaCalendarAlt className="text-gray-400" />
              {intern.duration}
            </p>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">{intern.description}</p>

            {/* Skills */}
            <div className="mt-4 flex flex-wrap gap-2">
              {intern.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-blue-50 text-blue-800 text-xs px-3 py-1 rounded-full shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Internship;

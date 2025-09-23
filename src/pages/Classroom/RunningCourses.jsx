import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const RunningCourses = () => {
  const navigate = useNavigate();

  const runningCourses = [
    { name: "React.js", completed: 6, total: 10 },
    { name: "Node.js", completed: 3, total: 10 },
    { name: "Database Management", completed: 9, total: 20 },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 min-h-screen relative">
      {/* Back Arrow */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 p-2 rounded-full hover:bg-blue-100 transition z-50"
      >
        <FaArrowLeft className="text-blue-600 w-6 h-6" />
      </button>

      {/* Header */}
      <h1
        className="text-3xl md:text-4xl font-extrabold mb-8 text-center 
                   bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#3B82F6] 
                   bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(30,58,138,0.5)]"
      >
        Running Courses
      </h1>

      <ul className="space-y-6">
        {runningCourses.map((course, index) => {
          const progress = course.completed / course.total;

          return (
            <li
              key={index}
              className="p-6 border rounded-xl shadow-sm bg-white hover:shadow-md transition duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-lg text-blue-900">
                  {course.name}
                </h3>
                <span className="text-sm text-gray-500">
                  {course.completed} of {course.total} modules
                </span>
              </div>

              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                <div
                  className="bg-blue-600 h-3 transition-all duration-500"
                  style={{ width: `${progress * 100}%` }}
                ></div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RunningCourses;

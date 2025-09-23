import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const CompletedCourses = () => {
  const navigate = useNavigate();

  const completedCourses = [
    { name: "JavaScript Basics", completedOn: "05 Sept 2025", status: "Internship at XYZ Corp" },
    { name: "HTML & CSS", completedOn: "28 Aug 2025", status: "No placement yet" },
    { name: "React Fundamentals", completedOn: "10 Sept 2025", status: "Job at ABC Tech" },
    { name: "Node.js Essentials", completedOn: "12 Sept 2025", status: "No placement yet" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen relative">
      {/* Back Arrow */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 p-2 rounded-full hover:bg-blue-100 transition z-50"
      >
        <FaArrowLeft className="text-blue-600 w-6 h-6" />
      </button>

      {/* Header */}
      <div className="mb-6 text-center">
        <h1
          className="text-4xl md:text-5xl font-extrabold mb-8 
                     bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#3B82F6] 
                     bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(30,58,138,0.5)]"
        >
          Completed Courses
        </h1>
        <p className="text-gray-600">
          Overview of your completed courses and their placement/internship status.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#3B82F6] text-white">
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Course Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Completion Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Placement / Internship
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {completedCourses.map((course, index) => (
              <tr
                key={index}
                className="hover:bg-gradient-to-r hover:from-[#1E40AF] hover:via-[#1D4ED8] hover:to-[#2563EB] hover:text-white transition duration-200"
              >
                <td className="px-6 py-4 whitespace-nowrap font-medium">{course.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{course.completedOn}</td>
                <td className="px-6 py-4 whitespace-nowrap">{course.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompletedCourses;

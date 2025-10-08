import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const RecentPlacementCompanies = () => {
  const navigate = useNavigate();
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Infosys",
    "TCS",
    "Facebook",
    "Apple",
    "IBM",
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen relative">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 p-2 rounded-full hover:bg-blue-100 transition z-50"
        title="Go Back"
      >
        <FaArrowLeft className="text-blue-600 text-2xl" />
      </button>

      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Recently Placed Companies
        </h1>
        <p className="text-gray-600">
          These are some of the companies where our students were recently placed.
        </p>
      </div>

      {/* Companies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {companies.map((company, index) => (
          <div
            key={index}
            className="rounded-xl p-6 flex items-center justify-center
              bg-gradient-to-tr from-green-100 via-blue-100 to-purple-100
              shadow-md transform transition-all duration-300
              hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-gray-800 text-center">{company}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPlacementCompanies;

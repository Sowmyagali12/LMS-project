import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const companies = [
  {
    name: "Tech Solutions Pvt Ltd",
    location: "Remote",
    type: "IT Services",
    established: "2023",
    website: "https://techsolutions.com",
  },
  {
    name: "NextGen Startups",
    location: "Hyderabad, India",
    type: "Startup",
    established: "2022",
    website: "https://nextgenstartups.com",
  },
  {
    name: "InnoSoft Technologies",
    location: "Bangalore, India",
    type: "Software Company",
    established: "2024",
    website: "https://innosofttech.com",
  },
  {
    name: "DataWorks Analytics",
    location: "Chennai, India",
    type: "Analytics",
    established: "2023",
    website: "https://dataworksanalytics.com",
  },
];

const Placement = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-gray-50 min-h-screen relative">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 p-2 rounded-full hover:bg-blue-100 transition z-50"
      >
        <FaArrowLeft className="text-blue-600 w-6 h-6" />
      </button>

      {/* Header */}
      <h1
        className="text-4xl md:text-5xl font-extrabold mb-10 text-center
                  bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#3B82F6]
                  bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(30,58,138,0.5)]"
      >
        Companies
      </h1>

      {companies.length === 0 ? (
        <p className="text-gray-500 text-center">
          No companies available at the moment.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-100 via-blue-50 to-white rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 p-6 border border-gray-200 cursor-pointer"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                {company.name}
              </h2>
              <p className="text-gray-600 mb-2">
                <span role="img" aria-label="Location" className="font-semibold">
                  📍
                </span>{" "}
                {company.location}
              </p>
              <p className="text-gray-600 mb-2">
                <span role="img" aria-label="Type" className="font-semibold">
                  🏢
                </span>{" "}
                {company.type}
              </p>
              <p className="text-gray-600 mb-4">
                <span role="img" aria-label="Established" className="font-semibold">
                  📅
                </span>{" "}
                {company.established}
              </p>
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl font-medium transition"
              >
                🌐 Visit Website
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Placement;

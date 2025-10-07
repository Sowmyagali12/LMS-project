import React from "react";
import { FaArrowLeft, FaGlobe } from "react-icons/fa";
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
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 p-2 rounded-full hover:bg-gray-200 transition z-50"
      >
        <FaArrowLeft className="text-gray-700 w-5 h-5" />
      </button>

      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-gray-800">
        Our Partner Companies
      </h1>

      {companies.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">
          No companies available at the moment.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 p-6 border border-gray-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {company.name}
                </h2>
                <p className="text-gray-600 text-sm mb-1">
                  <span className="font-medium">Location:</span> {company.location}
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  <span className="font-medium">Industry:</span> {company.type}
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-medium">Established:</span> {company.established}
                </p>
              </div>
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium text-sm transition"
              >
                <FaGlobe className="mr-2" /> Visit Website
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Placement;

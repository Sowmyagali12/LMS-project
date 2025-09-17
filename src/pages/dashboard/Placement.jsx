import React from "react";

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
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">💼 Companies</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {companies.map((company, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-6 border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">{company.name}</h2>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">📍 Location:</span> {company.location}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">🏢 Type:</span> {company.type}
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">📅 Established:</span> {company.established}
            </p>
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition"
            >
              🌐 Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Placement;

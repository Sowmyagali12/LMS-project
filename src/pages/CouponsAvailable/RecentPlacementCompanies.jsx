import React from "react";

const RecentPlacementCompanies = () => {
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
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">🏢 Recent Placement Companies</h1>
        <p className="text-gray-600">These are some of the companies where our students were recently placed.</p>
      </div>

      {/* Companies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {companies.map((company, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800">{company}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPlacementCompanies;

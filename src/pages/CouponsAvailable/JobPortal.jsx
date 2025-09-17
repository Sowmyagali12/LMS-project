import React from "react";

const JobPortal = () => {
  const jobs = [
    { title: "Frontend Developer", company: "Google", location: "Mountain View, CA" },
    { title: "Backend Engineer", company: "Microsoft", location: "Redmond, WA" },
    { title: "Full Stack Developer", company: "Amazon", location: "Seattle, WA" },
    { title: "Data Analyst", company: "Infosys", location: "Bangalore, India" },
    { title: "Software Engineer", company: "TCS", location: "Mumbai, India" },
    { title: "AI Specialist", company: "IBM", location: "New York, NY" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">💼 Job Portal</h1>
        <p className="text-gray-600">Explore current job opportunities available for our students.</p>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
              <p className="text-gray-600 mt-1">{job.company}</p>
              <p className="text-gray-500 text-sm mt-1">{job.location}</p>
            </div>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobPortal;

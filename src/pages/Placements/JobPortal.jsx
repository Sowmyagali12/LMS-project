import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const JobPortal = () => {
  const navigate = useNavigate();

  const jobs = [
    { title: "Frontend Developer", company: "Google", location: "Mountain View, CA", link: "#" },
    { title: "Backend Engineer", company: "Microsoft", location: "Redmond, WA", link: "#" },
    { title: "Full Stack Developer", company: "Amazon", location: "Seattle, WA", link: "#" },
    { title: "Data Analyst", company: "Infosys", location: "Bangalore, India", link: "#" },
    { title: "Software Engineer", company: "TCS", location: "Mumbai, India", link: "#" },
    { title: "AI Specialist", company: "IBM", location: "New York, NY", link: "#" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen relative">
      {/* Back Button on Top-Left */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 p-2 rounded-full hover:bg-blue-100 transition z-50"
        title="Go Back"
      >
        <FaArrowLeft className="text-blue-600 text-2xl" />
      </button>

      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Job Portal</h1>
        <p className="text-gray-600">
          Explore current job opportunities available for our students. Click “Apply” to proceed.
        </p>
      </div>

      {/* Jobs Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#3B82F6] text-white">
              <th className="text-left py-3 px-6 font-semibold">Job Title</th>
              <th className="text-left py-3 px-6 font-semibold">Company</th>
              <th className="text-left py-3 px-6 font-semibold">Location</th>
              <th className="text-center py-3 px-6 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr
                key={index}
                className="border-b hover:bg-white hover:text-black transition-colors duration-200"
              >
                <td className="py-4 px-6">{job.title}</td>
                <td className="py-4 px-6">{job.company}</td>
                <td className="py-4 px-6">{job.location}</td>
                <td className="py-4 px-6 text-center">
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded text-white
                    bg-gradient-to-r from-[#1E40AF] via-[#1D4ED8] to-[#2563EB] 
                    hover:from-[#2563EB] hover:via-[#1D4ED8] hover:to-[#1E40AF] transition-colors"
                  >
                    Apply
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobPortal;

import React from "react";

const internships = [
  {
    company: "Google",
    role: "Frontend Developer Intern",
    duration: "June 2024 - Aug 2024",
    description:
      "Built reusable React UI components and optimized performance by 20%.",
    status: "Completed",
  },
  {
    company: "Microsoft",
    role: "Data Science Intern",
    duration: "Jan 2024 - Mar 2024",
    description:
      "Analyzed datasets and developed predictive models to support business insights.",
    status: "Ongoing",
  },
];

const Internship = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">💼 Internships</h1>

      <div className="space-y-6">
        {internships.map((intern, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold text-gray-800">
                {intern.company}
              </h2>
              <span
                className={`px-3 py-1 text-xs rounded-full ${
                  intern.status === "Completed"
                    ? "bg-green-100 text-green-600"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                {intern.status}
              </span>
            </div>
            <p className="text-blue-600 font-medium">{intern.role}</p>
            <p className="text-sm text-gray-500">{intern.duration}</p>
            <p className="mt-3 text-gray-700">{intern.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internship;

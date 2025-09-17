import React from "react";

const assignments = [
  {
    title: "JavaScript Basics",
    deadline: "10 Sept 2025",
    status: "Submitted",
    remark: "On Time",
    color: "bg-green-100 text-green-700",
  },
  {
    title: "React Components",
    deadline: "12 Sept 2025",
    status: "Submitted",
    remark: "Good Work",
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Node.js Intro",
    deadline: "14 Sept 2025",
    status: "Pending",
    remark: "Submit ASAP",
    color: "bg-red-100 text-red-700",
  },
  {
    title: "Database Assignment",
    deadline: "16 Sept 2025",
    status: "In Progress",
    remark: "Half Completed",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Resume Draft",
    deadline: "18 Sept 2025",
    status: "Submitted",
    remark: "Reviewed",
    color: "bg-green-100 text-green-700",
  },
];

const Assignments = () => {
  const submitted = assignments.filter((a) => a.status === "Submitted").length;
  const pending = assignments.filter((a) => a.status === "Pending").length;
  const inProgress = assignments.filter((a) => a.status === "In Progress").length;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-blue-900">
        📝 Assignment Status
      </h1>

      {/* Summary Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-green-100 text-green-800 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold">{submitted}</h2>
          <p className="font-medium">Assignments Submitted</p>
        </div>
        <div className="bg-yellow-100 text-yellow-800 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold">{inProgress}</h2>
          <p className="font-medium">In Progress</p>
        </div>
        <div className="bg-red-100 text-red-800 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold">{pending}</h2>
          <p className="font-medium">Pending</p>
        </div>
      </section>

      {/* Assignment Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {assignments.map((a, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold text-gray-800">{a.title}</h3>
            <p className="text-gray-600">Deadline: <b>{a.deadline}</b></p>
            <span
              className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-semibold ${a.color}`}
            >
              {a.status}
            </span>
            <p className="mt-2 text-gray-700">Remarks: {a.remark}</p>
          </div>
        ))}
      </section>

      {/* Notes Section */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">Remarks / Notes</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Submit <b>Node.js Intro</b> before the deadline.</li>
          <li>Database assignment still needs final testing.</li>
          <li>Excellent improvement in React assignments.</li>
        </ul>
      </section>
    </div>
  );
};

export default Assignments;

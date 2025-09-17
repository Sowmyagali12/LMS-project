import React from "react";

const courses = [
  {
    day: "Day 1",
    topic: "Introduction to React",
    tasks: [
      { name: "Learn JSX", status: "Pending" },
      { name: "Create first component", status: "Pending" },
      { name: "Understand props", status: "Pending" },
    ],
  },
  {
    day: "Day 2",
    topic: "State & Hooks",
    tasks: [
      { name: "Use useState", status: "Pending" },
      { name: "Understand useEffect", status: "Pending" },
      { name: "Build counter app", status: "Pending" },
    ],
  },
  {
    day: "Day 3",
    topic: "Routing & Navigation",
    tasks: [
      { name: "Setup React Router", status: "Pending" },
      { name: "Create multiple pages", status: "Pending" },
      { name: "Link navigation", status: "Pending" },
    ],
  },
  {
    day: "Day 4",
    topic: "API Integration",
    tasks: [
      { name: "Fetch data using fetch/axios", status: "Pending" },
      { name: "Display data in components", status: "Pending" },
      { name: "Error handling", status: "Pending" },
    ],
  },
];

const Courses = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">📚 Courses & Tasks</h1>

      {courses.map((course, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 mb-8"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {course.day}: {course.topic}
          </h2>

          <table className="w-full border border-gray-300 text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Task</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {course.tasks.map((task, idx) => (
                <tr key={idx}>
                  <td className="p-2 border">{task.name}</td>
                  <td className="p-2 border">
                    {task.status === "Pending" && (
                      <span className="text-yellow-700 font-semibold">Pending</span>
                    )}
                    {task.status === "Completed" && (
                      <span className="text-green-700 font-semibold">Completed</span>
                    )}
                  </td>
                  <td className="p-2 border">
                    <button className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700 transition">
                      Submit Work
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Courses;

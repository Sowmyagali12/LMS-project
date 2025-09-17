import React from "react";

const RunningCourses = () => {
  const runningCourses = [
    { name: "React.js", completed: 6, total: 10 },
    { name: "Node.js", completed: 3, total: 10 },
    { name: "Database Management", completed: 9, total: 20 },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        🚀 Running Courses
      </h2>
      <ul className="space-y-6">
        {runningCourses.map((course, index) => {
          const progress = course.completed / course.total;

          return (
            <li
              key={index}
              className="p-6 border rounded-xl shadow-sm bg-white hover:shadow-md transition duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-lg text-blue-900">
                  {course.name}
                </h3>
                <span className="text-sm text-gray-500">
                  {course.completed} of {course.total} modules
                </span>
              </div>

              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                <div
                  className="bg-blue-600 h-3 transition-all duration-500"
                  style={{ width: `${progress * 100}%` }}
                ></div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RunningCourses;

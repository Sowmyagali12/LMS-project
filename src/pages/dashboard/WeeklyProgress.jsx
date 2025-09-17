
import React from "react";

const WeeklyProgress = () => {
  // Example static data
  const weeklyData = [
    { day: "Monday", completed: true },
    { day: "Tuesday", completed: true },
    { day: "Wednesday", completed: false },
    { day: "Thursday", completed: true },
    { day: "Friday", completed: false },
    { day: "Saturday", completed: true },
    { day: "Sunday", completed: false },
  ];

  return (
    <div className="p-6 bg-gray-50 rounded-2xl shadow space-y-6">
      <h1 className="text-3xl font-bold mb-6">📊 Weekly Progress</h1>

      {/* Progress Overview */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4">This Week’s Progress</h2>
        <div className="flex gap-4">
          {weeklyData.map((day, index) => (
            <div
              key={index}
              className={`flex-1 p-4 text-center rounded-xl ${
                day.completed ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}
            >
              <p className="font-semibold">{day.day}</p>
              <p>{day.completed ? "✔ Completed" : "❌ Pending"}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Task Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <h3 className="text-lg font-semibold mb-2">✅ Tasks Completed</h3>
          <p className="text-gray-600 text-lg">12 / 15</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <h3 className="text-lg font-semibold mb-2">⏳ Pending Tasks</h3>
          <p className="text-gray-600 text-lg">3</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <h3 className="text-lg font-semibold mb-2">📚 Hours Studied</h3>
          <p className="text-gray-600 text-lg">18 hrs</p>
        </div>
      </div>

      {/* Upcoming Tasks */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4">Upcoming Tasks</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="p-2 rounded-md bg-gray-100">Complete React Hooks tutorial</li>
          <li className="p-2 rounded-md bg-gray-100">Submit Assignment 3</li>
          <li className="p-2 rounded-md bg-gray-100">Watch lecture: "APIs in React"</li>
        </ul>
      </div>
    </div>
  );
};

export default WeeklyProgress;

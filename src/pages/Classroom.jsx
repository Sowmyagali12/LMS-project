import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import CompletedCourses from "./Classroom/CompletedCourses";
import RunningCourses from "./Classroom/RunningCourses";

const Classroom = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">📚 Classroom</h1>

      {/* Navigation links for subpages */}
      <nav className="mb-6 space-x-4">
        <Link
          to="completed"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Completed Courses
        </Link>
        <Link
          to="running"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Running Courses
        </Link>
      </nav>

      {/* Sub-routes */}
      <Routes>
        <Route path="completed" element={<CompletedCourses />} />
        <Route path="running" element={<RunningCourses />} />
      </Routes>
    </div>
  );
};

export default Classroom;

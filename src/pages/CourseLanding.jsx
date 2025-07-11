import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CourseList from './data/CourseList';

const CourseLanding = () => {
  const { courseId } = useParams();

  // 🔍 Find course using correct property
  const course = CourseList.find((c) => c.courseId === courseId);

  if (!course) {
    return (
      <div className="text-center py-20 text-red-600 font-semibold">
        🚫 Course Not Found
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Banner */}
      <div
        className="w-full h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url("https://i.pinimg.com/736x/b2/de/a6/b2dea6f5519b74635c5e887e99098459.jpg")`,
        }}
      >
        <h1 className="text-4xl font-bold text-white bg-black/30 px-8 py-3 rounded-lg shadow-lg">
          {course.courseName}
        </h1>
      </div>

      {/* Highlights Section */}
      <div className="max-w-6xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center px-4">
        <div className="bg-white shadow rounded p-6">
          <p className="text-indigo-600 font-bold text-lg">📜 Certification Included</p>
          <p className="text-gray-600 mt-2">Get certified after course completion</p>
        </div>
        <div className="bg-white shadow rounded p-6">
          <p className="text-purple-700 font-bold text-lg">📅 Duration</p>
          <p className="text-gray-600 mt-2">{course.courseDuration}</p>
        </div>
        <div className="bg-white shadow rounded p-6">
          <p className="text-red-600 font-bold text-lg">💰 Price</p>
          <p className="text-gray-600 mt-2">₹{course.courseFee}</p>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow mt-10 rounded">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          About {course.courseName}
        </h2>
        <p className="text-gray-700 whitespace-pre-line leading-relaxed">
          {course.description}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 pb-10 px-4">
        {/* Watch Demo - only if demoLink exists */}
        {course.demoLink && (
          <a
            href={course.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 font-semibold shadow text-center"
          >
            🎥 Watch Demo
          </a>
        )}

        {/* Download PDF */}
        {course.courseSyllabus && (
          <a
            href={course.courseSyllabus}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 font-semibold shadow text-center"
          >
            📄 Download PDF
          </a>
        )}

        {/* Payment Link */}
        <Link
          to={``}
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 font-semibold shadow text-center"
        >
          🛒 Buy the Course
        </Link>
      </div>
    </div>
  );
};

export default CourseLanding;

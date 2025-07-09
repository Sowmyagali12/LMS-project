import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CourseList from './data/CourseList';

const CourseLanding = () => {
  const { courseId } = useParams();

  // Find the course dynamically based on URL
  const course = CourseList.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="text-center py-20 text-red-600 font-semibold">
        🚫 Course Not Found
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800">

      {/* 📸 Hero Banner */}
      <div
  className="w-full h-64 bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: `url("https://i.pinimg.com/736x/b2/de/a6/b2dea6f5519b74635c5e887e99098459.jpg")` }}
>
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white bg-black/20 px-6 py-3 rounded-lg shadow-lg">
    {course.title}
  </h1>
      </div>

      {/* 🧩 Highlights */}
      <div className="max-w-6xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center px-4">
        <div className="bg-white shadow rounded p-6">
          <p className="text-indigo-600 font-bold text-lg">📜 Certification</p>
          <p className="text-gray-600 mt-2">Certificate of completion provided after course</p>
        </div>
        <div className="bg-white shadow rounded p-6">
          <p className="text-purple-700 font-bold text-lg">📅 Course Duration</p>
          <p className="text-gray-600 mt-2">{course.duration}</p>
        </div>
        <div className="bg-white shadow rounded p-6">
          <p className="text-red-600 font-bold text-lg">💰 Course Price</p>
          <p className="text-gray-600 mt-2">{course.price}</p>
        </div>
      </div>

      {/* 🚀 Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 pb-10 px-4">
        <a
          href={course.demoLink}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 font-semibold shadow text-center"
        >
          🎥 Watch Demo
        </a>
        <a
          href={course.pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 font-semibold shadow text-center"
        >
          📄 Download PDF
        </a>
        <Link
          to={`/payment/${course.id}`}
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 font-semibold shadow text-center"
        >
          🛒 Buy the Course
        </Link>
      </div>

    </div>
  );
};

export default CourseLanding;

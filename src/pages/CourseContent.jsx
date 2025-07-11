import React from 'react';
import { useParams } from 'react-router-dom';
import CourseList from './data/CourseList';
import CourseModules from './data/CourseModules';

const CourseContent = () => {
  const { courseId } = useParams();

  const course = CourseList.find((c) => c.courseId === courseId);
  const modules = CourseModules[courseId]?.modules;

  if (!course || !modules) {
    return (
      <div className="text-center py-20 text-red-600 font-semibold">
        🚫 Course Content Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-10 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        {course.courseName} – Course Modules
      </h2>

      <div className="overflow-x-auto max-w-6xl mx-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="text-left py-3 px-6">📘 Topic</th>
              <th className="text-left py-3 px-6">🎥 Video</th>
              <th className="text-left py-3 px-6">📄 PDF</th>
            </tr>
          </thead>
          <tbody>
            {modules.map((mod, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50 transition duration-200"
              >
                <td className="py-4 px-6 text-gray-800 font-medium">{mod.topic}</td>
                <td className="py-4 px-6">
                  <a
                    href={mod.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    Watch Video
                  </a>
                </td>
                <td className="py-4 px-6">
                  <a
                    href={mod.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm font-semibold"
                  >
                    Download PDF
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

export default CourseContent;

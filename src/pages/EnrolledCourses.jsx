import React from 'react';
import { Link } from 'react-router-dom';
import CourseList from './data/CourseList';
import userEnrollments from './data/UserEnrollments';

const EnrolledCourses = () => {
  // Merge user enrollment status with CourseList data
  const enrichedCourses = userEnrollments
    .map((enroll) => {
      const course = CourseList.find((c) => c.courseId === enroll.courseId);
      return course ? { ...course, status: enroll.status } : null;
    })
    .filter(Boolean); // Remove any unmatched entries

  const approvedCourses = enrichedCourses.filter((c) => c.status === 'approved');
  const pendingCourses = enrichedCourses.filter((c) => c.status === 'pending');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        📚 Your Enrolled Courses
      </h2>

      {/* Approved Courses */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">✅ Access Granted</h3>
        {approvedCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {approvedCourses.map((course) => (
              <Link
                key={course.courseId}
                to={`/course-content/${course.courseId}`}
                className="bg-white shadow-lg rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <img
                  src={course.image}
                  alt={course.courseName}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h4 className="text-xl font-semibold text-blue-700">{course.courseName}</h4>
                  <p className="text-sm text-gray-500 mt-1">Status: <span className="text-green-600 font-medium">Access Approved</span></p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">You haven’t been granted access to any courses yet.</p>
        )}
      </section>

      {/* Pending Courses */}
      <section>
        <h3 className="text-2xl font-semibold text-yellow-600 mb-4">⏳ Pending Approval</h3>
        {pendingCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pendingCourses.map((course) => (
              <div
                key={course.courseId}
                className="bg-white shadow-md rounded-lg overflow-hidden opacity-80"
              >
                <img src={course.image} alt={course.courseName} className="h-40 w-full object-cover" />
                <div className="p-4">
                  <h4 className="text-xl font-semibold text-gray-700">{course.courseName}</h4>
                  <p className="text-sm text-gray-500 mt-1">Status: <span className="text-yellow-600 font-medium">Waiting for Approval</span></p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No courses pending approval.</p>
        )}
      </section>
    </div>
  );
};

export default EnrolledCourses;

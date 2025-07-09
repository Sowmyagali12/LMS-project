import React from 'react';
import { Link } from 'react-router-dom';

// Dummy enrolled courses
const enrolledCourses = [
  {
    id: 'python',
    title: 'Python Mastery',
    thumbnail: 'https://miro.medium.com/v2/resize:fit:1400/1*fZaf7gR6vVbQUg_9V0wUXQ.jpeg',
    instructor: 'Mr. Kumar',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    thumbnail: 'https://cdn.dribbble.com/users/4181881/screenshots/15812735/media/6fbc9ecde01e7b7d89b5295ea7f6f860.png',
    instructor: 'Ms. Riya',
  },
];

const EnrolledCourses = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Your Enrolled Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {enrolledCourses.map((course) => (
          <Link
            to={`/course-content/${course.id}`}
            key={course.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-transform hover:scale-105"
          >
            <img src={course.thumbnail} alt={course.title} className="h-40 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-700">{course.title}</h3>
              <p className="text-sm text-gray-600">👩‍🏫 {course.instructor}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EnrolledCourses;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EnrolledCourses = () => {
  const [approvedCourses, setApprovedCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fallbackImage = 'https://via.placeholder.com/400x200?text=No+Image';

  useEffect(() => {
    const fetchApprovedCourses = async () => {
      try {
        
        const token = localStorage.getItem('token');

        if (!token) {
          console.warn('No token found. User may not be authenticated.');
          setApprovedCourses([]);
          setLoading(false);
          return;
        }

        
        const response = await axios.get('http://localhost:8080/Enrollement/approved/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setApprovedCourses(response.data);
      } catch (error) {
        console.error('Error fetching approved courses:', error);
        setApprovedCourses([]);
      } finally {
        setLoading(false);
      }
    };

    fetchApprovedCourses();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        📚 Your Enrolled Courses
      </h2>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-green-700 mb-4"> Access Granted</h3>

        {loading ? (
          <p className="text-center text-gray-500">Loading courses...</p>
        ) : approvedCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {approvedCourses.map((course) => (
              <Link
                key={course.courseId}
                to={`/course-content/${course.courseId}`}
     className="bg-white shadow-lg rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <img
                  src={course.image || fallbackImage}
                  alt={course.courseName}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h4 className="text-xl font-semibold text-blue-700">{course.courseName}</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Status:{' '}
                    <span className="text-green-600 font-medium">Access Approved</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            You haven t been granted access to any courses yet.
          </p>
        )}
      </section>
    </div>
  );
};

export default EnrolledCourses;
 
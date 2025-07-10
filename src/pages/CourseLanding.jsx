import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseLanding = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [error, setError] = useState('');
  const [bannerImageError, setBannerImageError] = useState(false);
  const defaultBannerImageUrl = "https://via.placeholder.com/500x250?text=Banner+Not+Available"; 

  const handleBannerImageError = ( ) => {
    setBannerImageError(true);
  };

  useEffect(() => {
    const fetchCourse = async () => {
      const token = localStorage.getItem('token');
console.log('course id : '.courseId);
      try {
        const res = `http://localhost:8080/course/course/get/${courseId}`;
        console.log('api res : ',res);
        const response = await fetch(`http://localhost:8080/course/course/get/${courseId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        } );

        if (!response.ok) {
          throw new Error('Failed to fetch course details');
        }

        const data = await response.json();
        setCourse(data);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      }
    };

    fetchCourse();
  }, [courseId]);

  if (error) return <div className="text-center py-20 text-red-600 font-semibold">{error}</div>;
  if (!course) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Banner */}
      <div className="w-full bg-gray-100 py-6 flex flex-col items-center">
        <img
          src={bannerImageError ? defaultBannerImageUrl : `https://via.placeholder.com/500x250?text=${encodeURIComponent(course.courseName )}`}
          alt={`${course.courseName} Banner`}
          loading="lazy"
          className="rounded shadow-md object-cover"
          style={{ width: '500px', height: 'auto' }}
          onError={handleBannerImageError}
        />
      </div>

      {/* Highlights */}
      <div className="max-w-6xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center px-4">
        <div className="bg-white shadow rounded p-6">
          <p className="text-indigo-600 font-bold text-lg">🎯 Internship Support</p>
          <p className="text-gray-600 mt-2">Internship opportunities after training</p>
        </div>
        <div className="bg-white shadow rounded p-6">
          <p className="text-purple-700 font-bold text-lg">📅 Duration</p>
          <p className="text-gray-600 mt-2">{course.courseDuration}</p>
        </div>
        <div className="bg-white shadow rounded p-6">
          <p className="text-red-600 font-bold text-lg">💰 Price</p>
          <p className="text-gray-600 mt-2">₹{course.courseFee}</p>
        </div>
        <div className="bg-white shadow rounded p-6"></div>
        <p className="text-indigo-600 font-bold text-lg"> About Course</p>
        <p className="text-gray-600 mt-2"> {course.description}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 pb-10 px-4">
        <a
          href={course.pdfContentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 font-semibold shadow text-center"
        >
          📄 Download PDF
        </a>
        <a
          href="/course-registration"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 font-semibold shadow text-center"
        >
          🛒 Buy the Course
        </a>
      </div>
    </div>
  );
};

export default CourseLanding;
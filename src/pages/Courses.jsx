import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await fetch('http://localhost:8080/course/get', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });


        if (!response.ok) {
          if (response.status === 401 || response.status === 403) {
            throw new Error('Unauthorized or token expired. Please login again.');
          }
          throw new Error('Failed to fetch courses');
        }

        const data = await response.json();
        console.log('response data : ',data)
        setCourses(data);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      }
    };

    fetchCourses();
  }, [navigate]);

  return (
    <div className="bg-white text-gray-800">
      {/* 🔷 Banner Section */}
      <section>
        <div
          className="w-full h-64 flex flex-col items-center justify-center text-white text-center bg-cover bg-center mb-8 rounded-xl"
          style={{
            backgroundImage: 'url("https://www.ashokitech.in/assets/images/career-banner01.png")',
          }}
        >
          <h1 className="text-3xl font-bold mb-2 drop-shadow-lg">Software Courses</h1>
          <p className="text-lg drop-shadow-sm">Explore new and trending courses.</p>
        </div>
      </section>

      {/* 📚 Courses Grid Section */}
      <section className="px-10 py-10">
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard
              // key={course.courseId}
              courseId={course.courseId}
              courseName={course.courseName}
              courseFee={course.courseFee}
              courseDuration={course.courseDuration}
              courseSilybus={course.courseSilybus}
              description={course.description}
              pdfContentUrl={course.pdfContentUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;

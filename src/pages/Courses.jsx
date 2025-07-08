import React from 'react';
import CourseCard from './CourseCard';
import CourseList from './data/CourseList'; // ✅ adjust if in another path

const Courses = () => {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {CourseList.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              instructor={course.instructor}
              duration={course.duration}
              level={course.level}
              image={course.image}
              price={course.price}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;




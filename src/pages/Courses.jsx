import React from 'react';
import CourseCard from './CourseCard';

const courses = () => {
  const courseList = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      instructor: 'John Doe',
      duration: '12 weeks',
      level: 'Beginner to Advanced',
      image: 'https://i.pinimg.com/736x/8f/5f/14/8f5f14eaebc083eb5ad9706f0ca35094.jpg',
      price: '14999',
    },
    {
      id: 2,
      title: 'Data Science with Python',
      instructor: 'Jane Smith',
      duration: '10 weeks',
      level: 'Intermediate',
      image: 'https://i.pinimg.com/736x/02/f2/e2/02f2e272effb2999de4d7b5c337be8a5.jpg',
      price: '17999',
    },
    {
      id: 3,
      title: 'UI/UX Design Bootcamp',
      instructor: 'Alice Johnson',
      duration: '8 weeks',
      level: 'All Levels',
      image: 'https://i.pinimg.com/736x/60/ab/f9/60abf9f0c6d7c5904f929f2d636d09c9.jpg',
      price: '9999',
    },
    {
      id: 4,
      title: 'Java Programming Essentials',
      instructor: 'Bob Martin',
      duration: '6 weeks',
      level: 'Beginner',
      image: 'https://i.pinimg.com/736x/7f/b5/ee/7fb5ee23f52454aaf4629930a3e4906b.jpg',
      price: '7999',
    },
  ];

  return (
    <div className="bg-[#ffffff] min-h-screen py-12 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center text-purple-800 mb-10">
        📚 Available Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {courseList.map((courses) => (
          <CourseCard key={courses.id} {...courses} />
        ))}
      </div>
    </div>
  );
};

export default courses;

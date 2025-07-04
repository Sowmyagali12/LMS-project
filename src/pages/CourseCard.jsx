import React from 'react';

const CourseCard = ({ title, instructor, duration, level, image, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <img
        className="w-full h-40 object-cover"
        src={image}
        alt={title}
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-1 text-purple-700">{title}</h3>
        <p className="text-sm text-gray-600">👩‍🏫 Instructor: {instructor}</p>
        <p className="text-sm text-gray-600">🕒 Duration: {duration}</p>
        <p className="text-sm text-gray-600">📘 Level: {level}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-pink-600 font-bold text-lg">₹{price}</span>
          <button className="bg-[#C75DFF] hover:bg-[#A600FF] text-white px-4 py-2 rounded-full text-sm transition">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

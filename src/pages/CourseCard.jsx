import React from 'react';
import { Link } from "react-router-dom";

const CourseCard = ({ id, title, instructor, duration, level, image, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <img
        className="w-full h-40 object-cover"
        src={image}
        alt={title}
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-1 text-blue-700">{title}</h3>
        <p className="text-sm text-gray-600">👩‍🏫 Instructor: {instructor}</p>
        <p className="text-sm text-gray-600">🕒 Duration: {duration}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-green-600 font-bold text-lg">{price}</span>
          <Link to={`/courses/${id}`} className="text-blue-600 hover:underline">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

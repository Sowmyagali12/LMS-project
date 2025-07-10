import React, { useState } from 'react';
import { Link } from "react-router-dom";

const CourseCard = ({ courseId, courseName, courseFee, courseDuration, courseSilybus, description, pdfContentUrl }) => {
  const [imageError, setImageError] = useState(false);
  console.log('course id in the course cards : ',courseId)
  const defaultImageUrl = "https://via.placeholder.com/400x200?text=Image+Not+Available"; 

  const handleImageError = ( ) => {
    setImageError(true);
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img
        src={imageError ? defaultImageUrl : `https://via.placeholder.com/400x200?text=${encodeURIComponent(courseName )}`}
        alt={courseName}
        className="w-full h-40 object-cover"
        onError={handleImageError}
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-1 text-blue-700">{courseName}</h3>
        <p className="text-sm text-gray-600">🕒 Duration: {courseDuration}</p>
        <p className="text-sm text-gray-600">📘 Syllabus: {courseSilybus}</p>
        <p className="text-sm text-gray-600 truncate">📄 {description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-green-600 font-bold text-lg">₹{courseFee}</span>
          <Link
            to={`/courses/${courseId}`}
            className="text-blue-600 hover:underline text-sm"
          >
            View More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

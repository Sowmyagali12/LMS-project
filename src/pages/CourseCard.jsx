import React, { useState } from 'react';
import { Link } from "react-router-dom";

const CourseCard = ({
  courseId,
  courseName,
  courseFee,
  courseDuration,
  courseSilybus,
  description,
  pdfContentUrl,
  imageurl
}) => {
  const [imageError, setImageError] = useState(false);

  const defaultImageUrl = "https://via.placeholder.com/400x200?text=Image+Not+Available";
  const handleImageError = () => setImageError(true);

  const finalImageUrl = imageError || !imageurl
    ? defaultImageUrl
    : `http://localhost:8080${imageurl}`;

  return (
    <div className="w-full sm:w-80 md:w-72 lg:w-64 border border-gray-300 rounded-xl shadow-lg overflow-hidden bg-white transition-transform hover:scale-105">
      <div className="h-40 w-full overflow-hidden">
        <img
          src={finalImageUrl}
          alt={courseName}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-blue-700 mb-1">{courseName}</h3>
        <p className="text-sm text-gray-600 mb-1">🕒 Duration: {courseDuration}</p>
        <p className="text-sm text-gray-600 mb-1">📘 Syllabus: {courseSilybus}</p>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">📄 {description}</p>
        
        <div className="flex justify-between items-center mt-3">
          <span className="text-green-600 font-bold text-lg">₹{courseFee}</span>
          <Link
            to={`/courses/${courseId}`}
            className="text-sm text-blue-600 hover:underline"
          >
            View More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

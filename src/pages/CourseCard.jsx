import React, { useState } from 'react';
import { Link } from "react-router-dom";

const CourseCard = ({
  courseId,
  courseName,
  courseFee,
  courseDuration,
  courseSyllabus,
  description,
  image
}) => {
  const [imageError, setImageError] = useState(false);
  const [showFull, setShowFull] = useState(false);

  const defaultImageUrl = "https://via.placeholder.com/400x200?text=Image+Not+Available";
  const imageToShow = imageError || !image ? defaultImageUrl : image;

  const toggleDescription = () => setShowFull(!showFull);

  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white">
      <img
        src={imageToShow}
        alt={courseName}
        className="w-full h-44 object-cover"
        onError={() => setImageError(true)}
      />

      <div className="p-4">
        <h3 className="text-xl font-bold mb-1 text-blue-700">{courseName}</h3>

        <p className="text-sm text-gray-600 mb-1">🕒 Duration: {courseDuration}</p>

        <p className="text-sm text-gray-600 mb-1">
          📘 Syllabus:{" "}
          <a
            href={courseSyllabus}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View PDF
          </a>
        </p>

        {/* Toggleable Description */}
        <div className="text-sm text-gray-700 mt-2">
          {showFull ? (
            <p className="whitespace-pre-line">📄 { description}</p>
          ) : (
            <p className="truncate">📄 {description}</p>
          )}
          <button
            onClick={toggleDescription}
            className="text-xs text-blue-600 mt-1 hover:underline focus:outline-none"
          >
            {showFull ? "Show less ▲" : "Show more ▼"}
          </button>
        </div>

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

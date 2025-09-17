import React from "react";

const CompletedCourses = () => {
  const completedCourses = [
    { name: "JavaScript Basics", completedOn: "05 Sept 2025", grade: "A" },
    { name: "HTML & CSS", completedOn: "28 Aug 2025", grade: "A+" },
    { name: "React Fundamentals", completedOn: "10 Sept 2025", grade: "A" },
    { name: "Node.js Essentials", completedOn: "12 Sept 2025", grade: "A-" },
  ];

  // Function to assign color based on grade
  const gradeColor = (grade) => {
    switch (grade) {
      case "A+":
        return "text-green-600 font-bold";
      case "A":
        return "text-green-500 font-semibold";
      case "A-":
        return "text-yellow-600 font-semibold";
      default:
        return "text-gray-700";
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">🎓 Completed Courses</h1>
        <p className="text-gray-600">
          Here are the courses you have successfully completed along with your grades.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {completedCourses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{course.name}</h2>
            <p className="text-gray-500 text-sm mb-1">
              Completed on <span className="font-medium">{course.completedOn}</span>
            </p>
            <p className={`text-sm ${gradeColor(course.grade)}`}>
              Final Grade: {course.grade}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedCourses;

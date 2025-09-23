// src/context/ProgressContext.jsx
import React, { createContext, useContext, useState } from "react";

// 1️⃣ Create Context
const ProgressContext = createContext();

// 2️⃣ Custom hook for easy access
export const useProgress = () => useContext(ProgressContext);

// 3️⃣ Provider Component
export const ProgressProvider = ({ children }) => {
  // Courses progress: "not-started" | "in-progress" | "completed"
  const [coursesProgress, setCoursesProgress] = useState({
    1: "not-started",
    2: "in-progress",
    3: "completed",
  });

  // Assignments progress: "pending" | "completed"
  const [assignmentsProgress, setAssignmentsProgress] = useState({
    1: "pending",
    2: "completed",
  });

  // Update course progress by course ID
  const updateCourseProgress = (courseId, status) => {
    setCoursesProgress((prev) => ({ ...prev, [courseId]: status }));
  };

  // Update assignment progress by assignment ID
  const updateAssignmentProgress = (assignmentId, status) => {
    setAssignmentsProgress((prev) => ({ ...prev, [assignmentId]: status }));
  };

  // Provider value
  const value = {
    coursesProgress,
    updateCourseProgress,
    assignmentsProgress,
    updateAssignmentProgress,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

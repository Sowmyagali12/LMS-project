// src/context/ProgressContext.jsx
import React, { createContext, useContext, useState } from "react";

// 1️⃣ Create Context
const ProgressContext = createContext();

// 2️⃣ Custom hook for easy access
export const useProgress = () => useContext(ProgressContext);

// 3️⃣ Provider Component
export const ProgressProvider = ({ children }) => {
  // Courses progress:
  // {
  //   [courseId]: {
  //      status: "not-started" | "in-progress" | "completed",
  //      completedWeeks: [0,1,2] // array of week indices completed
  //   }
  // }
  const [coursesProgress, setCoursesProgress] = useState({
    1: { status: "not-started", completedWeeks: [] },
    2: { status: "in-progress", completedWeeks: [0] }, // example: week 0 done
    3: { status: "completed", completedWeeks: [0, 1, 2, 3] },
  });

  // Assignments progress: "pending" | "completed"
  const [assignmentsProgress, setAssignmentsProgress] = useState({
    1: "pending",
    2: "completed",
  });

  // ✅ Update course progress
  const updateCourseProgress = (courseId, status, completedWeeks = []) => {
    setCoursesProgress((prev) => ({
      ...prev,
      [courseId]: {
        status,
        completedWeeks,
      },
    }));
  };

  // ✅ Update assignment progress
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

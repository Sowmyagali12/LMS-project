// src/context/StudentContext.jsx
import React, { createContext, useState } from "react";

// Create the context
const StudentContext = createContext();

// Create the provider
const StudentProvider = ({ children }) => {
  const [student, setStudent] = useState({
    name: "Bharath",
    email: "bharath@example.com",
    phone: "1234567890",
    currentCity: "Hyderabad",
    currentState: "Telangana",
    education: "B.Tech CSE",
    skills: ["React", "Node.js"],
    about: "I love coding!",
    avatar: "https://via.placeholder.com/150",
  });

  return (
    <StudentContext.Provider value={{ student, setStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

// ✅ Export BOTH the context and the provider as named exports
export { StudentContext, StudentProvider };

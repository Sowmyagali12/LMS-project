// context/StudentContext.js
import React, { createContext, useState } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [student, setStudent] = useState({
    name: "John Doe",           // ✅ Make sure this key is `name`
    avatar: "/default-avatar.png",
    email: "john@example.com",
    phone: "1234567890",
    whatsapp: "1234567890",
    dob: "2000-01-01",
    gender: "Male",
    address: "123, Main Street",
    skills: [],
    about: "Hello! I am a student",
    education: "B.Sc Computer Science",
    currentCity: "City",
    currentState: "State",
    resume: null,
  });

  return (
    <StudentContext.Provider value={{ student, setStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

import React, { createContext, useState, useEffect } from "react";
import { login, logout, getStudentById } from "../services/apiService";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const userData = await getStudentById("me");
          setUser(userData);
        } catch {
          logout();
        }
      }
      setLoading(false);
    };
    initializeUser();
  }, []);

  const handleLogin = async (email, password) => {
    await login(email, password);
    const userData = await getStudentById("me");
    setUser(userData);
    navigate("/dashboard");
  };

  const handleLogout = () => {
    logout();
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login: handleLogin, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

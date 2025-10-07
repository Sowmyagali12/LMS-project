import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = ({ setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/login", { email, password });

      if (res.data.success && res.data.role === "student") {
        // Save login state
        setLoggedIn(true);
        localStorage.setItem("role", "student"); 
        toast.success("Login successful!");
        navigate("/dashboard"); // Redirect to student dashboard
      } else {
        toast.error("Invalid credentials or not a student");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Student Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

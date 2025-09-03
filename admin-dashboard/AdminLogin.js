// src/pages/admin-dashboard/AdminAuth.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminAuth() {
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const { name, email, password } = registerData;
    if (!name || !email || !password) {
      setMessage('Please fill all register fields');
      return;
    }
    setRegisterData({ name: '', email: '', password: '' });
    setMessage('✅ Registered successfully! You can now log in.');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = loginData;
    if (!email || !password) {
      setMessage('Please fill all login fields');
      return;
    }
    setMessage('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl rounded border shadow-lg overflow-hidden">
        
        {/* Register */}
        <div className="p-6 border-r">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Register</h2>
          <form onSubmit={handleRegister} className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              value={registerData.name}
              onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={registerData.email}
              onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={registerData.password}
              onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 rounded hover:bg-black"
            >
              Register
            </button>
          </form>
        </div>

        {/* Login */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Login</h2>
          <form onSubmit={handleLogin} className="space-y-3">
            <input
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <Link
              to="/admin-dashboard"
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            >
              Login
            </Link>
          </form>

        
        </div>
          {message && <p className="text-sm mt-4 text-center text-red-600">{message}</p>}
      </div>
    </div>
  );
}

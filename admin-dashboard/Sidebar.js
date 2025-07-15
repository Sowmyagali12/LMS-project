// src/pages/AdminDashboard/Sidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-gray-800 text-white p-6">
      <h2 className="text-xl font-bold mb-6">Admin</h2>
      <ul className="space-y-4">
        <li
          className="hover:text-blue-400 cursor-pointer"
          onClick={() => navigate('/admin')}
        >
          Dashboard
        </li>
        <li
          className="hover:text-blue-400 cursor-pointer"
          onClick={() => navigate('/admin/add-user')}
        >
          Add Users
        </li>
        <li
          className="hover:text-blue-400 cursor-pointer"
          onClick={() => navigate('/admin/add-course')}
        >
          Add Courses
        </li>
      </ul>
    </div>
  );
}

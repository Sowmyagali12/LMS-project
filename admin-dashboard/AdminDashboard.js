// src/pages/admin-dashboard/AdminDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6 min-h-screen">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <ul className="space-y-4">
          <li>
            <Link to="/admin-dashboard" className="hover:text-blue-400">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/add-user" className="hover:text-blue-400">Add Users</Link>
          </li>
          <li>
            <Link to="/admin/add-course" className="hover:text-blue-400">Add Courses</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-700">👋 Welcome, Admin!</h1>

        <div className="flex flex-wrap gap-4">
          {/* Add User */}
          <Link
            to="/admin/add-user"
            className="bg-green-500 text-white px-3 py-1 text-sm rounded shadow hover:bg-green-600 transition w-32 text-center"
          >
            Add User
          </Link>

          {/* Add Course */}
          <Link
            to="/admin/add-course"
            className="bg-purple-500 text-white px-3 py-1 text-sm rounded shadow hover:bg-purple-600 transition w-32 text-center"
          >
            Add Course
          </Link>

          {/* Logout */}
          <Link
            to="/admin-login"
            className="bg-red-500 text-white px-3 py-1 text-sm rounded shadow hover:bg-red-600 transition w-32 text-center"
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

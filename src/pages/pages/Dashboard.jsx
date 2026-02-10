import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/admin-login');
  };

  return (
    <div className="h-screen overflow-y-auto bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-purple-700">👨‍💼 Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">📋 Registered Users</h2>
            <p className="text-gray-600">View and manage student registrations.</p>
            <button
              onClick={() => navigate('/admin/users')}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            >
              View Users
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">📚 Manage Courses</h2>
            <p className="text-gray-600">Add, edit, or delete LMS courses.</p>
            <button
              onClick={() => navigate('/admin/videos')}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
            >
              Manage Courses
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">🚪 Logout</h2>
            <p className="text-gray-600">Log out of the admin dashboard.</p>
            <button
              onClick={handleLogout}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

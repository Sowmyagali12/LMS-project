import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-60 h-screen bg-blue-900 text-white fixed top-0 left-0 p-6">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col space-y-4">
        <Link to="/admin/dashboard" className="hover:text-yellow-400">Dashboard</Link>
        <Link to="/admin/users" className="hover:text-yellow-400">Users</Link>
        <Link to="/admin/videos" className="hover:text-yellow-400">Upload Videos</Link>
        <Link to="/admin/pdfs" className="hover:text-yellow-400">Upload PDFs</Link>
      </nav>
    </div>
  );
};

export default Sidebar;

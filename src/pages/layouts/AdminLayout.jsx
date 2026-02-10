import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import UploadVideos from '../pages/UploadVideos';
import UploadPDFs from '../pages/UploadPDFs';

const AdminLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Fixed Sidebar */}
      <div className="w-60 fixed left-0 top-0 h-full bg-white shadow z-20">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="ml-60 flex-1 flex flex-col h-full">
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-60 right-0 h-16 bg-white shadow z-10">
          <Navbar />
        </div>

        {/* Scrollable Content */}
        <div className="mt-16 p-6 overflow-y-auto flex-1 bg-gray-100">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="videos" element={<UploadVideos />} />
            <Route path="pdfs" element={<UploadPDFs />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;

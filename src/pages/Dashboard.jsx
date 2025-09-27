import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaUserTie, FaGift } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();

  // Example data
  const recentRegistrations = [
    { name: "Rahul Sharma", email: "rahul@example.com", date: "2025-09-22" },
    { name: "Anita Verma", email: "anita@example.com", date: "2025-09-21" },
    { name: "Sanjay Patel", email: "sanjay@example.com", date: "2025-09-20" },
  ];

  const recentPayments = [
    { student: "Rahul Sharma", amount: "$500", date: "2025-09-22" },
    { student: "Anita Verma", amount: "$700", date: "2025-09-21" },
    { student: "Sanjay Patel", amount: "$650", date: "2025-09-20" },
  ];

  // Button navigation handlers
  const handleAddCourse = () => navigate("/courses");
  const handleUpdateEmployer = () => navigate("/employers");
  const handleGenerateCoupon = () => navigate("/coupons");

  return (
    <div className="w-full min-h-screen flex flex-col space-y-6 p-4 pb-10">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-blue-100 text-blue-800 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Batches Completed</h2>
          <p className="text-2xl font-bold">15</p>
        </div>

        <div className="bg-green-100 text-green-800 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Payments Received</h2>
          <p className="text-2xl font-bold">$12,500</p>
        </div>

        <div className="bg-purple-100 text-purple-800 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Students Hired</h2>
          <p className="text-2xl font-bold">50</p>
        </div>

        <div className="bg-yellow-100 text-yellow-800 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Active Courses</h2>
          <p className="text-2xl font-bold">8</p>
        </div>
      </div>

       {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-0">
        <button
          onClick={handleAddCourse}
          className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition font-semibold shadow-md"
        >
          <FaPlus /> Add New Course
        </button>

        <button
          onClick={handleUpdateEmployer}
          className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 active:bg-green-800 transition font-semibold shadow-md"
        >
          <FaUserTie /> Update Employer
        </button>

        <button
          onClick={handleGenerateCoupon}
          className="flex items-center justify-center gap-2 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 active:bg-purple-800 transition font-semibold shadow-md"
        >
          <FaGift /> Generate Coupon
        </button>
      </div>

      {/* Recent Registrations */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Recent Registrations</h2>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentRegistrations.map((r, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{r.name}</td>
                <td className="px-4 py-2">{r.email}</td>
                <td className="px-4 py-2">{r.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recent Payments */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Recent Payments</h2>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Student</th>
              <th className="px-4 py-2 text-left">Amount</th>
              <th className="px-4 py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentPayments.map((p, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{p.student}</td>
                <td className="px-4 py-2">{p.amount}</td>
                <td className="px-4 py-2">{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     

    </div>
  );
};

export default Dashboard;

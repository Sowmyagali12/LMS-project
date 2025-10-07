import React from "react";
import { Link } from "react-router-dom";
import {
  FaBook,
  FaFileAlt,
  FaLaptopCode,
  FaBullhorn,
  FaChartLine,
  FaClock,
} from "react-icons/fa";

const Dashboard = () => {
  const student = { name: "John Doe", course: "Computer Science" };

  const dashboardCards = [
    { title: "Courses", value: 5, trend: "+2 this month", icon: <FaBook />, link: "/dashboard/courses" },
    { title: "Assignments", value: 12, trend: "3 pending", icon: <FaFileAlt />, link: "/dashboard/assignments" },
    { title: "Placement", value: 1, trend: "Ongoing", icon: <FaLaptopCode />, link: "/dashboard/placement" },
    { title: "Updates", value: "5 New", trend: "Latest News", icon: <FaBullhorn />, link: "/dashboard/updates" },
    { title: "Weekly Progress", value: "On Track", trend: "", icon: <FaChartLine />, link: "/dashboard/weekly-progress" },
  ];

  const notices = [
    { title: "Exam Schedule Released", date: "17 Sep 2025" },
    { title: "New Internship Opportunity", date: "16 Sep 2025" },
    { title: "Holiday Notice", date: "15 Sep 2025" },
  ];

  const upcomingTasks = [
    { task: "React Project Submission", deadline: "20 Sep 2025" },
    { task: "Database Assignment", deadline: "22 Sep 2025" },
    { task: "Design UI Exercise", deadline: "25 Sep 2025" },
  ];

  const recentActivity = [
    { action: "Uploaded Database Assignment", time: "2 hours ago" },
    { action: "Joined AI Class", time: "Yesterday" },
    { action: "Submitted React Project", time: "2 days ago" },
    { action: "Checked Weekly Progress", time: "3 days ago" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 text-gray-800">
      <style>
        {`
          @keyframes blueGradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      {/* Header */}
      <div
        className="relative overflow-hidden rounded-3xl mx-auto mt-8 mb-12 p-10 text-white shadow-lg w-[95%] max-w-7xl flex flex-col md:flex-row justify-between items-center"
        style={{
          background: "linear-gradient(270deg, #3b82f6, #2563eb, #1e40af, #3b82f6)",
          backgroundSize: "600% 600%",
          animation: "blueGradientMove 10s ease infinite",
        }}
      >
        <div>
          <h1 className="text-4xl font-bold mb-2 tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-blue-100 text-lg">
            Welcome, {student.name}. This summary provides an overview of your current academic progress and activities in the {student.course} program.
          </p>
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-[95%] max-w-7xl mx-auto mb-12">
        {dashboardCards.map((card, idx) => (
          <Link key={idx} to={card.link}>
            <div className="group relative bg-white/90 backdrop-blur-md border border-blue-100 p-5 rounded-2xl shadow-[0_4px_6px_rgba(135,206,250,0.4)] hover:shadow-[0_8px_12px_rgba(135,206,250,0.6)] transition-all duration-300 hover:-translate-y-2">
              <div className="flex justify-between items-center mb-3">
                <div className="text-lg text-black transition-transform duration-300 group-hover:scale-110">
                  {card.icon}
                </div>
                {card.trend && (
                  <span className="text-sm text-gray-500">{card.trend}</span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-700">{card.title}</h3>
              <p className="text-2xl font-bold mt-1 text-blue-700">{card.value}</p>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-100/40 to-indigo-100/40 blur-sm"></div>
            </div>
          </Link>
        ))}
      </div>

{/* Notices + Deadlines */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[95%] max-w-7xl mx-auto mb-12">
  {/* Notices */}
  <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
    <h2 className="text-xl font-bold mb-4 text-black flex items-center gap-2">
      <FaBullhorn className="text-black text-lg" /> Latest Notices
    </h2>
    <ul className="divide-y divide-gray-100">
      {notices.map((notice, i) => (
        <li key={i} className="flex justify-between items-center py-3 rounded-lg px-2">
          <span className="font-medium text-gray-700">{notice.title}</span>
          <span className="text-sm text-blue-700">{notice.date}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* Deadlines */}
  <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
    <h2 className="text-xl font-bold mb-4 text-black flex items-center gap-2">
      <FaClock className="text-black text-lg" /> Upcoming Deadlines
    </h2>
    <ul className="space-y-3">
      {upcomingTasks.map((task, i) => (
        <li key={i} className="bg-blue-50 p-3 rounded-lg flex justify-between items-center">
          <span className="font-medium text-gray-700">{task.task}</span>
          <span className="text-sm text-blue-700 font-semibold">{task.deadline}</span>
        </li>
      ))}
    </ul>
  </div>
</div>

{/* Activity Timeline */}
<div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-8 w-[95%] max-w-7xl mx-auto mb-12">
  <h2 className="text-xl font-bold mb-6 text-black flex items-center gap-2">
    <FaClock className="text-black text-lg" /> Recent Activity
  </h2>
  <div className="space-y-4">
    {recentActivity.map((activity, i) => (
      <div
        key={i}
        className="flex items-start gap-4 bg-blue-50/50 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
      >
        <div className="flex-shrink-0 text-blue-600 text-lg mt-1">
          <FaBullhorn />
        </div>
        <div>
          <p className="font-semibold text-gray-700">{activity.action}</p>
          <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
            <FaClock className="text-black text-sm" /> {activity.time}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>


      </div>
    
  );
};

export default Dashboard;

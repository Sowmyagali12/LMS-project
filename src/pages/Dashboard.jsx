import React from "react";
import { Link } from "react-router-dom";
import {
  FaBook,
  FaFileAlt,
  FaLaptopCode,
  FaBullhorn,
  FaChartLine,
  FaPlus,
  FaUpload,
  FaUsers,
  FaClock,
} from "react-icons/fa";

const Dashboard = () => {
  const student = { name: "John Doe", course: "Computer Science", avatar: "" };

  const dashboardCards = [
    {
      title: "Courses",
      value: 5,
      trend: "+2 this month",
      icon: <FaBook size={22} className="text-indigo-600" />,
      link: "/dashboard/courses",
      color: "bg-indigo-50 border-indigo-200",
    },
    {
      title: "Assignments",
      value: 12,
      trend: "3 pending",
      icon: <FaFileAlt size={22} className="text-blue-600" />,
      link: "/dashboard/assignments",
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "Placement",
      value: 1,
      trend: "Ongoing",
      icon: <FaLaptopCode size={22} className="text-green-600" />,
      link: "/dashboard/placement",
      color: "bg-green-50 border-green-200",
    },
    {
      title: "Updates",
      value: "5 New",
      trend: "Latest News",
      icon: <FaBullhorn size={22} className="text-yellow-600" />,
      link: "/dashboard/updates",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      title: "Weekly Progress",
      value: "On Track",
      trend: "",
      icon: <FaChartLine size={22} className="text-red-600" />,
      link: "/dashboard/weekly-progress",
      color: "bg-red-50 border-red-200",
    },
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

  const quickActions = [
    {
      title: "Join Class",
      icon: <FaUsers className="text-white" />,
      link: "/join-class",
      color: "bg-indigo-600",
    },
    {
      title: "Upload Assignment",
      icon: <FaUpload className="text-white" />,
      link: "/upload-assignment",
      color: "bg-green-600",
    },
    {
      title: "Add Note",
      icon: <FaPlus className="text-white" />,
      link: "/notes",
      color: "bg-yellow-500",
    },
  ];

  const recentActivity = [
    { action: "Uploaded Database Assignment", time: "2 hours ago" },
    { action: "Joined AI Class", time: "Yesterday" },
    { action: "Submitted React Project", time: "2 days ago" },
    { action: "Checked Weekly Progress", time: "3 days ago" },
  ];

  const topCourses = [
    { name: "React Basics", progress: "Completed" },
    { name: "Database Management", progress: "In Progress" },
    { name: "UI/UX Design", progress: "Not Started" },
  ];

  const quickStats = [
    { label: "Total Courses", value: 8, color: "bg-indigo-500", icon: <FaBook /> },
    { label: "Pending Assignments", value: 3, color: "bg-red-500", icon: <FaFileAlt /> },
    { label: "Internships", value: 1, color: "bg-green-500", icon: <FaLaptopCode /> },
  ];

  return (
    <div className="p-8 min-h-screen font-sans bg-gradient-to-br from-blue-50 via-blue-100 to-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 animate-fadeInUp">
        <div>
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            Hello, {student.name}
          </h1>
          <p className="text-gray-600">
            Welcome back! Here's what's happening with your {student.course}.
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center shadow-md">
            {student.avatar ? (
              <img
                src={student.avatar}
                alt="avatar"
                className="w-20 h-20 rounded-full"
              />
            ) : (
              <span className="text-3xl text-white">👤</span>
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4 mb-10">
        {quickActions.map((action, i) => (
          <Link
            key={i}
            to={action.link}
            className={`flex items-center gap-3 px-5 py-3 rounded-xl shadow-md text-white font-medium transition transform hover:scale-110 hover:shadow-xl active:scale-95 duration-300 ${action.color} animate-fadeIn`}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {action.icon}
            {action.title}
          </Link>
        ))}
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
        {dashboardCards.map((card, idx) => (
          <Link to={card.link} key={idx}>
            <div
              className={`rounded-xl shadow-md p-5 border transition transform hover:shadow-lg hover:-translate-y-2 duration-300 cursor-pointer ${card.color} animate-fadeIn`}
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="flex items-center justify-between">
                <div className="p-2 bg-white rounded-md shadow-sm">{card.icon}</div>
                {card.trend && (
                  <span className="text-xs font-medium text-gray-500">{card.trend}</span>
                )}
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                <p className="text-2xl font-bold text-gray-900 mt-1">{card.value}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Notices & Deadlines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Notices */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition animate-slideIn">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">📢 Latest Notices</h2>
          <ul className="space-y-3">
            {notices.map((notice, i) => (
              <li
                key={i}
                className="flex justify-between items-center border-b border-gray-200 pb-3 last:border-none"
              >
                <div className="text-gray-700">{notice.title}</div>
                <div className="text-sm text-gray-500">{notice.date}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Deadlines */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition animate-slideIn">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">📌 Upcoming Deadlines</h2>
          <ul className="space-y-3">
            {upcomingTasks.map((task, i) => (
              <li
                key={i}
                className="flex justify-between items-center border-b border-gray-200 pb-3 last:border-none"
              >
                <div className="text-gray-700">{task.task}</div>
                <div className="text-sm text-red-500 font-medium">{task.deadline}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 mb-10 hover:shadow-lg transition animate-fadeIn">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">⏱️ Recent Activity</h2>
        <ul className="space-y-4">
          {recentActivity.map((activity, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 text-indigo-600 animate-pulse">
                <FaClock />
              </div>
              <div>
                <p className="text-gray-700 font-medium">{activity.action}</p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Top Courses & Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Top Courses */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition animate-slideIn">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">🌟 Top Courses</h2>
          <ul className="space-y-3">
            {topCourses.map((course, i) => (
              <li
                key={i}
                className="flex justify-between items-center border-b border-gray-200 pb-3 last:border-none"
              >
                <div className="text-gray-700">{course.name}</div>
                <div className="text-sm text-indigo-600 font-medium">{course.progress}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition animate-slideIn">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">📊 Quick Stats</h2>
          <div className="grid grid-cols-1 gap-4">
            {quickStats.map((stat, i) => (
              <div
                key={i}
                className={`flex items-center justify-between p-4 rounded-xl text-white shadow-md transition transform hover:scale-105 hover:shadow-lg ${stat.color} animate-fadeIn`}
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg opacity-90">{stat.icon}</span>
                  <span className="font-medium">{stat.label}</span>
                </div>
                <span className="font-bold text-lg">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

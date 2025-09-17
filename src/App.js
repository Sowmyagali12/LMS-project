// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// Pages
import Dashboard from "./pages/Dashboard";
import Classroom from "./pages/Classroom";
import CouponsAvailable from "./pages/CouponsAvailable";
import ResumeBuilder from "./pages/ResumeBuilder";
import Internship from "./pages/Internship";
import Certificate from "./pages/Certificate";

// Nested pages
import JobPortal from "./pages/CouponsAvailable/JobPortal";
import RecentPlacementCompanies from "./pages/CouponsAvailable/RecentPlacementCompanies";

import CompletedCourses from "./pages/Classroom/CompletedCourses";
import RunningCourses from "./pages/Classroom/RunningCourses";

import Assignments from "./pages/dashboard/Assignments";
import Courses from "./pages/dashboard/Courses";
import Placement from "./pages/dashboard/Placement";
import Updates from "./pages/dashboard/Updates";
import WeeklyProgress from "./pages/dashboard/WeeklyProgress";

import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="app-container flex">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <div className="main-content flex-1">
          {/* Navbar */}
          <Navbar />

          {/* Pages */}
          <div className="page-container p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />

              {/* Dashboard nested pages */}
              <Route path="/dashboard/assignments" element={<Assignments />} />
              <Route path="/dashboard/courses" element={<Courses />} />
              <Route path="/dashboard/placement" element={<Placement />} />
              <Route path="/dashboard/updates" element={<Updates />} />
              <Route path="/dashboard/weekly-progress" element={<WeeklyProgress />} />

              {/* Classroom nested pages */}
              <Route path="/classroom" element={<Classroom />} />
              <Route path="/classroom/completed" element={<CompletedCourses />} />
              <Route path="/classroom/running" element={<RunningCourses />} />

              {/* Coupons available nested */}
              <Route path="/coupons" element={<CouponsAvailable />} />
              <Route path="/coupons/job-portal" element={<JobPortal />} />
              <Route path="/coupons/recent-placement" element={<RecentPlacementCompanies />} />

              {/* Other single pages */}
              <Route path="/resume-builder" element={<ResumeBuilder />} />
              <Route path="/internship" element={<Internship />} />
              <Route path="/certificate" element={<Certificate />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

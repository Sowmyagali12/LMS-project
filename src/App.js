import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext";
import { ProgressProvider } from "./context/ProgressContext"; 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Sidebar from "./components/Sidebar";
import Navbar from "./components/navbar";
import ChatBox from "./components/ChatBox";
import CourseSyllabus from "./pages/dashboard/CourseSyllabus";

// Pages
import Dashboard from "./pages/Dashboard";
import Classroom from "./pages/Classroom";
import CompletedCourses from "./pages/Classroom/CompletedCourses";
import RunningCourses from "./pages/Classroom/RunningCourses";
import Placements from "./pages/Placements";
import JobPortal from "./pages/Placements/JobPortal";
import RecentPlacementCompanies from "./pages/Placements/RecentPlacementCompanies";
import ResumeBuilder from "./pages/ResumeBuilder";
import Internship from "./pages/Internship";
import Certificate from "./pages/Certificate";
import Payments from "./pages/Payments";
import Courses from "./pages/dashboard/Courses";
import Mentor from "./mentor"; // ✅ Correctly imported

// Dashboard subpages
import WeeklyProgress from "./pages/dashboard/WeeklyProgress";
import Assignments from "./pages/dashboard/Assignments";
import Placement from "./pages/dashboard/Placement";
import Updates from "./pages/dashboard/Updates";

// Profile & Settings
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  const notifications = [
    { message: "New internship posted", time: "2 hrs ago" },
    { message: "Assignment deadline approaching", time: "5 hrs ago" },
    { message: "Weekly report available", time: "1 day ago" },
  ];

  return (
    <StudentProvider>
      <ProgressProvider>
        <Router>
          <div className="flex min-h-screen overflow-x-hidden bg-gray-50 pt-0">
            {/* Sidebar */}
            <aside className="w-56 fixed top-0 left-0 h-screen bg-white shadow-md z-20">
              <Sidebar />
            </aside>

            {/* Main content */}
            <div className="flex-1 ml-56 flex flex-col min-h-screen">
              <Navbar notifications={notifications} />

              {/* Page content */}
              <main className="flex-1 p-6 pb-20">
                <Routes>
                  {/* Dashboard */}
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/dashboard/courses" element={<Courses />} />
                  <Route path="/course/:id/syllabus" element={<CourseSyllabus />} />
                  <Route path="/dashboard/weekly-progress" element={<WeeklyProgress />} />
                  <Route path="/dashboard/assignments" element={<Assignments />} />
                  <Route path="/dashboard/placement" element={<Placement />} />
                  <Route path="/dashboard/updates" element={<Updates />} />

                  {/* ✅ Mentor Dashboard */}
                  <Route path="/mentor" element={<Mentor />} />

                  {/* Classroom */}
                  <Route path="/classroom" element={<Classroom />} />
                  <Route path="/classroom/completed" element={<CompletedCourses />} />
                  <Route path="/classroom/running" element={<RunningCourses />} />

                  {/* Placements */}
                  <Route path="/placements" element={<Placements />} />
                  <Route path="/placements/job-portal" element={<JobPortal />} />
                  <Route
                    path="/placements/recent-placement-companies"
                    element={<RecentPlacementCompanies />}
                  />

                  {/* Other pages */}
                  <Route path="/resume-builder" element={<ResumeBuilder />} />
                  <Route path="/internship" element={<Internship />} />
                  <Route path="/certificate" element={<Certificate />} />
                  <Route path="/payments" element={<Payments />} />

                  {/* Profile & Settings */}
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </main>
            </div>

            {/* ChatBox */}
            <div className="fixed bottom-4 right-4 z-30">
              <ChatBox />
            </div>
          </div>

          {/* Toast notifications */}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </Router>
      </ProgressProvider>
    </StudentProvider>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminNavbar from "./components/Navbar";  // ensure default export
import AdminSidebar from "./components/Sidebar"; // ensure default export


// Pages (ensure all are default exported)
import Dashboard from "./pages/Dashboard";
import Batches from "./pages/Batchescompleted";
import Courses from "./pages/Courses";
import Internships from "./pages/Internships";
import Employers from "./pages/Employersupdate";
import StudentsHired from "./pages/Studentshired";
import Payments from "./pages/Payments";
import Coupons from "./pages/Couponsgenerated";

function App() {
  const notifications = [
    { message: "New student registered" },
    { message: "Payment received" },
  ];

  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <AdminNavbar notifications={notifications} />

          {/* Page Content */}
          <div className="flex-1 p-6 overflow-auto bg-gray-100">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/batches" element={<Batches />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/internships" element={<Internships />} />
              <Route path="/employers" element={<Employers />} />
              <Route path="/students-hired" element={<StudentsHired />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/coupons" element={<Coupons />} />
              
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

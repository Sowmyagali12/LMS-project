// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// User Pages
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ChangePassword from './pages/ChangePassword';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Courses from './pages/Courses';
import CourseLanding from './pages/CourseLanding';
import EnrolledCourses from './pages/EnrolledCourses';
import CourseContent from './pages/CourseContent';

// Admin Dashboard Pages
import AdminDashboard from './pages/admin-dashboard/AdminDashboard';
import AddUser from './pages/admin-dashboard/AddUser';
import AddCourse from './pages/admin-dashboard/AddCourse';
import AddTopic from './pages/admin-dashboard/AddTopic';
import AdminLogin from './pages/admin-dashboard/AdminLogin';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Always visible navigation bar */}
        <Navbar />

        {/* Dynamic page content */}
        <main className="flex-grow">
          <Routes>

            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />

            {/* Course User Routes */}
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseId" element={<CourseLanding />} />
            <Route path="/dashboard" element={<EnrolledCourses />} />
            <Route path="/course-content/:courseId" element={<CourseContent />} />

            {/* Admin Routes */}
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/admin/add-user" element={<AddUser />} />
            <Route path="/admin/add-course" element={<AddCourse />} />
            <Route path="/admin/upload-topic/:courseId" element={<AddTopic />} />
            <Route path="/admin-login" element={< AdminLogin />}/>

          </Routes>
        </main>

        {/* Always visible footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

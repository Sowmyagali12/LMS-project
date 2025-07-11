import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
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

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar always visible */}
        <Navbar />

        {/* Main content area */}
        <main className="flex-grow">
          <Routes>
            {/*  Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />

            {/* Course-Related Routes */}
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseId" element={<CourseLanding />} />
            <Route path="/dashboard" element={<EnrolledCourses />} />
            <Route path="/course-content/:courseId" element={<CourseContent />} />
          </Routes>
        </main>

        {/* Footer always visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

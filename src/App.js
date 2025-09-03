import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ✅ Correct
import Footer from "./components/footer.jsx";
import Navbar from "./components/nav.jsx";


// ✅ Pages (based on your `ls src/pages` output)
import AboutUs from './pages/AboutUs.jsx';
import HomePage from './pages/HomePage.js';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.js';
import ForgotPassword from './pages/ForgotPassword.jsx';
import ChangePassword from './pages/ChangePassword.jsx';
import ContactUs from './pages/ContactUs.js';
import Courses from './pages/Courses.jsx';
import PaymentPage from './pages/PaymentPage.jsx';
import CourseLanding from './pages/CourseLanding.jsx';
import EnrolledCourses from './pages/EnrolledCourses.jsx';
import CourseContent from './pages/CourseContent.jsx';

// ✅ Newly added file (you need to create this if not exists)
import AdminDashboard from './pages/AdminDashboard.jsx';

function App() {
  return (
    <Router>
      <Navbar />

      <main>
        <Routes>
          {/* 🌟 Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />

          {/* 🎓 Course Routes */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseLanding />} />

          {/* 💳 Payment Route */}
          <Route path="/payment/:courseId" element={<PaymentPage />} />
          <Route path="/dashboard" element={<EnrolledCourses />} />
          <Route path="/course-content/:courseId" element={<CourseContent />} />

          {/* 👨‍💼 Admin Route */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;

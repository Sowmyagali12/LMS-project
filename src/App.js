import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/navbar';
import Footer from './components/footer';

// Pages
import AboutUs from './pages/AboutUs';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ChangePassword from './pages/ChangePassword';
import ContactUs from './pages/ContactUs';
import Courses from './pages/Courses';
// import CourseRegistration from './pages/CourseRegistration'; // Commented if unused
import PaymentPage from './pages/PaymentPage';
import CourseLanding from './pages/CourseLanding';

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

          {/* 🔒 If you later use registration */}
          {/* <Route path="/course-registration" element={<CourseRegistration />} /> */}
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;











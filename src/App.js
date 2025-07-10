import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './components/navbar';
import Footer from './components/footer';
import AboutUs from './pages/AboutUs';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ChangePassword from './pages/ChangePassword';
import ContactUs from './pages/ContactUs';
import Courses from './pages/Courses';
import CourseRegistration from './pages/CourseRegistration';
import PaymentPage from './pages/PaymentPage';
import CourseLanding from './pages/CourseLanding';


function App() {
  return (
    <Router>
      
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/change-password" element={<ChangePassword/>}/>
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/courses" element={<Courses />} />
         <Route path="/aboutus" element={<AboutUs />} />
         <Route path="/course-registration" element={<CourseRegistration />} />
         <Route path="/payment" element={<PaymentPage/>} />
          {/* <Route path="/courses/:courseId" element={<CourseLanding />} /> */}
          <Route path="/courses/:courseId" element={<CourseLanding />} />

          
        </Routes>
      </main>

    
      <Footer />
      
    </Router>
  );
}

export default App;









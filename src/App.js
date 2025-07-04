import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Footer from './components/footer';

import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ContactUs from './pages/ContactUs';
import Courses from './pages/Courses';

function App() {
  return (
    <Router>
      
      <Navbar />

      {/* 🔲 Page content wrapper (for top padding due to fixed navbar) */}
      <main className="pt-32 min-h-screen bg-[#fbe8ff]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </main>

    
      <Footer />
    </Router>
  );
}

export default App;









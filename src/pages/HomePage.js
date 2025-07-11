
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#ffffff] flex flex-col">

       {/* Hero Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden min-h-[70vh] flex flex-col justify-center items-center px-6 md:px-16 py-10 bg-[#ffff]"
      >


     
      
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://www.ashokitech.in/assets/images/services221.png')`,
          }}
        ></div>

        <div className="relative z-10 w-full text-center md:text-left max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Empower Your <br /> Learning Journey
          </h1>
          <p className="text-[#ffff] text-base md:text-lg mt-4">
            Discover top courses, expert mentorship, and level up your skills <br />
            with flexible, practical, and career-aligned programs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
            <Link
              to="/login"
              className="px-6 py-3 bg-[#0793d1] hover:bg-[rgba(7,148,209,0.91)] text-white rounded-lg font-semibold transition duration-300"
            >
              Browse Courses
            </Link>
            <Link
              to="/login"
              className="px-6 py-3 border  bg-[#0793d1] border-[#0793d1] text-white hover:bg-[rgba(7,148,209,0.91)] rounded-lg font-semibold transition duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      {/* </section> */}
      </motion.section>

      {/* Our Services */}
      <section id="services" className="bg-white py-16 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>

        <div className="space-y-16">
          {/* Reusable service block */}
          {[{
            id: 'online-training',
            title: 'Online IT Training',
            img: 'https://i.pinimg.com/736x/06/60/50/0660504007f50a95529cb9c7e114e1a7.jpg',
            desc: `Our online IT training programs are built to help both working people and learners grow their skills from anywhere, at any time. They are budget-friendly, flexible, and easy to use. Each course is thoughtfully planned to keep you interested and involved, even while studying online. You’ll gain useful, real-life knowledge along with strong basic understanding. These programs are created to prepare you for real-world challenges in today’s fast-changing tech field.`
          }, {
            id: 'classroom-training',
            title: 'Classroom Training',
            img: 'https://i.pinimg.com/736x/52/19/d9/5219d9b3f4606ed553479e91b2b9b8d2.jpg',
            desc: `We also provide classroom-based IT training for those who prefer direct, hands-on learning. These in-person sessions create a friendly and interactive space where learners and trainers work together. Students get to meet industry experts face-to-face and take part in practical projects that help them learn by doing. This mode also strengthens teamwork, communication, and presentation skills.`
          }, {
            id: 'internships',
            title: 'Internship Programs',
            img: 'https://i.pinimg.com/736x/ef/98/c6/ef98c6dd696241318ceacd271fea0552.jpg',
            desc: `The world of IT is growing and changing every single day. With new tools, technologies, and trends coming up often, it’s important for IT professionals to keep learning and updating their skills. Our internship programs bridge this gap, offering practical industry exposure and teamwork, leadership, and communication development.`
          }].map((service, idx) => (
            

          <section
              id={service.id}
              key={service.id}
              className={`flex flex-col md:flex-row items-center gap-10 py-10 ${
                idx % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* 📷 Image */}
            <img
  src={service.img}
  alt={service.title}
  className="w-full max-w-md md:max-w-lg rounded-xl object-cover"
/>


              {/* 📄 Text Content */}
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-center md:text-left">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">{service.desc}</p>
              

              <div className="py-5">
                <Link
                  to="/contactus"
                  className="text-[#0793d1] hover:underline font-medium transition"
                >
                  Contact Us
              </Link>
            </div>
               
            </div>
          </section>





          ))}
        </div>
      </section>


      {/* Career Value Section */}
      <section className="py-16 px-6 bg-white text-center" id="career-value">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            The Bright Place to Build The Best Career Value
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-10">
            Best Opportunity To Learn From Currently Working Professionals
          </p>

          {/* Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-4 place-items-center">
            {/* Online Training */}
            <button className="w-64 bg-[#28A745] hover:bg-[#218838] text-white py-4 px-6 rounded-xl font-semibold shadow-lg transition duration-300">
              Online Training
            </button>

            {/* Classroom Training */}
            <button className="w-64 bg-[#007BFF] hover:bg-[#0069D9] text-white py-4 px-6 rounded-xl font-semibold shadow-lg transition duration-300">
              Classroom Training
            </button>
          </div>

          {/* Internships Button */}
          <div className="mt-6">
            <button className="w-64 bg-[#ea802f] hover:bg-[#d46f1f] text-white py-4 px-6 rounded-xl font-semibold shadow-lg transition duration-300">
              Internships
            </button>
          </div>
        </div>
      </section>


       {/* OUR TRAINING FEATURES SECTION */}
      <section className="bg-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Training Features
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <div className="text-blue-600 text-3xl mb-4">
              <i className="fas fa-calendar-check"></i>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
              In-time Course Completion
          </h3>
          <p className="text-gray-600 text-sm mb-2">
            We ensure every course is completed on time with a perfect balance of theory and practice.
          </p>
         
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <div className="text-green-600 text-3xl mb-4">
              <i className="fas fa-building"></i>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
              State-of-the-art Infrastructure
          </h3>
          <p className="text-gray-600 text-sm mb-2">
              At TECHNOHUB, students study in a learning environment supported by modern infrastructure, tools and labs.
          </p>
         
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <div className="text-red-500 text-3xl mb-4">
              <i className="fas fa-sync-alt"></i>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Blended Training Approach
          </h3>
          <p className="text-gray-600 text-sm mb-2">
              We adopt an integrated approach to training that helps our students get both IT knowledge and skills.
          </p>
         
          </div>

          {/* Feature 4 */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <div className="text-yellow-500 text-3xl mb-4">
              <i className="fas fa-handshake"></i>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Free Demo Sessions
          </h3>
          <p className="text-gray-600 text-sm mb-2">
              We also provide prospective students with the option to try the courses with free demo sessions.
          </p>
          
          </div>
      </div>
      </section>


       {/* WHY CHOOSE US SECTION */}
      <section className="py-16 px-6" style={{ backgroundColor: 'rgb(217, 234, 248)' }} id="why-choose-us">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Us?</h2>
          <p className="text-gray-700 text-base max-w-3xl mx-auto mb-12">
            Our platform is built to provide not only knowledge but also mentorship and career acceleration with real-world projects and industry-aligned curriculum.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Expert Mentors</h3>
              <p className="text-sm text-gray-600">Learn from professionals who actively work in the industry with years of experience.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Real Projects</h3>
              <p className="text-sm text-gray-600">Work on actual business problems to prepare for interviews and the workplace.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Career Support</h3>
              <p className="text-sm text-gray-600">Mock interviews, resume reviews, and job referrals for our top-performing students.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default HomePage;


























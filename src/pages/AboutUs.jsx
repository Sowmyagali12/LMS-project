 // src/pages/AboutUs.jsx
import React from "react";

const AboutUs = () => {
  return (
    <section id="aboutus" className=" py-20 px-6 md:px-16" style={{ backgroundColor: 'rgb(217, 234, 248)' }}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-600 mb-10">About Technohub</h2>

        {/* Who We Are */}
        <div className="mb-12">
          <p className="text-gray-700 max-w-4xl mx-auto text-left mb-5">
            Welcome to <strong>Technohub</strong>, where we help people gain the knowledge and skills needed to 
            succeed in the fast-changing world of technology. We offer a variety of <strong>online and offline 
            courses</strong> for both beginners and professionals looking to grow their careers in tech.
          </p>
          <p className="text-gray-700 max-w-4xl mx-auto text-left mb-5">Our courses cover a range of topics, including <strong> Software Development, Data Science, Cybersecurity,            
            Mobile App Development</strong>, and more. We focus on providing hands-on experience through real-world projects, 
            helping you learn practical skills that can be applied directly in the industry.
          </p>

            <p className="text-gray-700 max-w-4xl mx-auto text-left mb-5">At Technohub, we believe learning is a continuous process. 
              That’s why we offer <strong>lifetime access</strong> to our 
              course materials and keep them updated to ensure you stay current in your field. With <strong>expert instructors </strong>
              and <strong>personalized support</strong>, we’re here to help you reach your goals and advance your career.
            </p>
        </div>


      </div>
    </section>
  );
};

export default AboutUs;

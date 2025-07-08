// src/components/Footer.jsx
import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#444444] text-[#fff] pt-12 pb-4 px-6 md:px-20 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <img
            src="http://technohubtrainings.in/img/technohub-logo.png"
            alt="TechnoHub Logo"
            className="w-32 mb-4"
          />
          <p >
            TechnoHub empowers tech learners with expert training and hands-on experience. Our mission is to build a brighter tech future for everyone.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-red-500 font-semibold mb-2 border-b border-red-600 inline-block">QUICK LINKS</h4>
          <ul className=" space-y-1 mt-2">
            <li><a href="/">Home</a></li>
            <li><a href="/online-training">Online Training</a></li>
            <li><a href="/classroom-training">Classroom Training</a></li>
            <li><a href="/contactus">Contact Us</a></li>
            <li><a href="/aboutus">About Us</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="text-red-500 font-semibold mb-2 border-b border-red-600 inline-block">OUR POLICIES</h4>
          <ul className=" space-y-1 mt-2">
            <li><a href="/pricing">Pricing Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/refund">Refund Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-red-500 font-semibold mb-2 border-b border-red-600 inline-block">CONTACT US</h4>
          <ul className=" space-y-2 mt-2">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-red-500" /> +91 9849175588
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-white-500" /> shameer@technohubtrainings.com
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-red-500 mt-1" />
              <span>
               #131A, 1st floor, 80 Feet Rd, <br/>
               RMV 2nd stage MET Layout,<br/>
                Ashwath Nagar, Sanjaynagar,<br/>
                Bengaluru-94.
              </span>
            </li>
            <li>
              <a
                href="https://chat.whatsapp.com/technohubgroup"
                className="text-yellow-400 font-semibold hover:underline"
              >
                Click Here To Join Our WhatsApp Group For Latest Updates
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-8 text-center">
        <p className="text-red-500 font-bold mb-2">FOLLOW US :</p>
        <div className="flex justify-center gap-4 text-xl text-white">
          <a href="https://wa.me/919849175588" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-xs">
        &copy; {new Date().getFullYear()} TECHNOHUB All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

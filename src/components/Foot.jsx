import React from "react";
// Importing FontAwesome icons for contact and social media
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

// Footer Component
const Footer = () => {
  return (
    // Main footer container with background and padding
    <footer className="bg-[#444444] text-[#fff] pt-12 pb-4 px-6 md:px-20 text-sm">
      
      {/* Grid layout for 4 main columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/*  1st Column: Logo and About Section */}
        <div>
          <img
            src="http://technohubtrainings.in/img/technohub-logo.png"
            alt="TechnoHub Logo"
            className="w-32 mb-4"
          />
          <p>
            TechnoHub empowers tech learners with expert training and hands-on experience.
            Our mission is to build a brighter tech future for everyone.
          </p>
        </div>

        {/*  2nd Column: Quick Navigation Links */}
        <div>
          <h4 className="text-red-500 font-semibold mb-2 border-b border-red-600 inline-block">
            QUICK LINKS
          </h4>
          <ul className="space-y-1 mt-2">
            <li><a href="/">Home</a></li>
            <li><a href="/online-training">Online Training</a></li>
            <li><a href="/classroom-training">Classroom Training</a></li>
            <li><a href="/contactus">Contact Us</a></li>
            <li><a href="/aboutus">About Us</a></li>
          </ul>
        </div>

        {/*  3rd Column: Policy Links */}
        <div>
          <h4 className="text-red-500 font-semibold mb-2 border-b border-red-600 inline-block">
            OUR POLICIES
          </h4>
          <ul className="space-y-1 mt-2">
            <li><a href="/pricing">Pricing Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/refund">Refund Policy</a></li>
          </ul>
        </div>

        {/*  4th Column: Contact Information */}
        <div>
          <h4 className="text-red-500 font-semibold mb-2 border-b border-red-600 inline-block">
            CONTACT US
          </h4>
          <ul className="space-y-2 mt-2">
            {/* Phone number */}
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-red-500" /> +91 9849175588
            </li>
            {/* Email */}
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-white-500" /> shameer@technohubtrainings.com
            </li>
            {/* Address */}
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-red-500 mt-1" />
              <span>
                #131A, 1st floor, 80 Feet Rd, <br />
                RMV 2nd stage MET Layout,<br />
                Ashwath Nagar, Sanjaynagar,<br />
                Bengaluru-94.
              </span>
            </li>
            {/* WhatsApp group link */}
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

      {/*  Social Media Links */}
      <div className="mt-8 text-center">
        <p className="text-red-500 font-bold mb-2">FOLLOW US :</p>
        <div className="flex justify-center gap-4 text-xl text-white">
          {/* Social media icons linked to their respective platforms */}
          <a href="https://wa.me/919849175588" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </div>

      {/*  Bottom Section with Copyright */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-xs">
        &copy; {new Date().getFullYear()} TECHNOHUB All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope
} from "react-icons/fa";

// Data arrays
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Online Training", href:"/#online-training" },
  { label: "Contact Us", href: "/contactus" },
  { label: "About Us", href: "/aboutus" },
];

const contactInfo = [
  {
    icon: <FaPhoneAlt className="text-red-500" />,
    text: "+91 9849175588",
  },
  {
    icon: <FaEnvelope className="text-white" />,
    text: "shameer@technohubtrainings.com",
  },
  {
    icon: <FaMapMarkerAlt className="text-red-500 mt-1" />,
    text: (
      <span>
        #131A, 1st floor, 80 Feet Rd, <br />
        RMV 2nd stage MET Layout,<br />
        Ashwath Nagar, Sanjaynagar,<br />
        Bengaluru-94.
      </span>
    ),
  },
];

const socialLinks = [
  { icon: <FaWhatsapp />, href: "https://wa.me/919849175588" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/technohub_trainings/" },
  { icon: <FaFacebook />, href: "https://www.facebook.com/share/1Eq9657Dbp/" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/company/asar-it-technologies/" },
];

const Footer = () => {
  return (
    <footer className="bg-[#444444] text-[#fff] pt-12 pb-4 px-6 md:px-20 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        
        {/* 1. Logo + About */}
        <div>
          <img
            src="http://technohubtrainings.in/img/technohub-logo.png"
            alt="TechnoHub Logo"
            className="w-32 mb-4"
          />
          <p>
            TechnoHub empowers tech learners  <br/> 
            with expert training and hands-on <br/>
            experience. Our mission is to build <br/> 
            a brighter tech future for everyone.
          </p>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h4 className="text-red-500 font-semibold mb-2 border-b border-red-600 inline-block">
            QUICK LINKS
          </h4>
          <ul className="space-y-1 mt-2">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="hover:underline">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Contact Us */}
        <div>
          <h4 className="text-red-500 font-semibold mb-2 border-b border-red-600 inline-block">
            CONTACT US
          </h4>
          <ul className="space-y-2 mt-2">
            {contactInfo.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                {item.icon}
                <span>{item.text}</span>
              </li>
            ))}
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

      {/* Social Media */}
      <div className="mt-8 text-center">
        <p className="text-red-500 font-bold mb-2">FOLLOW US :</p>
        <div className="flex justify-center gap-4 text-xl text-white">
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-xs">
        &copy; {new Date().getFullYear()} TECHNOHUB All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

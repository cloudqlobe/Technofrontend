import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/Image/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { BsMicrosoftTeams } from "react-icons/bs";  // Microsoft Teams Icon

const socialIcons = [
  { id: 1, icon: <FaFacebookF size={14} className="text-white" />, bgColor: "bg-blue-600" },
  { id: 2, icon: <FaLinkedinIn size={14} className="text-white" />, bgColor: "bg-blue-700" },
  { id: 3, icon: <FaInstagram size={14} className="text-white" />, bgColor: "bg-pink-500" },
  { id: 4, icon: <FaTwitter size={14} className="text-white" />, bgColor: "bg-blue-400" },
  { id: 5, icon: <BsMicrosoftTeams size={14} className="text-white" />, bgColor: "bg-purple-400" }, // Microsoft Teams Icon
];

const Navbar = () => {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <motion.div 
      className="w-full bg-white fixed top-0 left-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.nav 
        className="px-6 py-2 flex items-center justify-between h-20"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        {/* ✅ Logo with Social Media Animation */}
        <div 
          className="relative flex flex-col items-center"
          onMouseEnter={() => setShowIcons(true)}
          onMouseLeave={() => setShowIcons(false)}
        >
          <img 
            src={logo} 
            alt="Logo" 
            className="w-[250px] h-[80px] object-contain"
          />

          {/* Social Icons Box */}
          <AnimatePresence>
            {showIcons && (
              <motion.div 
                className="absolute top-24 flex space-x-6"  // Horizontal layout for icons
                initial={{ opacity: 0, y: -10 }}  // Icons start from slightly above
                animate={{ opacity: 1, y: 0 }}  // Fade in and move down to final position
                exit={{ opacity: 0, y: 10 }}  // Move up and fade out when exiting
              >
                {socialIcons.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: -10 }}  // Start slightly above
                    animate={{ opacity: 1, y: 0 }}  // Fade in and move down to final position
                    exit={{ opacity: 0, y: -10 }}  // Move up and fade out when exiting
                    transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}  // Delay each icon's animation
                    className={`p-2 ${item.bgColor} rounded-lg shadow-lg`}
                    whileHover={{ scale: 1.2 }}  // Zoom-in effect on hover
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ✅ Navigation Menu */}
        <ul className="flex space-x-5 text-gray-800 text-base font-semibold">
          {["Home", "Services", "About Us", "Our Works", "Softwares", "Careers"].map((title, index) => (
            <motion.li key={index} className="relative group cursor-pointer px-3">
              <span className="hover:text-[#F76D37]">{title}</span>
            </motion.li>
          ))}
        </ul>

        {/* ✅ Search Bar & Contact Button */}
        <div className="flex items-center space-x-10">
          {/* Search Bar */}
          <div className="relative w-80">
            <input 
              type="text" 
              placeholder="SEARCH..." 
              className="bg-gray-100 text-gray-800 px-4 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F76D37] placeholder-gray-500 uppercase"
            />
            <FiSearch className="absolute right-4 top-2.5 text-gray-500 text-xl cursor-pointer hover:text-[#F76D37] transition duration-300" />
          </div>

          {/* Contact Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#F76D37] text-white px-5 py-2 rounded-md hover:bg-[#D75A2E] transition duration-300 uppercase"
          >
            CONTACT US
          </motion.button>
        </div>
      </motion.nav>
    </motion.div>
  );
};

export default Navbar;

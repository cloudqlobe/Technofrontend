import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsMicrosoftTeams } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Image/logo.png";

const socialIcons = [
  { id: 1, icon: <FaFacebookF size={14} className="text-white" />, bgColor: "bg-blue-600" },
  { id: 2, icon: <FaLinkedinIn size={14} className="text-white" />, bgColor: "bg-blue-700" },
  { id: 3, icon: <FaInstagram size={14} className="text-white" />, bgColor: "bg-pink-500" },
  { id: 4, icon: <FaTwitter size={14} className="text-white" />, bgColor: "bg-blue-400" },
  { id: 5, icon: <BsMicrosoftTeams size={14} className="text-white" />, bgColor: "bg-purple-400" },
];

const Navbar = () => {
  const [showIcons, setShowIcons] = useState(false);
  const [dropdown, setDropdown] = useState("");

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? "" : menu);
  };

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
        {/* ✅ Logo & Social Media Icons */}
        <div 
          className="relative flex flex-col items-center"
          onMouseEnter={() => setShowIcons(true)}
          onMouseLeave={() => setShowIcons(false)}
        >
          <img src={logo} alt="Logo" className="w-[250px] h-[80px] object-contain" />
          <AnimatePresence>
            {showIcons && (
              <motion.div 
                className="absolute top-24 flex space-x-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                {socialIcons.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
                    className={`p-2 ${item.bgColor} rounded-lg shadow-lg`}
                    whileHover={{ scale: 1.2 }}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ✅ Navigation Menu with Clickable Dropdowns */}
        <ul className="flex space-x-4 text-gray-800 text-base font-semibold">
          <li className="px-3 cursor-pointer">
            <span className="hover:text-[#F76D37]">Home</span>
          </li>

          {/* Services Dropdown */}
          <li className="relative px-3 cursor-pointer" onClick={() => toggleDropdown("services")}>
            <span className="hover:text-[#F76D37]">Services</span>
            {dropdown === "services" && (
              <motion.ul 
                className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-md border border-gray-200"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {["Website Development", "Mobile Apps", "SEO", "Design", "Content Marketing"].map((item, index) => (
                  <li key={index} className="px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
                    {item}
                  </li>
                ))}
              </motion.ul>
            )}
          </li>

          <li className="px-3 cursor-pointer">
            <span className="hover:text-[#F76D37]">About Us</span>
          </li>

          <li className="px-3 cursor-pointer">
            <span className="hover:text-[#F76D37]">Our Works</span>
          </li>

          {/* Softwares Dropdown */}
          <li className="relative px-3 cursor-pointer" onClick={() => toggleDropdown("softwares")}>
            <span className="hover:text-[#F76D37]">Softwares</span>
            {dropdown === "softwares" && (
              <motion.ul 
                className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {["CRM", "ERP", "Project Management", "Billing Software", "HRM"].map((item, index) => (
                  <li key={index} className="px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
                    {item}
                  </li>
                ))}
              </motion.ul>
            )}
          </li>

          <li className="px-3 cursor-pointer">
            <span className="hover:text-[#F76D37]">Careers</span>
          </li>
        </ul>

        {/* ✅ Search Bar & Contact Button */}
        <div className="flex items-center space-x-10">
          {/* Search Bar */}
          <div className="relative w-80">
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-gray-100 text-gray-800 px-4 py-2 w-full rounded-md border-2 border-orange-400 focus:outline-none focus:ring-2 focus:ring-[#F76D37] placeholder-gray-500 uppercase"
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

import React, { useState, useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import {
  FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter,
  FaLaptopCode, FaMobileAlt, FaChartLine, FaPencilRuler,
  FaFileAlt, FaBriefcase, FaCogs, FaUsers, FaClipboardList,
  FaMoneyBill, FaChevronRight, FaChevronDown
} from "react-icons/fa";
import { BsMicrosoftTeams } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Image/logo.png";
import { Link } from 'react-router-dom';

const socialIcons = [
  { id: 1, icon: <FaFacebookF size={14} className="text-white" />, bgColor: "bg-blue-600" },
  { id: 2, icon: <FaLinkedinIn size={14} className="text-white" />, bgColor: "bg-blue-700" },
  { id: 3, icon: <FaInstagram size={14} className="text-white" />, bgColor: "bg-pink-500" },
  { id: 4, icon: <FaTwitter size={14} className="text-white" />, bgColor: "bg-blue-400" },
  { id: 5, icon: <BsMicrosoftTeams size={14} className="text-white" />, bgColor: "bg-purple-400" },
];

const dropdownItems = {
  services: [
    { icon: <FaLaptopCode className="text-blue-600" />, label: "Website Development", url: "/services/web-development" },
    { icon: <FaMobileAlt className="text-green-500" />, label: "Mobile Apps", url: "/services/mobile-apps" },
    { icon: <FaChartLine className="text-orange-500" />, label: "Hosting Services", url: "/services/seo" },
    { icon: <FaPencilRuler className="text-purple-500" />, label: "UI & UX Design", url: "/services/design" },
    { icon: <FaFileAlt className="text-red-500" />, label: "Tech Consultancy", url: "/services/content-marketing" },
    { icon: <FaFileAlt className="text-yellow-500" />, label: "Cloudcomputing", url: "/services/Cloudcomputing" },
  ],
  softwares: [
    { icon: <FaBriefcase className="text-blue-600" />, label: "CRM", url: "/software/crm" },
    { icon: <FaCogs className="text-green-500" />, label: "ERP", url: "/software/erp" },
    { icon: <FaClipboardList className="text-orange-500" />, label: "Project Management", url: "/software/project-management" },
    { icon: <FaMoneyBill className="text-yellow-500" />, label: "Billing Software", url: "/software/billing" },
    { icon: <FaUsers className="text-purple-500" />, label: "Chatbot", url: "/software/hrm" },
  ],
};

const Navbar = () => {
  const [showIcons, setShowIcons] = useState(false);
  const [dropdown, setDropdown] = useState("");
  const dropdownRef = useRef();

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? "" : menu);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdown("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.div className="w-full bg-white fixed top-0 left-0 z-50">
      <motion.nav className="px-6 py-2 flex items-center justify-between h-20">
        {/* Logo and social icons */}
        <div 
          className="relative flex flex-col items-center"
          onMouseEnter={() => setShowIcons(true)}
          onMouseLeave={() => setShowIcons(false)}
        >
          <img src={logo} alt="Logo" className="w-[250px] h-[80px] object-contain" />
          <AnimatePresence>
            {showIcons && (
              <motion.div className="absolute top-24 flex space-x-6">
                {socialIcons.map(item => (
                  <motion.div key={item.id} className={`p-2 ${item.bgColor} rounded-lg shadow-lg`}>
                    {item.icon}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Nav items */}
        <ul className="flex space-x-4 text-gray-800 text-base font-semibold" ref={dropdownRef}>
          <li className="px-3 cursor-pointer hover:text-orange-500">
            <Link to="/">Home</Link>
          </li>

          <li className="relative px-3 cursor-pointer hover:text-orange-500" onClick={() => toggleDropdown("services")}>
            <span className="flex items-center gap-2">
              Services <FaChevronDown className="text-xs" />
            </span>
            {dropdown === "services" && (
              <motion.ul className="absolute left-0 mt-2 w-[500px] shadow-lg rounded-none border border-orange-300 bg-white p-2 z-50 grid grid-cols-2 gap-x-4">
                {dropdownItems.services.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className={`flex items-center px-4 py-2 hover:bg-orange-50`}>
                    <Link to={item.url} className="flex items-center space-x-3 text-gray-800 hover:text-orange-500">
                      <span className={`p-2 rounded-full`}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                      <FaChevronRight className="text-xs" />
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </li>

          <li className="px-3 cursor-pointer hover:text-orange-500">
            <Link to="/about">About Us</Link>
          </li>

          <li className="px-3 cursor-pointer hover:text-orange-500">
            <Link to="/our-works">Our Works</Link>
          </li>

          <li className="relative px-3 cursor-pointer hover:text-orange-500" onClick={() => toggleDropdown("softwares")}>
            <span className="flex items-center gap-2">
              Softwares <FaChevronDown className="text-xs" />
            </span>
            {dropdown === "softwares" && (
              <motion.ul className="absolute left-0 mt-2 w-[500px] shadow-lg rounded-none border border-orange-300 bg-white p-2 z-50 grid grid-cols-2 gap-x-4">
                {dropdownItems.softwares.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className={`flex items-center px-4 py-2 hover:bg-orange-50`}>
                    <Link to={item.url} className="flex items-center space-x-3 text-gray-800 hover:text-orange-500">
                      <span className={`p-2 rounded-full`}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                      <FaChevronRight className="text-xs" />
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </li>

          <li className="px-3 cursor-pointer hover:text-orange-500">
            <Link to="/careers">Careers</Link>
          </li>
        </ul>

        {/* Search and Contact */}
        <div className="flex items-center space-x-10">
          <div className="relative w-80">
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-gray-100 text-gray-800 px-4 py-2 w-full rounded-md border-2 border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-500 uppercase"
            />
            <FiSearch className="absolute right-4 top-2.5 text-gray-500 text-xl cursor-pointer hover:text-orange-500" />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 uppercase"
          >
            Contact Us
          </motion.button>
        </div>
      </motion.nav>
    </motion.div>
  );
};

export default Navbar;

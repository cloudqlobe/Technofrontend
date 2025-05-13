import React, { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { TbCloudComputing } from "react-icons/tb";
import {
  FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter,
  FaLaptopCode, FaMobileAlt, FaCloud, FaPaintBrush,
  FaLightbulb, FaServer, FaBriefcase, FaIndustry, FaProjectDiagram,
  FaFileInvoiceDollar, FaRobot, FaChevronDown
} from "react-icons/fa";
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

const dualToneIconStyle = {
  color: "rgba(236, 126, 8, 0.95)", // orange with 60% opacity
  stroke: "black",
  strokeWidth: 20,
};

const dropdownItems = {
  services: [
    {
      icon: <FaLaptopCode style={dualToneIconStyle} className="text-3xl" />,
      label: "Website Development",
      url: "/services/web-development",
    },
    {
      icon: <FaMobileAlt style={dualToneIconStyle} className="text-3xl" />,
      label: "Mobile Apps",
      url: "/services/mobile-apps",
    },
    {
      icon: <FaCloud style={dualToneIconStyle} className="text-3xl" />,
      label: "Cloud Computing",
      url: "/services/cloudcomputing",
    },
    {
      icon: <FaPaintBrush style={dualToneIconStyle} className="text-3xl" />,
      label: "UI & UX Design",
      url: "/services/design",
    },
    {
      icon: <FaLightbulb style={dualToneIconStyle} className="text-3xl" />,
      label: "Tech Consultancy",
      url: "/services/content-marketing",
    },
    {
      icon: <FaServer style={dualToneIconStyle} className="text-3xl" />,
      label: "Hosting Services",
      url: "/services/seo",
    },
  ],
  softwares: [
    {
      icon: <FaBriefcase style={dualToneIconStyle} className="text-3xl" />,
      label: "CRM",
      url: "/software/crm",
    },
    {
      icon: <FaIndustry style={dualToneIconStyle} className="text-3xl" />,
      label: "ERP",
      url: "/software/erp",
    },
    {
      icon: <FaProjectDiagram style={dualToneIconStyle} className="text-3xl" />,
      label: "Project Management",
      url: "/software/project-management",
    },
    {
      icon: <FaFileInvoiceDollar style={dualToneIconStyle} className="text-3xl" />,
      label: "Billing Software",
      url: "/software/billing",
    },
    {
      icon: <FaRobot style={dualToneIconStyle} className="text-3xl" />,
      label: "Chatbot",
      url: "/software/hrm",
    },
  ],
};

const Navbar = () => {
  const location = useLocation();
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

  const isActive = (path) => location.pathname === path;

  return (
    <motion.div className="w-full bg-white fixed top-0 left-0 z-50">
      <motion.nav className="px-6 py-2 flex items-center justify-between h-20">
        {/* Logo + Social Icons */}
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

        {/* Nav Items */}
        <ul className="flex space-x-4 text-gray-800 text-base font-semibold" ref={dropdownRef}>
          <li className={`px-3 cursor-pointer ${isActive("/") ? "text-orange-500" : ""}`}>
            <Link to="/">Home</Link>
          </li>

          <li
            className={`relative px-3 cursor-pointer ${dropdown === "services" || location.pathname.includes("/services") ? "text-orange-500" : ""}`}
            onClick={() => toggleDropdown("services")}
          >
            <span className="flex items-center gap-2">
              Services <FaChevronDown className="text-xs" />
            </span>
          </li>

          <li className={`px-3 cursor-pointer ${isActive("/about") ? "text-orange-500" : ""}`}>
            <Link to="/about">About Us</Link>
          </li>

          <li className={`px-3 cursor-pointer ${isActive("/our-works") ? "text-orange-500" : ""}`}>
            <Link to="/our-works">Our Works</Link>
          </li>

          <li
            className={`relative px-3 cursor-pointer ${dropdown === "softwares" || location.pathname.includes("/software") ? "text-orange-500" : ""}`}
            onClick={() => toggleDropdown("softwares")}
          >
            <span className="flex items-center gap-2">
              Softwares <FaChevronDown className="text-xs" />
            </span>
          </li>

          <li className={`px-3 cursor-pointer ${isActive("/careers") ? "text-orange-500" : ""}`}>
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

      {/* Dropdown */}
      <AnimatePresence>
        {dropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-0 w-full bg-[#f9f9f9] shadow-xl z-40 py-10 px-20"
          >
            <div className="flex gap-10">
              <div className="w-1/4 pr-6">
                <h3 className="text-2xl font-bold text-orange-600 mb-4 capitalize">
                  {dropdown === "services" ? "Our Services" : "Our Softwares"}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {dropdown === "services"
                    ? "We offer cutting-edge services to boost your business digitally — from web and mobile development to design and cloud solutions."
                    : "Explore our powerful software solutions built for modern businesses to streamline your operations and maximize growth."}
                </p>
              </div>
              <div className="w-px bg-gray-300"></div>
              <div className="grid grid-cols-3 gap-8 w-3/4">
                {(dropdown === "services" ? dropdownItems.services : dropdownItems.softwares).map((item, index) => (
                  <Link
                    to={item.url}
                    key={index}
                    className={`flex items-center gap-4 p-3 rounded-md transition-all hover:bg-gray-100 ${
                      isActive(item.url) ? "bg-orange-100" : ""
                    }`}
                  >
                    <div className="w-12 h-12 flex items-center justify-center squared-full border border-gray-500">
                      {item.icon}</div>
                    <span className="text-base font-medium text-gray-700">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;

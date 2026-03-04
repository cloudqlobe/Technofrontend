import React, { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { BsLifePreserver, BsMicrosoftTeams } from "react-icons/bs";
import { GiCloudRing, GiSurroundedEye } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import { SiDevexpress, SiWebmoney, SiSitecore } from "react-icons/si";
import { FaRobot, FaPhoenixSquadron, FaQuinscape, FaStroopwafel } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Image/logo2.png";

const socialIcons = [
  { id: 1, icon: <FaFacebookF size={14} className="text-white" />, bgColor: "bg-blue-600" },
  { id: 2, icon: <FaLinkedinIn size={14} className="text-white" />, bgColor: "bg-blue-700" },
  { id: 3, icon: <FaInstagram size={14} className="text-white" />, bgColor: "bg-pink-500" },
  { id: 4, icon: <FaTwitter size={14} className="text-white" />, bgColor: "bg-blue-400" },
  { id: 5, icon: <BsMicrosoftTeams size={14} className="text-white" />, bgColor: "bg-purple-400" },
];

const iconStyle = {
  color: "#607D8B",
  fontSize: "2rem",
};

const dropdownItems = {
  services: [
    { icon: <SiWebmoney style={iconStyle} />, label: "Website Development", url: "/services/web-development" },
    { icon: <IoAppsSharp style={iconStyle} />, label: "Mobile Apps", url: "/services/mobile-apps" },
    { icon: <GiCloudRing style={iconStyle} />, label: "Cloud Computing", url: "/services/cloudcomputing" },
    { icon: <SiDevexpress style={iconStyle} />, label: "UI & UX Design", url: "/services/design" },
    { icon: <GiSurroundedEye style={iconStyle} />, label: "Tech Consultancy", url: "/services/content-marketing" },
    { icon: <BsLifePreserver style={iconStyle} />, label: "Hosting Services", url: "/services/seo" },
  ],
  softwares: [
    { icon: <FaStroopwafel style={iconStyle} />, label: "CRM", url: "/software/crm" },
    { icon: <FaQuinscape style={iconStyle} />, label: "ERP", url: "/software/erp" },
    { icon: <SiSitecore style={iconStyle} />, label: "Project Management", url: "/software/project-management" },
    { icon: <FaPhoenixSquadron style={iconStyle} />, label: "Billing Software", url: "/software/billing" },
    { icon: <FaRobot style={iconStyle} />, label: "Chatbot", url: "/software/chatbot" },
  ],
};

const Navbar = () => {
  const location = useLocation();
  const [showIcons, setShowIcons] = useState(false);
  const [dropdown, setDropdown] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState("");
  const dropdownRef = useRef();

  const toggleDropdown = (menu) => setDropdown(dropdown === menu ? "" : menu);
  const toggleMobileDropdown = (menu) => setMobileDropdown(mobileDropdown === menu ? "" : menu);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdown("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const isActive = (path) => location.pathname === path;

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdown("");
  };

  return (
    <motion.div className="w-full bg-white fixed top-0 left-0 z-50">
      <motion.nav className="px-4 lg:px-6 py-2 flex items-center justify-between h-16 lg:h-20">
        {/* Logo + Social Icons */}
        <div
          className="relative flex flex-col items-center"
          onMouseEnter={() => setShowIcons(true)}
          onMouseLeave={() => setShowIcons(false)}
        >
          {/* Logo */}
<div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="w-[200px] lg:w-[198px] object-contain"
            />
          </div>
          <AnimatePresence>
            {showIcons && (
              <motion.div
                className="hidden lg:flex absolute top-20 space-x-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {socialIcons.map(item => (
                  <motion.div
                    key={item.id}
                    className={`p-2 ${item.bgColor} rounded-lg shadow-lg`}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Nav Items */}
<nav aria-label="Primary Navigation">
  <ul
    className="hidden lg:flex space-x-4 text-gray-800 text-base font-semibold"
    ref={dropdownRef}
  >
    <li
      className={`px-3 cursor-pointer ${isActive("/") ? "text-blue-500" : ""}`}
    >
      <Link to="/" className="p-name">
        Home
      </Link>
    </li>

    <li
      className={`relative px-3 cursor-pointer ${
        dropdown === "services" || location.pathname.includes("/services")
          ? "text-blue-500"
          : ""
      }`}
      onClick={() => toggleDropdown("services")}
    >
      <span className="flex items-center gap-2 p-name">
        Services <FaChevronDown className="text-xs" />
      </span>
    </li>

    <li
      className={`px-3 cursor-pointer ${isActive("/about") ? "text-blue-500" : ""}`}
    >
      <Link to="/about" className="p-name">
        About Us
      </Link>
    </li>
    <li
      className={`px-3 cursor-pointer ${isActive("/our-works") ? "text-blue-500" : ""}`}
    >
      <Link to="/our-works" className="p-name">
        Our Works
      </Link>
    </li>
    <li
      className={`relative px-3 cursor-pointer ${
        dropdown === "softwares" || location.pathname.includes("/software")
          ? "text-blue-500"
          : ""
      }`}
      onClick={() => toggleDropdown("softwares")}
    >
      <span className="flex items-center gap-2 p-name">
        Softwares <FaChevronDown className="text-xs" />
      </span>
    </li>

    <li
      className={`px-3 cursor-pointer ${isActive("/careers") ? "text-blue-500" : ""}`}
    >
      <Link to="/careers" className="p-name">
        Careers
      </Link>
    </li>
  </ul>
</nav>

        {/* Desktop Search and Contact */}
        <div className="hidden lg:flex items-center space-x-10">
          <div className="relative w-80 hidden min-[1301px]:block">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-100 text-gray-800 px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 uppercase"
            />
            <FiSearch className="absolute right-4 top-2.5 text-gray-500 text-xl cursor-pointer hover:text-blue-500" />
          </div>
          <Link
            to="/#contact"
            className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 uppercase"
          >
            Contact Us
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-800 text-2xl p-2"
  aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </motion.nav>

      {/* Desktop Dropdown Section */}
      <AnimatePresence>
        {dropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="hidden lg:block absolute top-full left-0 w-full bg-[#f9f9f9] border-t border-gray-200 shadow-xl z-40 py-6"
          >
            <div className="w-full px-6 flex flex-col lg:flex-row gap-6">
              {/* Left Section (Wider) */}
              <div className="basis-[400px] shrink-0 p-5 bg-white rounded-md shadow-sm">
                <h3 className="text-2xl font-bold text-blue-600 mb-4 capitalize">
                  {dropdown === "services" ? "Our Services" : "Our Softwares"}
                </h3>
                <div className="h-px bg-gray-300 my-2"></div>
                <p className="text-gray-700 text-sm">
                  {dropdown === "services"
                    ? "We offer cutting-edge services to boost your business digitally — from web and mobile development to design and cloud solutions."
                    : "Explore our powerful software solutions built for modern businesses to streamline your operations and maximize growth."}
                </p>
              </div>

              {/* Right Section */}
              <div className="flex-grow p-5 bg-white rounded-md shadow-sm border border-gray-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {(dropdown === "services"
                    ? dropdownItems.services
                    : dropdownItems.softwares
                  ).map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className={`flex items-center gap-4 p-4 rounded-md transition-all hover:bg-gray-100 ${isActive(item.url) ? "bg-blue-100" : ""
                        }`}
                    >
                      <div className="w-16 h-16 flex items-center justify-center border-2 border-gray-300 rounded-md">
                        {item.icon}
                      </div>
                      <span className="text-base font-medium text-gray-800">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="lg:hidden fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-white overflow-y-auto z-40 shadow-lg"
          >
            <div className="px-4 py-6">
              {/* Mobile Search */}
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-100 text-gray-800 px-4 py-3 w-full rounded-md border-2 border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 uppercase text-sm"
                />
                <FiSearch className="absolute right-4 top-3.5 text-gray-500 text-xl" />
              </div>

              {/* Mobile Nav Items */}
              <ul className="space-y-1">
                <li className={`${isActive("/") ? "text-blue-500" : "text-gray-800"}`}>
                  <Link
                    to="/"
                    className="block px-4 py-3 font-semibold hover:bg-gray-100 rounded-md"
                    onClick={closeMobileMenu}
                  >
                    Home
                  </Link>
                </li>

                {/* Services Dropdown */}
                <li>
                  <div
                    className={`px-4 py-3 font-semibold cursor-pointer hover:bg-gray-100 rounded-md flex items-center justify-between ${mobileDropdown === "services" || location.pathname.includes("/services") ? "text-blue-500" : "text-gray-800"
                      }`}
                    onClick={() => toggleMobileDropdown("services")}
                  >
                    <span>Services</span>
                    <FaChevronDown className={`text-xs transition-transform ${mobileDropdown === "services" ? "rotate-180" : ""}`} />
                  </div>
                  <AnimatePresence>
                    {mobileDropdown === "services" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pr-2 py-2 space-y-2">
                          {dropdownItems.services.map((item, index) => (
                            <Link
                              key={index}
                              to={item.url}
                              className={`flex items-center gap-3 p-3 rounded-md transition-all hover:bg-gray-100 ${isActive(item.url) ? "bg-blue-100" : ""
                                }`}
                              onClick={closeMobileMenu}
                            >
                              <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md flex-shrink-0">
                                {React.cloneElement(item.icon, { style: { ...iconStyle, fontSize: "1.5rem" } })}
                              </div>
                              <span className="text-sm font-medium text-gray-800">
                                {item.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                <li className={`${isActive("/about") ? "text-blue-500" : "text-gray-800"}`}>
                  <Link
                    to="/about"
                    className="block px-4 py-3 font-semibold hover:bg-gray-100 rounded-md"
                    onClick={closeMobileMenu}
                  >
                    About Us
                  </Link>
                </li>
                <li className={`${isActive("/our-works") ? "text-blue-500" : "text-gray-800"}`}>
                  <Link
                    to="/our-works"
                    className="block px-4 py-3 font-semibold hover:bg-gray-100 rounded-md"
                    onClick={closeMobileMenu}
                  >
                    Our Works
                  </Link>
                </li>

                {/* Softwares Dropdown */}
                <li>
                  <div
                    className={`px-4 py-3 font-semibold cursor-pointer hover:bg-gray-100 rounded-md flex items-center justify-between ${mobileDropdown === "softwares" || location.pathname.includes("/software") ? "text-blue-500" : "text-gray-800"
                      }`}
                    onClick={() => toggleMobileDropdown("softwares")}
                  >
                    <span>Softwares</span>
                    <FaChevronDown className={`text-xs transition-transform ${mobileDropdown === "softwares" ? "rotate-180" : ""}`} />
                  </div>
                  <AnimatePresence>
                    {mobileDropdown === "softwares" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pr-2 py-2 space-y-2">
                          {dropdownItems.softwares.map((item, index) => (
                            <Link
                              key={index}
                              to={item.url}
                              className={`flex items-center gap-3 p-3 rounded-md transition-all hover:bg-gray-100 ${isActive(item.url) ? "bg-blue-100" : ""
                                }`}
                              onClick={closeMobileMenu}
                            >
                              <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md flex-shrink-0">
                                {React.cloneElement(item.icon, { style: { ...iconStyle, fontSize: "1.5rem" } })}
                              </div>
                              <span className="text-sm font-medium text-gray-800">
                                {item.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                <li className={`${isActive("/careers") ? "text-blue-500" : "text-gray-800"}`}>
                  <Link
                    to="/careers"
                    className="block px-4 py-3 font-semibold hover:bg-gray-100 rounded-md"
                    onClick={closeMobileMenu}
                  >
                    Careers
                  </Link>
                </li>
              </ul>

              {/* Mobile Contact Button */}
              <Link
                to="/#contact"
                onClick={closeMobileMenu}
                className="block text-center bg-blue-500 text-white px-5 py-3 rounded-md uppercase font-semibold"
              >
                Contact Us
              </Link>


              {/* Mobile Social Icons */}
              <div className="flex justify-center space-x-4 mt-6 pt-6 border-t border-gray-200">
                {socialIcons.map(item => (
                  <div
                    key={item.id}
                    className={`p-2.5 ${item.bgColor} rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-opacity`}
                  >
                    {item.icon}
                  </div>
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
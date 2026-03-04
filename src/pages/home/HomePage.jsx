import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IoIosCloudDone } from "react-icons/io";
import { FaCode, FaShieldAlt, FaDatabase, FaRobot, FaMobile } from "react-icons/fa";
import { FaServer, FaLock, FaCloud, FaCodeBranch, FaNetworkWired, FaTools } from "react-icons/fa";
import Model from "./Components/Model";
import ContentPage from "./Components/Content";
import StatsSection from "./Components/Count";
import ResellerSection from "./Components/Card";
import Footer from "../../components/Footer";
import Dmodel from "./Components/Dmodel";
import { useLocation } from "react-router-dom";
import usePageTitle from "../../hooks/usePageTitle";

const techDetails = [
  { icon: <FaCode className="text-blue-500 text-[5rem]" />, name: "Web Development", description: "Building responsive and interactive websites using React, Vue, and Next.js." },
  { icon: <FaShieldAlt className="text-red-500 text-[5rem]" />, name: "Cybersecurity", description: "Protecting data with encryption, firewalls, and ethical hacking." },
  { icon: <FaDatabase className="text-yellow-500 text-[5rem]" />, name: "Data Science", description: "Analyzing big data and AI-driven insights for business optimization." },
  { icon: <IoIosCloudDone className="text-indigo-500 text-[5rem]" />, name: "Cloud Computing", description: "Deploying scalable applications on AWS, Azure, and Google Cloud." },
  { icon: <FaRobot className="text-green-500 text-[5rem]" />, name: "AI & Automation", description: "Developing intelligent systems to automate tasks with AI and ML." },
  { icon: <FaMobile className="text-purple-500 text-[5rem]" />, name: "App Development", description: "Building mobile apps for iOS and Android using Flutter, React Native, and Swift." }
];

const techServices = [
  { icon: <FaRobot />, name: "AI Solutions", bgColor: "bg-blue-500" },
  { icon: <FaLock />, name: "VPN Services", bgColor: "bg-green-500" },
  { icon: <FaCloud />, name: "Cloud Hosting", bgColor: "bg-purple-500" },
  { icon: <FaDatabase />, name: "Data Management", bgColor: "bg-indigo-500" },
  { icon: <FaServer />, name: "Dedicated Servers", bgColor: "bg-orange-500" },
  { icon: <FaCodeBranch />, name: "DevOps & CI/CD", bgColor: "bg-teal-500" },
  { icon: <FaNetworkWired />, name: "Networking Solutions", bgColor: "bg-yellow-500" },
  { icon: <FaTools />, name: "IT Support", bgColor: "bg-red-500" }
];

const HomePage = () => {
  const contactRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();
 usePageTitle("Web Development Company in India | Codo Stack");

  useEffect(() => {
    document.title = "Web Development Company in India | Codo Stack";

    const schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Codo Stack",
      url: "https://www.codostack.com/",
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => script.remove();
  }, []);

  useEffect(() => {
    if (location.hash === "#contact") {
      const el = document.getElementById("contact-section");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % techDetails.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full flex flex-col items-center bg-white mt-20">

        {/* ===== Main Section ===== */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 lg:py-16 bg-white mt-10">

          {/* Left Content */}
          <div className="w-full lg:w-1/2 mt-0 lg:mt-[-20px] text-center lg:text-left">
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-default text-gray-500 leading-tight"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              The mastery of <span className="text-blue-600">Innovations</span>
            </motion.h1>

            <motion.p
              className="text-sm text-gray-600 mt-5 text-justify max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
            >
              We at Codo Stack Solutions revolutionize the digital landscape by delivering powerful, future-driven technologies. From artificial intelligence and smart automation to robust cybersecurity and advanced web engineering, we provide an all-in-one solution that empowers businesses to lead, innovate, and transform.
            </motion.p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white hover:bg-blue-700 px-7 py-3 text-lg font-semibold transition squared-lg"
              >
                Get Started
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:inline-flex border border-gray-500 text-gray-900 px-7 py-3 text-lg font-semibold hover:bg-gray-300 transition squared-lg"
              >
                Learn More
              </motion.button>

            </div>
          </div>

          {/* Right Monitor */}
          <div className="w-full lg:w-1/2 flex justify-center relative mt-10 lg:mt-0 lg:ml-[130px]">

            <div className="relative w-[320px] sm:w-[450px] lg:w-[600px] 
                            h-[220px] sm:h-[280px] lg:h-[350px] 
                            bg-white rounded-xl border-[6px] border-gray-400 
                            overflow-hidden flex items-center justify-center">

              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center text-center space-y-3 px-4"
              >
                {techDetails[currentIndex].icon}
                <span className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                  {techDetails[currentIndex].name}
                </span>
                <p className="text-gray-600 text-sm max-w-xs">
                  {techDetails[currentIndex].description}
                </p>
              </motion.div>
            </div>

            {/* Monitor Stand */}
            <div className="absolute -bottom-10 lg:-bottom-14 left-1/2 transform -translate-x-1/2 w-32 lg:w-44 h-8 lg:h-10 bg-gray-400 rounded-b-3xl"></div>
          </div>
        </div>

        {/* ===== Scroller Section ===== */}
        <div className="w-full py-10 mt-8 bg-[#EFEFEF]">

          <h2 className="text-xl sm:text-2xl font-semibold text-center">
            Advanced IT & <span className="text-orange-500">Networking Solutions</span>
          </h2>

          <p className="text-sm sm:text-md text-gray-600 text-center mb-8 px-4">
            From AI to cloud computing, we cover all your tech needs.
          </p>

          <div className="overflow-hidden">
            <motion.div
              className="flex space-x-10 whitespace-nowrap px-5 mt-5"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }} // Smooth infinite loop
            >
              {[...techServices, ...techServices].map((service, index) => (
                <div
                  key={index}
                  className="flex items-center px-6 py-3 border-2 border-gray-300 shadow-md bg-white w-70 h-25 rounded-lg"
                >
                  {/* Icon Left with Hover Animation */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                    className={`w-16 h-16 flex items-center justify-center ${service.bgColor} text-white text-4xl rounded-lg`}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Text Right */}
                  <span className="text-gray-800 text-lg font-default ml-5">
                    {service.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div ref={contactRef} id="contact-section">
        <Model />
      </div>
      <Dmodel />
      <ContentPage />
      <StatsSection />
      <ResellerSection />
      <Footer />
    </>
  );
};

export default HomePage;

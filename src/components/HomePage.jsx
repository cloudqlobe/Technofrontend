import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoIosCloudDone } from "react-icons/io";
import { FaCode, FaShieldAlt, FaDatabase, FaRobot, FaMobile } from "react-icons/fa";
import { FaServer, FaLock, FaCloud, FaCodeBranch, FaNetworkWired, FaTools } from "react-icons/fa";

// Tech Icons and Descriptions
const techDetails = [
  { icon: <FaCode className="text-blue-500 text-[5rem]" />, name: "Web Development", description: "Building responsive and interactive websites using React, Vue, and Next.js." },
  { icon: <FaShieldAlt className="text-red-500 text-[5rem]" />, name: "Cybersecurity", description: "Protecting data with encryption, firewalls, and ethical hacking." },
  { icon: <FaDatabase className="text-yellow-500 text-[5rem]" />, name: "Data Science", description: "Analyzing big data and AI-driven insights for business optimization." },
  { icon: <IoIosCloudDone className="text-indigo-500 text-[5rem]" />, name: "Cloud Computing", description: "Deploying scalable applications on AWS, Azure, and Google Cloud." },
  { icon: <FaRobot className="text-green-500 text-[5rem]" />, name: "AI & Automation", description: "Developing intelligent systems to automate tasks with AI and ML." },
  { icon: <FaMobile className="text-purple-500 text-[5rem]" />, name: "App Development", description: "Building mobile apps for iOS and Android using Flutter, React Native, and Swift." }
];

// Tech Service Categories for Scroller
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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % techDetails.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center bg-white mt-20">
      {/* ====== Main Section ====== */}
      <div className="w-full flex flex-row items-center justify-between px-20 py-16 bg-white mt-10">
        {/* Left: Text Content */}
        <div className="w-1/2">
          <motion.h1 className="text-5xl font-bold text-gray-900 leading-tight" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            The Future of <span className="text-orange-500">Technology</span>
          </motion.h1>
          <motion.p className="text-lg text-gray-600 mt-5 max-w-lg" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}>
            Empowering businesses with cutting-edge digital solutions. From AI and automation to cybersecurity and web development, we innovate for a smarter tomorrow.
          </motion.p>
          <div className="mt-10 flex space-x-5">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-orange-500 text-white px-7 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition">
              Get Started 🚀
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border border-gray-500 text-gray-900 px-7 py-3 rounded-lg text-lg font-semibold hover:bg-gray-300 transition">
              Learn More 📖
            </motion.button>
          </div>
        </div>

       {/* Right Side: White Monitor with Sliding Content */}
      <div className="w-1/2 flex justify-center relative">
        <div className="relative w-[600px] h-[350px] bg-white rounded-xl border-[6px] border-gray-400 overflow-hidden flex items-center justify-center">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center space-y-3"
          >
            {techDetails[currentIndex].icon}
            <span className="text-gray-900 text-3xl font-semibold">{techDetails[currentIndex].name}</span>
            <p className="text-gray-600 text-sm max-w-xs">{techDetails[currentIndex].description}</p>
          </motion.div>
        </div>

        {/* Chatbot in the Corner */}
     

        {/* iMac-Style Curved Stand (Untouched) */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-44 h-10 bg-gray-400 rounded-b-3xl"></div>
      </div>
    </div>
      <div className="w-full bg-white py-10 mt-8">
    
  {/* Additional Headings */}
  <h3 className="text-2xl font-semibold text-gray-800 text-center">
    Advanced IT & Networking Solutions
  </h3>
  <p className="text-md text-gray-500 text-center mb-8">
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
          className="flex items-center px-6 py-3 border-2 border-grey-500 shadow-md bg-white w-70 h-25 rounded-lg"
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
          <span className="text-gray-900 text-lg font-default ml-5">{service.name}</span>
        </div>
      ))}
    </motion.div>
  </div>
</div>


    </div>
  );
};

export default HomePage;

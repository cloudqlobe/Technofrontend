import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoIosCloudDone } from "react-icons/io";
import { FaCode, FaShieldAlt, FaDatabase, FaCloud, FaRobot, FaMobileAlt, FaRobot as ChatbotIcon, FaMobile, FaCloudMoon } from "react-icons/fa";

// Tech Icons and Descriptions
const techDetails = [
  { icon: <FaCode className="text-blue-500 text-[10rem]" />, name: "Web Development", description: "Building responsive and interactive websites using the latest technologies like React, Vue, and Next.js." },
  { icon: <FaShieldAlt className="text-red-500 text-[10rem]" />, name: "Cybersecurity", description: "Protecting networks, applications, and data from cyber threats with encryption, firewalls, and ethical hacking." },
  { icon: <FaDatabase className="text-yellow-500 text-[10rem]" />, name: "Data Science", description: "Analyzing big data, machine learning, and AI-driven insights to optimize business performance and decision-making." },
  { icon: <IoIosCloudDone className="text-indigo-500 text-[10rem]" />, name: "Cloud Computing", description: "Utilizing platforms like AWS, Azure, and Google Cloud to deploy scalable and secure applications globally." },
  { icon: <FaRobot className="text-green-500 text-[10rem]" />, name: "AI & Automation", description: "Developing intelligent systems that automate tasks, recognize patterns, and improve efficiency with AI and ML." },
  { icon: <FaMobile className="text-purple-500 text-[10rem]" />, name: "App Development", description: "Creating high-performance mobile applications for iOS and Android with Flutter, React Native, and Swift." }
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
    <div className="w-full min-h-screen flex items-center justify-between px-20 bg-white">
      
      {/* Left Side: Heading & Text */}
      <div className="w-1/2 ml-12">
        <motion.h1 className="text-5xl font-default text-gray-900 leading-tight" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          The Future of <span className="text-orange-500">Technology</span>
        </motion.h1>

        <motion.p className="text-lg text-gray-700 mt-5 max-w-lg" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}>
          Empowering businesses with cutting-edge digital solutions. From AI and automation to cybersecurity and web development, we innovate for a smarter tomorrow.
        </motion.p>

        {/* Call-to-Action Buttons */}
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
  );
};

export default HomePage;
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Confetti from "react-confetti";
import { FaCheckCircle, FaUsers, FaGlobe } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import robot from "../assets/Image/robot.jpg";

const achievements = [
  { title: "Completed Projects", value: "150+", description: "Successful client projects delivered worldwide.", icon: <FaCheckCircle className="text-green-500 text-3xl" /> },
  { title: "Client Satisfaction", value: "98%", description: "High customer satisfaction and trust.", icon: <FaUsers className="text-blue-500 text-3xl" /> },
  { title: "Data Accuracy", value: "99.5%", description: "Precise and reliable project execution.", icon: <MdOutlineVerified className="text-purple-500 text-3xl" /> },
  { title: "Global Expansion", value: "50+ Regions", description: "Providing solutions across multiple regions.", icon: <FaGlobe className="text-yellow-500 text-3xl" /> },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [celebrate, setCelebrate] = useState(false);
  const [hoverConfetti, setHoverConfetti] = useState(false);
  const [imageConfetti, setImageConfetti] = useState(false);

  useEffect(() => {
    if (isInView) {
      setCelebrate(true);
      setTimeout(() => setCelebrate(false), 3000);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-700 to-blue-900 text-white px-6 relative">
      {/* Global Confetti when section appears */}
      {(celebrate || imageConfetti) && <Confetti numberOfPieces={300} gravity={0.2} />}

      {/* Full Width Heading */}
      <motion.h1 
        className="text-4xl md:text-5xl font-semibold text-yellow-400 drop-shadow-lg tracking-wide text-center w-full mb-10 mt-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Milestones of Excellence
        <p className="text-lg text-gray-300 mt-2">Delivering excellence with precision and dedication.</p>
      </motion.h1>

      <motion.div 
        className="w-[95%] max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }} 
        transition={{ duration: 1 }}
      >
        {/* Left Side: Image */}
        <div className="text-center md:text-left">
          <motion.img 
            src={robot}
            alt="Achievements"
            className="w-[480px] h-auto ml-[-40px]"
            onMouseEnter={() => setImageConfetti(true)}
            onMouseLeave={() => setImageConfetti(false)}
          />
        </div>

        {/* Right Side: Achievements List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 relative">
          {achievements.map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-white text-blue-900 p-5 rounded-lg shadow-md flex flex-col items-center space-y-2 border-2 border-orange-500 relative"
              whileHover={{ scale: 1.05, boxShadow: "0px 6px 20px rgba(255, 165, 0, 0.4)" }}
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }} 
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onMouseEnter={() => setHoverConfetti(true)}
              onMouseLeave={() => setHoverConfetti(false)}
            >
              {item.icon}
              <h2 className="text-2xl font-bold">{item.value}</h2>
              <p className="text-md font-semibold">{item.title}</p>
              <p className="text-gray-600 text-sm text-center">{item.description}</p>

              {/* Confetti when hovering over a tab */}
              {hoverConfetti && <Confetti numberOfPieces={50} gravity={0.3} />}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

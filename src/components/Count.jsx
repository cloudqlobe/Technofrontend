import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Smile, Briefcase, Star, Globe } from "lucide-react"; // Icons

const stats = [
  { end: 450, label: "Happy Clients", color: "text-orange-500", stroke: "#f97316", icon: <Smile size={30} className="text-orange-500" /> },
  { end: 750, label: "Projects Delivered", color: "text-green-500", stroke: "#22c55e", icon: <Briefcase size={30} className="text-green-500" /> },
  { end: 98, label: "Best Service", color: "text-blue-500", stroke: "#3b82f6", suffix: "%", icon: <Star size={30} className="text-blue-500" /> },
  { end: 25, label: "Countries", color: "text-purple-500", stroke: "#a855f7", icon: <Globe size={30} className="text-purple-500" /> },
];

function Count() {
  return (
    <div className="flex justify-center gap-12 py-12 flex-wrap bg-[#ECECEC] p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-6xl"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative w-32 h-32">
              {/* Circular Progress SVG */}
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Background Circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#d1d5db"
                  strokeWidth="8"
                />
                {/* Animated Circle */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={stat.stroke}
                  strokeWidth="8"
                  strokeDasharray="251.2"
                  strokeDashoffset="251.2"
                  strokeLinecap="round"
                  initial={{ strokeDashoffset: "251.2" }}
                  animate={{ strokeDashoffset: `calc(251.2 - (251.2 * ${stat.end} / 100))` }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                />
              </svg>
              {/* Counter Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h4 className={`text-4xl font-bold ${stat.color}`}>
                  <CountUp end={stat.end} duration={2.5} />
                  {stat.suffix || "+"}
                </h4>
              </div>
            </div>
            {/* Icon & Label */}
            <div className="flex items-center gap-2 mt-4">
              {stat.icon}
              <p className="text-lg font-medium text-gray-800">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Count;

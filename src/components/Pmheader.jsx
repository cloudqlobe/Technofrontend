import React from "react";
import image2 from '../assets/Image/robottech.jpg';
import {
  FaLightbulb,
  FaClipboardList,
  FaCog,
  FaSearch,
  FaHandshake,
} from "react-icons/fa";

const phases = [
  {
    title: "Initiation",
    description: "Goals for the business",
    icon: <FaLightbulb size={48} />,
    color: "#3B82F6",
    side: "left",
  },
  {
    title: "Execution",
    description: "Goals for the business",
    icon: <FaCog size={56} />,
    color: "#F59E0B",
    side: "left",
  },
  {
    title: "Closing",
    description: "Goals for the business",
    icon: <FaHandshake size={48} />,
    color: "#8B5CF6",
    side: "left",
  },
  {
    title: "Planning",
    description: "Goals for the business",
    icon: <FaClipboardList size={48} />,
    color: "#14B8A6",
    side: "right",
  },
  {
    title: "Controlling",
    description: "Goals for the business",
    icon: <FaSearch size={48} />,
    color: "#EC4899",
    side: "right",
  },
];

const PmHeader = () => {
  return (
    <>
      {/* Project Management Header Section */}
      <div className="bg-white text-gray-900 py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ml-[-5px]">
          {/* Left Content */}
          <div className="max-w-xl text-center md:text-left mt-[-130px]">
  <h2 className="text-3xl md:text-4xl font-semibold mb-4">
    <span className="text-blue-800">Efficient </span>
    <span className="text-orange-500">Project Management</span>
  </h2>
  <p className="text-gray-700 mb-6">
    Our project management system provides a centralized platform for managing tasks, tracking progress, and collaborating effectively. We focus on building scalable, user-friendly systems that enhance team productivity and streamline project workflows.
  </p>
  <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-[50px]">
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 squared-lg font-semibold shadow">
      Get a Quote
    </button>
    <button className="border border-blue-600 hover:bg-blue-50 text-blue-600 px-6 py-2 squared-lg font-semibold shadow">
      Get a Demo
    </button>
  </div>
</div>


          {/* Right Visual Panel */}
          <div className="relative w-full h-[530px]  px-4 py-6 mt-[-90px] ml-[140px]">
            <div className="grid grid-cols-2 gap-x-[-50px]">
              {/* Left Side - 3 Items */}
              <div className="flex flex-col justify-center items-end gap-y-6">
                {phases
                  .filter((p) => p.side === "left")
                  .map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-end gap-10 text-right"
                    >
                      <div>
                        <h4
                          className="text-base font-bold"
                          style={{ color: item.color }}
                        >
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-snug">
                          {item.description}
                        </p>
                      </div>
                      <div
                        className="w-32 h-32 rounded-full flex items-center justify-center shadow-md shrink-0 transition-transform duration-300 hover:scale-110 border-[8px]"
                        style={{
                          backgroundColor: item.color,
                          borderColor: item.color,
                        }}
                      >
                        <div className="text-white">{item.icon}</div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Right Side - 2 Items */}
              <div className="flex flex-col justify-center items-start gap-y-6">
                {phases
                  .filter((p) => p.side === "right")
                  .map((item, index) => (
                    <div key={index} className="flex items-center space-x-8">
                      <div
                        className="w-32 h-32 rounded-full flex items-center justify-center shadow-md shrink-0 transition-transform duration-300 hover:scale-110 border-[8px]"
                        style={{
                          backgroundColor: item.color,
                          borderColor: item.color,
                        }}
                      >
                        <div className="text-white">{item.icon}</div>
                      </div>
                      <div>
                        <h4
                          className="text-base font-bold"
                          style={{ color: item.color }}
                        >
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-snug">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Become a Reseller Section */}
      
    </>
  );
};

export default PmHeader;

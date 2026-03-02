import { motion } from "framer-motion";
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 min-[1500px]:grid-cols-2 gap-12 items-center ml-[-5px]">
          {/* Left Content */}
          <div className="max-w-xl mx-auto text-center mt-0 min-[1500px]:mx-0 min-[1500px]:text-left min-[1500px]:mt-[-78px] mb-[94px]">
            <h1 className="text-2xl md:text-4xl font-semibold mb-4">
              <span className="text-blue-800">Streamline </span>
              <span className="text-orange-500">Your Projects</span>
            </h1>
            <p className="text-gray-700 mb-6 text-sm leading-relaxed">
              Streamline your project management with our intuitive platform. Easily assign tasks, monitor progress, and track milestones. Enhance team collaboration and efficiency to meet your deadlines. Drive successful project outcomes with real-time insights.            </p>

            <div className="mt-5 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center min-[1500px]:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 text-white px-7 py-3 text-lg font-semibold hover:bg-orange-600 transition w-full sm:w-auto"
              >
                Start Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-500 text-gray-900 px-7 py-3 text-lg font-semibold hover:bg-gray-300 transition w-full sm:w-auto"
              >
                Explore Features
              </motion.button>

            </div>
          </div>

          {/* Right Visual Panel */}
          <div className="relative w-full h-[530px] px-4 py-6 mt-[-90px] ml-[140px] hidden min-[1500px]:block">
            {/* Desktop Layout - Hidden on mobile/tablet */}
            <div className="hidden lg:grid grid-cols-2 gap-x-[-50px]">
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

            {/* Mobile/Tablet Layout - Single Column */}
            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
              {phases.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center gap-4"
                >
                  <div
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center shadow-md shrink-0 transition-transform duration-300 hover:scale-110 border-[6px]"
                    style={{
                      backgroundColor: item.color,
                      borderColor: item.color,
                    }}
                  >
                    <div className="text-white scale-75 sm:scale-90">{item.icon}</div>
                  </div>
                  <div>
                    <h4
                      className="text-base font-bold mb-1"
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

      {/* Become a Reseller Section */}

    </>
  );
};

export default PmHeader;
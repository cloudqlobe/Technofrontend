import React from "react";
import { FaServer, FaMobileAlt, FaSearch, FaCreditCard, FaTags, FaSmile, FaUsers, FaHeadset } from "react-icons/fa";
import logo from "../assets/Image/11563094.jpg";

const features = [
  { icon: <FaServer />, title: "Domain & Hosting Services" },
  { icon: <FaMobileAlt />, title: "100% Responsive Web Design" },
  { icon: <FaSearch />, title: "SEO Friendly Website" },
  { icon: <FaCreditCard />, title: "Payment Gateway Integration" },
  { icon: <FaTags />, title: "Affordable & Lowest Pricing" },
  { icon: <FaSmile />, title: "100% Satisfaction Guaranteed" },
  { icon: <FaUsers />, title: "Professional Team" },
  { icon: <FaHeadset />, title: "1 Year Free Support" }
];

const Dmodel = () => {
  return (
    <div className="bg-[#1E3A8A] text-white py-16 px-6 lg:px-32 flex flex-col items-center">
      <div className="flex flex-col lg:flex-row items-center w-full gap-10">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-orange-400 uppercase text-5sm font-default mb-2">WHY CHOOSE US?</p>
          <h1 className="text-3xl font-bold mb-4 leading-snug">
            Why Choose <span className="text-orange-500">TechnoMagic Solutions?</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            We are a leading website development agency in India, committed to providing top-notch digital solutions. 
            Our expert team creates customized, innovative, and high-performing websites that enhance user experience, 
            improve engagement, and drive business success.
          </p>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center ml-22">
          <img src={logo} alt="Illustration" className="w-[350px] lg:w-[500px] object-contain" />
        </div>
      </div>
      
      {/* Features Section */}
      <div className="w-full bg-[#2F4AA5] py-10 px-6 lg:px-32 rounded-lg shadow-lg mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#1E3A8A] text-white flex flex-col items-center p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-[#2F4AA5]">
              <div className="text-3xl mb-3 text-orange-400">{feature.icon}</div>
              <p className="text-center text-lg font-semibold">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dmodel;

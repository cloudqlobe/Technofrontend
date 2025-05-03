import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa"; // Add icons as needed

const Workanimation = () => {
  return (
    <div className="bg-blue-800 min-h-screen py-20 px-6 sm:px-12 text-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">Our Works</h2>
        <p className="text-lg mb-12">
          Experience the power of seamless animations, modern designs, and user-friendly interfaces we bring to every project.
        </p>
      </div>

      {/* Work Section: Left Content, Right Image */}
      <div className="grid md:grid-cols-2 items-center gap-12 max-w-7xl mx-auto mb-16">
        {/* Left Content */}
        <div className="space-y-6">
          <h3 className="text-3xl font-semibold mb-4">Project One: Web Animation</h3>
          <p className="text-lg leading-relaxed">
            We create stunning animations to enhance user engagement and improve the visual appeal of websites. Our animations are smooth and designed for seamless transitions between pages.
          </p>
        </div>
        
        {/* Right Image */}
        <div className="relative flex justify-center items-center w-full p-4">
          <img
            src="https://via.placeholder.com/400"  // Replace with actual project image
            alt="Web Animation Example"
            className="w-[80%] h-[300px] object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Icons Section */}
      <div className="flex justify-center space-x-8">
        <div className="text-4xl hover:scale-110 transition-transform duration-300">
          <FaReact />
        </div>
        <div className="text-4xl hover:scale-110 transition-transform duration-300">
          <FaHtml5 />
        </div>
        <div className="text-4xl hover:scale-110 transition-transform duration-300">
          <FaCss3Alt />
        </div>
        <div className="text-4xl hover:scale-110 transition-transform duration-300">
          <FaJs />
        </div>
      </div>

      {/* Bottom Content Section */}
      <div className="mt-16 text-center">
        <p className="text-lg">
          Our team brings the latest technologies and design trends to every project. With cutting-edge tools, we turn creative ideas into reality, ensuring the best user experience.
        </p>
      </div>
    </div>
  );
};

export default Workanimation;

import React from "react";
import image1 from "../assets/Image/5031659.jpg"; // Replace with your images
import image2 from "../assets/Image/10197785.jpg";
import image3 from "../assets/Image/5024152.jpg";

const Workcontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-6 sm:px-12 py-16 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-12">
        Our <span className="text-blue-800 underline">Work Portfolio</span>
      </h1>

      {/* Section 1: Image Right */}
      <div className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto mb-20">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">
            Interactive Web Designs
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            We create intuitive web designs that provide a smooth and engaging user experience across all devices. From layout to micro-interactions, everything is crafted with attention to detail.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={image1}
            alt="Interactive Design"
            className="w-[90%] h-[300px] object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Section 2: Image Left */}
      <div className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto mb-20">
        <div className="flex justify-center order-2 md:order-1">
          <img
            src={image2}
            alt="Development Tools"
            className="w-[90%] h-[300px] object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">
            Modern Tech Stack
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            We use the latest frameworks and technologies to deliver high-performance websites and web apps. Scalability, security, and responsiveness are at the core of our builds.
          </p>
        </div>
      </div>

      {/* Section 3: Image Right */}
      <div className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">
            Custom Web Solutions
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Every client is unique, and we offer tailored web solutions that align with your business goals. Whether it's an admin dashboard or eCommerce platform, we build it your way.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={image3}
            alt="Custom Solutions"
            className="w-[90%] h-[300px] object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Workcontent1;

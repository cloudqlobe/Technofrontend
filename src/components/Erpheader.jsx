import React from 'react';
import image6 from "../assets/Image/7088807.jpg";

const Erpheader = () => {
  return (
    <div className="bg-white text-gray-900 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content with Buttons */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Manage Your Business with Our ERP System
          </h2>
          <p className="text-lg mb-6">
            Our ERP system is designed to integrate all essential business functions like accounting, HR, inventory, and more. 
            Simplify your operations, improve efficiency, and make data-driven decisions with a unified system.
          </p>
          
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-400 transition duration-300">
              Get a Quote
            </button>
            <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-400 transition duration-300">
              Get a Demo
            </button>
          </div>
        </div>

        {/* Right: ERP System Image */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x200"  // Replace with your ERP system image or dashboard
              alt="ERP System"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <p className="text-white text-xl font-bold">ERP System in Action</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reseller Section */}
      <section className="w-screen bg-[#F1F5F9] py-12 mt-20">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20">
          
          {/* Left Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-orange-600 drop-shadow-sm">
              Become an ERP Reseller
            </h2>
            <p className="text-base md:text-lg mb-6 text-gray-700 leading-relaxed">
              Start your own business by reselling our ERP solution. Offer businesses an integrated system that enhances productivity 
              and ensures smooth operations across departments.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300">
                🚀 Register Now
              </button>
              <button className="bg-green-600 border border-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300">
                💬 Talk to Us
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={image6}  // Placeholder, replace with relevant ERP image
              alt="ERP Reseller Opportunity"
              className="object-contain h-70 md:h-90 w-90 md:w-[400px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Erpheader;

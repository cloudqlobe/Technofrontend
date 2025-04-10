import React from 'react';

const Erpanimation = () => {
  return (
    <div className="bg-blue-900 text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content with Description */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
            Streamline Your Business with ERP Solutions
          </h2>
          <p className="text-lg mb-6">
            Our ERP system provides a centralized platform to manage business processes, from financials to operations. 
            Automate workflows, improve efficiency, and gain deeper insights into your data with a comprehensive solution tailored to your needs.
          </p>
        </div>

        {/* Right: ERP Animation Image */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x200"  // Replace with ERP animation or image
              alt="ERP Animation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <p className="text-white text-xl font-bold">ERP System in Action</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Tabs Section */}
      <section className="bg-blue-800 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="flex space-x-8 justify-center">
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition duration-300">
              ERP Features
            </button>
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition duration-300">
              Integration Options
            </button>
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition duration-300">
              Analytics & Insights
            </button>
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition duration-300">
              Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Erpanimation;

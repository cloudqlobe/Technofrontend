import React from 'react';

const Billinganimation = () => {
  return (
    <div className="bg-blue-900 text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content with Description */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
            Simplify Your Billing Process with Our Solution
          </h2>
          <p className="text-lg mb-6">
            Our billing system automates invoicing, payments, and financial reporting to help your business grow. 
            Whether you need subscription management or one-time payments, we have the tools to keep your financial processes smooth and secure.
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

        {/* Right: Image (e.g., billing interface or animation) */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x200"  // Replace with an appropriate image or animation
              alt="Billing Animation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <p className="text-white text-xl font-bold">Billing in Action</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Tabs Section */}
      <section className="bg-blue-800 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="flex space-x-8 justify-center">
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition duration-300">
              Billing Features
            </button>
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition duration-300">
              Payment Integration
            </button>
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition duration-300">
              Analytics & Reports
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

export default Billinganimation;

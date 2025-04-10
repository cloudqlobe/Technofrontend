import React from 'react';

const Botheader = () => {
  return (
    <div className="bg-white text-gray-900 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content with Buttons */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Smart Bot Solutions for Your Business
          </h2>
          <p className="text-lg mb-6">
            Our intelligent bot solutions help automate customer service, support, and lead generation. 
            Improve customer engagement and save time with AI-driven bots that work 24/7 to handle customer interactions.
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

        {/* Right: Bot Design with Bot Software Content */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x200"  // Placeholder image, replace with actual bot image
              alt="Bot Software"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <p className="text-white text-xl font-bold">Bot Software in Action</p>
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
              Become a Bot Reseller
            </h2>
            <p className="text-base md:text-lg mb-6 text-gray-700 leading-relaxed">
              Start your own business by reselling intelligent bot solutions. Offer AI-powered customer support services and engage customers seamlessly with our bot technology.
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
          <div className="md:w-1/2 flex justify-end">
            <img
              src="https://img.freepik.com/premium-photo/vibrant-whimsical-illustration-featuring-social-media-day_1201937-571.jpg"  // Placeholder image, replace with actual reseller image
              alt="Bot Reseller Opportunity"
              className="object-contain h-64 md:h-80 w-80 md:w-[400px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Botheader;

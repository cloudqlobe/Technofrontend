import React from 'react';

const Crmheader = () => {
  return (
    <div className="bg-white text-gray-900 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content with Buttons */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Manage Your Customer Relationships with Ease
          </h2>
          <p className="text-lg mb-6">
            Our CRM system helps businesses streamline customer interactions, improve customer satisfaction, and drive sales growth. 
            With features like contact management, sales tracking, and automated workflows, you can focus on building stronger relationships.
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

        {/* Right: CRM System Image */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x200"  // Replace with your CRM interface or dashboard image
              alt="CRM System"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <p className="text-white text-xl font-bold">CRM System in Action</p>
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
              Become a CRM Reseller
            </h2>
            <p className="text-base md:text-lg mb-6 text-gray-700 leading-relaxed">
              Offer businesses a powerful CRM solution under your brand. Our platform allows companies to better manage customer interactions 
              and improve operational efficiency.
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
              src="https://img.freepik.com/premium-photo/vibrant-whimsical-illustration-featuring-social-media-day_1201937-571.jpg"  // Placeholder, replace with CRM-related image
              alt="CRM Reseller Opportunity"
              className="object-contain h-64 md:h-80 w-80 md:w-[400px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Crmheader;

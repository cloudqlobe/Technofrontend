import React from 'react';

const Crmanimation = () => {
  return (
    <div className="bg-blue-900 text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content with Description */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
            Build Stronger Customer Relationships with CRM
          </h2>
          <p className="text-lg mb-6">
            Our CRM system helps you manage customer interactions, track sales, and automate marketing efforts. With our powerful tools, you can enhance customer satisfaction and drive growth.
          </p>
        </div>

        {/* Right: Animation or Image */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x200"  // Replace with CRM animation or image
              alt="CRM Animation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <p className="text-white text-xl font-bold">CRM in Action</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Tabs Section */}
      <section className="bg-blue-800 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="flex space-x-8 justify-center">
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition duration-300">
              Customer Dashboard
            </button>
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition duration-300">
              Sales Tracking
            </button>
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition duration-300">
              Marketing Automation
            </button>
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition duration-300">
              Reports & Insights
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Crmanimation;

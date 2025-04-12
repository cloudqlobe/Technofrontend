import React from 'react';
import image6 from "../assets/Image/34_tree_money.jpg"

const Crmanimation = () => {
  return (
    <div className="bg-blue-900 text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content with Description */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold t0ext-yellow-400 mb-4">
            Build Stronger Customer Relationships with CRM
          </h2>
          <p className="text-lg mb-6">
            Our CRM system helps you manage customer interactions, track sales, and automate marketing efforts. With our powerful tools, you can enhance customer satisfaction and drive growth.
          </p>
        </div>

        {/* Right: Animation or Image */}
       <div className="flex justify-center">
                   <img
                     src={image6}
                     alt="UI/UX Design Illustration"
                      className="w-full max-w-[500px] h-[500px] "
                   />
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

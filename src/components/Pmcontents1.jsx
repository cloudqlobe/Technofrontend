import React from 'react';
import image1 from '../assets/Image/4667617.jpg'; // Replace with your actual image
import image2 from '../assets/Image/6072171.jpg'; // Replace with your actual image


const Pmcontents1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-10">
        Innovative Technology <span className="text-blue-800">Solutions for Your Business</span>
      </h1>

      {/* IT Solutions Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-8 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image1}
            alt="IT Solutions"
            className="w-[80%] h-[450px] object-cover rounded-lg mb-2"
          />
        </div>
        <div className="flex flex-col justify-center w-[600px] ml-[58px]">
  <h2 className="text-4xl font-default text-grey-400 mb-4">
    Innovative <span className="text-orange-400">Tech Solutions</span>
  </h2>
  <p className="text-gray-600 leading-relaxing text-lg text-justify mt-[20px]">
    Our IT solutions optimize business operations and enhance security. From network management to cloud solutions, we provide services that align with your growth and sustainability goals. We focus on building a robust IT infrastructure that supports your business’s long-term success by reducing costs and increasing productivity.
  </p>
  <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
    Our solutions include cybersecurity, system integrations, and tailored IT consulting to meet your unique needs. We also cover data backup and recovery, enterprise resource planning (ERP), and business intelligence solutions to ensure that your company stays ahead in the competitive digital landscape.
  </p>
</div>

      </div>

      {/* Chatbot Solutions Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-8 max-w-7xl mx-auto mt-[-24px]">
        <div className="flex flex-col justify-center w-full ml-[-45px]">
          <h2 className="text-4xl font-default text-grey-200 mb-4 mt-[40px]">Smart <span className="text-orange-400">Chatbot Solutions</span></h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Our AI-powered chatbot solutions automate customer support and enhance engagement. They can handle various tasks from answering queries to order processing, improving efficiency and customer satisfaction. These chatbots seamlessly integrate with your existing systems and provide valuable insights through real-time analytics.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            With natural language processing (NLP) and adaptive learning, they evolve to deliver better interactions over time. Additionally, our chatbots can be customized for industries such as e-commerce, healthcare, and finance, providing domain-specific solutions that boost productivity and streamline workflows. With natural language processing (NLP) and adaptive learning, they evolve to deliver better interactions over time. Additionally, our chatbots can be customized for industri
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image2}
            alt="Chatbot Solutions"
            className="w-[85%] h-[450px] object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Custom Software Solutions Section */}
      
      
    </div>
  );
};

export default Pmcontents1;
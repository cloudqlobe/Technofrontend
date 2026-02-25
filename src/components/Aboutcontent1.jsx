import React from "react";
import image1 from "../assets/Image/build-robots.jpg";
import image2 from "../assets/Image/10233603.jpg";

const ContentPage = () => {
  return (
    <div className="min-h-screen w-full bg-white px-6 sm:px-12 py-10 overflow-hidden">
      <h2 className="text-4xl text-center text-black mb-8 mt-[30px]">
        Innovative Technology <span className="text-blue-800">Solutions for Your Business</span>
      </h2>
      {/* IT Solutions Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-7xl mx-auto">
        {/* Image */}
        <div className="flex justify-center md:justify-start w-full">
          <img
            src={image2}
            alt="IT Solutions"
            className="w-full sm:w-4/5 md:w-full h-auto object-cover rounded-lg"
          />
        </div>
        {/* Content */}
        <div className="flex flex-col justify-center w-full md:w-auto text-center md:text-left px-2 md:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Innovative <span className="text-orange-400">Tech Solutions</span>
          </h2>
          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            Our IT solutions optimize business operations and enhance security. From network management to cloud solutions, we provide services that align with your growth and sustainability goals. We focus on building a robust IT infrastructure that supports your business’s long-term success by reducing costs and increasing productivity.          </p>
          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            Our solutions include cybersecurity, system integrations, and tailored IT consulting to meet your unique needs. We also cover data backup and recovery, enterprise resource planning (ERP), and business intelligence solutions to ensure that your company stays ahead in the competitive digital landscape.          </p>
        </div>
      </div>

      {/* Chatbot Solutions Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-7xl mx-auto">
        {/* Content */}
        <div className="flex flex-col justify-center w-full md:w-auto text-center md:text-left px-2 md:px-0 order-2 md:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Smart <span className="text-orange-400">Chatbot Solutions</span>
          </h2>
          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            Our AI-powered chatbot solutions automate customer support and enhance engagement. They can handle various tasks from answering queries to order processing, improving efficiency and customer satisfaction. These chatbots seamlessly integrate with your existing systems and provide valuable insights through real-time analytics.          </p>
          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            With natural language processing (NLP) and adaptive learning, they evolve to deliver better interactions over time. Additionally, our chatbots can be customized for industries such as e-commerce, healthcare, and finance, providing domain-specific solutions that boost productivity and streamline workflows. With natural language processing (NLP) and adaptive learning, they evolve to deliver better interactions over time. Additionally, our chatbots can be customized for industries          </p>
        </div>
        {/* Image */}
        <div className="flex justify-center md:justify-end w-full order-1 md:order-2">
          <img
            src={image1}
            alt="Chatbot Solutions"
            className="w-full sm:w-4/5 md:w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentPage;

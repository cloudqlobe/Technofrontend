import React from "react";
import image1 from "../assets/Image/build-robots.jpg";
import image2 from "../assets/Image/smart-phone.jpg";
import image3 from "../assets/Image/4583162.png";

const ContentPage = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-10">
        Innovative Technology <span className="text-blue-800">Solutions for Your Business</span>
      </h1>

      {/* IT Solutions Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-8 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image2}
            alt="IT Solutions"
            className="w-[90%] h-[550px] object-cover rounded-lg mb-2"
          />
        </div>
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-4xl font-default text-grey-400 mb-2">Innovative <span className="text-orange-400">Tech Solutions</span></h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our IT solutions optimize business operations and enhance security. From network management to cloud solutions, we provide services that align with your growth and sustainability goals. We focus on building a robust IT infrastructure that supports your business’s long-term success by reducing costs and increasing productivity.
          </p>
          <p className="text-gray-600 mt-2 leading-relaxed text-lg">
            Our solutions include cybersecurity, system integrations, and tailored IT consulting to meet your unique needs. We also cover data backup and recovery, enterprise resource planning (ERP), and business intelligence solutions to ensure that your company stays ahead in the competitive digital landscape.
          </p>
        </div>
      </div>

      {/* Chatbot Solutions Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-8 max-w-7xl mx-auto mt-[-24px]">
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-4xl font-default text-grey-200 mb-2">Smart <span className="text-orange-400">Chatbot Solutions</span></h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our AI-powered chatbot solutions automate customer support and enhance engagement. They can handle various tasks from answering queries to order processing, improving efficiency and customer satisfaction. These chatbots seamlessly integrate with your existing systems and provide valuable insights through real-time analytics.
          </p>
          <p className="text-gray-600 mt-2 leading-relaxed text-lg">
            With natural language processing (NLP) and adaptive learning, they evolve to deliver better interactions over time. Additionally, our chatbots can be customized for industries such as e-commerce, healthcare, and finance, providing domain-specific solutions that boost productivity and streamline workflows.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image1}
            alt="Chatbot Solutions"
            className="w-[95%] h-[500px] object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Custom Software Solutions Section */}
      <div className="grid md:grid-cols-2 items-center gap-24 mb-8 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image3}
            alt="Custom Software Solutions"
            className="w-[95%] h-[500px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-4xl font-default text-grey-200 mb-2 ml-2">Custom <span className="text-orange-500">Software Solutions</span></h2>
          <p className="text-gray-600 leading-relaxed text-lg ml-4 mt-4">
            We develop customized software to enhance efficiency and scalability. Our team creates tailored solutions, from mobile apps to web platforms, that seamlessly integrate with your existing systems, ensuring a smooth user experience. By working closely with you, we ensure the software aligns with your goals.
          </p>
          <p className="text-gray-600 mt-2 leading-relaxed text-lg ml-4 mt-4">
            We provide regular updates and iterative improvements to keep your solutions relevant. Our expertise spans various industries, helping businesses optimize their digital presence and operational efficiency. Our services also include API development, enterprise software, and automation tools that enhance workflow management and enable businesses to scale effortlessly with cutting-edge technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;

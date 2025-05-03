import React from "react";
import image4 from "../assets/Image/6603271.jpg";
import image5 from "../assets/Image/3826348.jpg";
import image6 from "../assets/Image/6548437.jpg";
import Botcontents1 from "./Botcontents1";

const Botcontent = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-10">
        Advanced <span className="text-blue-800">Chatbot Solutions</span>
      </h1>

      {/* Chatbot Design Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image4}
            alt="Chatbot Design"
            className="w-[80%] h-[450px] object-cover rounded-lg mb-2 mr-[100px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-4xl text-gray-700 mb-4">Intuitive <span className="text-blue-600">Chatbot Designs</span></h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-3">
            Our chatbot designs focus on creating engaging, user-friendly interfaces that enhance customer interaction. We ensure that every chatbot is intuitive, guiding users through the conversation seamlessly to provide the best customer experience.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            From live chat to AI-driven virtual assistants, our chatbot designs are tailored to meet your specific business needs. Whether it's for customer support, lead generation, or data collection, we ensure the interface is intuitive and engaging across all devices.
          </p>
        </div>
      </div>

      {/* Chatbot Development Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-10 max-w-7xl mx-auto mt-[-20px]">
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-4xl text-gray-700 mb-4">Advanced <span className="text-blue-600">Chatbot Development</span></h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-3">
            Our chatbot development team builds AI-driven solutions that can automate tasks, handle customer inquiries, and provide instant support. We focus on creating chatbots that learn from interactions, becoming smarter and more effective over time.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            From rule-based bots to advanced machine learning models, we integrate cutting-edge technologies to deliver chatbots that enhance customer experiences. Whether it's integrating with your CRM, scheduling systems, or payment gateways, our solutions are versatile and scalable.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image5}
            alt="Chatbot Development"
            className="w-[80%] h-[450px] object-cover rounded-lg mt-[50px]"
          />
        </div>
      </div>

      {/* Custom Chatbot Solutions Section */}
      <div className="grid md:grid-cols-2 items-center gap-24 mb-12 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image6}
            alt="Custom Chatbot Solutions"
            className="w-[90%] h-[450px] object-cover mt-24"
          />
        </div>
        <div className="flex flex-col justify-center w-full mb-[100px]">
          <h2 className="text-4xl text-gray-700 mb-4 ml-2 mt-16">Tailored <span className="text-blue-600">Chatbot Solutions</span></h2>
          <p className="text-gray-600 leading-relaxed text-lg ml-4 mb-3">
            Every business has unique customer interaction needs, and our custom chatbot solutions are designed to meet those requirements. Whether it's for personalized customer support, product recommendations, or task automation, we create bots that are tailored to your workflows and goals.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg ml-4">
            With a focus on performance and adaptability, our chatbots are built to evolve with your business. We provide chatbots that integrate seamlessly with your existing systems, ensuring scalability and efficiency as your operations grow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Botcontent;

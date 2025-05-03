import React from 'react';
import image1 from '../assets/Image/6548442.jpg'; // Replace with your actual image
import image2 from '../assets/Image/10286772.jpg'; // Replace with your actual image
import Designcontent from './Designcontent';

const Botcontents1 = () => {
  return (
    <section className="w-full px-6 md:px-16 py-16 bg-white">
      {/* Main Heading */}
      <h2 className="text-4xl text-center font-semibold text-gray-900 mb-16">
        Cutting-Edge <span className="text-blue-800">Chatbot Development</span> Solutions
      </h2>

      {/* Section 1 - Image Left, Content Right */}
      <div className="flex flex-col md:flex-row items-center mb-20">
        {/* Image */}
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <img
            src={image1}
            alt="Chatbot Development"
            className="w-full max-w-[350px] h-auto object-cover rounded-xl mx-auto"
          />
        </div>
        {/* Content */}
        <div className="w-full md:w-7/12 md:pl-10">
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-gray-600">Build Smarter,</span>{' '}
            <span className="text-blue-800">Automated Chatbots</span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Our chatbot development services are designed to help businesses provide instant and effective customer support. Whether it's an AI-powered assistant for your website, social media, or messaging platforms, we offer tailored chatbot solutions to suit your needs.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We focus on creating intelligent chatbots that can handle complex queries, automate tasks, and enhance user experiences. By using cutting-edge technologies like Natural Language Processing (NLP) and machine learning, we ensure our bots are capable and scalable.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our chatbots integrate seamlessly with your existing systems and can be easily customized to fit the tone and personality of your brand, enhancing the way you interact with customers.
          </p>
        </div>
      </div>

      {/* Section 2 - Image Right, Content Left */}
      <div className="flex flex-col md:flex-row-reverse items-center">
        {/* Image */}
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <img
            src={image2}
            alt="AI Chatbots"
            className="w-full max-w-[350px] h-auto object-cover rounded-xl mx-auto"
          />
        </div>
        {/* Content */}
        <div className="w-full md:w-7/12 md:pr-10">
          <h3 className="text-2xl font-default mb-4">
            <span className="text-gray-600">AI-Powered</span>{' '}
            <span className="text-blue-800">Chatbot Solutions</span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Our AI-powered chatbots are built to offer seamless customer interactions, from answering FAQs to performing complex actions like booking appointments or processing transactions. We leverage machine learning algorithms to continually improve the chatbot's performance.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We design conversational workflows that engage users, understand context, and provide instant solutions, all while maintaining a natural conversation flow. Our bots are optimized for various platforms, ensuring a consistent experience across websites, mobile apps, and social media channels.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            From initial chatbot design to deployment and optimization, we provide end-to-end chatbot development services, delivering a solution that enhances user engagement and drives results for your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Botcontents1;

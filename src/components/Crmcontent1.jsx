import React from 'react';
import image1 from '../assets/Image/5242970.jpg'; // Replace with your actual image
import image2 from '../assets/Image/6333412.jpg'; // Replace with your actual image
import Designcontent from './Designcontent';

const Crmcontent1 = () => {
  return (
    <section className="w-full px-6 md:px-16 py-16 bg-white">
      {/* Main Heading */}
      <h2 className="text-4xl text-center font-semibold text-gray-800 mb-16">
        Cutting-Edge <span className="text-blue-800">CRM Development</span> Solutions
      </h2>

      {/* Section 1 - Image Left, Content Right */}
      <div className="flex flex-col md:flex-row items-center mb-20">
        {/* Image */}
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <img
            src={image1}
            alt="CRM Development"
            className="w-full max-w-[350px] h-auto object-cover rounded-xl mx-auto"
          />
        </div>
        {/* Content */}
        <div className="w-full md:w-7/12 md:pl-10">
          <h3 className="text-2xl font-default mb-4">
            <span className="text-gray-600">Transform Your Customer</span>{' '}
            <span className="text-blue-500">Relationship Management</span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Our CRM development solutions help businesses streamline their processes, enhance customer relationships, and drive sales growth. With advanced features like contact management, lead tracking, email marketing automation, and custom reporting, we ensure that your CRM system is tailored to your business needs.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We provide CRM solutions for businesses of all sizes, whether you need a custom-built CRM or integration with existing systems like Salesforce, HubSpot, or Zoho. Our focus is to improve communication between your teams and customers, optimize workflows, and help your business grow through data-driven insights.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our CRM systems are fully customizable, ensuring seamless integration with your business processes. With our support, you can increase productivity, improve customer retention, and deliver exceptional customer service, all while maintaining a user-friendly interface.
          </p>
        </div>
      </div>

      {/* Section 2 - Image Right, Content Left */}
      <div className="flex flex-col md:flex-row-reverse items-center">
        {/* Image */}
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <img
            src={image2}
            alt="CRM User Interface"
            className="w-full max-w-[350px] h-auto object-cover rounded-xl mx-auto"
          />
        </div>
        {/* Content */}
        <div className="w-full md:w-7/12 md:pr-10">
          <h3 className="text-2xl font-default mb-4">
            <span className="text-gray-500">Intuitive CRM Interfaces</span>{' '}
            <span className="text-blue-800">for Better Customer Insights</span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We design intuitive CRM interfaces that help your team easily track and manage customer data. From contact management to sales forecasting, our systems provide comprehensive features for all aspects of customer relationship management, helping your teams access insights at the right time.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Whether it’s task automation, customer support tracking, or advanced analytics, our CRM solutions enable your business to respond quickly to customer needs, increase customer satisfaction, and boost overall sales.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            With an emphasis on design and usability, our CRM systems are built to be flexible, scalable, and user-friendly, ensuring that your team can focus on what matters: building stronger customer relationships and driving growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Crmcontent1;

import React from 'react';
import image1 from '../assets/Image/4117025.jpg'; // Replace with your actual image
import image2 from '../assets/Image/4574923.jpg'; // Replace with your actual image
import Designcontent from './Designcontent';

const Erpcontents1 = () => {
  return (
    <section className="w-full px-6 md:px-16 py-16 bg-white">
      {/* Main Heading */}
      <h2 className="text-4xl text-center font-semibold text-gray-800 mb-16">
        Cutting-Edge <span className="text-blue-800">ERP Solutions</span>
      </h2>

      {/* Section 1 - Image Left, Content Right */}
      <div className="flex flex-col md:flex-row items-center mb-20">
        {/* Image */}
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <img
            src={image1}
            alt="ERP Software"
            className="w-full max-w-[350px] h-auto object-cover rounded-xl mx-auto"
          />
        </div>
        {/* Content */}
        <div className="w-full md:w-7/12 md:pl-10">
          <h3 className="text-2xl font-default mb-4">
            <span className="text-gray-600">Streamline Your Business</span>{' '}
            <span className="text-blue-800">With ERP</span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Our ERP solutions are designed to help businesses of all sizes optimize their operations and streamline key processes. From inventory management to finance, HR, and customer relationship management, we provide a seamless, integrated system that connects every aspect of your business.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            With our ERP solutions, you can automate workflows, reduce manual errors, and improve decision-making with real-time data. Whether you're in manufacturing, retail, or services, we ensure that your ERP solution is scalable, secure, and tailored to meet your unique needs.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our team provides full integration with your existing systems, ensuring smooth data flow and reducing duplication. Expect a solution that not only improves efficiency but also enhances collaboration across departments, empowering your teams to work smarter and faster.
          </p>
        </div>
      </div>

      {/* Section 2 - Image Right, Content Left */}
      <div className="flex flex-col md:flex-row-reverse items-center">
        {/* Image */}
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <img
            src={image2}
            alt="ERP System"
            className="w-full max-w-[350px] h-auto object-cover rounded-xl mx-auto"
          />
        </div>
        {/* Content */}
        <div className="w-full md:w-7/12 md:pr-10">
          <h3 className="text-2xl font-default mb-4">
            <span className="text-gray-600">ERP Systems</span> for{' '}
            <span className="text-blue-800">Business Growth</span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Our ERP systems provide you with a unified platform to manage all aspects of your business processes. From procurement to production and distribution, our solutions are built to integrate seamlessly with your workflow, ensuring that your business runs smoothly and efficiently.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            With advanced reporting and analytics, our ERP solutions enable you to gain valuable insights into your business, allowing you to make data-driven decisions. Our solutions are designed to help you stay ahead of the competition, optimize operations, and reduce costs, all while improving your customer satisfaction.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            We understand that every business is unique, which is why we offer customized ERP solutions that align with your business goals. Our expert team will work with you to develop and deploy a solution that fits your business needs and growth trajectory.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Erpcontents1;

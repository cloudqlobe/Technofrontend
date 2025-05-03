import React from 'react';
import image1 from '../assets/Image/4667617.jpg'; // Replace with your actual image
import image2 from '../assets/Image/6072171.jpg'; // Replace with your actual image
import Designcontent from './Designcontent';

const Billingcontents1 = () => {
  return (
    <section className="w-full px-6 md:px-16 py-16 bg-white">
      {/* Main Heading */}
      <h2 className="text-4xl text-center font-semibold text-gray-800 mb-16">
        Cutting-Edge <span className="text-blue-800">Billing Software Solutions</span>
      </h2>

      {/* Section 1 - Image Left, Content Right */}
      <div className="flex flex-col md:flex-row items-center mb-20">
        {/* Image */}
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <img
            src={image1}
            alt="Billing Software"
            className="w-full max-w-[350px] h-auto object-cover rounded-xl mx-auto"
          />
        </div>
        {/* Content */}
        <div className="w-full md:w-7/12 md:pl-10">
          <h3 className="text-2xl font-default mb-4">
            <span className="text-gray-600">Efficient,</span>{' '}
            <span className="text-blue-800">Reliable Billing</span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Our billing software solutions are designed to streamline and automate your billing processes, reducing manual effort and eliminating errors. From invoicing to payment tracking, we provide a seamless experience for businesses of all sizes.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Our system integrates with multiple payment gateways and accounting tools, offering you a one-stop solution to handle all billing-related tasks. Whether it’s subscription-based billing, one-time payments, or recurring billing cycles, our software can handle it all.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            We also ensure that your billing system complies with the latest tax regulations and accounting standards, making it easy to generate financial reports and stay compliant with local laws.
          </p>
        </div>
      </div>

      {/* Section 2 - Image Right, Content Left */}
      <div className="flex flex-col md:flex-row-reverse items-center">
        {/* Image */}
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <img
            src={image2}
            alt="Billing Software Features"
            className="w-full max-w-[350px] h-auto object-cover rounded-xl mx-auto"
          />
        </div>
        {/* Content */}
        <div className="w-full md:w-7/12 md:pr-10">
          <h3 className="text-2xl font-default mb-4">
            <span className="text-gray-600">Automation</span>{' '}
            <span className="text-blue-800">and Accuracy</span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Our billing software automates key tasks such as invoice generation, payment reminders, and late fee calculations, ensuring that your billing operations run smoothly without manual intervention. We also provide real-time tracking and updates of payment statuses.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            With advanced reporting and analytics features, our solution gives you the ability to generate detailed reports and insights into your financial data. Track payment history, outstanding invoices, and revenue growth effortlessly.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whether you are managing a small business or an enterprise, our customizable billing software adapts to your needs, offering scalability and flexibility to grow with your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Billingcontents1;

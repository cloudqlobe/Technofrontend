import React from "react";
import image4 from "../assets/Image/4590506.jpg";
import image5 from "../assets/Image/4673526.jpg";
import image6 from "../assets/Image/5397869.jpg";
import Billingcontents1 from "./Billingcontents1";

const Billingcontent = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-10">
        Billing <span className="text-blue-800">Software Solutions</span>
      </h1>

      {/* Billing Software Design Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image4}
            alt="Billing Software Design"
            className="w-[80%] h-[450px] object-cover rounded-lg mb-2 mr-[100px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-4xl text-gray-700 mb-4">User-Friendly <span className="text-blue-600">Billing Software Design</span></h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-3">
            Our billing software is designed with simplicity and ease of use in mind. We prioritize clean, intuitive interfaces that streamline the billing process and reduce errors. From automated invoicing to subscription management, we ensure a smooth user experience.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Whether you are handling one-time payments, recurring billing, or complex multi-tier pricing, our designs are tailored to support your unique business requirements. Expect responsive and reliable interfaces that work seamlessly on any device.
          </p>
        </div>
      </div>

      {/* Billing Software Development Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-10 max-w-7xl mx-auto mt-[-20px]">
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-4xl text-gray-700 mb-4">Scalable <span className="text-blue-600">Billing Software Development</span></h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-3">
            Our development team builds highly scalable and secure billing software solutions that adapt to your business’s growth. With real-time payment processing, tax calculations, and invoice generation, we ensure your billing operations run smoothly and efficiently.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Whether you're integrating with other financial systems or building custom workflows, our billing solutions offer flexibility, automation, and robust reporting tools. We create systems that reduce manual tasks and help you stay ahead of the competition.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image5}
            alt="Billing Software Development"
            className="w-[80%] h-[450px] object-cover rounded-lg mt-[50px]"
          />
        </div>
      </div>

      {/* Custom Billing Solutions Section */}
      <div className="grid md:grid-cols-2 items-center gap-24 mb-12 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image6}
            alt="Custom Billing Solutions"
            className="w-[90%] h-[400px] object-cover mt-24"
          />
        </div>
        <div className="flex flex-col justify-center w-full mb-[100px]">
          <h2 className="text-4xl text-gray-700 mb-4 ml-2 mt-16">Tailored <span className="text-blue-600">Billing Solutions</span></h2>
          <p className="text-gray-600 leading-relaxed text-lg ml-4 mb-3">
            Every business has unique billing needs, and our custom solutions are built to accommodate those requirements. Whether it's dynamic pricing models, multi-currency support, or comprehensive reporting, we work closely with you to create a solution that fits perfectly with your operations.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg ml-4">
            Our goal is to provide you with a powerful, yet simple-to-use billing platform that evolves as your business grows. With secure payment gateways, automated workflows, and real-time financial insights, we help you scale efficiently and reduce overhead costs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Billingcontent;

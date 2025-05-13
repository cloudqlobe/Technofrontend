import React from "react";
import image4 from "../assets/Image/4590506.jpg";
import image5 from "../assets/Image/4673526.jpg";
import image6 from "../assets/Image/5397869.jpg";
import Billingcontents1 from "./Billingcontents1";

const Billingcontent = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-[30px]">
        Comprehensive <span className="text-blue-800">Billing Software Solutions</span> for Your Business Needs
      </h1>

      {/* Front-End Development for Billing Software */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-7xl mx-auto mt-[40px]">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image4}
            alt="Frontend Development"
            className="w-[80%] h-[450px] object-cover rounded-lg mb-2 mr-[100px]"
          />
        </div>
        <div className="flex flex-col justify-center w-[600px] ml-[58px]">
          <h2 className="text-4xl font-default text-grey-400 mt-[30px]">
            Interactive <span className="text-orange-400">Billing Interfaces</span> for Seamless User Experience
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            We specialize in crafting user-friendly, responsive billing software interfaces that cater to the needs of businesses of all sizes. Using modern frameworks like React, Vue, and Next.js, we ensure that every billing component is tailored to provide a seamless, intuitive experience across devices. From generating invoices to making payments and reviewing transaction history, every interaction within our platform is designed to be smooth and highly responsive.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Our design-first approach ensures that every visual element serves a functional purpose, enhancing user experience without sacrificing performance. Whether you need to handle multiple invoices, track payment statuses, or manage billing details efficiently, we provide interfaces that make it easy to navigate. Our goal is to offer a system that reduces the complexity of financial operations while increasing user satisfaction.
          </p>
        </div>
      </div>

      {/* Backend Development for Billing Systems */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-10 max-w-7xl mx-auto mt-[60px]">
        <div className="flex flex-col justify-center w-full ml-[-40px]">
          <h2 className="text-4xl font-default text-grey-200  mt-[30px]">
            Robust <span className="text-orange-400">Backend Systems</span> for Secure Billing Operations
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Our backend systems are engineered to handle complex billing processes seamlessly. Built with technologies like Node.js, Express, and other modern stacks, we ensure that your web applications are secure, fast, and highly reliable. From handling payments and generating invoices to offering detailed reports and transaction management, our backend services provide a robust foundation for your billing operations.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            We focus on building scalable, secure, and high-performing APIs that integrate with various payment gateways, making the process of accepting payments and managing subscriptions a breeze. Our backend also includes powerful features like user authentication, role-based access control, session handling, and data encryption to ensure the utmost security and confidentiality of your business and customer data.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image5}
            alt="Backend Development"
            className="w-[80%] h-[450px] object-cover rounded-lg mt-[50px] ml-[30px]"
          />
        </div>
      </div>

      {/* Custom Web Applications for Billing Solutions */}
      <div className="grid md:grid-cols-2 items-center gap-24 mb-12 max-w-7xl mx-auto mt-[-60px]">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image6}
            alt="Custom Web Applications"
            className="w-[90%] h-[400px] object-cover mt-24"
          />
        </div>
        <div className="flex flex-col justify-center w-full mb-[100px] ml-[30px]">
          <h2 className="text-4xl font-default text-grey-200 mb-2 mt-[30px]">
            Tailored <span className="text-orange-400">Billing Software Solutions</span> for Every Business Need
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Our custom billing software solutions are designed to adapt to the specific needs of your business, no matter the size or industry. Whether you need a fully integrated payment gateway, a subscription management platform, or a detailed invoicing system, we’ve got you covered. Using the MERN stack and other modern technologies, we create scalable, secure, and feature-rich billing applications that cater to your exact requirements, helping you automate billing and improve customer satisfaction.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Our team focuses on delivering flexible, high-performance billing systems that ensure reliability, ease of use, and full scalability. From managing recurring billing cycles to offering dynamic pricing, automated invoices, and payment reminders, our solutions provide businesses with everything they need to streamline financial operations. We also prioritize data security and regulatory compliance, ensuring your software is ready for the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Billingcontent;

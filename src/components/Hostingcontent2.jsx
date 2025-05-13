import React from 'react';
import image1 from '../assets/Image/4709950.jpg'; // Replace with your actual image
import image2 from '../assets/Image/5648291.jpg'; // Replace with your actual image

const Hostingcontent2 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-[30px]">
        Powerful <span className="text-blue-800">Hosting Solutions</span> for Modern Businesses
      </h1>

      {/* Web Hosting Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-8 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image1}
            alt="Web Hosting"
            className="w-[600px] h-[540px] object-cover rounded-lg mt-[30px] ml-[-140px]"
          />
        </div>
        <div className="flex flex-col justify-center w-[600px] ml-[58px]">
          <h2 className="text-4xl font-default text-grey-400 mt-[30px]">
            Reliable <span className="text-orange-400">Web Hosting</span>
          </h2>
          <p className="text-gray-600 leading-relaxing text-lg text-justify mt-[30px]">
            Our web hosting services offer the most reliable and high-performance hosting solutions, designed to keep your website running smoothly around the clock. Whether you have a small personal blog or a large e-commerce platform, we ensure that your site loads quickly, remains secure, and delivers a seamless experience to users worldwide. With advanced infrastructure, cutting-edge SSD storage, and high-bandwidth options, we guarantee optimal performance, allowing your business to grow without interruptions.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Beyond just speed and reliability, we take security seriously. Our web hosting includes free SSL certificates, automatic backups, and strong protection against cyber threats. With our scalable plans, you can expand as your needs grow, all while maintaining 99.9% uptime. Plus, our dedicated support team is available 24/7 to assist you with any technical issues, ensuring a hassle-free hosting experience. We handle the tech, so you can focus on growing your business.
          </p>
        </div>
      </div>

      {/* Email & Domain Services Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-8 max-w-7xl mx-auto mt-[-24px]">
        <div className="flex flex-col justify-center w-full ml-[-45px]">
          <h2 className="text-4xl font-default text-grey-200 mt-[30px]">
            Seamless <span className="text-orange-400">Email & Domain Services</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Establishing a professional identity online begins with a custom domain and professional email address. Our email and domain services allow businesses to secure a unique and memorable web address that aligns with their brand. We provide an easy-to-use domain registration process with various top-level domain (TLD) options. Whether you're creating a personal blog or launching a full-scale online business, we ensure that your website's URL stands out and is easy to find for your target audience.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            In addition to domain registration, our email hosting service provides secure, ad-free email accounts that can be accessed through popular platforms such as Gmail and Outlook. Our solutions come with powerful features like spam protection, advanced virus filtering, and encryption, ensuring the safety and integrity of your communications. With easy-to-manage controls, you can handle multiple email accounts, all while maintaining a professional presence. Our reliable support ensures that your email setup is always smooth and hassle-free.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image2}
            alt="Email & Domain Services"
            className="w-[600px] h-[600px] object-cover rounded-lg ml-[120px] mt-[30px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hostingcontent2;

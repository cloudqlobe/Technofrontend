import React from 'react';
import image1 from '../assets/Image/10895191.jpg'; // Cloud Infra Image
import image2 from '../assets/Image/6478073.jpg'; // Cloud Design UI Image
import Designcontent from './Designcontent';

const Crmcontent1 = () => {
  return (
    <section className="w-full px-6 md:px-16 py-16 bg-white font-sans">
      {/* Main Heading */}
      <h2 className="text-4xl text-center font-semibold text-gray-800 mb-16">
        Innovative Cloud Computing <span className='text-blue-800'>Solutions for Scalable Growth</span>
      </h2>

      {/* Section 1 - Image Left, Content Right */}
      <div className="flex flex-col md:flex-row items-center mb-20">
        {/* Image */}
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <img
            src={image1}
            alt="Cloud Infrastructure"
           className="w-[90%] h-[450px] object-cover rounded-lg"
          />
        </div>
        {/* Content */}
        <div className="w-full md:w-7/12 md:pl-10">
          <h3 className="text-2xl font-default mb-4">
            <span className="text-gray-600">Deploy Smarter,</span>{' '}
            <span className="text-blue-700">Scale Faster</span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Our cloud solutions empower your business with scalable infrastructure, high-performance compute, and secure data storage — all optimized for agility and efficiency. Whether you're migrating existing workloads or starting cloud-native, we ensure reliability from day one.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            From AWS and Azure to private clouds, we architect systems for seamless deployment, automated scaling, and continuous delivery pipelines tailored to your goals.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Gain competitive advantage with real-time access, integrated APIs, and robust compliance-ready architecture — all under one cloud.
          </p>
        </div>
      </div>

      {/* Section 2 - Image Right, Content Left */}
      <div className="flex flex-col md:flex-row-reverse items-center">
        {/* Image */}
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <img
            src={image2}
            alt="Cloud UI/UX"
             className="w-[90%] h-[450px] object-cover rounded-lg"
          />
        </div>
        {/* Content */}
        <div className="w-full md:w-7/12 md:pr-10">
          <h3 className="text-2xl font-default mb-4">
            <span className="text-gray-500">Secure Interfaces</span>{' '}
            <span className="text-blue-700">& Unified Experience</span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We go beyond infrastructure — by crafting admin portals, dashboards, and user-friendly interfaces that integrate directly into your cloud ecosystem. Using modern frameworks and design systems, we bring form and function together.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Every cloud control panel or data management UI we create is optimized for performance, security, and clarity — ensuring ease of use for developers, admins, and end users alike.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whether it's SaaS platforms, DevOps dashboards, or billing portals — we blend intuitive UI with deep backend capabilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Crmcontent1;

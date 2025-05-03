import React from 'react';
import image1 from '../assets/Image/5044055.jpg'; // Replace with your actual image
import image2 from '../assets/Image/4950546.jpg'; // Replace with your actual image

const Mobcontent1 = () => {
  return (
    <section className="w-full px-6 md:px-16 py-16 bg-white">
      {/* Main Heading */}
      <h2 className="text-4xl text-center font-semibold text-black mb-16">
        Cutting-Edge <span className='text-blue-800'>Mobile App Development Solutions</span>
      </h2>

      {/* Section 1 - Image Left, Content Right */}
      <div className="flex flex-col md:flex-row items-center mb-20">
        {/* Image */}
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <img
            src={image1}
            alt="App Development"
           className="w-[90%] h-[450px] object-cover rounded-lg"
          />
        </div>
        {/* Content */}
        <div className="w-full md:w-7/12 md:pl-10">
          <h3 className="text-3xl font-default mb-4">
            <span className="text-black">Build Smarter,</span>{' '}
            <span className="text-blue-800">Faster Apps</span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Our mobile app development services are engineered to help businesses of all sizes launch powerful and scalable apps. Whether it’s a native Android or iOS app, or a modern cross-platform solution using Flutter or React Native, we ensure rapid delivery without compromising performance.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We focus on creating apps that are not just functional, but deeply aligned with your business goals. From designing intuitive screens to writing efficient backend code and ensuring high test coverage, our team guarantees a production-ready application.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            We also provide seamless integration with APIs, databases, third-party tools, and payment gateways — ensuring your app is complete and competitive in today’s digital marketplace.
          </p>
        </div>
      </div>

      {/* Section 2 - Image Right, Content Left */}
      <div className="flex flex-col md:flex-row-reverse items-center">
        {/* Image */}
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <img
            src={image2}
            alt="UI/UX Design"
            cclassName="w-[90%] h-[450px] object-cover rounded-lg"
          />
        </div>
        {/* Content */}
        <div className="w-full md:w-7/12 md:pr-10">
          <h3 className="text-3xl font-default mb-4">
            <span className="text-black">Intuitive Interfaces</span>{' '}
            <span className="text-blue-800">& Seamless Design</span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Design is not just what it looks like — it's how it works. We craft visually rich, user-centric interfaces that guide users smoothly through every screen. Our UI/UX experts use modern design principles and tools like Figma to create experiences that are both beautiful and efficient.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Every app we build is optimized for responsiveness, accessibility, and user satisfaction. We conduct usability testing, implement interactive prototypes, and ensure that the final product delights users across all devices.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            From wireframes to polished UI, our design workflow is structured to bring clarity and creativity to your product’s identity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mobcontent1;

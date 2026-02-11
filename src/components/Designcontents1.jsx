import React from 'react';
import image1 from '../assets/Image/4990129.jpg';
import image2 from '../assets/Image/5700262.jpg';

const Designcontents1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-4 sm:px-8 lg:px-12 py-10 overflow-hidden">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center text-black mb-8 mt-[30px] px-4">
        Engaging <span className="text-blue-800">UI & UX Designs</span> That Transform Experiences
      </h1>
      {/* UI Design Section */}
            <div className="grid md:grid-cols-2 items-center gap-6 lg:gap-8 mb-8 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2 order-1 md:order-1">
          <img
            src={image2}
            alt="UI Design"
            className="w-full max-w-[600px] h-auto md:h-[600px] object-cover rounded-lg mt-4 md:mt-[30px] md:ml-[-130px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full md:w-[600px] px-4 md:px-0 md:ml-[58px] order-2 md:order-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-default text-grey-400 mt-4 md:mt-[30px]">
            Aesthetic & Functional <span className="text-orange-400">UI Designs</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-base lg:text-lg text-justify mt-4 md:mt-[30px]">
            Our UI design process focuses on combining visual harmony with intuitive functionality. We carefully select color palettes, typography, iconography, and layout patterns that not only align with your brand identity but also enhance usability. Every interface is created with purpose—buttons are placed for ease, forms are structured for clarity, and content is spaced to avoid clutter. Whether it's a landing page, web application, or dashboard, we ensure that the interface feels clean, responsive, and purposeful across all devices.
          </p>
          <p className="text-gray-600 leading-relaxed text-base lg:text-lg text-justify mt-3 md:mt-[30px]">
            We believe that good design leads to better engagement. Our approach emphasizes consistency, visual hierarchy, and micro-interactions that guide users smoothly through the interface. From hover effects to animations, every detail is crafted to enhance experience without overwhelming it. Using modern design tools and frameworks, we create scalable UI systems that are easy to maintain, accessible to all users, and ready for seamless developer handoff.
          </p>
        </div>
      </div>

      {/* UX Design Section */}

            <div className="grid md:grid-cols-2 items-center gap-6 lg:gap-8 mb-8 max-w-7xl mx-auto mt-4 md:mt-[-24px]">
        <div className="flex flex-col justify-center w-full px-4 md:px-0 md:ml-[-45px] order-2 md:order-1">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-default text-grey-200 mt-4 md:mt-[30px]">
            Purposeful <span className="text-orange-400">UX Experiences</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-base lg:text-lg text-justify mt-4 md:mt-[30px]">
            Our UX strategy starts with understanding your users' goals, behaviors, and challenges through research and data analysis. We then craft journey maps, wireframes, and prototypes that simplify complex interactions into smooth and rewarding experiences. By eliminating friction points and predicting user needs, we help you build systems that are intuitive, easy to navigate, and supportive of business conversions. Usability and empathy are at the heart of every design decision we make.
          </p>
          <p className="text-gray-600 leading-relaxed text-base lg:text-lg text-justify mt-3 md:mt-[30px]">
            Through iterative testing and continuous feedback, we refine every element of the experience—from onboarding flows and content structure to button placements and call-to-actions. We ensure that the final product not only solves user problems efficiently but also provides a delightful interaction at every touchpoint. Our UX solutions increase user retention, reduce abandonment, and help your business build lasting digital relationships.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2 order-1 md:order-2">
          <img
            src={image1}
            alt="UX Strategy"
            className="w-full max-w-[600px] h-auto md:h-[600px] object-cover rounded-lg md:ml-[100px] mt-4 md:mt-[10px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Designcontents1;
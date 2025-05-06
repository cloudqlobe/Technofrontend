import React from "react";
import image4 from "../assets/Image/10625917.jpg";
import image5 from "../assets/Image/6502435.jpg";
import image6 from "../assets/Image/6224584.jpg";

const Techcontent = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-10">
        End-to-End <span className="text-blue-800">Tech Consultancy Solutions</span>
      </h1>

      {/* Tech Strategy Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image4}
            alt="Tech Strategy"
            className="w-[80%] h-[450px] object-cover rounded-lg mb-2 mr-[100px]"
          />
        </div>
        <div className="flex flex-col justify-center w-[600px] ml-[57px]">
        <h2 className="text-4xl font-default text-grey-400 mb-2">
            Interactive <span className="text-orange-400">Frontend Interfaces</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            We specialize in crafting stunning, responsive front-end interfaces using modern frameworks like React, Vue, and Next.js. Every component is tailored to create smooth navigation, fast rendering, and a visually appealing layout across devices.
            We specialize in crafting stunning, responsive front-end interfaces using modern 

          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Our design-first approach ensures every visual element has a functional purpose. From landing pages to multi-page applications, we aim to deliver interfaces that are fast, flexible, and highly interactive.
            We specialize in crafting stunning, responsive front-end interfaces using modern frameworks like React, Vue, and Next.js. Every component is tailored

          </p>
         
        </div>
      </div>

      {/* Systems & Architecture Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-10 max-w-7xl mx-auto mt-[-20px]">
      <div className="flex flex-col justify-center w-[600px] ml-[-40px]">
        <h2 className="text-4xl font-default text-grey-400 mb-2">
            Interactive <span className="text-orange-400">Frontend Interfaces</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            We specialize in crafting stunning, responsive front-end interfaces using modern frameworks like React, Vue, and Next.js. Every component is tailored to create smooth navigation, fast rendering, and a visually appealing layout across devices.
            We specialize in crafting stunning, responsive front-end interfaces using modern 

          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Our design-first approach ensures every visual element has a functional purpose. From landing pages to multi-page applications, we aim to deliver interfaces that are fast, flexible, and highly interactive.
            We specialize in crafting stunning, responsive front-end interfaces using modern frameworks like React, Vue, and Next.js. Every component is tailored

          </p>
         
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image5}
            alt="System Architecture"
            className="w-[80%] h-[450px] object-cover rounded-lg mt-[50px]"
          />
        </div>
      </div>

      {/* Audits & Optimization Section */}
      <div className="grid md:grid-cols-2 items-center gap-24 mb-12 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image6}
            alt="Tech Audits"
            className="w-[90%] h-[400px] object-cover mt-24"
          />
        </div>
        <div className="flex flex-col justify-center w-[600px] ml-[22px]">
        <h2 className="text-4xl font-default text-grey-400 mb-2">
            Interactive <span className="text-orange-400">Frontend Interfaces</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            We specialize in crafting stunning, responsive front-end interfaces using modern frameworks like React, Vue, and Next.js. Every component is tailored to create smooth navigation, fast rendering, and a visually appealing layout across devices.
            We specialize in crafting stunning, responsive front-end interfaces using modern 

          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Our design-first approach ensures every visual element has a functional purpose. From landing pages to multi-page applications, we aim to deliver interfaces that are fast, flexible, and highly interactive.
            We specialize in crafting stunning, responsive front-end interfaces using modern frameworks like React, Vue, and Next.js. Every component is tailored

          </p>
         
        </div>
      </div>
    </div>
  );
};

export default Techcontent;

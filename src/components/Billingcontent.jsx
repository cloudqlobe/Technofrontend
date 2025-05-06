import React from "react";
import image4 from "../assets/Image/4590506.jpg";
import image5 from "../assets/Image/4673526.jpg";
import image6 from "../assets/Image/5397869.jpg";
import Billingcontents1 from "./Billingcontents1";

const Billingcontent = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-10">
        Advanced <span className="text-blue-800">Web Development Solutions</span>
      </h1>

      {/* Front-End Development Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-7xl mx-auto mt-[-40px]">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image4}
            alt="Frontend Development"
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

      {/* Backend Development Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-10 max-w-7xl mx-auto mt-[-60px]">
        <div className="flex flex-col justify-center w-full ml-[-40px]">
        <h2 className="text-4xl font-default text-grey-200 mb-4 mt-[40px] ">
            Powerful <span className="text-orange-400">Backend Systems</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[20px]">
            We build robust backend systems using Node.js, Express, and other modern tech stacks to ensure your web applications run smoothly and securely. Our APIs are structured for easy integration and optimized performance. hight perforace at the level of tbe sette;;eetuusbssbbxjashs gdjddbdzj hhdhdad jdsddd jjdasddjas djadad  
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Features like user authentication, role-based access control, session handling, and database security are built into every solution we provide. Our goal is to deliver backends that are not only functional but also secure and scalable. makeing relaible tungs in the hoscbabsfwbhksln  kssnnavs  hxhhxjh hhhhh hhhhh hhh hh hh hh h h 
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

      {/* Full Stack & Custom Development Section */}
      <div className="grid md:grid-cols-2 items-center gap-24 mb-12 max-w-7xl mx-auto mt-[-60px]">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image6}
            alt="Custom Web Applications"
            className="w-[90%] h-[400px] object-cover mt-24"
          />
        </div>
        <div className="flex flex-col justify-center w-full mb-[100px] ml-[30px]">
        <h2 className="text-4xl font-default text-grey-200 mb-2  mt-16">
            Custom <span className="text-orange-400">Web Applications</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            We develop tailored web solutions for businesses across all domains. Whether it's a CRM system, an internal admin dashboard, or a customer-facing portal, we combine frontend and backend technologies to bring your ideas to life.
            Using the MERN stack and beyond, our custom applications feature intuitive UIs, data-driven logic, and modular code architecture.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Using the MERN stack and beyond, our custom applications feature intuitive UIs, data-driven logic, and modular code architecture. We focus on code reusability, microservices, and scalable builds that grow with your business.
            Using the MERN stack and beyond, our custom applications feature intuitive UIs, data-driven logic, and modular code architecture. 
          </p>
         
        </div>
      </div>
    </div>
  );
};



export default Billingcontent;

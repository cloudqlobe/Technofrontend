import React from "react";
import image4 from "../../../assets/Image/4590506.jpg";
import image5 from "../../../assets/Image/4673526.jpg";
import image6 from "../../../assets/Image/5397869.jpg";

const Aboutcontent = () => {
  return (
    <div className="min-h-screen w-full bg-white px-6 sm:px-12 py-10 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl text-center text-black mb-8 mt-10">
        Advanced <span className="text-blue-800">Web Development Solutions</span>
      </h2>

      {/* Front-End Development Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-7xl mx-auto">
        {/* Image */}
        <div className="flex justify-center md:justify-start w-full">
          <img
            src={image4}
            alt="Frontend Development"
            className="w-full sm:w-4/5 md:w-full h-auto object-cover rounded-lg"
          />
        </div>
        {/* Content */}
        <div className="flex flex-col justify-center w-full md:w-auto text-center md:text-left px-2 md:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-4">
            Interactive <span className="text-orange-400">Frontend Interfaces</span>
          </h2>
          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
We specialize in crafting stunning, responsive front-end interfaces using modern frameworks like React, Vue, and Next.js. Every component is tailored to create smooth navigation, fast rendering, and a visually appealing layout across devices. We specialize in crafting stunning, responsive front-end interfaces using modern          </p>
          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
Our design-first approach ensures every visual element has a functional purpose. From landing pages to multi-page applications, we aim to deliver interfaces that are fast, flexible, and highly interactive. We specialize in crafting stunning, responsive front-end interfaces using modern frameworks like React, Vue, and Next.js. Every component is tailored          </p>
        </div>
      </div>

      {/* Backend Development Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-7xl mx-auto">
        {/* Content */}
        <div className="flex flex-col justify-center w-full md:w-auto text-center md:text-left px-2 md:px-0 order-2 md:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-4">
            Powerful <span className="text-orange-400">Backend Systems</span>
          </h2>
          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
We build robust backend systems using Node.js, Express, and other modern tech stacks to ensure your web applications run smoothly and securely. Our APIs are structured for easy integration and optimized performance. hight perforace at the level</p>
          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            Features like user authentication, role-based access control, session handling, and database security are built into every solution we provide. Our goal is to deliver backends that are functional, secure, and scalable.
          </p>
        </div>
        {/* Image */}
        <div className="flex justify-center md:justify-end w-full order-1 md:order-2">
          <img
            src={image5}
            alt="Backend Development"
            className="w-full sm:w-4/5 md:w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Full Stack & Custom Development Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-7xl mx-auto">
        {/* Image */}
        <div className="flex justify-center md:justify-start w-full">
          <img
            src={image6}
            alt="Custom Web Applications"
            className="w-full sm:w-4/5 md:w-full h-auto object-cover rounded-lg"
          />
        </div>
        {/* Content */}
        <div className="flex flex-col justify-center w-full md:w-auto text-center md:text-left px-2 md:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Custom <span className="text-orange-400">Web Applications</span>
          </h2>
          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
We develop tailored web solutions for businesses across all domains. Whether it's a CRM system, an internal admin dashboard, or a customer-facing portal, we combine frontend and backend technologies to bring your ideas to life. Using the MERN stack and beyond, our custom applications feature intuitive UIs, data-driven logic, and modular code architecture.          </p>
          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
Using the MERN stack and beyond, our custom applications feature intuitive UIs, data-driven logic, and modular code architecture. We focus on code reusability, microservices, and scalable builds that grow with your business. Using the MERN stack and beyond, our custom applications feature intuitive UIs, data-driven logic, and modular code architecture.          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutcontent;

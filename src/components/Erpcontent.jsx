import React from "react";
import image4 from "../assets/Image/5031659.jpg";
import image5 from "../assets/Image/10197785.jpg";
import image6 from "../assets/Image/5024152.jpg";
import Erpcontents1 from "./Erpcontents1";

const Erpcontent = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
     <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-[30px]">
  <span className="text-blue-800">Transform</span> Your Business with Our <span className="text-orange-400">ERP Solutions</span>
</h1>


      {/* ERP Front-End Development Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-7xl mx-auto mt-[-40px]">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image4}
            alt="ERP Frontend Development"
            className="w-[550px] h-[550px] object-cover rounded-lg mt-[30px] ml-[-150px]"
          />
        </div>
        <div className="flex flex-col justify-center w-[600px] ml-[57px]">
          <h2 className="text-4xl font-default text-grey-400 mt-[30px]">
            Interactive <span className="text-orange-400">ERP User Interfaces</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            We specialize in crafting user-friendly, intuitive front-end interfaces tailored to your ERP system. Our designs focus on enhancing the user experience with easy navigation, fast loading times, and a responsive layout that adjusts seamlessly across devices. 
            The goal is to provide users with a clean and interactive interface that streamlines their workflow and increases productivity. 
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            We implement modern frameworks like React, Vue, and Angular to build dynamic ERP dashboards, inventory management screens, and real-time data visualizations. These tools help optimize the end-user experience while providing rich, interactive capabilities for managing business processes with minimal friction.
          </p>
        </div>
      </div>

      {/* ERP Backend Development Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-10 max-w-7xl mx-auto mt-[-60px]">
        <div className="flex flex-col justify-center w-full ml-[-40px]">
          <h2 className="text-4xl font-default text-grey-200 mb-4 mt-[30px]">
            Scalable <span className="text-orange-400">ERP Backend Systems</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Our ERP backend solutions are built for scalability, security, and performance. By leveraging powerful frameworks like Node.js and Express, we create robust APIs that are highly performant, ensuring smooth data exchanges between the front-end and back-end of your ERP system. This design ensures that your ERP application can grow as your business expands, handling increasing data volume and complexity.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            We prioritize the implementation of secure user authentication, role-based access control, and advanced data management tools. This ensures that your ERP system not only supports day-to-day business operations but also provides a secure platform for sensitive information. Additionally, the backend is optimized for seamless integration with third-party software, reducing friction and improving operational efficiency.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image5}
            alt="ERP Backend Development"
            className="w-[600px] h-[600px] object-cover rounded-lg mt-[50px] ml-[100px]"
          />
        </div>
      </div>

      {/* ERP Full Stack & Custom Development Section */}
      <div className="grid md:grid-cols-2 items-center gap-24 mb-12 max-w-7xl mx-auto mt-[60px]">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image6}
            alt="Custom ERP Applications"
            className="w-[600px] h-[600px] object-cover mt-[-100px]  ml-[-50px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full mb-[100px] ml-[30px]">
          <h2 className="text-4xl font-default text-grey-200 mb-2 mt-[30px]">
            Tailored <span className="text-orange-400">ERP Applications</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            We develop customized ERP systems designed specifically for your business. Whether you need an inventory management system, financial tracking, or a customer relationship management (CRM) module, we integrate the necessary functionalities into one cohesive system. Our custom ERP solutions are built to align perfectly with your business needs, automating manual processes, reducing errors, and improving efficiency.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Utilizing a full-stack development approach, our custom ERP applications combine front-end and back-end technologies to provide a seamless user experience. By using modern stacks like the MERN stack, we ensure your ERP system is scalable, flexible, and easy to maintain. Whether you are looking to improve internal workflows or provide a better experience for your clients, our tailored ERP solutions will support your business at every stage of growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Erpcontent;

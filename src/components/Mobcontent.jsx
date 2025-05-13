import React from 'react';
import image16 from "../assets/Image/4110955.jpg";
import image17 from "../assets/Image/6072171.jpg";
import image18 from "../assets/Image/4630198.jpg";

const Mobcontent = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-[30px]">
        Advanced <span className="text-blue-800">App Development Solutions</span>
      </h1>

      {/* Mobile App Development Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-7xl mx-auto mt-[-40px]">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image18}
            alt="Mobile App Development"
            className="w-[600px] h-[550px] object-cover rounded-lg mt-[50px] ml-[-100px]"
          />
        </div>
        <div className="flex flex-col justify-center w-[600px] ml-[58px]">
          <h2 className="text-4xl font-default text-grey-400 mt-[30px]">
            Innovative <span className="text-orange-400">Mobile App Solutions</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            We specialize in developing mobile applications that transform your business ideas into user-friendly, high-performance products. Whether it's iOS or Android, our team uses cutting-edge technologies such as React Native, Flutter, and Swift to create apps that provide an intuitive user experience. From enterprise solutions to consumer apps, we ensure that each app is optimized for performance, scalability, and ease of use across a variety of devices and operating systems.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Our mobile apps are designed to engage users while delivering exceptional performance. We integrate robust features such as push notifications, geolocation services, and real-time data syncing to provide a seamless experience. Additionally, we focus on continuous testing and quality assurance throughout the development process to ensure your app performs flawlessly from launch to long-term use.
          </p>
        </div>
      </div>

      {/* Web App Development Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-10 max-w-7xl mx-auto mt-[-60px]">
        <div className="flex flex-col justify-center w-full ml-[-40px]">
          <h2 className="text-4xl font-default text-grey-200  mt-[30px]">
            Scalable <span className="text-orange-400">Web Applications</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Our team develops high-performance web applications using modern technologies like React, Angular, and Vue.js for the frontend, and Node.js, Django, or Ruby on Rails for the backend. We focus on building scalable web apps that are easy to maintain and adapt to future business needs. Whether it’s an e-commerce platform, a CRM system, or a custom dashboard, we ensure that every web app we develop is fast, reliable, and user-friendly.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Our development approach is based on collaboration, with constant communication to ensure the app meets your specifications and business goals. We also prioritize security, data protection, and the integration of third-party services to enhance the functionality of your web app. By following agile practices, we continuously refine and update your web app to stay aligned with market trends and evolving user needs.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image16}
            alt="Web App Development"
            className="w-[600px] h-[550px] object-cover rounded-lg mt-[10px] ml-[120px]"
          />
        </div>
      </div>

      {/* Full Stack App Development Section */}
      <div className="grid md:grid-cols-2 items-center gap-24 mb-12 max-w-7xl mx-auto mt-[-70px]">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image17}
            alt="Full Stack App Development"
            className="w-[680px] h-[680px] object-cover mt-[25px] ml-[-50px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full mb-[100px] ml-[30px] mt-[150px]">
          <h2 className="text-4xl font-default text-grey-200  mt-[30px]">
            Full-Stack <span className="text-orange-400">App Development</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            We offer end-to-end full-stack app development, handling both the frontend and backend with seamless integration. Our team is skilled in technologies like the MERN stack (MongoDB, Express, React, Node.js), enabling us to deliver apps with rich user interfaces and dynamic data management. Full-stack development allows us to create applications that are not only visually appealing but also scalable and easy to maintain.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            Our full-stack approach ensures that your app is developed efficiently, with consistent functionality and fast delivery. By using a single tech stack for both frontend and backend, we streamline the development process, reducing complexities and improving collaboration. Whether you need a new app built from scratch or an existing one revamped, our full-stack services provide you with a seamless, high-quality solution that supports your business objectives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mobcontent;
     
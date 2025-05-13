import React from "react";
import image4 from "../assets/Image/4590506.jpg";
import image5 from "../assets/Image/4673526.jpg";
import image6 from "../assets/Image/5397869.jpg";

const Webcontents = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-[30px]">
        Expert <span className="text-blue-800">Website Development Services</span>
      </h1>

      {/* Front-End Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-7xl mx-auto mt-[-40px]">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image4}
            alt="Frontend Development"
            className="w-[600px] h-[600px] object-cover rounded-lg mb-2 mr-[100px]"
          />
        </div>
        <div className="flex flex-col justify-center w-[600px] ml-[57px]">
          <h2 className="text-4xl font-default text-gray-800  mt-[30px]">
            Seamless <span className="text-orange-400">Front-End Design</span>
          </h2>
          <p className="text-gray-600 mt-3 text-lg text-justify mt-[30px]">
            Our front-end development services focus on crafting immersive and intuitive digital experiences tailored to your target audience. Using the latest technologies like React.js, Tailwind CSS, and Next.js, we build responsive interfaces that look and perform consistently across all devices and browsers. Our designers work closely with developers to translate brand identity into clean UI/UX layouts, complete with animation, transitions, and accessibility best practices. From landing pages to enterprise dashboards, every pixel is thoughtfully placed to guide users and boost engagement.
          </p>
          <p className="text-gray-600 mt-3 text-lg text-justify mt-[30px]">
            We adopt a mobile-first, performance-driven approach that ensures fast loading times, minimal bounce rates, and high SEO scores. Leveraging component-based design, reusable logic, and modular styling, we ensure your platform remains scalable and easy to maintain. Whether it's integrating third-party widgets or implementing user-centric features like dark mode, language localization, or real-time updates, our front-end architecture is designed to offer flexibility, speed, and a seamless user journey that turns visitors into loyal customers.
          </p>
        </div>
      </div>

      {/* Backend Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-10 max-w-7xl mx-auto mt-[-60px]">
        <div className="flex flex-col justify-center w-full ml-[-40px]">
          <h2 className="text-4xl font-default text-gray-800  mt-[30px]">
            Powerful <span className="text-orange-400">Back-End Development</span>
          </h2>
          <p className="text-gray-600 mt-3 text-lg text-justify mt-[30px]">
            Our back-end development is centered around building secure, scalable, and high-performance server-side applications. Using robust environments like Node.js, Express, and RESTful APIs, we manage all the data, business logic, and user authentication behind the scenes. We structure clean, modular codebases that are easy to scale and maintain, integrate relational and NoSQL databases (MySQL, PostgreSQL, MongoDB), and implement best practices for data integrity, caching, logging, and real-time communication.
          </p>
          <p className="text-gray-600 mt-3 text-lg text-justify mt-[30px]">
            Whether you're launching a content platform, an eCommerce backend, or a custom CRM solution, our team ensures your app functions smoothly with secure token-based authentication, encrypted storage, and optimized database queries. We also implement background job queues, file uploads, error handling, and multi-tenant architecture when needed. Our DevOps-friendly approach supports API documentation, CI/CD deployment, and cloud integration, enabling your application to grow and evolve seamlessly as your user base expands.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image5}
            alt="Backend Development"
            className="w-[600px] h-[600px] object-cover rounded-lg mt-[50px] ml-[50px]"
          />
        </div>
      </div>

      {/* Full-stack / Custom Applications */}
      <div className="grid md:grid-cols-2 items-center gap-24 mb-12 max-w-7xl mx-auto mt-[-60px]">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image6}
            alt="Custom Web Applications"
            className="w-[810px] h-[620px] object-cover mt-[50px] ml-[-80px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full mb-[100px] ml-[30px]">
          <h2 className="text-4xl font-default text-gray-800 mb-2 mt-16">
            Tailored <span className="text-orange-400">Full-Stack Solutions</span>
          </h2>
          <p className="text-gray-600 mt-3 text-lg text-justify mt-[30px]">
            Our full-stack web development offering brings together the best of both front-end and back-end technologies to deliver end-to-end solutions. We build custom applications designed to match your exact business logic, whether you're launching a SaaS platform, internal dashboard, client portal, or real-time web app. From admin panels to customer interfaces, every layer is crafted with performance, usability, and adaptability in mind. We ensure seamless API integration, responsive UIs, robust data handling, and optimized cloud deployment to create powerful digital tools tailored to your goals.
          </p>
          <p className="text-gray-600 mt-3 text-lg text-justify mt-[30px]">
            Our stack includes modern technologies like React, Node.js, Express, and MySQL—along with integrations for payment gateways, authentication providers, cloud storage, and analytics tools. With Agile development cycles, version control, and iterative testing, we keep you involved throughout the process. All of our apps are built with future-proofing in mind, enabling easy upgrades, third-party add-ons, and long-term maintainability. Whether you're starting from scratch or modernizing an existing platform, our full-stack team ensures fast delivery, reliable performance, and scalable architecture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Webcontents;

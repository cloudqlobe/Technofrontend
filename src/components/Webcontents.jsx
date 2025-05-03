import React from "react";
import image4 from "../assets/Image/4590506.jpg";
import image5 from "../assets/Image/4673526.jpg";
import image6 from "../assets/Image/5397869.jpg";

const Webcontents = () => {
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
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-4xl text-gray-700 mb-4">
            Interactive <span className="text-blue-600">Frontend Interfaces</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-3">
            We specialize in crafting stunning, responsive front-end interfaces using modern frameworks like React, Vue, and Next.js. Every component is tailored to create smooth navigation, fast rendering, and a visually appealing layout across devices.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-3">
            Our design-first approach ensures every visual element has a functional purpose. From landing pages to multi-page applications, we aim to deliver interfaces that are fast, flexible, and highly interactive.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            We implement UI libraries and CSS frameworks like Tailwind and Bootstrap, ensuring consistency in design, responsiveness in layout, and scalability for future enhancements.
          </p>
        </div>
      </div>

      {/* Backend Development Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-10 max-w-7xl mx-auto mt-[-60px]">
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-4xl text-gray-700 mb-4">
            Powerful <span className="text-blue-600">Backend Systems</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-3">
            We build robust backend systems using Node.js, Express, and other modern tech stacks to ensure your web applications run smoothly and securely. Our APIs are structured for easy integration and optimized performance.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-3">
            Features like user authentication, role-based access control, session handling, and database security are built into every solution we provide. Our goal is to deliver backends that are not only functional but also secure and scalable.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Whether you're connecting to SQL databases like MySQL and PostgreSQL or NoSQL options like MongoDB, we handle data flow and logic management with precision. Plus, we integrate third-party services, payment gateways, and cloud APIs effortlessly.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image5}
            alt="Backend Development"
            className="w-[80%] h-[450px] object-cover rounded-lg mt-[50px]"
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
        <div className="flex flex-col justify-center w-full mb-[100px]">
          <h2 className="text-4xl text-gray-700 mb-4 ml-2 mt-16">
            Custom <span className="text-blue-600">Web Applications</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg ml-4 mb-3">
            We develop tailored web solutions for businesses across all domains. Whether it's a CRM system, an internal admin dashboard, or a customer-facing portal, we combine frontend and backend technologies to bring your ideas to life.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg ml-4 mb-3">
            Using the MERN stack and beyond, our custom applications feature intuitive UIs, data-driven logic, and modular code architecture. We focus on code reusability, microservices, and scalable builds that grow with your business.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg ml-4">
            Our development process involves wireframing, prototyping, API planning, and performance testing to ensure each solution we ship is production-ready. We also support CI/CD pipelines, containerization (Docker), and cloud deployments (AWS, Vercel, DigitalOcean).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Webcontents;

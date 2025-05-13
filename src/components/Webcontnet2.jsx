import React from "react";
import image8 from "../assets/Image/4564484.jpg";
import image9 from "../assets/Image/6072194.jpg";

const Webcontent2 = () => {
  return (
    <div className="bg-white text-gray-900 px-6 md:px-12 py-12 space-y-24">
      {/* Main Heading */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-8 mt-[30px]">
        <span className="text-black">Reliable &</span>{" "}
        <span className="text-blue-800">Scalable Web Development Solutions</span>
      </h1>

      {/* Section 1: Modern Web Development */}
      <div className="grid md:grid-cols-2 items-center gap-12">
        <div className="flex justify-center ml-[-50px]">
          <img
            src={image8}
            alt="Modern Web Development"
            className="w-[650px] h-[450px] object-cover rounded-lg mt-[30px] ml-[-40px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full ml-[-30px] mt-[-150px]">
          <h2 className="text-4xl font-default text-grey-200 mb-2  mt-16">
            Modern <span className="text-orange-400">Web Development</span>
          </h2>
          <p className="text-gray-600 mt-3 text-lg text-justify mt-[30px]">
            In today's fast-paced digital world, having a high-performance, responsive, and user-friendly website is crucial. Our team uses cutting-edge frameworks such as React, Next.js, and Tailwind CSS to craft beautiful, interactive user interfaces that function seamlessly across all devices. From intuitive layouts to lightning-fast loading times, we prioritize the user experience at every step. We implement best practices in UI/UX design and use performance optimization techniques such as lazy loading, code splitting, and minimalistic component structure.
          </p>
          <p className="text-gray-600 mt-3 text-lg text-justify mt-[30px]">
            Beyond just aesthetics, we ensure your web platform is technically sound and SEO-friendly. We integrate tools like structured data, semantic HTML, and SSR (server-side rendering) where needed to maximize discoverability. Our development process includes automated testing, continuous integration, and clean code principles to maintain long-term scalability. Whether you need a simple landing page or a full-fledged interactive platform, our web development practices ensure you’re building on a solid, future-ready foundation.
          </p>
        </div>
      </div>

      {/* Section 2: Custom Web Applications */}
      <div className="grid md:grid-cols-2 items-center gap-12 mt-[100px]">
        <div className="ml-[20px]">
          <h2 className="text-4xl font-default text-grey-200 mb-2 ml-[25px] mt-[-50px]">
            <span className="text-black"> Web Applications</span>
            <span className="text-orange-400"> & Scalable Architecture</span>
          </h2>
          <p className="text-gray-600 mt-3 text-lg text-justify mt-[30px] ml-[30px]">
            We don’t believe in one-size-fits-all solutions. Our custom web applications are engineered to align precisely with your business logic, workflow, and goals. From CRMs and booking systems to e-commerce platforms and internal dashboards, every solution is built from scratch to meet your operational needs. We focus on clean interfaces, robust functionality, and modular coding structures that allow for easy updates and future expansion.
          </p>
          <p className="text-gray-600 mt-3 text-lg text-justify mt-[30px] ml-[30px]">
            On the backend, we architect scalable and secure infrastructures using technologies like Node.js, Express, MySQL, and MongoDB. We ensure proper API architecture, database normalization, and security protocols like JWT authentication and role-based access control. Our apps are designed for high performance under load, support cloud deployments, and are optimized for data integrity and real-time processing where needed. As your traffic grows, your app grows with it—reliably and efficiently.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={image9}
            alt="Custom Web Applications"
            className="w-[650px] h-[650px] object-cover rounded-lg ml-[30px] mt[-30px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Webcontent2;

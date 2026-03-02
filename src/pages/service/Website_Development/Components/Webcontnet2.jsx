import React from "react";
import image8 from "../../../../assets/Image/4564484.jpg";
import image9 from "../../../../assets/Image/6072194.jpg";

const Webcontent2 = () => {
  return (
    <div className="bg-white text-gray-900 px-4 sm:px-6 md:px-12 py-8 md:py-12 space-y-12 md:space-y-24">
      {/* Main Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-6 md:mb-8 mt-6 md:mt-[30px]">
        <span className="text-black">Reliable &</span>{" "}
        <span className="text-blue-800">Scalable Web Development Solutions</span>
      </h2>

      {/* Section 1: Modern Web Development */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12 text-center md:text-left">
        <div className="flex justify-center md:ml-[-50px] order-1 md:order-1">
          <img
            src={image8}
            alt="Modern Web Development"
            className="w-full max-w-[500px] md:w-[650px] h-auto md:h-[450px] object-cover rounded-lg md:mt-[30px] md:ml-[-40px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full md:ml-[-30px] md:mt-[-150px] order-2 md:order-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-default text-grey-200 mb-2 md:mt-16">
            Modern <span className="text-orange-400">Web Development</span>
          </h2>
          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            In today's fast-paced digital world, having a high-performance, responsive, and user-friendly website is crucial. Our team uses cutting-edge frameworks such as React, Next.js, and Tailwind CSS to craft beautiful, interactive user interfaces that function seamlessly across all devices. From intuitive layouts to lightning-fast loading times, we prioritize the user experience at every step. We implement best practices in UI/UX design and use performance optimization techniques such as lazy loading, code splitting, and minimalistic component structure.
          </p>
          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            Beyond just aesthetics, we ensure your web platform is technically sound and SEO-friendly. We integrate tools like structured data, semantic HTML, and SSR (server-side rendering) where needed to maximize discoverability. Our development process includes automated testing, continuous integration, and clean code principles to maintain long-term scalability. Whether you need a simple landing page or a full-fledged interactive platform, our web development practices ensure you're building on a solid, future-ready foundation.
          </p>
        </div>
      </div>

      {/* Section 2: Custom Web Applications */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12 md:mt-[100px] text-center md:text-left">
        <div className="md:ml-[20px] order-2 md:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-default text-grey-200 mb-2 md:mt-[-50px]">
            <span className="text-black"> Web Applications</span>
            <span className="text-orange-400"> & Scalable Architecture</span>
          </h2>
          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            We don't believe in one-size-fits-all solutions. Our custom web applications are engineered to align precisely with your business logic, workflow, and goals. From CRMs and booking systems to e-commerce platforms and internal dashboards, every solution is built from scratch to meet your operational needs. We focus on clean interfaces, robust functionality, and modular coding structures that allow for easy updates and future expansion.
          </p>
          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            On the backend, we architect scalable and secure infrastructures using technologies like Node.js, Express, MySQL, and MongoDB. We ensure proper API architecture, database normalization, and security protocols like JWT authentication and role-based access control. Our apps are designed for high performance under load, support cloud deployments, and are optimized for data integrity and real-time processing where needed. As your traffic grows, your app grows with it—reliably and efficiently.
          </p>
        </div>
        <div className="flex justify-center order-1 md:order-2">
          <img
            src={image9}
            alt="Custom Web Applications"
            className="w-full max-w-[500px] md:w-[650px] h-auto md:h-[650px] object-cover rounded-lg md:ml-[30px] md:mt-[-30px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Webcontent2;
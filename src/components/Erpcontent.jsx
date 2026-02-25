import React from "react";
import image4 from "../assets/Image/5031659.jpg";
import image5 from "../assets/Image/10197785.jpg";
import image6 from "../assets/Image/5024152.jpg";

const Erpcontent = () => {
  return (
    <div className="w-full bg-white px-4 sm:px-8 lg:px-16 py-12">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-4xl text-center text-black lg:mb-20 mb-12">
        <span className="text-blue-800">Transform</span> Your Business with Our{" "}
        <span className="text-orange-400">ERP Solutions</span>
      </h2>

      {/* ===== Section 1 ===== */}
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto mb-16">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={image4}
            alt="ERP Frontend Development"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">
            Interactive{" "}
            <span className="text-orange-400">ERP User Interfaces</span>
          </h2>

          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            We specialize in crafting user-friendly, intuitive front-end
            interfaces tailored to your ERP system. Our designs focus on
            enhancing the user experience with easy navigation, fast loading
            times, and a responsive layout that adjusts seamlessly across
            devices. The goal is to provide users with a clean and interactive
            interface that streamlines their workflow and increases
            productivity.
          </p>

          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            We implement modern frameworks like React, Vue, and Angular to build
            dynamic ERP dashboards, inventory management screens, and real-time
            data visualizations. These tools help optimize the end-user
            experience while providing rich, interactive capabilities for
            managing business processes with minimal friction.
          </p>
        </div>
      </div>

      {/* ===== Section 2 ===== */}
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto mb-16">
        {/* Content First on Mobile */}
        <div className="order-2 md:order-1">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">
            Scalable{" "}
            <span className="text-orange-400">ERP Backend Systems</span>
          </h2>

          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            Our ERP backend solutions are built for scalability, security, and
            performance. By leveraging powerful frameworks like Node.js and
            Express, we create robust APIs that are highly performant, ensuring
            smooth data exchanges between the front-end and back-end of your ERP
            system. This design ensures that your ERP application can grow as
            your business expands, handling increasing data volume and
            complexity.
          </p>

          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            We prioritize the implementation of secure user authentication,
            role-based access control, and advanced data management tools. This
            ensures that your ERP system not only supports day-to-day business
            operations but also provides a secure platform for sensitive
            information. Additionally, the backend is optimized for seamless
            integration with third-party software, reducing friction and
            improving operational efficiency.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center order-1 md:order-2">
          <img
            src={image5}
            alt="ERP Backend Development"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg"
          />
        </div>
      </div>

      {/* ===== Section 3 ===== */}
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={image6}
            alt="Custom ERP Applications"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">
            Tailored <span className="text-orange-400">ERP Applications</span>
          </h2>

          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            We develop customized ERP systems designed specifically for your
            business. Whether you need an inventory management system, financial
            tracking, or a customer relationship management (CRM) module, we
            integrate the necessary functionalities into one cohesive system.
            Our custom ERP solutions are built to align perfectly with your
            business needs, automating manual processes, reducing errors, and
            improving efficiency.
          </p>

          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            Utilizing a full-stack development approach, our custom ERP
            applications combine front-end and back-end technologies to provide
            a seamless user experience. By using modern stacks like the MERN
            stack, we ensure your ERP system is scalable, flexible, and easy to
            maintain. Whether you are looking to improve internal workflows or
            provide a better experience for your clients, our tailored ERP
            solutions will support your business at every stage of growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Erpcontent;

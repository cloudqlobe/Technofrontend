import React from "react";
import image4 from "../assets/Image/4197677.jpg";
import image5 from "../assets/Image/6502432.jpg";
import image6 from "../assets/Image/5397869.jpg";

const Pmcontent = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-10">
        Website <span className="text-blue-800">Design & Development Solutions</span>
      </h1>

      {/* Website Design Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image4}
            alt="Website Design"
            className="w-[80%] h-[450px] object-cover rounded-lg mb-2 mr-[100px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-4xl text-gray-700 mb-4">Creative <span className="text-blue-600">Website Designs</span></h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-3">
            We believe great web design is the cornerstone of impactful digital presence. Our team focuses on crafting visually stunning layouts that not only look beautiful but also guide users intuitively through your content. From wireframes to final design, every step is focused on user experience and aesthetics.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Whether you're a startup or an established brand, we tailor our designs to reflect your identity and values. Expect responsive, pixel-perfect visuals that adapt across all devices—making your website accessible, engaging, and conversion-driven.
          </p>
        </div>
      </div>

      {/* Website Development Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-10 max-w-7xl mx-auto mt-[-20px]">
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-4xl text-gray-700 mb-4">Robust <span className="text-blue-600">Web Development</span></h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-3">
            Our development team builds powerful and scalable websites using clean, modular code and cutting-edge frameworks. We prioritize speed, security, and SEO optimization—ensuring your site performs flawlessly in real-world conditions.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            From static sites to dynamic applications, we deliver complete solutions with backend integrations, API connectivity, and database architecture. Each line of code is written with performance and long-term maintenance in mind.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image5}
            alt="Web Development"
            className="w-[100%] h-[450px] object-cover rounded-lg mt-[50px]"
          />
        </div>
      </div>

      {/* Custom Web Solutions Section */}
      <div className="grid md:grid-cols-2 items-center gap-24 mb-12 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image6}
            alt="Custom Web Solutions"
            className="w-[90%] h-[400px] object-cover mt-24"
          />
        </div>
        <div className="flex flex-col justify-center w-full mb-[100px]">
          <h2 className="text-4xl text-gray-700 mb-4 ml-2 mt-16">Tailored <span className="text-blue-600">Web Solutions</span></h2>
          <p className="text-gray-600 leading-relaxed text-lg ml-4 mb-3">
            Every business is different, and so are our solutions. We don’t believe in one-size-fits-all. Whether it’s a custom admin dashboard, a booking system, or unique customer workflows—our team works closely with you to understand your business logic and transform it into a seamless digital experience.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg ml-4">
            We specialize in creating future-ready websites that can grow with you. With performance-focused builds and scalable infrastructure, our web solutions are designed to evolve as your business expands.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pmcontent;

import React from "react";
import image8 from "../assets/Image/4564484.jpg";
import image9 from "../assets/Image/6072194.jpg";

const Webcontent2 = () => {
  return (
    <div className="bg-white text-gray-900 px-6 md:px-12 py-16 space-y-24">
      {/* Main Heading */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        <span className="text-black">SEO &</span>{" "}
        <span className="text-blue-800">Performance-Driven Web Development</span>
      </h1>

      {/* Section 1: SEO Optimization */}
      <div className="grid md:grid-cols-2 items-center gap-12 ">
        <div className="flex justify-center ml-[-50px]">
          <img
            src={image8}
            alt="SEO Strategy"
            className="w-[70%] h-[500px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full ml-[-40px]">
          <h2 className="text-4xl font-default text-grey-200 mb-2 ml-2 mt-16">SEO <span className="text-orange-400">Startegic Solutions</span></h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            We develop customized software to enhance efficiency and scalability. Our team creates tailored solutions, from mobile apps to web platforms, that seamlessly integrate with your existing systems, ensuring a smooth user experience. By working closely with you, we ensure the software aligns with your goals.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
            We provide regular updates and iterative improvements to keep your solutions relevant. Our expertise spans various industries, helping businesses optimize their digital presence and operational efficiency. Our services also include API development, enterprise software, and automation tools that enhance workflow management and enable businesses to scale effortlessly with cutting-edge technology.
          </p>
        </div>
      </div>

      {/* Section 2: Digital Solutions */}
      <div className="grid md:grid-cols-2 items-center gap-12 mb-[150px]">
        <div className="ml-[20px]">
          <h2 className="text-4xl font-default text-grey-200 mb-2 ml-2 mt-16">
            <span className="text-black">Empowering Businesses</span>{" "}
            <span className="text-orange-400">Through Digital Solutions</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px] ml-[10px]">
            Your digital journey deserves more than just a website — it needs a strategy. We create high-impact, custom-built digital ecosystems that go beyond aesthetics. From frontend frameworks like React and Next.js to backend systems like Node.js and MySQL, our stack is tailored to scale with your business.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px] ml-[10px]">
            We engineer portals, dashboards, booking systems, ecommerce platforms, and SaaS tools that empower teams and serve users with ease. Whether you need multilingual content, dynamic search, or role-based access control, we can build it from scratch — pixel-perfect and bug-free.
          </p>
        
         
        </div>
        <div className="flex justify-center">
          <img
            src={image9}
            alt="Digital Solutions"
            className="w-[90%] h-[500px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Webcontent2;

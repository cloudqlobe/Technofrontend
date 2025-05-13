import React from 'react';
import image16 from "../assets/Image/5370989.jpg";
import image17 from "../assets/Image/7706589.jpg";
import image18 from "../assets/Image/7724183.jpg";

const Designcontent = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-[30px]">
        Innovative <span className="text-blue-800">UI & UX Design Solutions</span>
      </h1>

      {/* UI Design Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-7xl mx-auto mt-[-40px]">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image18}
            alt="UI Design"
            className="w-[650px] h-[550px] object-cover rounded-lg ml-[-70px] mt-[50px]"
          />
        </div>
        <div className="flex flex-col justify-center w-[600px] ml-[58px]">
          <h2 className="text-4xl font-default text-grey-400 mt-[30px]">
            Creative <span className="text-orange-400">User Interfaces</span>
          </h2>
          <p className="text-gray-600 text-lg text-justify mt-[30px] leading-relaxing mt-[30px]">
            Our user interface (UI) design services focus on transforming ideas into visually stunning digital interfaces that captivate users from the first glance. We believe that the aesthetics of a product should not only be beautiful but purposeful—every color, font, and element must align with the brand’s identity and the user’s needs. From designing scalable UI systems to crafting pixel-perfect layouts, we ensure the experience remains consistent across devices and screen sizes.
          </p>
          <p className="text-gray-600 text-lg text-justify mt-[20px] leading-relaxing mt-[30px]">
            By using modern tools like Figma, Adobe XD, and component libraries, we streamline the design-to-development process, reducing delays and miscommunication. We also focus on visual hierarchy, intuitive navigation, and accessibility, ensuring that each interface feels clean, easy to use, and responsive. Whether it's a website, SaaS dashboard, or mobile app, our designs are engineered to leave a lasting visual and functional impression.
          </p>
        </div>
      </div>

      {/* UX Strategy Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-10 max-w-7xl mx-auto mt-[60px]">
        <div className="flex flex-col justify-center w-full ml-[-40px]">
          <h2 className="text-4xl font-default text-grey-200 mb-4 mt-[30px]">
            Strategic <span className="text-orange-400">UX Architecture</span>
          </h2>
          <p className="text-gray-600 text-lg text-justify mt-[20px] leading-relaxing mt-[30px]">
            Our UX strategy is rooted in understanding the behavior, expectations, and pain points of real users. We perform detailed research including persona creation, journey mapping, competitive analysis, and usability testing to ensure that every experience we design is purposeful and user-driven. The goal is to create frictionless experiences that guide users naturally toward their goals while aligning with your business objectives.
          </p>
          <p className="text-gray-600 text-lg text-justify mt-[20px] leading-relaxing mt-[30px]">
            Through strategic planning and iterative design, we map out smooth user flows, meaningful interactions, and smart content placements. We also consider accessibility, cognitive load, and emotional impact to ensure designs are not only functional but empathetic. Our UX deliverables include wireframes, interactive prototypes, and testing reports that help validate and improve user journeys in real-world scenarios.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image16}
            alt="UX Design"
            className="w-[600px] h-[600px] object-cover rounded-lg mt-[-30px] ml-[150px]"
          />
        </div>
      </div>

      {/* UI/UX Integration Section */}
      <div className="grid md:grid-cols-2 items-center gap-24 mb-12 max-w-7xl mx-auto mt-[60px]">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image17}
            alt="UI/UX Integration"
            className="w-[600px] h-[600px] object-cover mt-[-80px] ml-[-70px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full mb-[100px] ml-[30px]">
          <h2 className="text-4xl font-default text-grey-200 mb-2 mt-16">
            Unified <span className="text-orange-400">Design Experience</span>
          </h2>
          <p className="text-gray-600 text-lg text-justify mt-[30px] leading-relaxing">
            Our strength lies in seamlessly combining UI aesthetics with UX functionality to deliver a unified design system that elevates the entire digital experience. We don’t treat UI and UX as separate disciplines but as intertwined elements that together create powerful, user-friendly products. By integrating UI/UX from day one, we ensure that every visual decision reinforces usability and every interaction is rooted in brand storytelling.
          </p>
          <p className="text-gray-600 text-lg text-justify mt-[20px] leading-relaxing">
            Our end-to-end process includes planning, designing, testing, and refining based on user feedback and analytics. We focus on scalable design systems, real-time collaboration with developers, and optimization for multiple platforms. Whether launching a new product or redesigning an existing one, we craft cohesive digital experiences that not only look beautiful but also drive engagement, loyalty, and conversion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Designcontent;

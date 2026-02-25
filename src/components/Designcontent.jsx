import React from 'react';
import image16 from "../assets/Image/5370989.jpg";
import image17 from "../assets/Image/7706589.jpg";
import image18 from "../assets/Image/7724183.jpg";

const Designcontent = () => {
  return (
    <div className="min-h-screen w-full bg-white px-4 sm:px-6 md:px-12 py-10 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center text-black mb-12 mt-6">
        Innovative <span className="text-blue-800">UI & UX Design Solutions</span>
      </h2>

      {/* UI Design Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-8xl mx-auto px-4">

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={image18}
            alt="UI Design"
            className="w-full max-w-[380px] sm:max-w-[450px] md:max-w-[600px]
                       h-auto object-cover rounded-lg
                       md:mt-[50px] md:-ml-[100px]"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center w-full mt-6 md:mt-0">
          <h2 className="text-3xl md:text-4xl mt-4">
            Creative <span className="text-orange-400">User Interfaces</span>
          </h2>

          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            Our user interface (UI) design services focus on transforming ideas into visually stunning digital interfaces that captivate users from the first glance. We believe that the aesthetics of a product should not only be beautiful but purposeful—every color, font, and element must align with the brand's identity and the user's needs. From designing scalable UI systems to crafting pixel-perfect layouts, we ensure the experience remains consistent across devices and screen sizes.
          </p>

          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            By using modern tools like Figma, Adobe XD, and component libraries, we streamline the design-to-development process, reducing delays and miscommunication. We also focus on visual hierarchy, intuitive navigation, and accessibility, ensuring that each interface feels clean, easy to use, and responsive. Whether it's a website, SaaS dashboard, or mobile app, our designs are engineered to leave a lasting visual and functional impression.
          </p>
        </div>
      </div>


      {/* UX Strategy Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-8xl mx-auto px-4">

        {/* IMAGE (mobile first) */}
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src={image16}
            alt="UX Design"
            className="w-full max-w-[380px] sm:max-w-[450px] md:max-w-[600px]
                       h-auto object-cover rounded-lg
                       md:mt-[10px] md:ml-[120px]"
          />
        </div>

        {/* CONTENT */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl mt-4">
            Strategic <span className="text-orange-400">UX Architecture</span>
          </h2>

          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            Our UX strategy is rooted in understanding the behavior, expectations, and pain points of real users. We perform detailed research including persona creation, journey mapping, competitive analysis, and usability testing to ensure that every experience we design is purposeful and user-driven. The goal is to create frictionless experiences that guide users naturally toward their goals while aligning with your business objectives.
          </p>

          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            Through strategic planning and iterative design, we map out smooth user flows, meaningful interactions, and smart content placements. We also consider accessibility, cognitive load, and emotional impact to ensure designs are not only functional but empathetic. Our UX deliverables include wireframes, interactive prototypes, and testing reports that help validate and improve user journeys in real-world scenarios.
          </p>
        </div>
      </div>

      {/* UI/UX Integration Section */}

      <div className="grid md:grid-cols-2 items-center gap-8 md:gap-24 mb-12 max-w-8xl mx-auto px-4">

        {/* IMAGE */}
        <div className="order-1 md:order-1 flex justify-center">
          <img
            src={image17}
            alt="UI/UX Integration"
            className="w-full max-w-[400px] sm:max-w-[480px] md:max-w-[680px]
                       h-auto object-cover
                       md:mt-[25px] md:-ml-[50px]"
          />
        </div>

        {/* CONTENT */}
        <div className="order-2 md:order-2 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl md:text-4xl mt-4">
            Unified <span className="text-orange-400">Design Experience</span>
          </h2>

          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            Our strength lies in seamlessly combining UI aesthetics with UX functionality to deliver a unified design system that elevates the entire digital experience. We don't treat UI and UX as separate disciplines but as intertwined elements that together create powerful, user-friendly products. By integrating UI/UX from day one, we ensure that every visual decision reinforces usability and every interaction is rooted in brand storytelling.
          </p>

          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            Our end-to-end process includes planning, designing, testing, and refining based on user feedback and analytics. We focus on scalable design systems, real-time collaboration with developers, and optimization for multiple platforms. Whether launching a new product or redesigning an existing one, we craft cohesive digital experiences that not only look beautiful but also drive engagement, loyalty, and conversion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Designcontent;
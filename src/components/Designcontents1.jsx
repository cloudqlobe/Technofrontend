import React from 'react';
import image1 from '../assets/Image/4990129.jpg';
import image2 from '../assets/Image/5700262.jpg';

const Designcontents1 = () => {
  return (
    <section className="w-full px-6 md:px-16 py-16 bg-white">
      {/* Main Heading */}
      <h2 className="text-4xl text-center font-semibold text-black mb-16">
        Transformative UI & <span className='text-blue-800'>UX Design Solutions</span>
      </h2>

      {/* Section 1 - UI Design */}
      <div className="flex flex-col md:flex-row items-center mb-20">
        {/* Image */}
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <img
            src={image1}
            alt="UI Design Strategy"
            className="w-[70%] h-[500px] object-cover rounded-lg"
          />
        </div>
        {/* Content */}
        <div className="w-full md:w-7/12 md:pl-10">
          <h3 className="text-3xl font-default mb-4">
            <span className="text-black">Visually Cohesive,</span>{' '}
            <span className="text-blue-800">Functionally Fluent</span>
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our UI design philosophy centers on building interfaces that are not only visually appealing but also highly functional and user-friendly. We believe that the visual layer of your product should serve as a bridge between users and your technology. Our team leverages the latest design tools, including Figma, Adobe XD, and Sketch, to craft seamless and interactive user interfaces that reflect your brand’s essence and elevate the user experience.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Every color choice, icon, typography style, and layout decision is made with intention and purpose. We implement proven design systems that support scalability and consistency across all platforms. Whether you’re creating a complex enterprise dashboard or a minimal consumer-facing mobile app, we ensure that the interface is clean, modern, and highly intuitive. Our UI approach enhances usability while maintaining aesthetic appeal.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            The result? Visually unified, functionally smooth digital products that increase engagement, build trust, and make navigation effortless. We turn complexity into clarity and create interfaces that drive real results for your business.
          </p>
        </div>
      </div>

      {/* Section 2 - UX Design */}
      <div className="flex flex-col md:flex-row-reverse items-center">
        {/* Image */}
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <img
            src={image2}
            alt="UX Research and Prototyping"
            className="w-[70%] h-[500px] object-cover rounded-lg"
          />
        </div>
        {/* Content */}
        <div className="w-full md:w-7/12 md:pr-10">
          <h3 className="text-3xl font-default mb-4">
            <span className="text-black">Human-Centered UX</span>{' '}
            <span className="text-blue-800">& Strategic Interactions</span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            At the heart of great UX is empathy. We focus on understanding your users' needs, frustrations, and behaviors by conducting detailed research, user interviews, and analytics reviews. Through user personas, journey mapping, and flowcharts, we uncover insights that help us shape intuitive experiences grounded in real-world scenarios.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We design with intention, optimizing every interaction for clarity and purpose. From wireframes and interactive prototypes to final testing, our UX process ensures every screen transition and touchpoint is logical, meaningful, and frictionless. We pay close attention to content hierarchy, task flows, and accessibility so that all users, regardless of device or ability, have a consistent and satisfying experience.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our UX design approach doesn’t just stop at usability—it aims to create emotional connections. We design products that are not only easy to use but also delightful to interact with. By continuously testing and iterating based on feedback, we refine experiences that are user-first, business-aligned, and impact-driven.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Designcontents1;

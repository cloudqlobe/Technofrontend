import React from 'react';
import image16 from "../assets/Image/5370989.jpg";
import image17 from "../assets/Image/7706589.jpg";
import image18 from "../assets/Image/7724183.jpg";

const Designcontent = () => {
  return (
    <section className="w-full px-6 md:px-16 py-16 bg-white">
      <h2 className="text-center text-4xl font-semibold text-black mb-16">
        UI & UX <span className='text-blue-800'>Design Highlights</span>
      </h2>

      {/* Section 1 - Image Left */}
      <div className="flex flex-col md:flex-row items-center mb-20">
        <div className="w-full md:w-1/2 px-4 md:px-6 mb-6 md:mb-0">
          <img
            src={image18}
            alt="UI Consistency"
           className="w-[70%] h-[500px] object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-6">
          <h3 className="text-3xl font-default mb-4">
            <span className="text-black">Unified</span>{' '}
            <span className="text-blue-800">Design Systems</span>
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            In today’s digital landscape, consistency is key to user trust and brand recognition. We implement design systems that align typography, spacing, color schemes, and UI components across every screen to maintain visual balance and cognitive flow. A strong, unified system eliminates user guesswork by ensuring that similar actions have similar visuals and behaviors. Whether your users are engaging with your mobile app, desktop interface, or embedded platform, the experience feels seamlessly connected and instantly familiar.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            By embracing atomic design methodology, we break interfaces into reusable building blocks—atoms, molecules, organisms—which reduces redundancy and speeds up development time. With scalable style guides, every visual element adheres to a shared language, creating interfaces that are not only visually pleasing but also highly maintainable. Unified design translates into stronger brand authority, enhanced usability, and higher user satisfaction, no matter the platform.
          </p>
        </div>
      </div>

      {/* Section 2 - Image Right */}
      <div className="flex flex-col md:flex-row-reverse items-center mb-20">
        <div className="w-full md:w-1/2 px-4 md:px-6 mb-6 md:mb-0">
          <img
            src={image16}
            alt="Responsive Interactions"
           className="w-[70%] h-[500px] object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-6">
          <h3 className="text-3xl font-Default mb-4">
            <span className="text-black">Responsive</span>{' '}
            <span className="text-blue-800">User Interactions</span>
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Today’s users interact with products on a vast range of devices—from smartphones and tablets to ultrawide monitors and wearables. We design with responsiveness at the core, ensuring seamless adaptability of layout, typography, and controls across screen sizes and device orientations. Our interactions are designed not just for usability, but for engagement—combining meaningful animations, intuitive transitions, and immediate feedback to create an immersive and polished user journey.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Every animation serves a purpose. Whether it's a soft fade when opening a menu or a slide transition between pages, micro-interactions enrich the experience and guide the user without overwhelming them. By focusing on performance, touch-friendly zones, and intuitive gesture responses, we enhance accessibility and reduce user frustration. The result is a digital environment that feels alive, reacts intelligently, and builds an emotional bridge between product and user.
          </p>
        </div>
      </div>

      {/* Section 3 - Image Left */}
      <div className="flex flex-col md:flex-row items-center mb-20">
        <div className="w-full md:w-1/2 px-4 md:px-6 mb-6 md:mb-0">
          <img
            src={image17}
            alt="User-Centered Design"
            className="w-[70%] h-[500px] object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-6">
          <h3 className="text-3xl font-default mb-4">
            <span className="text-black">Human-Centric</span>{' '}
            <span className="text-blue-800">UX Principles</span>
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Our design philosophy revolves around the people using your product. Through user research, empathy mapping, and behavioral analysis, we ensure the UX journey solves real-world problems while minimizing effort and confusion. Accessibility is at the forefront—we build with inclusive design principles, making your digital experience usable for people of all abilities, including those using screen readers or navigating with assistive technologies.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            We guide users through intuitive paths, providing the right content at the right moment. From first-time onboarding to complex workflows, our goal is to reduce friction and increase delight at every stage. Emotional design is woven into the experience through thoughtful visuals, microcopy, and anticipation of user needs. The outcome? Products that don’t just function—they connect, convert, and create lasting loyalty.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Designcontent;

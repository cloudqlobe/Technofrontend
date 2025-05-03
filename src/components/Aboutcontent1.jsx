import React from 'react';
import image1 from '../assets/Image/6548442.jpg'; // Mission image
import image2 from '../assets/Image/10286772.jpg'; // Values image

const OurMissionContentPage = () => {
  return (
    <section className="w-full px-6 md:px-16 py-16 bg-white">
      {/* Main Heading */}
      <h2 className="text-4xl text-center font-bold text-blue-900 mb-16">
        Our Mission & Core Values
      </h2>

      {/* Section 1 - Our Mission */}
      <div className="flex flex-col md:flex-row items-center mb-20">
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <img
            src={image1}
            alt="Our Mission"
            className="w-full max-w-[350px] h-auto object-cover rounded-xl mx-auto"
          />
        </div>
        <div className="w-full md:w-7/12 md:pl-10">
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-blue-800">Empowering Businesses</span>{' '}
            <span className="text-yellow-500">Through Innovation</span>
          </h3>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            At TechnoMagic Solutions, our mission is to deliver innovative digital experiences that help businesses unlock their full potential. We combine strategy, creativity, and technology to craft solutions that drive impact.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            By putting people at the center of technology, we aim to build a more connected, efficient, and inspired future.
          </p>
        </div>
      </div>

      {/* Section 2 - Our Values */}
      <div className="flex flex-col md:flex-row-reverse items-center">
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <img
            src={image2}
            alt="Our Values"
            className="w-full max-w-[350px] h-auto object-cover rounded-xl mx-auto"
          />
        </div>
        <div className="w-full md:w-7/12 md:pr-10">
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-orange-500">Driven by Values</span>{' '}
            <span className="text-blue-800">& Built on Trust</span>
          </h3>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Integrity, creativity, and collaboration form the foundation of everything we do. We foster a culture that encourages teamwork and celebrates every milestone, big or small.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            Our commitment to excellence ensures that we not only meet expectations — we exceed them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurMissionContentPage;

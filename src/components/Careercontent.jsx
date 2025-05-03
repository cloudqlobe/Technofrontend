import React from 'react';
import image1 from '../assets/Image/5242970.jpg'; // Replace with your actual image
import image2 from '../assets/Image/6333412.jpg'; // Replace with your actual image

const CareerContent = () => {
  return (
    <section className="w-full px-6 md:px-16 py-16 bg-white mt-[-50px]">
      {/* Main Heading */}
      <h2 className="text-4xl text-center font-semibold text-gray-800 mb-16">
        Join Our <span className="text-blue-800">Innovative</span> Team
      </h2>

      {/* Section 1 - Image Left, Content Right */}
      <div className="flex flex-col md:flex-row items-center mb-20">
        {/* Image */}
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <img
            src={image1}
            alt="Career at Technomagic"
            className="w-full max-w-[350px] h-auto object-cover rounded-xl mx-auto"
          />
        </div>
        {/* Content */}
        <div className="w-full md:w-7/12 md:pl-10">
          <h3 className="text-2xl font-default mb-4">
            <span className="text-gray-600">Exciting Career</span>{' '}
            <span className="text-blue-500">Opportunities Await</span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            At Technomagic Solutions, we are always looking for bright and passionate individuals to join our team. Whether you're an experienced professional or just starting your career journey, we offer opportunities for growth, development, and the chance to make a real impact on exciting projects.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We believe in fostering a dynamic, collaborative work environment where creativity and innovation thrive. Our team members are our greatest asset, and we are committed to helping them grow professionally and personally while enjoying a fulfilling and rewarding career path.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Join us and be a part of a forward-thinking team that's driving the future of technology and making a difference in the world. Your contributions will help shape the future of software development and innovative solutions.
          </p>
        </div>
      </div>

      {/* Section 2 - Image Right, Content Left */}
      <div className="flex flex-col md:flex-row-reverse items-center">
        {/* Image */}
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <img
            src={image2}
            alt="Career Growth"
            className="w-full max-w-[350px] h-auto object-cover rounded-xl mx-auto"
          />
        </div>
        {/* Content */}
        <div className="w-full md:w-7/12 md:pr-10">
          <h3 className="text-2xl font-default mb-4">
            <span className="text-gray-500">Build Your</span>{' '}
            <span className="text-blue-800">Career with Us</span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Our commitment to your growth goes beyond just a paycheck. We provide ongoing training, mentorship, and a variety of career development programs to help you unlock your full potential. With access to a wealth of resources and a supportive team, you'll have everything you need to thrive.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Whether you're looking to specialize in a specific technology, develop leadership skills, or explore new career paths within the company, we offer the flexibility and support to help you achieve your goals.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Join our team and take the next step in your career. At Technomagic Solutions, you’ll have the opportunity to work on challenging projects, collaborate with experts in the field, and make a lasting impact on the company and its clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerContent;

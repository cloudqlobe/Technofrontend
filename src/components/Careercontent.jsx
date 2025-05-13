import React from 'react';
import image1 from '../assets/Image/5242970.jpg'; // Career team image
import image2 from '../assets/Image/6333412.jpg'; // Innovation/work culture image

const Careercontent = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-[30px]">
        Explore Career<span className="text-blue-800"> Opportunities at TechnoMagic Solutions</span>
      </h1>

      {/* Career Opportunities Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mt-[50px] max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image1}
            alt="Careers at TechnoMagic"
            className="w-[80%] h-[450px] object-cover rounded-lg mb-2"
          />
        </div>
        <div className="flex flex-col justify-center w-[600px] ml-[58px]">
          <h2 className="text-4xl font-default text-grey-400 mt-[30px]">
            Join Our <span className="text-orange-400">Dynamic Team</span>
          </h2>
          <p className="text-gray-600 text-lg text-justify mt-[30px]">
            At TechnoMagic Solutions, we don’t just offer jobs — we provide meaningful career paths that empower individuals to reach their full potential. We believe in creating an environment where ambition meets opportunity, and ideas flourish into innovations that shape the industries we serve. As part of our team, you’ll collaborate with talented minds who are driven by curiosity and a passion for solving complex challenges using technology as a force for good.
          </p>
          <p className="text-gray-600 text-lg text-justify mt-[30px]">
            Whether you're a seasoned developer, a creative designer, a strategic marketer, or a business analyst, you’ll find opportunities here to grow, lead, and contribute to high-impact projects. Our roles span across dynamic sectors like fintech, AI, health tech, and enterprise automation. Each project is a stepping stone toward not just professional growth, but also personal development, thanks to our mentorship programs, cross-functional collaboration, and leadership initiatives.
          </p>
        </div>
      </div>

      {/* Culture & Work Environment Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mt-[140px] max-w-7xl mx-auto">
        <div className="flex flex-col justify-center w-full ml-[-45px]">
          <h2 className="text-4xl font-default text-grey-200 mt-[30px]">
            Work Culture at <span className="text-orange-400">TechnoMagic</span>
          </h2>
          <p className="text-gray-600 text-lg text-justify mt-[30px]">
            Our workplace culture thrives on transparency, innovation, and mutual respect. We believe that great work happens when people feel supported, trusted, and encouraged to think outside the box. That’s why we emphasize open communication, continuous feedback, and flat team structures that break down barriers between departments. Everyone has a seat at the table, and every idea is given room to grow.
          </p>
          <p className="text-gray-600 text-lg text-justify mt-[30px]">
            Life at TechnoMagic is about more than just work — it’s about community. Our inclusive, people-first environment ensures you’re not only working toward professional success but also enjoying a balanced, fulfilling experience along the way. We host tech meetups, innovation jams, wellness programs, and social events to keep our team energized and inspired. No matter where you come from, you’ll find a culture that celebrates diversity, respects individuality, and values collaboration.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image2}
            alt="Team Culture"
            className="w-[85%] h-[450px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Careercontent;

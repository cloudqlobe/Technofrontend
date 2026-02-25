import React from 'react';
import image1 from '../assets/Image/7056551.jpg';
import image2 from '../assets/Image/9628536.jpg';

const Techcontent1 = () => {
  return (
    <div className="bg-white text-gray-900 px-4 sm:px-6 md:px-12 py-8 md:py-12 space-y-12 md:space-y-24">
      <h2 className="text-4xl text-center text-black mb-8 mt-[30px]">
        Expert <span className="text-blue-800">Technology Consultancy</span> for Future-Ready Businesses
      </h2>

      {/* Tech Consultancy Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-8xl mx-auto px-4">

        {/* Image */}
        <div className="order-1 md:order-1 flex justify-center">
          <img
            src={image1}
            alt="Tech Strategy"
            className="w-full max-w-md md:max-w-lg h-auto rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="order-2 md:order-2 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-default text-gray-700 mt-6 md:mt-0 mb-5">
            Strategic <span className="text-orange-400">Tech Consultancy</span>
          </h2>

          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            Our technology consultancy services are crafted to help businesses unlock the full potential of their digital capabilities. By analyzing your current infrastructure, workflows, and strategic goals, we deliver tailored roadmaps that improve efficiency, reduce costs, and support sustainable innovation. Whether you're modernizing legacy systems, moving to the cloud, or exploring automation, we act as your technology partner to align every decision with measurable business outcomes. We ensure that your technology investments align with evolving market needs, driving both performance and growth across all departments.
          </p>

          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            We collaborate with organizations across industries to guide critical areas such as IT modernization, digital infrastructure, and secure software adoption. Our expertise blends technical insight with industry context to help you adapt quickly, reduce risks, and scale confidently. Through smart, scalable, and forward-thinking solutions, we ensure your business is future-ready and positioned to lead in a fast-changing digital landscape. From strategic planning to execution, we remain committed to delivering technology frameworks that evolve with your business and generate long-term value.
          </p>
        </div>

      </div>


      {/* Digital Transformation Section */}

      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-8xl mx-auto px-4">

        {/* Image */}
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src={image2}
            alt="Digital Advisory"
            className="w-full max-w-md md:max-w-lg h-auto rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h2 className="text-3xl md:text-zxl font-default text-gray-700 mt-6 md:mt-0 mb-7">
            Digital <span className="text-orange-400">Transformation Advisory</span>
          </h2>

          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            Embracing digital transformation is no longer optional—it’s essential for survival and success in today’s fast-paced world. We help businesses redesign their operational models and customer experiences by integrating disruptive technologies such as AI, machine learning, IoT, and robotic process automation. From reimagining legacy systems to scaling cloud-based solutions, we guide your transformation journey every step of the way. Our approach ensures that innovation is not only visionary but also practical, empowering you to stay agile, competitive, and prepared for future challenges. By aligning transformation with your core objectives, we help you extract more value from every digital initiative and drive sustainable business growth.
          </p>

          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            Our advisory services focus on identifying digital gaps, prioritizing initiatives, and fostering a culture of innovation. We ensure that your team is prepared to thrive in a digitally-driven environment with structured planning, agile execution, and continuous improvement. By aligning strategy with day-to-day operations, we embed lasting change and equip your organization to adapt, scale, and lead confidently in a tech-driven market. Our consultants work closely with stakeholders at all levels to build a strong digital foundation that supports long-term resilience, innovation, and measurable success.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Techcontent1;

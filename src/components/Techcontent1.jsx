import React from 'react';
import image1 from '../assets/Image/7056551.jpg';
import image2 from '../assets/Image/9628536.jpg';

const Techcontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-[30px]">
        Expert <span className="text-blue-800">Technology Consultancy</span> for Future-Ready Businesses
      </h1>

      {/* Tech Consultancy Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-8 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image1}
            alt="Tech Strategy"
            className="w-[750px] h-[650px] object-cover rounded-lg mt-[30px] ml-[-130px]"
          />
        </div>
        <div className="flex flex-col justify-center w-[600px] ml-[58px]">
          <h2 className="text-4xl font-default text-grey-400  mt-[30px]">
            Strategic <span className="text-orange-400">Tech Consultancy</span>
          </h2>
          <p className="text-gray-600 leading-relaxing text-lg text-justify mt-[30px]">
  Our technology consultancy services are crafted to help businesses unlock the full potential of their digital capabilities. By analyzing your current infrastructure, workflows, and strategic goals, we deliver tailored roadmaps that improve efficiency, reduce costs, and support sustainable innovation. Whether you're modernizing legacy systems, moving to the cloud, or exploring automation, we act as your technology partner to align every decision with measurable business outcomes. We ensure that your technology investments align with evolving market needs, driving both performance and growth across all departments.
</p>

<p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
  We collaborate with organizations across industries to guide critical areas such as IT modernization, digital infrastructure, and secure software adoption. Our expertise blends technical insight with industry context to help you adapt quickly, reduce risks, and scale confidently. Through smart, scalable, and forward-thinking solutions, we ensure your business is future-ready and positioned to lead in a fast-changing digital landscape. From strategic planning to execution, we remain committed to delivering technology frameworks that evolve with your business and generate long-term value.
</p>



        </div>
      </div>

      {/* Digital Transformation Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-8 max-w-7xl mx-auto mt-[70px]">
        <div className="flex flex-col justify-center w-full ml-[-45px]">
          <h2 className="text-4xl font-default text-grey-200  mt-[30px]">
            Digital <span className="text-orange-400">Transformation Advisory</span>
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
  Embracing digital transformation is no longer optional—it’s essential for survival and success in today’s fast-paced world. We help businesses redesign their operational models and customer experiences by integrating disruptive technologies such as AI, machine learning, IoT, and robotic process automation. From reimagining legacy systems to scaling cloud-based solutions, we guide your transformation journey every step of the way. Our approach ensures that innovation is not only visionary but also practical, empowering you to stay agile, competitive, and prepared for future challenges. By aligning transformation with your core objectives, we help you extract more value from every digital initiative and drive sustainable business growth.
</p>

<p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
  Our advisory services focus on identifying digital gaps, prioritizing initiatives, and fostering a culture of innovation. We ensure that your team is prepared to thrive in a digitally-driven environment with structured planning, agile execution, and continuous improvement. By aligning strategy with day-to-day operations, we embed lasting change and equip your organization to adapt, scale, and lead confidently in a tech-driven market. Our consultants work closely with stakeholders at all levels to build a strong digital foundation that supports long-term resilience, innovation, and measurable success.
</p>


        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image2}
            alt="Digital Advisory"
            className="w-[600px] h-[600px] object-cover rounded-lg mt-[70px] ml-[130px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Techcontent1;

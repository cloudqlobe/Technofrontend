import React from "react";
import {
  FaUserGraduate,
  FaLaughBeam,
  FaMoneyBillWave,
  FaUsers,
  FaLanguage,
  FaHandHoldingHeart,
} from "react-icons/fa";
import image6 from "../assets/Image/-robot-promotion-drink-with-isolated_38049140.png";

const benefits = [
  {
    icon: <FaUserGraduate className="text-orange-600" size={30} />,
    title: "Professional Growth",
    description:
      "Get enormous opportunities of learning and growth. Continue to develop your skills and expand your personal and professional network.",
  },
  {
    icon: <FaLaughBeam className="text-orange-600" size={30} />,
    title: "Fun Activities & Events",
    description:
      "Enjoy weekly fun activities and monthly treats. We also celebrate special occasions, organize contests, and throw fun events & parties.",
  },
  {
    icon: <FaMoneyBillWave className="text-orange-600" size={30} />,
    title: "Competitive Salaries",
    description:
      "Get paid what you deserve. We offer competitive salaries based on role and position with yearly reviews for career advancement.",
  },
  {
    icon: <FaUsers className="text-orange-600" size={30} />,
    title: "Congenial Office & Culture",
    description:
      "Work in an open environment & culture which promotes collaboration, with top-notch office furniture, equipment, and facilities.",
  },
  {
    icon: <FaLanguage className="text-orange-600" size={30} />,
    title: "Improve Personality & English",
    description:
      "If your English isn’t as advanced as your other skills, you can learn & improve yourself while working at Technomagic Solutions.",
  },
  {
    icon: <FaHandHoldingHeart className="text-orange-600" size={30} />,
    title: "Give Back to the Community",
    description:
      "Be a part of CSR activities like blood donation, fundraising, visiting schools etc., and contribute to society.",
  },
];

const Careeranimation = () => {
  return (
    <div className="bg-[#1E3A8A] py-20 px-6 sm:px-12">
      {/* Top Section with Image & Text (Constrained Width) */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side Content */}
          <div className="lg:w-1/2 text-center lg:text-left mt-[-150px]">
          <h2 className="text-4xl font-semibold text-yellow-400 mb-6 ml-[-40px]">
  Why <span className="text-blue-600">TechnoMagic Solutions</span>
</h2>
<p className="text-lg text-orange-300 mb-6 text-justify leading-relaxing ml-[-40px]">
  TechnoMagic Solutions offers competitive salaries and a growth-focused environment where innovation and integrity thrive. We prioritize a healthy work-life balance, value-driven leadership, and collaborative culture. Our team benefits from mentorship, flexibility, and continuous learning. Join us to build a rewarding and future-ready career.
</p>


          </div>

          {/* Right Side Image */}
          <div className="lg:w-1/2">
            <img
              src={image6}
              alt="Technomagic Solutions"
              className="w-[400px] h-[400px] ml-[90px]"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section with Benefits (Wide Width) */}
      <div className="mt-20 w-[1400px] px-4 sm:px-6 ml-[5px]">
        <div className="w-full bg-blue-800 py-12 px-6 rounded-xl">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition"
              >
                <div className="bg-orange-100 rounded-full p-3">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0a1d56] mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careeranimation;

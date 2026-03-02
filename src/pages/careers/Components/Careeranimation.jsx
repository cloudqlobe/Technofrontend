import React from "react";
import {
  FaUserGraduate,
  FaLaughBeam,
  FaMoneyBillWave,
  FaUsers,
  FaLanguage,
  FaHandHoldingHeart,
} from "react-icons/fa";
import image6 from "../../../assets/Image/-robot-promotion-drink-with-isolated_38049140.png";

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
      "If your English isn't as advanced as your other skills, you can learn & improve yourself while working at Codo Stack.",
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
    <div className="bg-[#1E3A8A] py-12 md:py-20 px-4 sm:px-6 md:px-12">

      {/* Top Section with Image & Text */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* Image: top on mobile, right on desktop */}
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
            <img
              src={image6}
              alt="Codo Stack"
              className="w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] object-contain"
            />
          </div>

          {/* Text: below image on mobile, left on desktop */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-yellow-400 mb-4 md:mb-6">
              Why <span className="text-blue-300">Codo Stack</span>
            </h2>
            <p className="text-base sm:text-lg text-orange-300 mb-6 text-justify leading-relaxed">
              Codo Stack offers competitive salaries and a growth-focused environment where innovation and integrity thrive. We prioritize a healthy work-life balance, value-driven leadership, and collaborative culture. Our team benefits from mentorship, flexibility, and continuous learning. Join us to build a rewarding and future-ready career.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section with Benefits */}
      <div className="mt-12 md:mt-20 max-w-7xl mx-auto px-0">
        <div className="w-full bg-blue-800 py-10 md:py-12 px-4 sm:px-6 rounded-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 md:p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition"
              >
                <div className="bg-orange-100 rounded-full p-3 shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-[#0a1d56] mb-1">
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
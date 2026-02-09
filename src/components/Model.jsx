import { useState } from "react";
import {
  FaPython,
  FaJava,
  FaReact,
  FaRust,
  FaNodeJs,
  FaDocker,
  FaDatabase,
  FaMagento,
  FaAws,
  FaGoogle,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const iconData = [
  { Icon: FaReact, bgColor: "bg-blue-500" },
  { Icon: FaNodeJs, bgColor: "bg-green-700" },
  { Icon: FaPython, bgColor: "bg-yellow-500" },
  { Icon: FaJava, bgColor: "bg-red-600" },
  { Icon: FaRust, bgColor: "bg-orange-500" },
  { Icon: FaDatabase, bgColor: "bg-gray-700" },
  { Icon: SiMongodb, bgColor: "bg-green-600" },
  { Icon: SiExpress, bgColor: "bg-black" },
  { Icon: FaDocker, bgColor: "bg-blue-400" },
  { Icon: FaMagento, bgColor: "bg-red-700" },
  { Icon: FaAws, bgColor: "bg-yellow-500" },
  { Icon: FaGoogle, bgColor: "bg-red-500" },
];

const Model = () => {

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  company: "",
  message: "",
});

const [submitted, setSubmitted] = useState(false);

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  setSubmitted(true);
  setFormData({ name: "", email: "", company: "", message: "" });
};


  return (
    <div className="bg-white min-h-screen px-4 sm:px-6 xl:p-16 font-sans flex flex-col items-center overflow-hidden">

      {/* Main Section */}
      <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center w-full xl:space-x-28">

        {/* LEFT SIDE */}
        <div className="flex flex-col w-full xl:w-1/2 text-center xl:text-left mt-10 xl:relative xl:left-[-100px]">
          <h3 className="text-2xl text-center sm:text-3xl xl:text-4xl font-semibold text-gray-900 mb-6 xl:mt-[20px]">
            Code the Future: Build, Scale & Innovate
            <span className="text-orange-500 block">
              Next-Gen Technologies
            </span>
          </h3>

          {/* ICON GRID */}
          <div
            className="
              mt-10
              grid
              grid-cols-3
              sm:grid-cols-4
              md:grid-cols-5
              xl:grid-cols-6
              gap-6
              sm:gap-8
              xl:gap-14
              xl:mt-20
              xl:ml-[25px]
              justify-items-center
            "
          >
            {iconData.map(({ Icon, bgColor }, index) => (
              <div
                key={index}
                className={`
                  w-[70px] h-[70px]
                  sm:w-[80px] sm:h-[80px]
                  xl:w-[90px] xl:h-[90px]
                  flex items-center justify-center
                  ${bgColor}
                  text-white
                  text-3xl xl:text-4xl
                  shadow-md
                  transform transition-all duration-300
                  hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-gray-400
                `}
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE – QUOTE FORM */}
        <div
          className="
            bg-white
            p-8 sm:p-10 mb-7
            shadow-lg
            w-full max-w-[400px]
            border-2 border-orange-300
            flex flex-col
            rounded-none
            mt-12 xl:mt-0
            transform transition-all duration-300 hover:scale-105
            xl:relative xl:right-[-66px]
          "
        >
          <h3 className="text-2xl xl:text-3xl font-semibold text-gray-900 text-center mb-4">
            Get a Free Quote
          </h3>

          <p className="text-gray-600 text-center mb-4 text-sm xl:text-base">
            Let's craft cutting-edge solutions tailored to your needs.
          </p>
<form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
  <input
    name="name"
    value={formData.name}
    onChange={handleChange}
    placeholder="Your Name"
    className="p-3 border shadow-md"
    required
  />

  <input
    name="email"
    type="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Your Email"
    className="p-3 border shadow-md"
    required
  />

  <input
    name="company"
    value={formData.company}
    onChange={handleChange}
    placeholder="Company Name"
    className="p-3 border shadow-md"
  />

  <textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    placeholder="Describe your requirements"
    className="p-3 border shadow-md h-20"
    required
  />

  <button className="bg-blue-500 text-white py-3 text-lg font-semibold hover:bg-blue-600 transition shadow-md">
    Submit
  </button>

  {submitted && (
    <p className="text-green-600 text-center font-medium mt-3">
      ✅ Submitted successfully! We’ll contact you soon.
    </p>
  )}
</form>

        </div>

      </div>
    </div>
  );
};

export default Model;

import React, { useState, useEffect } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPhoneAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { Mail, MessageSquare, Send, User } from "lucide-react";
import Confetti from "react-confetti"; // Import confetti package

const Workanimation = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission
  const [showConfetti, setShowConfetti] = useState(false); // Track confetti display

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Set form submission state
    setTimeout(() => setIsSubmitted(false), 3000); // Stop confetti after 3 seconds
};


  useEffect(() => {
    if (isSubmitted) {
      // Stop confetti after 3 seconds
      setTimeout(() => setShowConfetti(false), 3000);
    }
  }, [isSubmitted]);

  return (
    <div className="bg-blue-900 text-white py-20 px-6 sm:px-12 relative overflow-hidden">
      {/* Confetti effect when form is submitted */}
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6 mt-[-100px]">
          <h2 className="text-3xl md:text-3xl font-semibold text-yellow-400 ml-[-46px]">
            Discover What We Build
          </h2>
          <p className="text-lg text-blue-100 text-justify leading -relaxing text-lg ml-[-46px]">
            We're proud to deliver top-tier digital solutions. Our full project
            portfolio isn’t public yet — reach out and we’ll gladly show what
            we’ve crafted and how we can do the same for you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 font-semibold py-3 px-6 squared-lg hover:bg-yellow-300 transition ml-[-46px]"
          >
            <Mail size={18} /> Contact Our Team
          </a>
        </div>

        {/* Right Circle Form */}
        <div className="relative flex justify-center mt-[-20px]">
          {/* Left side icons */}
          <div className="absolute left-[40px]  top-1/2 transform -translate-y-[60px] space-y-4 z-20">
            <div className="bg-yellow-400 text-blue-900 p-4 rounded-full shadow-md text-xl">
              <Mail size={24} />
            </div>
            <div className="bg-green-400 text-blue-900 p-4 rounded-full shadow-md text-xl">
              <FaPhoneAlt size={24} />
            </div>
          </div>

          {/* Right side icons */}
          <div className="absolute right-[40px] top-1/2 transform -translate-y-[60px] space-y-4 z-20">
            <div className="bg-orange-400 text-blue-900 p-4 rounded-full shadow-md text-xl">
              <MessageSquare size={24} />
            </div>
            <div className="bg-pink-400 text-blue-900 p-4 rounded-full shadow-md text-xl">
              <Send size={24} />
            </div>
          </div>

          <div className="relative w-[320px] h-[320px] bg-gradient-to-br from-blue-800 via-blue-900 to-blue-800 rounded-full border-[8px] border-orange-400 shadow-2xl flex items-center justify-center overflow-hidden">
            {/* User Icon */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20">
              <div className="w-[80px] h-[80px] bg-white text-blue-900 rounded-full flex items-center justify-center shadow-lg">
                <User size={38} />
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-[85%] space-y-3 text-blue-900 text-sm absolute z-10 pt-20">
              {step === 1 && (
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-blue-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                />
              )}
              {step === 2 && (
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-blue-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                />
              )}
              {step === 3 && (
                <input
                  type="text"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-blue-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                />
              )}

              <div className="pt-3 flex justify-center">
                {step < 3 && (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-[100px] h-[45px] flex items-center justify-center text-white font-bold text-sm rounded-lg bg-gradient-to-br from-green-400 to-green-600 shadow-[0_4px_0_#2e7d32] hover:shadow-[0_2px_0_#2e7d32] active:translate-y-1 transition-all duration-200 "
                  >
                    Next
                  </button>
                )}
                {step === 3 && (
                  <button
                    type="submit"
                    className="w-[100px] h-[45px] flex items-center justify-center text-white font-bold text-sm rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-[0_4px_0_#2e7d32] hover:shadow-[0_2px_0_#2e7d32] active:translate-y-1 transition-all duration-200"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Core Tech Icons */}
      <div className="max-w-[1360px] mx-auto mt-16 p-6 bg-blue-900 squared-2xl border border-blue-600 shadow-md ml-[25px]">
  <h2 className="text-white text-xl font-semibold mb-6 text-center">Technologies We Use</h2>

  {/* Core Tech Icons */}
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
    {[
      { icon: <FaReact />, label: "React JS", color: "text-cyan-300" },
      { icon: <FaHtml5 />, label: "HTML5", color: "text-orange-400" },
      { icon: <FaCss3Alt />, label: "CSS3", color: "text-blue-400" },
      { icon: <FaJs />, label: "JavaScript", color: "text-yellow-300" },
    ].map((tech, idx) => (
      <div
        key={idx}
        className="flex flex-col items-center bg-blue-800 p-6 rounded-xl border border-blue-600 hover:shadow-lg transition"
      >
        <div className={`text-4xl mb-2 ${tech.color}`}>{tech.icon}</div>
        <p className="text-sm text-blue-100">{tech.label}</p>
      </div>
    ))}
  </div>

  {/* Advanced Tech Icons */}
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
    {[
      { icon: <SiNextdotjs />, label: "Next.js" },
      { icon: <SiTailwindcss />, label: "Tailwind CSS", color: "text-cyan-400" },
      { icon: <FaNodeJs />, label: "Node.js", color: "text-green-400" },
      { icon: <SiTypescript />, label: "TypeScript", color: "text-blue-400" },
    ].map((tech, idx) => (
      <div
        key={idx}
        className="flex flex-col items-center bg-blue-800 p-6 rounded-xl border border-blue-600 hover:shadow-lg transition"
      >
        <div className={`text-4xl mb-2 ${tech.color || "text-white"}`}>{tech.icon}</div>
        <p className="text-sm text-blue-100">{tech.label}</p>
      </div>
    ))}
  </div>
</div>


      
    </div>
  );
};

export default Workanimation;

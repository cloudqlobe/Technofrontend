import React from "react";
import image1 from "../assets/Image/build-robots.jpg";
import image2 from "../assets/Image/10233603.jpg";
import image3 from "../assets/Image/12643942_5024145.svg";

const ContentPage = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-10 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-8 mt-[30px]">
        Innovative Technology <span className="text-blue-800">Solutions for Your Business</span>
      </h1>

      {/* IT Solutions Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-8 max-w-7xl mx-auto">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image2}
            alt="IT Solutions"
            className="w-[500px] h-[480px] object-cover rounded-lg mb-2 ml-[-20px]"
          />
        </div>
        <div className="flex flex-col justify-center w-[600px] ml-[58px]">
  <h2 className="text-4xl font-default text-grey-400 mt-[30px]">
    Empowering <span className="text-orange-400">Tech Solutions</span>
  </h2>
  <p className="text-gray-600 leading-relaxing text-lg text-justify mt-[30px]">
  At TechnoMagic Solutions, we empower enterprises with advanced IT services engineered for performance, security, and scalability. From proactive network oversight to resilient cloud infrastructure, our offerings are designed to meet your growth goals and long-term digital sustainability. We create intelligent, cost-efficient environments that streamline operations, minimize risks, and elevate productivity across every layer of your business ecosystem.
</p>
<p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
  Our full-spectrum IT suite includes next-gen cybersecurity, seamless integrations, and personalized consulting to align with your business roadmap. We deliver expert solutions in data backup, disaster recovery, ERP systems, and business intelligence — equipping your organization with the tools to innovate, adapt, and lead in today’s dynamic digital world. Experience resilient technology built for enduring success and competitive excellence.
</p>


</div>

      </div>

      {/* Chatbot Solutions Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-8 max-w-7xl mx-auto mt-[-24px]">
        <div className="flex flex-col justify-center w-full ml-[-45px]">
          <h2 className="text-4xl font-default text-grey-200  mt-[30px]">Smart <span className="text-orange-400">Chatbot Solutions</span></h2>
          <p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
  At TechnoMagic Solutions, we build next-gen AI chatbots that revolutionize customer interaction and automate complex workflows with unmatched accuracy. Engineered with advanced NLP, machine learning, and contextual intelligence, our proprietary chatbot framework delivers real-time, personalized communication that boosts engagement, loyalty, and conversions—empowering brands with intelligent, scalable, and efficient digital agents tailored for impactful business transformation.
</p>
<p className="text-gray-600 mt-3 leading-relaxing text-lg text-justify mt-[30px]">
  Scalable, secure, and deeply integrable, our virtual assistants evolve through adaptive intelligence—improving with every user interaction. Designed for high-performance sectors such as e-commerce, healthcare, finance, and enterprise, they offer multilingual capabilities, advanced analytics, and a low total cost of ownership. Our chatbot solutions provide a future-ready, agile communication infrastructure that optimizes support, streamlines operations, and drives long-term business value.
</p>


        </div>
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image1}
            alt="Chatbot Solutions"
            className="w-[550px] h-[480px] object-cover rounded-lg mt-[50px] ml-[30px]"
          />
        </div>
      </div>

      {/* Custom Software Solutions Section */}
      <div className="grid md:grid-cols-2 items-center gap-24 mb-8 max-w-7xl mx-auto mt-[-50px]">
        <div className="relative flex justify-center items-center w-full p-2">
          <img
            src={image3}
            alt="Custom Software Solutions"
            className="w-[650px] h-[650px] object-cover mt-[100px] ml-[-40px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full ml-[30px]">
          <h2 className="text-4xl font-default text-grey-200 mb-2  mt-16">Custom <span className="text-orange-400">Software Solutions</span></h2>
          <p className="text-gray-600 mt-3 leading-relaxed text-lg text-justify mt-[30px]">
  At TechnoMagic Solutions, we specialize in creating high-performance, custom software solutions that drive efficiency, scalability, and innovation. Whether it’s intuitive mobile applications or complex web platforms, our technology seamlessly integrates with your existing infrastructure, enabling your team to work more efficiently while providing an exceptional user experience. We craft solutions that not only align with your long-term vision but also adapt to the evolving needs of your business, ensuring sustained growth and success.
</p>

<p className="text-gray-600 mt-3 leading-relaxed text-lg text-justify mt-[30px]">
  Our commitment to continuous innovation ensures that your technology remains future-ready. We focus on delivering ongoing improvements, ensuring your systems stay competitive in a rapidly changing digital landscape. With our extensive experience across various industries, we excel in API development, enterprise-level software, and intelligent automation, empowering organizations to optimize workflows, streamline operations, enhance digital infrastructure, and grow confidently while maintaining a competitive edge in their respective markets.
</p>


        </div>
      </div>
    </div>
  );
};

export default ContentPage;

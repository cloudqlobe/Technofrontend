import image4 from "../assets/Image/10625917.jpg";
import image5 from "../assets/Image/6502435.jpg";
import image6 from "../assets/Image/6224584.jpg";

const Techcontent = () => {
  return (
    <div className="bg-white text-gray-900 px-4 sm:px-6 md:px-12 py-8 md:py-12 space-y-12 md:space-y-24">
      <h2 className="text-4xl text-center text-black mb-8 mt-[30px]">
        End-to-End <span className="text-blue-800">Tech Consultancy Solutions</span>
      </h2>

      {/* IT Solutions Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-8xl mx-auto px-4">

        {/* Image */}
        <div className="order-1 md:order-1 flex justify-center">
          <img
            src={image4}
            alt="Tech Strategy"
            className="w-full max-w-md md:max-w-lg h-auto rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="order-2 md:order-2 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-default text-gray-700 mt-6 md:mt-0 mb-3">
            Strategic <span className="text-orange-400">Technology Roadmapping</span>
          </h2>

          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            We specialize in crafting tailored technology roadmaps that align your digital assets with long-term business goals. Our strategic approach begins with a comprehensive analysis of your workflows, infrastructure, and market opportunities. We evaluate your current systems, identify gaps, and introduce future-ready technology stacks that support scalability, innovation, and efficiency. Every roadmap is customized to empower business leaders with tech-driven decision-making capabilities that foster growth and adaptability in a competitive landscape.
          </p>

          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            Our consultants blend deep technical knowledge with industry foresight to integrate transformative technologies like AI, cloud-native solutions, and automation. We ensure each milestone in the roadmap includes practical, implementable steps — from stakeholder alignment and resource planning to budget forecasting and risk mitigation. The result is a seamless strategy that transitions your business from its current digital state to an optimized, high-performing ecosystem.
          </p>
        </div>

      </div>


      {/* Chatbot Solutions Section */}
      <div className="grid md:grid-cols-2 items-center gap-6 mb-12 max-w-8xl mx-auto px-4">

        {/* Image */}
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src={image5}
            alt="System Architecture"
            className="w-full max-w-md md:max-w-lg h-auto rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="order-2 md:order-1 text-center md:text-left">
<h2 className="text-3xl md:text-4xl font-default text-gray-700 mt-6 md:mt-0 mb-3">
            Resilient <span className="text-orange-400">System Architecture</span>
          </h2>

          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            Robust architecture is the backbone of high-performance systems, and our consultants focus on building infrastructure that can handle scale, complexity, and change. Whether designing from scratch or optimizing an existing system, we emphasize modularity, microservices, fault-tolerance, and secure data flows. We use modern architecture patterns such as event-driven designs and containerized environments that allow systems to evolve smoothly as business demands grow.
          </p>

          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            We help clients move away from monolithic structures and legacy bottlenecks by introducing technologies like Kubernetes, API gateways, and hybrid cloud frameworks. Our team ensures seamless interoperability between services, disaster recovery planning, and compliance with industry standards. The result is a highly available and scalable tech stack designed for operational efficiency, cost optimization, and long-term resilience.
          </p>
        </div>

      </div>


      {/* Custom Software Solutions Section */}
      <div className="grid md:grid-cols-2 items-center gap-8 md:gap-24 mb-12 max-w-8xl mx-auto px-4">

        {/* Image */}
        <div className="order-1 md:order-1 flex justify-center">
          <img
            src={image6}
            alt="Tech Audits"
            className="w-full max-w-md md:max-w-xl h-auto"
          />
        </div>

        {/* Content */}
        <div className="order-2 md:order-2 flex flex-col justify-center text-center md:text-left">
<h2 className="text-3xl md:text-4xl font-default text-gray-700 mt-6 md:mt-0 mb-3">
            Comprehensive <span className="text-orange-400">Tech Audits & Optimization</span>
          </h2>

          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            Our tech audit services uncover performance bottlenecks, outdated practices, and hidden vulnerabilities across your technology stack. We conduct full-stack diagnostics, analyzing code health, infrastructure efficiency, cloud cost usage, and DevOps processes. By using tools like static code analysis, vulnerability scanners, and real-time monitoring frameworks, we provide a 360° view of your system's current state with prioritized recommendations for action.
          </p>

          <p className="mt-3 text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify ">
            Post-audit, we guide your team through tactical optimization — from performance tuning and cost control to security hardening and automation. We empower you with structured improvement plans that reduce latency, increase throughput, and enforce secure best practices. Whether refactoring legacy modules or streamlining CI/CD pipelines, our goal is to turn your existing infrastructure into a future-proof, high-efficiency digital environment.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Techcontent;

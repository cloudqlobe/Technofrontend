import React from "react";
import image8 from "../assets/Image/4564484.jpg";
import image9 from "../assets/Image/6072194.jpg";

const Webcontent2 = () => {
  return (
    <div className="bg-white text-gray-900 px-6 md:px-12 py-16 space-y-24">
      {/* Main Heading */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        <span className="text-black">SEO &</span>{" "}
        <span className="text-blue-800">Performance-Driven Web Development</span>
      </h1>

      {/* Section 1: SEO Optimization */}
      <div className="grid md:grid-cols-2 items-center gap-12">
        <div className="flex justify-center">
          <img
            src={image8}
            alt="SEO Strategy"
            className="w-[70%] h-[500px] object-cover rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-default mb-4">
            <span className="text-black">Boost Visibility</span>{" "}
            <span className="text-blue-800">with Strategic SEO</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            SEO isn't just a checkbox — it's the foundation of long-term online success. At our core, we embed SEO practices into every stage of web development. That means blazing-fast load times, clean URL structures, alt-tagged images, and schema markup that communicates with search engines directly.
          </p>
          <p className=" text-gray-600 leading-relaxed text-lg mb-4">
            We build with an understanding of how Google sees your content — optimizing crawlability, indexation, and keyword relevance. From metadata to header hierarchy, everything is built with intent. Your website doesn’t just rank; it performs.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Our approach also includes mobile-first design, accessibility improvements, and performance monitoring — because what gets measured, improves. The result? Higher search rankings, lower bounce rates, and more quality leads in your pipeline.
          </p>
          <p p className="text-gray-600 leading-relaxed text-lg mb-4">
            With our SEO-driven development, you gain a competitive edge that compounds over time. We don’t chase algorithms — we understand them.
          </p>
        </div>
      </div>

      {/* Section 2: Digital Solutions */}
      <div className="grid md:grid-cols-2 items-center gap-12 mb-[150px]">
        <div>
          <h2 className="text-3xl font-default mb-4">
            <span className="text-black">Empowering Businesses</span>{" "}
            <span className="text-blue-800">Through Digital Solutions</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Your digital journey deserves more than just a website — it needs a strategy. We create high-impact, custom-built digital ecosystems that go beyond aesthetics. From frontend frameworks like React and Next.js to backend systems like Node.js and MySQL, our stack is tailored to scale with your business.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            We engineer portals, dashboards, booking systems, ecommerce platforms, and SaaS tools that empower teams and serve users with ease. Whether you need multilingual content, dynamic search, or role-based access control, we can build it from scratch — pixel-perfect and bug-free.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Our digital solutions integrate with your existing tools — CRMs, ERPs, APIs, payment gateways, analytics platforms, and more. Every project is approached with scalability, speed, and future-readiness in mind. 
          </p>
          <p p className="text-gray-600 leading-relaxed text-lg mb-4">
            We don't just develop features — we solve business problems with smart architecture and seamless user experience. Your goals, our code.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={image9}
            alt="Digital Solutions"
            className="w-[90%] h-[500px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Webcontent2;

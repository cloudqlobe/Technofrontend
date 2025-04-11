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

      {/* Section 1: SEO Precision */}
      <div className="grid md:grid-cols-2 items-center gap-12">
        <div className="flex justify-center">
          <img
            src={image8}
            alt="SEO Strategy"
            className="w-[70%] h-[500px] object-cover rounded-lg "
          />
        </div>
        <div>
          <h2 className="text-3xl font-default mb-4">
            <span className="text-black">Powering Your Presence</span>{" "}
            <span className="text-blue-800">with Precision SEO</span>
          </h2>
          <p className="mb-4">
            We don’t just build websites — we engineer digital platforms optimized
            for maximum search engine exposure. From lightning-fast load times to
            perfectly structured semantic HTML, every element of your site is
            crafted to rank and convert.
            Through advanced schema markup, meta tags, and SEO-first architecture,
            we help search engines understand your site’s purpose — leading to
            better visibility, higher engagement, and measurable growth.
            Through advanced schema markup, meta tags, and SEO-first architecture,
            we help search engines understand your site’s purpose — leading to
            better visibility, higher engagement, and measurable growth.
            Through advanced schema markup, meta tags, and SEO-first architecture,
            we help search engines understand your site’s purpose — leading to
            better visibility, higher engagement, and measurable growth.
          </p>
          <p>
            Through advanced schema markup, meta tags, and SEO-first architecture,
            we help search engines understand your site’s purpose — leading to
            better visibility, higher engagement, and measurable growth.
            Through advanced schema markup, meta tags, and SEO-first architecture,
            we help search engines understand your site’s purpose — leading to
            better visibility, higher engagement, and measurable growth.
            
          </p>
        </div>
      </div>

      {/* Section 2: Performance */}
      <div className="grid md:grid-cols-2 items-center gap-10 mb-[150px]">
  <div>
    <h2 className="text-3xl font-default mb-4">
      <span className="text-black">Social Media</span>{" "}
      <span className="text-blue-800">Marketing Mastery</span>
    </h2>
    <p className="mb-4">
      We help your brand make waves across platforms like Instagram, Facebook, LinkedIn, and more.
      From viral content strategies to daily engagement, we ensure your audience stays connected and loyal.
      With a blend of analytics, creative campaigns, and targeted advertising,
      we turn your social presence into a powerful lead-generation machine. Get noticed, get shared, and grow.
      With a blend of analytics, creative campaigns, and targeted advertising,
      
    </p>
    <p>
      With a blend of analytics, creative campaigns, and targeted advertising,
      we turn your social presence into a powerful lead-generation machine. Get noticed, get shared, and grow.
      With a blend of analytics, creative campaigns, and targeted advertising,
      we turn your social presence into a powerful lead-generation machine. Get noticed, get shared, and grow.
      With a blend of analytics, creative campaigns, and targeted advertising,
      we turn your social presence into a powerful lead-generation machine. Get noticed, get shared, and grow.
      With a blend of analytics, creative campaigns, and targeted advertising,
     
    </p>
  </div>
  <div className="flex justify-center">
    <img
      src={image9}
      alt="Social Media Marketing"
      className="w-[90%] h-[500px] object-cover rounded-lg"
    />
  </div>
</div>


     

      
      
    </div>
  );
};

export default Webcontent2;

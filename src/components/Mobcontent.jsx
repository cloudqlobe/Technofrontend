import React from 'react';
import image16 from "../assets/Image/4110955.jpg";
import image17 from "../assets/Image/6072171.jpg";
import image18 from "../assets/Image/4630198.jpg";

const Mobcontent = () => {
  return (
    <section className="w-full px-6 md:px-20 py-20 bg-white">
      <h2 className="text-center text-4xl font-semibold text-black mb-20">
        Mobile App <span className='text-blue-800'>Development Highlights</span>
      </h2>

      {/* Section 1 - Image Left */}
      <div className="flex flex-col md:flex-row items-center mb-24 gap-12">
        <div className="w-full md:w-1/2">
          <img
            src={image18}
            alt="Cross Platform App Design"
              className="w-[90%] h-[450px] object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-default text-black mb-4">
            Cross-Platform <span className='text-blue-800'>Development with Native Performance</span>
          </h3>
          <p className="text-gray-800 text-lg leading-relaxed mb-4">
            Launch your app across Android, iOS, and web using a single, maintainable codebase built with robust frameworks like Flutter, React Native, and Kotlin Multiplatform. Our cross-platform solutions combine cost-efficiency with uncompromised performance, offering a smooth native-like user experience while cutting down development time.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            We ensure each platform benefits from tailored user interfaces and experiences while keeping the backend and core logic unified. This not only reduces technical debt but also simplifies post-launch maintenance and version control, giving your business the flexibility to scale and adapt to market changes seamlessly.
          </p>
        </div>
      </div>

      {/* Section 2 - Image Right */}
      <div className="flex flex-col md:flex-row-reverse items-center mb-24 gap-12">
        <div className="w-full md:w-1/2">
          <img
            src={image16}
            alt="Performance Architecture"
            className="w-[90%] h-[500px] object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-default text-black mb-4">
            Performance-Oriented <span className='text-blue-800'>Architecture</span>
          </h3>
          <p className="text-gray-800 text-lg leading-relaxed mb-4">
            From lightweight MVPs to enterprise-grade applications, performance is never an afterthought. We design mobile app architectures that are modular, scalable, and built for real-world usage. Leveraging efficient state management, low-latency communication, and optimized data handling, our apps are engineered to be fast and reliable.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            We emphasize background processing, offline support, and seamless synchronization, ensuring smooth interactions under all network conditions. Whether you're managing live financial data, media streams, or real-time analytics, our architecture ensures smooth execution across devices and usage patterns.
          </p>
        </div>
      </div>

      {/* Section 3 - Image Left */}
      <div className="flex flex-col md:flex-row items-center mb-12 gap-12">
        <div className="w-full md:w-1/2">
          <img
            src={image17}
            alt="UI UX Design"
              className="w-[90%] h-[500px] object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-default text-black mb-4">
            Clean & <span className='text-blue-800'>Modern UI/UX</span>
          </h3>
          <p className="text-gray-800 text-lg leading-relaxed mb-4">
            Great design is the gateway to strong engagement. Our team crafts user interfaces that aren’t just visually striking but intuitively functional. We combine design systems, motion graphics, and microinteractions to produce mobile experiences that users enjoy navigating.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            Accessibility, responsiveness, and performance-driven visuals are at the heart of our UX principles. Every screen is wireframed, tested, and refined to deliver minimal friction and maximum satisfaction—converting casual users into loyal customers through thoughtful design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mobcontent;

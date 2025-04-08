import React from 'react';
import image16 from "../assets/Image/4110955.jpg";
import image17 from "../assets/Image/6072171.jpg";
import image18 from "../assets/Image/4630198.jpg";

const Mobcontent = () => {
  return (
    <section className="w-full px-6 md:px-16 py-16 bg-white">
      <h2 className="text-center text-3xl font-bold text-blue-800 mb-16">
        Mobile App Development Highlights
      </h2>

      {/* Section 1 - Image Left */}
      <div className="flex flex-col md:flex-row items-center mb-20">
        <div className="w-full md:w-1/2 px-4 md:px-6 mb-6 md:mb-0">
          <img
            src={image18}
            alt="Cross Platform App Design"
            className="w-full max-w-[700px] max-h-[500px] object-contain rounded-xl"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-6">
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-blue-800">Cross-Platform</span>{' '}
            <span className="text-pink-600">Native Power</span>
          </h3>
          <p className="text-gray-700 leading-relaxed text-default mb-4">
            Build powerful apps using Flutter, React Native, and Kotlin that deliver native-like performance across all major platforms. We streamline deployment for Android, iOS, and the web without compromising quality.
            Whether you're handling live data feeds or managing millions of users, our solutions are designed to be robust, low-latency, and future-ready—giving your app a strong foundation to grow.
          </p>
          <p className="text-gray-700 leading-relaxed text-default mb-4">
            Our single codebase strategy reduces costs, accelerates development, and ensures consistent branding. You’ll get faster market readiness, unified user experiences, and easier updates across all platforms.
            Whether you're handling live data feeds or managing millions of users, our solutions are designed to be robust, low-latency, and future-ready—giving your app a strong foundation to grow.
            Whether you're handling live data feeds or managing millions of users, our solutions are designed to be robust, low-latency, and future-ready—giving your app a strong foundation to grow.
            Whether you're handling live data feeds or managing millions of users, our solutions are designed to be robust, low-latency, and future-ready—giving your app a strong foundation to grow.
          </p>
        </div>
      </div>

      {/* Section 2 - Image Right */}
      <div className="flex flex-col md:flex-row-reverse items-center mb-20">
        <div className="w-full md:w-1/2 px-4 md:px-6 mb-6 md:mb-0">
          <img
            src={image16}
            alt="Performance Architecture"
            className="w-full max-w-[700px] max-h-[500px] object-contain rounded-xl"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-6">
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-blue-800">Performance First</span>{' '}
            <span className="text-pink-600">Architecture</span>
          </h3>
          <p className="text-gray-700 leading-relaxed text-default mb-4">
            From startup to scale-up, our mobile apps are optimized for high performance. We prioritize clean architecture, real-time responsiveness, and efficient memory usage across all devices.
            <var> Whether you're handling live data feeds or managing millions of users, our solutions are designed to be robust, low-latency, and future-ready—giving your app a strong foundation to grow.</var>
          </p>
          <p className="text-gray-700 leading-relaxed text-default mb-4">
            Whether you're handling live data feeds or managing millions of users, our solutions are designed to be robust, low-latency, and future-ready—giving your app a strong foundation to grow.
            Whether you're handling live data feeds or managing millions of users, our solutions are designed to be robust, low-latency, and future-ready—giving your app a strong foundation to grow.
            Whether you're handling live data feeds or managing millions of users, our solutions are designed to be robust, low-latency, and future-ready—giving your app a strong foundation to grow.
          </p>
        </div>
      </div>

      {/* Section 3 - Image Left */}
      <div className="flex flex-col md:flex-row items-center mb-20">
        <div className="w-full md:w-1/2 px-4 md:px-6 mb-6 md:mb-0">
          <img
            src={image17}
            alt="UI UX Design"
            className="w-full max-w-[700px] max-h-[500px] object-contain rounded-xl"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-6">
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-blue-800">Modern</span>{' '}
            <span className="text-pink-600">UI/UX Design</span>
          </h3>
          <p className="text-gray-700 leading-relaxed text-default mb-4">
            Exceptional user experience is the heart of every app we design. With intuitive layouts, responsive interfaces, and smooth animations, we create mobile apps users love to interact with.
            Whether you're handling live data feeds or managing millions of users, our solutions are designed to be robust, low-latency, and future-ready—giving your app a strong foundation to grow.
          </p>
          <p className="text-gray-700 leading-relaxed text-default mb-4">
            From accessibility to aesthetics, we take a mobile-first approach to deliver polished designs that retain users and build loyalty. Great design isn't ju
            st pretty—it's powerful.
            Whether you're handling live data feeds or managing millions of users, our solutions are designed to be robust, low-latency, and future-ready—giving your app a strong foundation to grow.
            Whether you're handling live data feeds or managing millions of users, our solutions are designed to be robust, low-latency, and future-ready—giving your app a strong foundation to grow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mobcontent;

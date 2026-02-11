import React from "react";
import image12 from "../assets/Image/4934425.jpg";

const Webregister = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl border-2 border-gray-300 overflow-hidden">

        {/* Image Section */}
        <div className="flex md:flex items-center justify-center p-6 sm:p-8 bg-white">
          <img
            src={image12}
            alt="Register Illustration"
            className="w-full max-w-sm md:max-w-full h-auto object-contain max-h-[350px] md:max-h-[500px]"
          />
        </div>

        {/* Form Section */}
        <div className="p-6 sm:p-10 md:p-14 bg-white w-full">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10 text-orange-500">
            Register Now
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* First Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="Your First Name"
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Your Last Name"
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Contact */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Contact Number
              </label>
              <input
                type="tel"
                placeholder="Your Contact Number"
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Description
              </label>
              <textarea
                rows="4"
                placeholder="Tell us about your requirement"
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 transition duration-300 text-white py-3 text-lg font-semibold rounded-md"
              >
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Webregister;

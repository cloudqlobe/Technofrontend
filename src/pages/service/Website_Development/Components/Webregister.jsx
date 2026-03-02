import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import image12 from "../../../../assets/Image/4934425.jpg";

const Webregister = () => {
  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_REGISTERTEMPLATE_ID,
        formData
      )
      .then(() => {
        setSubmitted(true);
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          contact: "",
          description: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error.text || error);
      });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl border-2 border-gray-300 overflow-hidden">

        {/* Image Section */}
        <div className="flex items-center justify-center p-6 sm:p-8 bg-white">
          <img
            src={image12}
            alt="Register Illustration"
            className="w-full max-w-sm md:max-w-full h-auto object-contain max-h-[350px] md:max-h-[500px]"
          />
        </div>

        {/* Form Section */}
        <div className="p-6 sm:p-10 md:p-14 bg-white w-full">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 text-orange-500">
            Register Now
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <input
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="First Name"
              className="p-3 border"
              required
            />

            <input
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Last Name"
              className="p-3 border"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-3 border"
              required
            />

            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Contact Number"
              className="p-3 border"
              required
            />

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell us about your requirement"
              rows="4"
              className="md:col-span-2 p-3 border"
              required
            />

            <div className="md:col-span-2">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold rounded-md">
                Submit
              </button>
            </div>

            {submitted && (
              <p className="md:col-span-2 text-green-600 text-center font-medium">
                ✅ Registration submitted successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Webregister;
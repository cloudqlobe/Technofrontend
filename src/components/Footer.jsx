import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaGithub
} from "react-icons/fa";
import { MdOutlineArrowForward } from "react-icons/md";
import logo from "../assets/Image/logo-removebg-.png";

export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white py-20">
      <div className="container mx-auto px-8 md:px-20">

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-start justify-between mt-16">
          <div className="grid md:grid-cols-1 gap-14 w-full md:w-2/2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-gray-300">
              <div>
                <h3 className="text-xl font-default text-white">SERVICES</h3>
                <ul className="mt-4 space-y-3">
                  <li>SEO</li>
                  <li>PPC Management</li>
                  <li>Link Building</li>
                  <li>ORM</li>
                  <li>SMO</li>
                  <li>Content Development</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-default text-white">COMPANY</h3>
                <ul className="mt-4 space-y-3">
                  <li>Home</li>
                  <li>Services</li>
                  <li>About Us</li>
                  <li>Our Works</li>
                  <li>Softwares</li>
                  <li>Careers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-default text-white">SUPPORT</h3>
                <ul className="mt-4 space-y-3">
                  <li>Resources</li>
                  <li>Career</li>
                  <li>Get a Quote</li>
                  <li>Request for Proposal</li>
                  <li>Make a Payment</li>
                </ul>
              </div>
            </div>

            {/* Contact + Social Icons */}
            <div className="text-gray-300 mt-8 md:mt-0">
              <h3 className="text-xl font-default text-white">CONTACT</h3>
              <p className="flex items-center mt-6 text-lg">
                <FaPhoneAlt className="mr-3" /> +1(646)-808-0229
              </p>
              <p className="flex items-center mt-4 text-lg">
                <FaEnvelope className="mr-3" /> sales@example.com
              </p>

              {/* Social Icons - Left and Just Below */}
              {/* Left-Aligned Social Icons Below Line with More Spacing */}
<div className="flex space-x-5 mt-16 ml-2">
  <a href="#" className="bg-[#3b5998] p-3 text-xl font-bold text-white hover:scale-110 transition mt-8">
    <FaFacebookF />
  </a>
  <a href="#" className="bg-[#00acee] p-3 text-xl font-bold text-white hover:scale-110 transition mt-8">
    <FaTwitter />
  </a>
  <a href="#" className="bg-[#C13584] p-3 text-xl font-bold text-white hover:scale-110 transition mt-8">
    <FaInstagram />
  </a>
  <a href="#" className="bg-[#0A66C2] p-3 text-xl font-bold text-white hover:scale-110 transition mt-8">
    <FaLinkedinIn />
  </a>
  <a href="#" className="bg-[#FF0000] p-3 text-xl font-bold text-white hover:scale-110 transition mt-8">
    <FaYoutube />
  </a>
  <a href="#" className="bg-[#E60023] p-3 text-xl font-bold text-white hover:scale-110 transition mt-8">
    <FaPinterestP />
  </a>
  <a href="#" className="bg-[#333] p-3 text-xl font-bold text-white hover:scale-110 transition mt-8">
    <FaGithub />
  </a>
</div>


            </div>
          </div>

          {/* Right Section: Logo + CTA */}
          <div className="w-full md:w-2/2 text-center md:ml-16 mt-16 md:mt-0">
            <div className="flex justify-center mb-6 bg-white p-4 shadow-lg border-2 border-orange-400">
              <img
                src={logo}
                alt="Company Logo"
                className="h-[150px] w-[500px] object-contain"
              />
            </div>
            <div className="bg-[#253F99] p-12 shadow-lg border-2 border-yellow-400">
              <h3 className="text-2xl font-bold text-yellow-400">
                GRAB YOUR FREE TECH CONSULTATION
              </h3>
              <p className="text-gray-300 mt-6 text-lg">
                Get expert advice on optimizing your digital presence with the latest technologies.
              </p>
              <button className="mt-8 bg-white text-[#1E3A8A] hover:bg-gray-200 px-8 py-4 squared-lg flex items-center justify-center mx-auto text-lg font-semibold">
                GET STARTED <MdOutlineArrowForward className="ml-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 pt-8 border-t border-gray-500 py-6 text-center">
          <p className="text-gray-300 text-lg mt-4">
            &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-2 text-gray-300">
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
            <span>|</span>
            <a href="/contact" className="hover:underline">Contact Us</a>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Disclaimer: The information provided on this website is for general informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}

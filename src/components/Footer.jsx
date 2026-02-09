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
import logo from "../assets/Image/logo1.jpeg";

export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20">

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start justify-between mt-8 md:mt-16 gap-8 lg:gap-0">
          <div className="grid md:grid-cols-1 gap-8 md:gap-14 w-full lg:w-2/2">
            <div className="
  flex flex-wrap justify-between
  gap-8 md:gap-12
  text-gray-300
">
              {/* Services Column */}
              <div>
                <h3 className="text-lg md:text-xl font-default text-white mb-3 md:mb-0">SERVICES</h3>
                <ul className="mt-3 md:mt-4 space-y-2 md:space-y-3 text-sm md:text-base">
                  <li className="hover:text-white transition cursor-pointer">SEO</li>
                  <li className="hover:text-white transition cursor-pointer">ORM</li>
                  <li className="hover:text-white transition cursor-pointer">SMO</li>
                  <li className="hover:text-white transition cursor-pointer">Link Building</li>
                  <li className="hover:text-white transition cursor-pointer">PPC Management</li>
                  <li className="hover:text-white transition cursor-pointer">Content Development</li>
                </ul>
              </div>

              {/* Company Column */}
              <div>
                <h3 className="text-lg md:text-xl font-default text-white mb-3 md:mb-0">COMPANY</h3>
                <ul className="mt-3 md:mt-4 space-y-2 md:space-y-3 text-sm md:text-base">
                  <li className="hover:text-white transition cursor-pointer">Home</li>
                  <li className="hover:text-white transition cursor-pointer">Services</li>
                  <li className="hover:text-white transition cursor-pointer">About Us</li>
                  <li className="hover:text-white transition cursor-pointer">Our Works</li>
                  <li className="hover:text-white transition cursor-pointer">Softwares</li>
                  <li className="hover:text-white transition cursor-pointer">Careers</li>
                </ul>
              </div>

              {/* Support Column */}
              <div>
                <h3 className="text-lg md:text-xl font-default text-white mb-3 md:mb-0">SUPPORT</h3>
                <ul className="mt-3 md:mt-4 space-y-2 md:space-y-3 text-sm md:text-base">
                  <li className="hover:text-white transition cursor-pointer">Resources</li>
                  <li className="hover:text-white transition cursor-pointer">Career</li>
                  <li className="hover:text-white transition cursor-pointer">Get a Quote</li>
                  <li className="hover:text-white transition cursor-pointer">Request for Proposal</li>
                  <li className="hover:text-white transition cursor-pointer">Make a Payment</li>
                </ul>
              </div>
            </div>

            {/* Contact + Social Icons */}
            <div className="text-gray-300 mt-4 md:mt-8 lg:mt-0">
              <div>
              <h3 className="text-lg md:text-xl font-default text-white mb-3 md:mb-0">CONTACT</h3>
              <p className="flex items-center mt-4 md:mt-6 text-base md:text-lg">
                <FaPhoneAlt className="mr-3 text-sm md:text-base flex-shrink-0" /> +44 7491 896532
              </p>
              <p className="flex items-center mt-3 md:mt-4 text-base md:text-lg">
                <FaEnvelope className="mr-3 text-sm md:text-base flex-shrink-0" /> business@codostack.com
              </p>
              </div>


              {/* Social Icons */}
              <div className="flex flex-wrap gap-3 md:gap-5 mt-8 md:mt-16 ml-0 md:ml-2">
                <a href="#" className="bg-[#3b5998] p-2 md:p-3 text-lg md:text-xl font-bold text-white hover:scale-110 transition mt-4 md:mt-8">
                  <FaFacebookF />
                </a>
                <a href="#" className="bg-[#00acee] p-2 md:p-3 text-lg md:text-xl font-bold text-white hover:scale-110 transition mt-4 md:mt-8">
                  <FaTwitter />
                </a>
                <a href="#" className="bg-[#C13584] p-2 md:p-3 text-lg md:text-xl font-bold text-white hover:scale-110 transition mt-4 md:mt-8">
                  <FaInstagram />
                </a>
                <a href="#" className="bg-[#0A66C2] p-2 md:p-3 text-lg md:text-xl font-bold text-white hover:scale-110 transition mt-4 md:mt-8">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="bg-[#FF0000] p-2 md:p-3 text-lg md:text-xl font-bold text-white hover:scale-110 transition mt-4 md:mt-8">
                  <FaYoutube />
                </a>
                <a href="#" className="bg-[#E60023] p-2 md:p-3 text-lg md:text-xl font-bold text-white hover:scale-110 transition mt-4 md:mt-8">
                  <FaPinterestP />
                </a>
                <a href="#" className="bg-[#333] p-2 md:p-3 text-lg md:text-xl font-bold text-white hover:scale-110 transition mt-4 md:mt-8">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section: Logo + CTA */}
          <div className="w-full lg:w-2/2 text-center lg:ml-16 mt-8 md:mt-16 lg:mt-0">
            {/* Logo Container */}
            <div className="flex justify-center mb-4 md:mb-6 bg-white p-3 md:p-4 shadow-lg border-2 border-orange-400">
              <img
                src={logo}
                alt="Company Logo"
                className="h-[80px] sm:h-[100px] md:h-[180px] w-auto max-w-full object-contain"
              />
            </div>

            {/* CTA Box */}
            <div className="bg-[#253F99] p-6 sm:p-8 md:p-12 shadow-lg border-2 border-yellow-400">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400 leading-tight">
                GRAB YOUR FREE TECH CONSULTATION
              </h3>
              <p className="text-gray-300 mt-4 md:mt-6 text-sm sm:text-base md:text-lg">
                Get expert advice on optimizing your digital presence with the latest technologies.
              </p>
              <button className="mt-6 md:mt-8 bg-white text-[#1E3A8A] hover:bg-gray-200 px-6 md:px-8 py-3 md:py-4 squared-lg flex items-center justify-center mx-auto text-base md:text-lg font-semibold transition">
                GET STARTED <MdOutlineArrowForward className="ml-2 md:ml-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 md:mt-6 pt-6 md:pt-8 border-t border-gray-500 py-4 md:py-6 text-center">
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-2 md:mt-4">
            &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 mt-3 md:mt-2 text-gray-300 text-sm sm:text-base">
            <a href="/privacy-policy" className="hover:underline hover:text-white transition">Privacy Policy</a>
            <span className="hidden sm:inline">|</span>
            <a href="/terms-of-service" className="hover:underline hover:text-white transition">Terms of Service</a>
            <span className="hidden sm:inline">|</span>
            <a href="/contact" className="hover:underline hover:text-white transition">Contact Us</a>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm mt-3 md:mt-4 px-4">
            Disclaimer: The information provided on this website is for general informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
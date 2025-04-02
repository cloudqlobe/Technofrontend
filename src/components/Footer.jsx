import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { MdOutlineArrowForward } from "react-icons/md";
import logo from "../assets/Image/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white py-16">
      <div className="container mx-auto px-8 md:px-20">
        
       
        {/* Free Consultation Section */}
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
            <div className="text-gray-300 mt-8 md:mt-0">
              <h3 className="text-xl font-default text-white">CONTACT</h3>
              <p className="flex items-center mt-6 text-lg"><FaPhoneAlt className="mr-3" /> +1(646)-808-0229</p>
              <p className="flex items-center mt-6 text-lg"><FaEnvelope className="mr-3" /> sales@example.com</p>
            </div>
          </div>
          <div className="bg-[#253F99] p-10 rounded-lg shadow-lg w-full md:w-2/2 text-center md:ml-16 mt-16 md:mt-0">
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
        
        {/* Footer Bottom */}
        <div className="bg-white text-black mt-16 pt-8 border-t border-gray-300 py-6">
          <div className="container mx-auto flex flex-wrap justify-center md:justify-between items-center">
          <div className="flex-shrink-0">
  <img 
    src={logo} 
    alt="Company Logo" 
    className="h-[80px] w-[250px] object-contain" 
  />
</div>


            <div className="flex space-x-8">
              <span className="bg-gray-200 px-5 py-2 rounded-lg text-lg">ISO</span>
              <span className="bg-gray-200 px-5 py-2 rounded-lg text-lg">Google Partner</span>
              <span className="bg-gray-200 px-5 py-2 rounded-lg text-lg">PayPal</span>
            </div>
          </div>
          <p className="text-gray-600 text-lg text-center mt-4">&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

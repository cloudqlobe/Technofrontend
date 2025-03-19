import { 
  FaHeadset, FaMicrochip, FaShieldAlt, FaDollarSign, 
  FaRocket, FaLightbulb, FaCogs, FaCloud, FaGlobe, FaServer 
} from "react-icons/fa";

const features = [
  { icon: FaHeadset, title: "24/7 Support", desc: "Always available to assist you.", color: "text-blue-500", hoverColor: "hover:text-blue-700" },
  { icon: FaMicrochip, title: "High-End Tech", desc: "Cutting-edge technology for top performance.", color: "text-green-500", hoverColor: "hover:text-green-700" },
  { icon: FaShieldAlt, title: "Cybersecurity", desc: "Your security is our priority.", color: "text-red-500", hoverColor: "hover:text-red-700" },
  { icon: FaDollarSign, title: "Affordable Rates", desc: "Quality services at competitive prices.", color: "text-yellow-500", hoverColor: "hover:text-yellow-700" },
  { icon: FaRocket, title: "Fast Deployment", desc: "Quick and seamless integration.", color: "text-purple-500", hoverColor: "hover:text-purple-700" },
  { icon: FaLightbulb, title: "Innovative Solutions", desc: "Creative and effective problem-solving.", color: "text-orange-500", hoverColor: "hover:text-orange-700" },
  { icon: FaCogs, title: "Automation", desc: "Streamlined processes to boost efficiency.", color: "text-pink-500", hoverColor: "hover:text-pink-700" },
  { icon: FaCloud, title: "Cloud Services", desc: "Scalable and secure cloud solutions.", color: "text-teal-500", hoverColor: "hover:text-teal-700" },
  { icon: FaGlobe, title: "Global Reach", desc: "Serving clients worldwide with excellence.", color: "text-indigo-500", hoverColor: "hover:text-indigo-700" },
  { icon: FaServer, title: "Advanced Servers", desc: "High-performance servers for better reliability.", color: "text-gray-500", hoverColor: "hover:text-gray-700" },
];

export default function Features() {
  return (
    <section className="bg-white text-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-8 drop-shadow-lg">Why Choose Us?</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
          Experience excellence with our cutting-edge technology, secure infrastructure, and world-class support.
        </p>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-8 bg-gray-200 text-gray-900 rounded-3xl shadow-2xl hover:shadow-3xl transition-transform transform hover:-translate-y-4"
            >
              <div className={`text-6xl ${feature.color} ${feature.hoverColor} mb-5 transition-colors duration-300`}>
                <feature.icon />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-700 text-base text-center px-4">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  ) 
}

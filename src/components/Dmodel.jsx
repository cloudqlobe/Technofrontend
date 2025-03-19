import { 
  FaHeadset, FaMicrochip, FaShieldAlt, FaDollarSign, 
  FaRocket, FaLightbulb, FaCogs, FaCloud, FaGlobe, FaServer 
} from "react-icons/fa";

const features = [
  { icon: <FaHeadset />, title: "24/7 Support", desc: "Always available to assist you." },
  { icon: <FaMicrochip />, title: "High-End Tech", desc: "Cutting-edge technology for top performance." },
  { icon: <FaShieldAlt />, title: "Cybersecurity", desc: "Your security is our priority." },
  { icon: <FaDollarSign />, title: "Affordable Rates", desc: "Quality services at competitive prices." },
  { icon: <FaRocket />, title: "Fast Deployment", desc: "Quick and seamless integration." },
  { icon: <FaLightbulb />, title: "Innovative Solutions", desc: "Creative and effective problem-solving." },
  { icon: <FaCogs />, title: "Automation", desc: "Streamlined processes to boost efficiency." },
  { icon: <FaCloud />, title: "Cloud Services", desc: "Scalable and secure cloud solutions." },
  { icon: <FaGlobe />, title: "Global Reach", desc: "Serving clients worldwide with excellence." },
  { icon: <FaServer />, title: "Advanced Servers", desc: "High-performance servers for better reliability." },
];

export default function Features() {
  return (
    <section className="bg-gradient-to-b from-blue-600 to-indigo-900 text-white py-24 flex justify-center items-center">
      <div className="max-w-6xl mx-auto text-center relative">
        <h2 className="text-5xl font-extrabold mb-12 drop-shadow-lg">Why Choose Us?</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed">
          Experience excellence with our cutting-edge technology, secure infrastructure, and world-class support.
        </p>
        
        {/* Flower Shape Layout with Connections and Image in Center */}
        <div className="relative flex justify-center items-center w-full h-[500px]">
          {/* Center Image */}
          <div className="absolute bg-white text-gray-900 p-6 rounded-full shadow-2xl w-52 h-52 flex justify-center items-center">
            <img src="/path-to-your-image.png" alt="Center Image" className="w-full h-full object-cover rounded-full" />
          </div>

          {/* Surrounding Features with Connecting Lines */}
          {features.map((feature, index) => {
            const angle = (index * 2 * Math.PI) / features.length;
            const x = 45 + 35 * Math.cos(angle);
            const y = 45 + 35 * Math.sin(angle);
            return (
              <>
                {/* Connecting Lines */}
                <div
                  key={`line-${index}`}
                  className="absolute bg-blue-400 w-1 h-16"
                  style={{
                    top: `${50 + 17.5 * Math.sin(angle)}%`,
                    left: `${50 + 17.5 * Math.cos(angle)}%`,
                    transform: `translate(-50%, -50%) rotate(${angle}rad)`
                  }}
                ></div>
                
                {/* Feature Items */}
                <div
                  key={index}
                  className="absolute bg-white text-gray-900 p-5 rounded-full shadow-xl w-40 h-40 flex flex-col justify-center items-center transition-transform transform hover:scale-110"
                  style={{ top: `${y}%`, left: `${x}%`, transform: "translate(-50%, -50%)" }}
                >
                  <div className="text-4xl text-blue-500 mb-1">{feature.icon}</div>
                  <h3 className="text-md font-bold text-gray-800 text-center">{feature.title}</h3>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import logo from "../assets/Image/chatbot.png";
import { CheckCircle, MessageCircle } from 'lucide-react';

export function Card({ children, className }) {
  return <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>{children}</div>;
}

export function CardContent({ children }) {
  return <div className="mt-4">{children}</div>;
}

export function Button({ children, className, ...props }) {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default function ChatbotProductPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <img src={logo} alt="Chatbot Demo" className="rounded-xl shadow-xl" />
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold text-blue-500">Why Choose Our Chatbot?</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <CheckCircle className="text-green-500" />
              24/7 Automated Customer Support
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-green-500" />
              Multilingual AI-Powered Responses
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-green-500" />
              Seamless Integration with CRM & Websites
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-green-500" />
              Advanced NLP for Human-like Conversations
            </li>
          </ul>
          <Button>
            Get Started
          </Button>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-16 text-center"
      >
        <h2 className="text-4xl font-bold text-blue-600">Benefits</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
          <Card className="p-6 text-center">
            <CardContent>
              <MessageCircle className="text-blue-500 text-4xl mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Improved Customer Experience</h3>
              <p className="text-gray-600 mt-2">Quick, personalized responses for every user.</p>
            </CardContent>
          </Card>
          <Card className="p-6 text-center">
            <CardContent>
              <MessageCircle className="text-blue-500 text-4xl mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Increased Sales</h3>
              <p className="text-gray-600 mt-2">Guide users towards purchases effortlessly.</p>
            </CardContent>
          </Card>
          <Card className="p-6 text-center">
            <CardContent>
              <MessageCircle className="text-blue-500 text-4xl mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Cost-Effective Support</h3>
              <p className="text-gray-600 mt-2">Reduce human effort with automation.</p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}

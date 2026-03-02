import React from 'react';
import Footer from '../../../components/Footer';
import Webregister from '../../service/Website_Development/Components/Webregister';
import Botcontents1 from './Components/Botcontents1';
import Botanimation from './Components/Botanimation';
import Botcontent from './Components/Botcontent';
import Botheader from './Components/Botheader';
import Resellerpage from '../../../components/Resellerpage';
import usePageTitle from '../../../hooks/usePageTitle';

const ChatbotPage = () => {
   usePageTitle("AI Chatbot Development Services | Codo Stack");
  return (
    <div className="mt-32">
      <Botheader />
      <Resellerpage />
      <Botcontent />
      <Botanimation />
      <Botcontents1 />
      <Webregister />
      <Footer />
    </div>
  );
};

export default ChatbotPage;
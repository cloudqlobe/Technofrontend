import React from 'react';
import Footer from '../../../components/Footer';
import Webregister from '../../../components/Webregister';
import Botcontents1 from '../../../components/Botcontents1';
import Botanimation from '../../../components/Botanimation';
import Botcontent from '../../../components/Botcontent';
import Botheader from '../../../components/Botheader';
import Resellerpage from '../../../components/Resellerpage';
import { Helmet } from 'react-helmet';

const ChatbotPage = () => {
  return (
    <div className="mt-32">
      <Helmet>
        <title>AI Chatbot Development Services | Codo Stack</title>
      </Helmet>
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
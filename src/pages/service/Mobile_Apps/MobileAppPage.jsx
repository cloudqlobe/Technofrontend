import React from 'react';
import Mobheader from '../../../components/Mobheader';
import Footer from '../../../components/Footer';
import Webregister from '../../../components/Webregister';
import Mobcontent from '../../../components/Mobcontent';
import Mobanimation from '../../../components/Mobanimation';
import Mobcontent1 from '../../../components/Mobcontent1';
import Resellerpage from '../../../components/Resellerpage';
import { Helmet } from 'react-helmet';

const MobileAppPage = () => {
  return (
    <div className="mt-32">
            <Helmet>
        <title>Mobile App Development Company in India | Codo Stack</title>
      </Helmet>
      <Mobheader/>
      <Resellerpage/>
      <Mobcontent/>
      <Mobanimation/>
      <Mobcontent1/>
      <Webregister/>
      <Footer/>
  
    </div>
  );
};

export default MobileAppPage;
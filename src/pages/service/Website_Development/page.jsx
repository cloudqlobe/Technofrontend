import React from 'react';
import Footer from '../../../components/Footer';

import Webheader from '../../../components/Webheader';
import Webcontents from '../../../components/Webcontents';
import Webanimation from '../../../components/Webanimation';
import Webcontnet2 from '../../../components/Webcontnet2';
import Webregister from '../../../components/Webregister';
import Resellerpage from '../../../components/Resellerpage';




const WebsitePage = () => {
  return (
    <div className="mt-32">
      <Webheader/>
      <Resellerpage/>
     <Webcontents/>
   <Webanimation/>
   <Webcontnet2/>
   <Webregister/>
    
      <Footer/>
    
    </div>
  );
};

export default WebsitePage;

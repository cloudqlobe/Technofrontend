import React from 'react';
import Footer from '../../../components/Footer';

import Webheader from '../../../components/Webheader';
import Webcontents from '../../../components/Webcontents';
import Webanimation from '../../../components/Webanimation';
import Webcontnet2 from '../../../components/Webcontnet2';




const WebsitePage = () => {
  return (
    <div className="mt-32">
      <Webheader/>
     <Webcontents/>
   <Webanimation/>
   <Webcontnet2/>
    
      <Footer/>
    
    </div>
  );
};

export default WebsitePage;

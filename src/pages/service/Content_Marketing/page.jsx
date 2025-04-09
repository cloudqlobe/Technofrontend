import React from 'react';
import Footer from '../../../components/Footer';
import Webregister from '../../../components/Webregister';
import Techheader from '../../../components/Techheader';
import Techcontent1 from '../../../components/Techcontent1';
import Techcontent from '../../../components/Techcontent';
import Techanimation from '../../../components/Techanimation';

const MarketingPage = () => {
  return (
    <div className="mt-32">
      <Techheader/>
      <Techcontent/>
      <Techanimation/>
      <Techcontent1/>
    <Webregister/>
   <Footer/>
    </div>
  );
};

export default MarketingPage;
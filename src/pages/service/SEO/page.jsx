import React from 'react';
import Footer from '../../../components/Footer';
import Hostingheader from '../../../components/Hostingheader';
import Hostingcontent from '../../../components/Hostingcontent';
import Hostinganimation from '../../../components/Hostinganimation';
import Hostingcontent2 from '../../../components/Hostingcontent2';
import Webregister from '../../../components/Webregister';
import Resellerpage from '../../../components/Resellerpage';

const SEOPage = () => {
  return (
    <div className="mt-32">
      <Hostingheader/>
      <Resellerpage/>
      <Hostingcontent/>
      <Hostinganimation/>
      <Hostingcontent2/>
      <Webregister/>
      <Footer/>

   
    </div>
  );
};

export default SEOPage;
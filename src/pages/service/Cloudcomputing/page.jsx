import React from 'react';
import Footer from '../../../components/Footer';
import Webregister from '../../../components/Webregister';
import Cloudheader from '../../../components/Cloudheader';
import Cloudcontent from '../../../components/Cloudcontent';
import Cloudanimation from '../../../components/Cloudanimation';
import Cloudcontents1 from '../../../components/Cloudcontents1';
import Resellerpage from '../../../components/Resellerpage';

const Page = () => {
  return (
    <div>
      <Cloudheader/>
      <Resellerpage/>
      <Cloudcontent/>
      <Cloudanimation/>
      <Cloudcontents1/>
         <Webregister />
      <Footer />
    </div>   
  );
};

export default Page;

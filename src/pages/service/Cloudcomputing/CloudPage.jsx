import React from 'react';
import Footer from '../../../components/Footer';
import Webregister from '../Website_Development/Components/Webregister';

import Resellerpage from '../../../components/Resellerpage';
import usePageTitle from '../../../hooks/usePageTitle';
import Cloudheader from './Components/Cloudheader';
import Cloudcontent from './Components/Cloudcontent';
import CloudAnimation from './Components/Cloudanimation';
import Cloudcontents1 from './Components/Cloudcontents1';

const CloudPage = () => {
  usePageTitle("Secure & Scalable Cloud Services for Business | Codo Stack");
  return (
    <div>
      <Cloudheader />
      <Resellerpage />
      <Cloudcontent />
      <CloudAnimation />
      <Cloudcontents1 />
      <Webregister />
      <Footer />
    </div>
  );
};

export default CloudPage;

import React from 'react';
import Footer from '../../../components/Footer';
import Webregister from '../../../components/Webregister';
import Cloudheader from '../../../components/Cloudheader';
import Cloudcontent from '../../../components/Cloudcontent';
import Cloudanimation from '../../../components/Cloudanimation';
import Cloudcontents1 from '../../../components/Cloudcontents1';
import Resellerpage from '../../../components/Resellerpage';
import { Helmet } from 'react-helmet';

const CloudPage = () => {
  return (
    <div>
      <Helmet>
        <title>Secure & Scalable Cloud Services for Business | Codo Stack</title>
      </Helmet>
      <Cloudheader />
      <Resellerpage />
      <Cloudcontent />
      <Cloudanimation />
      <Cloudcontents1 />
      <Webregister />
      <Footer />
    </div>
  );
};

export default CloudPage;

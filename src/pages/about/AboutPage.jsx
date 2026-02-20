import React from 'react';
import { Helmet } from "react-helmet";
import Footer from '../../components/Footer';
import Webregister from '../../components/Webregister';
import Aboutcontent1 from '../../components/Aboutcontent1';
import Aboutheader from '../../components/Aboutheader';
import Aboutcontent from '../../components/Aboutcontent';
import Aboutanimation from '../../components/Aboutanimation';

import Resellerpage from '../../components/Resellerpage';

const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title>About Us | Codo Stack</title>
      </Helmet>
      <Aboutheader />
      <Resellerpage />
      <Aboutcontent />
      <Aboutanimation />
      <Aboutcontent1 />
      <Webregister />
      <Footer />
    </div>
  );
};

export default AboutPage;
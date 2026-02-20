import React from 'react';
import Footer from '../../../components/Footer';
import Hostingheader from '../../../components/Hostingheader';
import Hostingcontent from '../../../components/Hostingcontent';
import Hostinganimation from '../../../components/Hostinganimation';
import Hostingcontent2 from '../../../components/Hostingcontent2';
import Webregister from '../../../components/Webregister';
import Resellerpage from '../../../components/Resellerpage';
import { Helmet } from 'react-helmet';

const SEOPage = () => {
  return (
    <div className="mt-32">
                  <Helmet>
        <title>SEO & Digital Marketing Services in India | Codo Stack</title>
      </Helmet>
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
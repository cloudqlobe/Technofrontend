import React from 'react';
import Footer from '../../../components/Footer';
import Webregister from '../Website_Development/Components/Webregister';
import Resellerpage from '../../../components/Resellerpage';
import usePageTitle from '../../../hooks/usePageTitle';
import HostingHeader from './Components/Hostingheader';
import Hostingcontent from './Components/Hostingcontent';
import Hostingcontent2 from './Components/Hostingcontent2';
import Hostinganimation from './Components/Hostinganimation';

const SEOPage = () => {
   usePageTitle("SEO & Digital Marketing Services in India | Codo Stack");
  return (
    <div className="mt-32">
      <HostingHeader/>
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
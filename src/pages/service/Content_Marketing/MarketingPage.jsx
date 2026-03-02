import React from 'react';
import Footer from '../../../components/Footer';
import Webregister from '../Website_Development/Components/Webregister';

import Resellerpage from '../../../components/Resellerpage';
import usePageTitle from '../../../hooks/usePageTitle';
import Techheader from './Components/Techheader';
import Techcontent from './Components/Techcontent';
import Techanimation from './Components/Techanimation';
import Techcontent1 from './Components/Techcontent1';

const MarketingPage = () => {
 usePageTitle("Content Marketing Services to Grow Your Brand | Codo Stack");
  return (
    <div className="mt-32">
      <Techheader />
      <Resellerpage />
      <Techcontent />
      <Techanimation />
      <Techcontent1 />
      <Webregister />
      <Footer />
    </div>
  );
};

export default MarketingPage;
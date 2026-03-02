import React from 'react';
import Footer from '../../../components/Footer';
import Webregister from '../Website_Development/Components/Webregister';
import Resellerpage from '../../../components/Resellerpage';
import usePageTitle from '../../../hooks/usePageTitle';
import Designheader from './Components/Designheader';
import Designcontent from './Components/Designcontent';
import Designanimation from './Components/Designanimation';
import Designcontents1 from './Components/Designcontents1';

const DesignPage = () => {
   usePageTitle("UI UX Design Services for Web & Mobile | Codo Stack");
  return (
    <div className="mt-32">
      <Designheader />
      <Resellerpage />
      <Designcontent />
      <Designanimation />
      <Designcontents1 />
      <Webregister />
      <Footer />

    </div>
  );
};

export default DesignPage;
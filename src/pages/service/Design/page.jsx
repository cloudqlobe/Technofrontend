import React from 'react';
import Footer from '../../../components/Footer';
import Webregister from '../../../components/Webregister';

import Designheader from '../../../components/Designheader';

import Designcontents1 from '../../../components/Designcontents1';
import Designanimation from '../../../components/Designanimation';
import Designcontent from '../../../components/Designcontent';

const Design_Page = () => {
  return (
    <div className="mt-32">
    <Designheader/>
   <Designcontent/>
    <Designanimation/>
    <Designcontents1/>

      <Webregister/>
      <Footer/>
  
    </div>
  );
};

export default Design_Page;
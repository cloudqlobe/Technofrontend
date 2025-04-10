import React from 'react';
import Footer from '../../../components/Footer';
import Webregister from '../../../components/Webregister';
import Erpheader from '../../../components/Erpheader';
import Erpcontent from '../../../components/Erpcontent';
import Erpanimation from '../../../components/Erpanimation';
import Erpcontents1 from '../../../components/Erpcontents1';

const ERPPage = () => {
  return (
    <div className="mt-32">
      <Erpheader/>
      <Erpcontent/>
      <Erpanimation/>
      <Erpcontents1/>
      <Webregister/>
  <Footer/>
    </div>
  );
};

export default ERPPage;
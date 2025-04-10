import React from 'react';
import Footer from '../../../components/Footer';
import Webregister from '../../../components/Webregister';
import Billingheader from '../../../components/Billingheader';
import Billingcontents1 from '../../../components/Billingcontents1';
import Billinganimation from '../../../components/Billinganimation';
import Billingcontent from '../../../components/Billingcontent';

const Billing_Software_Page = () => {
  return (
    <div className="mt-32">
      <Billingheader/>
      <Billingcontent/>
      <Billinganimation/>
      <Billingcontents1/>
      <Webregister/>
   <Footer/>
    </div>
  );
};

export default Billing_Software_Page;
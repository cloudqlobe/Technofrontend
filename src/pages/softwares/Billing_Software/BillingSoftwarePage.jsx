import React from 'react';
import Footer from '../../../components/Footer';
import Webregister from '../../../components/Webregister';
import Billingheader from '../../../components/Billingheader';
import Billingcontents1 from '../../../components/Billingcontents1';
import Billinganimation from '../../../components/Billinganimation';
import Billingcontent from '../../../components/Billingcontent';
import Resellerpage from '../../../components/Resellerpage';
import usePageTitle from '../../../hooks/usePageTitle';

const BillingSoftwarePage = () => {
   usePageTitle("Billing & Invoicing Software Development | Codo Stack");
  return (
    <div className="mt-32">
      <Billingheader/>
      <Resellerpage/>
      <Billingcontent/>
      <Billinganimation/>
      <Billingcontents1/>
      <Webregister/>
   <Footer/>
    </div>
  );
};

export default BillingSoftwarePage;
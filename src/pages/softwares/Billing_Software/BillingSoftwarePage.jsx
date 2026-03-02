import React from 'react';
import Billingheader from './Components/Billingheader';
import Billingcontents1 from './Components/Billingcontents1';
import Billinganimation from './Components/Billinganimation';
import Billingcontent from './Components/Billingcontent';
import Webregister from '../../service/Website_Development/Components/Webregister';
import Footer from '../../../components/Footer';
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
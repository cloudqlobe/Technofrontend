import React from 'react';
import Footer from '../../../components/Footer';
import Webregister from '../../../components/Webregister';
import Billingheader from '../../../components/Billingheader';
import Billingcontents1 from '../../../components/Billingcontents1';
import Billinganimation from '../../../components/Billinganimation';
import Billingcontent from '../../../components/Billingcontent';
import Resellerpage from '../../../components/Resellerpage';
import { Helmet } from 'react-helmet';

const BillingSoftwarePage = () => {
  return (
    <div className="mt-32">
      <Helmet>
  <title>Billing & Invoicing Software Development | Codo Stack</title>
</Helmet>
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
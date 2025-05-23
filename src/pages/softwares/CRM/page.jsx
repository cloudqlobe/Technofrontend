import React from 'react';
import Crmheader from '../../../components/Crmheader';
import Crmcontent from '../../../components/Crmcontent';
import Crmanimation from '../../../components/Crmanimation';
import Crmcontent1 from '../../../components/Crmcontent1';
import Footer from '../../../components/Footer';
import Webregister from '../../../components/Webregister';
import Resellerpage from '../../../components/Resellerpage';

const CRMPage = () => {
  return (
    <div className="mt-32">
      <Crmheader/>
      <Resellerpage/>
      <Crmcontent/>
      <Crmanimation/>
      <Crmcontent1/>
      <Webregister/>
      <Footer/>
    </div>
  );
};

export default CRMPage;
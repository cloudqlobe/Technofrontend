import React from 'react';
import Footer from '../../../components/Footer';
import Webregister from '../../service/Website_Development/Components/Webregister';
import Resellerpage from '../../../components/Resellerpage';
import usePageTitle from '../../../hooks/usePageTitle';
import ERPHeader from './Components/Erpheader';
import Erpcontent from './Components/Erpcontent';
import Erpanimation from './Components/Erpanimation';
import Erpcontents1 from './Components/Erpcontents1';

const ERPPage = () => {
   usePageTitle("ERP Software Development for Businesses | Codo Stack");
  return (
    <div className="mt-32">
      <ERPHeader/>
      <Resellerpage/>
      <Erpcontent/>
      <Erpanimation/>
      <Erpcontents1/>
      <Webregister/>
  <Footer/>
    </div>
  );
};

export default ERPPage;